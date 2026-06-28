import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "HEIC komprimieren — Gratis HEIC-zu-JPG-Konverter",
  metaDescription:
    "Wandle HEIC- und HEIF-Fotos vom iPhone im Browser in JPG, WebP oder AVIF um, mit anpassbarer Qualität und Größe. Null Uploads — alles bleibt lokal.",
  heading: "HEIC-Kompressor & -Konverter",
  intro: (
    <>
      Wandle HEIC- und HEIF-Fotos vom iPhone in universell kompatible JPG-,
      WebP- oder AVIF-Dateien um &mdash; und verkleinere sie mit anpassbarer
      Qualität und Größenänderung. Alles läuft in deinem Browser, sodass deine
      Fotos niemals hochgeladen werden.
    </>
  ),
  lastUpdated: "2026-06-28",
  howTo: {
    name: "So konvertierst und komprimierst du HEIC-Fotos",
    description:
      "Wandle HEIC-/HEIF-Bilder vom iPhone lokal in deinem Browser in JPG, WebP oder AVIF um.",
    steps: [
      {
        name: "Füge deine HEIC-Fotos hinzu",
        text: "Ziehe deine .heic- oder .heif-Dateien per Drag-and-drop auf die Ablagefläche, klicke zum Durchsuchen oder füge sie ein. Du kannst einen ganzen Stapel auf einmal hinzufügen.",
      },
      {
        name: "Wähle ein Ausgabeformat",
        text: "Wähle JPG für maximale Kompatibilität oder WebP/AVIF für die kleinsten Dateien. Stelle eine Qualitätsstufe ein: rund 80 ist für Fotos ideal.",
      },
      {
        name: "Konvertiere auf deinem Gerät",
        text: "Jedes Foto wird mit einer WebAssembly-Version von libheif dekodiert und lokal neu kodiert. Du siehst für jede Datei die ursprüngliche und die neue Größe.",
      },
      {
        name: "Lade deine Fotos herunter",
        text: "Lade die Bilder einzeln herunter oder hol dir alle als ZIP. Passe Format, Qualität oder Größe an und führe es jederzeit erneut aus.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine HEIC-Fotos auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Deine HEIC-Dateien werden vollständig in deinem Browser mit
          WebAssembly dekodiert und neu kodiert &mdash; sie verlassen niemals
          dein Gerät. Die meisten anderen &ldquo;HEIC-Konverter&rdquo;-Seiten
          laden deine persönlichen Fotos auf ihre Server hoch; diese hier hat
          keinen Server, auf den hochgeladen werden könnte, und du kannst die
          Internetverbindung trennen, sobald die Seite geladen ist, und es
          funktioniert weiterhin.
        </>
      ),
      text: "Nein. HEIC-Dateien werden vollständig in deinem Browser mit WebAssembly dekodiert und neu kodiert und verlassen niemals dein Gerät. Die meisten anderen HEIC-Konverter-Seiten laden deine persönlichen Fotos auf einen Server hoch; diese hier nicht. Du kannst die Internetverbindung trennen, sobald die Seite geladen ist, und es funktioniert weiterhin.",
    },
    {
      q: "Warum sollte ich HEIC in JPG umwandeln?",
      a: (
        <>
          HEIC ist Apples Standard-Fotoformat, aber viele Windows-PCs, Websites,
          Apps und ältere Geräte können es nicht öffnen. Die Umwandlung in JPG
          (oder WebP/AVIF) sorgt dafür, dass deine Fotos überall geöffnet werden,
          damit du sie ohne Kompatibilitätsfehler teilen, hochladen und
          bearbeiten kannst.
        </>
      ),
      text: "HEIC ist Apples Standard-Fotoformat, aber viele Windows-PCs, Websites, Apps und ältere Geräte können es nicht öffnen. Die Umwandlung in JPG, WebP oder AVIF sorgt dafür, dass die Fotos überall geöffnet werden, damit du sie teilen, hochladen und bearbeiten kannst.",
    },
    {
      q: "Verringert die Umwandlung die Qualität meines Fotos?",
      a: (
        <>
          Die Umwandlung in JPEG, WebP oder AVIF erfolgt verlustbehaftet, sodass
          ein Teil der Details neu kodiert wird. Bei Qualität 75&ndash;85 ist der
          Unterschied bei üblichen Anzeigegrößen normalerweise nicht sichtbar.
          Halte die Qualität hoch, um dem Original treu zu bleiben, oder senke sie
          (und ändere die Größe), wenn eine kleinere Datei wichtiger ist.
        </>
      ),
      text: "Die Umwandlung in JPEG, WebP oder AVIF erfolgt verlustbehaftet, sodass ein Teil der Details neu kodiert wird. Bei Qualität 75-85 ist der Unterschied normalerweise nicht sichtbar. Halte die Qualität hoch, um dem Original treu zu bleiben, oder senke sie und ändere die Größe, wenn eine kleinere Datei wichtiger ist.",
    },
    {
      q: "Warum ist das umgewandelte JPG manchmal größer als das HEIC?",
      a: (
        <>
          HEIC ist ein äußerst effizientes Format: Es speichert ein Foto oft in
          etwa der halben Größe eines gleichwertigen JPEG. Daher kann eine direkte
          HEIC&rarr;JPEG-Umwandlung gelegentlich eine größere Datei erzeugen. Um
          das Foto tatsächlich zu verkleinern, wähle WebP oder AVIF (die der
          Effizienz von HEIC entsprechen), senke den Qualitätsregler oder ändere
          die Bildgröße.
        </>
      ),
      text: "HEIC ist sehr effizient und speichert ein Foto oft in etwa der halben Größe eines gleichwertigen JPEG, daher kann eine direkte HEIC-zu-JPEG-Umwandlung eine größere Datei erzeugen. Um das Foto zu verkleinern, wähle WebP oder AVIF, senke den Qualitätsregler oder ändere die Bildgröße.",
    },
    {
      q: "Was ist der Unterschied zwischen HEIC und HEIF?",
      a: (
        <>
          HEIF (High Efficiency Image File Format) ist der Container; HEIC ist die
          gängige Variante, die Apple verwendet, bei der das Bild im Inneren mit
          HEVC (H.265) kodiert ist. Im Alltag sind die Namen austauschbar: Dieses
          Tool akzeptiert sowohl .heic- als auch .heif-Dateien.
        </>
      ),
      text: "HEIF (High Efficiency Image File Format) ist der Container und HEIC ist die gängige Apple-Variante, bei der das Bild mit HEVC (H.265) kodiert ist. Die Namen werden austauschbar verwendet; dieses Tool akzeptiert sowohl .heic- als auch .heif-Dateien.",
    },
    {
      q: "Kann ich mehrere HEIC-Fotos auf einmal umwandeln?",
      a: (
        <>
          Ja. Lege einen ganzen Stapel ab &mdash; zum Beispiel einen Ordner mit
          Fotos, die per AirDrop von deinem iPhone gesendet wurden &mdash; und sie
          werden eines nach dem anderen umgewandelt; danach kannst du sie einzeln
          oder alle zusammen als ZIP herunterladen.
        </>
      ),
      text: "Ja. Füge einen ganzen Stapel HEIC-Fotos hinzu und sie werden eines nach dem anderen umgewandelt, dann einzeln oder alle zusammen als ZIP heruntergeladen.",
    },
    {
      q: "Ist der HEIC-Konverter kostenlos?",
      a: (
        <>
          Völlig kostenlos: keine Anmeldung, keine Wasserzeichen und keine
          Begrenzung der Dateianzahl oder -größe über den Arbeitsspeicher deines
          Geräts hinaus. Die Seite wird durch dezente Werbung finanziert, und der
          Code ist Open Source, sodass du genau überprüfen kannst, was er macht.
        </>
      ),
      text: "Ja. Es ist völlig kostenlos, ohne Anmeldung, Wasserzeichen oder Dateibeschränkungen über den Arbeitsspeicher deines Geräts hinaus. Die Seite wird durch dezente Werbung finanziert und der Code ist Open Source.",
    },
  ],
  content: (
    <>
      <h2 id="why-convert">Warum HEIC-Dateien umwandeln?</h2>
      <p>
        Seit iOS 11 speichern iPhones und iPads Fotos standardmäßig als{" "}
        <strong>HEIC</strong>. Es ist ein hervorragendes Format, um Speicherplatz
        auf deinem Gerät zu sparen, hat aber einen großen Nachteil: die{" "}
        <strong>Kompatibilität</strong>. Viele Windows-PCs, Web-Apps,
        Content-Management-Systeme, Fotodrucker und ältere Telefone können eine
        .heic-Datei nach wie vor nicht öffnen, was zu dem allzu vertrauten Fehler
        &ldquo;nicht unterstütztes Format&rdquo; führt, wenn du ein Bild teilen
        oder hochladen willst.
      </p>
      <p>
        Die Umwandlung deiner HEIC-Fotos in ein breit unterstütztes Format wie{" "}
        <strong>JPG</strong>, <strong>WebP</strong> oder <strong>AVIF</strong>{" "}
        behebt das sofort: Das Bild öffnet sich überall, während du die Kontrolle
        über Qualität und Dateigröße behältst. Und da dieses Tool vollständig auf
        deinem Gerät läuft, werden deine persönlichen Fotos niemals auf den Server
        von irgendjemandem hochgeladen.
      </p>

      <h2 id="what-is-heic">Was ist HEIC (und HEIF)?</h2>
      <p>
        HEIC steht für <em>High Efficiency Image Container</em>. Es ist Apples
        Umsetzung des Standards <strong>HEIF</strong> (High Efficiency Image File
        Format), bei der das eigentliche Bild mit{" "}
        <strong>HEVC (H.265)</strong> komprimiert wird &mdash; demselben modernen
        Video-Codec, der für effiziente Videos verwendet wird. Diese
        fortschrittliche Kompression ist der Grund, warum ein HEIC-Foto bei
        gleicher Bildqualität typischerweise rund die <strong>halbe Größe</strong>{" "}
        eines gleichwertigen JPEG hat und warum es auch Extras wie Tiefenkarten,
        Live Photos und einen erweiterten Farbumfang speichern kann. Mehr darüber,
        wie Browser mit Bildformaten umgehen, kannst du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Referenz zu Bildformaten
        </a>
        {" "}nachlesen. Die Dekodierung hier wird von{" "}
        <a
          href="https://github.com/strukturag/libheif"
          target="_blank"
          rel="noopener noreferrer"
        >
          libheif
        </a>
        {" "}angetrieben, der Open-Source-Bibliothek für HEIF/HEIC, kompiliert zu
        WebAssembly.
      </p>

      <h2 id="compress-vs-convert">
        Komprimieren versus konvertieren: Was dich erwartet
      </h2>
      <p>
        Hier ein ehrlicher Punkt, den dir die meisten Konverter nicht verraten:
        Da HEIC bereits so effizient ist, macht eine einfache
        HEIC&nbsp;&rarr;&nbsp;JPEG-Umwandlung{" "}
        <strong>die Datei nicht immer kleiner</strong> &mdash; und kann sie
        gelegentlich sogar etwas größer machen. Das ist kein Fehler; es ist der
        Preis für den Wechsel zur älteren, kompatibleren Kompression von JPEG.
      </p>
      <p>
        Wenn dein Ziel wirklich kleinere Dateien sind, hast du drei Hebel, die du
        kombinieren kannst:
      </p>
      <ul>
        <li>
          <strong>Wähle WebP oder AVIF statt JPEG.</strong> Diese modernen
          Formate stehen der Effizienz von HEIC in nichts nach, sodass du die
          geringe Größe behältst <em>und</em> breite Kompatibilität gewinnst.
          AVIF basiert wie HEIC auf moderner Codec-Technologie und liefert in der
          Regel das kleinste Ergebnis.
        </li>
        <li>
          <strong>Senke den Qualitätsregler.</strong> Von 90 auf 70&ndash;75 zu
          gehen, verkleinert die Datei deutlich bei kaum sichtbarer Veränderung.
        </li>
        <li>
          <strong>Ändere die Bildgröße.</strong> Ein Telefonfoto mit
          4032&times;3024 ist weitaus größer als jeder Bildschirm benötigt. Es zu
          verkleinern, ist die größte einzelne Ersparnis fürs Teilen oder das Web.
        </li>
      </ul>

      <h2 id="choosing-format">JPEG, WebP oder AVIF: Was du wählen solltest</h2>
      <p>
        <strong>JPEG</strong> ist die sichere Standardwahl: Jedes Gerät, jede App
        und jede Website der Welt kann es öffnen, was es perfekt macht, um Fotos
        per E-Mail zu versenden, auf eine Seite hochzuladen, die HEIC ablehnt,
        oder an jemanden mit Windows zu schicken.{" "}
        <Link href="/de/compress-jpeg">Komprimiere JPEGs</Link> jederzeit weiter.
      </p>
      <p>
        <strong>WebP</strong> wird in modernen Browsern und Apps breit unterstützt
        und ist rund 25&ndash;35 % kleiner als JPEG &mdash; eine großartige Wahl
        fürs Web. <strong>AVIF</strong> ist das platzsparendste der drei und der
        engste Verwandte von HEIC, ideal, wenn eine geringe Größe am wichtigsten
        ist und dein Ziel es unterstützt. Unsicher? Wandle ein Beispiel mit
        unserem <Link href="/de/image-converter">Bildkonverter</Link> auf beide
        Arten um und vergleiche, oder lies{" "}
        <Link href="/de/blog/jpeg-vs-png-vs-webp-vs-avif">
          unseren Formatvergleich
        </Link>
        .
      </p>

      <h2 id="privacy">Privat durch Design und Open Source</h2>
      <p>
        Deine Aufnahmen sind privat. Sie auf eine beliebige Konvertierungsseite
        hochzuladen, bedeutet, Fremden Kopien deiner Fotos zu übergeben &mdash;
        einschließlich allem, was im Hintergrund zu sehen ist. FileShrinking
        verfolgt einen anderen Ansatz: Deine HEIC-Dateien werden{" "}
        <strong>lokal in deinem Browser</strong> dekodiert und neu kodiert und
        nirgendwohin übertragen. Du musst uns dabei auch nicht beim Wort nehmen:
        Das gesamte Projekt ist <Link href="/de/about">Open Source</Link>, sodass
        das Versprechen, nichts hochzuladen, von jedem im Code überprüft werden
        kann. Erfahre mehr darüber, wie das funktioniert, in{" "}
        <Link href="/de/blog/how-client-side-file-compression-works">
          unserer Erläuterung zur clientseitigen Kompression
        </Link>
        .
      </p>

      <h2 id="tips">Tipps für die besten Ergebnisse</h2>
      <ul>
        <li>
          <strong>Sendest du es an jemanden oder lädst es irgendwo hoch?</strong>{" "}
          Wähle JPG &mdash; es lässt sich garantiert öffnen.
        </li>
        <li>
          <strong>Optimierst du fürs Web oder zur Speicherung?</strong> Wähle AVIF
          oder WebP für die kleinsten Dateien bei gleicher Qualität.
        </li>
        <li>
          <strong>Ändere die Größe, bevor du konvertierst.</strong> Wenn das Foto
          auf einem Telefon oder in einem Dokument betrachtet wird, spart das
          Verkleinern weitaus mehr als die Qualität allein.
        </li>
        <li>
          <strong>Verarbeite einen ganzen AirDrop im Stapel.</strong> Lege alle
          Fotos auf einmal ab und lade sie zusammen als ZIP herunter.
        </li>
      </ul>
    </>
  ),
};
