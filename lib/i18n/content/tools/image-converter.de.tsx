import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Bildkonverter — JPEG, PNG, WebP & AVIF",
  metaDescription:
    "Konvertiere Bilder privat im Browser zwischen JPEG, PNG, WebP und AVIF. Kein Upload: Deine Dateien verlassen nie dein Gerät.",
  heading: "Bildkonverter",
  intro: (
    <>
      Konvertiere Bilder direkt in deinem Browser zwischen JPEG, PNG, WebP und
      AVIF. Lege eine Datei ab, wähle das benötigte Format und lade das Ergebnis
      in Sekunden herunter: Jede Konvertierung läuft auf deinem Gerät, sodass nie
      etwas hochgeladen wird.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So konvertierst du ein Bild",
    description:
      "Konvertiere lokal in deinem Browser in vier Schritten zwischen JPEG, PNG, WebP und AVIF.",
    steps: [
      {
        name: "Bild hinzufügen",
        text: "Ziehe ein JPEG, PNG, WebP, AVIF oder GIF per Drag-and-drop in die Ablagezone, klicke zum Durchsuchen oder füge es aus der Zwischenablage ein. Du kannst mehrere gleichzeitig in die Warteschlange stellen.",
      },
      {
        name: "Ausgabeformat wählen",
        text: "Wähle JPEG, PNG, WebP oder AVIF. Nutze WebP oder AVIF für die kleinsten, webfertigen Dateien, PNG, wenn du verlustfreie Transparenz brauchst, oder JPEG für maximale Kompatibilität.",
      },
      {
        name: "Qualität festlegen",
        text: "Passe für JPEG, WebP und AVIF den Qualitätsregler an: Etwa 80 ist ein hervorragender Kompromiss. Die PNG-Ausgabe ist immer verlustfrei, daher gibt es keine Qualität einzustellen.",
      },
      {
        name: "Konvertierte Dateien herunterladen",
        text: "Speichere jedes konvertierte Bild einzeln oder lade alle auf einmal als ZIP herunter. Ändere Format oder Qualität und konvertiere jederzeit erneut.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine Dateien beim Konvertieren auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Die Konvertierung erfolgt vollständig in deinem Browser mit
          WebAssembly-Codecs. Das Bild wird auf deinem eigenen Gerät im
          Arbeitsspeicher dekodiert und neu kodiert, sodass deine Dateien nie
          einen Server berühren: Du kannst nach dem Laden der Seite sogar offline
          gehen, und es funktioniert weiterhin.
        </>
      ),
      text: "Nein. Die Konvertierung erfolgt vollständig in deinem Browser mit WebAssembly-Codecs. Das Bild wird auf deinem eigenen Gerät im Arbeitsspeicher dekodiert und neu kodiert, sodass deine Dateien nie einen Server berühren. Du kannst nach dem Laden der Seite offline gehen, und es funktioniert weiterhin.",
    },
    {
      q: "Ist der Bildkonverter kostenlos nutzbar?",
      a: (
        <>
          Ja: Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und
          ohne Begrenzung, wie viele Dateien du konvertierst oder wie groß sie
          sind, abgesehen von dem, was der Arbeitsspeicher deines Geräts zulässt.
          Die Seite finanziert sich über unaufdringliche Werbung.
        </>
      ),
      text: "Ja. Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung, wie viele Dateien du konvertierst oder wie groß sie sind, abgesehen von dem, was der Arbeitsspeicher deines Geräts zulässt. Die Seite finanziert sich über unaufdringliche Werbung.",
    },
    {
      q: "Beeinträchtigt das Konvertieren die Bildqualität?",
      a: (
        <>
          Das hängt vom Zielformat ab. Die Konvertierung zu PNG ist verlustfrei,
          es geht also kein Detail verloren. Die Konvertierung zu JPEG, WebP oder
          AVIF ist verlustbehaftet und kodiert das Bild mit der von dir gewählten
          Qualität neu: 75 bis 85 ist für die meisten Fotos visuell nicht vom
          Original zu unterscheiden. Da sich verlustbehaftetes Neukodieren
          summiert, konvertiere immer von deiner Quelle mit der höchsten Qualität
          statt von einer bereits komprimierten Kopie.
        </>
      ),
      text: "Das hängt vom Zielformat ab. Die Konvertierung zu PNG ist verlustfrei, es geht also kein Detail verloren. Die Konvertierung zu JPEG, WebP oder AVIF ist verlustbehaftet und kodiert mit der von dir gewählten Qualität neu; 75 bis 85 ist für die meisten Fotos visuell nicht vom Original zu unterscheiden. Verlustbehaftetes Neukodieren summiert sich, konvertiere also immer von deiner Quelle mit der höchsten Qualität.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich konvertieren kann?",
      a: (
        <>
          Es gibt keine feste Grenze: Sie wird nur durch den verfügbaren
          Arbeitsspeicher deines Geräts begrenzt. Alltägliche Fotos von wenigen
          Megabyte und große Bilder mit 20 bis 50 MP lassen sich problemlos
          konvertieren, und die AVIF-Kodierung ist am rechenintensivsten, sodass
          sehr große Bilder einfach etwas länger dauern.
        </>
      ),
      text: "Es gibt keine feste Grenze; sie wird nur durch den verfügbaren Arbeitsspeicher deines Geräts begrenzt. Alltägliche Fotos von wenigen Megabyte und große Bilder mit 20 bis 50 MP lassen sich problemlos konvertieren. Die AVIF-Kodierung ist am rechenintensivsten, sodass sehr große Bilder etwas länger dauern.",
    },
    {
      q: "In welches Format sollte ich konvertieren?",
      a: (
        <>
          Für Fotos, bei denen du breite Kompatibilität möchtest, nutze JPEG oder
          WebP. Für Grafiken, Logos, Screenshots oder alles, was Transparenz
          braucht, nutze PNG oder WebP. Für die kleinstmögliche Datei mit
          Unterstützung in modernen Browsern wähle AVIF. WebP ist der sicherste
          Allrounder, weil es sowohl verlustbehaftete Fotos als auch verlustfreie
          Transparenz unterstützt.
        </>
      ),
      text: "Für Fotos, bei denen du breite Kompatibilität möchtest, nutze JPEG oder WebP. Für Grafiken, Logos, Screenshots oder alles, was Transparenz braucht, nutze PNG oder WebP. Für die kleinstmögliche Datei mit Unterstützung in modernen Browsern wähle AVIF. WebP ist der sicherste Allrounder, da es sowohl verlustbehaftete Fotos als auch verlustfreie Transparenz unterstützt.",
    },
    {
      q: "Was passiert mit der Transparenz, wenn ich zu JPEG konvertiere?",
      a: (
        <>
          JPEG unterstützt keinen Alphakanal, sodass alle transparenten Bereiche
          beim Konvertieren zu JPEG auf einen einfarbigen Hintergrund reduziert
          werden. Wenn dein Bild auf Transparenz angewiesen ist (zum Beispiel ein
          Logo, das auf verschiedenen Hintergründen sitzen soll), konvertiere
          stattdessen zu PNG oder WebP, die beide den Alphakanal erhalten.
        </>
      ),
      text: "JPEG unterstützt keinen Alphakanal, sodass transparente Bereiche beim Konvertieren zu JPEG auf einen einfarbigen Hintergrund reduziert werden. Wenn dein Bild auf Transparenz angewiesen ist, etwa ein Logo, konvertiere stattdessen zu PNG oder WebP, die beide den Alphakanal erhalten.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum zwischen Bildformaten konvertieren?</h2>
      <p>
        Nicht jedes Bildformat eignet sich für jede Aufgabe. Ein als JPEG
        gespeichertes Logo wirkt an seinen Kanten unscharf; ein als PNG
        gespeichertes Foto kann um ein Vielfaches größer sein als nötig; und ein
        zehn Jahre altes GIF belegt weit mehr Speicher als ein modernes
        Äquivalent. Ein Bild in ein besser geeignetes Format zu konvertieren kann
        es drastisch kleiner, schärfer oder kompatibler mit dem machen, wofür du
        es veröffentlichst, ohne etwas neu fotografieren oder neu gestalten zu
        müssen.
      </p>
      <p>
        Der häufigste Grund zum Konvertieren ist, Bilder fürs Web zu verkleinern.
        Ein Foto von JPEG zu{" "}
        <Link href="/de/compress-webp">WebP</Link> oder{" "}
        <Link href="/de/compress-avif">AVIF</Link> zu verschieben kann seine
        Größe bei gleicher visueller Qualität um ein Viertel bis zur Hälfte
        verringern, was schnellere Seiten und niedrigere Bandbreitenkosten
        bedeutet. Andere konvertieren in die umgekehrte Richtung: Sie verwandeln
        ein WebP oder AVIF zurück in ein universell unterstütztes JPEG oder PNG,
        damit es sich in älterer Software öffnet oder an eine E-Mail angehängt
        werden kann. Da dieser Konverter vollständig auf deinem Gerät läuft,
        kannst du all das tun, ohne deine Bilder einem entfernten Server zu
        übergeben.
      </p>

      <h2 id="lossy">Verlustfreie und verlustbehaftete Konvertierung: was sich ändert</h2>
      <p>
        Ein Bild zu konvertieren bedeutet immer, es zu dekodieren und in einem
        neuen Format neu zu kodieren, und das von dir gewählte Format entscheidet,
        ob dieser Schritt <strong>verlustfrei</strong> oder{" "}
        <strong>verlustbehaftet</strong> ist. PNG ist verlustfrei: Jedes Pixel
        bleibt exakt erhalten, weshalb es ideal für Grafiken und Screenshots ist,
        aber bei Fotos große Dateien erzeugt. JPEG, WebP und AVIF sind
        standardmäßig verlustbehaftet: Sie verwerfen Details, die dein Auge am
        wenigsten vermissen dürfte, um die Datei deutlich kleiner zu machen, und
        ein Qualitätsregler steuert, wie aggressiv dieser Kompromiss ausfällt.
      </p>
      <p>
        Ein entscheidender Punkt ist, dass sich verlustbehaftete Konvertierung{" "}
        <strong>summiert</strong>. Jedes Mal, wenn du ein bereits
        verlustbehaftetes Bild neu kodierst, wird etwas mehr Detail verworfen,
        daher solltest du immer von der hochwertigsten Quelle konvertieren, die du
        hast, statt von einer bereits zusammengedrückten Kopie. Ein
        verlustbehaftetes JPEG <em>zu</em> PNG zu konvertieren stellt verlorenes
        Detail ebenfalls nicht wie von Zauberhand wieder her: Es speichert die
        bereits verschlechterten Pixel einfach verlustfrei, meist in einer
        größeren Datei. Für Fotos ist eine Qualität von{" "}
        <strong>75 bis 85</strong> in JPEG, WebP oder AVIF der Idealbereich, in
        dem das Ergebnis bei normalen Betrachtungsgrößen im Wesentlichen nicht vom
        Original zu unterscheiden ist.
      </p>

      <h2 id="formats">Ein kurzer Leitfaden zu den vier Formaten</h2>
      <p>
        Jedes Format hat eine Aufgabe, die es am besten erledigt.{" "}
        <strong>JPEG</strong> ist das universelle Fotoformat: überall unterstützt,
        großartig für Bilder mit kontinuierlichen Tonwerten, aber ohne
        Transparenz. <strong>PNG</strong> ist verlustfrei und unterstützt einen
        Alphakanal, was es zur richtigen Wahl für Logos, Symbole, Screenshots und
        jede Grafik macht, die scharfe Kanten oder einen transparenten Hintergrund
        braucht. <strong>WebP</strong> ist der moderne Allrounder: Es bewältigt
        sowohl verlustbehaftete Fotos als auch verlustfreie Transparenz und ist
        typischerweise 25 bis 35 % kleiner als JPEG. <strong>AVIF</strong> erzeugt
        in der Regel die kleinsten Dateien von allen und unterstützt ebenfalls
        Transparenz, allerdings auf Kosten einer langsameren Kodierung und einer
        etwas geringeren Software-Unterstützung. Eine maßgebliche Aufschlüsselung
        zu jedem Format findest du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Leitfaden zu Bilddateitypen
        </a>
        .
      </p>
      <p>
        In der Praxis: Wähle <strong>JPEG oder WebP</strong> für Fotos,{" "}
        <strong>PNG oder WebP</strong> für Grafiken und alles mit Transparenz und{" "}
        <strong>AVIF</strong>, wenn die absolut kleinste Datei zählt und dein
        Publikum aktuelle Browser nutzt. Denk daran, dass{" "}
        <strong>JPEG keine Transparenz hat</strong>, sodass das Konvertieren eines
        transparenten PNG oder WebP zu JPEG es auf einen einfarbigen Hintergrund
        reduziert. Wenn du eine Datei nur kleiner machen willst, ohne ihr Format
        zu ändern, passen die spezialisierten Kompressoren für{" "}
        <Link href="/de/compress-jpeg">JPEG</Link>,{" "}
        <Link href="/de/compress-png">PNG</Link>,{" "}
        <Link href="/de/compress-webp">WebP</Link> und{" "}
        <Link href="/de/compress-avif">AVIF</Link> besser.
      </p>

      <h2 id="tips">Tipps für saubere Konvertierungen</h2>
      <ul>
        <li>
          <strong>Konvertiere vom Original.</strong> Beginne mit der
          hochwertigsten Quelle, die du hast, damit du keine Details neu
          komprimierst, die bereits verloren waren.
        </li>
        <li>
          <strong>Beachte die Transparenz, bevor du JPEG wählst.</strong> Wenn
          dein Bild transparente Bereiche hat, die du behalten willst, wähle PNG
          oder WebP: JPEG kann keinen Alphakanal speichern.
        </li>
        <li>
          <strong>Probiere für das Web zuerst WebP.</strong> Es bietet das beste
          Verhältnis aus geringer Größe, Transparenzunterstützung und breiter
          Browser-Kompatibilität und ist damit ein sicherer Standard für die
          meisten Websites.
        </li>
        <li>
          <strong>Ändere die Größe beim Konvertieren.</strong> Wenn das Bild klein
          dargestellt wird, spart das Verkleinern seiner Abmessungen weit mehr als
          die Formatwahl allein: Nutze die integrierte Option zum Ändern der Größe
          oder den spezialisierten{" "}
          <Link href="/de/image-resizer">Bild-Resizer</Link>.
        </li>
        <li>
          <strong>Vergleiche, bevor du dich festlegst.</strong> Konvertiere
          dieselbe Quelle zu WebP und AVIF und prüfe die Dateigrößen und wie sie
          bei deiner Anzeigegröße aussehen; der Sieger variiert von Bild zu Bild.
        </li>
      </ul>
    </>
  ),
};
