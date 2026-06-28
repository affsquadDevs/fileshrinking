import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir WebP — Compresor y conversor gratis",
  metaDescription:
    "Comprime WebP o convierte JPEG y PNG a WebP en tu navegador. Con o sin pérdida, privado y local: sin subidas, nada sale de tu dispositivo.",
  heading: "Compresor y conversor de WebP",
  intro: (
    <>
      Comprime imágenes WebP existentes o convierte JPEG, PNG y otros formatos a
      WebP, todo en tu navegador. Elige un nivel de calidad, suelta tus archivos
      y descarga imágenes más pequeñas en segundos. Nunca se sube nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir o convertir a WebP",
    description:
      "Comprime WebP o convierte imágenes a WebP de forma local en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tus imágenes",
        text: "Arrastra y suelta archivos WebP, JPEG, PNG, AVIF o GIF sobre la zona de carga, haz clic para examinar o pega desde el portapapeles. Añade varios a la vez si quieres.",
      },
      {
        name: "Elige un nivel de calidad",
        text: "Usa el control deslizante de calidad o un ajuste predefinido. Un valor en torno a 80 es un equilibrio excelente entre tamaño reducido y fidelidad visual para la mayoría de fotos y gráficos.",
      },
      {
        name: "Deja que se convierta en tu dispositivo",
        text: "Cada imagen se codifica a WebP de forma local con WebAssembly. Verás el tamaño original, el nuevo tamaño WebP y el porcentaje ahorrado para cada archivo.",
      },
      {
        name: "Descarga tus archivos WebP",
        text: "Descarga las imágenes una a una o todas a la vez en un ZIP. Ajusta la calidad y vuelve a ejecutar cuando quieras para comparar.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis archivos WebP a un servidor?",
      a: (
        <>
          No. Todo ocurre localmente en tu navegador con WebAssembly. Tus
          imágenes se leen en memoria, se convierten y se te devuelven: no hay
          ningún servidor al que subirlas y puedes seguir trabajando sin conexión
          una vez cargada la página.
        </>
      ),
      text: "No. Todo ocurre localmente en tu navegador con WebAssembly. Tus imágenes se leen en memoria, se convierten y se te devuelven. No hay ningún servidor al que subirlas y puedes seguir trabajando sin conexión una vez cargada la página.",
    },
    {
      q: "¿El compresor de WebP es realmente gratis?",
      a: (
        <>
          Sí: es completamente gratis, sin registro, sin marcas de agua y sin
          límites en el número o el tamaño de los archivos más allá de lo que
          permita la memoria de tu dispositivo. Unos anuncios discretos mantienen
          el sitio en marcha.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin límites en el número o el tamaño de los archivos más allá de lo que permita la memoria de tu dispositivo. Unos anuncios discretos mantienen el sitio en marcha.",
    },
    {
      q: "¿Cómo afecta a la calidad de la imagen convertir a WebP?",
      a: (
        <>
          El WebP con pérdida descarta algo de detalle para reducir el archivo,
          muy parecido a JPEG, pero es más eficiente: un WebP suele ser un
          25-35&nbsp;% más pequeño que un JPEG con la misma calidad visible. Con
          calidad 75-85 el resultado suele ser indistinguible del original. Elige
          WebP sin pérdida si necesitas una copia perfecta píxel a píxel.
        </>
      ),
      text: "El WebP con pérdida descarta algo de detalle para reducir el archivo, muy parecido a JPEG, pero es más eficiente: un WebP suele ser un 25-35 % más pequeño que un JPEG con la misma calidad visible. Con calidad 75-85 el resultado suele ser indistinguible del original. Elige WebP sin pérdida si necesitas una copia perfecta píxel a píxel.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: (
        <>
          No hay un límite fijo: depende de la memoria disponible de tu
          dispositivo. Las fotos típicas de unos pocos megabytes y las imágenes
          grandes de 20-50&nbsp;MP funcionan sin problema, y los lotes se procesan
          archivo por archivo para mantener bajo el uso de memoria.
        </>
      ),
      text: "No hay un límite fijo; depende de la memoria disponible de tu dispositivo. Las fotos típicas de unos pocos megabytes y las imágenes grandes de 20-50 MP funcionan sin problema, y los lotes se procesan archivo por archivo para mantener bajo el uso de memoria.",
    },
    {
      q: "¿Puedo convertir archivos JPEG y PNG a WebP?",
      a: (
        <>
          Sí. Esta herramienta acepta JPEG, PNG, WebP, AVIF y GIF y genera WebP,
          por lo que funciona tanto como recompresor de archivos WebP existentes
          como conversor desde otros formatos. La transparencia de los archivos
          PNG se conserva porque WebP admite un canal alfa.
        </>
      ),
      text: "Sí. Esta herramienta acepta JPEG, PNG, WebP, AVIF y GIF y genera WebP, por lo que funciona tanto como recompresor de archivos WebP existentes como conversor desde otros formatos. La transparencia de los archivos PNG se conserva porque WebP admite un canal alfa.",
    },
    {
      q: "¿Debería usar WebP con pérdida o sin pérdida?",
      a: (
        <>
          Usa WebP con pérdida para fotografías e imágenes complejas donde el
          tamaño mínimo es lo que importa y la pérdida de detalle es invisible.
          Usa WebP sin pérdida para logotipos, iconos, capturas de pantalla y
          gráficos con colores planos o texto nítido, donde quieres una
          reproducción exacta sin artefactos.
        </>
      ),
      text: "Usa WebP con pérdida para fotografías e imágenes complejas donde el tamaño mínimo es lo que importa y la pérdida de detalle es invisible. Usa WebP sin pérdida para logotipos, iconos, capturas de pantalla y gráficos con colores planos o texto nítido, donde quieres una reproducción exacta sin artefactos.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué comprimir y convertir a WebP?</h2>
      <p>
        WebP es un formato de imagen moderno creado específicamente para la web,
        y pasarse a él es una de las formas más sencillas de acelerar un sitio
        sin sacrificar el aspecto de las imágenes. Un archivo WebP suele ser un{" "}
        <strong>25-35&nbsp;% más pequeño que un JPEG equivalente</strong> y mucho
        más pequeño que un PNG comparable, lo que se traduce en cargas de página
        más rápidas, menores facturas de ancho de banda y una mejor experiencia
        para los visitantes con conexiones móviles lentas o limitadas.
      </p>
      <p>
        Esta herramienta cumple una doble función. Si ya tienes imágenes WebP,
        las recodifica con la calidad que elijas para exprimir un ahorro
        adicional. Si tienes JPEG, PNG, AVIF o GIF, los convierte a WebP para que
        puedas modernizar de una vez una carpeta entera de recursos. Como todo se
        ejecuta en tu dispositivo con un codificador WebAssembly, tus imágenes
        nunca se suben: una alternativa realmente privada a los conversores
        basados en servidor que envían tus fotos a una máquina remota.
      </p>

      <h2 id="lossy-lossless">WebP con y sin pérdida, y la calidad</h2>
      <p>
        WebP admite dos modos de compresión distintos, y elegir el adecuado es
        importante. El <strong>WebP con pérdida</strong> funciona como JPEG:
        descarta de forma permanente el detalle que el ojo tiene menos
        probabilidades de notar, lo que produce archivos muy pequeños. Es la
        opción correcta para fotografías e imágenes ricas de tono continuo. El
        control deslizante de calidad regula lo agresivo que es esto: los valores
        más altos conservan más detalle a costa de un mayor tamaño, los más bajos
        ahorran más espacio pero pueden introducir artefactos visibles.
      </p>
      <p>
        El <strong>WebP sin pérdida</strong>, en cambio, reproduce cada píxel con
        exactitud, sin ningún artefacto. Es la mejor opción para logotipos,
        iconos, capturas de pantalla y gráficos o texto de color plano, los
        mismos casos en los que normalmente recurrirías a{" "}
        <Link href="/es/compress-png">PNG</Link>, salvo que WebP suele producir un
        archivo más pequeño. Para la mayoría de las fotografías, una calidad con
        pérdida de <strong>75-85</strong> es el punto óptimo: visualmente idéntica
        al original a tamaños de visualización normales, pero con una fracción del
        tamaño. Ten en cuenta que la compresión con pérdida es acumulativa, así
        que convierte siempre desde tu original de máxima calidad y no desde una
        copia ya comprimida.
      </p>

      <h2 id="format">¿Qué es WebP y cuándo deberías usarlo?</h2>
      <p>
        WebP fue desarrollado por Google y combina una compresión con pérdida
        derivada del códec de vídeo VP8 con un eficiente modo sin pérdida. Más
        allá del tamaño puro, admite dos características que los formatos antiguos
        gestionan con torpeza: la <strong>transparencia</strong> (un canal alfa,
        como PNG) y la <strong>animación</strong> (como GIF, pero drásticamente
        más pequeña). Esa combinación permite que un único formato sustituya a
        JPEG, PNG y al GIF animado en muchas situaciones. Puedes leer la
        descripción técnica en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          la referencia de formatos de imagen de MDN
        </a>{" "}
        y una guía práctica para adoptarlo en{" "}
        <a
          href="https://web.dev/articles/serve-images-webp"
          target="_blank"
          rel="noopener noreferrer"
        >
          web.dev
        </a>
        .
      </p>
      <p>
        El soporte de los navegadores es ya prácticamente universal: todas las
        versiones actuales de Chrome, Firefox, Safari y Edge muestran WebP, así
        que es seguro usarlo en toda la web moderna. Si necesitas dar soporte a
        navegadores muy antiguos, mantén una alternativa en JPEG o PNG. Y cuando
        quieras los archivos absolutamente más pequeños y puedas aceptar una
        codificación más lenta,{" "}
        <Link href="/es/compress-avif">AVIF</Link> suele superar a WebP; compara
        ambos con tus propias imágenes. Para hacer el camino inverso, o para
        cambiar entre varios formatos a la vez, usa nuestro{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link>, y si tus
        fuentes son fotografías quizá también te interese nuestro{" "}
        <Link href="/es/compress-jpeg">compresor de JPEG</Link> específico.
      </p>

      <h2 id="tips">Consejos para obtener los mejores resultados con WebP</h2>
      <ul>
        <li>
          <strong>Ajusta el modo al contenido.</strong> Usa WebP con pérdida para
          fotos y WebP sin pérdida para logotipos, capturas de pantalla y
          gráficos planos con bordes nítidos.
        </li>
        <li>
          <strong>Redimensiona antes de codificar.</strong> Si una imagen se va a
          mostrar a 1200&nbsp;px de ancho, no hay razón para entregar un archivo
          de 6000&nbsp;px. La opción de redimensionado integrada ahorra mucho más
          que la calidad por sí sola.
        </li>
        <li>
          <strong>Conserva la transparencia a propósito.</strong> Convertir un
          PNG transparente a WebP mantiene el canal alfa, pero aplanarlo a JPEG no
          lo haría. Elige WebP cuando la transparencia importe.
        </li>
        <li>
          <strong>Compara con AVIF.</strong> Para imágenes destacadas y fotos
          grandes, vuelve a pasar el mismo archivo por AVIF y quédate con el que
          dé el menor tamaño a una calidad que te convenza.
        </li>
        <li>
          <strong>Agrupa por tipo de contenido.</strong> Junta tus fotos por un
          lado y tus gráficos por otro para que cada conjunto pueda usar un único
          ajuste de calidad ideal en una sola pasada.
        </li>
      </ul>
    </>
  ),
};
