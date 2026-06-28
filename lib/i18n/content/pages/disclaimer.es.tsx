import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Aviso legal",
  metaDescription:
    "Aviso legal honesto de FileShrinking: nuestras herramientas gratuitas de compresión 100% en el navegador no garantizan fidelidad ni tamaño. Conserva tus originales.",
  title: "Aviso legal",
  intro: (
    <>
      FileShrinking ofrece herramientas gratuitas de compresi&oacute;n basadas
      en el navegador como una comodidad. Esta p&aacute;gina explica los
      l&iacute;mites de esas herramientas, los resultados que puedes esperar de
      forma realista y las responsabilidades que siguen siendo tuyas.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="general">Solo informaci&oacute;n general</h2>
      <p>
        La informaci&oacute;n, las herramientas y el contenido de FileShrinking
        (el &ldquo;Servicio&rdquo;) se ofrecen &uacute;nicamente con fines
        informativos generales y de uso pr&aacute;ctico. Nos esforzamos por
        mantenerlo todo preciso y &uacute;til, pero no ofrecemos garant&iacute;as
        de ning&uacute;n tipo, expresas o impl&iacute;citas, sobre la
        integridad, exactitud, fiabilidad, idoneidad o disponibilidad del
        Servicio o de sus resultados. El uso del Servicio corre enteramente por
        tu cuenta y riesgo. Este aviso legal debe leerse junto con nuestras{" "}
        <Link href="/es/terms-of-service">Condiciones del servicio</Link>, que
        rigen el uso del sitio.
      </p>

      <h2 id="how-it-works">C&oacute;mo funcionan realmente nuestras herramientas</h2>
      <p>
        Cada compresor de FileShrinking se ejecuta{" "}
        <strong>completamente dentro de tu navegador web</strong>. Tus
        im&aacute;genes, PDF, v&iacute;deos y archivos de audio se cargan en la
        memoria de tu dispositivo, se procesan localmente con WebAssembly y se te
        devuelven directamente.{" "}
        <strong>
          Tus archivos nunca se suben a nuestros servidores, ni se transmiten por
          la red, ni se almacenan en ning&uacute;n servidor.
        </strong>{" "}
        Como todo el trabajo ocurre en tu propio hardware, la velocidad, la
        calidad e incluso si un archivo concreto puede procesarse o no dependen
        de tu dispositivo, tu navegador, la memoria disponible y el archivo que
        proporciones. Para conocer los datos limitados que el propio sitio
        gestiona, consulta nuestra{" "}
        <Link href="/es/privacy-policy">Pol&iacute;tica de privacidad</Link> y
        nuestra <Link href="/es/cookie-policy">Pol&iacute;tica de cookies</Link>.
      </p>

      <h2 id="no-guarantee">Sin garant&iacute;a de resultados</h2>
      <p>
        La compresi&oacute;n no es magia y no podemos prometer un resultado
        concreto. La mayor&iacute;a de la compresi&oacute;n de imagen, v&iacute;deo
        y audio es <strong>con p&eacute;rdida</strong>, lo que significa que
        descarta de forma permanente parte de los datos para reducir el
        tama&ntilde;o de los archivos. No garantizamos ninguna tasa de
        compresi&oacute;n, tama&ntilde;o de archivo, calidad de salida ni
        fidelidad perfecta respecto a tu original concretos. Cu&aacute;nto se
        reduce un archivo y c&oacute;mo se ve o suena despu&eacute;s dependen del
        propio contenido, del formato, de los ajustes que elijas y de lo bien
        optimizado que ya estuviera el original. Una foto reci&eacute;n sacada de
        una c&aacute;mara puede reducirse dr&aacute;sticamente, mientras que un
        archivo ya optimizado puede apenas cambiar &mdash; o, en algunos casos,
        un archivo recodificado podr&iacute;a incluso resultar m&aacute;s grande
        que el original.
      </p>

      <h2 id="limits">L&iacute;mites reales que conviene conocer</h2>
      <p>
        Los distintos tipos de archivo se comportan de forma muy diferente, y
        algunos tienen l&iacute;mites pr&aacute;cticos absolutos que ninguna
        herramienta dentro del navegador puede superar:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Tipo de archivo</th>
              <th>Qu&eacute; esperar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Im&aacute;genes (JPEG, PNG, WebP, AVIF, GIF)</td>
              <td>
                Suelen comprimirse bien, pero el ahorro var&iacute;a. Las
                im&aacute;genes ya optimizadas pueden reducirse poco o nada.
              </td>
            </tr>
            <tr>
              <td>PDF</td>
              <td>
                Nuestra herramienta de PDF reduce el tama&ntilde;o principalmente
                recomprimiendo las im&aacute;genes incrustadas. Los PDF formados
                por texto y gr&aacute;ficos vectoriales pueden reducirse muy poco
                o nada, porque no hay im&aacute;genes grandes que optimizar.
              </td>
            </tr>
            <tr>
              <td>V&iacute;deo</td>
              <td>
                La compresi&oacute;n de v&iacute;deo en el navegador es de un
                solo hilo e intensiva en CPU. Puede ser lenta, y los archivos muy
                grandes pueden fallar por completo en dispositivos con poca
                memoria o navegadores antiguos.
              </td>
            </tr>
            <tr>
              <td>Audio</td>
              <td>
                La recodificaci&oacute;n con p&eacute;rdida puede reducir el
                tama&ntilde;o, pero recomprimir un archivo ya comprimido (como un
                MP3 de baja tasa de bits) aporta poco beneficio y puede reducir
                la calidad.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Si una herramienta se bloquea, se queda sin memoria o falla con un
        archivo grande, eso es una limitaci&oacute;n de ejecutar un procesamiento
        pesado en una pesta&ntilde;a del navegador &mdash; no un defecto que
        debas esperar que solucionemos para un archivo concreto. Probar con un
        archivo m&aacute;s peque&ntilde;o, con un navegador diferente, con un
        dispositivo m&aacute;s potente o cerrar otras pesta&ntilde;as suele
        ayudar.
      </p>

      <h2 id="keep-originals">Conserva siempre tus archivos originales</h2>
      <p>
        Este es el punto m&aacute;s importante de toda esta p&aacute;gina.{" "}
        <strong>
          Conserva siempre una copia segura y sin modificar de cada archivo
          original antes de comprimirlo.
        </strong>{" "}
        La compresi&oacute;n puede ser acumulativa e irreversible: una vez que se
        descarta detalle, no se puede recuperar a partir del resultado
        comprimido. Trata el archivo comprimido como una copia nueva e
        independiente &mdash; nunca como tu &uacute;nica copia.
      </p>
      <ul>
        <li>
          Mant&eacute;n copias de seguridad de los originales de tus fotos,
          documentos y grabaciones importantes antes de procesarlos.
        </li>
        <li>
          Vuelve a comprimir a partir de tu original de m&aacute;s alta calidad,
          no de un archivo que ya haya sido comprimido.
        </li>
        <li>
          Comprueba que el archivo comprimido se abre correctamente y se ve o
          suena de forma aceptable antes de eliminar el original.
        </li>
      </ul>

      <h2 id="no-liability">Sin responsabilidad por p&eacute;rdida de datos</h2>
      <p>
        En la m&aacute;xima medida permitida por la ley, FileShrinking no es
        responsable de ninguna p&eacute;rdida, da&ntilde;o o corrupci&oacute;n de
        tus archivos o datos, ni de cualquier otra p&eacute;rdida directa,
        indirecta, incidental o consecuente derivada del uso (o la imposibilidad
        de uso) del Servicio. Esto incluye fallos del navegador, errores del
        dispositivo, procesamientos interrumpidos, resultados inesperados o la
        eliminaci&oacute;n de un original antes de haber confirmado el resultado.
        Como todo se ejecuta localmente en tu dispositivo, no tenemos acceso a
        tus archivos ni posibilidad de recuperarlos. La responsabilidad de hacer
        copias de seguridad y verificar tus datos es &uacute;nicamente tuya.
      </p>

      <h2 id="external-links">Enlaces externos y publicidad</h2>
      <p>
        El Servicio puede contener enlaces a sitios web de terceros y muestra
        publicidad proporcionada por Google AdSense. Estos enlaces y anuncios se
        ofrecen por comodidad y para apoyar el funcionamiento gratuito del sitio.
        No controlamos, respaldamos, garantizamos ni asumimos responsabilidad
        alguna por el contenido, los productos, los servicios, la exactitud o las
        pr&aacute;cticas de ning&uacute;n sitio o anunciante de terceros. Un
        enlace o un anuncio <strong>no constituye un respaldo</strong>. Cualquier
        trato que tengas con un tercero es exclusivamente entre t&uacute; y dicha
        parte. Las cookies de publicidad y anal&iacute;tica se cargan
        &uacute;nicamente despu&eacute;s de que des tu consentimiento; puedes leer
        c&oacute;mo gestionamos esto en nuestra{" "}
        <Link href="/es/cookie-policy">Pol&iacute;tica de cookies</Link> y
        nuestra{" "}
        <Link href="/es/privacy-policy">Pol&iacute;tica de privacidad</Link>.
      </p>

      <h2 id="no-professional-advice">No es asesoramiento profesional</h2>
      <p>
        Nada de lo que aparece en FileShrinking constituye asesoramiento legal,
        t&eacute;cnico, financiero o profesional de ning&uacute;n otro tipo. Las
        gu&iacute;as, las preguntas frecuentes y las explicaciones sobre formatos
        de archivo y compresi&oacute;n son contenido educativo general y pueden no
        aplicarse a tu situaci&oacute;n concreta. Si necesitas cumplir una
        especificaci&oacute;n t&eacute;cnica concreta, un est&aacute;ndar de
        archivado o un requisito legal o normativo &mdash; por ejemplo, para
        presentaciones judiciales, im&aacute;genes m&eacute;dicas o impresi&oacute;n
        profesional &mdash; consulta a un profesional cualificado en lugar de
        confiar en estas herramientas o art&iacute;culos.
      </p>

      <h2 id="availability">Disponibilidad y cambios</h2>
      <p>
        Ofrecemos el Servicio &ldquo;tal cual&rdquo; y &ldquo;seg&uacute;n
        disponibilidad&rdquo;. Podemos cambiar, suspender o interrumpir cualquier
        herramienta o funci&oacute;n en cualquier momento y sin previo aviso, y no
        garantizamos que el Servicio sea ininterrumpido, est&eacute; libre de
        errores o sea compatible con todos los dispositivos o navegadores. Podemos
        actualizar este aviso legal de vez en cuando; la fecha de &ldquo;&Uacute;ltima
        actualizaci&oacute;n&rdquo; que aparece arriba refleja el cambio m&aacute;s
        reciente, y el uso continuado del Servicio implica que aceptas la versi&oacute;n
        vigente.
      </p>

      <h2 id="contact">Cont&aacute;ctanos</h2>
      <p>
        Si tienes alguna pregunta sobre este aviso legal, puedes escribirnos por
        correo electr&oacute;nico a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>
    </>
  ),
};
