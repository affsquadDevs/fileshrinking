import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresor de audio — MP3 y AAC gratis online",
  metaDescription:
    "Comprime audio MP3, WAV, AAC, M4A, OGG y FLAC en tu navegador. Elige el bitrate, sin subidas ni registro: los archivos nunca salen de tu equipo.",
  heading: "Compresor de audio",
  intro: (
    <>
      Reduce el tamaño de archivos MP3, WAV, AAC, M4A, OGG y FLAC directamente en
      tu navegador. Recodifica a MP3 o AAC con el bitrate que elijas y descarga
      una pista más ligera en segundos: nunca se sube nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Cómo comprimir un archivo de audio",
    description:
      "Comprime MP3, WAV, AAC y más localmente en tu navegador en cuatro pasos.",
    steps: [
      {
        name: "Añade tu audio",
        text: "Arrastra y suelta tus archivos de audio en la zona de carga o haz clic para buscarlos. Se aceptan MP3, WAV, AAC, M4A, OGG y FLAC.",
      },
      {
        name: "Elige un formato de salida",
        text: "Elige MP3 para la máxima compatibilidad o AAC (.m4a) para una calidad ligeramente mejor con el mismo tamaño.",
      },
      {
        name: "Escoge un bitrate",
        text: "Ajusta el bitrate para controlar el equilibrio entre tamaño y calidad. 128 kbps va bien para música; baja a 96 kbps para voz y pódcasts y ahorra aún más.",
      },
      {
        name: "Descarga tu archivo",
        text: "Cada pista se recodifica en tu dispositivo con FFmpeg. Verás el tamaño original, el nuevo tamaño y el porcentaje ahorrado, y luego descargas el resultado.",
      },
    ],
  },
  faqs: [
    {
      q: "¿Se suben mis archivos de audio a un servidor?",
      a: (
        <>
          No. Cada pista se recodifica localmente en tu navegador con una
          versión de FFmpeg compilada en WebAssembly. Tu audio nunca sale de tu
          dispositivo y no hay ningún servidor que lo reciba: una vez cargada la
          página, puedes incluso desconectarte de internet y seguirá
          funcionando.
        </>
      ),
      text: "No. Cada pista se recodifica localmente en tu navegador con una versión de FFmpeg compilada en WebAssembly. Tu audio nunca sale de tu dispositivo y no hay ningún servidor que lo reciba. Una vez cargada la página, puedes desconectarte de internet y seguirá funcionando.",
    },
    {
      q: "¿El compresor de audio es realmente gratis?",
      a: (
        <>
          Sí: es completamente gratis, sin cuenta, sin marcas de agua y sin
          límites en el número de archivos. El único tope práctico es la memoria
          de tu dispositivo. El sitio se sostiene con anuncios discretos.
        </>
      ),
      text: "Sí. Es completamente gratis, sin cuenta, sin marcas de agua y sin límites en el número de archivos. El único tope práctico es la memoria de tu dispositivo. El sitio se sostiene con anuncios discretos.",
    },
    {
      q: "¿Comprimir reducirá la calidad del audio?",
      a: (
        <>
          MP3 y AAC son formatos con pérdida, así que se descarta algo de
          detalle inaudible para reducir el archivo. A 128 kbps la mayoría de
          los oyentes no distingue la música del original, y 96 kbps es de sobra
          para voz o pódcasts. Elige un bitrate más alto para mantenerte más
          cerca de la fuente.
        </>
      ),
      text: "MP3 y AAC son formatos con pérdida, así que se descarta algo de detalle inaudible para reducir el archivo. A 128 kbps la mayoría de los oyentes no distingue la música del original, y 96 kbps es de sobra para voz o pódcasts. Elige un bitrate más alto para mantenerte más cerca de la fuente.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: (
        <>
          No hay un límite fijo: depende de la memoria disponible en tu
          dispositivo. Las canciones, pódcasts y notas de voz típicos se
          procesan en segundos. Los archivos WAV sin comprimir muy grandes (de
          cientos de megabytes) también funcionan, pero usan más memoria y tardan
          más porque el codificador se ejecuta en un solo hilo en tu navegador.
        </>
      ),
      text: "No hay un límite fijo; depende de la memoria disponible en tu dispositivo. Las canciones, pódcasts y notas de voz típicos se procesan en segundos. Los archivos WAV sin comprimir muy grandes de cientos de megabytes también funcionan, pero usan más memoria y tardan más porque el codificador se ejecuta en un solo hilo en tu navegador.",
    },
    {
      q: "¿Qué formatos puedo comprimir y qué obtengo a cambio?",
      a: (
        <>
          Puedes soltar MP3, WAV, AAC, M4A, OGG o FLAC. La herramienta
          recodifica a MP3 (con el codificador LAME) o AAC (.m4a) al bitrate que
          elijas, de modo que la salida es un archivo ampliamente compatible que
          se reproduce en todas partes.
        </>
      ),
      text: "Puedes soltar MP3, WAV, AAC, M4A, OGG o FLAC. La herramienta recodifica a MP3 (con el codificador LAME) o AAC (.m4a) al bitrate que elijas, de modo que la salida es un archivo ampliamente compatible que se reproduce en todas partes.",
    },
    {
      q: "¿Debería elegir MP3 o AAC?",
      a: (
        <>
          Ambos son excelentes. MP3 es el formato con mayor compatibilidad
          universal y una opción segura para compartir. AAC suele sonar algo
          mejor al mismo bitrate y es el formato nativo de los dispositivos Apple
          y de la mayoría del streaming. Si tienes dudas, MP3 a 128 kbps es una
          opción fiable para todo.
        </>
      ),
      text: "Ambos son excelentes. MP3 es el formato con mayor compatibilidad universal y una opción segura para compartir. AAC suele sonar algo mejor al mismo bitrate y es nativo de los dispositivos Apple y de la mayoría del streaming. Si tienes dudas, MP3 a 128 kbps es una opción fiable para todo.",
    },
  ],
  content: (
    <>
      <h2 id="why">¿Por qué comprimir archivos de audio?</h2>
      <p>
        Los archivos de audio pueden ser sorprendentemente pesados. Unos minutos
        de WAV sin comprimir pueden alcanzar decenas de megabytes, un episodio de
        pódcast con bitrate alto puede disparar una descarga, y los álbumes FLAC
        sin pérdida llenan un disco con facilidad. Tanto si vas a enviar una nota
        de voz por correo, subir un pódcast, adjuntar una canción a un mensaje o
        ahorrar espacio en el teléfono, reducir el archivo hace que todo sea más
        rápido y barato de mover y almacenar, normalmente sin diferencia audible
        con ajustes sensatos.
      </p>
      <p>
        Como esta herramienta se ejecuta por completo en tu dispositivo, también
        es la forma privada de hacerlo. La mayoría de los compresores de audio
        online suben tu grabación a un servidor remoto, la procesan allí y te la
        devuelven, lo que significa que una copia de tu voz o tu música queda en
        la máquina de otra persona. Aquí, tu archivo se carga en memoria, se
        recodifica con una versión de FFmpeg compilada en WebAssembly y se te
        devuelve directamente. Nunca toca la red.
      </p>
      <p>
        Ese diseño exclusivamente local tiene ventajas prácticas más allá de la
        privacidad. No hay esperas de subida o descarga mientras el archivo
        cruza internet, ni cola detrás de los trabajos de otras personas, ni un
        límite de tamaño impuesto por un servidor que no controlas. La primera
        vez que usas la herramienta descarga el motor FFmpeg una sola vez;
        después, el mismo motor se reutiliza para cada archivo, e incluso las
        compresiones repetidas se mantienen rápidas porque todo el trabajo ocurre
        en tu propio procesador.
      </p>

      <h2 id="bitrate">Bitrate frente a calidad: cómo elegir</h2>
      <p>
        La mayor palanca sobre el tamaño de un archivo de audio es el{" "}
        <strong>bitrate</strong>: el número de kilobits usados para almacenar
        cada segundo de sonido, escrito como kbps. Reduce el bitrate a la mitad y
        reducirás el archivo aproximadamente a la mitad. La contrapartida es que
        los bitrates más bajos descartan más detalle, así que el objetivo es
        elegir el bitrate más bajo en el que tus oídos aún no noten la
        diferencia.
      </p>
      <p>
        El bitrate también interactúa con el tipo de audio que estás
        codificando. La música densa y compleja —mezclas cargadas, platillos,
        guitarras distorsionadas— es más difícil de comprimir y se beneficia de
        un bitrate más alto, mientras que una simple grabación de voz se mantiene
        nítida incluso comprimida con fuerza. No hay un único número
        &laquo;correcto&raquo;; el mejor ajuste es el que suena limpio en los
        altavoces o auriculares que realmente usarán tus oyentes. Una forma
        rápida de decidir es exportar el mismo clip a dos bitrates y compararlos
        seguidos. Usa estos como puntos de partida:
      </p>
      <ul>
        <li>
          <strong>256 kbps</strong>: casi transparente para música; elige este
          cuando quieras el archivo más pequeño que aún suene esencialmente como
          el original.
        </li>
        <li>
          <strong>192 kbps</strong>: excelente calidad para música con un ahorro
          de tamaño significativo respecto a la fuente.
        </li>
        <li>
          <strong>128 kbps</strong>: el clásico todoterreno. Para la mayoría de
          los oyentes es indistinguible de la música con calidad de CD en
          altavoces y auriculares de uso diario, con una fracción del tamaño.
        </li>
        <li>
          <strong>96 kbps</strong>: ideal para contenido hablado como
          audiolibros, pódcasts y notas de voz, donde no hay música que
          preservar.
        </li>
      </ul>
      <p>
        Una salvedad importante: tanto MP3 como AAC son formatos{" "}
        <strong>con pérdida</strong>, y recodificar un archivo con pérdida
        siempre descarta un poco más. Comprime siempre desde la fuente de mayor
        calidad que tengas, y nunca recodifiques un archivo que ya hayas
        comprimido a un bitrate bajo subiéndolo a uno más alto: eso solo infla el
        tamaño sin recuperar nada del detalle perdido.
      </p>
      <p>
        También ayuda saber qué implica en la práctica un tamaño de archivo
        objetivo. El bitrate es aproximadamente el tamaño del archivo dividido
        por la duración, así que un clip de un minuto a 128 kbps ronda un
        megabyte, y una canción típica de tres a cuatro minutos al mismo bitrate
        se queda en unos tres o cuatro megabytes. Si tienes un límite de tamaño
        estricto que cumplir —un tope de adjunto de correo, un formulario de
        subida o una app de mensajería—, divide ese límite por la duración de la
        pista para estimar el bitrate que puedes permitirte y luego redondea
        hacia abajo al preset más cercano.
      </p>

      <h2 id="formats">MP3, AAC, WAV y FLAC explicados</h2>
      <p>
        Los formatos de audio se dividen en dos grupos. Los formatos{" "}
        <strong>sin pérdida</strong> como WAV y FLAC conservan cada muestra de la
        grabación original: WAV la almacena sin comprimir (enorme), mientras que
        FLAC la empaqueta más pequeña sin perder nada. Los formatos{" "}
        <strong>con pérdida</strong> como MP3, AAC y OGG eliminan de forma
        permanente el sonido que el oído humano es menos capaz de percibir, que
        es como logran reducciones de tamaño drásticas. Puedes leer una clara
        descripción técnica de estos códecs en{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          la guía de códecs de audio web de MDN
        </a>
        .
      </p>
      <p>
        Aquí es exactamente donde están los mayores ahorros. Convertir un archivo
        WAV o FLAC a un MP3 o AAC de 128 kbps reduce habitualmente el tamaño en
        un <strong>80&ndash;90 %</strong>, porque pasas de almacenar cada muestra
        a almacenar solo lo que puedes oír. Si vas a conservar un archivo maestro,
        guarda el original sin pérdida; pero para compartir, hacer streaming o
        subir, una copia con pérdida es casi siempre la opción correcta. Cuando
        necesites la máxima compatibilidad, elige MP3; cuando quieras el mejor
        sonido a un bitrate dado o estés en el ecosistema Apple, elige AAC
        (.m4a).
      </p>
      <p>
        Un punto de confusión habitual es la diferencia entre un contenedor y un
        códec. Un archivo <strong>.m4a</strong> es un contenedor que suele alojar
        audio codificado en AAC, mientras que <strong>.mp3</strong> es tanto un
        contenedor como su códec. OGG, por su parte, es un contenedor que con más
        frecuencia transporta audio Vorbis u Opus. Esta herramienta siempre te
        entrega un resultado limpio en MP3 o AAC sea cual sea lo que introduzcas,
        así que no tienes que preocuparte por extensiones desajustadas ni por
        archivos que no se abren: la salida es exactamente lo que su nombre
        indica y se reproduce igual en navegadores, teléfonos, equipos de coche y
        software de edición.
      </p>

      <h2 id="tips">Consejos para obtener los mejores resultados</h2>
      <ul>
        <li>
          <strong>Ajusta el bitrate al contenido.</strong> Baja las grabaciones
          de voz a 96 kbps y reserva 192&ndash;256 kbps para la música que
          quieras mantener cerca de la fuente.
        </li>
        <li>
          <strong>No subas la calidad artificialmente.</strong> Recodificar un
          archivo de 96 kbps a 256 kbps no restaurará la calidad; solo hace el
          archivo más grande. Parte del mejor original que tengas.
        </li>
        <li>
          <strong>¿Vas a extraer el audio de un clip?</strong> Si tu sonido está
          atrapado dentro de un vídeo, reduce primero el vídeo con el{" "}
          <Link href="/es/video-compressor">compresor de vídeo</Link>, que
          recodifica la pista de audio como parte del trabajo, y luego trae el
          audio exportado aquí para un control más fino sobre el bitrate y el
          formato.
        </li>
        <li>
          <strong>Conserva un maestro sin pérdida.</strong> Comprime copias para
          compartir, pero archiva el WAV o FLAC original para poder reexportar
          siempre con otra calidad más adelante.
        </li>
        <li>
          <strong>Cuida tu dispositivo con archivos enormes.</strong> Como la
          codificación se ejecuta en tu navegador, un WAV de varios cientos de
          megabytes necesita bastante memoria. En un teléfono, comprime un único
          archivo grande cada vez y cierra otras pestañas si notas
          ralentización.
        </li>
      </ul>
    </>
  ),
};
