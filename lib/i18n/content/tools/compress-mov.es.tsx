import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir vídeo MOV, WebM, MKV y AVI gratis",
  metaDescription:
    "Comprime vídeos MOV, WebM, MKV y AVI de forma privada en tu navegador. Convierte a MP4 H.264 eficiente sin subidas: nada sale de tu dispositivo.",
  heading: "Compresor de MOV, WebM, MKV y AVI",
  intro: (
    <>
      Comprime vídeos MOV, WebM, MKV y AVI directamente en tu navegador. Cada
      clip se vuelve a codificar con el eficiente H.264 y se guarda como un MP4
      compacto y universalmente compatible, todo en tu propio dispositivo y sin
      que nada se suba nunca.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir MOV, WebM, MKV y AVI",
    description:
      "Comprime vídeo MOV, WebM, MKV y AVI a MP4 H.264 localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tu vídeo",
        text: "Arrastra y suelta un archivo MOV, WebM, MKV o AVI en la zona de carga, o haz clic para buscarlo. Los clips cortos y las grabaciones de pantalla se procesan más rápido.",
      },
      {
        name: "Elige un ajuste de calidad",
        text: "Elige un preajuste, o afina el control deslizante del CRF y la resolución objetivo. En torno a un CRF de 23-28 los clips se ven estupendos mientras se reducen mucho.",
      },
      {
        name: "Deja que ffmpeg lo transcodifique en tu dispositivo",
        text: "El vídeo se vuelve a codificar a MP4 H.264 con una versión en WebAssembly de ffmpeg. Una barra de progreso muestra el trabajo ocurriendo localmente: no se envía nada a ningún sitio.",
      },
      {
        name: "Descarga tu MP4",
        text: "Guarda el MP4 más pequeño cuando esté listo. Si el resultado no es más pequeño, la herramienta te lo indica para que puedas bajar la calidad o la resolución y volver a intentarlo.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis archivos MOV, WebM, MKV o AVI a un servidor?",
      a: (
        <>
          No. Cada vídeo se procesa localmente en tu navegador con una versión
          en WebAssembly de ffmpeg. Tus archivos nunca salen de tu dispositivo y
          no hay ningún servidor al que subirlos: una vez cargada la página
          incluso puedes desconectarte de internet y sigue funcionando.
        </>
      ),
      text: "No. Cada vídeo se procesa localmente en tu navegador con una versión en WebAssembly de ffmpeg. Tus archivos nunca salen de tu dispositivo y no hay ningún servidor al que subirlos. Una vez cargada la página puedes desconectarte de internet y sigue funcionando.",
    },
    {
      q: "¿Este compresor de vídeo es realmente gratis?",
      a: (
        <>
          Sí, es completamente gratis, sin registro, sin marcas de agua y sin
          cargos por archivo. Los únicos límites prácticos vienen de la memoria
          y la paciencia de tu dispositivo, ya que todo se ejecuta en tu propio
          hardware. El sitio se sostiene con anuncios discretos.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin cargos por archivo. Los únicos límites prácticos vienen de la memoria y la paciencia de tu dispositivo, ya que todo se ejecuta en tu propio hardware. El sitio se sostiene con anuncios discretos.",
    },
    {
      q: "¿Comprimir reducirá la calidad de mi vídeo?",
      a: (
        <>
          La compresión de vídeo tiene pérdidas, así que se descarta algo de
          detalle para ahorrar espacio. Con el control de calidad (CRF) en el
          rango de 23-28, la mayoría de los clips se ven prácticamente idénticos
          al original a tamaños de visualización normales. Baja el CRF para más
          fidelidad y archivos más grandes, o súbelo para archivos más pequeños.
        </>
      ),
      text: "La compresión de vídeo tiene pérdidas, así que se descarta algo de detalle para ahorrar espacio. Con el control de calidad (CRF) en el rango de 23-28, la mayoría de los clips se ven prácticamente idénticos al original. Baja el CRF para más fidelidad y archivos más grandes, o súbelo para archivos más pequeños.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: (
        <>
          No hay un límite fijo, pero como ffmpeg se ejecuta en un solo hilo en
          tu navegador, los vídeos muy grandes o largos (más de unos 150 MB)
          pueden ser lentos y fallar en teléfonos con poca memoria. Los clips
          cortos y las grabaciones de pantalla funcionan mejor; para archivos
          enormes, recórtalos primero o usa una herramienta de escritorio.
        </>
      ),
      text: "No hay un límite fijo, pero como ffmpeg se ejecuta en un solo hilo en tu navegador, los vídeos muy grandes o largos de más de unos 150 MB pueden ser lentos y fallar en teléfonos con poca memoria. Los clips cortos y las grabaciones de pantalla funcionan mejor; para archivos enormes, recórtalos primero o usa una herramienta de escritorio.",
    },
    {
      q: "¿Por qué mi MOV o AVI vuelve como un MP4?",
      a: (
        <>
          Para reducir tu archivo, la herramienta vuelve a codificar el vídeo
          con H.264 y lo envuelve en un contenedor MP4, que es mucho más
          eficiente en espacio y mucho más compatible que el MOV de QuickTime o
          el AVI heredado. El resultado se reproduce en prácticamente todos los
          teléfonos, navegadores y reproductores, normalmente a un tamaño mucho
          menor.
        </>
      ),
      text: "Para reducir tu archivo, la herramienta vuelve a codificar el vídeo con H.264 y lo envuelve en un contenedor MP4, que es mucho más eficiente en espacio y compatible que el MOV de QuickTime o el AVI heredado. El resultado se reproduce en prácticamente todos los teléfonos, navegadores y reproductores, normalmente a un tamaño mucho menor.",
    },
    {
      q: "¿También puedo comprimir archivos WebM y MKV?",
      a: (
        <>
          Sí. Esta herramienta acepta MOV, WebM, MKV y AVI y los transcodifica
          todos a MP4 H.264. WebM y MKV son contenedores flexibles que pueden
          albergar muchos códecs; convertir a MP4 te da un formato único y
          predecible que se reproduce en todas partes, incluidos dispositivos
          antiguos y software de edición.
        </>
      ),
      text: "Sí. Esta herramienta acepta MOV, WebM, MKV y AVI y los transcodifica todos a MP4 H.264. WebM y MKV son contenedores flexibles que pueden albergar muchos códecs; convertir a MP4 te da un formato único y predecible que se reproduce en todas partes, incluidos dispositivos antiguos y software de edición.",
    },
  ],
  content: (
    <>
      <h2 id="why">Por qué los archivos MOV, WebM, MKV y AVI son tan grandes</h2>
      <p>
        Si grabas vídeo en un iPhone, una réflex, una GoPro o un grabador de
        pantalla, a menudo acabas con archivos enormes: unos pocos minutos de
        metraje pueden alcanzar fácilmente los cientos de megabytes. Hay buenas
        razones para ello. Los teléfonos y las cámaras priorizan la velocidad de
        captura y la calidad sobre el tamaño del archivo, así que graban con
        altas tasas de bits, altas resoluciones y altas frecuencias de
        fotogramas. Los dispositivos de Apple guardan archivos{" "}
        <strong>.mov</strong> (QuickTime), los grabadores de pantalla producen
        con frecuencia <strong>.mkv</strong> o <strong>.webm</strong>, y las
        cámaras y herramientas de Windows más antiguas todavía generan{" "}
        <strong>.avi</strong>. Cada uno de estos puede ser muchas veces más
        grande de lo necesario para compartir o archivar.
      </p>
      <p>
        Los vídeos grandes son incómodos de manejar: superan los límites de
        adjuntos de correo y chat, tardan una eternidad en subirse, llenan el
        almacenamiento del teléfono y de la nube, y consumen los datos móviles.
        Volver a codificarlos con un códec moderno y eficiente puede recortar el
        tamaño drásticamente —a menudo a la mitad o más— mientras el metraje
        sigue viéndose esencialmente igual. Como esta herramienta se ejecuta
        íntegramente en tu dispositivo, obtienes ese ahorro sin entregar nunca
        tus grabaciones personales a un servidor de terceros.
      </p>
      <p>
        La privacidad es la razón por la que ese último punto importa tanto.
        Vídeos caseros, grabaciones de pantalla confidenciales, imágenes de tus
        hijos, demos de producto que aún no has anunciado: estas no son cosas
        que quieras tener en los servidores de una empresa desconocida, ni
        siquiera temporalmente. Los compresores de vídeo online convencionales
        suben tu archivo entero, lo procesan de forma remota y confían en que
        creas que se borró después. Aquí, tu vídeo se carga en la memoria de tu
        navegador, se transcodifica con WebAssembly y se te devuelve
        directamente. Ninguna petición de red transporta el metraje, así que no
        hay nada que filtrar, registrar ni retener.
      </p>

      <h2 id="container-vs-codec">
        Contenedor frente a códec: qué determina realmente el tamaño
      </h2>
      <p>
        Un punto de confusión habitual es la diferencia entre un{" "}
        <strong>contenedor</strong> y un <strong>códec</strong>. La extensión
        del archivo —.mov, .mkv, .webm, .avi, .mp4— nombra el contenedor: una
        envoltura que agrupa la pista de vídeo, la pista de audio, los subtítulos
        y los metadatos en un solo archivo. El códec es el algoritmo que
        realmente codifica la imagen y el sonido dentro de esa envoltura. El
        mismo contenedor puede albergar muchos códecs distintos, que es
        exactamente la razón por la que dos archivos .mkv pueden tener tamaños y
        compatibilidades enormemente diferentes.
      </p>
      <p>
        Esa separación importa porque es el códec, no el contenedor, lo que
        determina la mayor parte del tamaño del archivo. Un MOV de un iPhone
        podría usar el eficiente códec HEVC, mientras que un AVI de una vieja
        videocámara podría usar uno anticuado y abultado. Los contenedores
        también difieren en compatibilidad: MKV y WebM son flexibles y abiertos,
        pero no se reproducen de forma nativa en todas partes, y AVI es en gran
        medida un formato heredado. Puedes leer un desglose claro de cómo se
        relacionan los contenedores web comunes con sus códecs en la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guía de formatos de contenedor multimedia de MDN
        </a>
        .
      </p>
      <p>
        En términos prácticos, por eso simplemente renombrar la extensión de un
        archivo nunca lo hace más pequeño y normalmente rompe la reproducción:
        estarías reetiquetando la envoltura sin tocar los datos de su interior.
        La compresión real significa decodificar la pista de vídeo original y
        volver a codificarla con un códec más eficiente a un nivel de calidad
        elegido. Eso es exactamente lo que ocurre aquí: tu MOV, WebM, MKV o AVI
        se decodifica por completo y luego se reconstruye como un MP4 H.264
        nuevo, en lugar de simplemente reempaquetarse.
      </p>

      <h2 id="mp4-h264">Por qué ayuda convertir a MP4 H.264</h2>
      <p>
        Esta herramienta transcodifica lo que le des a vídeo{" "}
        <strong>H.264</strong> dentro de un contenedor <strong>MP4</strong>. Aquí
        hay dos grandes ventajas. Primera, el <strong>tamaño</strong>: volver a
        codificar con H.264 a un nivel de calidad sensato te permite eliminar el
        exceso de tasa de bits que las cámaras y los grabadores incorporan, y
        opcionalmente puedes limitar la resolución para reducir aún más.
        Segunda, e igual de importante, la <strong>compatibilidad</strong>: el
        MP4 H.264 es lo más parecido a un formato de vídeo universal. Se
        reproduce en todos los navegadores modernos, en teléfonos y tabletas, en
        televisores inteligentes y en software de edición, sin necesidad de
        paquetes de códecs ni conversiones en el otro extremo.
      </p>
      <p>
        La calidad se controla con un valor CRF (Constant Rate Factor, factor de
        tasa constante). Los números más bajos significan más calidad y archivos
        más grandes; los números más altos significan archivos más pequeños con
        una compresión más visible. Para la mayoría de los clips, un CRF en torno
        a <strong>23-28</strong> es el punto óptimo, viéndose casi idéntico al
        original a una fracción del tamaño. Si tu vídeo ya es un MP4 codificado
        de forma eficiente, puede que no ganes mucho recomprimiéndolo: en ese
        caso, nuestro{" "}
        <Link href="/es/compress-mp4">compresor de MP4</Link> con un CRF más
        alto o una resolución objetivo más baja es la mejor palanca que mover.
      </p>

      <h2 id="tips">Consejos, límites y qué esperar</h2>
      <p>
        Todo ocurre en tu navegador usando una versión en WebAssembly de ffmpeg,
        lo cual es genuinamente privado pero conlleva una salvedad honesta: se
        ejecuta en <strong>un solo hilo</strong>. Eso significa que no puede usar
        todos los núcleos de tu CPU como sí lo hace un codificador de escritorio
        nativo, así que los vídeos largos o de alta resolución tardan
        notablemente más y pueden forzar los dispositivos con poca memoria. Ten
        presentes estas indicaciones para obtener los mejores resultados:
      </p>
      <ul>
        <li>
          <strong>Prioriza los clips más cortos.</strong> Un minuto o dos de
          metraje se comprime rápido. Para grabaciones muy largas, recorta la
          parte que realmente necesitas antes de comprimir.
        </li>
        <li>
          <strong>Baja la resolución para el mayor ahorro.</strong> Una grabación
          de pantalla en 4K reducida a 1080p encoge mucho más que los ajustes de
          calidad por sí solos, sin pérdida visible en la mayoría de las
          pantallas.
        </li>
        <li>
          <strong>Usa un ordenador de escritorio para trabajos pesados.</strong>{" "}
          Los archivos grandes (más de unos 150&nbsp;MB) son más lentos en los
          teléfonos; un portátil o un ordenador de sobremesa con más memoria los
          maneja con mayor holgura.
        </li>
        <li>
          <strong>Elige la herramienta adecuada para cada tarea.</strong>{" "}
          ¿Necesitas una vista rápida de todos los formatos en un mismo sitio?
          Usa el{" "}
          <Link href="/es/video-compressor">compresor de vídeo</Link>. ¿Trabajas
          con archivos de audio en su lugar? Prueba el{" "}
          <Link href="/es/audio-compressor">compresor de audio</Link>.
        </li>
        <li>
          <strong>Vuelve a comprobar el resultado.</strong> Si la salida vuelve
          alguna vez con el mismo tamaño o más grande, tu original ya estaba
          codificado de forma eficiente: sube el CRF o baja la resolución y
          ejecútalo de nuevo en lugar de aceptar un archivo que no se redujo.
        </li>
      </ul>
    </>
  ),
};
