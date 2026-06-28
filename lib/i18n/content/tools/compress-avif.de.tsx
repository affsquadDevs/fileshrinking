import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "AVIF komprimieren — Gratis AVIF-Konverter",
  metaDescription:
    "Bilder im Browser zu AVIF konvertieren und komprimieren. Privat, ohne Upload und ohne Anmeldung: Deine Dateien verlassen nie dein Gerät. Winzige Dateien.",
  heading: "AVIF-Kompressor & -Konverter",
  intro: (
    <>
      Verwandle JPEG-, PNG-, WebP-, GIF- oder vorhandene AVIF-Bilder direkt in
      deinem Browser in winzige, hochwertige AVIF-Dateien. AVIF ist das
      kompakteste moderne Bildformat: Wähle eine Qualitätsstufe, lege deine Fotos
      ab und lade federleichte Dateien herunter, ohne dass jemals etwas
      hochgeladen wird.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So konvertierst und komprimierst du AVIF",
    description:
      "Erstelle oder komprimiere AVIF-Bilder in vier Schritten lokal in deinem Browser neu.",
    steps: [
      {
        name: "Füge deine Bilder hinzu",
        text: "Ziehe JPEG-, PNG-, WebP-, GIF- oder AVIF-Dateien per Drag-and-drop in den Ablagebereich, klicke zum Durchsuchen oder füge aus der Zwischenablage ein. Du kannst mehrere auf einmal hinzufügen.",
      },
      {
        name: "Wähle eine Qualitätsstufe",
        text: "Die Qualitätsskala von AVIF liegt niedriger als die von JPEG: Ein Standardwert um die 55 sieht bereits hervorragend aus. Erhöhe ihn für nahezu verlustfreie Ergebnisse oder senke ihn für die kleinstmöglichen Dateien.",
      },
      {
        name: "Lass den AV1-Encoder auf deinem Gerät arbeiten",
        text: "Jedes Bild wird lokal zu AVIF codiert. AV1 ist rechenintensiv, daher können große Fotos einige Sekunden dauern: Das ist zu erwarten und genau das macht die Dateien so klein.",
      },
      {
        name: "Lade deine AVIF-Dateien herunter",
        text: "Speichere Bilder einzeln oder lade alle als ZIP herunter. Passe die Qualität an und codiere jederzeit neu, um deine ideale Größe zu finden.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine AVIF-Dateien auf einen Server hochgeladen?",
      a: "Nein. Die Codierung erfolgt vollständig auf deinem Gerät über einen AV1-Encoder in WebAssembly. Deine Bilder werden in den Arbeitsspeicher geladen, lokal zu AVIF konvertiert und an dich zurückgegeben: Es wird nie etwas hochgeladen, sodass du sogar offline gehen kannst, sobald die Seite geladen ist.",
      text: "Nein. Die Codierung erfolgt vollständig auf deinem Gerät über einen AV1-Encoder in WebAssembly. Deine Bilder werden in den Arbeitsspeicher geladen, lokal zu AVIF konvertiert und an dich zurückgegeben. Es wird nie etwas hochgeladen, sodass du offline gehen kannst, sobald die Seite geladen ist.",
    },
    {
      q: "Ist der AVIF-Kompressor wirklich kostenlos?",
      a: "Ja: Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung der Anzahl oder Größe der Dateien, abgesehen vom Arbeitsspeicher deines Geräts. Die Website finanziert sich durch dezente Werbung.",
      text: "Ja. Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung der Anzahl oder Größe der Dateien, abgesehen vom Arbeitsspeicher deines Geräts. Die Website finanziert sich durch dezente Werbung.",
    },
    {
      q: "Wie wirkt sich AVIF auf die Bildqualität aus?",
      a: (
        <>
          Die AVIF-Komprimierung ist verlustbehaftet, aber ihr AV1-basierter
          Encoder bewahrt Details bei gleicher Dateigröße weitaus besser als
          ältere Formate. Beachte, dass sich die Qualitätsskala anders liest: Ein
          Wert um die <strong>50–60</strong> sieht bei AVIF in der Regel
          ausgezeichnet aus, während dieselbe Zahl bei JPEG schlecht aussehen
          würde. Schiebe den Regler nach oben für nahezu perfekte Wiedergabetreue
          oder nach unten für die kleinstmöglichen Dateien.
        </>
      ),
      text: "Die AVIF-Komprimierung ist verlustbehaftet, aber ihr AV1-basierter Encoder bewahrt Details bei gleicher Dateigröße weitaus besser als ältere Formate. Die Qualitätsskala liest sich anders: Ein Wert um die 50-60 sieht in der Regel ausgezeichnet aus, während dieselbe Zahl bei JPEG schlecht aussehen würde. Schiebe den Regler nach oben für nahezu perfekte Wiedergabetreue oder nach unten für die kleinsten Dateien.",
    },
    {
      q: "Warum ist die AVIF-Codierung langsam?",
      a: (
        <>
          AVIF verwendet den AV1-Codec, der sehr rechenintensiv ist: Er leistet
          deutlich mehr Arbeit pro Pixel als JPEG oder WebP, um seine winzigen
          Dateigrößen zu erreichen. Diesen Encoder im Browser mit WebAssembly
          auszuführen bedeutet, dass ein großes Foto mehrere Sekunden dauern kann
          und sehr große Bilder (etwa ab 20 Megapixeln) merklich länger brauchen.
          Das ist normal: Die Wartezeit verschafft dir eine drastisch kleinere
          Datei. Vorheriges Verkleinern beschleunigt das Ganze erheblich.
        </>
      ),
      text: "AVIF verwendet den AV1-Codec, der sehr rechenintensiv ist und deutlich mehr Arbeit pro Pixel leistet als JPEG oder WebP. Diesen Encoder im Browser mit WebAssembly auszuführen bedeutet, dass ein großes Foto mehrere Sekunden dauern kann und sehr große Bilder merklich länger brauchen. Das ist normal, und vorheriges Verkleinern beschleunigt das Ganze.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich konvertieren kann?",
      a: "Es gibt keine feste Grenze: Sie hängt vom verfügbaren Arbeitsspeicher deines Geräts ab. Typische Fotos funktionieren problemlos, und auch große Bilder mit 20–50 MP werden unterstützt, auch wenn sie langsamer codieren, weil AV1 intensiv ist. Stapel werden Datei für Datei verarbeitet, um den Speicherverbrauch gering zu halten.",
      text: "Es gibt keine feste Grenze; sie hängt vom verfügbaren Arbeitsspeicher deines Geräts ab. Typische Fotos funktionieren problemlos, und auch große Bilder mit 20-50 MP werden unterstützt, auch wenn sie langsamer codieren, weil AV1 intensiv ist. Stapel werden Datei für Datei verarbeitet, um den Speicherverbrauch gering zu halten.",
    },
    {
      q: "Welche Browser können AVIF-Dateien öffnen?",
      a: (
        <>
          Die Browserunterstützung ist inzwischen breit: Chrome, Edge, Firefox,
          Safari und Opera zeigen AVIF in modernen Versionen an, und die meisten
          Smartphones tun dies ebenfalls. Für sehr alte Browser oder einige
          Desktop-Anwendungen, die noch nicht aufgeschlossen haben, behalte einen{" "}
          <Link href="/de/compress-jpeg">JPEG</Link>- oder{" "}
          <Link href="/de/compress-webp">WebP</Link>-Fallback bei oder liefere
          AVIF innerhalb eines <code>&lt;picture&gt;</code>-Elements aus, damit
          der Browser das beste Format wählt, das er lesen kann.
        </>
      ),
      text: "Die Browserunterstützung ist inzwischen breit: Chrome, Edge, Firefox, Safari und Opera zeigen AVIF in modernen Versionen an, und die meisten Smartphones tun dies ebenfalls. Für sehr alte Browser oder einige Desktop-Anwendungen behalte einen JPEG- oder WebP-Fallback bei oder liefere AVIF innerhalb eines picture-Elements aus, damit der Browser das beste Format wählt, das er lesen kann.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum Bilder zu AVIF konvertieren?</h2>
      <p>
        AVIF ist das kompakteste verbreitete Bildformat, das heute verfügbar ist.
        Aufbauend auf dem lizenzgebührenfreien Videocodec <strong>AV1</strong>,
        erzeugt es regelmäßig Dateien, die{" "}
        <strong>30–50&nbsp;% kleiner sind als WebP</strong>, und oft halb so groß
        wie ein vergleichbares JPEG, bei gleicher wahrgenommener Qualität. Für
        fotolastige Websites bedeutet das unmittelbar schnellere Seitenladezeiten,
        bessere Core Web Vitals, geringere Bandbreitenkosten und ein flüssigeres
        Erlebnis bei langsamen Mobilfunkverbindungen.
      </p>
      <p>
        Über die reine Größe hinaus bringt AVIF wirklich moderne Funktionen für
        Standbilder mit: volle <strong>Alpha-Transparenz</strong> wie PNG, weiten
        Farbraum und <strong>HDR</strong>-Unterstützung (10 und 12 Bit) sowie
        verlustbehaftete und verlustfreie Modi in einem einzigen Format. Da dieser
        Konverter vollständig auf deinem Gerät läuft, ist er außerdem die private
        Art, AVIF einzusetzen: Anders als bei typischen Online-Konvertern werden
        deine Fotos mit einem AV1-Build in WebAssembly direkt auf der Seite
        codiert und gelangen nie zu einem Server.
      </p>

      <h2 id="quality">Qualität, die AVIF-Skala und die Codierungsgeschwindigkeit</h2>
      <p>
        AVIF wird normalerweise als <strong>verlustbehaftetes</strong> Format
        verwendet und verwirft Details, die das Auge am wenigsten vermissen wird,
        aber es tut dies weitaus geschickter als JPEG und vermeidet die
        Blockartefakte, die entstehen, wenn man ältere Formate zu stark belastet.
        Eines solltest du vorab wissen: Die{" "}
        <strong>Qualitätszahlen lesen sich anders</strong>. Eine Einstellung nahe{" "}
        <strong>50–60</strong> sieht bei AVIF typischerweise ausgezeichnet aus,
        wo derselbe Wert bei einem JPEG grob aussehen würde. Deshalb verwendet
        dieses Tool standardmäßig einen Wert um die <strong>55</strong>: Das ist
        ein Idealpunkt, kein Kompromiss.
      </p>
      <p>
        Der ehrliche Kompromiss ist die <strong>Geschwindigkeit</strong>. AV1
        leistet eine enorme Menge an Berechnungen pro Pixel, um diese winzigen
        Größen zu erreichen, und es im Browser über WebAssembly auszuführen ist
        langsamer als eine JPEG- oder WebP-Codierung. Ein typisches Foto ist in
        wenigen Sekunden fertig; ein sehr großes Bild mit mehr als 20 Megapixeln
        kann merklich länger dauern, und ein großer Stapel summiert sich. Das ist
        zu erwarten: Es ist der Preis für die Effizienz von AVIF, kein Fehler. Das
        Verkleinern vor dem Codieren ist die größte einzelne Beschleunigung und
        verkleinert das Ergebnis zusätzlich.
      </p>

      <h2 id="format">Was ist AVIF und wann solltest du es verwenden?</h2>
      <p>
        AVIF (AV1 Image File Format) speichert einen oder mehrere AV1-codierte
        Frames in einem ISO-Base-Media-Container, derselben Familie wie MP4. Es
        unterstützt Transparenz, Animation, weiten Farbraum und HDR, was es in
        vielen Fällen zu einem starken einzelnen Ersatz für JPEG, PNG und sogar
        animiertes GIF macht. Die vollständige Aufschlüsselung der Fähigkeiten und
        der Browserunterstützung kannst du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Dokumentation zum AVIF-Bild
        </a>
        {" "}nachlesen.
      </p>
      <p>
        AVIF ist eine ausgezeichnete Standardwahl für Fotografien und reichhaltige
        Webbilder, die für moderne Browser bestimmt sind. Weniger ideal ist es,
        wenn du universelle Kompatibilität mit älterer Software brauchst, wenn
        Dateien viele Male neu bearbeitet werden müssen (jeder verlustbehaftete
        Durchgang verliert ein wenig) oder bei einfachen flachen Grafiken, wo ein
        verlustfreies <Link href="/de/compress-png">PNG</Link> mithalten kann.
        Wenn du eine etwas breitere Unterstützung bei weiterhin hervorragender
        Komprimierung möchtest, ist <Link href="/de/compress-webp">WebP</Link> der
        natürliche Mittelweg, und unser{" "}
        <Link href="/de/image-converter">Bildkonverter</Link> lässt dich Formate
        nebeneinander vergleichen. Um übergroße Ausgangsbilder vor dem Codieren zu
        beschneiden, greife zum{" "}
        <Link href="/de/image-resizer">Bild-Resizer</Link>.
      </p>

      <h2 id="tips">Tipps für die besten AVIF-Ergebnisse</h2>
      <ul>
        <li>
          <strong>Vertraue den niedrigeren Zahlen.</strong> Stelle die
          AVIF-Qualität nicht aus JPEG-Gewohnheit auf 80–90: Beginne nahe 55 und
          erhöhe sie nur, wenn du bei deiner Anzeigegröße tatsächlich einen
          Unterschied siehst.
        </li>
        <li>
          <strong>Verkleinere vor dem Codieren.</strong> Ein 6000&nbsp;px großes
          Bild auszuliefern, das mit 1200&nbsp;px angezeigt wird, verschwendet
          sowohl Dateigröße als auch Codierungszeit. Vorheriges Verkleinern macht
          den langsamen AV1-Durchgang drastisch schneller.
        </li>
        <li>
          <strong>Behalte einen JPEG- oder WebP-Fallback bei.</strong> Für
          maximale Reichweite liefere AVIF innerhalb eines{" "}
          <code>&lt;picture&gt;</code>-Elements mit einer{" "}
          <Link href="/de/compress-jpeg">JPEG</Link>- oder{" "}
          <Link href="/de/compress-webp">WebP</Link>-Quelle aus, damit ältere
          Clients weiterhin ein Bild erhalten.
        </li>
        <li>
          <strong>Sei geduldig bei großen Stapeln.</strong> Die Ersparnis von
          AVIF ist die Wartezeit wert. Stelle deine Dateien in die Warteschlange,
          lass den Encoder sie nacheinander abarbeiten und lade am Ende alles als
          ZIP herunter.
        </li>
      </ul>
    </>
  ),
};
