import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Haftungsausschluss",
  metaDescription:
    "Ehrlicher Haftungsausschluss von FileShrinking: Unsere kostenlosen, 100 % im Browser laufenden Tools garantieren weder Qualität noch Dateigröße. Bewahre deine Originale auf.",
  title: "Haftungsausschluss",
  intro: (
    <>
      FileShrinking stellt kostenlose, browserbasierte Komprimierungstools als
      praktischen Service bereit. Diese Seite erklärt die Grenzen dieser
      Tools, die Ergebnisse, die du realistisch erwarten kannst, und die
      Verantwortlichkeiten, die bei dir bleiben.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="general">Nur allgemeine Informationen</h2>
      <p>
        Die Informationen, Tools und Inhalte auf FileShrinking (der
        &ldquo;Dienst&rdquo;) werden ausschlie&szlig;lich zu allgemeinen
        Informationszwecken und zur praktischen Nutzung bereitgestellt. Wir
        arbeiten hart daran, alles korrekt und nützlich zu halten, geben
        jedoch keinerlei ausdrückliche oder stillschweigende Garantien
        bezüglich der Vollständigkeit, Richtigkeit, Zuverlässigkeit,
        Eignung oder Verfügbarkeit des Dienstes oder seiner Ergebnisse. Die
        Nutzung des Dienstes erfolgt vollständig auf eigenes Risiko. Dieser
        Haftungsausschluss ist zusammen mit unseren{" "}
        <Link href="/de/terms-of-service">Nutzungsbedingungen</Link> zu lesen,
        die die Nutzung der Website regeln.
      </p>

      <h2 id="how-it-works">Wie unsere Tools tatsächlich funktionieren</h2>
      <p>
        Jeder Kompressor auf FileShrinking läuft{" "}
        <strong>vollständig in deinem Webbrowser</strong>. Deine Bilder,
        PDF-, Video- und Audiodateien werden in den Speicher deines Geräts
        eingelesen, lokal mit WebAssembly verarbeitet und dir direkt wieder
        zurückgegeben.{" "}
        <strong>
          Deine Dateien werden niemals zu uns hochgeladen, über das Netzwerk
          übertragen oder auf einem Server gespeichert.
        </strong>{" "}
        Da die gesamte Verarbeitung auf deiner eigenen Hardware stattfindet,
        hängen die Geschwindigkeit, die Qualität und sogar die Frage, ob
        eine bestimmte Datei überhaupt verarbeitet werden kann, von deinem
        Gerät, deinem Browser, dem verfügbaren Speicher und der von dir
        bereitgestellten Datei ab. Einzelheiten zu den begrenzten Daten, die die
        Website selbst verarbeitet, findest du in unserer{" "}
        <Link href="/de/privacy-policy">Datenschutzerklärung</Link> und
        unserer <Link href="/de/cookie-policy">Cookie-Richtlinie</Link>.
      </p>

      <h2 id="no-guarantee">Keine Garantie für Ergebnisse</h2>
      <p>
        Komprimierung ist keine Zauberei, und wir können kein bestimmtes
        Ergebnis versprechen. Die meiste Bild-, Video- und Audiokomprimierung
        ist <strong>verlustbehaftet</strong>, was bedeutet, dass sie dauerhaft
        einige Daten verwirft, um Dateien kleiner zu machen. Wir garantieren
        kein bestimmtes Komprimierungsverhältnis, keine bestimmte
        Dateigröße, keine bestimmte Ausgabequalität und keine perfekte
        Wiedergabetreue zu deinem Original. Wie stark eine Datei schrumpft und
        wie sie danach aussieht oder klingt, hängt vom Inhalt selbst, vom
        Format, von den von dir gewählten Einstellungen und davon ab, wie gut
        das Original bereits optimiert war. Ein Foto direkt aus einer Kamera
        kann drastisch schrumpfen, während sich eine bereits optimierte Datei
        kaum verändert &mdash; oder in manchen Fällen kann eine neu codierte
        Datei sogar größer sein als das Original.
      </p>

      <h2 id="limits">Reale Grenzen, die du kennen solltest</h2>
      <p>
        Verschiedene Dateitypen verhalten sich sehr unterschiedlich, und einige
        haben harte praktische Grenzen, die kein im Browser laufendes Tool
        überwinden kann:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Dateityp</th>
              <th>Was zu erwarten ist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bilder (JPEG, PNG, WebP, AVIF, GIF)</td>
              <td>
                Lassen sich in der Regel gut komprimieren, die Einsparungen
                variieren jedoch. Bereits optimierte Bilder schrumpfen
                möglicherweise nur wenig oder gar nicht.
              </td>
            </tr>
            <tr>
              <td>PDF</td>
              <td>
                Unser PDF-Tool reduziert die Größe hauptsächlich durch
                erneutes Komprimieren eingebetteter Bilder. PDFs, die aus Text
                und Vektorgrafiken bestehen, schrumpfen möglicherweise nur sehr
                wenig oder gar nicht, da es keine großen Bilder zu optimieren
                gibt.
              </td>
            </tr>
            <tr>
              <td>Video</td>
              <td>
                Browserbasierte Videokomprimierung ist Single-Threaded und
                CPU-intensiv. Sie kann langsam sein, und sehr große Dateien
                können auf Geräten mit wenig Speicher oder in älteren
                Browsern vollständig fehlschlagen.
              </td>
            </tr>
            <tr>
              <td>Audio</td>
              <td>
                Verlustbehaftete Neucodierung kann die Größe reduzieren, doch
                das erneute Komprimieren einer bereits komprimierten Datei (wie
                einer MP3 mit niedriger Bitrate) bringt kaum Vorteile und kann
                die Qualität mindern.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Wenn ein Tool hängen bleibt, der Speicher ausgeht oder es bei einer
        großen Datei fehlschlägt, ist das eine Einschränkung der
        Ausführung schwerer Verarbeitung in einem Browser-Tab &mdash; und
        kein Defekt, dessen Behebung für eine bestimmte Datei du von uns
        erwarten solltest. Eine kleinere Datei, ein anderer Browser, ein
        leistungsfähigeres Gerät oder das Schließen anderer Tabs hilft oft
        weiter.
      </p>

      <h2 id="keep-originals">Bewahre stets deine Originaldateien auf</h2>
      <p>
        Dies ist der wichtigste Punkt auf dieser ganzen Seite.{" "}
        <strong>
          Bewahre stets eine sichere, unveränderte Kopie jeder Originaldatei
          auf, bevor du sie komprimierst.
        </strong>{" "}
        Komprimierung kann kumulativ und unumkehrbar sein: Sobald Details
        verworfen wurden, können sie aus dem komprimierten Ergebnis nicht mehr
        wiederhergestellt werden. Behandle die komprimierte Datei als neue,
        separate Kopie &mdash; niemals als deine einzige Kopie.
      </p>
      <ul>
        <li>
          Sichere Master-Versionen wichtiger Fotos, Dokumente und Aufnahmen,
          bevor du sie verarbeitest.
        </li>
        <li>
          Komprimiere erneut aus deinem Original mit der höchsten Qualität,
          nicht aus einer bereits komprimierten Datei.
        </li>
        <li>
          Überprüfe, ob sich eine komprimierte Datei korrekt öffnet und
          akzeptabel aussieht oder klingt, bevor du das Original löschst.
        </li>
      </ul>

      <h2 id="no-liability">Keine Verantwortung für Datenverlust</h2>
      <p>
        Im größtmöglichen gesetzlich zulässigen Umfang übernimmt
        FileShrinking keine Verantwortung oder Haftung für Verlust,
        Beschädigung oder Korruption deiner Dateien oder Daten oder für
        sonstige direkte, indirekte, beiläufige oder Folgeschäden, die sich
        aus deiner Nutzung (oder der Unmöglichkeit der Nutzung) des Dienstes
        ergeben. Dazu zählen Browser-Abstürze, Gerätefehler, unterbrochene
        Verarbeitung, unerwartete Ausgaben oder das Löschen eines Originals,
        bevor du das Ergebnis bestätigt hast. Da alles lokal auf deinem
        Gerät läuft, haben wir keinen Zugriff auf deine Dateien und keine
        Möglichkeit, sie wiederherzustellen. Die Verantwortung für das
        Sichern und Überprüfen deiner Daten liegt allein bei dir.
      </p>

      <h2 id="external-links">Externe Links und Werbung</h2>
      <p>
        Der Dienst kann Links zu Websites Dritter enthalten und zeigt Werbung
        an, die von Google AdSense bereitgestellt wird. Diese Links und Anzeigen
        werden zur Bequemlichkeit angeboten und um den kostenlosen Betrieb der
        Website zu unterstützen. Wir kontrollieren, befürworten oder
        garantieren weder die Inhalte, Produkte, Dienste, Richtigkeit oder
        Praktiken einer Website oder eines Werbetreibenden Dritter, noch
        übernehmen wir dafür die Verantwortung. Ein Link oder eine Anzeige
        ist <strong>keine Befürwortung</strong>. Jegliche Geschäfte, die du
        mit einem Dritten tätigst, bestehen ausschließlich zwischen dir und
        dieser Partei. Werbe- und Analyse-Cookies werden erst geladen, nachdem
        du eingewilligt hast; wie wir damit umgehen, kannst du in unserer{" "}
        <Link href="/de/cookie-policy">Cookie-Richtlinie</Link> und unserer{" "}
        <Link href="/de/privacy-policy">Datenschutzerklärung</Link> nachlesen.
      </p>

      <h2 id="no-professional-advice">Keine professionelle Beratung</h2>
      <p>
        Nichts auf FileShrinking stellt eine rechtliche, technische, finanzielle
        oder sonstige professionelle Beratung dar. Anleitungen, FAQs und
        Erklärungen zu Dateiformaten und Komprimierung sind allgemeine
        Bildungsinhalte und treffen möglicherweise nicht auf deine konkrete
        Situation zu. Wenn du eine bestimmte technische Spezifikation, einen
        Archivierungsstandard oder eine rechtliche oder regulatorische
        Anforderung erfüllen musst &mdash; etwa für Gerichtseinreichungen,
        medizinische Bildgebung oder professionellen Druck &mdash; wende dich an
        eine qualifizierte Fachperson, anstatt dich auf diese Tools oder Artikel
        zu verlassen.
      </p>

      <h2 id="availability">Verfügbarkeit und Änderungen</h2>
      <p>
        Wir stellen den Dienst &ldquo;wie besehen&rdquo; und &ldquo;nach
        Verfügbarkeit&rdquo; bereit. Wir können jedes Tool oder jede Funktion
        jederzeit ohne Vorankündigung ändern, aussetzen oder einstellen, und
        wir garantieren nicht, dass der Dienst unterbrechungsfrei, fehlerfrei
        oder mit jedem Gerät oder Browser kompatibel ist. Wir können diesen
        Haftungsausschluss von Zeit zu Zeit aktualisieren; das oben angegebene
        Datum &ldquo;Zuletzt aktualisiert&rdquo; spiegelt die jüngste
        Änderung wider, und deine fortgesetzte Nutzung des Dienstes bedeutet,
        dass du die aktuelle Version akzeptierst.
      </p>

      <h2 id="contact">Kontaktiere uns</h2>
      <p>
        Wenn du Fragen zu diesem Haftungsausschluss hast, kannst du uns gerne
        eine E-Mail an{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>{" "}
        senden.
      </p>
    </>
  ),
};
