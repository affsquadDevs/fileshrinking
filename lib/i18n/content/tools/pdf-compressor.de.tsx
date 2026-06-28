import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "PDF-Kompressor — kostenlos, privat, im Browser",
  metaDescription:
    "Komprimiere PDFs im Browser. Eingebettete Bilder werden neu komprimiert, um gescannte und bildlastige PDFs zu verkleinern – ohne Upload und Anmeldung.",
  heading: "PDF-Kompressor",
  intro: (
    <>
      Verkleinere bildlastige und gescannte PDFs direkt in deinem Browser. Dieses
      Werkzeug komprimiert die in deinem Dokument eingebetteten Bilder neu und
      entfernt aufgeblähte Metadaten, sodass die Datei kleiner wird, während dein
      Text scharf bleibt – und nichts wird jemals hochgeladen.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du ein PDF",
    description:
      "Verkleinere ein PDF in vier Schritten lokal in deinem Browser, ganz ohne Upload.",
    steps: [
      {
        name: "Füge dein PDF hinzu",
        text: "Ziehe dein PDF per Drag-and-drop in das Ablagefeld oder klicke, um es auszuwählen. Die Datei wird direkt in deinen Browser eingelesen – sie wird nirgendwohin gesendet.",
      },
      {
        name: "Wähle eine Komprimierungsstufe",
        text: "Wähle eine Voreinstellung oder stelle den Regler für die Bildqualität fein ein. Ausgewogen passt zu den meisten Dokumenten; wähle Am kleinsten für die größte Einsparung bei Scans und fotolastigen Dateien.",
      },
      {
        name: "Lass es auf deinem Gerät verarbeiten",
        text: "Eingebettete Bilder werden in der Auflösung reduziert und als JPEG neu codiert, und Metadaten werden entfernt – alles lokal. Du siehst die ursprüngliche Größe, die neue Größe und den eingesparten Prozentsatz.",
      },
      {
        name: "Lade das kleinere PDF herunter",
        text: "Speichere deine optimierte Datei. Wäre das Ergebnis größer als dein Original, behält das Werkzeug das Original, damit du nie eine größere Datei bekommst.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine PDF-Dateien auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Jedes PDF wird vollständig in deinem Browser mit pdf-lib und
          einem WebAssembly-Bildcodierer geöffnet und neu geschrieben. Es wird
          nichts hochgeladen – es gibt keinen Server, an den dein Dokument
          gesendet werden könnte. Du kannst sogar offline gehen, nachdem die
          Seite geladen ist, und es funktioniert weiterhin.
        </>
      ),
      text: "Nein. Jedes PDF wird vollständig in deinem Browser mit pdf-lib und einem WebAssembly-Bildcodierer geöffnet und neu geschrieben. Es wird nichts hochgeladen und es gibt keinen Server, an den dein Dokument gesendet werden könnte. Du kannst offline gehen, nachdem die Seite geladen ist, und es funktioniert weiterhin.",
    },
    {
      q: "Ist der PDF-Kompressor wirklich kostenlos?",
      a: (
        <>
          Ja – er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen auf
          deinen Seiten und ohne tägliche Datei- oder Seitenlimits. Die einzige
          praktische Grenze ist der Arbeitsspeicher deines Geräts. Die Seite
          finanziert sich über dezente Werbung.
        </>
      ),
      text: "Ja. Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen auf deinen Seiten und ohne tägliche Datei- oder Seitenlimits. Die einzige praktische Grenze ist der Arbeitsspeicher deines Geräts. Die Seite finanziert sich über dezente Werbung.",
    },
    {
      q: "Verringert das Komprimieren die Qualität meines PDFs?",
      a: (
        <>
          Es betrifft nur die eingebetteten Bilder, die in der Auflösung
          reduziert und als JPEG neu codiert werden; Text und Vektorgrafiken
          bleiben gestochen scharf und vollständig auswählbar. Höhere
          Einstellungen für die Bildqualität halten Fotos scharf, während
          niedrigere mehr Speicherplatz sparen. Gescannte PDFs (die in
          Wirklichkeit Bilder sind) zeigen den sichtbarsten Kompromiss.
        </>
      ),
      text: "Es betrifft nur die eingebetteten Bilder, die in der Auflösung reduziert und als JPEG neu codiert werden; Text und Vektorgrafiken bleiben gestochen scharf und auswählbar. Höhere Einstellungen für die Bildqualität halten Fotos scharf, während niedrigere mehr Speicherplatz sparen. Gescannte PDFs, die in Wirklichkeit Bilder sind, zeigen den sichtbarsten Kompromiss.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich komprimieren kann?",
      a: (
        <>
          Es gibt keine feste Grenze – sie hängt davon ab, wie viel
          Arbeitsspeicher deinem Gerät frei zur Verfügung steht. Typische
          Dokumente von einigen Megabyte sind sofort fertig, und große gescannte
          PDFs von 50–100 MB funktionieren in der Regel auf einem modernen
          Laptop. Sehr große Dateien benötigen mehr RAM, weil das gesamte PDF im
          Arbeitsspeicher gehalten wird, während es neu geschrieben wird.
        </>
      ),
      text: "Es gibt keine feste Grenze; sie hängt davon ab, wie viel Arbeitsspeicher deinem Gerät frei zur Verfügung steht. Typische Dokumente von einigen Megabyte sind sofort fertig, und große gescannte PDFs von 50-100 MB funktionieren in der Regel auf einem modernen Laptop. Sehr große Dateien benötigen mehr RAM, weil das gesamte PDF im Arbeitsspeicher gehalten wird, während es neu geschrieben wird.",
    },
    {
      q: "Warum ist mein PDF überhaupt nicht kleiner geworden?",
      a: (
        <>
          Dieses Werkzeug verkleinert PDFs, indem es eingebettete Bilder neu
          komprimiert. Wenn dein Dokument größtenteils aus Text, Tabellen oder
          Vektorgrafiken besteht, gibt es keine großen Bilder zu optimieren, also
          gibt es wenig zu entfernen. Wenn ein neu komprimiertes PDF am Ende
          größer als das Original wäre, behält das Werkzeug deine Originaldatei
          unangetastet.
        </>
      ),
      text: "Dieses Werkzeug verkleinert PDFs, indem es eingebettete Bilder neu komprimiert. Wenn dein Dokument größtenteils aus Text, Tabellen oder Vektorgrafiken besteht, gibt es keine großen Bilder zu optimieren, also gibt es wenig zu entfernen. Wenn ein neu komprimiertes PDF am Ende größer als das Original wäre, behält das Werkzeug deine Originaldatei unangetastet.",
    },
    {
      q: "Bleibt mein PDF-Text nach dem Komprimieren durchsuchbar?",
      a: (
        <>
          Ja. Das Werkzeug rastert deine Seiten nie und wandelt Text nie in
          Bilder um, sodass jeglicher auswählbare, durchsuchbare Text im Original
          auch danach auswählbar und durchsuchbar bleibt. Nur die im Dokument
          eingebetteten Bilddaten werden neu codiert, und das Seitenlayout bleibt
          erhalten.
        </>
      ),
      text: "Ja. Das Werkzeug rastert deine Seiten nie und wandelt Text nie in Bilder um, sodass jeglicher auswählbare, durchsuchbare Text im Original auch danach auswählbar und durchsuchbar bleibt. Nur die im Dokument eingebetteten Bilddaten werden neu codiert, und das Seitenlayout bleibt erhalten.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum sind PDF-Dateien so groß?</h2>
      <p>
        Ein PDF kann auf Dutzende Megabyte anschwellen – aus Gründen, die beim
        Blick auf die Seite nicht offensichtlich sind. Der mit Abstand größte
        Übeltäter sind <strong>eingebettete Bilder</strong>: Wenn du ein Dokument
        scannst, Folien exportierst oder ein Handyfoto in einen Bericht ziehst,
        wird das Bild in voller Auflösung in der Datei gespeichert – oft mit 300
        DPI oder mehr, weit mehr Detail, als ein Bildschirm oder ein
        E-Mail-Empfänger je zu sehen bekommt. Weitere häufige Faktoren sind{" "}
        <strong>eingebettete Schriften</strong>, durch wiederholte Bearbeitungen
        duplizierte Objekte sowie übrig gebliebene <strong>Metadaten</strong> wie
        Miniaturansichten, Anmerkungen und Versionsverlauf.
      </p>
      <p>
        Gescannte Dokumente sind der Extremfall. Ein &bdquo;gescanntes
        PDF&ldquo; ist in Wirklichkeit ein Stapel Fotografien von Papier, mit
        einem großen Bild pro Seite und wenig oder gar keinem echten Text. Deshalb
        kann ein 10-seitiger Scan größer sein als ein 200-seitiger Textbericht.
        Genau bei diesen bildlastigen und gescannten Dateien glänzt dieser
        Kompressor.
      </p>
      <p>
        Es hilft, sich ein PDF als zip-ähnlichen Container vorzustellen statt als
        ein einzelnes flaches Bild. Ein digital erstellter Bericht, der aus einer
        Textverarbeitung exportiert wurde, besteht größtenteils aus kompakten
        Textanweisungen plus ein paar eingebetteten Schriften und bleibt daher
        klein. In dem Moment, in dem du hochauflösende Diagramme, Produktfotos
        oder ganzseitige Screenshots hinzufügst, erbt die Datei all deren
        Pixeldaten. Wiederholtes Bearbeiten und erneutes Speichern in manchen
        Apps kann zudem verwaiste Kopien ersetzter Bilder zurücklassen und die
        Datei still und leise mit Daten aufblähen, die auf der Seite nicht einmal
        mehr sichtbar sind.
      </p>

      <h2 id="how-it-works">So funktioniert dieser PDF-Kompressor</h2>
      <p>
        Seien wir präzise darüber, was passiert, denn Ehrlichkeit zählt mehr als
        ein vollmundiges Versprechen von &bdquo;90&nbsp;% kleiner&ldquo;. Dieses
        Werkzeug öffnet dein PDF, findet die darin eingebetteten Bilder und{" "}
        <strong>reduziert die Auflösung</strong> aller Bilder, die größer als
        nötig sind, und <strong>codiert sie dann als JPEG neu</strong> mit der von
        dir gewählten Qualität. Außerdem entfernt es nicht wesentliche Metadaten.
        Anschließend baut es das Dokument mit{" "}
        <a
          href="https://pdf-lib.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf-lib
        </a>{" "}
        und einem WebAssembly-Bildcodierer neu auf – alles im Browser-Tab.
      </p>
      <p>
        Was es <strong>nicht</strong> tut, ist genauso wichtig. Es flacht deine
        Seiten nicht zu Bildern ab, sodass dein{" "}
        <strong>Text echt, auswählbar und durchsuchbar bleibt</strong> und
        Vektorgrafiken bei jeder Zoomstufe scharf bleiben. Die Kehrseite: Wenn
        dein PDF größtenteils aus Text, Tabellen oder Vektorgrafiken besteht, gibt
        es für einen Bild-Neukomprimierer fast nichts abzuschöpfen, und die
        Einsparung fällt gering aus. In diesem Fall gibt das Werkzeug einfach{" "}
        <strong>deine Originaldatei zurück</strong> – es liefert nie etwas
        Größeres als das, womit du begonnen hast.
      </p>
      <p>
        Die beiden Einstellungen, die du steuerst, entsprechen direkt diesen zwei
        Hebeln. Der
        <strong> Regler für die Bildqualität</strong> legt fest, wie aggressiv
        jedes Bild als JPEG neu codiert wird: höher hält feine Details und
        Farbverläufe intakt, niedriger verwirft mehr für eine kleinere Datei. Die
        Voreinstellungen begrenzen außerdem die maximalen Pixelabmessungen
        eingebetteter Bilder, sodass ein überdimensioniertes Foto vor der
        Neucodierung auf eine sinnvolle Auflösung{" "}
        <strong>heruntergerechnet</strong> wird. Das Herunterrechnen der
        Auflösung ist meist die Quelle der größten Einsparungen, denn das
        Halbieren von Breite und Höhe eines Bildes entfernt rund drei Viertel
        seiner Pixel. Alles wird Datei für Datei verarbeitet, sodass der
        Speicherverbrauch selbst auf einem Handy vorhersehbar bleibt.
      </p>

      <h2 id="format">Was ein PDF eigentlich ist und das Datenschutzmodell</h2>
      <p>
        PDF (Portable Document Format) wurde von Adobe entwickelt und ist heute
        ein offener ISO-Standard (ISO 32000). Ein PDF ist ein Container aus
        Objekten: Seitenbeschreibungen, Schriften, Vektorpfade und Bildströme,
        von denen jeder seine eigene Komprimierung verwenden kann. Da Bilder als
        separate Ströme gespeichert sind, können sie durch kleinere, neu codierte
        Versionen ausgetauscht werden, ohne den Rest des Dokuments zu berühren –
        das ist der Mechanismus, auf den sich dieses Werkzeug stützt. Du kannst
        Adobes eigene Übersicht über das Format auf der{" "}
        <a
          href="https://www.adobe.com/acrobat/about-adobe-pdf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adobe-PDF-Referenzseite
        </a>{" "}
        nachlesen.
      </p>
      <p>
        Der Datenschutz ist der Grund, dies in einem Browser zu tun, statt es auf
        eine Website hochzuladen. PDFs sind oft die <em>sensibelsten</em> Dateien,
        die Menschen komprimieren: Verträge, Steuererklärungen, Krankenakten,
        Ausweis-Scans und unterschriebene Vereinbarungen. Bei einem typischen
        Online-Kompressor verlässt all das deinen Rechner und liegt auf dem
        Server eines anderen. Hier wird dein Dokument in den Arbeitsspeicher
        eingelesen, auf deinem Gerät neu geschrieben und dir direkt
        zurückgegeben. Es wird nichts übertragen, protokolliert oder gespeichert –
        du kannst dich nach dem Laden der Seite vom Internet trennen, und das
        Werkzeug arbeitet weiter.
      </p>
      <p>
        Dieser Local-First-Ansatz hat auch einen praktischen Vorteil: Es gibt
        keine Warteschlangen, keine vom Server auferlegten Größenobergrenzen pro
        Datei und kein Warten, bis ein Upload und ein Download abgeschlossen sind.
        Die Geschwindigkeit hängt allein von deiner eigenen Hardware ab. Der
        Nachteil ist, dass sehr große Dateien beim Neuschreiben auf den
        Arbeitsspeicher deines Geräts angewiesen sind, sodass ein extrem großer
        Scan auf einem älteren Handy langsam sein kann – ihn vorher in kleinere
        PDFs aufzuteilen, ist eine einfache Lösung.
      </p>

      <h2 id="tips">Tipps für die kleinsten PDFs</h2>
      <ul>
        <li>
          <strong>Scanne mit niedrigerer DPI.</strong> 150–200 DPI reichen
          vollkommen für das Lesen am Bildschirm und für E-Mails; 600 DPI
          vervierfachen die Datenmenge für Details, die du selten zu sehen
          bekommst. Stelle die Auflösung vor dem Scannen ein – das ist der
          einfachste Gewinn überhaupt.
        </li>
        <li>
          <strong>Wähle zuerst Ausgewogen, dann Am kleinsten.</strong> Beginne
          mit der Voreinstellung Ausgewogen, prüfe das Ergebnis, führe es dann
          erneut mit Am kleinsten aus und vergleiche. Bei fotolastigen Scans kann
          die niedrigere Einstellung die Größe bei kaum sichtbarem Unterschied
          noch einmal etwa halbieren.
        </li>
        <li>
          <strong>Komprimiere Ausgangsbilder, bevor sie hineinkommen.</strong>{" "}
          Wenn du ein PDF aus Fotos oder Screenshots erstellst, verkleinere sie
          zuerst mit dem{" "}
          <Link href="/de/image-compressor">Bildkompressor</Link> oder dem{" "}
          <Link href="/de/compress-jpeg">JPEG-Kompressor</Link>. Eine schlankere
          Eingabe bedeutet ein schlankeres PDF.
        </li>
        <li>
          <strong>Verkleinere überdimensionierte Bilder vorab.</strong> Ein Foto
          mit 6000 Pixeln auf einer A4-Seite ist verschwendetes Detail. Nutze den{" "}
          <Link href="/de/image-resizer">Bild-Skalierer</Link> oder konvertiere
          mit dem{" "}
          <Link href="/de/image-converter">Bildkonverter</Link> in ein modernes
          Format, bevor du das Dokument zusammenstellst.
        </li>
        <li>
          <strong>Erwarte keine Wunder von Text-PDFs.</strong> Wenn eine Datei
          fast nur aus Text besteht und kaum kleiner wird, ist das normal – es
          gab schlicht keine schweren Bilder zu optimieren.
        </li>
      </ul>
    </>
  ),
};
