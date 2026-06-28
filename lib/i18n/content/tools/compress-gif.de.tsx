import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "GIF komprimieren — Gratis GIF-Optimierer",
  metaDescription:
    "Komprimiere ein GIF im Browser zu WebP oder PNG. 100 % privat, kein Upload: Deine Dateien bleiben auf dem Gerät. Animierte GIFs zu Video umwandeln.",
  heading: "GIF-Kompressor",
  intro: (
    <>
      Verwandle ein GIF direkt im Browser in ein deutlich kleineres WebP- oder
      PNG-Bild: Es wird nie etwas hochgeladen. Beachte, dass dabei nur das{" "}
      <strong>erste Einzelbild</strong> umgewandelt wird und die Animation nicht
      erhalten bleibt. Um ein <em>animiertes</em> GIF zu verkleinern und die
      Bewegung zu behalten, wandle es stattdessen in ein{" "}
      <Link href="/de/compress-mp4">winziges MP4-Video</Link> um.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du ein GIF",
    description:
      "Wandle ein GIF in vier Schritten lokal in deinem Browser in ein kleineres WebP oder PNG um.",
    steps: [
      {
        name: "Füge dein GIF hinzu",
        text: "Ziehe deine .gif-Datei per Drag-and-drop in den Ablagebereich, klicke zum Durchsuchen oder füge sie aus der Zwischenablage ein. Du kannst mehrere auf einmal hinzufügen.",
      },
      {
        name: "Wähle ein Ausgabeformat",
        text: "Wähle WebP für die kleinste, webfertige Datei oder PNG für eine verlustfreie, maximal kompatible Kopie des ersten Einzelbilds.",
      },
      {
        name: "Stelle die Qualität ein",
        text: "Ziehe bei WebP den Qualitätsregler: Etwa 75 ist ein hervorragender Kompromiss zwischen Größe und Detail. PNG ist immer verlustfrei.",
      },
      {
        name: "Lade deine Datei herunter",
        text: "Speichere Bilder einzeln oder alle auf einmal als ZIP. Führe es jederzeit mit anderen Einstellungen erneut aus, um Ergebnisse zu vergleichen.",
      },
    ],
  },
  faqs: [
    {
      q: "Bleibt mein GIF dabei animiert?",
      a: (
        <>
          Nein, und das ist das Wichtigste, das du wissen solltest. Dieses Tool
          im Browser wandelt das <strong>erste Einzelbild</strong> deines GIFs in
          ein einzelnes, unbewegtes WebP- oder PNG-Bild um. Es erhält die
          Animation nicht. Wenn sich dein GIF bewegt und du diese Bewegung bei
          einem Bruchteil der Größe behalten möchtest, wandle es stattdessen mit
          unserem <Link href="/de/compress-mp4">MP4-Kompressor</Link> oder dem{" "}
          <Link href="/de/video-compressor">Video-Kompressor</Link> in ein kurzes
          Video um.
        </>
      ),
      text: "Nein. Dieses Tool wandelt das erste Einzelbild deines GIFs in ein einzelnes, unbewegtes WebP- oder PNG-Bild um und erhält die Animation nicht. Um die Bewegung bei einem Bruchteil der Größe zu behalten, wandle ein animiertes GIF mit unserem MP4-Kompressor oder dem Video-Kompressor in ein kurzes Video um.",
    },
    {
      q: "Werden meine GIF-Dateien auf einen Server hochgeladen?",
      a: "Nein. Jede Datei wird lokal in deinem Browser verarbeitet. Deine GIFs verlassen nie dein Gerät, und es gibt keinen Server, auf den sie hochgeladen werden könnten: Du kannst dich nach dem Laden der Seite sogar vom Internet trennen, und es funktioniert weiterhin.",
      text: "Nein. Jede Datei wird lokal in deinem Browser verarbeitet. Deine GIFs verlassen nie dein Gerät, und es gibt keinen Server, auf den sie hochgeladen werden könnten. Du kannst dich nach dem Laden der Seite vom Internet trennen, und es funktioniert weiterhin.",
    },
    {
      q: "Ist der GIF-Kompressor wirklich kostenlos?",
      a: "Ja, er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung der Dateianzahl oder Dateigröße über das hinaus, was der Speicher deines Geräts bewältigen kann. Die Seite finanziert sich über unaufdringliche Werbung.",
      text: "Ja. Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung der Dateianzahl oder Dateigröße über das hinaus, was der Speicher deines Geräts bewältigen kann. Die Seite finanziert sich über unaufdringliche Werbung.",
    },
    {
      q: "Verringert die Umwandlung die Qualität?",
      a: (
        <>
          Bei einem statischen GIF verbessert die Umwandlung in WebP in der Regel
          die Qualität <em>und</em> verkleinert die Datei, denn WebP unterstützt
          Millionen von Farben, während GIF auf 256 begrenzt ist. Wähle{" "}
          <strong>PNG</strong> für ein verlustfreies Ergebnis oder nutze den
          Qualitätsregler mit <strong>WebP</strong>, um etwas Detail gegen eine
          deutlich kleinere Datei einzutauschen. Etwa 75 ist ein hervorragender
          Kompromiss.
        </>
      ),
      text: "Bei einem statischen GIF verbessert die Umwandlung in WebP in der Regel die Qualität und verkleinert die Datei, denn WebP unterstützt Millionen von Farben, während GIF auf 256 begrenzt ist. Wähle PNG für ein verlustfreies Ergebnis oder nutze den Qualitätsregler mit WebP, um etwas Detail gegen eine deutlich kleinere Datei einzutauschen. Etwa 75 ist ein guter Kompromiss.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich verarbeiten kann?",
      a: "Es gibt keine feste Grenze: Sie hängt vom verfügbaren Speicher deines Geräts ab. Handys und Laptops bewältigen typische GIFs von wenigen Megabyte mühelos, und auch größere Dateien funktionieren problemlos. Da alles im Speicher läuft, verbrauchen sehr große Dateien mehr RAM, schließe also andere speicherintensive Tabs, falls du an eine Grenze stößt.",
      text: "Es gibt keine feste Grenze; sie hängt vom verfügbaren Speicher deines Geräts ab. Typische GIFs von wenigen Megabyte und auch größere Dateien funktionieren problemlos. Da alles im Speicher läuft, verbrauchen sehr große Dateien mehr RAM, schließe also andere speicherintensive Tabs, falls du an eine Grenze stößt.",
    },
    {
      q: "Sollte ich WebP oder PNG als Ausgabe verwenden?",
      a: (
        <>
          Verwende <strong>WebP</strong> für die kleinste Datei: Es ist ideal
          fürs Web und unterstützt sowohl verlustbehaftete als auch verlustfreie
          Modi. Verwende <strong>PNG</strong>, wenn du maximale Kompatibilität mit
          älterer Software oder eine garantiert verlustfreie Kopie brauchst, zum
          Beispiel ein Logo oder Icon, das du aus einem GIF extrahiert hast.
        </>
      ),
      text: "Verwende WebP für die kleinste Datei; es ist ideal fürs Web und unterstützt sowohl verlustbehaftete als auch verlustfreie Modi. Verwende PNG, wenn du maximale Kompatibilität mit älterer Software oder eine garantiert verlustfreie Kopie brauchst, etwa ein Logo oder Icon, das aus einem GIF extrahiert wurde.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum ein GIF umwandeln oder komprimieren?</h2>
      <p>
        Das GIF-Format ist überall, aber es ist eine der ineffizientesten Arten,
        ein Bild zu speichern. Ein GIF ist auf eine Palette von nur{" "}
        <strong>256 Farben</strong> pro Einzelbild begrenzt und nutzt ein älteres,
        einfaches Kompressionsverfahren, sodass Fotos und detailreiche Grafiken,
        die als GIF gespeichert werden, Streifen zeigen und weit mehr wiegen, als
        sie sollten. Animierte GIFs sind noch schlimmer: Jedes Einzelbild wird als
        vollständiges Bild gespeichert, weshalb ein kurzer Clip auf viele Megabyte
        anwachsen kann, manchmal größer als ein hochauflösendes Video desselben
        Inhalts.
      </p>
      <p>
        Dieses Tool kümmert sich um den statischen Fall. Es liest das erste
        Einzelbild deines GIFs und kodiert es als modernes <strong>WebP</strong>{" "}
        oder <strong>PNG</strong> neu, was in der Regel eine drastisch kleinere
        Datei mit höherer Qualität ergibt. Da alles auf deinem Gerät passiert, ist
        es zudem privat: Dein GIF wird im Speicher dekodiert, mit einem
        WebAssembly-Encoder umgewandelt und dir direkt zurückgegeben. Es berührt
        nie ein Netzwerk.
      </p>
      <p>
        Wenn dein GIF animiert ist, lies weiter: Der wirklich sinnvolle Schritt
        besteht nicht darin, das GIF überhaupt zu komprimieren, sondern es in ein
        Video umzuwandeln, wo die Einsparung enorm ist.
      </p>

      <h2 id="animation">Animiertes GIF? Wandle es stattdessen in ein Video um</h2>
      <p>
        Seien wir transparent: Dieser Konverter im Browser gibt ein einzelnes,
        unbewegtes Einzelbild aus, kann die Animation also nicht erhalten. Das ist
        eine bewusste, ehrliche Einschränkung und kein Fehler. Für ein animiertes
        GIF lautet die richtige Antwort, es durch ein echtes Videoformat wie MP4
        (H.264) oder WebM zu ersetzen. Moderne Video-Codecs nutzen
        Bewegungskompensation: Sie speichern nur, was sich zwischen den
        Einzelbildern ändert, sodass dieselbe Animation in der Regel{" "}
        <strong>90 % kleiner oder mehr</strong> herauskommt und dabei schärfer
        aussieht.
      </p>
      <p>
        Das ist nicht nur unsere Meinung; es ist seit Langem bewährte
        Web-Performance-Empfehlung. Googles web.dev empfiehlt, dass du{" "}
        <a
          href="https://web.dev/articles/replace-gifs-with-videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          animierte GIFs durch Video ersetzt
        </a>{" "}
        genau aus diesem Grund. Schicke dazu hier dein animiertes GIF an unseren{" "}
        <Link href="/de/compress-mp4">MP4-Kompressor</Link> oder den
        umfassenderen <Link href="/de/video-compressor">Video-Kompressor</Link>,
        der auch MOV, WebM und mehr verarbeitet. Du erhältst eine winzige Datei,
        die flüssig abspielt und automatisch in einer Schleife läuft, genau wie es
        das ursprüngliche GIF tat.
      </p>

      <h2 id="format">Was ist ein GIF, und warum WebP oder PNG gewinnen</h2>
      <p>
        GIF (Graphics Interchange Format) geht auf das Jahr 1987 zurück und nutzt
        LZW-Kompression mit einer indizierten Palette, die auf 256 Farben begrenzt
        ist. Es unterstützt einfache Animation und eine Stufe binärer Transparenz,
        was es im frühen Web ikonisch machte, aber genau diese Beschränkungen sind
        der Grund, warum es mit allem jenseits kleiner, flacher Grafiken
        Schwierigkeiten hat. Den technischen Hintergrund kannst du in der{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bildformat-Referenz von MDN
        </a>{" "}
        nachlesen.
      </p>
      <p>
        Wandelt man das Einzelbild in <strong>WebP</strong> um, fällt die
        256-Farben-Grenze weg, volle Alpha-Transparenz kommt hinzu und sowohl
        verlustbehaftete als auch verlustfreie Modi werden unterstützt, sodass
        Dateien bei gleicher oder besserer Qualität meist deutlich kleiner sind.{" "}
        <strong>PNG</strong> ist die richtige Wahl, wenn du eine garantiert
        verlustfreie Kopie oder die breiteste Software-Kompatibilität brauchst,
        zum Beispiel beim Extrahieren eines Logos oder Stickers aus einem GIF.
        Wenn du später andere Ziele wie AVIF erkunden möchtest, kannst du mit
        unserem <Link href="/de/compress-webp">WebP-Tool</Link> und unserem{" "}
        <Link href="/de/image-converter">Bildkonverter</Link> Formate
        nebeneinander vergleichen.
      </p>

      <h2 id="tips">Tipps für die besten Ergebnisse</h2>
      <ul>
        <li>
          <strong>Animiertes GIF? Geh zu Video.</strong> Kämpfe nicht gegen das
          Format. Wandle es mit dem{" "}
          <Link href="/de/compress-mp4">MP4-Kompressor</Link> um, für die größte
          Einsparung und die flüssigste Wiedergabe.
        </li>
        <li>
          <strong>Wähle PNG für Grafiken, WebP für die Größe.</strong> Logos,
          Icons und Grafiken mit scharfen Kanten bleiben als PNG gestochen scharf;
          fürs Web ist WebP fast immer die kleinere Wahl.
        </li>
        <li>
          <strong>Verkleinere vor dem Umwandeln.</strong> Wenn das Bild mit 400 px
          Breite angezeigt wird, verkleinere es mit der integrierten
          Größenänderungsoption: Das spart weit mehr als Qualitätseinstellungen
          allein.
        </li>
        <li>
          <strong>Vergleiche das Ergebnis.</strong> Probiere WebP mit Qualität 75
          aus, führe es dann mit niedrigerem Wert erneut aus oder wechsle zu PNG
          und prüfe, ob du den Unterschied bei deiner Anzeigegröße erkennen kannst.
        </li>
      </ul>
    </>
  ),
};
