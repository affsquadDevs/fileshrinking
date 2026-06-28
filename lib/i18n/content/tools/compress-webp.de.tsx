import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "WebP komprimieren — Gratis Kompressor & Konverter",
  metaDescription:
    "Komprimiere WebP oder konvertiere JPEG & PNG zu WebP im Browser. Mit oder ohne Verlust, privat und lokal: kein Upload, nichts verlässt dein Gerät.",
  heading: "WebP-Kompressor & -Konverter",
  intro: (
    <>
      Komprimiere vorhandene WebP-Bilder oder konvertiere JPEG, PNG und andere
      Formate zu WebP – alles in deinem Browser. Wähle eine Qualitätsstufe, lege
      deine Dateien ab und lade in Sekunden kleinere Bilder herunter. Es wird
      nie etwas hochgeladen.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst oder konvertierst du zu WebP",
    description:
      "Komprimiere WebP oder konvertiere Bilder lokal in deinem Browser in vier Schritten zu WebP.",
    steps: [
      {
        name: "Füge deine Bilder hinzu",
        text: "Ziehe WebP-, JPEG-, PNG-, AVIF- oder GIF-Dateien per Drag-and-drop auf den Ablagebereich, klicke zum Durchsuchen oder füge sie aus der Zwischenablage ein. Füge bei Bedarf mehrere auf einmal hinzu.",
      },
      {
        name: "Wähle eine Qualitätsstufe",
        text: "Verwende den Qualitätsregler oder eine Voreinstellung. Ein Wert um 80 ist für die meisten Fotos und Grafiken eine hervorragende Balance aus kleiner Größe und visueller Treue.",
      },
      {
        name: "Lass die Umwandlung auf deinem Gerät laufen",
        text: "Jedes Bild wird lokal mit WebAssembly zu WebP kodiert. Du siehst für jede Datei die ursprüngliche Größe, die neue WebP-Größe und den eingesparten Prozentsatz.",
      },
      {
        name: "Lade deine WebP-Dateien herunter",
        text: "Lade die Bilder einzeln herunter oder hole dir alles auf einmal als ZIP. Passe die Qualität an und führe den Vorgang jederzeit erneut aus, um zu vergleichen.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine WebP-Dateien auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Alles geschieht lokal in deinem Browser mit WebAssembly. Deine
          Bilder werden in den Speicher gelesen, konvertiert und dir
          zurückgegeben: Es gibt keinen Server, auf den hochgeladen wird, und du
          kannst nach dem Laden der Seite offline bleiben.
        </>
      ),
      text: "Nein. Alles geschieht lokal in deinem Browser mit WebAssembly. Deine Bilder werden in den Speicher gelesen, konvertiert und dir zurückgegeben. Es gibt keinen Server, auf den hochgeladen wird, und du kannst nach dem Laden der Seite offline bleiben.",
    },
    {
      q: "Ist der WebP-Kompressor wirklich kostenlos?",
      a: (
        <>
          Ja: Er ist vollständig kostenlos, ohne Registrierung, ohne
          Wasserzeichen und ohne Begrenzung der Anzahl oder Größe der Dateien
          über das hinaus, was der Speicher deines Geräts zulässt. Dezente
          Anzeigen halten die Seite am Laufen.
        </>
      ),
      text: "Ja. Er ist vollständig kostenlos, ohne Registrierung, ohne Wasserzeichen und ohne Begrenzung der Anzahl oder Größe der Dateien über das hinaus, was der Speicher deines Geräts zulässt. Dezente Anzeigen halten die Seite am Laufen.",
    },
    {
      q: "Wie wirkt sich die Konvertierung zu WebP auf die Bildqualität aus?",
      a: (
        <>
          Verlustbehaftetes WebP verwirft etwas Detail, um die Datei zu
          verkleinern, ähnlich wie JPEG, ist aber effizienter: Ein WebP ist bei
          gleicher sichtbarer Qualität typischerweise 25–35&nbsp;% kleiner als
          ein JPEG. Bei Qualität 75–85 ist das Ergebnis meist nicht vom Original
          zu unterscheiden. Wähle verlustfreies WebP, wenn du eine
          pixelgenaue Kopie brauchst.
        </>
      ),
      text: "Verlustbehaftetes WebP verwirft etwas Detail, um die Datei zu verkleinern, ähnlich wie JPEG, ist aber effizienter: Ein WebP ist bei gleicher sichtbarer Qualität typischerweise 25-35 % kleiner als ein JPEG. Bei Qualität 75-85 ist das Ergebnis meist nicht vom Original zu unterscheiden. Wähle verlustfreies WebP, wenn du eine pixelgenaue Kopie brauchst.",
    },
    {
      q: "Wie groß darf die Datei maximal sein, die ich komprimieren kann?",
      a: (
        <>
          Es gibt kein festes Limit: Es hängt vom verfügbaren Speicher deines
          Geräts ab. Typische Fotos von wenigen Megabyte und große Bilder mit
          20–50&nbsp;MP funktionieren problemlos, und Stapel werden Datei für
          Datei verarbeitet, um den Speicherbedarf gering zu halten.
        </>
      ),
      text: "Es gibt kein festes Limit; es hängt vom verfügbaren Speicher deines Geräts ab. Typische Fotos von wenigen Megabyte und große Bilder mit 20-50 MP funktionieren problemlos, und Stapel werden Datei für Datei verarbeitet, um den Speicherbedarf gering zu halten.",
    },
    {
      q: "Kann ich JPEG- und PNG-Dateien zu WebP konvertieren?",
      a: (
        <>
          Ja. Dieses Tool akzeptiert JPEG, PNG, WebP, AVIF und GIF und gibt WebP
          aus, sodass es sowohl als Rekompressor für vorhandene WebP-Dateien als
          auch als Konverter aus anderen Formaten dient. Die Transparenz von
          PNG-Dateien bleibt erhalten, weil WebP einen Alphakanal unterstützt.
        </>
      ),
      text: "Ja. Dieses Tool akzeptiert JPEG, PNG, WebP, AVIF und GIF und gibt WebP aus, sodass es sowohl als Rekompressor für vorhandene WebP-Dateien als auch als Konverter aus anderen Formaten dient. Die Transparenz von PNG-Dateien bleibt erhalten, weil WebP einen Alphakanal unterstützt.",
    },
    {
      q: "Sollte ich verlustbehaftetes oder verlustfreies WebP verwenden?",
      a: (
        <>
          Verwende verlustbehaftetes WebP für Fotografien und komplexe Motive,
          bei denen die kleinstmögliche Größe zählt und winziger Detailverlust
          unsichtbar ist. Verwende verlustfreies WebP für Logos, Symbole,
          Screenshots und Grafiken mit flächigen Farben oder scharfem Text, wo du
          eine exakte Reproduktion ohne Artefakte möchtest.
        </>
      ),
      text: "Verwende verlustbehaftetes WebP für Fotografien und komplexe Motive, bei denen die kleinstmögliche Größe zählt und winziger Detailverlust unsichtbar ist. Verwende verlustfreies WebP für Logos, Symbole, Screenshots und Grafiken mit flächigen Farben oder scharfem Text, wo du eine exakte Reproduktion ohne Artefakte möchtest.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum zu WebP komprimieren und konvertieren?</h2>
      <p>
        WebP ist ein modernes Bildformat, das speziell für das Web entwickelt
        wurde, und der Umstieg darauf ist eine der einfachsten Möglichkeiten,
        eine Website schneller zu machen, ohne dass Bilder schlechter aussehen.
        Eine WebP-Datei ist typischerweise{" "}
        <strong>25–35&nbsp;% kleiner als ein vergleichbares JPEG</strong> und
        weit kleiner als ein vergleichbares PNG, was schnellere Seitenladezeiten,
        niedrigere Bandbreitenkosten und ein besseres Erlebnis für Besucher mit
        langsamen oder begrenzten Mobilverbindungen bedeutet.
      </p>
      <p>
        Dieses Tool erfüllt eine doppelte Funktion. Wenn du bereits WebP-Bilder
        hast, kodiert es sie in der von dir gewählten Qualität neu, um zusätzliche
        Einsparungen herauszuholen. Wenn du JPEGs, PNGs, AVIFs oder GIFs hast,
        konvertiert es sie zu WebP, sodass du einen ganzen Ordner voller Assets
        auf einmal modernisieren kannst. Da alles mit einem
        WebAssembly-Encoder auf deinem Gerät läuft, werden deine Bilder nie
        hochgeladen – eine wirklich private Alternative zu serverbasierten
        Konvertern, die deine Fotos an eine entfernte Maschine schicken.
      </p>

      <h2 id="lossy-lossless">Verlustbehaftetes vs. verlustfreies WebP und die Qualität</h2>
      <p>
        WebP unterstützt zwei unterschiedliche Kompressionsmodi, und den
        richtigen zu wählen, ist wichtig. <strong>Verlustbehaftetes WebP</strong>{" "}
        funktioniert wie JPEG: Es verwirft dauerhaft das Detail, das das Auge am
        wenigsten wahrscheinlich bemerkt, was sehr kleine Dateien ergibt. Es ist
        die richtige Wahl für Fotografien und reichhaltige Motive mit fließenden
        Tonwerten. Der Qualitätsregler steuert, wie aggressiv das geschieht –
        höhere Werte bewahren mehr Detail bei größerer Dateigröße, niedrigere
        sparen mehr Platz, können aber sichtbare Artefakte einführen.
      </p>
      <p>
        <strong>Verlustfreies WebP</strong> hingegen gibt jeden Pixel exakt
        wieder, ganz ohne Artefakte. Es ist die bessere Wahl für Logos, Symbole,
        Screenshots und Grafiken oder Text mit flächigen Farben – dieselben
        Fälle, in denen du normalerweise zu{" "}
        <Link href="/de/compress-png">PNG</Link> greifen würdest, nur dass WebP
        meist eine kleinere Datei erzeugt. Für die meisten Fotografien ist eine
        verlustbehaftete Qualität von <strong>75–85</strong> der ideale Punkt:
        bei normalen Betrachtungsgrößen optisch identisch mit dem Original, aber
        nur ein Bruchteil der Größe. Bedenke, dass verlustbehaftete Kompression
        kumulativ ist, also konvertiere immer von deinem Original in höchster
        Qualität und nicht von einer bereits komprimierten Kopie.
      </p>

      <h2 id="format">Was ist WebP, und wann solltest du es verwenden?</h2>
      <p>
        WebP wurde von Google entwickelt und kombiniert eine verlustbehaftete
        Kompression, die vom Video-Codec VP8 abgeleitet ist, mit einem
        effizienten verlustfreien Modus. Über die reine Größe hinaus unterstützt
        es zwei Funktionen, mit denen ältere Formate unbeholfen umgehen:{" "}
        <strong>Transparenz</strong> (ein Alphakanal, wie bei PNG) und{" "}
        <strong>Animation</strong> (wie GIF, aber drastisch kleiner). Diese
        Kombination erlaubt es einem einzigen Format, JPEG, PNG und animiertes
        GIF in vielen Situationen zu ersetzen. Die technische Übersicht kannst du
        in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          der Bildformat-Referenz von MDN
        </a>{" "}
        nachlesen und eine praktische Anleitung zur Einführung auf{" "}
        <a
          href="https://web.dev/articles/serve-images-webp"
          target="_blank"
          rel="noopener noreferrer"
        >
          web.dev
        </a>
        .
      </p>
      <p>
        Die Browserunterstützung ist mittlerweile praktisch universell – jede
        aktuelle Version von Chrome, Firefox, Safari und Edge stellt WebP dar –,
        sodass es im gesamten modernen Web bedenkenlos eingesetzt werden kann.
        Wenn du sehr alte Browser unterstützen musst, behalte einen JPEG- oder
        PNG-Fallback bei. Und wenn du die absolut kleinsten Dateien möchtest und
        eine langsamere Kodierung in Kauf nehmen kannst,{" "}
        <Link href="/de/compress-avif">AVIF</Link> schlägt WebP oft; vergleiche
        beide mit deinen eigenen Bildern. Um den umgekehrten Weg zu gehen oder
        zwischen mehreren Formaten gleichzeitig zu wechseln, verwende unseren{" "}
        <Link href="/de/image-converter">Bildkonverter</Link>, und wenn deine
        Quellen Fotografien sind, interessiert dich vielleicht auch unser
        spezieller{" "}
        <Link href="/de/compress-jpeg">JPEG-Kompressor</Link>.
      </p>

      <h2 id="tips">Tipps für die besten WebP-Ergebnisse</h2>
      <ul>
        <li>
          <strong>Passe den Modus an den Inhalt an.</strong> Verwende
          verlustbehaftetes WebP für Fotos und verlustfreies WebP für Logos,
          Screenshots und flächige Grafiken mit scharfen Kanten.
        </li>
        <li>
          <strong>Verkleinere vor dem Kodieren.</strong> Wenn ein Bild mit
          1200&nbsp;px Breite angezeigt wird, gibt es keinen Grund, eine
          6000&nbsp;px große Datei auszuliefern. Die integrierte
          Verkleinerungsoption spart weit mehr als die Qualität allein.
        </li>
        <li>
          <strong>Bewahre Transparenz bewusst.</strong> Ein transparentes PNG zu
          WebP zu konvertieren behält den Alphakanal – das Verflachen zu JPEG
          würde das nicht. Wähle WebP, wenn Transparenz wichtig ist.
        </li>
        <li>
          <strong>Vergleiche mit AVIF.</strong> Lasse bei Hero-Bildern und großen
          Fotos dieselbe Datei noch einmal durch AVIF laufen und nimm das, was
          bei einer Qualität, mit der du zufrieden bist, die kleinere Größe
          liefert.
        </li>
        <li>
          <strong>Stapele nach Inhaltstyp.</strong> Fasse deine Fotos zusammen
          und deine Grafiken zusammen, damit jeder Satz in einem Durchgang eine
          einzige, ideale Qualitätseinstellung verwenden kann.
        </li>
      </ul>
    </>
  ),
};
