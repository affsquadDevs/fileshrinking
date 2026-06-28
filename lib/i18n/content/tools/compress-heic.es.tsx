import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir HEIC — Conversor de HEIC a JPG gratis",
  metaDescription:
    "Convierte fotos HEIC y HEIF del iPhone a JPG, WebP o AVIF en tu navegador, con calidad y tamaño ajustables. Cero subidas: tus fotos no salen del equipo.",
  heading: "Compresor y conversor de HEIC",
  intro: (
    <>
      Convierte las fotos HEIC y HEIF del iPhone en archivos JPG, WebP o AVIF
      compatibles con todo &mdash; y redúcelas con calidad y tamaño ajustables.
      Todo se ejecuta en tu navegador, así que tus fotos nunca se suben.
    </>
  ),
  lastUpdated: "2026-06-28",
  howTo: {
    name: "Cómo convertir y comprimir fotos HEIC",
    description:
      "Convierte imágenes HEIC/HEIF del iPhone a JPG, WebP o AVIF de forma local en tu navegador.",
    steps: [
      {
        name: "Añade tus fotos HEIC",
        text: "Arrastra y suelta tus archivos .heic o .heif sobre la zona de carga, haz clic para explorar o pégalos. Puedes añadir un lote entero de una vez.",
      },
      {
        name: "Elige un formato de salida",
        text: "Elige JPG para la máxima compatibilidad, o WebP/AVIF para los archivos más pequeños. Ajusta un nivel de calidad: alrededor de 80 es ideal para fotos.",
      },
      {
        name: "Convierte en tu dispositivo",
        text: "Cada foto se decodifica con una versión en WebAssembly de libheif y se vuelve a codificar de forma local. Verás el tamaño original y el nuevo de cada archivo.",
      },
      {
        name: "Descarga tus fotos",
        text: "Descarga las imágenes una a una, o consíguelas todas en un ZIP. Ajusta el formato, la calidad o el tamaño y vuelve a procesarlas cuando quieras.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Mis fotos HEIC se suben a un servidor?",
      a: (
        <>
          No. Tus archivos HEIC se decodifican y se vuelven a codificar
          íntegramente en tu navegador mediante WebAssembly: nunca salen de tu
          dispositivo. La mayoría de los demás sitios de &ldquo;conversor de
          HEIC&rdquo; suben tus fotos personales a sus servidores; este no tiene
          ningún servidor al que subirlas, y puedes desconectarte de internet una
          vez cargada la página y seguirá funcionando.
        </>
      ),
      text: "No. Los archivos HEIC se decodifican y se vuelven a codificar íntegramente en tu navegador mediante WebAssembly y nunca salen de tu dispositivo. La mayoría de los demás sitios de conversor de HEIC suben tus fotos personales a un servidor; este no. Puedes desconectarte de internet una vez cargada la página y seguirá funcionando.",
    },
    {
      q: "¿Por qué convertiría HEIC a JPG?",
      a: (
        <>
          HEIC es el formato de foto predeterminado de Apple, pero muchos PC con
          Windows, sitios web, aplicaciones y dispositivos antiguos no pueden
          abrirlo. Convertir a JPG (o WebP/AVIF) hace que tus fotos se abran en
          todas partes, para que puedas compartirlas, subirlas y editarlas sin
          errores de compatibilidad.
        </>
      ),
      text: "HEIC es el formato de foto predeterminado de Apple pero muchos PC con Windows, sitios web, aplicaciones y dispositivos antiguos no pueden abrirlo. Convertir a JPG, WebP o AVIF hace que las fotos se abran en todas partes para que puedas compartirlas, subirlas y editarlas.",
    },
    {
      q: "¿Convertir reducirá la calidad de mi foto?",
      a: (
        <>
          Convertir a JPEG, WebP o AVIF es con pérdida, así que parte del detalle
          se vuelve a codificar. Con calidad 75&ndash;85 la diferencia
          normalmente es invisible a tamaños de visualización estándar. Mantén la
          calidad alta para ser fiel al original, o bájala (y redimensiona) cuando
          un archivo más pequeño importe más.
        </>
      ),
      text: "Convertir a JPEG, WebP o AVIF es con pérdida, así que parte del detalle se vuelve a codificar. Con calidad 75-85 la diferencia normalmente es invisible. Mantén la calidad alta para ser fiel al original, o bájala y redimensiona cuando un archivo más pequeño importe más.",
    },
    {
      q: "¿Por qué el JPG convertido a veces es más grande que el HEIC?",
      a: (
        <>
          HEIC es un formato extremadamente eficiente: a menudo almacena una foto
          en aproximadamente la mitad del tamaño de un JPEG equivalente. Así que
          una conversión directa de HEIC&rarr;JPEG puede producir, en ocasiones,
          un archivo más grande. Para reducir realmente la foto, elige WebP o AVIF
          (que igualan la eficiencia de HEIC), baja el control deslizante de
          calidad o redimensiona la imagen.
        </>
      ),
      text: "HEIC es muy eficiente y a menudo almacena una foto en aproximadamente la mitad del tamaño de un JPEG equivalente, así que una conversión directa de HEIC a JPEG puede producir un archivo más grande. Para reducir la foto, elige WebP o AVIF, baja el control deslizante de calidad o redimensiona la imagen.",
    },
    {
      q: "¿Cuál es la diferencia entre HEIC y HEIF?",
      a: (
        <>
          HEIF (High Efficiency Image File Format) es el contenedor; HEIC es la
          variante común que usa Apple, en la que la imagen del interior se
          codifica con HEVC (H.265). En el uso cotidiano los nombres son
          intercambiables: esta herramienta acepta tanto archivos .heic como
          .heif.
        </>
      ),
      text: "HEIF (High Efficiency Image File Format) es el contenedor y HEIC es la variante común de Apple en la que la imagen se codifica con HEVC (H.265). Los nombres se usan de forma intercambiable; esta herramienta acepta tanto archivos .heic como .heif.",
    },
    {
      q: "¿Puedo convertir varias fotos HEIC a la vez?",
      a: (
        <>
          Sí. Suelta un lote entero &mdash; por ejemplo una carpeta de fotos
          enviadas por AirDrop desde tu iPhone &mdash; y se convierten de una en
          una; luego puedes descargarlas individualmente o todas juntas en un ZIP.
        </>
      ),
      text: "Sí. Añade un lote entero de fotos HEIC y se convierten de una en una, luego se descargan individualmente o todas juntas en un ZIP.",
    },
    {
      q: "¿El conversor de HEIC es gratuito?",
      a: (
        <>
          Completamente gratis: sin registro, sin marcas de agua y sin límites de
          número de archivos ni de tamaño más allá de la memoria de tu
          dispositivo. El sitio se mantiene con anuncios discretos, y el código es
          de código abierto para que puedas verificar exactamente lo que hace.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, marcas de agua ni límites de archivos más allá de la memoria de tu dispositivo. El sitio se mantiene con anuncios discretos y el código es de código abierto.",
    },
  ],
  content: (
    <>
      <h2 id="why-convert">¿Por qué convertir archivos HEIC?</h2>
      <p>
        Desde iOS 11, los iPhone y iPad guardan las fotos como{" "}
        <strong>HEIC</strong> de forma predeterminada. Es un formato estupendo
        para ahorrar espacio en tu dispositivo, pero tiene un gran inconveniente:
        la <strong>compatibilidad</strong>. Muchos PC con Windows, aplicaciones
        web, gestores de contenido, impresoras de fotos y teléfonos antiguos
        todavía no pueden abrir un archivo .heic, lo que provoca el demasiado
        habitual error de &ldquo;formato no compatible&rdquo; cuando intentas
        compartir o subir una imagen.
      </p>
      <p>
        Convertir tus fotos HEIC a un formato ampliamente compatible como{" "}
        <strong>JPG</strong>, <strong>WebP</strong> o <strong>AVIF</strong> lo
        soluciona al instante: la imagen se abre en todas partes, mientras
        conservas el control sobre la calidad y el tamaño del archivo. Y como
        esta herramienta se ejecuta enteramente en tu dispositivo, tus fotos
        personales nunca se suben al servidor de nadie.
      </p>

      <h2 id="what-is-heic">¿Qué es HEIC (y HEIF)?</h2>
      <p>
        HEIC significa <em>High Efficiency Image Container</em>. Es la
        implementación de Apple del estándar <strong>HEIF</strong> (High
        Efficiency Image File Format), en el que la imagen real se comprime con{" "}
        <strong>HEVC (H.265)</strong>, el mismo códec de vídeo moderno que se usa
        para vídeo eficiente. Esa compresión avanzada es la razón por la que una
        foto HEIC ocupa normalmente alrededor de la <strong>mitad del tamaño</strong>{" "}
        de un JPEG equivalente con la misma calidad visual, y también por la que
        puede almacenar extras como mapas de profundidad, Live Photos y un color
        más amplio. Puedes leer más sobre cómo los navegadores manejan los
        formatos de imagen en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          la referencia de formatos de imagen de MDN
        </a>
        . La decodificación aquí está impulsada por{" "}
        <a
          href="https://github.com/strukturag/libheif"
          target="_blank"
          rel="noopener noreferrer"
        >
          libheif
        </a>
        , la biblioteca de código abierto para HEIF/HEIC, compilada a
        WebAssembly.
      </p>

      <h2 id="compress-vs-convert">
        Comprimir frente a convertir: qué esperar
      </h2>
      <p>
        Aquí va un punto honesto que la mayoría de los conversores no te dirán:
        como HEIC ya es tan eficiente, una conversión simple de
        HEIC&nbsp;&rarr;&nbsp;JPEG{" "}
        <strong>no siempre hará el archivo más pequeño</strong> &mdash; y a veces
        puede hacerlo un poco más grande. No es un fallo; es el coste de pasar a
        la compresión más antigua y más compatible de JPEG.
      </p>
      <p>
        Si tu objetivo es realmente conseguir archivos más pequeños, tienes tres
        palancas, y puedes combinarlas:
      </p>
      <ul>
        <li>
          <strong>Elige WebP o AVIF en lugar de JPEG.</strong> Estos formatos
          modernos rivalizan con la eficiencia de HEIC, así que conservas el
          tamaño pequeño <em>y</em> ganas amplia compatibilidad. AVIF, igual que
          HEIC, se basa en tecnología de códecs moderna y normalmente produce el
          resultado más pequeño.
        </li>
        <li>
          <strong>Baja el control deslizante de calidad.</strong> Pasar de 90 a
          70&ndash;75 recorta el archivo sustancialmente con poco cambio visible.
        </li>
        <li>
          <strong>Redimensiona la imagen.</strong> Una foto de teléfono de
          4032&times;3024 es mucho más grande de lo que necesita cualquier
          pantalla. Reducirla es el mayor ahorro individual para compartir o para
          la web.
        </li>
      </ul>

      <h2 id="choosing-format">JPEG, WebP o AVIF: cuál elegir</h2>
      <p>
        <strong>JPEG</strong> es la opción segura por defecto: todos los
        dispositivos, aplicaciones y sitios web del mundo pueden abrirlo, lo que
        lo hace perfecto para enviar fotos por correo, subirlas a un sitio que
        rechaza HEIC o enviarlas a alguien con Windows.{" "}
        <Link href="/es/compress-jpeg">Comprime JPEG</Link> aún más cuando
        quieras.
      </p>
      <p>
        <strong>WebP</strong> goza de amplio soporte en los navegadores y
        aplicaciones modernos y es aproximadamente un 25&ndash;35% más pequeño que
        JPEG: una gran elección para la web. <strong>AVIF</strong> es el más
        eficiente en espacio de los tres y el pariente más cercano de HEIC, ideal
        cuando el tamaño reducido importa más y tu destino lo admite. ¿No lo
        tienes claro? Convierte una muestra de ambas formas con nuestro{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link> y compara, o
        lee{" "}
        <Link href="/es/blog/jpeg-vs-png-vs-webp-vs-avif">
          nuestra comparativa de formatos
        </Link>
        .
      </p>

      <h2 id="privacy">Privado por diseño, y de código abierto</h2>
      <p>
        Tu carrete es personal. Subirlo a un sitio de conversión cualquiera
        significa entregar a desconocidos copias de tus fotos, incluido todo lo
        que aparezca de fondo. FileShrinking adopta un enfoque distinto: tus
        archivos HEIC se decodifican y se vuelven a codificar{" "}
        <strong>localmente en tu navegador</strong> y nunca se transmiten a
        ninguna parte. Tampoco tienes que fiarte de nuestra palabra: todo el
        proyecto es <Link href="/es/about">de código abierto</Link>, así que la
        promesa de no subir nada es algo que cualquiera puede verificar en el
        código. Aprende más sobre cómo funciona esto en{" "}
        <Link href="/es/blog/how-client-side-file-compression-works">
          nuestra explicación sobre la compresión del lado del cliente
        </Link>
        .
      </p>

      <h2 id="tips">Consejos para obtener los mejores resultados</h2>
      <ul>
        <li>
          <strong>¿Vas a enviárselo a alguien o a subirlo a algún sitio?</strong>{" "}
          Elige JPG: tiene garantizado que se abrirá.
        </li>
        <li>
          <strong>¿Optimizas para la web o el almacenamiento?</strong> Elige AVIF
          o WebP para los archivos más pequeños con la misma calidad.
        </li>
        <li>
          <strong>Redimensiona antes de convertir.</strong> Si la foto se va a ver
          en un teléfono o en un documento, reducirla ahorra mucho más que la
          calidad por sí sola.
        </li>
        <li>
          <strong>Procesa por lotes todo un AirDrop.</strong> Suelta todas las
          fotos de una vez y descárgalas juntas en un ZIP.
        </li>
      </ul>
    </>
  ),
};
