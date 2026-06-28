import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Cookie-Richtlinie",
  metaDescription:
    "Wie FileShrinking Cookies und lokalen Speicher nutzt: minimaler eigener Speicher für Einwilligung und Theme sowie Google Analytics und AdSense nach Einwilligung.",
  title: "Cookie-Richtlinie",
  intro: (
    <>
      FileShrinking läuft vollständig in deinem Browser und hält Cookies auf
      einem absoluten Minimum. Diese Seite erklärt genau, was auf deinem Gerät
      gespeichert wird, warum, wie lange und wie du deine Entscheidungen
      jederzeit ändern kannst.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Überblick</h2>
      <p>
        Ein &ldquo;Cookie&rdquo; ist eine kleine Textdatei, die eine Website
        deinen Browser bittet zu speichern, damit sie sich Informationen
        zwischen Besuchen merken kann. Verwandte Technologien wie{" "}
        <strong>localStorage</strong> funktionieren auf die gleiche Weise: Sie
        speichern ein wenig Daten auf deinem eigenen Gerät. FileShrinking ist ein
        Werkzeug, das die Privatsphäre an erste Stelle setzt und zu 100 % auf der
        Client-Seite arbeitet. Deine Dateien werden lokal in deinem Browser
        komprimiert und <strong>niemals hochgeladen</strong> &mdash; weder zu uns
        noch zu irgendjemand anderem &mdash;, sodass wir niemals ein Cookie
        setzen, das deine Dateien oder deren Inhalte enthält, verfolgt oder
        überträgt.
      </p>
      <p>
        Wir verwenden nur eine winzige Menge an <strong>eigenem</strong>{" "}
        Speicher, um uns deine Einstellungen zu merken, und wir laden{" "}
        <strong>Werbe- und Analysedienste von Drittanbietern</strong> von Google{" "}
        <strong>erst, nachdem du deine Einwilligung gegeben hast</strong>. Bis du
        zustimmst, sind diese Dienste blockiert und setzen keine Cookies. Diese
        Richtlinie sollte zusammen mit unserer{" "}
        <Link href="/de/privacy-policy">Datenschutzerklärung</Link> gelesen
        werden.
      </p>

      <h2 id="first-party">Eigener Speicher, den wir setzen</h2>
      <p>
        Diese Elemente werden von FileShrinking selbst geschrieben, befinden sich
        ausschließlich auf deinem Gerät und sind unerlässlich, damit sich die
        Website grundlegende Entscheidungen merken kann. Sie werden im
        localStorage deines Browsers gespeichert und nicht als herkömmliche
        Cookies, werden niemals an einen Server gesendet und identifizieren dich
        nicht.
      </p>
      <ul>
        <li>
          <strong>Einwilligungsentscheidung.</strong> Wenn du die optionalen
          Dienste in unserem Einwilligungsbanner akzeptierst oder ablehnst,
          speichern wir diese Entscheidung, damit wir nicht bei jedem
          Seitenaufruf erneut fragen und damit wir sie berücksichtigen können.
        </li>
        <li>
          <strong>Theme-Einstellung.</strong> Wenn du zwischen hellem und dunklem
          Modus wechselst, merken wir uns deine Wahl, damit die Website so
          aussieht, wie du sie verlassen hast.
        </li>
      </ul>

      <h2 id="consent-gated">
        Von der Einwilligung abhängige Drittanbieterdienste
      </h2>
      <p>
        Damit FileShrinking kostenlos bleibt, wird die Website durch Werbung
        finanziert, und wir nutzen Analysen, um zu verstehen, welche Werkzeuge
        nützlich sind. Diese Dienste werden von Google bereitgestellt und über{" "}
        <strong>Google Tag Manager</strong> geladen. Sie können ihre eigenen
        Cookies setzen, laufen aber nur, <strong>nachdem du in unserem
        Einwilligungsbanner ausdrücklich zugestimmt hast</strong>. Die
        betroffenen Dienste sind:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> &mdash; misst die aggregierte,
          anonyme Nutzung wie Seitenaufrufe und welche Kompressoren beliebt sind,
          und hilft uns so, die Website zu verbessern.
        </li>
        <li>
          <strong>Google AdSense</strong> (und dessen DoubleClick-Anzeigen­auslieferung)
          &mdash; zeigt die Anzeigen an, die das Projekt finanzieren, und hilft zu
          begrenzen, wie oft du dieselbe Anzeige siehst.
        </li>
      </ul>

      <h2 id="table">Cookies und Speicher, die wir verwenden</h2>
      <p>
        Die folgende Tabelle listet die wichtigsten Elemente auf. Die genauen
        Namen und Laufzeiten, die Google festlegt, können sich ändern; die
        aktuellsten Details findest du in der eigenen Dokumentation von Google,
        die unter{" "}
        <a href="#managing">Deine Entscheidungen verwalten</a> verlinkt ist.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Anbieter</th>
            <th>Zweck</th>
            <th>Dauer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Einwilligungsentscheidung
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (eigen)</td>
            <td>
              Merkt sich, ob du die optionalen Cookies akzeptiert oder abgelehnt
              hast.
            </td>
            <td>Dauerhaft, bis du es löschst</td>
          </tr>
          <tr>
            <td>
              Theme
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (eigen)</td>
            <td>Merkt sich deine Einstellung für den hellen oder dunklen Modus.</td>
            <td>Dauerhaft, bis du es löschst</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics (nur mit Einwilligung)</td>
            <td>
              Unterscheidet anonyme Besucher, um die aggregierte Nutzung der
              Website zu messen.
            </td>
            <td>Bis zu 2 Jahre</td>
          </tr>
          <tr>
            <td>
              IDE, DSID, test_cookie
              <br />
              und verwandte Werbe-Cookies
            </td>
            <td>Google AdSense / DoubleClick (nur mit Einwilligung)</td>
            <td>
              Liefert und misst Anzeigen und begrenzt die wiederholte Anzeige
              derselben Werbung.
            </td>
            <td>Sitzung bis zu 13 Monate</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consent-mode">Consent Mode v2: standardmäßig verweigert</h2>
      <p>
        Wir verwenden den <strong>Consent Mode v2</strong> von Google. Einfach
        ausgedrückt bedeutet das, dass jedes Einwilligungssignal &mdash; für den
        Analysespeicher, den Werbespeicher, die Anzeigenpersonalisierung und die
        Nutzerdaten für Werbung &mdash; in dem Moment, in dem die Seite geladen
        wird, standardmäßig im Status <strong>&ldquo;verweigert&rdquo;</strong>{" "}
        beginnt. Nichts wird gewährt, bis du eine Entscheidung triffst.
      </p>
      <p>
        Wenn du <strong>akzeptierst</strong>, wechseln die entsprechenden Signale
        auf &ldquo;gewährt&rdquo; und Google Analytics und AdSense dürfen die oben
        beschriebenen Cookies setzen. Wenn du <strong>ablehnst</strong> oder das
        Banner einfach ignorierst, bleiben diese Signale auf
        &ldquo;verweigert&rdquo;: Die Skripte laufen in einem eingeschränkten,
        cookielosen Modus und speichern keine Kennungen auf deinem Gerät. In
        beiden Fällen funktionieren deine oben genannten eigenen Einstellungen
        weiterhin, da sie für den Betrieb der Website unbedingt erforderlich sind.
      </p>

      <h2 id="managing">Deine Entscheidungen verwalten</h2>
      <p>
        Du hast jederzeit die Kontrolle. Du kannst deine Einwilligung jederzeit
        über den Link <strong>Einwilligungseinstellungen</strong> in der Fußzeile
        jeder Seite ändern oder widerrufen; dieser öffnet das Einwilligungsbanner
        erneut, damit du deine Entscheidung aktualisieren kannst. Ein Widerruf der
        Einwilligung verhindert, dass die Dienste von Google künftig neue Cookies
        setzen.
      </p>
      <p>
        Du kannst Cookies auch direkt in deinem Browser verwalten: Die meisten
        Browser erlauben es dir, Cookies anzusehen, zu blockieren oder zu löschen
        und den Speicher der Website über das Datenschutz- oder Einstellungsmenü
        zu leeren. Das Löschen unserer eigenen Elemente bedeutet einfach, dass die
        Website erneut nach deinen Theme- und Einwilligungseinstellungen fragt.
        Weitere Details zu den Drittanbieterdiensten findest du in den{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie-Informationen
        </a>{" "}
        von Google und in dessen{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung
        </a>
        .
      </p>

      <h2 id="changes">Änderungen an dieser Richtlinie</h2>
      <p>
        Wir können diese Cookie-Richtlinie aktualisieren, wenn wir eine Funktion
        hinzufügen oder die Dienste ändern, auf die wir uns stützen. Wenn wir das
        tun, überarbeiten wir das Datum &ldquo;Zuletzt aktualisiert&rdquo; oben
        auf dieser Seite. Wesentliche Änderungen, die die von uns gesetzten
        Cookies betreffen, werden im Einwilligungsbanner widergespiegelt, damit du
        deine Entscheidung überprüfen kannst.
      </p>

      <h2 id="contact">Kontakt</h2>
      <p>
        Wenn du Fragen dazu hast, wie wir Cookies oder lokalen Speicher
        verwenden, schreibe uns an{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Für
        ein umfassenderes Bild davon, wie wir mit Daten umgehen, lies bitte unsere{" "}
        <Link href="/de/privacy-policy">Datenschutzerklärung</Link>.
      </p>
    </>
  ),
};
