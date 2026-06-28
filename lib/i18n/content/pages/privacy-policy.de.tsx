import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Datenschutzerklärung",
  metaDescription:
    "Wie FileShrinking mit deinen Daten umgeht: Deine Dateien werden nie hochgeladen, die Komprimierung läuft im Browser. Analytics und Werbung nur mit Einwilligung.",
  title: "Datenschutzerklärung",
  intro: (
    <>
      FileShrinking ist nach dem Prinzip &raquo;Datenschutz zuerst&laquo; gebaut.
      Die Dateien, die du komprimierst, werden nie hochgeladen: Sie werden
      vollst&auml;ndig in deinem Browser verarbeitet, sodass wir sie niemals
      empfangen, sehen oder speichern. Diese Erkl&auml;rung beschreibt die wenigen
      Daten, die wir tats&auml;chlich verarbeiten, und die Optionen, die du
      kontrollierst.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">&Uuml;berblick</h2>
      <p>
        Diese Datenschutzerkl&auml;rung beschreibt, wie FileShrinking
        ({" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a>, die
        &raquo;Website&laquo;) Informationen erfasst, nutzt und sch&uuml;tzt,
        wenn du sie besuchst. Die Website wird vom FileShrinking-Team betrieben
        (&raquo;wir&laquo; oder &raquo;unser&laquo;). Mit der Nutzung der Website
        stimmst du den hier beschriebenen Praktiken zu. Lies bitte auch unsere{" "}
        <Link href="/de/cookie-policy">Cookie-Richtlinie</Link> und unsere{" "}
        <Link href="/de/terms-of-service">Nutzungsbedingungen</Link>, die Teil
        deiner Vereinbarung mit uns sind.
      </p>

      <h2 id="files-never-uploaded">Deine Dateien werden nie hochgeladen</h2>
      <p>
        Das ist das Wichtigste, was du &uuml;ber FileShrinking verstehen solltest.
        Alle unsere Komprimierungswerkzeuge &mdash; f&uuml;r Bilder, PDF, Video
        und Audio &mdash; laufen{" "}
        <strong>zu 100&nbsp;% in deinem Webbrowser</strong> mithilfe von
        WebAssembly. Wenn du eine Datei hinzuf&uuml;gst, wird sie in den
        Arbeitsspeicher deines Ger&auml;ts geladen und lokal auf deiner eigenen
        Hardware verarbeitet. Das komprimierte Ergebnis wird dir direkt zum
        Download zur&uuml;ckgegeben.
      </p>
      <p>
        Aufgrund dieser Architektur <strong>empfangen, sehen, speichern oder
        &uuml;bertragen wir niemals</strong> die Dateien, die du komprimierst,
        oder irgendeinen ihrer Inhalte. Es gibt keinen serverseitigen
        Upload-Schritt, es wird nirgendwo eine Kopie aufbewahrt, und deine
        Dateien verlassen niemals dein Ger&auml;t. Tats&auml;chlich kannst du,
        sobald die Seite geladen ist, die Internetverbindung vollst&auml;ndig
        trennen, und die Werkzeuge funktionieren weiterhin.
      </p>

      <h2 id="what-we-do-not-collect">Was wir nicht erfassen</h2>
      <ul>
        <li>
          <strong>Deine Dateien oder ihre Inhalte.</strong> Wir haben keinen
          Zugriff auf die Dokumente, Fotos, Videos oder Audiodateien, die du
          verarbeitest.
        </li>
        <li>
          <strong>Kontodaten.</strong> FileShrinking hat keine Registrierung,
          keine Anmeldung und keine Benutzerkonten, daher erfassen wir keine
          Namen, Passw&ouml;rter oder Profile.
        </li>
        <li>
          <strong>Zahlungsinformationen.</strong> Die Website ist kostenlos
          nutzbar; wir wickeln keine Zahlungen ab und speichern keine
          Finanzdaten.
        </li>
      </ul>

      <h2 id="data-we-use">Informationen, die verwendet werden</h2>
      <p>
        FileShrinking kommt bewusst mit sehr wenigen Daten aus. Die folgende
        Tabelle fasst zusammen, was gespeichert oder verarbeitet wird, wo es
        liegt und warum.
      </p>
      <table>
        <thead>
          <tr>
            <th>Daten</th>
            <th>Wo sie liegen</th>
            <th>Zweck</th>
            <th>Einwilligung erforderlich?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Einwilligungsentscheidung</td>
            <td>localStorage (dein Browser)</td>
            <td>
              Merken, ob du Analytics und Werbung akzeptiert oder abgelehnt hast
            </td>
            <td>Nein: unbedingt erforderlich</td>
          </tr>
          <tr>
            <td>Design-Einstellung</td>
            <td>localStorage (dein Browser)</td>
            <td>
              Hellen/dunklen Modus merken, damit die Website bei der R&uuml;ckkehr
              richtig aussieht
            </td>
            <td>Nein: unbedingt erforderlich</td>
          </tr>
          <tr>
            <td>Analytics-Daten</td>
            <td>Google Analytics (&uuml;ber Google Tag Manager)</td>
            <td>Die aggregierte Nutzung verstehen, um die Website zu verbessern</td>
            <td>Ja</td>
          </tr>
          <tr>
            <td>Werbedaten</td>
            <td>Google AdSense</td>
            <td>Anzeigen schalten, die helfen, die Website kostenlos zu halten</td>
            <td>Ja</td>
          </tr>
        </tbody>
      </table>
      <p>
        Die oben genannten <strong>localStorage</strong>-Werte sind kleine
        Einstellungen, die ausschlie&szlig;lich in deinem Browser gespeichert
        werden. Sie werden nicht an uns &uuml;bertragen und enthalten keine
        personenbezogenen Daten: nur deine Einwilligungsentscheidung und das von
        dir gew&auml;hlte Design. Du kannst sie jederzeit &uuml;ber die
        Einstellungen deines Browsers l&ouml;schen.
      </p>

      <h2 id="analytics">Analytics</h2>
      <p>
        Wir verwenden <strong>Google Analytics</strong>, geladen &uuml;ber{" "}
        <strong>Google Tag Manager (GTM)</strong>, um zu verstehen, wie Besucher
        die Website in aggregierter Form nutzen &mdash; zum Beispiel welche
        Werkzeuge beliebt sind und welche Seiten langsam laden. Das hilft uns,
        Verbesserungen zu priorisieren. Analytics{" "}
        <strong>wird erst geladen, nachdem du deine Einwilligung erteilt
        hast</strong>. Wenn du ablehnst, werden diese Skripte nicht ausgef&uuml;hrt
        und es werden keine Analytics-Daten erfasst. Analytics-Daten werden in
        aggregierter Form erfasst und verarbeitet und nicht dazu verwendet, dich
        pers&ouml;nlich zu identifizieren.
      </p>

      <h2 id="advertising">Werbung</h2>
      <p>
        FileShrinking ist kostenlos, und wir decken unsere Kosten mit Werbung,
        die von <strong>Google AdSense</strong> ausgeliefert wird. Anzeigen{" "}
        <strong>werden erst geladen, nachdem du deine Einwilligung erteilt
        hast</strong>. Wenn du in Werbung einwilligst, k&ouml;nnen Google und
        seine Partner Cookies, Ger&auml;tekennungen und &auml;hnliche
        Technologien verwenden, um Anzeigen auszuliefern und zu messen,
        einschlie&szlig;lich{" "}
        <strong>personalisierter (interessenbasierter) Anzeigen</strong> auf
        Grundlage deiner fr&uuml;heren Aktivit&auml;t. Wenn du ablehnst, wird
        AdSense nicht geladen und du erh&auml;ltst von uns keine personalisierte
        Werbung.
      </p>
      <p>
        Die Nutzung von Werbe-Cookies durch Google unterliegt Googles eigenen
        Richtlinien. Mehr erf&auml;hrst du und deine Anzeigeneinstellungen
        verwaltest du auf der{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Werbeseite von Google
        </a>{" "}
        und in der{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google-Datenschutzerkl&auml;rung
        </a>
        .
      </p>

      <h2 id="consent-mode">Google Consent Mode v2</h2>
      <p>
        Wir setzen den <strong>Google Consent Mode v2</strong> ein. Bevor du eine
        Entscheidung triffst, befinden sich die Analytics- und Werbe-Tags von
        Google standardm&auml;&szlig;ig in einem abgelehnten Zustand, das hei&szlig;t,
        sie setzen keine identifizierenden Cookies und erfassen keine
        personenbezogenen Daten. Erst nachdem du deine Einwilligung erteilt hast,
        werden die relevanten Signale aktualisiert und die entsprechenden Dienste
        aktiviert. So hast du echte Kontrolle dar&uuml;ber, ob Analytics und
        Werbung &uuml;berhaupt ausgef&uuml;hrt werden.
      </p>

      <h2 id="third-party">Drittanbieterdienste und Links</h2>
      <p>
        Die oben genannten Drittanbieterdienste werden von Google LLC betrieben.
        Der Umgang mit den von ihnen erfassten Daten unterliegt ihren eigenen
        Bedingungen, nicht unseren:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google-Datenschutzerkl&auml;rung
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wie Google Cookies in der Werbung verwendet
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutz und Sicherheit der Google-Analytics-Daten
          </a>
        </li>
      </ul>
      <p>
        Die Website kann auch Links zu anderen Websites enthalten, die wir nicht
        kontrollieren. Wir sind nicht f&uuml;r die Datenschutzpraktiken dieser
        Websites verantwortlich und empfehlen dir, deren Richtlinien zu lesen.
      </p>

      <h2 id="your-rights">Deine Datenschutzrechte (DSGVO)</h2>
      <p>
        Wenn du dich im Europ&auml;ischen Wirtschaftsraum oder im Vereinigten
        K&ouml;nigreich befindest, stehen dir nach der
        Datenschutz-Grundverordnung Rechte zu, darunter das Recht auf{" "}
        <strong>Auskunft</strong> &uuml;ber die zu dir gespeicherten
        personenbezogenen Daten, das Recht auf{" "}
        <strong>L&ouml;schung</strong>, das Recht auf{" "}
        <strong>Widerspruch gegen oder Einschr&auml;nkung der Verarbeitung</strong>{" "}
        und das Recht, deine <strong>Einwilligung jederzeit zu widerrufen</strong>.
        Soweit wir uns auf die Einwilligung st&uuml;tzen (Analytics und Werbung),
        ist der Widerruf genauso einfach wie die Erteilung und ber&uuml;hrt nicht
        die Rechtm&auml;&szlig;igkeit der zuvor erfolgten Verarbeitung.
      </p>
      <p>Um diese Rechte auszu&uuml;ben, kannst du:</p>
      <ul>
        <li>
          <strong>Deine Einwilligungseinstellungen erneut &ouml;ffnen</strong>{" "}
          &mdash; jederzeit &uuml;ber den Einwilligungs- oder
          Cookie-Einstellungs-Link in der Fu&szlig;zeile jeder Seite &mdash; und
          anschlie&szlig;end deine Entscheidungen &auml;ndern oder widerrufen.
        </li>
        <li>
          <strong>Deinen Browser-Speicher leeren</strong>, um die lokal
          gespeicherten Einwilligungs- und Design-Werte zu entfernen.
        </li>
        <li>
          <strong>Uns schreiben</strong> an{" "}
          <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>;
          wir antworten innerhalb der nach geltendem Recht erforderlichen Frist.
        </li>
      </ul>
      <p>
        Du hast au&szlig;erdem das Recht, bei der Datenschutzbeh&ouml;rde deines
        Landes oder deiner Region eine Beschwerde einzureichen, wenn du der
        Ansicht bist, dass deine Rechte verletzt wurden.
      </p>

      <h2 id="ccpa">Datenschutzrechte in Kalifornien (CCPA/CPRA)</h2>
      <p>
        Wenn du in Kalifornien ans&auml;ssig bist, gew&auml;hrt dir der California
        Consumer Privacy Act in seiner ge&auml;nderten Fassung das Recht zu
        erfahren, welche personenbezogenen Informationen erfasst werden, deren
        L&ouml;schung zu verlangen und dem &raquo;Verkauf&laquo; oder der
        &raquo;Weitergabe&laquo; personenbezogener Informationen zu
        widersprechen. Wir verkaufen deine personenbezogenen Informationen nicht
        gegen Geld. Soweit die Verwendung von Werbe-Cookies als
        &raquo;Weitergabe&laquo; f&uuml;r kontext&uuml;bergreifende verhaltensbasierte
        Werbung gelten kann, kannst du widersprechen, indem du die
        Werbe-Einwilligung in unseren Einwilligungseinstellungen ablehnst oder sie
        von vornherein nicht erteilst. Um eine Anfrage zu stellen, schreibe an{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2 id="retention">Datenspeicherung</h2>
      <p>
        Da deine Dateien lokal verarbeitet werden und nie zu uns gelangen, gibt
        es nichts, was wir &uuml;ber sie aufbewahren k&ouml;nnten. Die in deinem
        Browser gespeicherten Einwilligungs- und Design-Werte bleiben bestehen,
        bis du sie l&ouml;schst oder deine Entscheidungen &auml;nderst. Analytics-
        und Werbedaten werden, wenn sie mit deiner Einwilligung aktiviert sind,
        von Google gem&auml;&szlig; dessen eigenen Speichereinstellungen und
        -richtlinien aufbewahrt.
      </p>

      <h2 id="children">Datenschutz von Kindern</h2>
      <p>
        FileShrinking ist ein Werkzeug f&uuml;r das allgemeine Publikum und
        richtet sich nicht an Kinder unter 13 Jahren (oder dem Mindestalter in
        deiner Rechtsordnung). Wir erfassen nicht wissentlich personenbezogene
        Daten von Kindern. Wenn du glaubst, dass ein Kind uns personenbezogene
        Daten &uuml;bermittelt hat, kontaktiere uns bitte, damit wir geeignete
        Ma&szlig;nahmen ergreifen k&ouml;nnen.
      </p>

      <h2 id="changes">&Auml;nderungen an dieser Erkl&auml;rung</h2>
      <p>
        Wir k&ouml;nnen diese Datenschutzerkl&auml;rung von Zeit zu Zeit
        aktualisieren, um &Auml;nderungen unserer Praktiken widerzuspiegeln oder
        aus rechtlichen Gr&uuml;nden. Wenn wir das tun, aktualisieren wir das
        Datum &raquo;Zuletzt aktualisiert&laquo; oben auf dieser Seite. Wesentliche
        &Auml;nderungen k&ouml;nnen auf der Website hervorgehoben werden. Wir
        empfehlen dir, diese Seite regelm&auml;&szlig;ig zu &uuml;berpr&uuml;fen.
      </p>

      <h2 id="contact">Kontaktiere uns</h2>
      <p>
        Wenn du Fragen zu dieser Datenschutzerkl&auml;rung oder dazu hast, wie
        mit deinen Daten umgegangen wird, schreibe uns bitte an{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> oder
        besuche unsere <Link href="/de/contact">Kontaktseite</Link>, und wir
        helfen dir gerne weiter.
      </p>
    </>
  ),
};
