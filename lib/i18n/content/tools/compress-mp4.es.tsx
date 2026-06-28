import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir MP4 — Compresor de vídeo MP4 gratis",
  metaDescription:
    "Comprime vídeos MP4 en tu navegador con H.264. Ajustes de calidad, escalado de resolución y sin subidas: tus archivos siguen siendo privados.",
  heading: "Compresor de MP4",
  intro: (
    <>
      Comprime vídeos MP4 directamente en tu navegador con H.264. Elige un ajuste
      de calidad, suelta tu clip y descarga un archivo más pequeño en minutos:
      nada se sube nunca, así que tus grabaciones siguen siendo completamente
      privadas.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir un MP4",
    description:
      "Comprime un vídeo MP4 localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tu MP4",
        text: "Arrastra y suelta tu archivo .mp4 en la zona de carga, o haz clic para buscarlo. El vídeo se carga en la memoria de tu dispositivo, no se envía a ningún sitio.",
      },
      {
        name: "Elige un ajuste de calidad",
        text: "Empieza con Equilibrado. Define un CRF razonable y limita la resolución; cambia a un ajuste más pequeño para archivos más comprimidos o a uno mayor para mantenerte cerca del original.",
      },
      {
        name: "Ajusta el CRF",
        text: "Mueve el control deslizante del CRF si quieres más control. Un valor más bajo conserva más detalle y un archivo más grande; entre 23 y 28 está el punto óptimo práctico para la mayoría de los clips.",
      },
      {
        name: "Comprime y descarga",
        text: "La recodificación se ejecuta en tu dispositivo con ffmpeg. Cuando termine verás el tamaño ahorrado y podrás descargar tu MP4 más pequeño.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis archivos MP4 a un servidor?",
      a: (
        <>
          No. Tu vídeo se comprime localmente en tu navegador con una versión en
          WebAssembly de ffmpeg. El archivo se lee en memoria, se recodifica en
          tu propio dispositivo y se te devuelve directamente: no hay ningún
          servidor al que subirlo y nunca se transmite nada.
        </>
      ),
      text: "No. Tu vídeo se comprime localmente en tu navegador con una versión en WebAssembly de ffmpeg. El archivo se lee en memoria, se recodifica en tu propio dispositivo y se te devuelve directamente. No hay ningún servidor al que subirlo y nunca se transmite nada.",
    },
    {
      q: "¿El compresor de MP4 es realmente gratis?",
      a: (
        <>
          Sí: es completamente gratis, sin registro, sin marcas de agua y sin
          límites por archivo o por día. Como todo el trabajo ocurre en tu
          equipo, no hay costes de servidor que recuperar. El sitio se mantiene
          con anuncios discretos.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin límites por archivo o por día. Como todo el trabajo ocurre en tu equipo, no hay costes de servidor que recuperar. El sitio se mantiene con anuncios discretos.",
    },
    {
      q: "¿Comprimir reducirá la calidad de mi vídeo?",
      a: (
        <>
          H.264 es un códec con pérdidas, así que recodificar siempre descarta
          algo de detalle. Con el ajuste Equilibrado (en torno a CRF 23-28) la
          pérdida es difícil de notar a tamaños de visualización normales,
          mientras que el archivo se reduce considerablemente. Elige un CRF más
          bajo para mantenerte más cerca del original, o uno más alto para un
          archivo más pequeño.
        </>
      ),
      text: "H.264 es un códec con pérdidas, así que recodificar siempre descarta algo de detalle. Con el ajuste Equilibrado (en torno a CRF 23-28) la pérdida es difícil de notar a tamaños de visualización normales, mientras que el archivo se reduce considerablemente. Elige un CRF más bajo para mantenerte más cerca del original o uno más alto para un archivo más pequeño.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo MP4 que puedo comprimir?",
      a: (
        <>
          No hay un límite estricto, pero la recodificación de vídeo consume
          mucha memoria y CPU y se ejecuta en un solo hilo en el navegador. Los
          clips de hasta unos 150&nbsp;MB se comprimen sin problemas en la
          mayoría de los dispositivos; los vídeos más grandes o más largos
          también funcionan, pero pueden ser lentos y podrían fallar en móviles
          con poca memoria. Los clips cortos terminan más rápido.
        </>
      ),
      text: "No hay un límite estricto, pero la recodificación de vídeo consume mucha memoria y CPU y se ejecuta en un solo hilo en el navegador. Los clips de hasta unos 150 MB se comprimen sin problemas en la mayoría de los dispositivos; los vídeos más grandes o más largos también funcionan, pero pueden ser lentos y podrían fallar en móviles con poca memoria. Los clips cortos terminan más rápido.",
    },
    {
      q: "¿Por qué comprimir mi MP4 es más lento que comprimir una imagen?",
      a: (
        <>
          Un vídeo son miles de fotogramas, y cada uno se descodifica,
          opcionalmente se redimensiona y se recodifica con H.264. La versión de
          ffmpeg que corre en el navegador funciona en un solo hilo por
          compatibilidad y seguridad, así que no puede usar todos los núcleos de
          la CPU como lo haría una aplicación de escritorio. Espera una velocidad
          de aproximadamente tiempo real a unas pocas veces el tiempo real según
          la resolución y tu hardware.
        </>
      ),
      text: "Un vídeo son miles de fotogramas, y cada uno se descodifica, opcionalmente se redimensiona y se recodifica con H.264. La versión de ffmpeg que corre en el navegador funciona en un solo hilo por compatibilidad y seguridad, así que no puede usar todos los núcleos de la CPU como lo haría una aplicación de escritorio. Espera una velocidad de aproximadamente tiempo real a unas pocas veces el tiempo real según la resolución y el hardware.",
    },
    {
      q: "¿Sirve de algo recodificar un MP4 que ya es H.264?",
      a: (
        <>
          A veces. Si el original se exportó con un bitrate alto o una resolución
          grande, recodificar con un CRF más alto o una altura menor puede
          ahorrar mucho. Pero un archivo que ya estaba comprimido de forma
          eficiente puede reducirse apenas, o incluso crecer. Si el resultado no
          es más pequeño, la herramienta te avisa de que el archivo ya es
          eficiente y puedes conservar el original.
        </>
      ),
      text: "A veces. Si el original se exportó con un bitrate alto o una resolución grande, recodificar con un CRF más alto o una altura menor puede ahorrar mucho. Pero un archivo que ya estaba comprimido de forma eficiente puede reducirse apenas o incluso crecer. Si el resultado no es más pequeño, la herramienta te avisa de que el archivo ya es eficiente y puedes conservar el original.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué son tan grandes los archivos MP4?</h2>
      <p>
        MP4 es un contenedor, no un códec: envuelve un flujo de vídeo, un flujo
        de audio y metadatos en un solo archivo. El tamaño de ese archivo viene
        determinado casi por completo por el <strong>bitrate</strong> del flujo
        de vídeo: cuántos bits por segundo dedica el codificador a describir la
        imagen. El bitrate, a su vez, escala con tres cosas que tú controlas: la{" "}
        <strong>resolución</strong> (un fotograma 4K tiene cuatro veces los
        píxeles de 1080p), la <strong>duración</strong> del clip y el{" "}
        <strong>objetivo de calidad</strong> con el que se exportó el original.
      </p>
      <p>
        Los móviles, los grabadores de pantalla y las aplicaciones de edición
        suelen inclinarse del lado de la calidad, exportando con bitrates altos
        para que nada se vea borroso. Eso es estupendo para archivar, pero
        derrochador para compartir: un clip de móvil de un minuto en 4K puede
        superar fácilmente los 150&nbsp;MB, mucho más de lo que necesitas para
        enviar por apps de mensajería o correo. Recodificar con un objetivo de
        calidad razonable, y a menudo con una resolución menor, es de donde
        salen los grandes ahorros.
      </p>

      <h2 id="crf">Cómo el CRF y la resolución reducen el archivo</h2>
      <p>
        Esta herramienta recodifica tu vídeo con <strong>H.264</strong> usando un{" "}
        <strong>factor de tasa constante (CRF)</strong>. En lugar de forzar un
        bitrate fijo, el CRF apunta a una calidad <em>percibida</em> constante y
        deja que el codificador gaste más bits en las escenas complejas y menos
        en las sencillas. Aquí la escala va de 18 (calidad muy alta, archivo más
        grande) a 36 (archivo más pequeño, artefactos más visibles). Cada paso de
        aproximadamente &plusmn;6 corresponde a la mitad o el doble del tamaño
        del archivo, así que pequeños cambios en el control deslizante tienen un
        gran efecto.
      </p>
      <p>
        La segunda palanca es la <strong>resolución</strong>. Reducir la altura
        máxima —por ejemplo de 2160p a 1080p o 720p— recorta drásticamente el
        número de píxeles, y menos píxeles necesitan menos bits con la misma
        calidad. Para grabaciones que se verán en un móvil o se incrustarán en un
        documento, una recodificación a 720p o 1080p a menudo se ve idéntica en
        la práctica siendo una fracción del tamaño. Los ajustes combinan un CRF y
        un límite de altura para que obtengas un buen resultado sin ajustar nada;
        el control deslizante del CRF está ahí para cuando quieras un control más
        fino.
      </p>
      <p>
        Dos cosas importan menos de lo que la gente espera. Primero, la tasa de
        fotogramas: la mayoría de los clips no necesitan más de la que ya tiene
        el original, y reducirla ahorra solo un espacio modesto en comparación
        con el CRF y la resolución. Segundo, la pista de audio. El habla y la
        música añaden algo de peso, pero una banda sonora AAC típica es una
        pequeña porción de un archivo de vídeo, así que la imagen es casi siempre
        donde están los ahorros. Por eso esta herramienta centra tus decisiones
        en la calidad y la resolución —los dos ajustes que marcan la diferencia—
        y recodifica el audio a un bitrate razonable automáticamente.
      </p>

      <h2 id="format">
        MP4, H.264 y cuándo recodificar ayuda de verdad
      </h2>
      <p>
        La gran mayoría de los archivos MP4 ya contienen un flujo de vídeo H.264
        (también llamado AVC), que es la razón por la que MP4 se reproduce
        prácticamente en todas partes: desde móviles antiguos hasta televisores
        inteligentes. Puedes leer cómo describen los navegadores el contenedor
        MP4 y el códec H.264 en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          la guía de contenedores multimedia de MDN
        </a>{" "}
        y en su{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264"
          target="_blank"
          rel="noopener noreferrer"
        >
          referencia del códec AVC / H.264
        </a>
        . Generar H.264 en MP4 mantiene intacta esa compatibilidad universal.
      </p>
      <p>
        Recodificar un MP4 que <em>ya</em> es H.264 ayuda cuando el original se
        exportó con generosidad —bitrate alto, resolución grande, o ambos—
        porque hay margen que recortar. Ayuda mucho menos, e incluso puede
        producir un archivo <strong>más grande</strong>, cuando el vídeo ya
        estaba comprimido al máximo: recodificar un flujo con pérdidas implica
        descodificarlo y volver a comprimirlo con pérdidas, así que solo sales
        ganando si tu nuevo objetivo es realmente más bajo que el original. Si la
        salida no fuera a ser más pequeña, esta herramienta te mantiene informado
        para que simplemente puedas conservar tu original. Para exprimir más,
        sube el CRF o baja la resolución en lugar de esperar magia de una sola
        pasada.
      </p>

      <h2 id="tips">Consejos y el compromiso de velocidad en el navegador</h2>
      <p>
        Todo ocurre en tu dispositivo usando una versión en WebAssembly de{" "}
        ffmpeg, que es lo que hace que esto sea privado, pero también es de{" "}
        <strong>un solo hilo</strong>. Un codificador de escritorio nativo
        reparte el trabajo entre todos los núcleos de la CPU; la versión del
        navegador, por compatibilidad y seguridad, usa uno. Eso significa que los
        vídeos largos o de alta resolución pueden tardar un rato y pueden forzar
        los móviles con poca memoria. Unos pocos hábitos mantienen todo fluido:
      </p>
      <ul>
        <li>
          <strong>Recorta primero cuando puedas.</strong> La duración es un
          multiplicador directo tanto del tamaño del archivo como del tiempo de
          codificación, así que cortar los tramos muertos antes de comprimir es
          la victoria más fácil.
        </li>
        <li>
          <strong>Baja la resolución para compartir.</strong> 720p o 1080p es de
          sobra para mensajería, diapositivas y la mayoría de las inserciones
          web; reserva el 4K para los archivos que de verdad ves en una pantalla
          grande.
        </li>
        <li>
          <strong>Empieza con Equilibrado y luego compara.</strong> Vuelve a
          ejecutarlo con un ajuste más pequeño y comprueba si puedes detectar la
          diferencia a tu tamaño de visualización real antes de decidirte.
        </li>
        <li>
          <strong>Haz los trabajos grandes en un dispositivo a la vez.</strong>{" "}
          Cierra otras pestañas pesadas para que el codificador tenga memoria y
          CPU con que trabajar; los clips cortos terminan más rápido.
        </li>
      </ul>
      <p>
        ¿Trabajas con otros formatos? Usa el{" "}
        <Link href="/es/video-compressor">compresor de vídeo</Link> más general
        para MP4 y todo lo demás, el{" "}
        <Link href="/es/compress-mov">compresor de MOV, WebM, MKV y AVI</Link>{" "}
        para grabaciones que no sean MP4, o el{" "}
        <Link href="/es/audio-compressor">compresor de audio</Link> cuando solo
        necesites reducir una banda sonora o una grabación de voz.
      </p>
    </>
  ),
};
