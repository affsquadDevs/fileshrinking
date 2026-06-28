import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "jpeg-vs-png-vs-webp-vs-avif",
  title: "JPEG vs. PNG vs. WebP vs. AVIF: Welches Bildformat?",
  description:
    "Ein umfassender Vergleich von JPEG, PNG, WebP und AVIF: wie jedes komprimiert, Transparenz- und Animationsunterstützung, Browser-Support und wann was.",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  authorId: "maya",
  tags: ["Formate", "Bilder"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Die Wahl eines Bildformats war früher einfach: JPEG für Fotos, PNG für
        alles andere. Heute gibt es vier ernstzunehmende Kandidaten &mdash;{" "}
        <strong>JPEG</strong>, <strong>PNG</strong>, <strong>WebP</strong> und{" "}
        <strong>AVIF</strong> &mdash; und das richtige zu wählen kann deine
        Dateigrößen halbieren (oder mehr), ohne dass jemand einen
        Qualitätsverlust bemerkt. Dieser Leitfaden erklärt genau, wie jedes
        Format komprimiert, was es kann und was nicht, und wie du sicher die
        richtige Wahl triffst.
      </p>

      <h2 id="jpeg">JPEG: das fotografische Arbeitspferd</h2>
      <p>
        JPEG (oder JPG) ist seit den 1990er-Jahren das Standardformat für
        Fotografien &mdash; und das aus gutem Grund. Es nutzt{" "}
        <strong>verlustbehaftete</strong> Kompression auf Basis der diskreten
        Kosinustransformation, zerlegt ein Bild in 8&times;8-Blöcke und verwirft
        hochfrequente Details, die dein Auge kaum wahrnimmt. Bei einem typischen
        Foto kann es ein Zehntel der Größe eines unkomprimierten Originals
        liefern, ohne bei normalen Betrachtungsgrößen sichtbaren Verlust.
      </p>
      <p>
        Seine Schwächen sind bekannt. JPEG hat{" "}
        <strong>keine Transparenz</strong> (keinen Alphakanal), keine Animation
        und nur 8 Bit pro Farbkanal. Es kämpft außerdem mit scharfen Kanten und
        flächigen Farben &mdash; Text, Logos und Strichzeichnungen bekommen
        sichtbare &bdquo;Ringing&ldquo;-Artefakte rund um die Kanten. Ein JPEG
        wiederholt neu zu speichern verstärkt den Schaden, denn der Verlust ist
        dauerhaft und kumulativ.
      </p>
      <ul>
        <li>
          <strong>Kompression:</strong> nur verlustbehaftet.
        </li>
        <li>
          <strong>Transparenz / Animation:</strong> keine von beiden.
        </li>
        <li>
          <strong>Browser-Support:</strong> universell &mdash; jeder jemals
          gebaute Browser und jedes Gerät.
        </li>
        <li>
          <strong>Ideal für:</strong> Fotografien und komplexe realistische
          Bilder, bei denen maximale Kompatibilität zählt.
        </li>
      </ul>
      <p>
        Wenn ein JPEG deine einzige Option ist, lautet das Ziel: einmal und gut
        komprimieren. Mit unserem{" "}
        <Link href="/de/compress-jpeg">JPEG-Kompressor</Link> kannst du ein
        Qualitätsniveau einstellen und den Größenkompromiss sofort sehen &mdash;
        vollständig in deinem Browser.
      </p>

      <h2 id="png">PNG: pixelgenaue Grafiken und Transparenz</h2>
      <p>
        PNG ist das verlustfreie Gegenstück zu JPEG. Es komprimiert mit
        demselben DEFLATE-Algorithmus, der auch in ZIP-Dateien steckt, und
        bewahrt so <strong>jedes Pixel exakt</strong> und dekomprimiert zu einer
        bytegenauen Kopie. Das macht es ideal für alles mit knackigen Kanten oder
        flächigen Farben: Logos, Symbole, Screenshots, Diagramme und
        UI-Elemente.
      </p>
      <p>
        PNG fügte außerdem die Funktion hinzu, die JPEG nie hatte: einen vollen{" "}
        <strong>Alphakanal</strong> für weiche Transparenz, weshalb es zum
        Webstandard für Grafiken über unterschiedlichen Hintergründen wurde. Der
        Nachteil ist die Größe. Bei einer Vollfarbfotografie kann ein PNG leicht
        fünf- bis zehnmal größer sein als das entsprechende JPEG, weil verlustlose
        Kompression das fotografische Detail, das JPEG so klein macht, schlicht
        nicht verwerfen kann.
      </p>
      <ul>
        <li>
          <strong>Kompression:</strong> verlustfrei.
        </li>
        <li>
          <strong>Transparenz:</strong> ja, voller 8-Bit-Alphakanal. Animation:
          nein (das ist APNG, selten genutzt).
        </li>
        <li>
          <strong>Browser-Support:</strong> universell.
        </li>
        <li>
          <strong>Ideal für:</strong> Logos, Symbole, Strichzeichnungen,
          Screenshots und jedes Bild, das Transparenz oder pixelgenaue Kanten
          benötigt.
        </li>
      </ul>
      <p>
        PNGs schleppen oft redundante Metadaten und eine suboptimale Codierung
        mit sich. Ein verlustfreier Durchlauf durch unseren{" "}
        <Link href="/de/compress-png">PNG-Kompressor</Link> kann einen
        spürbaren Teil der Datei einsparen, ohne ein einziges sichtbares Pixel
        zu verändern.
      </p>

      <h2 id="webp">WebP: das moderne Allround-Talent</h2>
      <p>
        WebP, entwickelt von Google, war das erste breit verbreitete Format, das
        alles in einem Container vereinte. Es bietet sowohl{" "}
        <strong>verlustbehaftete</strong> als auch{" "}
        <strong>verlustfreie</strong> Modi, unterstützt in beiden Transparenz und
        kann sogar Animationen aufnehmen &mdash; als kleinerer, qualitativ
        besserer Ersatz für GIF.
      </p>
      <p>
        In der Praxis ist verlustbehaftetes WebP typischerweise{" "}
        <strong>25&ndash;35 % kleiner als ein JPEG</strong> bei vergleichbarer
        Qualität, und verlustfreies WebP schlägt PNG meist um rund
        20&ndash;26 %. Es wird in jedem aktuellen großen Browser unterstützt
        &mdash; Chrome, Firefox, Safari und Edge &mdash;, was es zu einem
        sicheren, risikoarmen Upgrade gegenüber den Altformaten für nahezu jede
        Website macht.
      </p>
      <ul>
        <li>
          <strong>Kompression:</strong> verlustbehaftet und verlustfrei.
        </li>
        <li>
          <strong>Transparenz / Animation:</strong> beide unterstützt.
        </li>
        <li>
          <strong>Browser-Support:</strong> hervorragend in allen modernen
          Browsern.
        </li>
        <li>
          <strong>Ideal für:</strong> universelle Webbilder, bei denen du
          kleinere Dateien als JPEG oder PNG willst &mdash; praktisch ohne
          Kompatibilitätsrisiko.
        </li>
      </ul>
      <p>
        Du kannst bestehende Assets nach WebP konvertieren oder WebP-Dateien mit
        unserem <Link href="/de/compress-webp">WebP-Kompressor</Link> neu
        komprimieren.
      </p>

      <h2 id="avif">AVIF: die kleinsten verfügbaren Dateien</h2>
      <p>
        AVIF ist das neueste der vier, abgeleitet vom AV1-Videocodec. Es ist der{" "}
        <strong>Kompressions-Champion</strong>: bei den meisten Bildern erzeugt
        es die kleinste Datei bei gegebener Qualität, oft{" "}
        <strong>50 % kleiner als JPEG</strong> und deutlich kleiner als WebP. Es
        unterstützt verlustbehaftete und verlustfreie Modi, Transparenz,
        Animation, einen großen Farbraum und{" "}
        <strong>HDR mit 10- und 12-Bit-Tiefe</strong> &mdash; nützlich für
        moderne Displays.
      </p>
      <p>
        Die Kompromisse sind die Codiergeschwindigkeit und ein etwas jüngerer
        Support. AVIF kann langsamer zu codieren sein als JPEG oder WebP, und
        obwohl ihn inzwischen jeder aktuelle große Browser decodiert, tun das
        sehr alte Browserversionen womöglich nicht. Für maximale Reichweite
        liefern Websites AVIF häufig mit einem WebP- oder JPEG-Fallback über das
        HTML-Element <code>&lt;picture&gt;</code> aus.
      </p>
      <ul>
        <li>
          <strong>Kompression:</strong> verlustbehaftet und verlustfrei, mit den
          besten Verhältnissen der vier.
        </li>
        <li>
          <strong>Transparenz / Animation:</strong> beide, plus HDR und großer
          Farbraum.
        </li>
        <li>
          <strong>Browser-Support:</strong> alle aktuellen großen Browser; biete
          einen Fallback für sehr alte Clients.
        </li>
        <li>
          <strong>Ideal für:</strong> leistungskritische Websites, bei denen die
          kleinstmöglichen Dateien am wichtigsten sind.
        </li>
      </ul>
      <p>
        Versuch einmal, ein Foto durch unseren{" "}
        <Link href="/de/compress-avif">AVIF-Kompressor</Link> zu schicken und
        das Ergebnis mit demselben Bild als JPEG oder WebP zu vergleichen &mdash;
        der Unterschied ist oft frappierend.
      </p>

      <h2 id="decision-guide">Der schnelle Entscheidungsleitfaden</h2>
      <p>Wenn du dir nicht sicher bist, wozu du greifen sollst, fang hier an:</p>
      <ul>
        <li>
          <strong>Fotos, maximale Kompatibilität &rarr; JPEG.</strong> Die
          universelle Wahl, wenn die Datei überall und von allem geöffnet werden
          könnte.
        </li>
        <li>
          <strong>Logos, Symbole, Screenshots, Transparenz &rarr; PNG.</strong>{" "}
          Verlustfreie Kanten und ein voller Alphakanal.
        </li>
        <li>
          <strong>
            Allgemeine Webbilder, kleiner und ohne Risiko &rarr; WebP.
          </strong>{" "}
          Ein nahtloses Upgrade, das in allem Modernen funktioniert.
        </li>
        <li>
          <strong>
            Kleinstmögliche Dateien für die Performance &rarr; AVIF
          </strong>{" "}
          (mit einem Fallback). Die beste Kompression, die du heute bekommen
          kannst.
        </li>
      </ul>
      <p>
        Eine maßgebliche Referenz dazu, wie Browser die einzelnen Formate
        behandeln, ist der{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN-Leitfaden zu Bilddateitypen
        </a>{" "}
        &mdash; der beste Ort, um tiefer einzusteigen.
      </p>

      <h2 id="converting">Zwischen Formaten konvertieren</h2>
      <p>
        Der schnellste Weg, das richtige Format zu finden, ist, ein paar
        auszuprobieren und zu vergleichen. Wenn du einen Ordner voller alter
        JPEGs oder überdimensionierter PNGs hast, kannst du mit unserem{" "}
        <Link href="/de/image-converter">Bildkonverter</Link> zwischen JPEG,
        PNG, WebP und AVIF wechseln und zusehen, wie sich die Dateigrößen
        nebeneinander verändern. Da jedes FileShrinking-Tool{" "}
        <strong>zu 100 % in deinem Browser</strong> läuft, werden deine Bilder
        nirgendwo hochgeladen &mdash; du kannst mit sensiblen oder persönlichen
        Dateien ganz ohne Datenschutzrisiko experimentieren.
      </p>
      <p>
        Die Kurzfassung: Behalte ein hochwertiges Master, wähle das Format, das
        zur Aufgabe passt, und komprimiere einmal. Mach das, und du
        veröffentlichst Bilder, die zugleich klein und scharf sind &mdash; ohne
        sie je von deinem Gerät zu senden.
      </p>
    </>
  );
}
