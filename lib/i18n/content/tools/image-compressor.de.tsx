import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Bildkompressor — Kostenlos & privat",
  metaDescription:
    "Komprimiere JPEG-, PNG-, WebP-, AVIF- und GIF-Bilder im Browser. 100 % privat, ohne Upload und ohne Anmeldung: Deine Fotos verlassen nie dein Gerät.",
  heading: "Bildkompressor",
  intro: (
    <>
      Komprimiere und konvertiere JPEG-, PNG-, WebP-, AVIF- und GIF-Bilder direkt
      in deinem Browser. Füge deine Fotos hinzu, wähle ein Format und eine
      Qualität und lade in Sekunden kleinere Dateien herunter: Alles läuft auf
      deinem Gerät, sodass nie etwas hochgeladen wird.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du ein Bild",
    description:
      "Komprimiere oder konvertiere jedes gängige Bildformat lokal in deinem Browser in vier Schritten.",
    steps: [
      {
        name: "Bilder hinzufügen",
        text: "Ziehe JPEG-, PNG-, WebP-, AVIF- oder GIF-Dateien per Drag-and-drop auf den Ablagebereich, klicke zum Durchsuchen oder füge sie aus der Zwischenablage ein. Mische Formate beliebig: Jede Datei wird einzeln verarbeitet.",
      },
      {
        name: "Ausgabeformat wählen",
        text: "Lass es auf Gleiches Format, um ohne Typänderung neu zu komprimieren, oder wähle JPEG, PNG, WebP oder AVIF zum Konvertieren. WebP und AVIF erzeugen die kleinsten Dateien für Fotos.",
      },
      {
        name: "Qualität einstellen (und bei Bedarf skalieren)",
        text: "Nutze den Qualitätsregler — rund 75 passt für die meisten Fotos — oder die verlustfreie Stufe für PNG. Optional kannst du nach Prozent oder exakten Pixeln skalieren, um noch mehr zu sparen.",
      },
      {
        name: "Ergebnisse herunterladen",
        text: "Speichere Bilder einzeln oder lade alles als ZIP herunter. Jede Datei zeigt ihre ursprüngliche Größe, die neue Größe und den prozentualen Gewinn an, sodass du nachjustieren und es erneut versuchen kannst.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine Bilder auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Jedes Bild, das du hinzufügst, wird vollständig in deinem eigenen
          Browser mittels WebAssembly dekodiert und neu kodiert. Es wird nichts
          irgendwohin gesendet: Es gibt keinen Upload-Schritt und keinen Server,
          der deine Dateien jemals zu Gesicht bekommt. Du kannst deine
          Internetverbindung sogar trennen, sobald die Seite geladen ist, und
          weiter komprimieren.
        </>
      ),
      text: "Nein. Jedes Bild wird vollständig in deinem eigenen Browser mittels WebAssembly dekodiert und neu kodiert. Es wird nichts irgendwohin gesendet; es gibt keinen Upload-Schritt und keinen Server, der deine Dateien jemals zu Gesicht bekommt. Du kannst deine Internetverbindung trennen, sobald die Seite geladen ist, und weiter komprimieren.",
    },
    {
      q: "Ist der Bildkompressor kostenlos?",
      a: (
        <>
          Ja: Er ist völlig kostenlos, ohne Konto, ohne Wasserzeichen und ohne
          Tageslimits. Du kannst so viele Bilder verarbeiten, wie es der
          Arbeitsspeicher deines Geräts zulässt. Die Seite finanziert sich durch
          dezente Anzeigen neben dem Artikel, niemals innerhalb des Tools selbst.
        </>
      ),
      text: "Ja. Er ist völlig kostenlos, ohne Konto, ohne Wasserzeichen und ohne Tageslimits. Du kannst so viele Bilder verarbeiten, wie es der Arbeitsspeicher deines Geräts zulässt. Die Seite finanziert sich durch dezente Anzeigen neben dem Artikel, nicht innerhalb des Tools.",
    },
    {
      q: "Verringert das Komprimieren die Qualität meiner Bilder?",
      a: (
        <>
          Das hängt vom Format und den Einstellungen ab. Verlustbehaftete Formate
          wie JPEG, WebP und AVIF verwerfen feine Details, um die Datei zu
          verkleinern, aber bei einer Qualität von etwa 75 ist die Veränderung in
          der Regel nicht sichtbar. Die verlustfreie PNG-Optimierung entfernt
          keinerlei Details: Sie schreibt die Datei lediglich effizienter neu.
          Nutze den Qualitätsregler, um bei jeder Aufgabe Größe und Treue
          auszubalancieren.
        </>
      ),
      text: "Das hängt vom Format und den Einstellungen ab. Verlustbehaftete Formate wie JPEG, WebP und AVIF verwerfen feine Details, um die Datei zu verkleinern, aber bei einer Qualität von etwa 75 ist die Veränderung in der Regel nicht sichtbar. Die verlustfreie PNG-Optimierung entfernt keinerlei Details; sie schreibt die Datei lediglich effizienter neu. Nutze den Qualitätsregler, um Größe und Treue auszubalancieren.",
    },
    {
      q: "Wie groß darf eine Datei höchstens sein, die ich komprimiere?",
      a: (
        <>
          Es gibt kein festes Limit: Es ist nur durch den verfügbaren
          Arbeitsspeicher deines Geräts begrenzt. Normale Fotos von wenigen
          Megabyte und große Bilder mit 20–50 MP funktionieren auf Smartphones
          und Laptops gleichermaßen problemlos. Stapel werden Bild für Bild
          verarbeitet, was den Speicherverbrauch selbst bei vielen großen Dateien
          niedrig hält.
        </>
      ),
      text: "Es gibt kein festes Limit; es ist nur durch den verfügbaren Arbeitsspeicher deines Geräts begrenzt. Normale Fotos von wenigen Megabyte und große Bilder mit 20-50 MP funktionieren auf Smartphones und Laptops problemlos. Stapel werden Bild für Bild verarbeitet, um den Speicherverbrauch niedrig zu halten.",
    },
    {
      q: "Welche Bildformate unterstützt dieses Tool?",
      a: (
        <>
          Du kannst JPEG-, PNG-, WebP-, AVIF- und GIF-Dateien ablegen und nach
          JPEG, PNG, WebP oder AVIF exportieren. Lass die Ausgabe auf
          &bdquo;Gleiches Format&ldquo;, um an Ort und Stelle neu zu komprimieren,
          oder wähle ein anderes Format zum Konvertieren. Für einen speziellen,
          formatbezogenen Arbeitsablauf wechsle zum{" "}
          <Link href="/de/compress-jpeg">JPEG</Link>-,{" "}
          <Link href="/de/compress-png">PNG</Link>-,{" "}
          <Link href="/de/compress-webp">WebP</Link>-,{" "}
          <Link href="/de/compress-avif">AVIF</Link>- oder{" "}
          <Link href="/de/compress-gif">GIF</Link>-Kompressor.
        </>
      ),
      text: "Du kannst JPEG-, PNG-, WebP-, AVIF- und GIF-Dateien ablegen und nach JPEG, PNG, WebP oder AVIF exportieren. Lass die Ausgabe auf Gleiches Format, um an Ort und Stelle neu zu komprimieren, oder wähle ein anderes Format zum Konvertieren. Für JPEG, PNG, WebP, AVIF und GIF gibt es spezielle Tools.",
    },
    {
      q: "Was ist der Unterschied zwischen dem Komprimieren und dem Konvertieren eines Bildes?",
      a: (
        <>
          Komprimieren behält das gleiche Format bei und verkleinert die Datei;
          Konvertieren ändert das Format selbst — zum Beispiel verwandelt es einen
          schweren PNG-Screenshot in ein viel kleineres WebP. Diese zentrale Seite
          kann beides: Stelle das Ausgabeformat zum Konvertieren ein oder lass es
          gleich, um nur zu komprimieren. Wenn die Konvertierung dein Hauptziel
          ist, ist der dedizierte{" "}
          <Link href="/de/image-converter">Bildkonverter</Link> die fokussiertere
          Option, und der{" "}
          <Link href="/de/image-resizer">Bildgrößenänderer</Link> kümmert sich um
          das Ändern der Abmessungen.
        </>
      ),
      text: "Komprimieren behält das gleiche Format bei und verkleinert die Datei; Konvertieren ändert das Format selbst, etwa indem ein schweres PNG in ein kleineres WebP verwandelt wird. Diese zentrale Seite kann beides. Für die Konvertierung ist der dedizierte Bildkonverter fokussierter, und der Bildgrößenänderer kümmert sich um das Ändern der Abmessungen.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum Bilder komprimieren und konvertieren?</h2>
      <p>
        Bilder sind der mit Abstand schwerste Bestandteil der meisten Webseiten,
        E-Mails und geteilten Ordner. Eine moderne Handykamera kann Fotos von
        4–12 MB erzeugen, und als PNG gespeicherte Screenshots können
        überraschend groß ausfallen. Übergroße Bilder verlangsamen Webseiten,
        sprengen die Größenlimits von E-Mail-Anhängen, füllen den Cloud-Speicher
        und verbrauchen mobiles Datenvolumen. Sie zu komprimieren bewahrt das
        Detail, das dir wirklich wichtig ist, und verringert gleichzeitig die
        Dateigröße drastisch — je nach gewähltem Format oft um 60–90 %.
      </p>
      <p>
        Diese Seite ist die zentrale Anlaufstelle für jedes Bildformat. Da sie{" "}
        <strong>vollständig auf deinem Gerät</strong> läuft, ist sie auch der
        private Weg dafür. Herkömmliche Online-Kompressoren laden deine Fotos auf
        einen entfernten Server hoch, verarbeiten sie dort und schicken sie
        zurück. Hier wird jedes Bild in den Arbeitsspeicher eingelesen, mit einem
        WebAssembly-Codec neu kodiert und dir direkt zurückgegeben. Deine Fotos
        wandern nie über ein Netzwerk, was bei persönlichen Fotos, Scans von
        Ausweisdokumenten, Verträgen und allem anderen wichtig ist, das du lieber
        nicht dem Server eines Fremden anvertraust.
      </p>

      <h2 id="lossy">Verlustbehaftet versus verlustfrei: der zentrale Kompromiss</h2>
      <p>
        Jedes Bildformat fällt in eines von zwei Lagern. Die{" "}
        <strong>verlustbehaftete</strong> Komprimierung — verwendet von JPEG und
        den Standardmodi von WebP und AVIF — verwirft dauerhaft die Details, die
        das menschliche Auge am wenigsten vermissen dürfte, und erzielt so derart
        große Einsparungen. Der Qualitätsregler steuert, wie aggressiv das
        geschieht: Höhere Werte bewahren mehr Detail und erzeugen größere
        Dateien, während niedrigere Werte mehr Platz sparen, aber sichtbare
        &bdquo;Artefakte&ldquo; wie Blockbildung oder Lichthöfe an Kanten
        hervorrufen können. Die{" "}
        <strong>verlustfreie</strong> Komprimierung — verwendet von PNG und GIF
        sowie als optionaler Modus von WebP — schreibt die Datei effizienter neu,
        ohne ein einziges Pixel zu verwerfen, sodass das Bild beim Dekodieren Byte
        für Byte identisch ist. Der Haken ist, dass die verlustfreien
        Einsparungen weitaus bescheidener ausfallen.
      </p>
      <p>
        Die praktische Regel: Verwende verlustbehaftete Formate für Fotografien
        und realistische Bilder, bei denen eine Qualität von 70–80 vom Original
        meist nicht zu unterscheiden ist, und verwende verlustfreie Formate für
        Grafiken, Logos, Screenshots und alles mit scharfen Kanten oder Text, wo
        verlustbehaftete Artefakte deutlich auffallen. Denke daran, dass die
        verlustbehaftete Komprimierung <strong>kumulativ</strong> ist — arbeite
        stets von deinem Master in höchster Qualität aus, statt eine bereits
        komprimierte Kopie erneut zu speichern.
      </p>

      <h2 id="formats">Das richtige Format wählen</h2>
      <p>
        Die Wahl des Formats ist genauso wichtig wie die Qualitätseinstellung.
        Als kurze Orientierung: <strong>JPEG</strong> ist die universelle Wahl
        für Fotos ohne Transparenz; <strong>PNG</strong> ist am besten für flache
        Grafiken, Screenshots und alles, das einen transparenten Hintergrund
        braucht; <strong>WebP</strong> erzeugt in der Regel Dateien, die 25–35 %
        kleiner als JPEG sind, und unterstützt zugleich Transparenz und
        Animation; <strong>AVIF</strong> ist das neueste und für Fotografien
        meist das kleinste von allen, allerdings um den Preis langsamerer
        Kodierung; und <strong>GIF</strong> ist ein altes Animationsformat, das
        fast immer von einer Konvertierung zu WebP oder Video übertroffen wird.
        Die maßgebliche Übersicht darüber, wie sich jedes Format in Browsern
        verhält, findest du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Leitfaden zu Bilddateitypen und -formaten
        </a>
        .
      </p>
      <p>
        Wenn du bereits weißt, mit welchem Format du arbeitest, bieten dir die
        dedizierten Tools die relevantesten Steuerelemente und Erklärungen: der{" "}
        <Link href="/de/compress-jpeg">JPEG-Kompressor</Link> für Fotos, der{" "}
        <Link href="/de/compress-png">PNG-Kompressor</Link> für verlustfreie
        Grafiken, die <Link href="/de/compress-webp">WebP</Link>- und{" "}
        <Link href="/de/compress-avif">AVIF</Link>-Tools für die kleinsten
        modernen Dateien und der{" "}
        <Link href="/de/compress-gif">GIF-Kompressor</Link> für Animationen. Um
        einen Stapel Dateien von einem Format in ein anderes zu überführen, nutze
        den <Link href="/de/image-converter">Bildkonverter</Link>; um die
        Pixelabmessungen zu ändern, greife zum{" "}
        <Link href="/de/image-resizer">Bildgrößenänderer</Link>.
      </p>

      <h2 id="tips">Praktische Tipps für die besten Ergebnisse</h2>
      <ul>
        <li>
          <strong>Skaliere vor dem Komprimieren.</strong> Wenn ein Bild ohnehin
          nur 1200 px breit angezeigt wird, verschwendet ein Original mit 6000 px
          den größten Teil der Datei. Das Herunterskalieren spart in der Regel
          mehr, als es der Qualitätsregler je könnte.
        </li>
        <li>
          <strong>Passe das Format an den Inhalt an.</strong> Fotos gehören in
          JPEG, WebP oder AVIF; Logos, Symbole und Screenshots bleiben als PNG
          schärfer und kleiner. Ein PNG-Foto zu WebP zu konvertieren, kann es um
          eine Größenordnung verkleinern.
        </li>
        <li>
          <strong>Bewahre eine Master-Kopie auf.</strong> Da sich die
          verlustbehaftete Neukodierung aufsummiert, komprimiere immer von deinem
          Original aus und nicht von einer Datei, die du zuvor exportiert hast.
        </li>
        <li>
          <strong>Vergleiche, bevor du dich festlegst.</strong> Probiere zuerst
          &bdquo;Ausgewogen&ldquo;, führe es dann erneut mit &bdquo;Am
          kleinsten&ldquo; aus und prüfe, ob du den Unterschied bei der Größe
          erkennen kannst, in der du das Bild tatsächlich anzeigen wirst.
        </li>
        <li>
          <strong>Fasse ähnliche Bilder zusammen.</strong> Fotos derselben Kamera
          oder Screenshots desselben Bildschirms sehen mit einer gemeinsamen
          Einstellung meist hervorragend aus, sodass du sie in einem einzigen
          Durchgang verarbeiten kannst.
        </li>
      </ul>
    </>
  ),
};
