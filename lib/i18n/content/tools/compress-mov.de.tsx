import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "MOV, WebM, MKV & AVI Video kostenlos komprimieren",
  metaDescription:
    "Komprimiere MOV-, WebM-, MKV- und AVI-Videos privat im Browser. Wandle sie in effizientes H.264-MP4 um, ohne Upload: Nichts verlässt dein Gerät.",
  heading: "MOV-, WebM-, MKV- & AVI-Kompressor",
  intro: (
    <>
      Komprimiere MOV-, WebM-, MKV- und AVI-Videos direkt in deinem Browser.
      Jeder Clip wird mit dem effizienten H.264 neu codiert und als kompaktes,
      universell kompatibles MP4 gespeichert – alles auf deinem eigenen Gerät und
      ohne dass jemals etwas hochgeladen wird.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du MOV, WebM, MKV & AVI",
    description:
      "Komprimiere MOV-, WebM-, MKV- und AVI-Video in vier Schritten lokal in deinem Browser zu H.264-MP4.",
    steps: [
      {
        name: "Video hinzufügen",
        text: "Zieh eine MOV-, WebM-, MKV- oder AVI-Datei per Drag-and-drop in den Ablagebereich oder klicke, um sie auszuwählen. Kurze Clips und Bildschirmaufnahmen werden am schnellsten verarbeitet.",
      },
      {
        name: "Qualitätsvoreinstellung wählen",
        text: "Wähle eine Voreinstellung oder feinjustiere den CRF-Regler und die Zielauflösung. Bei einem CRF von etwa 23–28 sehen Clips hervorragend aus und werden dennoch stark verkleinert.",
      },
      {
        name: "Lass ffmpeg auf deinem Gerät transcodieren",
        text: "Das Video wird mit einer WebAssembly-Version von ffmpeg zu H.264-MP4 neu codiert. Ein Fortschrittsbalken zeigt, dass die Arbeit lokal abläuft – nichts wird irgendwohin gesendet.",
      },
      {
        name: "MP4 herunterladen",
        text: "Speichere das kleinere MP4, sobald es fertig ist. Falls das Ergebnis nicht kleiner ist, weist dich das Tool darauf hin, damit du Qualität oder Auflösung senken und es erneut versuchen kannst.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine MOV-, WebM-, MKV- oder AVI-Dateien auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Jedes Video wird lokal in deinem Browser mit einer
          WebAssembly-Version von ffmpeg verarbeitet. Deine Dateien verlassen nie
          dein Gerät, und es gibt keinen Server, auf den sie hochgeladen werden
          könnten: Sobald die Seite geladen ist, kannst du sogar offline gehen,
          und es funktioniert weiterhin.
        </>
      ),
      text: "Nein. Jedes Video wird lokal in deinem Browser mit einer WebAssembly-Version von ffmpeg verarbeitet. Deine Dateien verlassen nie dein Gerät, und es gibt keinen Server, auf den sie hochgeladen werden könnten. Sobald die Seite geladen ist, kannst du offline gehen, und es funktioniert weiterhin.",
    },
    {
      q: "Ist dieser Video-Kompressor wirklich kostenlos?",
      a: (
        <>
          Ja – er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und
          ohne Gebühren pro Datei. Die einzigen praktischen Grenzen ergeben sich
          aus dem Speicher und der Geduld deines Geräts, da alles auf deiner
          eigenen Hardware läuft. Die Seite finanziert sich über dezente
          Werbung.
        </>
      ),
      text: "Ja. Er ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Gebühren pro Datei. Die einzigen praktischen Grenzen ergeben sich aus dem Speicher und der Geduld deines Geräts, da alles auf deiner eigenen Hardware läuft. Die Seite finanziert sich über dezente Werbung.",
    },
    {
      q: "Verringert das Komprimieren die Qualität meines Videos?",
      a: (
        <>
          Videokompression ist verlustbehaftet, daher werden einige Details
          verworfen, um Platz zu sparen. Mit dem Qualitätsregler (CRF) im Bereich
          23–28 sehen die meisten Clips bei normalen Anzeigegrößen praktisch
          identisch zur Quelle aus. Senke den CRF für höhere Detailtreue und
          größere Dateien oder erhöhe ihn für kleinere Dateien.
        </>
      ),
      text: "Videokompression ist verlustbehaftet, daher werden einige Details verworfen, um Platz zu sparen. Mit dem Qualitätsregler (CRF) im Bereich 23–28 sehen die meisten Clips praktisch identisch zur Quelle aus. Senke den CRF für höhere Detailtreue und größere Dateien oder erhöhe ihn für kleinere Dateien.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich komprimieren kann?",
      a: (
        <>
          Es gibt kein festes Limit, aber da ffmpeg in deinem Browser
          einzelthreadig läuft, können sehr große oder lange Videos (über etwa
          150 MB) langsam sein und auf Smartphones mit wenig Speicher fehlschlagen.
          Kurze Clips und Bildschirmaufnahmen funktionieren am besten; bei
          riesigen Dateien schneide sie zuerst zu oder nutze ein
          Desktop-Programm.
        </>
      ),
      text: "Es gibt kein festes Limit, aber da ffmpeg in deinem Browser einzelthreadig läuft, können sehr große oder lange Videos über etwa 150 MB langsam sein und auf Smartphones mit wenig Speicher fehlschlagen. Kurze Clips und Bildschirmaufnahmen funktionieren am besten; bei riesigen Dateien schneide sie zuerst zu oder nutze ein Desktop-Programm.",
    },
    {
      q: "Warum kommt mein MOV oder AVI als MP4 zurück?",
      a: (
        <>
          Um deine Datei zu verkleinern, codiert das Tool das Video mit H.264 neu
          und verpackt es in einen MP4-Container, der weitaus
          speichereffizienter und weitaus breiter unterstützt ist als QuickTime
          MOV oder das veraltete AVI. Das Ergebnis lässt sich auf praktisch jedem
          Smartphone, in jedem Browser und Player abspielen, meist in deutlich
          kleinerer Größe.
        </>
      ),
      text: "Um deine Datei zu verkleinern, codiert das Tool das Video mit H.264 neu und verpackt es in einen MP4-Container, der weitaus speichereffizienter und breiter unterstützt ist als QuickTime MOV oder das veraltete AVI. Das Ergebnis lässt sich auf praktisch jedem Smartphone, in jedem Browser und Player abspielen, meist in deutlich kleinerer Größe.",
    },
    {
      q: "Kann ich auch WebM- und MKV-Dateien komprimieren?",
      a: (
        <>
          Ja. Dieses Tool akzeptiert MOV, WebM, MKV und AVI und transcodiert sie
          alle zu H.264-MP4. WebM und MKV sind flexible Container, die viele
          Codecs aufnehmen können; die Umwandlung in MP4 liefert dir ein
          einziges, vorhersehbares Format, das überall abspielt, auch auf älteren
          Geräten und in Bearbeitungssoftware.
        </>
      ),
      text: "Ja. Dieses Tool akzeptiert MOV, WebM, MKV und AVI und transcodiert sie alle zu H.264-MP4. WebM und MKV sind flexible Container, die viele Codecs aufnehmen können; die Umwandlung in MP4 liefert dir ein einziges, vorhersehbares Format, das überall abspielt, auch auf älteren Geräten und in Bearbeitungssoftware.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum MOV-, WebM-, MKV- und AVI-Dateien so groß sind</h2>
      <p>
        Wenn du Video auf einem iPhone, einer Spiegelreflexkamera, einer GoPro
        oder mit einem Bildschirmrekorder aufnimmst, landest du oft bei riesigen
        Dateien: Ein paar Minuten Material können leicht mehrere Hundert Megabyte
        umfassen. Dafür gibt es gute Gründe. Smartphones und Kameras stellen
        Aufnahmegeschwindigkeit und Qualität über die Dateigröße, also nehmen sie
        mit hohen Bitraten, hohen Auflösungen und hohen Bildraten auf. Apple-Geräte
        speichern{" "}
        <strong>.mov</strong>-Dateien (QuickTime), Bildschirmrekorder erzeugen
        häufig <strong>.mkv</strong> oder <strong>.webm</strong>, und ältere
        Kameras sowie Windows-Tools geben nach wie vor <strong>.avi</strong> aus.
        Jede dieser Dateien kann um ein Vielfaches größer sein als zum Teilen oder
        Archivieren nötig.
      </p>
      <p>
        Große Videos sind unhandlich: Sie überschreiten die Anhangslimits von
        E-Mail und Chat, brauchen ewig zum Hochladen, füllen den Speicher von
        Smartphone und Cloud und verbrauchen mobile Daten. Sie mit einem modernen,
        effizienten Codec neu zu codieren kann die Größe drastisch reduzieren –
        oft um die Hälfte oder mehr – während das Material im Wesentlichen gleich
        aussieht. Da dieses Tool vollständig auf deinem Gerät läuft, bekommst du
        diese Einsparungen, ohne deine persönlichen Aufnahmen jemals an einen
        Server eines Drittanbieters zu übergeben.
      </p>
      <p>
        Privatsphäre ist der Grund, warum dieser letzte Punkt so wichtig ist.
        Heimvideos, vertrauliche Bildschirmaufnahmen, Aufnahmen deiner Kinder,
        Produktdemos, die du noch nicht angekündigt hast – das sind keine Dinge,
        die du auf den Servern eines unbekannten Unternehmens haben möchtest,
        nicht einmal vorübergehend. Herkömmliche Online-Videokompressoren laden
        deine gesamte Datei hoch, verarbeiten sie aus der Ferne und vertrauen
        darauf, dass du glaubst, sie sei danach gelöscht worden. Hier wird dein
        Video in den Speicher deines Browsers eingelesen, mit WebAssembly
        transcodiert und dir direkt zurückgegeben. Keine Netzwerkanfrage
        transportiert das Material, also gibt es nichts, was durchsickern,
        protokolliert oder aufbewahrt werden könnte.
      </p>

      <h2 id="container-vs-codec">
        Container vs. Codec: was die Größe wirklich bestimmt
      </h2>
      <p>
        Ein häufiger Punkt der Verwirrung ist der Unterschied zwischen einem{" "}
        <strong>Container</strong> und einem <strong>Codec</strong>. Die
        Dateiendung – .mov, .mkv, .webm, .avi, .mp4 – benennt den Container: eine
        Hülle, die den Videostream, den Audiostream, Untertitel und Metadaten in
        einer Datei bündelt. Der Codec ist der Algorithmus, der Bild und Ton
        innerhalb dieser Hülle tatsächlich codiert. Derselbe Container kann viele
        verschiedene Codecs aufnehmen, und genau deshalb können zwei .mkv-Dateien
        höchst unterschiedliche Größen und Kompatibilitäten haben.
      </p>
      <p>
        Diese Trennung ist wichtig, weil der Codec und nicht der Container den
        größten Teil der Dateigröße bestimmt. Ein MOV von einem iPhone nutzt
        vielleicht den effizienten HEVC-Codec, während ein AVI von einem alten
        Camcorder einen veralteten, aufgeblähten verwenden könnte. Container
        unterscheiden sich auch in der Unterstützung: MKV und WebM sind flexibel
        und offen, werden aber nicht überall nativ abgespielt, und AVI ist
        weitgehend ein veraltetes Format. Eine verständliche Aufschlüsselung, wie
        die gängigen Web-Container mit ihren Codecs zusammenhängen, findest du im{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leitfaden zu Medien-Containerformaten von MDN
        </a>
        .
      </p>
      <p>
        Praktisch gesehen ist das der Grund, warum das bloße Umbenennen der
        Dateiendung sie nie kleiner macht und meist die Wiedergabe zerstört: Du
        würdest die Hülle neu beschriften, ohne die Daten darin anzurühren. Echte
        Kompression bedeutet, den ursprünglichen Videostream zu decodieren und ihn
        mit einem effizienteren Codec auf einer gewählten Qualitätsstufe neu zu
        codieren. Genau das geschieht hier: Dein MOV, WebM, MKV oder AVI wird
        vollständig decodiert und dann als frisches H.264-MP4 neu aufgebaut,
        statt nur umverpackt zu werden.
      </p>

      <h2 id="mp4-h264">Warum die Umwandlung in H.264-MP4 hilft</h2>
      <p>
        Dieses Tool transcodiert alles, was du ihm gibst, zu{" "}
        <strong>H.264</strong>-Video innerhalb eines{" "}
        <strong>MP4</strong>-Containers. Hier gibt es zwei große Vorteile. Erstens
        die <strong>Größe</strong>: Das Neucodieren mit H.264 auf einer sinnvollen
        Qualitätsstufe ermöglicht es dir, die überschüssige Bitrate herauszunehmen,
        die Kameras und Rekorder einbacken, und du kannst optional die Auflösung
        deckeln, um noch mehr abzuspecken. Zweitens, und genauso wichtig, die{" "}
        <strong>Kompatibilität</strong>: H.264-MP4 kommt einem universellen
        Videoformat am nächsten. Es spielt in jedem modernen Browser, auf
        Smartphones und Tablets, auf Smart-TVs und in Bearbeitungssoftware – ohne
        Codec-Pakete oder Konvertierungen auf der Gegenseite.
      </p>
      <p>
        Die Qualität wird über einen CRF-Wert (Constant Rate Factor) gesteuert.
        Niedrigere Zahlen bedeuten höhere Qualität und größere Dateien; höhere
        Zahlen bedeuten kleinere Dateien mit sichtbarerer Kompression. Für die
        meisten Clips ist ein CRF um <strong>23–28</strong> der ideale Punkt, der
        bei einem Bruchteil der Größe nahezu identisch zur Quelle aussieht. Wenn
        dein Video bereits ein effizient codiertes MP4 ist, gewinnst du durch
        erneutes Komprimieren womöglich nicht viel: In diesem Fall ist unser{" "}
        <Link href="/de/compress-mp4">MP4-Kompressor</Link> mit einem höheren CRF
        oder einer niedrigeren Zielauflösung der bessere Hebel.
      </p>

      <h2 id="tips">Tipps, Grenzen und was dich erwartet</h2>
      <p>
        Alles geschieht in deinem Browser mit einer WebAssembly-Version von
        ffmpeg, was wirklich privat ist, aber mit einer ehrlichen Einschränkung
        einhergeht: Es läuft <strong>einzelthreadig</strong>. Das bedeutet, dass
        es nicht alle CPU-Kerne nutzen kann, wie es ein nativer Desktop-Encoder
        tut, also brauchen lange oder hochauflösende Videos merklich länger und
        können Geräte mit wenig Speicher belasten. Behalte diese Hinweise im
        Hinterkopf, um die besten Ergebnisse zu erzielen:
      </p>
      <ul>
        <li>
          <strong>Bevorzuge kürzere Clips.</strong> Ein oder zwei Minuten Material
          komprimieren schnell. Schneide bei sehr langen Aufnahmen vor dem
          Komprimieren auf den Teil zu, den du wirklich brauchst.
        </li>
        <li>
          <strong>Senke die Auflösung für die größten Einsparungen.</strong> Eine
          4K-Bildschirmaufnahme, die auf 1080p herunterskaliert wird, schrumpft
          weitaus stärker als Qualitätsanpassungen allein, und das ohne sichtbaren
          Verlust auf den meisten Bildschirmen.
        </li>
        <li>
          <strong>Nutze für schwere Aufgaben einen Desktop-Rechner.</strong> Große
          Dateien (über etwa 150&nbsp;MB) sind auf Smartphones langsamer; ein
          Laptop oder Desktop mit mehr Speicher bewältigt sie deutlich
          komfortabler.
        </li>
        <li>
          <strong>Wähle das richtige Tool für die Aufgabe.</strong> Brauchst du
          eine schnelle Übersicht aller Formate an einem Ort? Nutze den{" "}
          <Link href="/de/video-compressor">Video-Kompressor</Link>. Arbeitest du
          stattdessen mit Audiodateien? Probiere den{" "}
          <Link href="/de/audio-compressor">Audio-Kompressor</Link>.
        </li>
        <li>
          <strong>Überprüfe das Ergebnis erneut.</strong> Falls die Ausgabe
          jemals in gleicher Größe oder größer zurückkommt, war deine Quelle
          bereits effizient codiert: Erhöhe den CRF oder senke die Auflösung und
          führe es erneut aus, statt eine Datei zu akzeptieren, die nicht
          geschrumpft ist.
        </li>
      </ul>
    </>
  ),
};
