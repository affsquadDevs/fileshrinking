import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "best-image-formats-for-the-web-2026",
  title: "Los mejores formatos de imagen para la web en 2026",
  description:
    "AVIF y WebP con JPEG como respaldo, cuándo gana PNG, el elemento <picture> y cómo el peso de las imágenes afecta a los Core Web Vitals en 2026.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  authorId: "maya",
  tags: ["Formatos", "Rendimiento web"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Las imágenes siguen siendo lo más pesado en la mayoría de las páginas
        web: normalmente ocupan más bytes que tus scripts, fuentes y hojas de
        estilo juntos. Elegir el formato adecuado es la decisión de rendimiento
        con mayor impacto que puedes tomar, y en 2026 la respuesta por fin se ha
        asentado. La versión corta: recurre primero a <strong>AVIF</strong>,
        usa <strong>WebP</strong> como alternativa y mantén{" "}
        <strong>JPEG</strong> como red de seguridad universal. PNG sigue
        teniendo su papel, pero más reducido de lo que la mayoría supone. Así es
        como conviene plantearlo.
      </p>

      <h2 id="the-modern-stack">El stack de imagen moderno de un vistazo</h2>
      <p>
        Tres formatos con pérdida dominan ahora el contenido fotográfico en la
        web, en orden descendente de eficiencia de compresión:
      </p>
      <ul>
        <li>
          <strong>AVIF</strong>: derivado del códec de vídeo AV1, suele producir
          los archivos más pequeños con una calidad visual dada, a menudo entre
          un 30 y un 50&nbsp;% más pequeños que JPEG y sensiblemente menores que
          WebP. Además admite gama de color amplia, HDR, transparencia y modos
          tanto con pérdida como sin pérdida.
        </li>
        <li>
          <strong>WebP</strong>: un formato de Google algo más antiguo que sigue
          siendo excelente: aproximadamente entre un 25 y un 35&nbsp;% más
          pequeño que JPEG, con soporte de transparencia y animación. Su mayor
          ventaja hoy es la velocidad de codificación y un soporte de navegador
          sólido como una roca.
        </li>
        <li>
          <strong>JPEG</strong>: tiene casi 35 años y soporte universal. Es tu
          respaldo, no tu primera opción, pero se renderizará literalmente en
          todas partes.
        </li>
      </ul>
      <p>
        La buena noticia para 2026 es que esto ya no es una apuesta. AVIF es
        compatible con las versiones actuales de Chrome, Edge, Firefox y Safari,
        y WebP lleva años funcionando en todos los navegadores importantes.
        Puedes consultar la matriz de soporte en tiempo real en la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          referencia de tipos de imagen de MDN
        </a>
        , que registra la disponibilidad por navegador de cada formato.
      </p>

      <h2 id="avif-vs-webp">AVIF o WebP: ¿cuál deberías elegir?</h2>
      <p>
        Si solo puedes servir un formato moderno, la decisión suele reducirse a
        un equilibrio entre el tamaño del archivo y el coste de codificación:
      </p>
      <ul>
        <li>
          <strong>Elige AVIF</strong> cuando los bytes son lo más importante:
          imágenes hero grandes, portfolios de fotografía, cualquier cosa donde
          cada kilobyte cuente para tus métricas de carga. Además gestiona los
          degradados suaves y los cielos con muchos menos artefactos de bandeado
          que JPEG.
        </li>
        <li>
          <strong>Elige WebP</strong> cuando necesites una codificación rápida y
          barata a gran escala, o cuando quieras un único formato moderno con el
          mayor alcance posible y un comportamiento predecible. WebP codifica
          mucho más rápido que AVIF, lo que importa si estás convirtiendo miles
          de imágenes.
        </li>
      </ul>
      <p>
        En realidad no tienes por qué elegir. La respuesta correcta para un
        sitio en producción es ofrecer ambos y dejar que el navegador escoja,
        que es justo para lo que sirve el elemento{" "}
        <code>&lt;picture&gt;</code>. Puedes experimentar con ambos ahora mismo
        con el{" "}
        <Link href="/es/compress-avif">compresor de AVIF</Link> y el{" "}
        <Link href="/es/compress-webp">compresor de WebP</Link> de
        FileShrinking, comparar los tamaños de salida en paralelo y decidir qué
        funciona mejor para tu contenido. Todo se ejecuta en tu navegador, así
        que no se sube nada.
      </p>

      <h2 id="picture-element">Servir el formato adecuado con &lt;picture&gt;</h2>
      <p>
        La forma más limpia de enviar formatos modernos con un respaldo es la
        negociación de contenido en HTML. El elemento{" "}
        <code>&lt;picture&gt;</code> te permite listar fuentes candidatas por
        orden de prioridad; el navegador usa la primera que entiende e ignora
        las demás:
      </p>
      <ul>
        <li>
          Lista primero tu fuente <strong>AVIF</strong>, ya que el formato más
          eficiente debería ganar cuando esté disponible.
        </li>
        <li>
          Lista <strong>WebP</strong> en segundo lugar, para captar cualquier
          navegador que carezca de AVIF pero admita WebP.
        </li>
        <li>
          Pon un <strong>JPEG</strong> (o PNG) corriente en la etiqueta{" "}
          <code>&lt;img&gt;</code> de cierre como respaldo garantizado, y para
          llevar tu texto <code>alt</code>, el <code>width</code> y el{" "}
          <code>height</code>.
        </li>
      </ul>
      <p>
        Como el navegador solo descarga la única fuente que elige, esto te da el
        formato más pequeño que cada visitante puede renderizar sin nada de
        JavaScript ni detección en el servidor. Para conocer el patrón de marcado
        completo, la{" "}
        <a
          href="https://web.dev/articles/serve-responsive-images"
          target="_blank"
          rel="noopener noreferrer"
        >
          guía de imágenes adaptables de web.dev
        </a>{" "}
        explica cómo combinar <code>&lt;picture&gt;</code> con{" "}
        <code>srcset</code> también para cambiar la resolución.
      </p>

      <h2 id="png-still-matters">Cuándo siguen importando PNG (y SVG)</h2>
      <p>
        Los formatos modernos con pérdida están pensados para fotografías. Son
        la herramienta equivocada para gráficos planos, y PNG aún se gana su
        lugar en unos pocos casos concretos:
      </p>
      <ul>
        <li>
          <strong>Gráficos de bordes nítidos con pocos colores</strong>:
          logotipos, iconos, capturas de interfaz y diagramas. El PNG sin
          pérdida mantiene el texto y los bordes definidos, donde la compresión
          con pérdida los emborronaría.
        </li>
        <li>
          <strong>Capturas de pantalla con precisión de píxel</strong> que
          quieras reproducir exactamente, byte a byte.
        </li>
        <li>
          <strong>Másteres de origen</strong> que vayas a volver a editar más
          adelante, ya que PNG es sin pérdida y no acumula pérdida de
          generación.
        </li>
      </ul>
      <p>
        Dicho esto, para muchos de estos trabajos <strong>SVG</strong> es aún
        mejor: los logotipos y los iconos sencillos dibujados como vectores se
        mantienen nítidos a cualquier tamaño y a menudo pesan menos que un
        equivalente rasterizado. Y cuando sí necesites un gráfico rasterizado
        con transparencia en la web, tanto AVIF como WebP admiten también un
        canal alfa, de modo que un WebP sin pérdida a menudo puede superar a PNG
        en tamaño. Si tienes un recurso en el formato equivocado, el{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link> puede
        cambiarlo sin volver a subir nada.
      </p>

      <h2 id="core-web-vitals">El peso de las imágenes y los Core Web Vitals</h2>
      <p>
        La elección del formato no solo afecta a las facturas de ancho de banda:
        repercute directamente en los Core Web Vitals de Google, que influyen
        tanto en la experiencia de usuario como en el posicionamiento en
        buscadores. La métrica más vinculada a las imágenes es el{" "}
        <strong>Largest Contentful Paint (LCP)</strong>: en una página típica,
        el elemento más grande es la imagen hero, así que la rapidez con la que
        llega esa imagen determina en gran medida tu puntuación de LCP. El
        objetivo recomendado es un LCP por debajo de{" "}
        <strong>2,5 segundos</strong> para la mayoría de tus visitas.
      </p>
      <p>Unas cuantas palancas prácticas, en orden aproximado de impacto:</p>
      <ul>
        <li>
          <strong>Reduce los bytes</strong> sirviendo AVIF o WebP en lugar de
          JPEG. Una imagen LCP más pequeña llega antes: esta es la mayor mejora
          individual.
        </li>
        <li>
          <strong>Ajusta las imágenes a sus dimensiones de visualización.</strong>{" "}
          Enviar una foto de 4000&nbsp;px a un hueco de 800&nbsp;px desperdicia
          la mayor parte de la descarga. Usa <code>srcset</code> para servir
          variantes de tamaño adecuado.
        </li>
        <li>
          <strong>Define siempre <code>width</code> y <code>height</code></strong>{" "}
          (o usa <code>aspect-ratio</code> en CSS) para que el navegador reserve
          espacio y evites el desplazamiento de la maquetación, lo que protege
          tu puntuación de CLS.
        </li>
        <li>
          <strong>Evita la carga diferida de la imagen LCP.</strong> Difiere la
          carga de las imágenes por debajo del pliegue, pero deja que la imagen
          hero cargue de inmediato para que no se retrase.
        </li>
      </ul>

      <h2 id="takeaway">La conclusión para 2026</h2>
      <p>
        Para el contenido fotográfico, usa <strong>AVIF</strong> por defecto
        para obtener los archivos más pequeños, ofrece <strong>WebP</strong>{" "}
        como alternativa rápida y ampliamente compatible, y conserva un respaldo
        en <strong>JPEG</strong> dentro de un elemento{" "}
        <code>&lt;picture&gt;</code> para que todos los navegadores reciban algo.
        Reserva <strong> PNG</strong> para gráficos nítidos, capturas de
        pantalla y másteres sin pérdida, y usa <strong>SVG</strong> para
        logotipos e iconos siempre que puedas. Comprime antes de publicar,
        ajusta cada imagen a su hueco y tus Core Web Vitals te lo
        recompensarán.
      </p>
      <p>
        ¿Quieres ponerlo en práctica? Convierte y comprime tus imágenes
        directamente en tu navegador con las herramientas de{" "}
        <Link href="/es/compress-avif">AVIF</Link> y{" "}
        <Link href="/es/compress-webp">WebP</Link>, o cambia de formato con el{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link>: sin
        subidas, sin cuentas y tus archivos nunca salen de tu dispositivo.
      </p>
    </>
  );
}
