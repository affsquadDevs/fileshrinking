import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresor de vídeo — gratis y en el navegador",
  metaDescription:
    "Comprime vídeo MP4, MOV, WebM, MKV y AVI en tu navegador con ffmpeg. Privado y en el navegador: sin subidas, tu vídeo nunca sale de tu dispositivo.",
  heading: "Compresor de vídeo",
  intro: (
    <>
      Comprime vídeo MP4, MOV, WebM, MKV y AVI directamente en tu navegador con
      una versión en WebAssembly de ffmpeg. Elige un ajuste preestablecido de
      calidad, suelta tu clip y descarga un MP4 H.264 más pequeño: tu material
      nunca se sube a ningún sitio.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir un vídeo",
    description:
      "Comprime vídeo localmente en tu navegador con ffmpeg en cuatro pasos.",
    steps: [
      {
        name: "Añade tu vídeo",
        text: "Arrastra y suelta un archivo de vídeo en la zona de carga o haz clic para buscarlo. Para una experiencia más fluida, mantén los archivos por debajo de unos 150 MB.",
      },
      {
        name: "Elige un ajuste de calidad",
        text: "Elige un ajuste preestablecido o afina el control deslizante CRF. Los ajustes más bajos reducen la resolución y el bitrate para obtener archivos mucho más pequeños.",
      },
      {
        name: "Deja que codifique en tu dispositivo",
        text: "ffmpeg vuelve a codificar el vídeo a H.264/MP4 localmente. Una barra de progreso muestra el avance: los clips más grandes o largos tardan más.",
      },
      {
        name: "Descarga el resultado",
        text: "Guarda el MP4 más pequeño. Si el resultado no es más pequeño, tu archivo ya era eficiente: prueba con una calidad o resolución más baja y vuelve a ejecutarlo.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Mis vídeos se suben a un servidor?",
      a: (
        <>
          No. Toda la compresión se ejecuta dentro de tu navegador usando una
          versión en WebAssembly de ffmpeg. Tu vídeo se carga en memoria, se
          vuelve a codificar en tu propia máquina y se te devuelve directamente.
          Nunca se sube nada, y no hay ningún servidor que pudiera almacenar tu
          material.
        </>
      ),
      text: "No. Toda la compresión se ejecuta dentro de tu navegador usando una versión en WebAssembly de ffmpeg. Tu vídeo se carga en memoria, se vuelve a codificar en tu propia máquina y se te devuelve. No se sube nada y no hay ningún servidor que pudiera almacenar tu material.",
    },
    {
      q: "¿El compresor de vídeo es realmente gratis?",
      a: (
        <>
          Sí: es completamente gratis, sin registro, sin marcas de agua y sin
          cargos por archivo. Como todo el trabajo ocurre en tu dispositivo, no
          hay costes de servidor que repercutir. El sitio se mantiene con
          anuncios discretos.
        </>
      ),
      text: "Sí. Es completamente gratis, sin registro, sin marcas de agua y sin cargos por archivo. Como todo el trabajo ocurre en tu dispositivo, no hay costes de servidor que repercutir. El sitio se mantiene con anuncios discretos.",
    },
    {
      q: "¿Comprimir reducirá la calidad de mi vídeo?",
      a: (
        <>
          La compresión de vídeo tiene pérdidas, así que se descarta algo de
          detalle. El control deslizante CRF determina cómo de agresiva es: en
          torno a 23-28 se ve muy parecido al original en la mayoría del
          material. Reducir la resolución (por ejemplo, de 4K a 1080p) ahorra el
          máximo espacio y mantiene la imagen nítida a tamaños de visionado
          normales.
        </>
      ),
      text: "La compresión de vídeo tiene pérdidas, así que se descarta algo de detalle. El control deslizante CRF determina cómo de agresiva es; en torno a 23-28 se ve muy parecido al original en la mayoría del material. Reducir la resolución (por ejemplo, de 4K a 1080p) ahorra el máximo espacio y mantiene la imagen nítida a tamaños normales.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: (
        <>
          No hay un límite estricto, pero como todo se ejecuta en tu navegador
          con ffmpeg de un solo hilo, recomendamos archivos por debajo de unos{" "}
          <strong>150&nbsp;MB</strong>. Los vídeos grandes o largos consumen
          mucha memoria y pueden ir lentos, y podrían fallar en teléfonos o
          portátiles antiguos con poca RAM. Para clips grandes, recórtalos antes
          o comprímelos en el navegador de un ordenador de escritorio.
        </>
      ),
      text: "No hay un límite estricto, pero como todo se ejecuta en tu navegador con ffmpeg de un solo hilo recomendamos archivos por debajo de unos 150 MB. Los vídeos grandes o largos consumen mucha memoria, pueden ir lentos y podrían fallar en teléfonos o portátiles antiguos con poca RAM. Para clips grandes, recórtalos antes o usa el navegador de un ordenador de escritorio.",
    },
    {
      q: "¿Por qué la compresión de vídeo en el navegador es más lenta que en otras webs?",
      a: (
        <>
          La mayoría de los compresores en línea suben tu archivo a un potente
          servidor multinúcleo que hace la codificación por ti. Esta herramienta
          deliberadamente no hace eso: ejecuta ffmpeg localmente para que tu
          vídeo siga siendo privado. Un solo hilo del navegador es más lento que
          una granja de servidores, así que unos minutos de material pueden
          tardar un poco. Esa contrapartida te garantiza una privacidad total.
        </>
      ),
      text: "La mayoría de los compresores en línea suben tu archivo a un potente servidor multinúcleo que lo codifica por ti. Esta herramienta deliberadamente no hace eso; ejecuta ffmpeg localmente para que tu vídeo siga siendo privado. Un solo hilo del navegador es más lento que una granja de servidores, así que unos minutos de material pueden tardar un poco. Esa contrapartida te garantiza una privacidad total.",
    },
    {
      q: "¿En qué formato sale el vídeo comprimido?",
      a: (
        <>
          El resultado es <strong>vídeo H.264 en un contenedor MP4</strong>,
          independientemente de si tu archivo de entrada era MOV, WebM, MKV o
          AVI. H.264/MP4 se reproduce prácticamente en cualquier teléfono,
          navegador, televisor y aplicación de edición, así que el resultado es
          la opción más segura para compartir y subir.
        </>
      ),
      text: "El resultado es vídeo H.264 en un contenedor MP4, independientemente de si tu archivo de entrada era MOV, WebM, MKV o AVI. H.264/MP4 se reproduce prácticamente en cualquier teléfono, navegador, televisor y aplicación de edición, así que el resultado es la opción más segura para compartir y subir.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué comprimir vídeo en tu navegador?</h2>
      <p>
        El vídeo es, con diferencia, el medio más pesado con el que trata la
        mayoría de la gente. Un minuto de material 4K grabado con el móvil puede
        ocupar cientos de megabytes, demasiado grande para enviar por correo,
        incómodo de subir y rápido para llenar el almacenamiento en la nube y el
        carrete del teléfono. Comprimir un clip puede reducir su tamaño a la
        mitad o más manteniéndolo perfectamente visible, lo que facilita
        compartirlo en apps de chat, adjuntarlo a un mensaje o publicarlo en un
        sitio con límite de subida.
      </p>
      <p>
        Lo que diferencia a esta herramienta es <strong>dónde</strong> ocurre el
        trabajo. Tu material en bruto a menudo contiene momentos privados:
        familia, tu hogar, tu lugar de trabajo, documentos en pantalla. Un
        compresor en línea típico sube todo eso a un servidor remoto. Aquí, el
        vídeo se descodifica, se vuelve a codificar y se vuelve a guardar
        íntegramente dentro de la pestaña de tu navegador, así que nunca viaja por
        internet. Una vez cargada la página, puedes incluso desconectarte de
        internet y seguirá comprimiendo.
      </p>
      <p>
        Hay muchas razones cotidianas para recurrir a un archivo más pequeño. Las
        apps de mensajería y los proveedores de correo limitan los adjuntos, a
        menudo a 25&nbsp;MB o menos, así que una recodificación rápida marca la
        diferencia entre un mensaje que se envía y uno que rebota. Las
        plataformas de cursos, los portales de solicitud de empleo y los
        formularios de contacto suelen rechazar cualquier cosa que supere unos
        pocos megabytes. Y si estás archivando años de clips familiares, reducir
        cada archivo a la mitad se amortiza muchas veces en almacenamiento que no
        tendrás que comprar.
      </p>

      <h2 id="how-it-works">
        Cómo funciona el codificador en el navegador (y sus límites)
      </h2>
      <p>
        Por dentro, esta herramienta ejecuta <strong>ffmpeg</strong>, el motor
        multimedia estándar del sector, compilado a WebAssembly para que se
        ejecute de forma nativa en tu navegador. Eso es realmente potente, pero
        conlleva contrapartidas honestas que conviene conocer. La versión es{" "}
        <strong>de un solo hilo</strong>, así que no puede repartir la
        codificación entre todos los núcleos de tu CPU como hacen una aplicación
        de escritorio o un servidor en la nube. Como resultado, la compresión
        aquí es <strong>más lenta</strong> que un servicio basado en subidas que
        se ejecuta en una máquina multinúcleo, y unos minutos de vídeo pueden
        requerir algo de paciencia.
      </p>
      <p>
        También está <strong>limitada por la memoria</strong>. Todo el archivo
        tiene que caber en la memoria disponible del navegador mientras se
        procesa, por eso recomendamos mantener las entradas por debajo de unos{" "}
        <strong>150&nbsp;MB</strong>. Los vídeos muy grandes o muy largos pueden
        ir lentos y fallar por completo en teléfonos o portátiles antiguos con
        poca RAM. Si te topas con un muro, recorta el clip a la parte que
        necesitas, baja la resolución o ejecútalo en el navegador de un ordenador
        de escritorio con más memoria. Estas son limitaciones reales de hacerlo
        todo localmente: la ventaja es que tu vídeo sigue siendo tuyo.
      </p>
      <p>
        Unas cuantas costumbres hacen que la codificación local sea mucho más
        agradable. Cierra otras pestañas y aplicaciones pesadas antes de empezar
        para que el navegador tenga espacio para trabajar. Mantén la pestaña en
        primer plano: algunos navegadores ralentizan las pestañas en segundo
        plano, lo que puede atascar una codificación larga. Y dale tiempo sin
        recargar: la barra de progreso es real, y recargar a mitad de la
        codificación tira a la basura el trabajo hecho hasta ese momento.
      </p>

      <h2 id="settings">CRF, resolución y audio: las tres palancas</h2>
      <p>
        Tres ajustes determinan el tamaño final de tu archivo. La mayor palanca
        individual es la <strong>resolución</strong>. Reducir de 4K a 1080p, o de
        1080p a 720p, elimina un número enorme de píxeles de cada fotograma y
        suele ser invisible salvo que lo veas en una pantalla grande y de cerca.
        Si solo necesitas un clip para un teléfono o para incrustarlo en una web,
        reducir la resolución lo encogerá mucho más que ajustar solo la calidad.
      </p>
      <p>
        La segunda palanca es el <strong>CRF</strong> (Constant Rate Factor), el
        control de calidad de H.264. Los números más bajos significan más calidad
        y archivos más grandes; los más altos, archivos más pequeños con una
        compresión más visible. Un CRF de <strong>23-28</strong> es el punto
        dulce práctico para la mayoría del material. La tercera palanca es el{" "}
        <strong>bitrate de audio</strong>: la voz suena bien con un bitrate bajo,
        mientras que la música se beneficia de más. Si tu vídeo es sobre todo
        gente hablando, recortar el bitrate de audio ahorra espacio sin pérdida
        apreciable. La salida predeterminada es{" "}
        <strong>H.264 en un contenedor MP4</strong> precisamente porque se
        reproduce casi en todas partes.
      </p>
      <ul>
        <li>
          <strong>Ajusta la resolución al lugar donde se va a ver.</strong> Un
          clip destinado a un teléfono o a un reproductor web pequeño no gana
          nada con 4K; 720p o 1080p se verán idénticos y pesarán una fracción.
        </li>
        <li>
          <strong>Ajusta el CRF antes que cualquier otra cosa.</strong> Pasar de
          23 a 26 a menudo reduce el tamaño a la mitad con una pérdida de detalle
          que la mayoría de los espectadores nunca notarán. Compara el resultado
          antes de ser más agresivo.
        </li>
        <li>
          <strong>No vuelvas a comprimir un clip ya comprimido.</strong> Cada
          pasada con pérdidas descarta más detalle. Si la herramienta informa de
          que el resultado no es más pequeño, tu archivo ya está codificado de
          forma eficiente: déjalo como está en lugar de degradarlo más.
        </li>
        <li>
          <strong>Recorta primero para grandes ahorros.</strong> Quitar los
          silencios del principio y el final de un clip elimina fotogramas
          enteros, lo que supera a cualquier ajuste de calidad para encoger el
          archivo.
        </li>
      </ul>

      <h2 id="codecs">Unas palabras rápidas sobre los códecs de vídeo</h2>
      <p>
        Un &laquo;archivo de vídeo&raquo; son en realidad dos cosas: un{" "}
        <strong>códec</strong> que codifica los píxeles (como H.264, VP9 o AV1) y
        un formato <strong>contenedor</strong> que lo envuelve (MP4, WebM, MOV,
        MKV). Por eso el mismo vídeo H.264 puede vivir dentro de un MP4 o de un
        MOV. Generamos H.264/MP4 porque tiene la compatibilidad de hardware y
        software más amplia de cualquier códec moderno: casi todos los
        dispositivos fabricados en la última década pueden descodificarlo sin
        problemas. Puedes leer más sobre cómo encajan los códecs y los
        contenedores en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          la guía de códecs de vídeo web de MDN
        </a>
        .
      </p>
      <p>
        Esta página es el centro de todas nuestras herramientas de vídeo. Si
        conoces el formato de tu archivo, las páginas dedicadas tienen consejos
        adaptados a él: usa el{" "}
        <Link href="/es/compress-mp4">compresor de MP4</Link> para material que ya
        esté en MP4, o el{" "}
        <Link href="/es/compress-mov">compresor de MOV, WebM, MKV y AVI</Link>{" "}
        para clips de cámaras, grabadores de pantalla y otras apps. Si solo
        necesitas reducir el sonido (un pódcast, una nota de voz o un archivo de
        música), el{" "}
        <Link href="/es/audio-compressor">compresor de audio</Link> se encarga de
        eso sin volver a codificar nada de vídeo.
      </p>
    </>
  ),
};
