import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-video-for-email-and-web",
  title: "Cómo comprimir vídeo para email, web y redes sociales",
  description:
    "Ajustes prácticos para reducir vídeo al límite de 25 MB del email, incrustaciones web rápidas y subidas a redes: resolución, CRF, H.264 y recorte, en tu navegador.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  authorId: "maya",
  tags: ["Vídeo", "Tutorial"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        El vídeo es lo más pesado que la mayoría de la gente intenta compartir. Un
        solo minuto de grabación recién salido de un móvil o una cámara puede
        ocupar cientos de megabytes: demasiado grande para adjuntarlo a un email,
        lento de cargar en una página web y con muchas probabilidades de volver a
        comprimirse en cuanto una plataforma social lo toca. La buena noticia es
        que puedes reducir casi cualquier clip de forma drástica sin que se vea
        mal, siempre que ajustes unos pocos parámetros al destino del vídeo. Esta
        guía recorre los tres destinos más habituales &mdash;email, web y redes
        sociales&mdash; y las palancas exactas que te llevan hasta ellos.
      </p>

      <h2 id="why-video-is-big">Por qué los archivos de vídeo se vuelven tan grandes</h2>
      <p>
        Un vídeo no es más que una larga secuencia de imágenes reproducidas
        rápidamente, más el audio. El tamaño depende de cuatro cosas:{" "}
        <strong>resolución</strong> (cuántos píxeles por fotograma),{" "}
        <strong>velocidad de fotogramas</strong> (fotogramas por segundo),{" "}
        <strong>duración</strong> (cuántos segundos) y <strong>bitrate</strong>{" "}
        (cuántos bits gasta el codificador por segundo de grabación). Un clip en
        4K a 60 fps tiene aproximadamente nueve veces más píxeles que uno en 1080p
        a 30 fps antes de cambiar cualquier otra cosa. Por eso lo más eficaz que
        puedes hacer es reducir la resolución y la duración: estás eliminando
        datos, no solo comprimiéndolos.
      </p>
      <p>
        El bitrate es donde ocurre la compresión real. Los códecs modernos
        descartan el detalle que tu ojo tiene menos probabilidades de echar en
        falta, así que un bitrate más bajo significa un archivo más pequeño con
        algo de pérdida de fidelidad. El arte está en encontrar el bitrate que sea
        lo bastante pequeño para tu destino pero lo bastante alto como para que
        nadie lo note.
      </p>

      <h2 id="resolution-and-trimming">Empieza por la resolución y la duración</h2>
      <p>
        Antes de tocar los ajustes del codificador, pregúntate si realmente
        necesitas cada píxel y cada segundo. Reducir la resolución es el cambio de
        mayor impacto que puedes hacer:
      </p>
      <ul>
        <li>
          <strong>De 4K a 1080p</strong> reduce el número de píxeles a una cuarta
          parte. Para el email y casi toda incrustación web, 1080p sobra.
        </li>
        <li>
          <strong>De 1080p a 720p</strong> lo vuelve a reducir más o menos a la
          mitad y es perfecto para grabaciones de pantalla rápidas, demos y
          cualquier cosa que vaya a reproducirse en una ventana pequeña.
        </li>
        <li>
          <strong>Recortar</strong> el silencio del principio y el final, o
          quedarte solo con la parte que importa, reduce el tamaño del archivo de
          forma lineal. Un clip de 30 segundos pesa la mitad que uno de 60 con la
          misma calidad.
        </li>
      </ul>
      <p>
        Si solo recuerdas una cosa, que sea esta: reducir un clip de 4K de 2
        minutos a un resumen de 720p de 40 segundos hará más por el tamaño de tu
        archivo que cualquier ajuste de bitrate.
      </p>

      <h2 id="crf-and-bitrate">CRF y bitrate: controlar la calidad</h2>
      <p>
        Una vez fijadas la resolución y la duración, controlas la calidad con un
        bitrate objetivo o con un factor de calidad llamado <strong>CRF</strong>{" "}
        (Constant Rate Factor, factor de tasa constante). El CRF le indica al
        codificador que apunte a una calidad visual constante y gaste el bitrate
        que haga falta, fotograma a fotograma: las escenas con mucho movimiento
        reciben más bits y las estáticas menos. Para H.264, el CRF va de unos 0
        (sin pérdidas, enorme) a 51 (diminuto, feo), y los números más bajos
        significan mejor calidad:
      </p>
      <ul>
        <li>
          <strong>CRF 18&ndash;20:</strong> visualmente casi sin pérdidas,
          archivos más grandes; ideal para másteres o vídeo web donde la calidad
          es primordial.
        </li>
        <li>
          <strong>CRF 23:</strong> el valor por defecto habitual; un equilibrio
          sólido entre tamaño y calidad para la mayoría de usos en web y redes.
        </li>
        <li>
          <strong>CRF 26&ndash;28:</strong> notablemente más pequeño, con un leve
          suavizado; útil cuando debes respetar un límite de tamaño estricto como
          el tope de un email.
        </li>
      </ul>
      <p>
        Cuando tienes un techo estricto &mdash;por ejemplo, un adjunto de email de
        25 MB&mdash; un bitrate objetivo es más predecible que el CRF. El cálculo
        aproximado: un tamaño de archivo objetivo en megabits (multiplica los MB
        por 8) dividido entre la duración en segundos te da tu presupuesto total
        de bitrate. Reserva unos 128 kbps para el audio y dale el resto al vídeo.
        Para un tope de 25 MB en un clip de 60 segundos, eso son unos 3,3 Mbps en
        total, de sobra para un 720p limpio.
      </p>

      <h2 id="codec-h264">Elige H.264 por compatibilidad</h2>
      <p>
        La elección del códec decide si tu vídeo se reproduce en todas partes o
        falla en silencio. <strong>H.264</strong> (también llamado AVC) es, con
        diferencia, la opción más segura: se reproduce en todos los navegadores
        modernos, en las vistas previas de los clientes de correo, en móviles y en
        las plataformas sociales, y se combina con audio AAC dentro de un
        contenedor MP4. Los códecs más nuevos como H.265/HEVC, VP9 y AV1 comprimen
        mejor &mdash;a veces de un 30 a un 50&nbsp;% más pequeños con la misma
        calidad&mdash; pero el soporte es desigual, y quien reciba el email en un
        dispositivo antiguo puede no ver absolutamente nada. Para compartir,
        quédate con H.264 en un MP4 a menos que controles exactamente cómo se va a
        reproducir el archivo.
      </p>
      <p>
        Si quieres entender qué códecs admite realmente un navegador concreto y por
        qué, MDN mantiene una referencia exhaustiva y actualizada en su{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guía de códecs de vídeo para la web
        </a>
        . Es la mejor fuente única para decidir cuándo es seguro ir más allá de
        H.264.
      </p>

      <h2 id="targets">Ajustes según el destino</h2>
      <p>
        Así es como encajan las piezas para cada destino habitual.
      </p>
      <ul>
        <li>
          <strong>Adjuntos de email:</strong> la mayoría de los proveedores
          limitan los adjuntos en torno a 25 MB (tanto Gmail como Outlook se
          mueven cerca de esa cifra). Apunta a 720p, H.264/MP4 y recorta sin
          piedad. Si aún te pasas, baja a CRF 26&ndash;28 o fija un bitrate
          objetivo con el cálculo de arriba. Para cualquier cosa de más de un par
          de minutos, un enlace suele ser más amable que un adjunto.
        </li>
        <li>
          <strong>Incrustación web:</strong> la velocidad de carga de la página
          importa, así que mantén los archivos ligeros: 1080p a CRF 23 es un punto
          ideal, y 720p para fondos o bucles decorativos. Usa MP4/H.264 como base
          para que el vídeo se reproduzca sin necesidad de un formato alternativo.
        </li>
        <li>
          <strong>Plataformas sociales:</strong> Instagram, TikTok, X y otras
          recodifican todo lo que subes, así que no tiene sentido enviar un máster
          enorme: lo van a comprimir de todos modos. Sube un archivo H.264 en
          1080p limpio con un bitrate razonable y deja que la plataforma haga su
          pasada. Ajustarse a la relación de aspecto de la plataforma (vertical
          9:16 para Reels y TikTok) importa más que el tamaño en bruto.
        </li>
      </ul>

      <h2 id="in-browser">Comprimir de forma privada, en tu navegador</h2>
      <p>
        No necesitas subir tu grabación al servidor de un desconocido para
        comprimirla. El{" "}
        <Link href="/es/video-compressor">compresor de vídeo</Link> de
        FileShrinking se ejecuta por completo en tu navegador: tu vídeo se procesa
        en tu propio dispositivo y nunca sale de él, lo cual importa para cualquier
        cosa personal o confidencial. También hay herramientas dedicadas para los
        formatos más habituales:{" "}
        <Link href="/es/compress-mp4">comprimir MP4</Link> para el contenedor
        H.264 universal y <Link href="/es/compress-mov">comprimir MOV</Link> para
        grabaciones recién salidas de un iPhone o una cámara. Si un clip es
        principalmente audio que da la casualidad de venir en un envoltorio de
        vídeo, el{" "}
        <Link href="/es/audio-compressor">compresor de audio</Link> puede reducir
        la pista de sonido por su cuenta.
      </p>
      <p>
        La única contrapartida honesta: la codificación en el navegador usa la CPU
        de tu ordenador, así que es <strong>más lenta que un servicio en la
        nube</strong> para clips largos o de alta resolución, y un archivo muy
        grande puede tardar un rato. A cambio de la privacidad de no subir nunca
        tu vídeo, la mayoría de la gente considera que esa espera merece la pena.
        Parte de tu original con la máxima calidad, reduce la resolución y recorta
        primero, elige H.264 y solo entonces ajusta el CRF o el bitrate: haz eso y
        alcanzarás cualquier objetivo de email, web o redes con margen de sobra.
      </p>
    </>
  );
}
