import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Video-Kompressor — kostenlos im Browser",
  metaDescription:
    "Komprimiere MP4-, MOV-, WebM-, MKV- und AVI-Videos im Browser mit ffmpeg. Privat und im Browser: kein Upload, dein Video verlässt nie dein Gerät.",
  heading: "Video-Kompressor",
  intro: (
    <>
      Komprimiere MP4-, MOV-, WebM-, MKV- und AVI-Videos direkt in deinem Browser
      mit einer WebAssembly-Version von ffmpeg. Wähle eine Qualitätsvorlage, lege
      deinen Clip ab und lade ein kleineres H.264-MP4 herunter: Dein Material
      wird nie irgendwohin hochgeladen.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du ein Video",
    description:
      "Komprimiere Videos lokal in deinem Browser mit ffmpeg in vier Schritten.",
    steps: [
      {
        name: "Füge dein Video hinzu",
        text: "Ziehe eine Videodatei per Drag-and-drop in den Ablagebereich oder klicke, um sie auszuwählen. Für ein möglichst reibungsloses Erlebnis halte die Dateien unter etwa 150 MB.",
      },
      {
        name: "Wähle eine Qualitätsvorlage",
        text: "Wähle eine Vorlage oder justiere den CRF-Schieberegler fein. Niedrigere Vorlagen reduzieren Auflösung und Bitrate für deutlich kleinere Dateien.",
      },
      {
        name: "Lass es auf deinem Gerät codieren",
        text: "ffmpeg codiert das Video lokal neu zu H.264/MP4. Ein Fortschrittsbalken zeigt den Stand an: Größere oder längere Clips brauchen mehr Zeit.",
      },
      {
        name: "Lade das Ergebnis herunter",
        text: "Speichere das kleinere MP4. Wenn das Ergebnis nicht kleiner ist, war deine Datei bereits effizient: Probiere eine niedrigere Qualität oder Auflösung und starte erneut.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine Videos auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Die gesamte Komprimierung läuft in deinem Browser mit einer
          WebAssembly-Version von ffmpeg. Dein Video wird in den Arbeitsspeicher
          geladen, auf deinem eigenen Rechner neu codiert und dir direkt
          zurückgegeben. Es wird nie etwas hochgeladen, und es gibt keinen
          Server, der dein Material speichern könnte.
        </>
      ),
      text: "Nein. Die gesamte Komprimierung läuft in deinem Browser mit einer WebAssembly-Version von ffmpeg. Dein Video wird in den Arbeitsspeicher geladen, auf deinem eigenen Rechner neu codiert und dir zurückgegeben. Es wird nichts hochgeladen, und es gibt keinen Server, der dein Material speichern könnte.",
    },
    {
      q: "Ist der Video-Kompressor wirklich kostenlos?",
      a: (
        <>
          Ja: Er ist komplett kostenlos, ohne Registrierung, ohne Wasserzeichen
          und ohne Gebühren pro Datei. Da die gesamte Arbeit auf deinem Gerät
          stattfindet, gibt es keine Serverkosten, die umgelegt werden müssten.
          Die Seite finanziert sich über dezente Werbung.
        </>
      ),
      text: "Ja. Er ist komplett kostenlos, ohne Registrierung, ohne Wasserzeichen und ohne Gebühren pro Datei. Da die gesamte Arbeit auf deinem Gerät stattfindet, gibt es keine Serverkosten, die umgelegt werden müssten. Die Seite finanziert sich über dezente Werbung.",
    },
    {
      q: "Verringert das Komprimieren die Qualität meines Videos?",
      a: (
        <>
          Die Videokomprimierung ist verlustbehaftet, daher gehen einige Details
          verloren. Der CRF-Schieberegler bestimmt, wie aggressiv das ist: Bei
          etwa 23-28 sieht es bei den meisten Aufnahmen dem Original sehr ähnlich.
          Das Herunterskalieren der Auflösung (zum Beispiel von 4K auf 1080p)
          spart am meisten Speicher und hält das Bild bei normalen Betrachtungs-
          größen scharf.
        </>
      ),
      text: "Die Videokomprimierung ist verlustbehaftet, daher gehen einige Details verloren. Der CRF-Schieberegler bestimmt, wie aggressiv das ist; bei etwa 23-28 sieht es bei den meisten Aufnahmen dem Original sehr ähnlich. Das Herunterskalieren der Auflösung (zum Beispiel von 4K auf 1080p) spart am meisten Speicher und hält das Bild bei normalen Größen scharf.",
    },
    {
      q: "Was ist die maximale Dateigröße, die ich komprimieren kann?",
      a: (
        <>
          Es gibt keine feste Grenze, aber da alles in deinem Browser mit
          einsträngigem ffmpeg läuft, empfehlen wir Dateien unter etwa{" "}
          <strong>150&nbsp;MB</strong>. Große oder lange Videos verbrauchen viel
          Speicher und können langsam sein, und sie können auf Smartphones oder
          älteren Laptops mit wenig RAM ganz fehlschlagen. Schneide große Clips
          vorher zu oder komprimiere sie im Browser eines Desktop-Computers.
        </>
      ),
      text: "Es gibt keine feste Grenze, aber da alles in deinem Browser mit einsträngigem ffmpeg läuft, empfehlen wir Dateien unter etwa 150 MB. Große oder lange Videos verbrauchen viel Speicher, können langsam sein und auf Smartphones oder älteren Laptops mit wenig RAM ganz fehlschlagen. Schneide große Clips vorher zu oder nutze den Browser eines Desktop-Computers.",
    },
    {
      q: "Warum ist die Videokomprimierung im Browser langsamer als auf anderen Websites?",
      a: (
        <>
          Die meisten Online-Kompressoren laden deine Datei auf einen leistungs-
          starken Mehrkern-Server hoch, der die Codierung für dich übernimmt.
          Dieses Tool macht das bewusst nicht: Es führt ffmpeg lokal aus, damit
          dein Video privat bleibt. Ein einzelner Browser-Thread ist langsamer
          als eine Serverfarm, daher können ein paar Minuten Material eine Weile
          dauern. Dieser Kompromiss verschafft dir vollständige Privatsphäre.
        </>
      ),
      text: "Die meisten Online-Kompressoren laden deine Datei auf einen leistungsstarken Mehrkern-Server hoch, der sie für dich codiert. Dieses Tool macht das bewusst nicht; es führt ffmpeg lokal aus, damit dein Video privat bleibt. Ein einzelner Browser-Thread ist langsamer als eine Serverfarm, daher können ein paar Minuten Material eine Weile dauern. Dieser Kompromiss verschafft dir vollständige Privatsphäre.",
    },
    {
      q: "In welchem Format kommt das komprimierte Video heraus?",
      a: (
        <>
          Das Ergebnis ist <strong>H.264-Video in einem MP4-Container</strong>,
          unabhängig davon, ob deine Eingabe MOV, WebM, MKV oder AVI war.
          H.264/MP4 läuft auf praktisch jedem Smartphone, Browser, Fernseher und
          jeder Schnitt-App, daher ist das Ergebnis die sicherste Wahl zum Teilen
          und Hochladen.
        </>
      ),
      text: "Das Ergebnis ist H.264-Video in einem MP4-Container, unabhängig davon, ob deine Eingabe MOV, WebM, MKV oder AVI war. H.264/MP4 läuft auf praktisch jedem Smartphone, Browser, Fernseher und jeder Schnitt-App, daher ist das Ergebnis die sicherste Wahl zum Teilen und Hochladen.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum Video im Browser komprimieren?</h2>
      <p>
        Video ist mit Abstand das schwerste Medium, mit dem die meisten Menschen
        zu tun haben. Eine Minute 4K-Material vom Smartphone kann hunderte
        Megabyte umfassen, was zu groß zum Mailen, umständlich zum Hochladen und
        schnell dabei ist, den Cloud-Speicher und die Foto-Mediathek des Handys
        zu füllen. Das Komprimieren eines Clips kann seine Größe um die Hälfte
        oder mehr verringern und ihn dabei perfekt ansehbar halten, was es
        einfach macht, ihn in Chat-Apps zu teilen, an eine Nachricht anzuhängen
        oder auf einer Seite mit Upload-Limit zu veröffentlichen.
      </p>
      <p>
        Was dieses Tool besonders macht, ist, <strong>wo</strong> die Arbeit
        stattfindet. Dein Rohmaterial enthält oft private Momente: Familie, dein
        Zuhause, deinen Arbeitsplatz, Dokumente auf dem Bildschirm. Ein typischer
        Online-Kompressor lädt all das auf einen entfernten Server hoch. Hier
        wird das Video vollständig innerhalb deines Browser-Tabs decodiert, neu
        codiert und neu gespeichert, sodass es nie durch das Internet reist.
        Sobald die Seite geladen ist, kannst du sogar deine Verbindung trennen,
        und es komprimiert trotzdem weiter.
      </p>
      <p>
        Es gibt viele alltägliche Gründe, zu einer kleineren Datei zu greifen.
        Messaging-Apps und E-Mail-Anbieter begrenzen Anhänge, oft auf 25&nbsp;MB
        oder weniger, sodass eine schnelle Neucodierung den Unterschied zwischen
        einer Nachricht, die gesendet wird, und einer, die abprallt, ausmacht.
        Kursplattformen, Bewerbungsportale und Kontaktformulare lehnen häufig
        alles ab, was ein paar Megabyte übersteigt. Und wenn du Jahre von
        Familienclips archivierst, zahlt sich das Halbieren jeder Datei beim
        Speicher, den du nicht kaufen musst, vielfach aus.
      </p>

      <h2 id="how-it-works">
        Wie der Encoder im Browser funktioniert (und seine Grenzen)
      </h2>
      <p>
        Im Hintergrund führt dieses Tool <strong>ffmpeg</strong> aus, die
        Medien-Engine als Industriestandard, kompiliert zu WebAssembly, damit sie
        nativ in deinem Browser läuft. Das ist wirklich leistungsstark, bringt
        aber ehrliche Kompromisse mit sich, die du kennen solltest. Die Version
        ist <strong>einsträngig</strong>, sie kann die Codierung also nicht wie
        eine Desktop-Anwendung oder ein Cloud-Server über alle Kerne deiner CPU
        verteilen. Dadurch ist die Komprimierung hier <strong>langsamer</strong>{" "}
        als ein upload-basierter Dienst, der auf einer Mehrkernmaschine läuft,
        und ein paar Minuten Video können etwas Geduld erfordern.
      </p>
      <p>
        Sie ist außerdem <strong>speicherbegrenzt</strong>. Die ganze Datei muss
        während der Verarbeitung in den verfügbaren Speicher des Browsers passen,
        deshalb empfehlen wir, Eingaben unter etwa <strong>150&nbsp;MB</strong>{" "}
        zu halten. Sehr große oder sehr lange Videos können langsam sein und auf
        Smartphones oder älteren Laptops mit wenig RAM komplett fehlschlagen.
        Wenn du an eine Grenze stößt, schneide den Clip auf den Teil zu, den du
        brauchst, senke die Auflösung oder führe es im Browser eines
        Desktop-Computers mit mehr Speicher aus. Das sind echte Einschränkungen
        davon, alles lokal zu erledigen: Der Vorteil ist, dass dein Video dir
        gehört.
      </p>
      <p>
        Ein paar Gewohnheiten machen die lokale Codierung deutlich angenehmer.
        Schließe vor dem Start andere ressourcenhungrige Tabs und Anwendungen,
        damit der Browser Raum zum Arbeiten hat. Halte den Tab im Vordergrund:
        Manche Browser drosseln Tabs im Hintergrund, was eine lange Codierung ins
        Stocken bringen kann. Und gib ihm Zeit, ohne neu zu laden: Der
        Fortschrittsbalken ist echt, und ein Neuladen mitten in der Codierung
        wirft die bis dahin geleistete Arbeit weg.
      </p>

      <h2 id="settings">CRF, Auflösung und Audio: die drei Hebel</h2>
      <p>
        Drei Einstellungen bestimmen deine endgültige Dateigröße. Der größte
        einzelne Hebel ist die <strong>Auflösung</strong>. Das Herunterskalieren
        von 4K auf 1080p oder von 1080p auf 720p entfernt eine enorme Anzahl von
        Pixeln aus jedem Einzelbild und ist meist unsichtbar, außer du siehst es
        aus der Nähe auf einem großen Bildschirm an. Wenn du einen Clip nur für
        ein Smartphone oder eine Web-Einbettung brauchst, verkleinert das
        Herunterskalieren ihn weit mehr als das alleinige Anpassen der Qualität.
      </p>
      <p>
        Der zweite Hebel ist der <strong>CRF</strong> (Constant Rate Factor), die
        Qualitätssteuerung für H.264. Niedrigere Zahlen bedeuten höhere Qualität
        und größere Dateien; höhere Zahlen bedeuten kleinere Dateien mit
        sichtbarerer Komprimierung. Ein CRF von <strong>23-28</strong> ist der
        praktische Idealbereich für die meisten Aufnahmen. Der dritte Hebel ist
        die <strong>Audio-Bitrate</strong>: Sprache klingt bei niedriger Bitrate
        gut, während Musik von mehr profitiert. Wenn in deinem Video vor allem
        geredet wird, spart das Reduzieren der Audio-Bitrate Platz ohne
        merklichen Verlust. Die Standardausgabe ist{" "}
        <strong>H.264 in einem MP4-Container</strong>, gerade weil sie fast
        überall abspielbar ist.
      </p>
      <ul>
        <li>
          <strong>Passe die Auflösung dem Ort an, an dem es angesehen wird.</strong>{" "}
          Ein Clip, der für ein Smartphone oder einen kleinen Web-Player bestimmt
          ist, gewinnt nichts durch 4K; 720p oder 1080p sehen identisch aus und
          wiegen einen Bruchteil.
        </li>
        <li>
          <strong>Justiere den CRF, bevor du etwas anderes anfasst.</strong> Von
          23 auf 26 zu gehen, halbiert oft die Größe bei einem Detailverlust, den
          die meisten Zuschauer nie bemerken. Vergleiche das Ergebnis, bevor du
          aggressiver wirst.
        </li>
        <li>
          <strong>Komprimiere keinen bereits komprimierten Clip erneut.</strong>{" "}
          Jeder verlustbehaftete Durchlauf wirft mehr Details weg. Wenn das Tool
          meldet, dass das Ergebnis nicht kleiner ist, ist deine Datei bereits
          effizient codiert: Lass sie so, anstatt sie weiter zu verschlechtern.
        </li>
        <li>
          <strong>Schneide zuerst zu für große Einsparungen.</strong> Das
          Wegschneiden von Leerlauf am Anfang und Ende eines Clips entfernt ganze
          Einzelbilder, was jede Qualitätseinstellung beim Verkleinern der Datei
          übertrifft.
        </li>
      </ul>

      <h2 id="codecs">Ein kurzes Wort zu Video-Codecs</h2>
      <p>
        Eine &bdquo;Videodatei&ldquo; besteht in Wirklichkeit aus zwei Dingen:
        einem <strong>Codec</strong>, der die Pixel codiert (wie H.264, VP9 oder
        AV1), und einem <strong>Container</strong>-Format, das ihn umhüllt (MP4,
        WebM, MOV, MKV). Deshalb kann dasselbe H.264-Video in einem MP4 oder einem
        MOV stecken. Wir geben H.264/MP4 aus, weil es die breiteste Hardware- und
        Software-Unterstützung aller modernen Codecs hat: Fast jedes Gerät, das im
        letzten Jahrzehnt gebaut wurde, kann es reibungslos decodieren. Mehr
        darüber, wie Codecs und Container zusammenpassen, kannst du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Leitfaden zu Web-Video-Codecs
        </a>{" "}
        nachlesen.
      </p>
      <p>
        Diese Seite ist die Zentrale für all unsere Video-Tools. Wenn du das
        Format deiner Datei kennst, haben die speziellen Seiten darauf
        zugeschnittene Tipps: Nutze den{" "}
        <Link href="/de/compress-mp4">MP4-Kompressor</Link> für Material, das
        bereits in MP4 vorliegt, oder den{" "}
        <Link href="/de/compress-mov">Kompressor für MOV, WebM, MKV und AVI</Link>{" "}
        für Clips von Kameras, Bildschirmrekordern und anderen Apps. Wenn du nur
        den Ton verkleinern musst (einen Podcast, eine Sprachnotiz oder eine
        Musikdatei), erledigt der{" "}
        <Link href="/de/audio-compressor">Audio-Kompressor</Link> das, ohne
        irgendein Video neu zu codieren.
      </p>
    </>
  ),
};
