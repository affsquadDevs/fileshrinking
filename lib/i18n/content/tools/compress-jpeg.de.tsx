import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "JPEG komprimieren — JPG-Kompressor gratis",
  metaDescription:
    "Komprimiere JPG- und JPEG-Bilder im Browser mit MozJPEG. Einstellbare Qualität, Stapelverarbeitung, keine Uploads: Deine Fotos verlassen dein Gerät nie.",
  heading: "JPEG-Kompressor",
  intro: (
    <>
      Komprimiere JPG- und JPEG-Bilder direkt in deinem Browser mit MozJPEG, dem
      gleichen Encoder, dem Fotografen und Webentwickler vertrauen. Wähle eine
      Qualitätsstufe, lege deine Fotos ab und lade in Sekunden kleinere Dateien
      herunter: Es wird nie etwas hochgeladen.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du ein JPEG",
    description:
      "Komprimiere JPG-/JPEG-Bilder lokal in deinem Browser in vier Schritten.",
    steps: [
      {
        name: "Bilder hinzufügen",
        text: "Ziehe deine JPG-Dateien per Drag & Drop in den Ablagebereich, klicke zum Durchsuchen oder füge sie aus der Zwischenablage ein. Du kannst mehrere auf einmal hinzufügen.",
      },
      {
        name: "Qualitätsstufe wählen",
        text: "Nutze den Qualitätsregler oder eine Voreinstellung. Etwa 75 ist für die meisten Fotos ein hervorragendes Gleichgewicht zwischen Größe und Bildqualität.",
      },
      {
        name: "Auf deinem Gerät komprimieren lassen",
        text: "Jedes Bild wird lokal mit MozJPEG komprimiert. Du siehst für jede Datei die ursprüngliche Größe, die neue Größe und die prozentuale Einsparung.",
      },
      {
        name: "Dateien herunterladen",
        text: "Lade die Bilder einzeln herunter oder alle auf einmal als ZIP. Passe die Qualität an und komprimiere jederzeit erneut.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine JPEG-Dateien auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Jedes Bild wird lokal in deinem Browser mit WebAssembly
          komprimiert. Deine Dateien verlassen dein Gerät nie und es gibt keinen
          Server, auf den sie hochgeladen würden: Du kannst sogar die
          Internetverbindung trennen, nachdem die Seite geladen ist, und es
          funktioniert weiterhin.
        </>
      ),
      text: "Nein. Jedes Bild wird lokal in deinem Browser mit WebAssembly komprimiert. Deine Dateien verlassen dein Gerät nie und es gibt keinen Server, auf den sie hochgeladen würden. Du kannst die Internetverbindung trennen, nachdem die Seite geladen ist, und es funktioniert weiterhin.",
    },
    {
      q: "Ist der JPEG-Kompressor wirklich kostenlos?",
      a: (
        <>
          Ja: Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und
          ohne Beschränkung der Dateianzahl oder Dateigröße über das hinaus, was
          der Speicher deines Geräts bewältigen kann. Die Website finanziert
          sich über dezente Werbung.
        </>
      ),
      text: "Ja. Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Beschränkung der Dateianzahl oder Dateigröße über das hinaus, was der Speicher deines Geräts bewältigen kann. Die Website finanziert sich über dezente Werbung.",
    },
    {
      q: "Verringert das Komprimieren die Qualität meiner Fotos?",
      a: (
        <>
          Die JPEG-Kompression ist verlustbehaftet, daher gehen einige Daten
          verloren. Bei einer Qualität von 70-80 ist der Unterschied meist
          unsichtbar, während die Datei deutlich kleiner ist. Senke den
          Qualitätsregler für kleinere Dateien oder erhöhe ihn, um näher am
          Original zu bleiben.
        </>
      ),
      text: "JPEG ist ein verlustbehaftetes Format, daher gehen einige Daten verloren. Bei einer Qualität von 70-80 ist der Unterschied meist unsichtbar, während die Datei deutlich kleiner ist. Senke den Qualitätsregler für kleinere Dateien oder erhöhe ihn, um näher am Original zu bleiben.",
    },
    {
      q: "Wie groß darf eine Datei höchstens sein, die ich komprimieren kann?",
      a: (
        <>
          Es gibt keine feste Grenze: Sie hängt vom verfügbaren Speicher deines
          Geräts ab. Smartphones und Laptops bewältigen problemlos übliche Fotos
          (einige Megabyte) und sogar große Bilder mit 20-50 MP. Sehr große
          Stapel werden Datei für Datei verarbeitet, um den Speicherverbrauch
          gering zu halten.
        </>
      ),
      text: "Es gibt keine feste Grenze; sie hängt vom verfügbaren Speicher deines Geräts ab. Übliche Fotos mit einigen Megabyte und sogar große Bilder mit 20-50 MP funktionieren einwandfrei. Große Stapel werden Datei für Datei verarbeitet, um den Speicherverbrauch gering zu halten.",
    },
    {
      q: "Kann ich viele JPEGs auf einmal komprimieren?",
      a: (
        <>
          Ja. Lege so viele Dateien ab, wie du möchtest; sie werden in eine
          Warteschlange gestellt und nacheinander komprimiert. Anschließend
          kannst du sie einzeln oder alle zusammen als ZIP herunterladen.
        </>
      ),
      text: "Ja. Füge so viele Dateien hinzu, wie du möchtest; sie werden in eine Warteschlange gestellt und nacheinander komprimiert und anschließend einzeln oder zusammen als ZIP heruntergeladen.",
    },
    {
      q: "Bleibt mein Original erhalten, wenn das Komprimieren die Datei größer machen würde?",
      a: (
        <>
          Ja. Wenn ein neu codiertes JPEG größer als dein Original wäre (häufig
          bei bereits optimierten Bildern), behält das Tool deine
          Originaldatei und weist dich darauf hin, dass sie bereits gut
          optimiert war.
        </>
      ),
      text: "Ja. Wenn ein neu codiertes JPEG größer als das Original wäre, behält das Tool deine Originaldatei und weist darauf hin, dass sie bereits gut optimiert war.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum sollte man JPEG-Bilder komprimieren?</h2>
      <p>
        JPEG (auch als JPG geschrieben) ist das gängigste Format für Fotografien
        im Web, doch Bilder von Kameras und Smartphones sind oft viel größer als
        nötig, häufig mehrere Megabyte pro Bild. Große Bilder verlangsamen
        Websites, blähen E-Mail-Anhänge auf, belegen Cloud-Speicher und
        verschwenden mobile Daten. Sie zu komprimieren erhält die Bildqualität,
        die dir wichtig ist, und verringert dabei die Dateigröße drastisch, oft
        um 60-80 %.
      </p>
      <p>
        Da dieses Tool vollständig auf deinem Gerät läuft, ist es auch die
        privateste Art, dies zu tun. Herkömmliche Online-Kompressoren laden
        deine Fotos auf einen entfernten Server hoch, verarbeiten sie dort und
        senden sie zurück. Hier werden deine Bilder in den Speicher eingelesen,
        mit einer WebAssembly-Version von MozJPEG komprimiert und direkt an dich
        zurückgegeben: Sie berühren nie ein Netzwerk.
      </p>

      <h2 id="lossy">Verlustbehaftete Kompression und Qualität: Was dich erwartet</h2>
      <p>
        JPEG ist ein <strong>verlustbehaftetes</strong> Format: Um Dateien
        kleiner zu machen, verwirft es dauerhaft Bilddetails, die das
        menschliche Auge am wenigsten wahrnimmt. Der Qualitätsregler steuert,
        wie aggressiv das geschieht. Höhere Werte bewahren mehr Details und
        erzeugen größere Dateien; niedrigere Werte sparen mehr Platz, können
        aber sichtbare &ldquo;Artefakte&rdquo; einführen, etwa Blockbildung oder
        Halos um scharfe Kanten.
      </p>
      <p>
        Für die meisten Fotografien ist eine Qualität von{" "}
        <strong>70-80</strong> der ideale Punkt: Das Ergebnis ist bei normalen
        Anzeigegrößen optisch nicht vom Original zu unterscheiden und belegt
        dennoch nur einen Bruchteil der Größe. Gehe auf 50-60 herunter, wenn
        eine geringe Größe wichtiger ist als perfekte Wiedergabetreue (zum
        Beispiel bei Miniaturansichten), und bleibe bei 85-90 für Bilder mit
        feinen Verläufen oder Text, wo Artefakte deutlicher sichtbar sind. Die
        Kompression ist <strong>kumulativ</strong>, komprimiere daher immer
        wieder aus deinem Original in höchster Qualität und nicht aus einer
        bereits komprimierten Kopie.
      </p>

      <h2 id="format">Was ist ein JPEG und wann solltest du es verwenden?</h2>
      <p>
        JPEG wurde von der Joint Photographic Experts Group standardisiert und
        nutzt die diskrete Kosinustransformation, um Halbtonbilder effizient zu
        komprimieren. Es glänzt bei Fotografien und realistischen Bildern mit
        weichen Farbübergängen, weshalb nahezu jede Kamera standardmäßig JPEGs
        speichert. Die technischen Details kannst du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          der Bildformat-Referenz von MDN
        </a>
        {" "}nachlesen.
      </p>
      <p>
        JPEG ist jedoch nicht immer die richtige Wahl. Es unterstützt keine
        Transparenz und verarbeitet flache Grafiken, Logos, Screenshots und Text
        schlecht: Diese werden als{" "}
        <Link href="/de/compress-png">PNG</Link> besser komprimiert und sehen
        schärfer aus. Und für die kleinstmöglichen Fotos mit Unterstützung
        moderner Browser gewinnen die neueren Formate: Eine{" "}
        <Link href="/de/compress-webp">WebP</Link>-Datei ist in der Regel 25-35 %
        kleiner als ein gleichwertiges JPEG, und{" "}
        <Link href="/de/compress-avif">AVIF</Link> kann noch kleiner sein. Wenn
        du für das Web optimierst, probiere die Umwandlung mit unserem{" "}
        <Link href="/de/image-converter">Bildkonverter</Link> aus und
        vergleiche.
      </p>

      <h2 id="tips">Tipps für die besten Ergebnisse</h2>
      <ul>
        <li>
          <strong>Beginne mit dem Original.</strong> Ein JPEG wiederholt neu zu
          speichern verschlechtert es. Behalte eine Masterkopie und komprimiere
          aus dieser.
        </li>
        <li>
          <strong>Ändere die Größe vor dem Komprimieren.</strong> Wenn ein Bild
          mit 1200 px Breite angezeigt wird, ist es nicht nötig, eine Datei mit
          6000 px auszuliefern. Nutze die integrierte Größenänderungsoption für
          eine viel größere Einsparung als die Qualität allein.
        </li>
        <li>
          <strong>Vergleiche mit Voreinstellungen.</strong> Probiere zuerst
          &ldquo;Ausgewogen&rdquo;, komprimiere dann erneut mit
          &ldquo;Am kleinsten&rdquo; und prüfe, ob du bei deiner Anzeigegröße
          den Unterschied erkennst.
        </li>
        <li>
          <strong>Bündle ähnliche Bilder im Stapel.</strong> Fotos derselben
          Kamera sehen meist mit derselben Qualitätseinstellung großartig aus,
          sodass du sie in einem Durchgang verarbeiten kannst.
        </li>
      </ul>
    </>
  ),
};
