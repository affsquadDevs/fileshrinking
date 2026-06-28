import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "best-image-formats-for-the-web-2026",
  title: "Die besten Bildformate für das Web 2026",
  description:
    "AVIF und WebP mit JPEG als Fallback, wann PNG noch gewinnt, das <picture>-Element und wie das Bildgewicht 2026 die Core Web Vitals beeinflusst.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  authorId: "maya",
  tags: ["Formate", "Web-Performance"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Bilder sind auf den meisten Webseiten nach wie vor das Schwergewicht
        &ndash; in der Regel mehr Bytes als deine Skripte, Schriften und
        Stylesheets zusammen. Das richtige Format zu wählen ist die
        Performance-Entscheidung mit dem größten Hebel, die du treffen kannst,
        und 2026 hat sich die Antwort endlich gefestigt. Die Kurzfassung: greife
        zuerst zu <strong>AVIF</strong>, nutze <strong>WebP</strong> als
        Alternative und behalte <strong>JPEG</strong> als universelles
        Sicherheitsnetz. PNG hat weiterhin seine Aufgabe, aber eine engere, als
        die meisten annehmen. So solltest du darüber nachdenken.
      </p>

      <h2 id="the-modern-stack">Der moderne Bild-Stack auf einen Blick</h2>
      <p>
        Drei verlustbehaftete Formate dominieren heute fotografische Inhalte im
        Web, in absteigender Reihenfolge der Kompressionseffizienz:
      </p>
      <ul>
        <li>
          <strong>AVIF</strong> &ndash; abgeleitet vom Video-Codec AV1, erzeugt
          es bei gegebener visueller Qualität meist die kleinsten Dateien, oft
          30&ndash;50&nbsp;% kleiner als JPEG und spürbar kleiner als WebP. Es
          unterstützt außerdem einen weiten Farbraum, HDR, Transparenz sowie
          verlustbehaftete und verlustfreie Modi.
        </li>
        <li>
          <strong>WebP</strong> &ndash; ein etwas älteres Format von Google, das
          immer noch ausgezeichnet ist: rund 25&ndash;35&nbsp;% kleiner als
          JPEG, mit Unterstützung für Transparenz und Animation. Sein größter
          Vorteil heute ist die Kodiergeschwindigkeit und eine grundsolide
          Browser-Unterstützung.
        </li>
        <li>
          <strong>JPEG</strong> &ndash; fast 35 Jahre alt und universell
          unterstützt. Es ist dein Fallback, nicht deine erste Wahl, aber es
          wird buchstäblich überall dargestellt.
        </li>
      </ul>
      <p>
        Die gute Nachricht für 2026 ist, dass dies kein Glücksspiel mehr ist.
        AVIF wird von den aktuellen Versionen von Chrome, Edge, Firefox und
        Safari unterstützt, und WebP läuft seit Jahren in allen wichtigen
        Browsern. Die aktuelle Support-Matrix kannst du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Referenz zu Bildtypen
        </a>{" "}
        einsehen, die die Verfügbarkeit jedes Formats pro Browser verfolgt.
      </p>

      <h2 id="avif-vs-webp">AVIF oder WebP &ndash; wofür solltest du dich entscheiden?</h2>
      <p>
        Wenn du nur ein modernes Format ausliefern kannst, läuft die
        Entscheidung meist auf einen Kompromiss zwischen Dateigröße und
        Kodieraufwand hinaus:
      </p>
      <ul>
        <li>
          <strong>Wähle AVIF</strong>, wenn es vor allem auf Bytes ankommt
          &ndash; große Hero-Bilder, Fotografie-Portfolios, alles, wo jedes
          Kilobyte in deine Ladekennzahlen einfließt. Es bewältigt außerdem
          sanfte Verläufe und Himmel mit weit weniger Banding-Artefakten als
          JPEG.
        </li>
        <li>
          <strong>Wähle WebP</strong>, wenn du eine schnelle, günstige Kodierung
          im großen Maßstab brauchst oder ein einziges modernes Format mit
          größtmöglicher Reichweite und vorhersehbarem Verhalten willst. WebP
          kodiert deutlich schneller als AVIF, was zählt, wenn du Tausende von
          Bildern konvertierst.
        </li>
      </ul>
      <p>
        Eigentlich musst du dich aber gar nicht entscheiden. Die richtige
        Antwort für eine Produktivseite ist, beide anzubieten und den Browser
        wählen zu lassen &ndash; und genau dafür ist das{" "}
        <code>&lt;picture&gt;</code>-Element da. Du kannst gleich jetzt mit
        beiden experimentieren, mit FileShrinkings{" "}
        <Link href="/de/compress-avif">AVIF-Kompressor</Link> und{" "}
        <Link href="/de/compress-webp">WebP-Kompressor</Link>, die
        Ausgabegrößen nebeneinander vergleichen und entscheiden, was für deinen
        Inhalt am besten funktioniert. Alles läuft in deinem Browser, also wird
        nichts hochgeladen.
      </p>

      <h2 id="picture-element">Das richtige Format mit &lt;picture&gt; ausliefern</h2>
      <p>
        Der sauberste Weg, moderne Formate mit einem Fallback auszuliefern, ist
        die Inhaltsaushandlung in HTML. Das{" "}
        <code>&lt;picture&gt;</code>-Element erlaubt dir, Kandidatenquellen in
        Prioritätsreihenfolge aufzulisten; der Browser nutzt die erste, die er
        versteht, und ignoriert den Rest:
      </p>
      <ul>
        <li>
          Liste deine <strong>AVIF</strong>-Quelle zuerst auf, da das
          effizienteste Format gewinnen sollte, wenn es verfügbar ist.
        </li>
        <li>
          Liste <strong>WebP</strong> an zweiter Stelle auf, um jeden Browser
          abzudecken, dem AVIF fehlt, der aber WebP unterstützt.
        </li>
        <li>
          Setze ein gewöhnliches <strong>JPEG</strong> (oder PNG) in den
          schließenden <code>&lt;img&gt;</code>-Tag als garantierten Fallback
          &ndash; und um deinen <code>alt</code>-Text, die <code>width</code>{" "}
          und die <code>height</code> mitzuführen.
        </li>
      </ul>
      <p>
        Da der Browser nur die eine Quelle herunterlädt, die er wählt, erhältst
        du so das kleinste Format, das jeder Besucher darstellen kann &ndash;
        ganz ohne JavaScript oder serverseitige Erkennung. Für das vollständige
        Markup-Muster erklärt der{" "}
        <a
          href="https://web.dev/articles/serve-responsive-images"
          target="_blank"
          rel="noopener noreferrer"
        >
          web.dev-Leitfaden zu responsiven Bildern
        </a>
        , wie man <code>&lt;picture&gt;</code> auch mit{" "}
        <code>srcset</code> für den Auflösungswechsel kombiniert.
      </p>

      <h2 id="png-still-matters">Wann PNG (und SVG) noch wichtig sind</h2>
      <p>
        Moderne verlustbehaftete Formate sind für Fotografien gemacht. Für
        flache Grafiken sind sie das falsche Werkzeug, und PNG verdient sich in
        ein paar konkreten Fällen noch seinen Platz:
      </p>
      <ul>
        <li>
          <strong>Scharfkantige Grafiken mit wenigen Farben</strong> &ndash;
          Logos, Icons, UI-Screenshots und Diagramme. Verlustfreies PNG hält
          Text und Kanten gestochen scharf, wo verlustbehaftete Kompression sie
          verschmieren würde.
        </li>
        <li>
          <strong>Pixelgenaue Screenshots</strong>, die du exakt reproduzieren
          willst, Byte für Byte.
        </li>
        <li>
          <strong>Ausgangs-Master</strong>, die du später wieder bearbeiten
          wirst, da PNG verlustfrei ist und keinen Generationsverlust
          ansammelt.
        </li>
      </ul>
      <p>
        Allerdings ist <strong>SVG</strong> für viele dieser Aufgaben sogar noch
        besser: Logos und einfache Icons als Vektoren gezeichnet bleiben in
        jeder Größe rasierklingenscharf und wiegen oft weniger als ein
        Raster-Äquivalent. Und wenn du doch eine Rastergrafik mit Transparenz im
        Web brauchst, unterstützen sowohl AVIF als auch WebP ebenfalls einen
        Alphakanal &ndash; ein verlustfreies WebP kann PNG bei der Größe also
        häufig schlagen. Wenn du ein Asset im falschen Format hast, kann der{" "}
        <Link href="/de/image-converter">Bildkonverter</Link> es umwandeln, ohne
        dass etwas neu hochgeladen wird.
      </p>

      <h2 id="core-web-vitals">Bildgewicht und Core Web Vitals</h2>
      <p>
        Die Formatwahl betrifft nicht nur die Bandbreitenkosten &ndash; sie
        wirkt sich direkt auf Googles Core Web Vitals aus, die sowohl die
        Nutzererfahrung als auch das Suchranking beeinflussen. Die am stärksten
        mit Bildern verknüpfte Kennzahl ist{" "}
        <strong>Largest Contentful Paint (LCP)</strong>: auf einer typischen
        Seite ist das größte Element das Hero-Bild, daher bestimmt die
        Geschwindigkeit, mit der dieses Bild eintrifft, weitgehend deinen
        LCP-Wert. Der empfohlene Zielwert ist ein LCP unter{" "}
        <strong>2,5 Sekunden</strong> für den Großteil deiner Besuche.
      </p>
      <p>Ein paar praktische Hebel, grob nach Wirkung geordnet:</p>
      <ul>
        <li>
          <strong>Reduziere die Bytes</strong>, indem du AVIF oder WebP statt
          JPEG auslieferst. Ein kleineres LCP-Bild trifft früher ein &ndash; das
          ist der größte einzelne Gewinn.
        </li>
        <li>
          <strong>Passe Bilder an ihre Anzeigegröße an.</strong> Ein 4000-px-Foto
          in ein 800-px-Feld zu liefern, verschwendet den Großteil des
          Downloads. Nutze <code>srcset</code>, um passend dimensionierte
          Varianten auszuliefern.
        </li>
        <li>
          <strong>Setze immer <code>width</code> und <code>height</code></strong>{" "}
          (oder nutze CSS <code>aspect-ratio</code>), damit der Browser Platz
          reserviert und du Layout-Verschiebungen vermeidest, was deinen
          CLS-Wert schützt.
        </li>
        <li>
          <strong>Vermeide Lazy-Loading beim LCP-Bild.</strong> Lade Bilder
          unterhalb des Falzes verzögert, aber lass das Hero-Bild sofort laden,
          damit es nicht verzögert wird.
        </li>
      </ul>

      <h2 id="takeaway">Das Fazit für 2026</h2>
      <p>
        Setze für fotografische Inhalte standardmäßig auf <strong>AVIF</strong>{" "}
        für die kleinsten Dateien, biete <strong>WebP</strong> als schnelle,
        breit unterstützte Alternative an und behalte einen{" "}
        <strong>JPEG</strong>-Fallback innerhalb eines{" "}
        <code>&lt;picture&gt;</code>-Elements, damit jeder Browser etwas erhält.
        Reserviere <strong> PNG</strong> für scharfe Grafiken, Screenshots und
        verlustfreie Master, und nutze <strong>SVG</strong> für Logos und Icons,
        wann immer du kannst. Komprimiere vor dem Veröffentlichen, passe jedes
        Bild an sein Feld an, und deine Core Web Vitals werden es dir danken.
      </p>
      <p>
        Willst du das in die Praxis umsetzen? Konvertiere und komprimiere deine
        Bilder direkt im Browser mit den Tools{" "}
        <Link href="/de/compress-avif">AVIF</Link> und{" "}
        <Link href="/de/compress-webp">WebP</Link> oder wechsle das Format mit
        dem <Link href="/de/image-converter">Bildkonverter</Link> &ndash; keine
        Uploads, keine Konten, und deine Dateien verlassen nie dein Gerät.
      </p>
    </>
  );
}
