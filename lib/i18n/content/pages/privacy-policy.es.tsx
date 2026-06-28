import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Política de privacidad",
  metaDescription:
    "Cómo gestiona FileShrinking tus datos: tus archivos nunca se suben, la compresión ocurre en tu navegador. Analytics y anuncios requieren consentimiento.",
  title: "Política de privacidad",
  intro: (
    <>
      FileShrinking est&aacute; dise&ntilde;ado con la privacidad por delante. Los
      archivos que comprimes nunca se suben: se procesan por completo en tu
      navegador, de modo que nunca los recibimos, los vemos ni los almacenamos.
      Esta pol&iacute;tica explica los pocos datos que s&iacute; manejamos y las
      opciones que t&uacute; controlas.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Resumen</h2>
      <p>
        Esta Pol&iacute;tica de privacidad describe c&oacute;mo FileShrinking
        ({" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a>, el
        &laquo;Sitio&raquo;) recopila, utiliza y protege la informaci&oacute;n
        cuando lo visitas. El Sitio est&aacute; gestionado por el equipo de
        FileShrinking (&laquo;nosotros&raquo; o &laquo;nuestro&raquo;). Al usar el
        Sitio aceptas las pr&aacute;cticas descritas aqu&iacute;. Lee tambi&eacute;n
        nuestra{" "}
        <Link href="/es/cookie-policy">Pol&iacute;tica de cookies</Link> y nuestros{" "}
        <Link href="/es/terms-of-service">T&eacute;rminos del servicio</Link>, que
        forman parte de tu acuerdo con nosotros.
      </p>

      <h2 id="files-never-uploaded">Tus archivos nunca se suben</h2>
      <p>
        Esto es lo m&aacute;s importante que debes entender sobre FileShrinking.
        Todas nuestras herramientas de compresi&oacute;n &mdash; para
        im&aacute;genes, PDF, v&iacute;deo y audio &mdash; se ejecutan{" "}
        <strong>100&nbsp;% dentro de tu navegador web</strong> mediante
        WebAssembly. Cuando a&ntilde;ades un archivo, este se carga en la memoria
        de tu dispositivo y se procesa localmente en tu propio hardware. El
        resultado comprimido se te devuelve directamente para que lo descargues.
      </p>
      <p>
        Gracias a este dise&ntilde;o, <strong>nunca recibimos, vemos,
        almacenamos ni transmitimos</strong> los archivos que comprimes ni
        ninguno de sus contenidos. No hay ning&uacute;n paso de subida en el
        servidor, no se guarda ninguna copia en ning&uacute;n lugar y tus archivos
        nunca salen de tu dispositivo. De hecho, una vez cargada la p&aacute;gina
        puedes desconectarte por completo de internet y las herramientas
        seguir&aacute;n funcionando.
      </p>

      <h2 id="what-we-do-not-collect">Lo que no recopilamos</h2>
      <ul>
        <li>
          <strong>Tus archivos o sus contenidos.</strong> No tenemos acceso a los
          documentos, fotos, v&iacute;deos o audio que procesas.
        </li>
        <li>
          <strong>Datos de cuenta.</strong> FileShrinking no tiene registro,
          inicio de sesi&oacute;n ni cuentas de usuario, as&iacute; que no
          recopilamos nombres, contrase&ntilde;as ni perfiles.
        </li>
        <li>
          <strong>Informaci&oacute;n de pago.</strong> El Sitio es de uso
          gratuito; no procesamos pagos ni almacenamos ning&uacute;n dato
          financiero.
        </li>
      </ul>

      <h2 id="data-we-use">Informaci&oacute;n que se utiliza</h2>
      <p>
        FileShrinking utiliza intencionadamente muy pocos datos. La siguiente
        tabla resume qu&eacute; se almacena o procesa, d&oacute;nde reside y por
        qu&eacute;.
      </p>
      <table>
        <thead>
          <tr>
            <th>Datos</th>
            <th>D&oacute;nde residen</th>
            <th>Finalidad</th>
            <th>&iquest;Requiere consentimiento?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elecci&oacute;n de consentimiento</td>
            <td>localStorage (tu navegador)</td>
            <td>
              Recordar si aceptaste o rechazaste analytics y anuncios
            </td>
            <td>No: estrictamente necesario</td>
          </tr>
          <tr>
            <td>Preferencia de tema</td>
            <td>localStorage (tu navegador)</td>
            <td>
              Recordar el modo claro/oscuro para que el Sitio se vea bien al
              volver
            </td>
            <td>No: estrictamente necesario</td>
          </tr>
          <tr>
            <td>Datos de analytics</td>
            <td>Google Analytics (a trav&eacute;s de Google Tag Manager)</td>
            <td>Comprender el uso agregado para mejorar el Sitio</td>
            <td>S&iacute;</td>
          </tr>
          <tr>
            <td>Datos publicitarios</td>
            <td>Google AdSense</td>
            <td>Mostrar anuncios que ayudan a mantener el Sitio gratuito</td>
            <td>S&iacute;</td>
          </tr>
        </tbody>
      </table>
      <p>
        Los valores de <strong>localStorage</strong> anteriores son
        configuraciones peque&ntilde;as almacenadas &uacute;nicamente en tu
        navegador. No se nos transmiten y no contienen informaci&oacute;n
        personal: solo tu decisi&oacute;n de consentimiento y el tema que has
        elegido. Puedes borrarlos en cualquier momento desde la
        configuraci&oacute;n de tu navegador.
      </p>

      <h2 id="analytics">Analytics</h2>
      <p>
        Utilizamos <strong>Google Analytics</strong>, cargado a trav&eacute;s de{" "}
        <strong>Google Tag Manager (GTM)</strong>, para entender c&oacute;mo usan
        el Sitio los visitantes de forma agregada; por ejemplo, qu&eacute;
        herramientas son populares y qu&eacute; p&aacute;ginas cargan despacio.
        Esto nos ayuda a priorizar mejoras. Analytics{" "}
        <strong>solo se carga despu&eacute;s de que des tu consentimiento</strong>.
        Si lo rechazas, estos scripts no se ejecutan y no se recopila
        ning&uacute;n dato de analytics. Los datos de analytics se recopilan y
        procesan de forma agregada y no se utilizan para identificarte
        personalmente.
      </p>

      <h2 id="advertising">Publicidad</h2>
      <p>
        FileShrinking es gratuito y cubrimos nuestros costes con publicidad
        servida por <strong>Google AdSense</strong>. Los anuncios{" "}
        <strong>solo se cargan despu&eacute;s de que des tu consentimiento</strong>.
        Cuando consientes la publicidad, Google y sus socios pueden utilizar
        cookies, identificadores de dispositivo y tecnolog&iacute;as similares
        para servir y medir anuncios, incluidos{" "}
        <strong>anuncios personalizados (basados en intereses)</strong> a partir
        de tu actividad previa. Si lo rechazas, AdSense no se carga y no
        recibir&aacute;s publicidad personalizada por nuestra parte.
      </p>
      <p>
        El uso que Google hace de las cookies publicitarias se rige por las
        propias pol&iacute;ticas de Google. Puedes obtener m&aacute;s
        informaci&oacute;n y gestionar tu configuraci&oacute;n de anuncios en la{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          p&aacute;gina de Publicidad de Google
        </a>{" "}
        y revisar la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pol&iacute;tica de Privacidad de Google
        </a>
        .
      </p>

      <h2 id="consent-mode">Modo de consentimiento de Google v2</h2>
      <p>
        Implementamos el <strong>Modo de consentimiento de Google v2</strong>.
        Antes de que tomes una decisi&oacute;n, las etiquetas de analytics y
        publicidad de Google adoptan por defecto un estado denegado, lo que
        significa que no establecen cookies identificativas ni recopilan datos
        personales. Solo despu&eacute;s de que concedas tu consentimiento se
        actualizan las se&ntilde;ales pertinentes y se habilitan los servicios
        correspondientes. Esto te da un control real sobre si analytics y
        publicidad llegan a ejecutarse siquiera.
      </p>

      <h2 id="third-party">Servicios y enlaces de terceros</h2>
      <p>
        Los servicios de terceros mencionados anteriormente est&aacute;n
        gestionados por Google LLC. El tratamiento de cualquier dato que
        recopilen se rige por sus propios t&eacute;rminos, no por los nuestros:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pol&iacute;tica de Privacidad de Google
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            C&oacute;mo utiliza Google las cookies en publicidad
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacidad y seguridad de los datos de Google Analytics
          </a>
        </li>
      </ul>
      <p>
        El Sitio tambi&eacute;n puede contener enlaces a otros sitios web que no
        controlamos. No somos responsables de las pr&aacute;cticas de privacidad
        de esos sitios y te animamos a leer sus pol&iacute;ticas.
      </p>

      <h2 id="your-rights">Tus derechos de privacidad (RGPD)</h2>
      <p>
        Si te encuentras en el Espacio Econ&oacute;mico Europeo o en el Reino
        Unido, dispones de derechos en virtud del Reglamento General de
        Protecci&oacute;n de Datos, incluido el derecho a{" "}
        <strong>acceder</strong> a los datos personales que se conservan sobre ti,
        el derecho a la <strong>supresi&oacute;n (eliminaci&oacute;n)</strong>, el
        derecho a <strong>oponerte al tratamiento o limitarlo</strong> y el
        derecho a <strong>retirar el consentimiento</strong> en cualquier momento.
        Cuando nos basamos en el consentimiento (analytics y publicidad),
        retirarlo es tan f&aacute;cil como darlo y no afectar&aacute; a la licitud
        del tratamiento realizado con anterioridad.
      </p>
      <p>Para ejercer estos derechos puedes:</p>
      <ul>
        <li>
          <strong>Volver a abrir tu configuraci&oacute;n de consentimiento</strong>{" "}
          en cualquier momento mediante el enlace de consentimiento o de
          preferencias de cookies del pie de cada p&aacute;gina, y despu&eacute;s
          cambiar o retirar tus elecciones.
        </li>
        <li>
          <strong>Borrar el almacenamiento de tu navegador</strong> para eliminar
          los valores de consentimiento y de tema guardados localmente.
        </li>
        <li>
          <strong>Escribirnos</strong> a{" "}
          <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> y te
          responderemos dentro del plazo exigido por la legislaci&oacute;n
          aplicable.
        </li>
      </ul>
      <p>
        Tambi&eacute;n tienes derecho a presentar una reclamaci&oacute;n ante la
        autoridad de protecci&oacute;n de datos de tu pa&iacute;s o regi&oacute;n
        si consideras que se han vulnerado tus derechos.
      </p>

      <h2 id="ccpa">Derechos de privacidad de California (CCPA/CPRA)</h2>
      <p>
        Si resides en California, la Ley de Privacidad del Consumidor de
        California, en su versi&oacute;n modificada, te otorga derechos a saber
        qu&eacute; informaci&oacute;n personal se recopila, a solicitar su
        eliminaci&oacute;n y a oponerte a la &laquo;venta&raquo; o al
        &laquo;intercambio&raquo; de informaci&oacute;n personal. No vendemos tu
        informaci&oacute;n personal a cambio de dinero. Cuando el uso de cookies
        publicitarias pueda considerarse &laquo;intercambio&raquo; para publicidad
        conductual entre contextos, puedes oponerte rechazando el consentimiento
        de publicidad en nuestra configuraci&oacute;n de consentimiento o no
        otorg&aacute;ndolo en primer lugar. Para realizar una solicitud, escribe a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2 id="retention">Conservaci&oacute;n de datos</h2>
      <p>
        Como tus archivos se procesan localmente y nunca llegan hasta nosotros, no
        hay nada que podamos conservar sobre ellos. Los valores de consentimiento
        y de tema almacenados en tu navegador persisten hasta que los borres o
        cambies tus elecciones. Los datos de analytics y publicidad, cuando se
        habilitan con tu consentimiento, los conserva Google de acuerdo con su
        propia configuraci&oacute;n y sus pol&iacute;ticas de conservaci&oacute;n.
      </p>

      <h2 id="children">Privacidad de los menores</h2>
      <p>
        FileShrinking es una herramienta para el p&uacute;blico general y no
        est&aacute; dirigida a menores de 13 a&ntilde;os (o la edad m&iacute;nima
        en tu jurisdicci&oacute;n). No recopilamos a sabiendas
        informaci&oacute;n personal de menores. Si crees que un menor nos ha
        facilitado informaci&oacute;n personal, ponte en contacto con nosotros para
        que podamos tomar las medidas adecuadas.
      </p>

      <h2 id="changes">Cambios en esta pol&iacute;tica</h2>
      <p>
        Es posible que actualicemos esta Pol&iacute;tica de privacidad de vez en
        cuando para reflejar cambios en nuestras pr&aacute;cticas o por motivos
        legales. Cuando lo hagamos, revisaremos la fecha de
        &laquo;&Uacute;ltima actualizaci&oacute;n&raquo; en la parte superior de
        esta p&aacute;gina. Los cambios significativos pueden destacarse en el
        Sitio. Te animamos a revisar esta p&aacute;gina peri&oacute;dicamente.
      </p>

      <h2 id="contact">Cont&aacute;ctanos</h2>
      <p>
        Si tienes alguna pregunta sobre esta Pol&iacute;tica de privacidad o
        sobre c&oacute;mo se gestionan tus datos, escr&iacute;benos a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> o
        visita nuestra <Link href="/es/contact">p&aacute;gina de contacto</Link>, y
        estaremos encantados de ayudarte.
      </p>
    </>
  ),
};
