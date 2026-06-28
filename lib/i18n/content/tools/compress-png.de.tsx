import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "PNG komprimieren — Kostenloser PNG-Optimierer",
  metaDescription:
    "Optimiere PNG-Bilder im Browser mit OxiPNG: verlustfrei, privat, ohne Upload. Oder konvertiere zu WebP für deutlich kleinere Dateien.",
  heading: "PNG-Komprimierer",
  intro: (
    <>
      Optimiere PNG-Bilder direkt in deinem Browser mit OxiPNG, einem
      verlustfreien Optimierer, der Dateien verkleinert, ohne auch nur einen
      einzigen Pixel anzutasten. Behalte Transparenz und scharfe Kanten
      unversehrt, oder konvertiere zu WebP für deutlich größere Einsparungen.
      Es wird nie etwas hochgeladen.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du ein PNG",
    description:
      "Optimiere PNG-Bilder verlustfrei in deinem Browser in vier Schritten.",
    steps: [
      {
        name: "Füge deine PNG-Bilder hinzu",
        text: "Ziehe deine PNG-Dateien per Drag-and-drop in den Ablagebereich, klicke zum Durchsuchen oder füge sie aus der Zwischenablage ein. Du kannst mehrere auf einmal hinzufügen.",
      },
      {
        name: "Wähle eine Optimierungsstufe",
        text: "Wähle Schnell, Ausgewogen oder Maximal. Höhere Stufen suchen gründlicher nach einer kleineren verlustfreien Kodierung, dauern also etwas länger, holen aber noch ein wenig mehr heraus.",
      },
      {
        name: "Optimiere auf deinem Gerät",
        text: "Jedes PNG wird lokal mit OxiPNG neu geschrieben. Du siehst die ursprüngliche Größe, die neue Größe und den gesparten Prozentsatz für jede Datei – bei vollständig erhaltenen Pixeln.",
      },
      {
        name: "Herunterladen — oder für mehr konvertieren",
        text: "Lade Dateien einzeln oder alle auf einmal als ZIP herunter. Wenn ein PNG-Foto immer noch groß ist, stelle die Ausgabe auf WebP um, für ein viel kleineres, webtaugliches Ergebnis.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine PNG-Dateien auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Jedes PNG wird lokal in deinem Browser mit WebAssembly
          optimiert. Deine Bilder verlassen nie dein Gerät, und es gibt keinen
          Server, auf den sie hochgeladen werden könnten – du kannst dich nach
          dem Laden der Seite sogar vom Internet trennen, und es funktioniert
          weiterhin.
        </>
      ),
      text: "Nein. Jedes PNG wird lokal in deinem Browser mit WebAssembly optimiert. Deine Bilder verlassen nie dein Gerät, und es gibt keinen Server, auf den sie hochgeladen werden könnten. Du kannst dich nach dem Laden der Seite vom Internet trennen, und es funktioniert weiterhin.",
    },
    {
      q: "Ist der PNG-Komprimierer wirklich kostenlos?",
      a: (
        <>
          Ja – er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und
          ohne Begrenzung der Dateianzahl oder Dateigröße, abgesehen von dem,
          was der Arbeitsspeicher deines Geräts bewältigen kann. Die Seite
          finanziert sich über dezente Werbung.
        </>
      ),
      text: "Ja. Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung der Dateianzahl oder Dateigröße, abgesehen von dem, was der Arbeitsspeicher deines Geräts bewältigen kann. Die Seite finanziert sich über dezente Werbung.",
    },
    {
      q: "Verringert das Optimieren meines PNG die Qualität?",
      a: (
        <>
          Nein – die PNG-Optimierung mit OxiPNG ist{" "}
          <strong>völlig verlustfrei</strong>. Jeder Pixel bleibt exakt
          erhalten, einschließlich der Transparenz; OxiPNG schreibt die Datei
          lediglich effizienter neu. Der Haken ist, dass die verlustfreien
          Einsparungen bescheiden ausfallen, meist 5–30 %. Wenn du stattdessen
          zu WebP konvertierst, ist dieser Schritt verlustbehaftet und kann das
          Bild leicht verändern, reduziert aber die Größe weitaus stärker.
        </>
      ),
      text: "Nein. Die PNG-Optimierung mit OxiPNG ist völlig verlustfrei. Jeder Pixel bleibt exakt erhalten, einschließlich der Transparenz; OxiPNG schreibt die Datei lediglich effizienter neu. Die verlustfreien Einsparungen fallen bescheiden aus, meist 5-30 %. Die Konvertierung zu WebP ist verlustbehaftet, reduziert die Größe aber weitaus stärker.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich optimieren kann?",
      a: (
        <>
          Es gibt keine feste Grenze – sie hängt vom verfügbaren
          Arbeitsspeicher deines Geräts ab. Smartphones und Laptops bewältigen
          typische Screenshots und Logos sowie selbst große hochauflösende PNGs
          problemlos. Große Stapel werden Datei für Datei verarbeitet, um den
          Speicherverbrauch gering zu halten.
        </>
      ),
      text: "Es gibt keine feste Grenze; sie hängt vom verfügbaren Arbeitsspeicher deines Geräts ab. Typische Screenshots, Logos und selbst große hochauflösende PNGs funktionieren problemlos. Große Stapel werden Datei für Datei verarbeitet, um den Speicherverbrauch gering zu halten.",
    },
    {
      q: "Warum ist mein PNG-Foto nach dem Optimieren immer noch riesig?",
      a: (
        <>
          PNG ist verlustfrei, kann also fotografische Details nicht verwerfen,
          wie es JPEG oder WebP können – ein Vollfarbfoto benötigt als PNG
          einfach sehr viele Daten. Die Optimierung beschneidet den Überhang,
          aber die wahre Lösung für Fotos ist die Konvertierung in ein
          verlustbehaftetes Format. Probiere unsere{" "}
          <Link href="/de/compress-webp">WebP</Link>- oder{" "}
          <Link href="/de/compress-avif">AVIF</Link>-Tools, damit Fotodateien
          nur noch einen Bruchteil der Größe einnehmen.
        </>
      ),
      text: "PNG ist verlustfrei, kann also fotografische Details nicht verwerfen, wie es JPEG oder WebP können; ein Vollfarbfoto benötigt als PNG sehr viele Daten. Die Optimierung beschneidet den Überhang, aber die wahre Lösung für Fotos ist die Konvertierung in ein verlustbehaftetes Format wie WebP oder AVIF.",
    },
    {
      q: "Bleibt beim Optimieren die Transparenz meines PNG erhalten?",
      a: (
        <>
          Ja. Der Alphakanal (Transparenz) bleibt exakt erhalten, sodass Logos,
          Icons und UI-Elemente mit transparentem Hintergrund pixelgenau
          herauskommen – nur eben in einer kleineren Datei. Die Konvertierung zu
          WebP behält die Transparenz ebenfalls bei; die Konvertierung zu JPEG
          nicht, da JPEG keinen Alphakanal hat.
        </>
      ),
      text: "Ja. Der Alphakanal (Transparenz) bleibt exakt erhalten, sodass Logos, Icons und UI-Elemente mit transparentem Hintergrund pixelgenau in einer kleineren Datei herauskommen. WebP behält die Transparenz ebenfalls bei; JPEG nicht, da es keinen Alphakanal hat.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum ein PNG komprimieren oder konvertieren?</h2>
      <p>
        PNG ist überall – es ist der Standard für Screenshots, die erste Wahl
        für Logos und Icons und der Standard für jede Grafik, die einen
        transparenten Hintergrund benötigt. Der Haken ist, dass PNG-Dateien oft
        größer sind als nötig. Bildbearbeitungsprogramme und Screenshot-Tools
        speichern großzügige, unoptimierte Dateien mit überflüssigen Metadaten,
        suboptimalen Komprimierungseinstellungen und Farbdaten, die sie nicht
        brauchen. Das Optimieren entfernt diesen Ballast, damit Seiten
        schneller laden, Anhänge zügiger versendet werden und der Speicherplatz
        weiter reicht.
      </p>
      <p>
        Da dieses Tool vollständig auf deinem Gerät läuft, ist es zugleich der
        private Weg, dies zu tun. Herkömmliche Online-Optimierer laden deine
        Bilder auf einen entfernten Server hoch, verarbeiten sie dort und
        schicken sie zurück. Hier wird jedes PNG in den Speicher eingelesen, mit
        einer WebAssembly-Version von <strong>OxiPNG</strong> neu geschrieben
        und dir direkt zurückgegeben – deine Dateien berühren nie ein Netzwerk,
        was wichtig ist, wenn ein Screenshot oder ein Design-Element sensible
        Informationen enthält.
      </p>

      <h2 id="lossless">
        Verlustfreie Optimierung vs. verlustbehaftete Konvertierung
      </h2>
      <p>
        PNG ist ein <strong>verlustfreies</strong> Format: Es gibt jeden Pixel
        exakt wieder, ohne Komprimierungsartefakte und mit voller Unterstützung
        für Transparenz. Diese Originaltreue ist der eigentliche Sinn von PNG,
        begrenzt aber zugleich, wie klein ein PNG werden kann. OxiPNG hält dein
        Bild <strong>pixelgenau</strong> – es findet nur eine effizientere Art,
        dieselben Daten zu speichern, indem es die Farbpalette wo möglich
        reduziert, bessere Filter wählt und unnötige Blöcke entfernt. Seien wir
        ehrlich, was die Rechnung angeht: Die verlustfreien Einsparungen sind{" "}
        <strong>bescheiden, typischerweise 5–30 %</strong>, und ein bereits
        optimiertes PNG schrumpft womöglich kaum noch.
      </p>
      <p>
        Wenn du eine drastische Reduzierung brauchst, ist die Antwort nicht ein
        besseres PNG, sondern ein anderes Format. Die Konvertierung eines PNG zu{" "}
        <Link href="/de/compress-webp">WebP</Link> oder{" "}
        <Link href="/de/compress-avif">AVIF</Link> wendet eine verlustbehaftete
        Komprimierung an, die die Dateigröße um 60–90 % verringern kann und
        dabei weiterhin Transparenz unterstützt. Der Haken ist, dass die
        verlustbehaftete Konvertierung subtile Veränderungen einbringen kann,
        weshalb sie sich ideal für Fotografien und komplexe Bilder eignet,
        während verlustfreies PNG die beste Wahl für Grafiken mit scharfen
        Kanten bleibt, bei denen jeder Pixel zählt. Dieses Tool lässt dir die
        Wahl: PNG für die Originaltreue behalten oder die Ausgabe für die Größe
        auf WebP umstellen.
      </p>

      <h2 id="format">Was ist ein PNG, und wann solltest du es verwenden?</h2>
      <p>
        PNG (Portable Network Graphics) wurde als patentfreier, verlustfreier
        Ersatz für GIF entwickelt. Es verwendet DEFLATE-Komprimierung zusammen
        mit zeilenweisen Vorhersagefiltern und unterstützt einen vollständigen
        8-Bit-Alphakanal für weiche Transparenz. Das macht es hervorragend
        geeignet für{" "}
        <strong>
          Logos, Icons, Screenshots, Strichzeichnungen, Diagramme und jedes
          Bild mit scharfen Kanten, flächigen Farben oder Text
        </strong>{" "}
        – Inhalte, die verlustbehaftete Formate verschwimmen lassen oder mit
        Halos umgeben. Die technischen Details kannst du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Referenz zu Bildformaten
        </a>{" "}
        nachlesen.
      </p>
      <p>
        Für Fotografien ist PNG die <strong>falsche</strong> Wahl. Da es nie
        Details verwirft, wird ein Foto mit kontinuierlichen Farbverläufen zu
        einem riesigen PNG – oft um ein Vielfaches größer als dasselbe Bild als{" "}
        <Link href="/de/compress-jpeg">JPEG</Link> oder WebP. Wenn du Fotos als
        PNG gespeichert hast, ist diese eine Gewohnheit vermutlich deine größte
        Quelle für unnötigen Ballast. Greife zu PNG, wenn du scharfe Kanten oder
        Transparenz brauchst, und greife zu einem verlustbehafteten Format, wenn
        du ein Foto hast. Nicht sicher, was du verwenden sollst? Unser{" "}
        <Link href="/de/image-converter">Bildkonverter</Link> lässt dich beides
        ausprobieren und die Ergebnisse nebeneinander vergleichen.
      </p>

      <h2 id="tips">Tipps für die besten Ergebnisse</h2>
      <ul>
        <li>
          <strong>Passe die Optimierungsstufe an die Aufgabe an.</strong>{" "}
          Verwende &bdquo;Schnell&ldquo; für einen zügigen Durchlauf über viele
          Dateien und &bdquo;Maximal&ldquo;, wenn es sich lohnt, jedes letzte
          Byte aus einem einzelnen Aushängebild herauszuholen, auch wenn das
          mehr Verarbeitungszeit kostet.
        </li>
        <li>
          <strong>Skaliere vor dem Optimieren.</strong> Ein 4K-Screenshot, der
          800 px breit angezeigt wird, besteht größtenteils aus verschwendeten
          Pixeln. Nutze die integrierte Skalierungsoption für eine weitaus
          größere Einsparung, als verlustfreie Optimierung allein je liefern
          kann.
        </li>
        <li>
          <strong>Konvertiere Fotos, statt gegen sie anzukämpfen.</strong> Wenn
          ein &bdquo;PNG&ldquo; in Wirklichkeit ein Foto ist, stelle die Ausgabe
          auf <Link href="/de/compress-webp">WebP</Link> um, anstatt zu
          erwarten, dass verlustfreie Optimierung Wunder vollbringt.
        </li>
        <li>
          <strong>Behalte PNG für Transparenz.</strong> Wenn du einen
          transparenten Hintergrund und breite Kompatibilität brauchst, ist
          verlustfreies PNG die sichere Wahl – und OxiPNG hält diesen Alphakanal
          pixelgenau.
        </li>
      </ul>
    </>
  ),
};
