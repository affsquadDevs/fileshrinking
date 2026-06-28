import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresor de imágenes — Gratis y privado",
  metaDescription:
    "Comprime imágenes JPEG, PNG, WebP, AVIF y GIF en tu navegador. 100% privado, sin subidas ni registro: tus fotos nunca salen de tu dispositivo.",
  heading: "Compresor de imágenes",
  intro: (
    <>
      Comprime y convierte imágenes JPEG, PNG, WebP, AVIF y GIF directamente en
      tu navegador. Añade tus fotos, elige un formato y una calidad, y descarga
      archivos más pequeños en segundos: todo se ejecuta en tu dispositivo, así
      que nunca se sube nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir una imagen",
    description:
      "Comprime o convierte cualquier formato de imagen habitual de forma local en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tus imágenes",
        text: "Arrastra y suelta archivos JPEG, PNG, WebP, AVIF o GIF sobre la zona de carga, haz clic para explorar o pega desde el portapapeles. Mezcla formatos libremente: cada archivo se procesa por separado.",
      },
      {
        name: "Elige un formato de salida",
        text: "Déjalo en Mismo formato para recomprimir sin cambiar el tipo, o elige JPEG, PNG, WebP o AVIF para convertir. WebP y AVIF generan los archivos más pequeños para fotos.",
      },
      {
        name: "Ajusta la calidad (y redimensiona si hace falta)",
        text: "Usa el control de calidad —en torno a 75 va bien para la mayoría de las fotos— o el nivel sin pérdidas para PNG. Si quieres, redimensiona por porcentaje o por píxeles exactos para ahorrar aún más.",
      },
      {
        name: "Descarga tus resultados",
        text: "Guarda las imágenes de una en una o descárgalas todas en un ZIP. Cada archivo muestra su tamaño original, el nuevo tamaño y el porcentaje ahorrado, para que puedas reajustar y volver a probar.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis imágenes a un servidor?",
      a: (
        <>
          No. Cada imagen que añades se decodifica y se vuelve a codificar
          íntegramente en tu propio navegador mediante WebAssembly. No se envía
          nada a ningún sitio: no hay paso de subida ni ningún servidor que vea
          tus archivos. Incluso puedes apagar tu conexión a internet una vez
          cargada la página y seguir comprimiendo.
        </>
      ),
      text: "No. Cada imagen se decodifica y se vuelve a codificar íntegramente en tu propio navegador mediante WebAssembly. No se envía nada a ningún sitio; no hay paso de subida ni ningún servidor que vea tus archivos. Puedes apagar tu conexión a internet una vez cargada la página y seguir comprimiendo.",
    },
    {
      q: "¿El compresor de imágenes es gratuito?",
      a: (
        <>
          Sí: es totalmente gratuito, sin cuenta, sin marcas de agua y sin
          límites diarios. Puedes procesar tantas imágenes como permita la
          memoria de tu dispositivo. El sitio se mantiene en marcha gracias a
          anuncios discretos mostrados junto al artículo, nunca dentro de la
          herramienta en sí.
        </>
      ),
      text: "Sí. Es totalmente gratuito, sin cuenta, sin marcas de agua y sin límites diarios. Puedes procesar tantas imágenes como permita la memoria de tu dispositivo. El sitio se mantiene con anuncios discretos mostrados junto al artículo, no dentro de la herramienta.",
    },
    {
      q: "¿Comprimir reducirá la calidad de mis imágenes?",
      a: (
        <>
          Depende del formato y de los ajustes. Los formatos con pérdida como
          JPEG, WebP y AVIF descartan detalles finos para reducir el archivo,
          pero con una calidad en torno a 75 el cambio suele ser imperceptible.
          La optimización sin pérdidas de PNG no elimina ningún detalle: solo
          reescribe el archivo de forma más eficiente. Usa el control de calidad
          para equilibrar tamaño y fidelidad en cada trabajo.
        </>
      ),
      text: "Depende del formato y de los ajustes. Los formatos con pérdida como JPEG, WebP y AVIF descartan detalles finos para reducir el archivo, pero con una calidad en torno a 75 el cambio suele ser imperceptible. La optimización sin pérdidas de PNG no elimina ningún detalle; solo reescribe el archivo de forma más eficiente. Usa el control de calidad para equilibrar tamaño y fidelidad.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: (
        <>
          No hay un límite fijo: solo está condicionado por la memoria
          disponible de tu dispositivo. Las fotos normales de unos pocos
          megabytes y las imágenes grandes de 20–50 MP funcionan con holgura
          tanto en móviles como en portátiles. Los lotes se procesan de una
          imagen en una imagen, lo que mantiene bajo el uso de memoria incluso
          con muchos archivos grandes.
        </>
      ),
      text: "No hay un límite fijo; solo está condicionado por la memoria disponible de tu dispositivo. Las fotos normales de unos pocos megabytes y las imágenes grandes de 20-50 MP funcionan con holgura en móviles y portátiles. Los lotes se procesan de una imagen en una imagen para mantener bajo el uso de memoria.",
    },
    {
      q: "¿Qué formatos de imagen admite esta herramienta?",
      a: (
        <>
          Puedes soltar archivos JPEG, PNG, WebP, AVIF y GIF, y exportar a JPEG,
          PNG, WebP o AVIF. Deja la salida en &laquo;Mismo formato&raquo; para
          recomprimir sin cambiar el tipo, o elige otro formato para convertir.
          Para un flujo de trabajo específico de cada formato, ve al compresor de{" "}
          <Link href="/es/compress-jpeg">JPEG</Link>,{" "}
          <Link href="/es/compress-png">PNG</Link>,{" "}
          <Link href="/es/compress-webp">WebP</Link>,{" "}
          <Link href="/es/compress-avif">AVIF</Link> o{" "}
          <Link href="/es/compress-gif">GIF</Link>.
        </>
      ),
      text: "Puedes soltar archivos JPEG, PNG, WebP, AVIF y GIF, y exportar a JPEG, PNG, WebP o AVIF. Deja la salida en Mismo formato para recomprimir sin cambiar el tipo, o elige otro formato para convertir. Existen herramientas específicas para JPEG, PNG, WebP, AVIF y GIF.",
    },
    {
      q: "¿Cuál es la diferencia entre comprimir y convertir una imagen?",
      a: (
        <>
          Comprimir mantiene el mismo formato y hace el archivo más pequeño;
          convertir cambia el formato en sí, por ejemplo transformando una
          pesada captura de pantalla en PNG en un WebP mucho más pequeño. Este
          centro hace ambas cosas: ajusta el formato de salida para convertir, o
          déjalo igual para solo comprimir. Si tu objetivo principal es la
          conversión, el{" "}
          <Link href="/es/image-converter">conversor de imágenes</Link>{" "}
          específico es una opción más enfocada, y el{" "}
          <Link href="/es/image-resizer">redimensionador de imágenes</Link> se
          encarga de cambiar las dimensiones.
        </>
      ),
      text: "Comprimir mantiene el mismo formato y hace el archivo más pequeño; convertir cambia el formato en sí, como transformar un PNG pesado en un WebP más pequeño. Este centro hace ambas cosas. Para la conversión, el conversor de imágenes específico es más enfocado, y el redimensionador de imágenes se encarga de cambiar las dimensiones.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué comprimir y convertir imágenes?</h2>
      <p>
        Las imágenes son la parte más pesada de la mayoría de las páginas web,
        correos electrónicos y carpetas compartidas. La cámara de un móvil
        moderno puede generar fotos de 4–12 MB, y las capturas de pantalla
        guardadas como PNG también pueden resultar sorprendentemente grandes.
        Las imágenes demasiado grandes ralentizan los sitios web, superan los
        límites de tamaño de los adjuntos de correo, llenan el almacenamiento en
        la nube y consumen datos móviles. Comprimirlas conserva el detalle que
        de verdad te importa mientras reduce drásticamente el tamaño del
        archivo, a menudo entre un 60 y un 90% según el formato que elijas.
      </p>
      <p>
        Esta página es el centro para todos los formatos de imagen. Como se
        ejecuta <strong>íntegramente en tu dispositivo</strong>, es también la
        forma privada de hacerlo. Los compresores online convencionales suben
        tus fotos a un servidor remoto, las procesan allí y te las devuelven.
        Aquí, cada imagen se lee en memoria, se vuelve a codificar con un códec
        WebAssembly y se te entrega directamente. Tus fotos nunca viajan por una
        red, algo que importa para fotos personales, escaneos de documentos de
        identidad, contratos y cualquier otra cosa que prefieras no entregar al
        servidor de un desconocido.
      </p>

      <h2 id="lossy">Con pérdida frente a sin pérdida: el equilibrio clave</h2>
      <p>
        Todos los formatos de imagen caen en uno de dos grupos. La compresión{" "}
        <strong>con pérdida</strong> —usada por JPEG y por los modos
        predeterminados de WebP y AVIF— descarta de forma permanente el detalle
        que es menos probable que el ojo humano eche en falta, y así consigue
        ahorros tan grandes. El control de calidad regula lo agresiva que es:
        los valores más altos conservan más detalle y producen archivos más
        grandes, mientras que los valores más bajos ahorran más espacio pero
        pueden introducir &laquo;artefactos&raquo; visibles, como bloques o
        halos alrededor de los bordes. La compresión{" "}
        <strong>sin pérdida</strong> —usada por PNG y GIF, y un modo opcional de
        WebP— reescribe el archivo de forma más eficiente sin descartar ni un
        solo píxel, de modo que la imagen es idéntica bit a bit al
        decodificarse. El inconveniente es que el ahorro sin pérdida es mucho más
        modesto.
      </p>
      <p>
        La regla práctica: usa formatos con pérdida para fotografías e imágenes
        realistas, donde una calidad de 70–80 suele ser indistinguible del
        original, y usa formatos sin pérdida para gráficos, logotipos, capturas
        de pantalla y cualquier cosa con bordes nítidos o texto, donde los
        artefactos de la compresión con pérdida resultan evidentes. Recuerda que
        la compresión con pérdida es <strong>acumulativa</strong>: trabaja
        siempre a partir de tu copia maestra de máxima calidad en lugar de
        volver a guardar una copia ya comprimida.
      </p>

      <h2 id="formats">Elegir el formato adecuado</h2>
      <p>
        Elegir el formato importa tanto como el ajuste de calidad. Como guía
        rápida: <strong>JPEG</strong> es la opción universal para fotos sin
        transparencia; <strong>PNG</strong> es el mejor para gráficos planos,
        capturas de pantalla y todo lo que necesite un fondo transparente;{" "}
        <strong>WebP</strong> suele generar archivos entre un 25 y un 35% más
        pequeños que JPEG, a la vez que admite transparencia y animación;{" "}
        <strong>AVIF</strong> es el más nuevo y normalmente el más pequeño de
        todos para fotografías, a costa de una codificación más lenta; y{" "}
        <strong>GIF</strong> es un viejo formato de animación al que casi siempre
        supera la conversión a WebP o a vídeo. El repaso de referencia sobre cómo
        se comporta cada formato en los navegadores está en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          la guía de tipos y formatos de archivo de imagen de MDN
        </a>
        .
      </p>
      <p>
        Si ya sabes con qué formato estás trabajando, las herramientas
        específicas te ofrecen los controles y las explicaciones más relevantes:
        el <Link href="/es/compress-jpeg">compresor de JPEG</Link> para fotos, el{" "}
        <Link href="/es/compress-png">compresor de PNG</Link> para gráficos sin
        pérdida, las herramientas de{" "}
        <Link href="/es/compress-webp">WebP</Link> y{" "}
        <Link href="/es/compress-avif">AVIF</Link> para los archivos modernos más
        pequeños, y el{" "}
        <Link href="/es/compress-gif">compresor de GIF</Link> para animaciones.
        Para cambiar un lote de archivos de un formato a otro, usa el{" "}
        <Link href="/es/image-converter">conversor de imágenes</Link>; para
        cambiar las dimensiones en píxeles, recurre al{" "}
        <Link href="/es/image-resizer">redimensionador de imágenes</Link>.
      </p>

      <h2 id="tips">Consejos prácticos para obtener los mejores resultados</h2>
      <ul>
        <li>
          <strong>Redimensiona antes de comprimir.</strong> Si una imagen solo
          se va a mostrar a 1200 px de ancho, enviar un original de 6000 px
          desperdicia la mayor parte del archivo. Reducir la escala suele ahorrar
          más de lo que nunca podría el control de calidad.
        </li>
        <li>
          <strong>Ajusta el formato al contenido.</strong> Las fotos van en
          JPEG, WebP o AVIF; los logotipos, los iconos y las capturas de pantalla
          se mantienen más nítidos y pequeños como PNG. Convertir una foto en PNG
          a WebP puede reducirla en un orden de magnitud.
        </li>
        <li>
          <strong>Conserva una copia maestra.</strong> Como la recodificación con
          pérdida se acumula, comprime siempre desde tu original y no desde un
          archivo que exportaste antes.
        </li>
        <li>
          <strong>Compara antes de decidir.</strong> Prueba primero
          &laquo;Equilibrado&raquo;, luego vuelve a ejecutar con &laquo;Más
          pequeño&raquo; y comprueba si notas la diferencia al tamaño con el que
          realmente vas a mostrar la imagen.
        </li>
        <li>
          <strong>Agrupa imágenes parecidas.</strong> Las fotos de la misma
          cámara o las capturas de la misma pantalla suelen quedar muy bien con
          un mismo ajuste compartido, así que puedes procesarlas de una sola vez.
        </li>
      </ul>
    </>
  ),
};
