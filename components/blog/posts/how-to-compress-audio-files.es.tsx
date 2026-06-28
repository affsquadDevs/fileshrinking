import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-audio-files",
  title: "Cómo comprimir archivos de audio sin destrozar el sonido",
  description:
    "Reduce archivos MP3, AAC, FLAC y WAV de forma inteligente: elige el bitrate adecuado para música o voz, entiende la frecuencia de muestreo y conserva un audio limpio.",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  authorId: "team",
  tags: ["Audio", "Tutorial"],
  readingMinutes: 6,
};

export default function Content() {
  return (
    <>
      <p>
        Los archivos de audio tienden a crecer sin control. Una canción de tres
        minutos extraída a <strong>WAV</strong> puede superar fácilmente los 30
        MB, una entrevista grabada de una hora puede pasar del gigabyte, y las
        aplicaciones de correo y mensajería empiezan a rechazar los adjuntos
        mucho antes de eso. La buena noticia es que el audio se comprime
        extremadamente bien &mdash; si entiendes unos pocos ajustes
        fundamentales. Acierta con ellos y podrás reducir un archivo entre un
        80&ndash;90% sin que tus oídos noten ninguna diferencia. Falla y
        acabarás con un audio metálico, con remolinos y como si sonara debajo
        del agua. Esta guía repasa las decisiones que realmente importan.
      </p>

      <h2 id="why-wav-is-huge">Por qué los archivos WAV y AIFF son tan grandes</h2>
      <p>
        WAV (y su primo de Apple, AIFF) almacena el audio como muestras PCM en
        bruto y <strong>sin comprimir</strong>. No se descarta nada ni se
        empaqueta nada, así que el tamaño es totalmente predecible a partir de
        tres números: la frecuencia de muestreo, la profundidad de bits y el
        número de canales. La calidad CD &mdash; 44.100 muestras por segundo, 16
        bits por muestra, dos canales &mdash; equivale a unos{" "}
        <strong>10 MB por minuto</strong>. Por eso un álbum completo en WAV puede
        llenar varios cientos de megabytes, mientras que el mismo álbum en MP3
        cabe en un teléfono de sobra.
      </p>
      <p>
        El audio sin comprimir es la opción correcta mientras estás{" "}
        <em>grabando y editando</em>, porque cada edición y cada efecto se
        mantienen impecables. Pero es una pésima opción para compartir o
        almacenar el resultado final. En el momento en que terminas de editar,
        merece la pena convertirlo a un formato comprimido.
      </p>

      <h2 id="lossy-vs-lossless">Con pérdida frente a sin pérdida: MP3/AAC frente a FLAC</h2>
      <p>
        La compresión de audio viene en dos sabores. Los formatos{" "}
        <strong>sin pérdida</strong> como FLAC y ALAC reducen el archivo
        manteniendo intacta cada muestra original &mdash; decodifica un FLAC y
        recuperas una copia idéntica byte a byte del original. Suelen recortar el
        tamaño entre un 40&ndash;60%, de modo que ese WAV de 10 MB por minuto
        pasa a unos 5&ndash;6 MB por minuto. Usa formatos sin pérdida cuando
        archives masters o te importe una fidelidad perfecta.
      </p>
      <p>
        Los formatos <strong>con pérdida</strong> como MP3 y AAC van mucho más
        allá descartando de forma permanente el sonido que es poco probable que
        el oído humano perciba &mdash; frecuencias enmascaradas por otras más
        fuertes, detalle por encima de tu rango auditivo, etc. Así es como la
        codificación psicoacústica reduce una canción a una décima parte de su
        tamaño original. La contrapartida es que los datos descartados se pierden
        para siempre, así que reconvertir un archivo con pérdida una y otra vez
        lo va degradando poco a poco. Si quieres el modelo mental completo,
        consulta nuestra guía sobre{" "}
        <Link href="/es/blog/lossy-vs-lossless-compression">
          compresión con pérdida frente a sin pérdida
        </Link>
        .
      </p>
      <p>
        Entre las dos opciones modernas con pérdida, <strong>AAC</strong>{" "}
        generalmente suena un poco mejor que <strong>MP3</strong> al mismo
        bitrate y es la opción por defecto en Apple Music, YouTube y la mayoría
        del streaming. MP3 sigue ganando en compatibilidad universal &mdash; si
        necesitas un archivo que se reproduzca literalmente en cualquier
        dispositivo fabricado en los últimos 25 años, MP3 es la apuesta segura.
      </p>

      <h2 id="bitrate">El ajuste que más importa: el bitrate</h2>
      <p>
        Para el audio con pérdida, el <strong>bitrate</strong> &mdash; medido en
        kilobits por segundo (kbps) &mdash; es la mayor palanca de control tanto
        de la calidad como del tamaño. Un bitrate más alto significa más datos
        conservados por cada segundo de sonido, lo que se traduce en mejor
        calidad y un archivo más grande. El truco está en ajustar el bitrate al
        contenido.
      </p>
      <p>
        Para la <strong>música</strong>, donde quieres fidelidad de rango
        completo:
      </p>
      <ul>
        <li>
          <strong>128 kbps</strong> &mdash; aceptable para escuchar de forma
          casual con auriculares; lo más bajo a lo que deberías bajar con
          música.
        </li>
        <li>
          <strong>192 kbps</strong> &mdash; un punto dulce ideal para el día a
          día; la mayoría de la gente no logra distinguirlo del original de
          forma fiable.
        </li>
        <li>
          <strong>256&ndash;320 kbps</strong> &mdash; prácticamente
          transparente, la opción adecuada si tienes buenos auriculares o un
          oído exigente.
        </li>
      </ul>
      <p>
        Para la <strong>voz</strong> &mdash; pódcasts, notas de voz,
        audiolibros, entrevistas &mdash; puedes bajar mucho más, porque la voz
        humana ocupa un rango de frecuencias estrecho:
      </p>
      <ul>
        <li>
          <strong>64 kbps</strong> &mdash; perfectamente claro para una sola
          voz; ideal para pódcasts hablados.
        </li>
        <li>
          <strong>96 kbps</strong> &mdash; un margen cómodo para voz con algo de
          música de fondo o dos interlocutores.
        </li>
      </ul>
      <p>
        Codificar un pódcast de una hora a 64 kbps en lugar de 192 kbps lo lleva
        de unos 86 MB a aproximadamente 29 MB &mdash; un tercio del tamaño, sin
        ninguna pérdida significativa de claridad para la voz.
      </p>

      <h2 id="sample-rate-channels">Frecuencia de muestreo, profundidad de bits y mono frente a estéreo</h2>
      <p>
        Otros tres ajustes pueden recortar el tamaño aún más cuando se usan de
        forma adecuada. La <strong>frecuencia de muestreo</strong> es cuántas
        veces por segundo se mide el audio. Los 44,1 kHz (CD) y los 48 kHz
        (vídeo) capturan todo el rango de la audición humana, así que rara vez
        hay motivo para subir más en una exportación final. Puedes reducir sin
        problemas una nota de voz del teléfono a 22,05 kHz, pero deja la música
        en 44,1 kHz o 48 kHz.
      </p>
      <p>
        Los <strong>canales</strong> también importan. Una grabación en mono
        ocupa la mitad que una en estéreo. Si tu fuente es un único narrador o
        una nota de voz en mono, exportar en mono es un ahorro gratis sin ningún
        coste de calidad. Reserva el estéreo para la música y cualquier cosa con
        una imagen izquierda/derecha real.
      </p>
      <p>
        Para una referencia exhaustiva y orientada al navegador sobre qué hace
        cada códec y cómo gestionan estos parámetros, la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guía de MDN sobre códecs de audio web
        </a>{" "}
        es la fuente de referencia.
      </p>

      <h2 id="converting">Convertir FLAC o WAV a MP3 o AAC para compartir</h2>
      <p>
        La tarea más habitual en el mundo real es coger un archivo grande sin
        pérdida y convertirlo en algo lo bastante pequeño como para enviarlo por
        correo, subirlo o publicarlo. La receta es sencilla:
      </p>
      <ul>
        <li>Parte de tu fuente de máxima calidad (el master en WAV o FLAC).</li>
        <li>Elige AAC para la mejor calidad por byte, o MP3 para la máxima compatibilidad.</li>
        <li>Escoge un bitrate que encaje con el contenido: ~192 kbps para música, ~64&ndash;96 kbps para voz.</li>
        <li>Pon mono para grabaciones de una sola voz; deja estéreo para la música.</li>
        <li>Mantén la frecuencia de muestreo en 44,1 o 48 kHz para música; 22,05 kHz está bien para voz.</li>
      </ul>
      <p>
        Como la conversión de sin pérdida a con pérdida solo ocurre una vez,
        conservas toda la calidad posible y aun así obtienes un archivo
        drásticamente más pequeño. Eso sí, recuerda guardar el master original
        &mdash; nunca vuelvas a comprimir un archivo que ya tiene pérdida si
        puedes partir de la fuente.
      </p>

      <h2 id="try-it">Hazlo de forma privada en tu navegador</h2>
      <p>
        No necesitas instalar nada ni subir tus grabaciones a un servidor
        cualquiera para comprimirlas. El{" "}
        <Link href="/es/audio-compressor">compresor de audio</Link> de
        FileShrinking se ejecuta por completo en tu navegador, así que tus
        archivos nunca salen de tu dispositivo &mdash; nunca se sube nada. Suelta
        un WAV, FLAC, MP3 o AAC, elige tu bitrate y descarga el resultado. Si tu
        audio es en realidad parte de un clip que vas a compartir, el mismo
        enfoque centrado en la privacidad se aplica a nuestro{" "}
        <Link href="/es/video-compressor">compresor de vídeo</Link>. Experimenta
        con un par de ajustes de bitrate y confía en tus propios oídos &mdash;
        como todo se queda en local, no hay ningún riesgo en probar.
      </p>
    </>
  );
}
