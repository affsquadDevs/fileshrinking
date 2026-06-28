import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-client-side-file-compression-works",
  title:
    "Wie clientseitige Dateikomprimierung funktioniert (und warum sie privater ist)",
  description:
    "Wie FileShrinking Bilder, Videos und PDFs vollständig in deinem Browser mit WebAssembly und Web Workers komprimiert — und warum deine Dateien dabei privat bleiben.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Datenschutz", "Wie es funktioniert"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Wenn du auf den meisten Websites ein Foto komprimierst oder ein PDF
        verkleinerst, macht deine Datei eine Rundreise: Sie wird auf einen Server
        hochgeladen, irgendwo in einem Rechenzentrum verarbeitet, und eine
        kleinere Version wird an dich zurückgeschickt. Es funktioniert, aber es
        bedeutet, dass eine Kopie deiner privaten Datei kurzzeitig auf einem
        Computer liegt, den du nicht kontrollierst. FileShrinking verfolgt einen
        anderen Ansatz — jedes Byte der Komprimierung geschieht{" "}
        <strong>direkt in deinem eigenen Browser-Tab</strong>, und deine Dateien
        verlassen niemals dein Gerät. Dieser Artikel erklärt genau, wie das
        möglich ist, welche Browser-Technologien es ermöglichen und welche
        ehrlichen Kompromisse damit verbunden sind.
      </p>

      <h2 id="two-models">Zwei Wege, eine Datei im Web zu komprimieren</h2>
      <p>
        Das traditionelle Modell ist <strong>serverseitig</strong>. Dein
        Browser sendet die Originaldatei über das Netzwerk; ein Backend, das ein
        Werkzeug wie ImageMagick oder FFmpeg ausführt, erledigt die Schwerarbeit;
        das Ergebnis wird zurückgestreamt. Der Rechner des Nutzers gerät kaum ins
        Schwitzen, und der Server kann enorm leistungsfähig sein. Der Preis sind
        Datenschutz und Vertrauen: Deine Daten werden übertragen, sie liegen
        (wenn auch nur vorübergehend) auf der Festplatte einer anderen Person,
        und du musst ihr Wort darauf nehmen, was danach mit ihnen geschieht.
      </p>
      <p>
        Das neuere Modell ist <strong>clientseitig</strong>. Dieselben
        Komprimierungsalgorithmen laufen direkt auf deinem Gerät, im Browser,
        ganz ohne Upload-Schritt. Jahrelang war das unpraktikabel — JavaScript
        allein war zu langsam, um einen ernsthaften Bild- oder Video-Codec mit
        brauchbarer Geschwindigkeit auszuführen. Das änderte sich, als Browser
        die Fähigkeit erhielten, kompilierten, nahezu nativen Code im Web
        auszuführen. Heute kann ein modernes Notebook oder Smartphone die Arbeit
        erledigen, die früher einen Server erforderte, und FileShrinking ist
        vollständig auf diesem Modell aufgebaut.
      </p>

      <h2 id="webassembly">
        WebAssembly: echte Codecs, die im Browser laufen
      </h2>
      <p>
        Die Technologie, die clientseitige Komprimierung praktikabel macht, ist{" "}
        <strong>WebAssembly</strong> (oft als Wasm abgekürzt). Es ist ein
        kompaktes, hardwarenahes binäres Befehlsformat, das Browser mit
        Geschwindigkeiten nahe an nativem Code ausführen können. Entscheidend ist,
        dass es Entwicklern ermöglicht, Codecs, die in C, C++ oder Rust
        geschrieben — und über Jahrzehnte verfeinert — wurden, für die Ausführung
        im Web zu kompilieren, ohne sie in JavaScript neu zu schreiben.
      </p>
      <p>
        So landen dieselben kampferprobten Komprimierungs-Engines, die du in
        professioneller Desktop-Software finden würdest, am Ende in einem
        Browser-Tab:
      </p>
      <ul>
        <li>
          <strong>MozJPEG</strong> für hochwertige JPEG-Kodierung, die mehr aus
          jedem Kilobyte herausholt.
        </li>
        <li>
          <strong>OxiPNG</strong> für verlustfreie PNG-Optimierung.
        </li>
        <li>
          <strong>libwebp</strong> und AVIF-Encoder für die modernen Formate{" "}
          <Link href="/de/compress-webp">WebP</Link> und{" "}
          <Link href="/de/compress-avif">AVIF</Link>.
        </li>
        <li>
          <strong>FFmpeg</strong>, zu WebAssembly kompiliert, zum Transkodieren
          und Verkleinern von Videos.
        </li>
      </ul>
      <p>
        Für eine tiefergehende technische Referenz ist die{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/WebAssembly"
          target="_blank"
          rel="noopener noreferrer"
        >
          WebAssembly-Dokumentation von MDN
        </a>{" "}
        die maßgebliche Quelle dafür, wie das Format funktioniert und warum es
        schnell ist.
      </p>

      <h2 id="web-workers">
        Web Workers: die Seite reaktionsfähig halten
      </h2>
      <p>
        Komprimierung ist rechenintensiv. Würdest du eine Video-Transkodierung
        im Haupt-Thread des Browsers ausführen, würde die gesamte Seite
        einfrieren — Schaltflächen würden nicht mehr reagieren, das Scrollen
        würde ruckeln und Fortschrittsbalken würden hängen bleiben. Um das zu
        vermeiden, führt FileShrinking die Arbeit in einem separaten Thread mit{" "}
        <strong>Web Workers</strong> aus.
      </p>
      <p>
        Ein Web Worker ist ein JavaScript-Kontext im Hintergrund, der parallel
        zur Benutzeroberfläche läuft. Der Haupt-Thread übergibt die Datei (und
        den Wasm-Codec) an den Worker, der Worker arbeitet sich durch die
        Komprimierung und sendet das fertige Ergebnis zurück, wenn er fertig ist.
        Währenddessen bleibt die Oberfläche flüssig und kann den Fortschritt in
        Echtzeit anzeigen. Der{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN-Leitfaden zur Verwendung von Web Workers
        </a>{" "}
        behandelt das Modell der Nachrichtenübermittlung im Detail. Große
        Binärdaten lassen sich mithilfe übertragbarer Objekte effizient zwischen
        Threads verschieben, sodass die Datei nicht Byte für Byte kopiert werden
        muss, nur um die Thread-Grenze zu überqueren.
      </p>

      <h2 id="decoding">Dateien ohne Netzwerk lesen und dekodieren</h2>
      <p>
        Bevor überhaupt etwas komprimiert werden kann, muss der Browser deine
        Datei in den Speicher einlesen und dekodieren. Das stützt sich auf eine
        kleine Familie standardisierter Web-APIs, von denen keine einen Server
        beteiligt:
      </p>
      <ul>
        <li>
          <strong>Die File- und Blob-APIs</strong> repräsentieren die Datei, die
          du auswählst oder hineinziehst. Sie stellen die Rohdaten als{" "}
          <code>ArrayBuffer</code> bereit, auf dem Codecs direkt arbeiten können
          — alles im Speicher.
        </li>
        <li>
          <strong>createImageBitmap</strong> dekodiert ein Bild effizient in eine
          verarbeitungsbereite Form und kann das außerhalb des Haupt-Threads tun.
        </li>
        <li>
          <strong>OffscreenCanvas</strong> ermöglicht es dem Browser, Bilddaten
          innerhalb eines Workers zu zeichnen, zu skalieren und neu zu kodieren,
          ohne jemals die sichtbare Seite zu berühren.
        </li>
      </ul>
      <p>
        Zusammengesetzt sieht die Verarbeitungskette so aus: Du legst eine Datei
        ab, der Browser liest ihre Bytes lokal, ein Worker dekodiert sie, der
        Wasm-Codec kodiert sie in der von dir gewählten Qualität neu, und ein
        neuer <code>Blob</code> wird dir zum Herunterladen zurückgegeben. Zu
        keinem Zeitpunkt reist die Datei irgendwohin. Falls dich die
        Qualitätsentscheidungen in diesem Neukodierungsschritt interessieren,
        erklärt unser Leitfaden zur{" "}
        <Link href="/de/blog/lossy-vs-lossless-compression">
          verlustbehafteten gegenüber verlustfreien Komprimierung
        </Link>{" "}
        , was tatsächlich verworfen wird und warum.
      </p>

      <h2 id="privacy">Warum das wirklich privater ist</h2>
      <p>
        Der Datenschutzvorteil des clientseitigen Modells ist kein
        Marketing-Slogan — er ist eine direkte Folge der Architektur. Da deine
        Datei nur in den lokalen Speicher eingelesen und auf deinem Gerät neu
        kodiert wird:
      </p>
      <ul>
        <li>
          <strong>Es wird nichts übertragen.</strong> Es gibt keinen Upload,
          also keine Kopie deiner Datei während der Übertragung, die abgefangen
          werden könnte, und keine ruhende Kopie auf einem Server, die gehackt,
          verkauft oder gerichtlich angefordert werden könnte.
        </li>
        <li>
          <strong>Es funktioniert offline.</strong> Sobald die Seite und ihre
          Wasm-Codecs geladen sind, kannst du dich vollständig vom Internet
          trennen, und die Werkzeuge funktionieren weiter. Das ist der einfachste
          Beweis dafür, dass kein Upload stattfindet — du kannst es selbst im
          Netzwerk-Tab deines Browsers beobachten.
        </li>
        <li>
          <strong>Es gibt nichts zu speichern.</strong> Wenn du den Tab
          schließt, sind die Dateidaten aus dem Speicher verschwunden. Es gibt
          keine Server-Protokolle, die deine Dokumente mit deiner Identität
          verknüpfen.
        </li>
      </ul>
      <p>
        Und da FileShrinking{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          vollständig quelloffen unter der MIT-Lizenz
        </a>{" "}
        ist, musst du diese Behauptungen nicht einfach glauben. Jeder kann den
        Code lesen, bestätigen, dass es keinen Upload-Pfad gibt, und genau
        überprüfen, wie sich die Komprimierungskette verhält. Überprüfbarer
        Datenschutz ist die stärkste Form.
      </p>

      <h2 id="tradeoffs">Die ehrlichen Kompromisse</h2>
      <p>
        Clientseitige Komprimierung ist keine Zauberei, und es ist nur fair,
        offen darüber zu sprechen, wo das Servermodell noch Vorteile hat:
      </p>
      <ul>
        <li>
          <strong>Geschwindigkeit bei sehr großen Aufgaben.</strong> Ein
          Rechenzentrum kann einem langen Video weit mehr Kerne widmen, als dein
          Notebook hat. Bei den meisten Bildern und kurzen Clips ist der
          Unterschied nicht spürbar, aber ein abendfüllendes Video ist im Browser
          langsamer als auf einer Serverfarm.
        </li>
        <li>
          <strong>Speichergrenzen.</strong> Alles geschieht im Arbeitsspeicher
          deines Geräts. Extrem große Dateien — etwa ein mehrere Gigabyte großes
          Video auf einem Smartphone mit wenig Speicher — können an
          Speicherobergrenzen des Browsers stoßen, die ein Server nicht hätte.
        </li>
        <li>
          <strong>Kosten beim ersten Laden.</strong> Die Wasm-Codecs müssen beim
          ersten Mal, wenn du ein Werkzeug verwendest, heruntergeladen werden.
          Danach werden sie zwischengespeichert, sodass spätere Besuche sofort
          erfolgen, aber der allererste Durchlauf bezahlt einen einmaligen
          Download.
        </li>
      </ul>
      <p>
        Für die überwältigende Mehrheit der alltäglichen Aufgaben — Fotos fürs
        Web optimieren, ein PDF auf E-Mail-Größe stutzen, eine
        Bildschirmaufnahme verkleinern — sind diese Kompromisse die Sache leicht
        wert, und du bekommst Datenschutz obendrein.
      </p>

      <h2 id="try-it">Überzeuge dich selbst</h2>
      <p>
        Der beste Weg, clientseitige Komprimierung zu verstehen, ist, sie zu
        nutzen. Probiere den{" "}
        <Link href="/de/image-compressor">Bildkompressor</Link>, den{" "}
        <Link href="/de/video-compressor">Videokompressor</Link> oder den{" "}
        <Link href="/de/pdf-compressor">PDF-Kompressor</Link> — öffne dann die
        Entwicklerwerkzeuge deines Browsers, beobachte den Netzwerk-Tab und
        bestätige, dass nichts hochgeladen wird, während deine Datei schrumpft.
        Alles läuft lokal, der Code ist für jeden einsehbar, und deine Dateien
        bleiben genau dort, wo sie hingehören: bei dir.
      </p>
    </>
  );
}
