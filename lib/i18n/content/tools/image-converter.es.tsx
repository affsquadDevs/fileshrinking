import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Convertidor de imágenes — JPEG, PNG, WebP y AVIF",
  metaDescription:
    "Convierte imágenes entre JPEG, PNG, WebP y AVIF de forma privada en tu navegador. Sin subidas: tus archivos nunca salen de tu dispositivo.",
  heading: "Convertidor de imágenes",
  intro: (
    <>
      Convierte imágenes entre JPEG, PNG, WebP y AVIF directamente en tu
      navegador. Suelta un archivo, elige el formato que necesites y descarga el
      resultado en segundos: cada conversión se ejecuta en tu dispositivo, así
      que nunca se sube nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo convertir una imagen",
    description:
      "Convierte entre JPEG, PNG, WebP y AVIF localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tu imagen",
        text: "Arrastra y suelta un JPEG, PNG, WebP, AVIF o GIF en la zona de carga, haz clic para buscarlo o pégalo desde el portapapeles. Puedes poner varios en cola a la vez.",
      },
      {
        name: "Elige el formato de salida",
        text: "Selecciona JPEG, PNG, WebP o AVIF. Usa WebP o AVIF para obtener los archivos más ligeros y listos para la web, PNG cuando necesites transparencia sin pérdidas, o JPEG para máxima compatibilidad.",
      },
      {
        name: "Ajusta la calidad",
        text: "Para JPEG, WebP y AVIF, ajusta el control deslizante de calidad: alrededor de 80 es un equilibrio excelente. La salida PNG siempre es sin pérdidas, por lo que no hay calidad que definir.",
      },
      {
        name: "Descarga tus archivos convertidos",
        text: "Guarda cada imagen convertida por separado o descárgalas todas a la vez en un ZIP. Cambia el formato o la calidad y vuelve a convertir cuando quieras.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis archivos a un servidor cuando los convierto?",
      a: (
        <>
          No. La conversión ocurre por completo en tu navegador usando códecs
          WebAssembly. La imagen se decodifica y se vuelve a codificar en memoria
          en tu propio dispositivo, así que tus archivos nunca tocan un servidor:
          puedes incluso desconectarte de internet después de cargar la página y
          seguirá funcionando.
        </>
      ),
      text: "No. La conversión ocurre por completo en tu navegador usando códecs WebAssembly. La imagen se decodifica y se vuelve a codificar en memoria en tu propio dispositivo, así que tus archivos nunca tocan un servidor. Puedes desconectarte de internet después de cargar la página y seguirá funcionando.",
    },
    {
      q: "¿El convertidor de imágenes es gratuito?",
      a: (
        <>
          Sí: es completamente gratuito, sin registro, sin marcas de agua y sin
          límites en cuántos archivos conviertes o en su tamaño, más allá de lo
          que permita la memoria de tu dispositivo. El sitio se financia con
          anuncios poco intrusivos.
        </>
      ),
      text: "Sí. Es completamente gratuito, sin registro, sin marcas de agua y sin límites en cuántos archivos conviertes o en su tamaño, más allá de lo que permita la memoria de tu dispositivo. El sitio se financia con anuncios poco intrusivos.",
    },
    {
      q: "¿La conversión afectará a la calidad de la imagen?",
      a: (
        <>
          Depende del formato de destino. Convertir a PNG es sin pérdidas, así
          que no se pierde detalle. Convertir a JPEG, WebP o AVIF es con pérdidas
          y vuelve a codificar la imagen con la calidad que elijas: entre 75 y 85
          es visualmente indistinguible del original para la mayoría de las
          fotos. Como la recodificación con pérdidas se acumula, convierte
          siempre desde tu origen de máxima calidad en lugar de desde una copia
          ya comprimida.
        </>
      ),
      text: "Depende del formato de destino. Convertir a PNG es sin pérdidas, así que no se pierde detalle. Convertir a JPEG, WebP o AVIF es con pérdidas y vuelve a codificar con la calidad que elijas; entre 75 y 85 es visualmente indistinguible del original para la mayoría de las fotos. La recodificación con pérdidas se acumula, así que convierte siempre desde tu origen de máxima calidad.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo convertir?",
      a: (
        <>
          No hay un límite estricto: solo está limitado por la memoria disponible
          de tu dispositivo. Las fotos cotidianas de unos pocos megabytes y las
          imágenes grandes de 20 a 50 MP se convierten sin problemas, y la
          codificación AVIF es la que más usa la CPU, así que las imágenes muy
          grandes simplemente tardan un poco más.
        </>
      ),
      text: "No hay un límite estricto; solo está limitado por la memoria disponible de tu dispositivo. Las fotos cotidianas de unos pocos megabytes y las imágenes grandes de 20 a 50 MP se convierten sin problemas. La codificación AVIF es la que más usa la CPU, así que las imágenes muy grandes tardan un poco más.",
    },
    {
      q: "¿A qué formato debería convertir?",
      a: (
        <>
          Para fotografías con las que quieras amplia compatibilidad, usa JPEG o
          WebP. Para gráficos, logotipos, capturas de pantalla o cualquier cosa
          que necesite transparencia, usa PNG o WebP. Para el archivo más pequeño
          posible con soporte en navegadores modernos, elige AVIF. WebP es la
          opción más segura para todo porque admite tanto fotos con pérdidas como
          transparencia sin pérdidas.
        </>
      ),
      text: "Para fotografías con las que quieras amplia compatibilidad, usa JPEG o WebP. Para gráficos, logotipos, capturas de pantalla o cualquier cosa que necesite transparencia, usa PNG o WebP. Para el archivo más pequeño posible con soporte en navegadores modernos, elige AVIF. WebP es la opción más segura para todo, ya que admite tanto fotos con pérdidas como transparencia sin pérdidas.",
    },
    {
      q: "¿Qué pasa con la transparencia cuando convierto a JPEG?",
      a: (
        <>
          JPEG no admite un canal alfa, así que cualquier zona transparente se
          aplana sobre un fondo sólido al convertir a JPEG. Si tu imagen depende
          de la transparencia (por ejemplo, un logotipo pensado para ir sobre
          distintos fondos), convierte a PNG o WebP en su lugar, ya que ambos
          conservan el canal alfa.
        </>
      ),
      text: "JPEG no admite un canal alfa, así que las zonas transparentes se aplanan sobre un fondo sólido al convertir a JPEG. Si tu imagen depende de la transparencia, como un logotipo, convierte a PNG o WebP en su lugar, ya que ambos conservan el canal alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué convertir entre formatos de imagen?</h2>
      <p>
        No todos los formatos de imagen son adecuados para cada tarea. Un
        logotipo guardado como JPEG se ve borroso en sus bordes; una fotografía
        guardada como PNG puede ser varias veces más grande de lo necesario; y un
        GIF de hace una década ocupa mucho más espacio que un equivalente
        moderno. Convertir una imagen a un formato más adecuado puede hacerla
        mucho más pequeña, más nítida o más compatible con aquello en lo que
        estés publicando, sin tener que volver a fotografiar ni rediseñar nada.
      </p>
      <p>
        La razón más habitual por la que la gente convierte es para reducir las
        imágenes para la web. Pasar una foto de JPEG a{" "}
        <Link href="/es/compress-webp">WebP</Link> o{" "}
        <Link href="/es/compress-avif">AVIF</Link> puede recortar su tamaño entre
        una cuarta parte y la mitad con la misma calidad visual, lo que significa
        páginas más rápidas y menores costes de ancho de banda. Otros convierten
        en la dirección contraria: transforman un WebP o AVIF de vuelta a un JPEG
        o PNG compatible universalmente para que se abra en software más antiguo o
        se pueda adjuntar a un correo. Como este convertidor se ejecuta
        íntegramente en tu dispositivo, puedes hacer todo eso sin entregar tus
        imágenes a un servidor remoto.
      </p>

      <h2 id="lossy">Conversión sin pérdidas y con pérdidas: qué cambia</h2>
      <p>
        Convertir una imagen siempre implica decodificarla y volver a
        codificarla en un formato nuevo, y el formato que elijas decide si ese
        paso es <strong>sin pérdidas</strong> o <strong>con pérdidas</strong>.
        PNG es sin pérdidas: cada píxel se conserva exactamente, por eso es ideal
        para gráficos y capturas de pantalla, pero produce archivos grandes para
        las fotos. JPEG, WebP y AVIF son con pérdidas de forma predeterminada:
        descartan el detalle que tu ojo es menos probable que eche en falta para
        hacer el archivo mucho más pequeño, y un control deslizante de calidad
        determina lo agresivo que es ese compromiso.
      </p>
      <p>
        Algo clave que hay que entender es que la conversión con pérdidas{" "}
        <strong>se acumula</strong>. Cada vez que vuelves a codificar una imagen
        que ya es con pérdidas, se descarta un poco más de detalle, así que
        deberías convertir siempre desde el origen de mayor calidad que tengas en
        lugar de desde una copia que ya ha sido comprimida. Convertir un JPEG con
        pérdidas <em>a</em> PNG tampoco restaurará por arte de magia el detalle
        perdido: simplemente almacena los píxeles ya degradados sin pérdidas,
        normalmente en un archivo más grande. Para las fotos, una calidad de{" "}
        <strong>75 a 85</strong> en JPEG, WebP o AVIF es el punto óptimo en el que
        el resultado es esencialmente indistinguible del original a tamaños de
        visualización normales.
      </p>

      <h2 id="formats">Una guía rápida de los cuatro formatos</h2>
      <p>
        Cada formato tiene una tarea que hace mejor. <strong>JPEG</strong> es el
        formato fotográfico universal: compatible en todas partes, estupendo para
        imágenes de tono continuo, pero sin transparencia. <strong>PNG</strong>{" "}
        es sin pérdidas y admite un canal alfa, lo que lo convierte en la opción
        adecuada para logotipos, iconos, capturas de pantalla y cualquier gráfico
        que necesite bordes nítidos o un fondo transparente. <strong>WebP</strong>{" "}
        es el todoterreno moderno: gestiona tanto fotos con pérdidas como
        transparencia sin pérdidas y suele ser entre un 25 % y un 35 % más
        pequeño que JPEG. <strong>AVIF</strong> normalmente produce los archivos
        más pequeños de todos y también admite transparencia, a costa de una
        codificación más lenta y un soporte de software algo más limitado. Puedes
        leer un desglose autorizado de cada uno en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          la guía de tipos de archivos de imagen de MDN
        </a>
        .
      </p>
      <p>
        En la práctica: elige <strong>JPEG o WebP</strong> para fotografías,{" "}
        <strong>PNG o WebP</strong> para gráficos y cualquier cosa con
        transparencia, y <strong>AVIF</strong> cuando importe el archivo
        absolutamente más pequeño y tu público use navegadores actuales. Recuerda
        que <strong>JPEG no tiene transparencia</strong>, así que convertir un
        PNG o WebP transparente a JPEG lo aplanará sobre un fondo sólido. Si solo
        quieres hacer un archivo más pequeño sin cambiar su formato, los
        compresores específicos de{" "}
        <Link href="/es/compress-jpeg">JPEG</Link>,{" "}
        <Link href="/es/compress-png">PNG</Link>,{" "}
        <Link href="/es/compress-webp">WebP</Link> y{" "}
        <Link href="/es/compress-avif">AVIF</Link> encajan mejor.
      </p>

      <h2 id="tips">Consejos para conversiones limpias</h2>
      <ul>
        <li>
          <strong>Convierte desde el original.</strong> Parte del origen de mayor
          calidad que tengas para no volver a comprimir detalle que ya se había
          perdido.
        </li>
        <li>
          <strong>Ten en cuenta la transparencia antes de elegir JPEG.</strong>{" "}
          Si tu imagen tiene zonas transparentes que quieres conservar, elige PNG
          o WebP: JPEG no puede almacenar un canal alfa.
        </li>
        <li>
          <strong>Prueba primero WebP para la web.</strong> Es el mejor
          equilibrio entre tamaño reducido, soporte de transparencia y amplia
          compatibilidad con navegadores, lo que lo convierte en una opción
          predeterminada segura para la mayoría de los sitios web.
        </li>
        <li>
          <strong>Cambia el tamaño mientras conviertes.</strong> Si la imagen se
          va a mostrar en pequeño, reducir sus dimensiones ahorra mucho más que la
          elección de formato por sí sola: usa la opción de redimensionado
          integrada o el{" "}
          <Link href="/es/image-resizer">redimensionador de imágenes</Link>{" "}
          específico.
        </li>
        <li>
          <strong>Compara antes de decidir.</strong> Convierte el mismo origen a
          WebP y AVIF y comprueba los tamaños de archivo y cómo se ven a tu tamaño
          de visualización; el ganador varía de una imagen a otra.
        </li>
      </ul>
    </>
  ),
};
