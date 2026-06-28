import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir AVIF — Conversor AVIF gratis",
  metaDescription:
    "Convierte y comprime imágenes a AVIF en tu navegador. Privado, sin subida ni registro: tus archivos nunca salen de tu dispositivo. Archivos diminutos.",
  heading: "Compresor y conversor de AVIF",
  intro: (
    <>
      Convierte imágenes JPEG, PNG, WebP, GIF o AVIF existentes en archivos AVIF
      diminutos y de alta calidad directamente en tu navegador. AVIF es el
      formato de imagen moderno más compacto: elige un nivel de calidad, suelta
      tus fotos y descarga archivos ligerísimos sin que nada se suba nunca a
      ningún sitio.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo convertir y comprimir AVIF",
    description:
      "Crea o recomprime imágenes AVIF localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tus imágenes",
        text: "Arrastra y suelta archivos JPEG, PNG, WebP, GIF o AVIF en la zona de carga, haz clic para explorar o pega desde el portapapeles. Puedes añadir varias a la vez.",
      },
      {
        name: "Elige un nivel de calidad",
        text: "La escala de calidad de AVIF es más baja que la de JPEG: un valor predeterminado en torno a 55 ya se ve estupendo. Súbelo para resultados casi sin pérdidas o bájalo para los archivos más pequeños posibles.",
      },
      {
        name: "Deja que el codificador AV1 trabaje en tu dispositivo",
        text: "Cada imagen se codifica localmente a AVIF. AV1 es intensivo, así que las fotos grandes pueden tardar unos segundos: es lo esperado y es lo que hace que los archivos sean tan pequeños.",
      },
      {
        name: "Descarga tus archivos AVIF",
        text: "Guarda las imágenes de una en una o descárgalas todas en un ZIP. Ajusta la calidad y vuelve a codificar cuando quieras para encontrar tu tamaño ideal.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Mis archivos AVIF se suben a un servidor?",
      a: "No. La codificación ocurre por completo en tu dispositivo mediante un codificador AV1 en WebAssembly. Tus imágenes se cargan en memoria, se convierten a AVIF localmente y se te devuelven: nunca se sube nada, así que incluso puedes desconectarte de internet una vez cargada la página.",
      text: "No. La codificación ocurre por completo en tu dispositivo mediante un codificador AV1 en WebAssembly. Tus imágenes se cargan en memoria, se convierten a AVIF localmente y se te devuelven. Nunca se sube nada, así que puedes desconectarte de internet una vez cargada la página.",
    },
    {
      q: "¿El compresor de AVIF es realmente gratis?",
      a: "Sí: es completamente gratis, sin registro, sin marcas de agua y sin límites de cantidad ni de tamaño de archivos más allá de la memoria de tu dispositivo. El sitio se financia con anuncios discretos.",
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin límites de cantidad ni de tamaño de archivos más allá de la memoria de tu dispositivo. El sitio se financia con anuncios discretos.",
    },
    {
      q: "¿Cómo afecta AVIF a la calidad de la imagen?",
      a: (
        <>
          La compresión AVIF tiene pérdidas, pero su codificador basado en AV1
          conserva el detalle mucho mejor que los formatos antiguos con el mismo
          tamaño de archivo. Ten en cuenta que la escala de calidad se lee de
          forma distinta: un valor en torno a <strong>50–60</strong> en AVIF
          suele verse excelente, mientras que el mismo número en JPEG se vería
          mal. Sube el control deslizante para una fidelidad casi perfecta o
          bájalo para los archivos más pequeños posibles.
        </>
      ),
      text: "La compresión AVIF tiene pérdidas, pero su codificador basado en AV1 conserva el detalle mucho mejor que los formatos antiguos con el mismo tamaño de archivo. La escala de calidad se lee de forma distinta: en torno a 50-60 suele verse excelente, mientras que el mismo número en JPEG se vería mal. Sube el control deslizante para una fidelidad casi perfecta o bájalo para los archivos más pequeños.",
    },
    {
      q: "¿Por qué es lenta la codificación AVIF?",
      a: (
        <>
          AVIF usa el códec AV1, que es muy exigente a nivel de cálculo: hace
          mucho más trabajo por píxel que JPEG o WebP para alcanzar sus tamaños
          de archivo diminutos. Ejecutar ese codificador en el navegador con
          WebAssembly significa que una foto grande puede tardar varios segundos,
          y las imágenes muy grandes (pongamos de más de 20 megapíxeles) pueden
          tardar bastante más. Esto es normal: la espera te compra un archivo
          mucho más pequeño. Redimensionar primero acelera mucho el proceso.
        </>
      ),
      text: "AVIF usa el códec AV1, que es muy exigente a nivel de cálculo y hace mucho más trabajo por píxel que JPEG o WebP. Ejecutar ese codificador en el navegador con WebAssembly significa que una foto grande puede tardar varios segundos, y las imágenes muy grandes pueden tardar bastante más. Esto es normal y redimensionar primero acelera el proceso.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo convertir?",
      a: "No hay un límite rígido: depende de la memoria disponible en tu dispositivo. Las fotos típicas funcionan sin problemas, y también se admiten imágenes grandes de 20–50 MP, aunque se codifican más despacio porque AV1 es intensivo. Los lotes se procesan de un archivo a la vez para mantener bajo el uso de memoria.",
      text: "No hay un límite rígido; depende de la memoria disponible en tu dispositivo. Las fotos típicas funcionan sin problemas y también se admiten imágenes grandes de 20-50 MP, aunque se codifican más despacio porque AV1 es intensivo. Los lotes se procesan de un archivo a la vez para mantener bajo el uso de memoria.",
    },
    {
      q: "¿Qué navegadores pueden abrir archivos AVIF?",
      a: (
        <>
          La compatibilidad de los navegadores ya es amplia: Chrome, Edge,
          Firefox, Safari y Opera muestran AVIF en sus versiones modernas, y la
          mayoría de los móviles también. Para navegadores muy antiguos o algunas
          aplicaciones de escritorio que aún no se han puesto al día, mantén una
          alternativa en <Link href="/es/compress-jpeg">JPEG</Link> o{" "}
          <Link href="/es/compress-webp">WebP</Link>, o sirve el AVIF dentro de
          un elemento <code>&lt;picture&gt;</code> para que el navegador elija el
          mejor formato que pueda leer.
        </>
      ),
      text: "La compatibilidad de los navegadores ya es amplia: Chrome, Edge, Firefox, Safari y Opera muestran AVIF en sus versiones modernas, y la mayoría de los móviles también. Para navegadores muy antiguos o algunas aplicaciones de escritorio, mantén una alternativa en JPEG o WebP, o sirve el AVIF dentro de un elemento picture para que el navegador elija el mejor formato que pueda leer.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué convertir imágenes a AVIF?</h2>
      <p>
        AVIF es el formato de imagen de uso general más compacto disponible hoy.
        Construido sobre el códec de vídeo libre de regalías <strong>AV1</strong>,
        produce de forma habitual archivos <strong>un 30–50&nbsp;% más pequeños
        que WebP</strong> y a menudo la mitad del tamaño de un JPEG comparable,
        con la misma calidad percibida. Para sitios web con muchas fotos, eso se
        traduce directamente en cargas de página más rápidas, mejores Core Web
        Vitals, menores facturas de ancho de banda y una experiencia más fluida
        en conexiones móviles lentas.
      </p>
      <p>
        Más allá del tamaño puro, AVIF aporta funciones genuinamente modernas a
        las imágenes fijas: <strong>transparencia alfa</strong> completa como
        PNG, gama de color amplia y compatibilidad con <strong>HDR</strong> (10 y
        12 bits), y modos con y sin pérdidas en un único formato. Como este
        conversor funciona por completo en tu dispositivo, también es la forma
        privada de adoptar AVIF: a diferencia de los conversores online típicos,
        tus fotos se codifican con una compilación de AV1 en WebAssembly dentro
        de la propia página y nunca viajan a un servidor.
      </p>

      <h2 id="quality">Calidad, la escala de AVIF y la velocidad de codificación</h2>
      <p>
        AVIF se usa normalmente como un formato <strong>con pérdidas</strong>,
        descartando el detalle que el ojo tiene menos probabilidades de echar de
        menos, pero lo hace de forma mucho más inteligente que JPEG, evitando los
        artefactos de bloques que aparecen cuando fuerzas demasiado los formatos
        antiguos. Algo que conviene saber de antemano: los{" "}
        <strong>números de calidad se leen de forma distinta</strong>. Un ajuste
        cercano a <strong>50–60</strong> en AVIF suele verse excelente, donde el
        mismo valor en un JPEG se vería tosco. Por eso esta herramienta usa por
        defecto un valor en torno a <strong>55</strong>: es un punto óptimo, no
        un compromiso.
      </p>
      <p>
        La contrapartida honesta es la <strong>velocidad</strong>. AV1 realiza
        una enorme cantidad de cálculo por píxel para alcanzar esos tamaños
        diminutos, y ejecutarlo en el navegador mediante WebAssembly es más lento
        que una codificación JPEG o WebP. Una foto típica termina en unos
        segundos; una imagen muy grande de más de 20 megapíxeles puede tardar
        bastante más, y un lote grande va sumando. Esto es lo esperado: es el
        coste de la eficiencia de AVIF, no un fallo. Redimensionar antes de
        codificar es la mayor aceleración posible, y además reduce todavía más el
        resultado.
      </p>

      <h2 id="format">¿Qué es AVIF y cuándo deberías usarlo?</h2>
      <p>
        AVIF (AV1 Image File Format) almacena uno o más fotogramas codificados en
        AV1 dentro de un contenedor ISO base media, la misma familia que MP4.
        Admite transparencia, animación, color amplio y HDR, lo que lo convierte
        en un sólido reemplazo único de JPEG, PNG e incluso del GIF animado en
        muchos casos. Puedes leer el desglose completo de capacidades y
        compatibilidad de navegadores en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          la documentación de la imagen AVIF de MDN
        </a>
        .
      </p>
      <p>
        AVIF es una opción predeterminada excelente para fotografías e imágenes
        web ricas destinadas a navegadores modernos. Es menos ideal cuando
        necesitas compatibilidad universal con software antiguo, cuando los
        archivos deben reeditarse muchas veces (cada pasada con pérdidas pierde
        un poco) o para gráficos planos sencillos donde un{" "}
        <Link href="/es/compress-png">PNG</Link> sin pérdidas puede rivalizar con
        él. Si quieres una compatibilidad algo más amplia con una compresión que
        sigue siendo estupenda, <Link href="/es/compress-webp">WebP</Link> es el
        término medio natural, y nuestro{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link> te permite
        comparar formatos en paralelo. Para recortar imágenes de origen
        demasiado grandes antes de codificar, echa mano del{" "}
        <Link href="/es/image-resizer">redimensionador de imágenes</Link>.
      </p>

      <h2 id="tips">Consejos para los mejores resultados con AVIF</h2>
      <ul>
        <li>
          <strong>Fíate de los números más bajos.</strong> No pongas la calidad
          de AVIF a 80–90 por costumbre de JPEG: empieza cerca de 55 y súbela
          solo si realmente notas la diferencia al tamaño de tu pantalla.
        </li>
        <li>
          <strong>Redimensiona antes de codificar.</strong> Enviar una imagen de
          6000&nbsp;px que se muestra a 1200&nbsp;px desperdicia tanto tamaño de
          archivo como tiempo de codificación. Redimensionar primero hace que la
          lenta pasada de AV1 sea muchísimo más rápida.
        </li>
        <li>
          <strong>Mantén una alternativa en JPEG o WebP.</strong> Para el máximo
          alcance, sirve el AVIF dentro de un elemento{" "}
          <code>&lt;picture&gt;</code> con una fuente en{" "}
          <Link href="/es/compress-jpeg">JPEG</Link> o{" "}
          <Link href="/es/compress-webp">WebP</Link> para que los clientes más
          antiguos sigan recibiendo una imagen.
        </li>
        <li>
          <strong>Ten paciencia con los lotes grandes.</strong> El ahorro de
          AVIF merece la espera. Pon tus archivos en cola, deja que el
          codificador los procese uno a uno y descárgalo todo en un ZIP al final.
        </li>
      </ul>
    </>
  ),
};
