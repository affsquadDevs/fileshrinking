import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Condiciones del servicio",
  metaDescription:
    "Las condiciones de uso de FileShrinking, un compresor de archivos gratuito del lado del cliente. Se ofrece tal cual, funciona en local y nunca sube tus archivos.",
  title: "Condiciones del servicio",
  intro: (
    <>
      Estas condiciones rigen tu uso de FileShrinking. Al usar el sitio, las
      aceptas. Est&aacute;n redactadas para que se entiendan &mdash; y, como
      cada herramienta funciona &iacute;ntegramente en tu navegador, son
      misericordiosamente breves.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="acceptance">1. Aceptaci&oacute;n de estas condiciones</h2>
      <p>
        FileShrinking (&ldquo;FileShrinking,&rdquo; &ldquo;nosotros,&rdquo;
        &ldquo;nos&rdquo; o &ldquo;el servicio&rdquo;) ofrece herramientas
        gratuitas basadas en el navegador que comprimen y convierten
        im&aacute;genes, PDF, v&iacute;deo y audio. Al acceder al sitio web{" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a> o utilizarlo,
        aceptas quedar vinculado por estas Condiciones del servicio. Si no
        est&aacute;s de acuerdo con alguna parte de estas condiciones, te
        rogamos que no uses el sitio.
      </p>
      <p>
        Estas condiciones funcionan junto con nuestra{" "}
        <Link href="/es/privacy-policy">Pol&iacute;tica de privacidad</Link> y
        nuestro <Link href="/es/disclaimer">Aviso legal</Link>, que se
        incorporan aqu&iacute; por referencia. En conjunto describen
        c&oacute;mo funciona el servicio y los l&iacute;mites de lo que podemos
        prometer.
      </p>

      <h2 id="how-it-works">2. C&oacute;mo funciona el servicio</h2>
      <p>
        FileShrinking es una herramienta{" "}
        <strong>100% del lado del cliente</strong>. Cuando a&ntilde;ades un
        archivo, este se carga en la memoria de tu navegador y se procesa
        all&iacute; mediante WebAssembly y API web est&aacute;ndar. Tus
        archivos <strong>nunca se suben a un servidor</strong>, nunca se
        transmiten por la red y nunca son almacenados por nosotros. Como el
        trabajo ocurre en tu propio dispositivo, no podemos ver, acceder a,
        copiar ni adquirir la propiedad de ning&uacute;n archivo que proceses
        &mdash; sencillamente no existe una copia en el servidor que podamos
        conservar.
      </p>
      <p>
        Una consecuencia pr&aacute;ctica de este dise&ntilde;o es que los
        resultados dependen de tu propio hardware y software. La velocidad de
        procesamiento, el tama&ntilde;o m&aacute;ximo de archivo que puedes
        manejar, los formatos que admite tu navegador y el resultado exacto
        var&iacute;an seg&uacute;n el dispositivo, el navegador, la memoria
        disponible y el sistema operativo. No garantizamos que un archivo
        concreto se comprima, convierta o abra correctamente en tu
        configuraci&oacute;n.
      </p>

      <h2 id="free">3. El servicio es gratuito</h2>
      <p>
        Las herramientas son de uso gratuito, sin registro, sin
        suscripci&oacute;n y sin marcas de agua. Mantenemos esto en marcha
        gracias a la publicidad, en lugar de cobrarte. Podemos a&ntilde;adir,
        cambiar o eliminar herramientas y funciones en cualquier momento, y
        podemos limitar o interrumpir el servicio total o parcialmente sin
        previo aviso. No tenemos ninguna obligaci&oacute;n de mantener
        disponible ninguna herramienta concreta.
      </p>

      <h2 id="acceptable-use">4. Uso aceptable</h2>
      <p>Aceptas que no utilizar&aacute;s FileShrinking para:</p>
      <ul>
        <li>
          procesar, crear o distribuir contenido que sea ilegal, infractor,
          difamatorio o que vulnere los derechos de cualquier tercero;
        </li>
        <li>
          manejar archivos que no sean de tu propiedad o sobre los que no
          tengas los derechos y permisos necesarios para usarlos;
        </li>
        <li>
          infringir cualquier ley o normativa aplicable en tu
          jurisdicci&oacute;n, incluidas las leyes de exportaci&oacute;n,
          privacidad y propiedad intelectual;
        </li>
        <li>
          intentar perturbar, sobrecargar, aplicar ingenier&iacute;a inversa
          con fines maliciosos o interferir en el funcionamiento, la seguridad
          o la integridad del sitio o de su c&oacute;digo subyacente; o
        </li>
        <li>
          tergiversar el servicio, por ejemplo, rehosped&aacute;ndolo de un
          modo que d&eacute; a entender que es tuyo o que sube archivos cuando
          no lo hace.
        </li>
      </ul>
      <p>
        <strong>
          Eres el &uacute;nico responsable de tus archivos
        </strong>{" "}
        y de confirmar que tienes derecho a usarlos. Dado que el procesamiento
        ocurre en tu dispositivo, solo t&uacute; controlas lo que introduces en
        las herramientas y lo que haces con los resultados.
      </p>

      <h2 id="no-warranty">
        5. Sin garant&iacute;a &mdash; se ofrece &ldquo;tal cual&rdquo;
      </h2>
      <p>
        El servicio se ofrece <strong>&ldquo;tal cual&rdquo;</strong> y{" "}
        <strong>&ldquo;seg&uacute;n disponibilidad,&rdquo;</strong> sin
        garant&iacute;as de ning&uacute;n tipo, ya sean expresas o
        impl&iacute;citas. En la m&aacute;xima medida permitida por la ley,
        renunciamos a todas las garant&iacute;as, incluidas las
        garant&iacute;as impl&iacute;citas de comerciabilidad, idoneidad para
        un fin determinado, exactitud y no infracci&oacute;n. No garantizamos
        que el servicio sea ininterrumpido, est&eacute; libre de errores, sea
        seguro ni que ning&uacute;n resultado vaya a cumplir tus expectativas.
      </p>
      <p>
        La compresi&oacute;n suele ser <strong>con p&eacute;rdida</strong>:
        para reducir el tama&ntilde;o de los archivos, las herramientas pueden
        descartar datos que no se pueden recuperar. Eres responsable de revisar
        cada resultado antes de confiar en &eacute;l.
      </p>

      <h2 id="liability">
        6. Limitaci&oacute;n de responsabilidad y p&eacute;rdida de datos
      </h2>
      <p>
        En la m&aacute;xima medida permitida por la ley, FileShrinking y sus
        operadores no ser&aacute;n responsables de ning&uacute;n da&ntilde;o
        indirecto, incidental, especial, consecuente o punitivo, ni de
        ninguna p&eacute;rdida de datos, archivos, beneficios o fondo de
        comercio, que surja de o est&eacute; relacionada con tu uso (o la
        imposibilidad de uso) del servicio &mdash; incluso si se nos ha
        advertido de la posibilidad de tales da&ntilde;os.
      </p>
      <p>
        Fundamental:{" "}
        <strong>
          conserva siempre una copia de tus archivos originales.
        </strong>{" "}
        El procesamiento en el navegador puede fallar, una pesta&ntilde;a puede
        bloquearse o un resultado puede no ser satisfactorio y, como nunca
        recibimos tus archivos, no podemos recuperar nada por ti. Trata el
        resultado como una copia nueva y compru&eacute;balo antes de eliminar
        tus originales.
      </p>

      <h2 id="ip">7. Propiedad intelectual</h2>
      <p>
        El nombre, el logotipo, el dise&ntilde;o del sitio web, los textos y el
        c&oacute;digo original de FileShrinking son propiedad nuestra o de
        nuestros licenciantes y est&aacute;n protegidos por las leyes de
        propiedad intelectual. Puedes usar el sitio para su finalidad prevista,
        pero no puedes copiar, reetiquetar ni redistribuir el sitio en
        s&iacute; sin autorizaci&oacute;n. Los motores de compresi&oacute;n
        subyacentes son proporcionados por sus respectivos proyectos de
        c&oacute;digo abierto bajo sus propias licencias.
      </p>
      <p>
        <strong>Tus archivos siguen siendo tuyos.</strong> No reclamamos
        ninguna propiedad sobre ning&uacute;n archivo que proceses, ni
        adquirimos derecho alguno sobre &eacute;l &mdash; y, como se ha
        se&ntilde;alado antes, ni siquiera lo recibimos.
      </p>

      <h2 id="third-party">8. Servicios de terceros</h2>
      <p>
        Utilizamos un peque&ntilde;o n&uacute;mero de servicios de terceros
        para operar el sitio y mantenerlo gratuito. Estos se cargan
        &uacute;nicamente como se describe en nuestra{" "}
        <Link href="/es/privacy-policy">Pol&iacute;tica de privacidad</Link> y,
        cuando es necesario, est&aacute;n condicionados a tu consentimiento:
      </p>
      <table>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Finalidad</th>
            <th>Cu&aacute;ndo se carga</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google AdSense</td>
            <td>Publicidad que financia las herramientas gratuitas</td>
            <td>Solo despu&eacute;s de tu consentimiento</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Estad&iacute;sticas de uso agregadas y an&oacute;nimas</td>
            <td>Solo despu&eacute;s de tu consentimiento</td>
          </tr>
        </tbody>
      </table>
      <p>
        Estos proveedores operan bajo sus propias condiciones y
        pol&iacute;ticas de privacidad, que no controlamos. Y lo que es
        importante: ninguno de ellos recibe jam&aacute;s tus archivos; manejan
        &uacute;nicamente datos est&aacute;ndar de anal&iacute;tica web y
        publicidad, y solo con tu consentimiento.
      </p>

      <h2 id="changes">9. Cambios en estas condiciones</h2>
      <p>
        Podemos actualizar estas condiciones de vez en cuando a medida que el
        servicio evoluciona o cambia la ley. Cuando lo hagamos, revisaremos la
        fecha de &ldquo;&Uacute;ltima actualizaci&oacute;n&rdquo; en la parte
        superior de esta p&aacute;gina. Los cambios importantes pueden
        destacarse en el sitio. El uso continuado de FileShrinking tras una
        actualizaci&oacute;n significa que aceptas las condiciones revisadas.
      </p>

      <h2 id="governing-law">10. Legislaci&oacute;n aplicable</h2>
      <p>
        Estas condiciones se rigen por las leyes aplicables en el lugar donde
        est&eacute; establecido el operador del Sitio, sin tener en cuenta las
        normas de conflicto de leyes. Cuando sea de aplicaci&oacute;n la
        normativa imperativa de protecci&oacute;n al consumidor, conservas el
        derecho a iniciar acciones en tu propio pa&iacute;s de residencia, y
        nada en estas condiciones limita los derechos que no pueden renunciarse
        en virtud de la ley que se te aplique. Si alguna disposici&oacute;n de
        estas condiciones se considera inejecutable, las disposiciones
        restantes seguir&aacute;n en pleno vigor.
      </p>

      <h2 id="contact">11. Contacto</h2>
      <p>
        &iquest;Tienes preguntas sobre estas condiciones?
        Escr&iacute;benos a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> o
        visita nuestra <Link href="/es/contact">p&aacute;gina de contacto</Link>.
        Estaremos encantados de ayudarte a aclarar cualquier cosa de aqu&iacute;.
      </p>
    </>
  ),
};
