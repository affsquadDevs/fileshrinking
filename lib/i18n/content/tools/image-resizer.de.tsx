import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Bilder online kostenlos in Pixel oder % skalieren",
  metaDescription:
    "Skaliere JPG, PNG, WebP, AVIF und GIF nach Pixeln oder Prozent im Browser. Privat und ohne Upload: Deine Bilder verlassen nie dein Gerät.",
  heading: "Bilder skalieren",
  intro: (
    <>
      Skaliere JPG-, PNG-, WebP-, AVIF- und GIF-Bilder nach exakten Pixeln oder
      nach Prozent, direkt in deinem Browser. Die Abmessungen zu ändern ist der
      wirksamste Weg, eine Datei zu verkleinern: Lege deine Bilder ab, lege eine
      Zielgröße fest und lade sie in Sekunden herunter. Es wird nie etwas
      hochgeladen.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So skalierst du ein Bild",
    description:
      "Skaliere Bilder nach Pixeln oder Prozent lokal in deinem Browser in vier Schritten.",
    steps: [
      {
        name: "Bilder hinzufügen",
        text: "Ziehe deine Fotos per Drag-and-drop in den Ablagebereich, klicke zum Durchsuchen oder füge sie aus der Zwischenablage ein. JPEG, PNG, WebP, AVIF und GIF werden alle unterstützt, und du kannst mehrere auf einmal hinzufügen.",
      },
      {
        name: "Pixel oder Prozent wählen",
        text: "Wähle „Prozent“, um nach einem Verhältnis zu skalieren (ideal für ganze Stapel), oder „Pixel“, um eine exakte Breite oder Höhe einzugeben. Lass das Seitenverhältnis aktiviert, um Verzerrungen zu vermeiden.",
      },
      {
        name: "Format und Qualität festlegen (optional)",
        text: "Belasse das Format auf „Gleiches Format“, um den ursprünglichen Typ beizubehalten, oder konvertiere zu WebP oder AVIF für eine kleinere Datei. Passe den Qualitätsregler an, um gleichzeitig zu komprimieren.",
      },
      {
        name: "Skalierte Bilder herunterladen",
        text: "Jedes Bild wird auf deinem Gerät mit Lanczos-Resampling skaliert. Lade sie einzeln herunter oder hole dir alles auf einmal als ZIP.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine Bilder beim Skalieren auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Das Skalieren geschieht vollständig in deinem Browser über den
          Prozessor deines eigenen Geräts. Die Dateien werden in den Speicher
          eingelesen, skaliert und dir direkt zurückgegeben: Es wird nie etwas
          an einen Server gesendet, sodass deine Bilder vollkommen privat
          bleiben. Du kannst sogar offline gehen, sobald die Seite geladen ist.
        </>
      ),
      text: "Nein. Das Skalieren geschieht vollständig in deinem Browser über den Prozessor deines Geräts. Die Dateien werden in den Speicher eingelesen, skaliert und dir direkt zurückgegeben. Es wird nie etwas an einen Server gesendet, sodass deine Bilder privat bleiben. Du kannst sogar offline gehen, sobald die Seite geladen ist.",
    },
    {
      q: "Ist die Bildskalierung wirklich kostenlos?",
      a: (
        <>
          Ja: Sie ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und
          ohne Begrenzung, wie viele Bilder du skalieren kannst oder wie groß
          sie sind, abgesehen von dem, was der Speicher deines Geräts zulässt.
          Die Seite finanziert sich über unaufdringliche Werbung.
        </>
      ),
      text: "Ja. Sie ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung der Anzahl oder Größe der Bilder, abgesehen von dem, was der Speicher deines Geräts zulässt. Die Seite finanziert sich über unaufdringliche Werbung.",
    },
    {
      q: "Verringert das Skalieren die Qualität meines Bildes?",
      a: (
        <>
          Ein Bild zu verkleinern ist schonend für die Qualität, weil die Pixel
          mit hochwertigem Lanczos-Resampling intelligent gemittelt werden, was
          Kanten scharf hält und das ausgefranste Aussehen einer simplen
          Skalierung vermeidet. Die Qualität leidet nur, wenn du ein Bild über
          seine Originalgröße hinaus vergrößerst (hochskalierst), da es keine
          echten Details gibt, die sich erfinden ließen.
        </>
      ),
      text: "Ein Bild zu verkleinern ist schonend für die Qualität, weil die Pixel mit hochwertigem Lanczos-Resampling gemittelt werden, was Kanten scharf hält. Die Qualität leidet nur, wenn du ein Bild über seine Originalgröße hinaus vergrößerst, da es keine echten Details gibt, die sich erfinden ließen.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich skalieren kann?",
      a: (
        <>
          Es gibt keine feste Grenze: Sie hängt vom verfügbaren Speicher deines
          Geräts ab. Übliche Fotos von einigen Megabyte und sogar sehr große
          Bilder mit 40–80 MP lassen sich problemlos skalieren. Große Stapel
          werden eine Datei nach der anderen verarbeitet, um den
          Speicherverbrauch niedrig zu halten.
        </>
      ),
      text: "Es gibt keine feste Grenze; sie hängt vom verfügbaren Speicher deines Geräts ab. Übliche Fotos von einigen Megabyte und sogar sehr große Bilder mit 40-80 MP lassen sich problemlos skalieren. Große Stapel werden eine Datei nach der anderen verarbeitet, um den Speicherverbrauch niedrig zu halten.",
    },
    {
      q: "Kann ich das Seitenverhältnis beibehalten, damit mein Bild nicht verzerrt wirkt?",
      a: (
        <>
          Ja. Lass das Kästchen „Seitenverhältnis beibehalten“ aktiviert und gib
          nur eine Breite oder nur eine Höhe ein: Die andere Dimension wird
          automatisch berechnet, sodass das Bild proportional skaliert.
          Deaktiviere es nur, wenn du gezielt exakte, nicht proportionale
          Abmessungen brauchst.
        </>
      ),
      text: "Ja. Lass das Kästchen Seitenverhältnis beibehalten aktiviert und gib nur eine Breite oder nur eine Höhe ein; die andere Dimension wird automatisch berechnet, sodass das Bild proportional skaliert. Deaktiviere es nur, wenn du gezielt exakte, nicht proportionale Abmessungen brauchst.",
    },
    {
      q: "Kann ich gleichzeitig skalieren und komprimieren?",
      a: (
        <>
          Ja, und das solltest du auch. Lege die Zielabmessungen fest und wähle
          dann ein Ausgabeformat und eine Qualitätsstufe. Das Skalieren
          reduziert die Pixelzahl, während die Kompression die verbleibenden
          Pixel zusammenpresst, sodass die Kombination aus beidem die
          kleinstmögliche Datei in einem einzigen Durchgang liefert.
        </>
      ),
      text: "Ja, und das solltest du auch. Lege die Zielabmessungen fest und wähle dann ein Ausgabeformat und eine Qualitätsstufe. Das Skalieren reduziert die Pixelzahl, während die Kompression die verbleibenden Pixel zusammenpresst, sodass die Kombination aus beidem die kleinstmögliche Datei in einem einzigen Durchgang liefert.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum solltest du deine Bilder skalieren?</h2>
      <p>
        Moderne Smartphones und Kameras nehmen riesige Bilder auf: Ein einziges
        Foto kann 6000 Pixel breit sein und zehn Megabyte oder mehr wiegen. Das
        sind weit mehr Details, als fast jeder Bildschirm, jede E-Mail oder
        Webseite jemals zeigen wird. Ein Blog-Header wird vielleicht mit 1200
        Pixeln Breite angezeigt, ein Profilbild mit 400, eine E-Mail-Signatur
        mit 150. Eine 6000-Pixel-Datei in einen 1200-Pixel-Slot zu schicken,
        verschwendet Bandbreite, verlangsamt das Laden von Seiten und bläht
        Anhänge ohne sichtbaren Nutzen auf.
      </p>
      <p>
        Skalieren ist außerdem der{" "}
        <strong>wirksamste Hebel, den du auf die Dateigröße hast</strong>. Da
        die Datenmenge eines Bildes mit seiner Gesamtpixelzahl skaliert,
        entfernt das Halbieren von Breite und Höhe ungefähr drei Viertel der
        Pixel – und damit den Großteil der Dateigröße – noch bevor überhaupt
        komprimiert wird. Die JPEG-Qualität zu senken bringt vielleicht 30–50 %;
        ein zu großes Foto auf seine tatsächliche Anzeigegröße zu skalieren,
        spart routinemäßig 80–95 %. Wenn dir eine Datei zu groß vorkommt,
        skaliere zuerst und komprimiere danach.
      </p>
      <p>
        Und weil dieses Tool vollständig auf deinem Gerät läuft, ist es der
        private Weg, das zu tun. Andere Online-Skalierer laden deine Fotos auf
        einen entfernten Server hoch, verarbeiten sie dort und schicken sie
        zurück. Hier werden deine Bilder in den Speicher eingelesen, lokal
        skaliert und dir direkt zurückgegeben: Sie berühren nie ein Netzwerk.
      </p>

      <h2 id="quality">Wie sich das Skalieren auf die Qualität auswirkt</h2>
      <p>
        Verkleinern – ein Bild kleiner machen – ist von Natur aus schonend für
        die Qualität, aber <em>wie</em> die Pixel kombiniert werden, macht einen
        großen Unterschied. Simple Skalierung wirft einfach Pixel weg und
        erzeugt ausgefranste Kanten und Flimmern bei feinen Details. Dieses Tool
        verwendet stattdessen hochwertiges{" "}
        <strong>Lanczos-Resampling</strong>, das für jedes Ausgabepixel eine
        Nachbarschaft umgebender Pixel gewichtet. Das Ergebnis hält Kanten
        scharf und Text lesbar, sodass ein verkleinertes Bild sauber aussieht
        statt verschwommen oder mit Treppeneffekt.
      </p>
      <p>
        Die einzige Operation, die wirklich schadet, ist das{" "}
        <strong>Hochskalieren</strong>: ein Bild über seine ursprünglichen
        Abmessungen hinaus vergrößern. Kein Resampler kann Details erfinden, die
        nie erfasst wurden, sodass ein hochskaliertes Foto weich und matschig
        aussieht. Als Faustregel: Skaliere immer nur nach{" "}
        <em>unten</em>: Wähle die größte Größe, die du wirklich brauchst, und
        skaliere darauf, niemals über die Quellabmessungen hinaus. Wenn du
        zusätzlich in ein verlustbehaftetes Format konvertierst, denk daran,
        dass sich Kompression und Skalierung addieren: Ein skaliertes Bild hat
        weniger Pixel zum Komprimieren, was genau der Grund ist, warum beide
        zusammen so kleine Dateien erzeugen.
      </p>

      <h2 id="sizes">Pixel, Prozent und gängige Zielgrößen</h2>
      <p>
        Der <strong>Prozent</strong>-Modus ist ideal für Stapel: Stelle 50 % ein
        und jedes Bild verkleinert sich proportional, unabhängig von seiner
        Ausgangsgröße. Der <strong>Pixel</strong>-Modus ist für präzise Ziele:
        Gib eine Breite (oder eine Höhe) ein und mit gesperrtem Seitenverhältnis
        wird die andere Dimension für dich berechnet, sodass nichts verzerrt
        wird. Das Seitenverhältnis ist einfach das Verhältnis zwischen Breite und
        Höhe (16:9, 4:3, 1:1); es intakt zu halten verhindert, dass Gesichter
        und Logos gestaucht aussehen. Mehr darüber, wie Bilder und ihre
        Abmessungen funktionieren, kannst du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Leitfaden zu Bildern im Web
        </a>{" "}
        nachlesen.
      </p>
      <p>
        Nützliche Zielgrößen, die du im Hinterkopf behalten solltest: Die
        meisten <strong>Web</strong>-Inhalte sehen zwischen 1200 und 2000 Pixeln
        an der langen Kante hervorragend aus (nutze den größeren Wert für
        bildschirmfüllende Hero-Bilder auf hochauflösenden Displays).{" "}
        <strong>E-Mail</strong>-Anhänge und -Signaturen sollten in der Regel bei
        oder unter 800 Pixeln bleiben, um die Postfächer zufriedenzustellen. Für{" "}
        <strong>soziale Medien</strong> sind gängige Abmessungen ungefähr
        1080×1080 für einen quadratischen Instagram-Beitrag, 1080×1920 für
        vertikale Stories und Reels, 1200×630 für eine Link-Vorschau auf Facebook
        oder via Open Graph und 1500×500 für einen X/Twitter-Header. Im
        Zweifelsfall skaliere auf die größte Stelle, an der das Bild erscheinen
        wird, und lass die Plattform von dort herunterskalieren.
      </p>

      <h2 id="tips">Tipps für die besten Ergebnisse</h2>
      <ul>
        <li>
          <strong>Niemals hochskalieren.</strong> Über die Originalgröße hinaus
          zu vergrößern fügt nur Unschärfe hinzu. Wähle die größte Dimension,
          die du wirklich brauchst, und höre dort auf.
        </li>
        <li>
          <strong>Skaliere, bevor du komprimierst.</strong> Weniger Pixel
          bedeuten eine kleinere Datei und weniger Arbeit für den Encoder. Für
          die kleinsten Fotos skaliere sie hier und schicke sie dann durch die{" "}
          <Link href="/de/compress-jpeg">JPEG-Kompression</Link>.
        </li>
        <li>
          <strong>Sperre das Seitenverhältnis.</strong> Gib nur die Breite oder
          nur die Höhe ein und lass die andere automatisch ausfüllen: Das ist
          der einfachste Weg, gestreckte, verzerrte Bilder zu vermeiden.
        </li>
        <li>
          <strong>Konvertiere beim Skalieren.</strong> Der Wechsel zu WebP oder
          AVIF mit dem{" "}
          <Link href="/de/image-converter">Bildkonverter</Link> kann ein
          skaliertes Foto um weitere 25–50 % verkleinern, ohne sichtbaren
          Qualitätsverlust.
        </li>
        <li>
          <strong>Bewahre deine Originale auf.</strong> Skaliere jedes Mal aus
          einem Master in voller Auflösung, statt eine bereits verkleinerte
          Kopie erneut zu skalieren, was den Qualitätsverlust verstärkt.
        </li>
      </ul>
    </>
  ),
};
