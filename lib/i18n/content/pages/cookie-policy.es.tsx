import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Política de cookies",
  metaDescription:
    "Cómo usa FileShrinking las cookies y el almacenamiento local: almacenamiento propio mínimo para tu consentimiento y tema, más Google Analytics y AdSense con consentimiento.",
  title: "Política de cookies",
  intro: (
    <>
      FileShrinking se ejecuta por completo en tu navegador y reduce las cookies
      al mínimo absoluto. Esta página explica exactamente qué se almacena en
      tu dispositivo, por qué, durante cuánto tiempo y cómo puedes cambiar tus
      decisiones en cualquier momento.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Resumen</h2>
      <p>
        Una &ldquo;cookie&rdquo; es un pequeño archivo de texto que un sitio web
        pide a tu navegador que almacene para poder recordar información entre
        visitas. Tecnologías relacionadas como <strong>localStorage</strong>
        {" "}funcionan del mismo modo: guardan un poco de datos en tu propio
        dispositivo. FileShrinking es una herramienta que prioriza la privacidad
        y funciona 100% del lado del cliente. Tus archivos se comprimen
        localmente en tu navegador y <strong>nunca se suben</strong> a nosotros
        ni a nadie más, por lo que jamás establecemos una cookie que contenga,
        rastree o transmita tus archivos o su contenido.
      </p>
      <p>
        Usamos solo una mínima cantidad de almacenamiento <strong>propio</strong>
        {" "}para recordar tus preferencias, y cargamos servicios de{" "}
        <strong>publicidad y analítica de terceros</strong> de Google{" "}
        <strong>solo después de que des tu consentimiento</strong>. Hasta que
        aceptes, esos servicios están bloqueados y no establecen ninguna cookie.
        Esta política debe leerse junto con nuestra{" "}
        <Link href="/es/privacy-policy">Política de privacidad</Link>.
      </p>

      <h2 id="first-party">Almacenamiento propio que establecemos</h2>
      <p>
        Estos elementos los escribe el propio FileShrinking, residen únicamente
        en tu dispositivo y son esenciales para que el sitio recuerde decisiones
        básicas. Se almacenan en el localStorage de tu navegador en lugar de
        como cookies tradicionales, nunca se envían a un servidor y no te
        identifican.
      </p>
      <ul>
        <li>
          <strong>Decisión de consentimiento.</strong> Cuando aceptas o rechazas
          los servicios opcionales en nuestro banner de consentimiento, guardamos
          esa decisión para no volver a preguntarte en cada carga de página y
          para poder respetarla.
        </li>
        <li>
          <strong>Preferencia de tema.</strong> Si cambias entre el modo claro y
          el oscuro, recordamos tu elección para que el sitio se vea tal como lo
          dejaste.
        </li>
      </ul>

      <h2 id="consent-gated">
        Servicios de terceros sujetos a consentimiento
      </h2>
      <p>
        Para mantener FileShrinking gratuito, el sitio se financia con publicidad
        y usamos analítica para entender qué herramientas son útiles. Estos
        servicios los proporciona Google y se cargan mediante{" "}
        <strong>Google Tag Manager</strong>. Pueden establecer sus propias
        cookies, pero solo se ejecutan <strong>después de que hayas aceptado
        explícitamente</strong> en nuestro banner de consentimiento. Los
        servicios implicados son:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> &mdash; mide el uso agregado y anónimo,
          como las visitas a páginas y qué compresores son populares, lo que nos
          ayuda a mejorar el sitio.
        </li>
        <li>
          <strong>Google AdSense</strong> (y su publicación de anuncios
          DoubleClick) &mdash; muestra los anuncios que financian el proyecto y
          ayuda a limitar con qué frecuencia ves el mismo anuncio.
        </li>
      </ul>

      <h2 id="table">Cookies y almacenamiento que utilizamos</h2>
      <p>
        La siguiente tabla enumera los elementos principales. Los nombres y
        duraciones exactos que establece Google pueden cambiar; para conocer los
        detalles más actuales, consulta la propia documentación de Google
        enlazada en{" "}
        <a href="#managing">Gestionar tus decisiones</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Proveedor</th>
            <th>Finalidad</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Decisión de consentimiento
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (propia)</td>
            <td>
              Recuerda si aceptaste o rechazaste las cookies opcionales.
            </td>
            <td>Persistente hasta que la borres</td>
          </tr>
          <tr>
            <td>
              Tema
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (propia)</td>
            <td>Recuerda tu preferencia de modo claro u oscuro.</td>
            <td>Persistente hasta que la borres</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics (solo con consentimiento)</td>
            <td>
              Distingue a los visitantes anónimos para medir el uso agregado del
              sitio.
            </td>
            <td>Hasta 2 años</td>
          </tr>
          <tr>
            <td>
              IDE, DSID, test_cookie
              <br />
              y cookies de anuncios relacionadas
            </td>
            <td>Google AdSense / DoubleClick (solo con consentimiento)</td>
            <td>
              Publica y mide anuncios y limita la visualización repetida del
              mismo anuncio.
            </td>
            <td>Sesión hasta 13 meses</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consent-mode">
        Modo de consentimiento v2: denegado por defecto
      </h2>
      <p>
        Usamos el <strong>Modo de consentimiento v2</strong> de Google. Dicho de
        forma sencilla, esto significa que cada señal de consentimiento &mdash;
        para el almacenamiento analítico, el almacenamiento publicitario, la
        personalización de anuncios y los datos de usuario para anuncios &mdash;
        comienza en el estado <strong>&ldquo;denegado&rdquo;</strong> por defecto
        en el momento en que se carga la página. No se concede nada hasta que
        tomas una decisión.
      </p>
      <p>
        Si <strong>aceptas</strong>, las señales correspondientes pasan a
        &ldquo;concedido&rdquo; y Google Analytics y AdSense pueden establecer las
        cookies descritas anteriormente. Si <strong>rechazas</strong> o
        simplemente ignoras el banner, esas señales permanecen en
        &ldquo;denegado&rdquo;: los scripts se ejecutan en un modo restringido y
        sin cookies, y no almacenan identificadores en tu dispositivo. En
        cualquier caso, tus preferencias propias indicadas arriba siguen
        funcionando porque son estrictamente necesarias para que el sitio
        funcione.
      </p>

      <h2 id="managing">Gestionar tus decisiones</h2>
      <p>
        Siempre tienes el control. Puedes cambiar o retirar tu consentimiento en
        cualquier momento mediante el enlace <strong>Ajustes de
        consentimiento</strong> que aparece en el pie de cada página, que vuelve
        a abrir el banner de consentimiento para que actualices tu decisión.
        Retirar el consentimiento impide que los servicios de Google establezcan
        nuevas cookies en adelante.
      </p>
      <p>
        También puedes gestionar las cookies directamente en tu navegador: la
        mayoría de los navegadores te permiten ver, bloquear o eliminar cookies y
        borrar el almacenamiento del sitio desde su menú de privacidad o
        configuración. Eliminar nuestros elementos propios simplemente significa
        que el sitio volverá a pedirte tus preferencias de tema y consentimiento.
        Para más detalles sobre los servicios de terceros, consulta la{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          información sobre cookies
        </a>{" "}
        de Google y su{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidad
        </a>
        .
      </p>

      <h2 id="changes">Cambios en esta política</h2>
      <p>
        Podemos actualizar esta Política de cookies si añadimos una función o
        cambiamos los servicios en los que nos apoyamos. Cuando lo hagamos,
        revisaremos la fecha de &ldquo;Última actualización&rdquo; en la parte
        superior de esta página. Los cambios significativos que afecten a las
        cookies que establecemos se reflejarán en el banner de consentimiento
        para que puedas revisar tu decisión.
      </p>

      <h2 id="contact">Contáctanos</h2>
      <p>
        Si tienes alguna pregunta sobre cómo usamos las cookies o el
        almacenamiento local, escríbenos a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Para
        obtener una visión más completa de cómo tratamos los datos, lee nuestra{" "}
        <Link href="/es/privacy-policy">Política de privacidad</Link>.
      </p>
    </>
  ),
};
