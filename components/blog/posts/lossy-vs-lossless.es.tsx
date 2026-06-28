import type { BlogPostMeta } from "@/lib/blog/types";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "lossy-vs-lossless-compression",
  title: "Compresi&oacute;n con p&eacute;rdida frente a compresi&oacute;n sin p&eacute;rdida, explicada",
  description:
    "&iquest;Cu&aacute;l es la diferencia real entre la compresi&oacute;n con y sin p&eacute;rdida? Cu&aacute;ndo usar cada una, c&oacute;mo se equilibran calidad y tama&ntilde;o, y qu&eacute; formatos usan cada tipo.",
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  authorId: "maya",
  tags: ["Fundamentos", "Compresión"],
  readingMinutes: 6,
};

export default function Content() {
  return (
    <>
      <p>
        Casi todos los archivos que env&iacute;as, subes o almacenas se han
        comprimido de alguna manera. La compresi&oacute;n es lo que permite que
        una pel&iacute;cula de dos horas quepa en un disco y que una foto de alta
        resoluci&oacute;n viaje por una conexi&oacute;n lenta. Pero no toda la
        compresi&oacute;n es igual. La distinci&oacute;n m&aacute;s importante de
        todas es si es <strong>con p&eacute;rdida</strong> o{" "}
        <strong>sin p&eacute;rdida</strong> &mdash; y entender la diferencia te
        ayudar&aacute; a elegir el formato y los ajustes adecuados cada vez.
      </p>

      <h2 id="lossless">&iquest;Qu&eacute; es la compresi&oacute;n sin p&eacute;rdida?</h2>
      <p>
        La compresi&oacute;n sin p&eacute;rdida reduce el tama&ntilde;o de un
        archivo conservando <strong>cada uno de los bits</strong> de los datos
        originales. Cuando lo descomprimes, recuperas una copia perfecta, id&eacute;ntica
        byte a byte. Funciona localizando y eliminando la redundancia
        estad&iacute;stica &mdash; patrones repetidos, secuencias predecibles,
        series de valores id&eacute;nticos &mdash; y codific&aacute;ndolos de
        forma m&aacute;s eficiente.
      </p>
      <p>
        El ejemplo cl&aacute;sico es un archivo ZIP: lo descomprimes y tus
        documentos quedan exactamente como estaban. Los formatos de imagen como{" "}
        <Link href="/es/compress-png">PNG</Link> y los de audio como FLAC tambi&eacute;n
        son sin p&eacute;rdida. La contrapartida es que la compresi&oacute;n sin
        p&eacute;rdida solo puede reducir los archivos hasta cierto punto &mdash;
        normalmente a un tama&ntilde;o de entre el 50&nbsp;% y el 90&nbsp;% del
        original, seg&uacute;n el contenido. Los datos que ya son aleatorios o que
        ya est&aacute;n comprimidos apenas se reducen.
      </p>

      <h2 id="lossy">&iquest;Qu&eacute; es la compresi&oacute;n con p&eacute;rdida?</h2>
      <p>
        La compresi&oacute;n con p&eacute;rdida va m&aacute;s all&aacute; al{" "}
        <strong>descartar informaci&oacute;n de forma permanente</strong> &mdash;
        en concreto, la informaci&oacute;n que es menos probable que las personas
        echen en falta. Una foto{" "}
        <Link href="/es/compress-jpeg">JPEG</Link> desecha matices de color y
        detalles que tu ojo tiende a pasar por alto; un MP3 elimina sonidos que
        quedan enmascarados por otros m&aacute;s fuertes. El resultado son
        archivos much&iacute;simo m&aacute;s peque&ntilde;os: un JPEG puede ocupar
        la d&eacute;cima parte que la imagen equivalente sin p&eacute;rdida, sin
        diferencia apreciable a tama&ntilde;os de visualizaci&oacute;n normales.
      </p>
      <p>
        La trampa est&aacute; en el nombre: los datos descartados desaparecen
        para siempre. Si bajas demasiado la calidad, empiezas a notar el coste
        &mdash; artefactos en bloques en las im&aacute;genes, audio turbio o
        met&aacute;lico, v&iacute;deo emborronado. Y como la p&eacute;rdida es
        permanente, tambi&eacute;n es <strong>acumulativa</strong>: cada vez que
        vuelves a guardar un archivo con p&eacute;rdida usando un ajuste con
        p&eacute;rdida, se degrada un poco m&aacute;s.
      </p>

      <h2 id="which">&iquest;Cu&aacute;ndo deber&iacute;as usar cada una?</h2>
      <p>Usa la compresi&oacute;n <strong>sin p&eacute;rdida</strong> cuando la fidelidad sea innegociable:</p>
      <ul>
        <li>Logotipos, iconos, dibujos lineales y capturas de pantalla (PNG mantiene los bordes n&iacute;tidos).</li>
        <li>Im&aacute;genes con transparencia.</li>
        <li>Copias maestras que volver&aacute;s a editar m&aacute;s adelante.</li>
        <li>Texto, c&oacute;digo, hojas de c&aacute;lculo y cualquier dato de documento.</li>
      </ul>
      <p>Usa la compresi&oacute;n <strong>con p&eacute;rdida</strong> cuando importe un tama&ntilde;o reducido y sea aceptable una p&eacute;rdida menor y casi siempre invisible:</p>
      <ul>
        <li>Fotograf&iacute;as e im&aacute;genes realistas para la web (JPEG, WebP, AVIF).</li>
        <li>M&uacute;sica y p&oacute;dcasts para escuchar (MP3, AAC).</li>
        <li>V&iacute;deo para streaming, redes sociales o correo electr&oacute;nico (H.264 y similares).</li>
      </ul>

      <h2 id="formats">Una chuleta r&aacute;pida de formatos</h2>
      <p>
        Muchos formatos modernos admiten en realidad <em>ambos</em> modos.{" "}
        <Link href="/es/compress-webp">WebP</Link> y{" "}
        <Link href="/es/compress-avif">AVIF</Link>, por ejemplo, tienen variantes
        con y sin p&eacute;rdida. Esta es la versi&oacute;n resumida:
      </p>
      <ul>
        <li>
          <strong>Sin p&eacute;rdida:</strong> PNG, GIF, FLAC, WAV (sin comprimir),
          ZIP, WebP/AVIF sin p&eacute;rdida.
        </li>
        <li>
          <strong>Con p&eacute;rdida:</strong> JPEG, MP3, AAC, H.264/H.265, VP9,
          WebP/AVIF con p&eacute;rdida.
        </li>
      </ul>
      <p>
        Para una referencia m&aacute;s a fondo sobre c&oacute;mo gestionan los
        navegadores estos formatos, la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          gu&iacute;a de MDN sobre tipos de archivo de imagen
        </a>{" "}
        es excelente.
      </p>

      <h2 id="practical">La conclusi&oacute;n pr&aacute;ctica</h2>
      <p>
        Parte de tu original con la m&aacute;xima calidad y comprime una sola
        vez, al formato que mejor se ajuste a la tarea. Para fotos destinadas a
        la web, un JPEG, WebP o AVIF con p&eacute;rdida a una calidad de 70&ndash;80
        es casi siempre la opci&oacute;n acertada. Para gr&aacute;ficos y
        cualquier cosa con texto o transparencia, recurre al PNG sin
        p&eacute;rdida. Y hagas lo que hagas, conserva una copia maestra impecable
        para no tener que volver a comprimir nunca un archivo ya comprimido.
      </p>
      <p>
        Todas las herramientas de FileShrinking se ejecutan por completo en tu
        navegador, as&iacute; que puedes experimentar con total libertad &mdash;
        prueba a{" "}
        <Link href="/es/image-compressor">comprimir una imagen</Link> con varios
        niveles de calidad distintos y compara. Tus archivos nunca salen de tu
        dispositivo, as&iacute; que no hay ning&uacute;n riesgo en hacer pruebas.
      </p>
    </>
  );
}
