import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Nutzungsbedingungen",
  metaDescription:
    "Die Bedingungen für die Nutzung von FileShrinking, einem kostenlosen, clientseitigen Dateikompressor. Er wird wie besehen bereitgestellt, läuft lokal und lädt deine Dateien nie hoch.",
  title: "Nutzungsbedingungen",
  intro: (
    <>
      Diese Bedingungen regeln deine Nutzung von FileShrinking. Mit der Nutzung
      der Website stimmst du ihnen zu. Sie sind verst&auml;ndlich formuliert
      &mdash; und da jedes Werkzeug vollst&auml;ndig in deinem Browser
      l&auml;uft, sind sie erfreulich kurz.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="acceptance">1. Annahme dieser Bedingungen</h2>
      <p>
        FileShrinking (&ldquo;FileShrinking,&rdquo; &ldquo;wir,&rdquo;
        &ldquo;uns&rdquo; oder &ldquo;der Dienst&rdquo;) stellt kostenlose,
        browserbasierte Werkzeuge bereit, die Bilder, PDF, Video und Audio
        komprimieren und konvertieren. Indem du auf die Website unter{" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a> zugreifst oder
        sie nutzt, erkl&auml;rst du dich an diese Nutzungsbedingungen gebunden.
        Wenn du mit einem Teil dieser Bedingungen nicht einverstanden bist,
        nutze die Website bitte nicht.
      </p>
      <p>
        Diese Bedingungen gelten zusammen mit unserer{" "}
        <Link href="/de/privacy-policy">Datenschutzerkl&auml;rung</Link> und
        unserem <Link href="/de/disclaimer">Haftungsausschluss</Link>, die
        hierdurch durch Verweis einbezogen werden. Gemeinsam beschreiben sie,
        wie der Dienst funktioniert und welche Grenzen das hat, was wir
        versprechen k&ouml;nnen.
      </p>

      <h2 id="how-it-works">2. Wie der Dienst funktioniert</h2>
      <p>
        FileShrinking ist ein Werkzeug, das{" "}
        <strong>zu 100% clientseitig</strong> arbeitet. Wenn du eine Datei
        hinzuf&uuml;gst, wird sie in den Speicher deines Browsers eingelesen und
        dort mithilfe von WebAssembly und g&auml;ngigen Web-APIs verarbeitet.
        Deine Dateien werden <strong>nie auf einen Server hochgeladen</strong>,
        nie &uuml;ber das Netzwerk &uuml;bertragen und nie von uns gespeichert.
        Da die Arbeit auf deinem eigenen Ger&auml;t stattfindet, k&ouml;nnen wir
        keine von dir verarbeitete Datei sehen, darauf zugreifen, sie kopieren
        oder Eigentum daran erwerben &mdash; es gibt schlichtweg keine Kopie auf
        unserer Seite, die wir aufbewahren k&ouml;nnten.
      </p>
      <p>
        Eine praktische Folge dieses Designs ist, dass die Ergebnisse von deiner
        eigenen Hardware und Software abh&auml;ngen. Die
        Verarbeitungsgeschwindigkeit, die maximale Dateigr&ouml;&szlig;e, die du
        verarbeiten kannst, die von deinem Browser unterst&uuml;tzten Formate
        und das genaue Ergebnis variieren je nach Ger&auml;t, Browser,
        verf&uuml;gbarem Speicher und Betriebssystem. Wir garantieren nicht,
        dass sich eine bestimmte Datei auf deiner Konfiguration erfolgreich
        komprimieren, konvertieren oder &ouml;ffnen l&auml;sst.
      </p>

      <h2 id="free">3. Der Dienst ist kostenlos</h2>
      <p>
        Die Werkzeuge sind kostenlos nutzbar, ohne Registrierung, ohne Abo und
        ohne Wasserzeichen. Wir finanzieren den Betrieb durch Werbung, anstatt
        dir etwas zu berechnen. Wir k&ouml;nnen Werkzeuge und Funktionen
        jederzeit hinzuf&uuml;gen, &auml;ndern oder entfernen, und wir
        k&ouml;nnen den Dienst ganz oder teilweise ohne Vorank&uuml;ndigung
        einschr&auml;nken oder einstellen. Wir sind zu nichts verpflichtet, ein
        bestimmtes Werkzeug verf&uuml;gbar zu halten.
      </p>

      <h2 id="acceptable-use">4. Zul&auml;ssige Nutzung</h2>
      <p>Du erkl&auml;rst dich damit einverstanden, FileShrinking nicht zu nutzen, um:</p>
      <ul>
        <li>
          Inhalte zu verarbeiten, zu erstellen oder zu verbreiten, die illegal,
          rechtsverletzend oder verleumderisch sind oder die Rechte Dritter
          verletzen;
        </li>
        <li>
          Dateien zu verarbeiten, die nicht dir geh&ouml;ren oder f&uuml;r deren
          Nutzung dir die Rechte und Berechtigungen fehlen;
        </li>
        <li>
          gegen geltende Gesetze oder Vorschriften in deinem Rechtsraum zu
          versto&szlig;en, einschlie&szlig;lich Export-, Datenschutz- und
          Urheberrechtsgesetzen;
        </li>
        <li>
          den Betrieb, die Sicherheit oder die Integrit&auml;t der Website oder
          ihres zugrunde liegenden Codes zu st&ouml;ren, zu &uuml;berlasten, zu
          b&ouml;swilligen Zwecken zur&uuml;ckzuentwickeln oder zu
          beeintr&auml;chtigen; oder
        </li>
        <li>
          den Dienst falsch darzustellen, etwa indem du ihn so erneut hostest,
          dass der Eindruck entsteht, er sei dein eigener oder er lade Dateien
          hoch, obwohl er das nicht tut.
        </li>
      </ul>
      <p>
        <strong>Du bist allein f&uuml;r deine Dateien verantwortlich</strong>{" "}
        und daf&uuml;r, zu best&auml;tigen, dass du das Recht hast, sie zu
        nutzen. Da die Verarbeitung auf deinem Ger&auml;t stattfindet,
        kontrollierst nur du, was du in die Werkzeuge eingibst und was du mit den
        Ergebnissen machst.
      </p>

      <h2 id="no-warranty">
        5. Keine Gew&auml;hrleistung &mdash; bereitgestellt &ldquo;wie
        besehen&rdquo;
      </h2>
      <p>
        Der Dienst wird <strong>&ldquo;wie besehen&rdquo;</strong> und{" "}
        <strong>&ldquo;wie verf&uuml;gbar&rdquo;</strong> bereitgestellt, ohne
        Gew&auml;hrleistungen jeglicher Art, weder ausdr&uuml;cklich noch
        stillschweigend. Im gr&ouml;&szlig;tm&ouml;glichen gesetzlich
        zul&auml;ssigen Umfang schlie&szlig;en wir alle Gew&auml;hrleistungen
        aus, einschlie&szlig;lich der stillschweigenden Gew&auml;hrleistungen der
        Marktg&auml;ngigkeit, der Eignung f&uuml;r einen bestimmten Zweck, der
        Genauigkeit und der Nichtverletzung von Rechten. Wir gew&auml;hrleisten
        nicht, dass der Dienst ununterbrochen, fehlerfrei oder sicher ist oder
        dass ein Ergebnis deinen Erwartungen entspricht.
      </p>
      <p>
        Komprimierung ist oft <strong>verlustbehaftet</strong>: Um Dateien
        kleiner zu machen, k&ouml;nnen Werkzeuge Daten verwerfen, die nicht
        wiederhergestellt werden k&ouml;nnen. Du bist daf&uuml;r verantwortlich,
        jedes Ergebnis zu pr&uuml;fen, bevor du dich darauf verl&auml;sst.
      </p>

      <h2 id="liability">
        6. Haftungsbeschr&auml;nkung und Datenverlust
      </h2>
      <p>
        Im gr&ouml;&szlig;tm&ouml;glichen gesetzlich zul&auml;ssigen Umfang
        haften FileShrinking und seine Betreiber nicht f&uuml;r indirekte,
        zuf&auml;llige, besondere, Folge- oder Strafsch&auml;den oder f&uuml;r den
        Verlust von Daten, Dateien, Gewinnen oder Goodwill, die sich aus deiner
        Nutzung (oder der Unm&ouml;glichkeit der Nutzung) des Dienstes ergeben
        oder damit zusammenh&auml;ngen &mdash; selbst wenn wir auf die
        M&ouml;glichkeit solcher Sch&auml;den hingewiesen wurden.
      </p>
      <p>
        Entscheidend:{" "}
        <strong>
          Bewahre immer eine Kopie deiner Originaldateien auf.
        </strong>{" "}
        Die browserbasierte Verarbeitung kann fehlschlagen, ein Tab kann
        abst&uuml;rzen oder ein Ergebnis kann unbefriedigend sein, und da wir
        deine Dateien nie erhalten, k&ouml;nnen wir nichts f&uuml;r dich
        wiederherstellen. Behandle das Ergebnis als neue Kopie und &uuml;berpr&uuml;fe
        es, bevor du deine Originale l&ouml;schst.
      </p>

      <h2 id="ip">7. Geistiges Eigentum</h2>
      <p>
        Der Name FileShrinking, das Logo, das Website-Design, die Texte und der
        Originalcode geh&ouml;ren uns oder unseren Lizenzgebern und sind durch
        Gesetze zum Schutz des geistigen Eigentums gesch&uuml;tzt. Du darfst die
        Website f&uuml;r ihren vorgesehenen Zweck nutzen, aber du darfst die
        Website selbst nicht ohne Erlaubnis kopieren, umbenennen oder
        weiterverbreiten. Die zugrunde liegenden Kompressions-Engines werden von
        ihren jeweiligen Open-Source-Projekten unter deren eigenen Lizenzen
        bereitgestellt.
      </p>
      <p>
        <strong>Deine Dateien bleiben deine.</strong> Wir beanspruchen kein
        Eigentum an einer von dir verarbeiteten Datei und erwerben keine Rechte
        daran &mdash; und wie oben erw&auml;hnt, erhalten wir sie nicht einmal.
      </p>

      <h2 id="third-party">8. Dienste von Drittanbietern</h2>
      <p>
        Wir nutzen eine kleine Zahl von Diensten Dritter, um die Website zu
        betreiben und kostenlos zu halten. Diese werden nur wie in unserer{" "}
        <Link href="/de/privacy-policy">Datenschutzerkl&auml;rung</Link>{" "}
        beschrieben geladen und, wo erforderlich, an deine Einwilligung
        gekn&uuml;pft:
      </p>
      <table>
        <thead>
          <tr>
            <th>Dienst</th>
            <th>Zweck</th>
            <th>Wann er geladen wird</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google AdSense</td>
            <td>Werbung, die die kostenlosen Werkzeuge finanziert</td>
            <td>Erst nach deiner Einwilligung</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Aggregierte, anonyme Nutzungsstatistiken</td>
            <td>Erst nach deiner Einwilligung</td>
          </tr>
        </tbody>
      </table>
      <p>
        Diese Anbieter handeln nach ihren eigenen Bedingungen und
        Datenschutzrichtlinien, die wir nicht kontrollieren. Wichtig ist: Keiner
        von ihnen erh&auml;lt jemals deine Dateien &mdash; sie verarbeiten nur
        g&auml;ngige Web-Analyse- und Werbedaten und nur mit deiner
        Einwilligung.
      </p>

      <h2 id="changes">9. &Auml;nderungen dieser Bedingungen</h2>
      <p>
        Wir k&ouml;nnen diese Bedingungen von Zeit zu Zeit aktualisieren, wenn
        sich der Dienst weiterentwickelt oder sich die Rechtslage &auml;ndert.
        Wenn wir das tun, aktualisieren wir das Datum &ldquo;Zuletzt
        aktualisiert&rdquo; oben auf dieser Seite. Wesentliche &Auml;nderungen
        k&ouml;nnen auf der Website hervorgehoben werden. Deine fortgesetzte
        Nutzung von FileShrinking nach einer Aktualisierung bedeutet, dass du
        die ge&auml;nderten Bedingungen akzeptierst.
      </p>

      <h2 id="governing-law">10. Anwendbares Recht</h2>
      <p>
        Diese Bedingungen unterliegen dem Recht, das am Sitz des
        Website-Betreibers gilt, ohne Ber&uuml;cksichtigung der
        Kollisionsnormen. Sofern zwingendes Verbraucherschutzrecht anwendbar
        ist, beh&auml;ltst du das Recht, Verfahren in deinem eigenen Wohnsitzland
        einzuleiten, und nichts in diesen Bedingungen schr&auml;nkt Rechte ein,
        auf die nach dem f&uuml;r dich geltenden Recht nicht verzichtet werden
        kann. Sollte eine Bestimmung dieser Bedingungen als nicht durchsetzbar
        befunden werden, bleiben die &uuml;brigen Bestimmungen in vollem Umfang
        in Kraft.
      </p>

      <h2 id="contact">11. Kontakt</h2>
      <p>
        Fragen zu diesen Bedingungen? Schreib uns an{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>{" "}
        oder besuche unsere{" "}
        <Link href="/de/contact">Kontaktseite</Link>. Wir helfen dir gerne, hier
        irgendetwas zu kl&auml;ren.
      </p>
    </>
  ),
};
