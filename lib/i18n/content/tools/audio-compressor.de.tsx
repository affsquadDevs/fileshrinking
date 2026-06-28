import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Audio-Kompressor — MP3 & AAC gratis online",
  metaDescription:
    "Komprimiere MP3, WAV, AAC, M4A, OGG und FLAC im Browser. Bitrate wählen, kein Upload, keine Anmeldung – die Dateien verlassen dein Gerät nie.",
  heading: "Audio-Kompressor",
  intro: (
    <>
      Verkleinere MP3-, WAV-, AAC-, M4A-, OGG- und FLAC-Dateien direkt in deinem
      Browser. Recodiere mit der von dir gewählten Bitrate zu MP3 oder AAC und
      lade in Sekunden eine schlankere Spur herunter – es wird nie etwas
      hochgeladen.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du eine Audiodatei",
    description:
      "Komprimiere MP3, WAV, AAC und mehr lokal in deinem Browser in vier Schritten.",
    steps: [
      {
        name: "Audio hinzufügen",
        text: "Ziehe deine Audiodateien per Drag-and-drop in den Ablagebereich oder klicke, um sie auszuwählen. MP3, WAV, AAC, M4A, OGG und FLAC werden alle akzeptiert.",
      },
      {
        name: "Ausgabeformat wählen",
        text: "Wähle MP3 für maximale Kompatibilität oder AAC (.m4a) für etwas bessere Qualität bei gleicher Größe.",
      },
      {
        name: "Bitrate auswählen",
        text: "Stelle die Bitrate ein, um das Verhältnis von Größe zu Qualität zu steuern. 128 kbps eignet sich für Musik; geh für Sprache und Podcasts auf 96 kbps herunter, um noch mehr zu sparen.",
      },
      {
        name: "Datei herunterladen",
        text: "Jede Spur wird auf deinem Gerät mit FFmpeg recodiert. Du siehst die ursprüngliche Größe, die neue Größe und den prozentualen Ersparnis-Anteil und lädst dann das Ergebnis herunter.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine Audiodateien auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Jede Spur wird lokal in deinem Browser mit einer in WebAssembly
          kompilierten Version von FFmpeg neu codiert. Dein Audio verlässt nie
          dein Gerät, und es gibt keinen Server, der es empfängt: Sobald die
          Seite geladen ist, kannst du dich sogar vom Internet trennen, und es
          funktioniert weiterhin.
        </>
      ),
      text: "Nein. Jede Spur wird lokal in deinem Browser mit einer in WebAssembly kompilierten Version von FFmpeg neu codiert. Dein Audio verlässt nie dein Gerät, und es gibt keinen Server, der es empfängt. Sobald die Seite geladen ist, kannst du dich vom Internet trennen, und es funktioniert weiterhin.",
    },
    {
      q: "Ist der Audio-Kompressor wirklich kostenlos?",
      a: (
        <>
          Ja: Er ist völlig kostenlos, ohne Konto, ohne Wasserzeichen und ohne
          Begrenzung der Dateianzahl. Die einzige praktische Grenze ist der
          Arbeitsspeicher deines Geräts. Die Website finanziert sich über
          dezente Werbung.
        </>
      ),
      text: "Ja. Er ist völlig kostenlos, ohne Konto, ohne Wasserzeichen und ohne Begrenzung der Dateianzahl. Die einzige praktische Grenze ist der Arbeitsspeicher deines Geräts. Die Website finanziert sich über dezente Werbung.",
    },
    {
      q: "Verringert das Komprimieren die Audioqualität?",
      a: (
        <>
          MP3 und AAC sind verlustbehaftete Formate, daher werden einige
          unhörbare Details verworfen, um die Datei zu verkleinern. Bei 128 kbps
          können die meisten Hörer Musik nicht vom Original unterscheiden, und 96
          kbps reichen für Sprache oder Podcasts mehr als aus. Wähle eine höhere
          Bitrate, um näher an der Quelle zu bleiben.
        </>
      ),
      text: "MP3 und AAC sind verlustbehaftete Formate, daher werden einige unhörbare Details verworfen, um die Datei zu verkleinern. Bei 128 kbps können die meisten Hörer Musik nicht vom Original unterscheiden, und 96 kbps reichen für Sprache oder Podcasts mehr als aus. Wähle eine höhere Bitrate, um näher an der Quelle zu bleiben.",
    },
    {
      q: "Wie groß darf eine Datei maximal sein, die ich komprimieren kann?",
      a: (
        <>
          Es gibt kein festes Limit: Es hängt vom verfügbaren Arbeitsspeicher
          deines Geräts ab. Typische Songs, Podcasts und Sprachnotizen werden in
          Sekunden verarbeitet. Sehr große unkomprimierte WAV-Dateien (mehrere
          Hundert Megabyte) funktionieren ebenfalls, brauchen aber mehr Speicher
          und dauern länger, weil der Encoder in deinem Browser auf einem
          einzigen Thread läuft.
        </>
      ),
      text: "Es gibt kein festes Limit; es hängt vom verfügbaren Arbeitsspeicher deines Geräts ab. Typische Songs, Podcasts und Sprachnotizen werden in Sekunden verarbeitet. Sehr große unkomprimierte WAV-Dateien von mehreren Hundert Megabyte funktionieren ebenfalls, brauchen aber mehr Speicher und dauern länger, weil der Encoder in deinem Browser auf einem einzigen Thread läuft.",
    },
    {
      q: "Welche Formate kann ich komprimieren und was bekomme ich zurück?",
      a: (
        <>
          Du kannst MP3, WAV, AAC, M4A, OGG oder FLAC ablegen. Das Tool codiert
          mit der von dir gewählten Bitrate zu MP3 (mit dem LAME-Encoder) oder
          AAC (.m4a) neu, sodass die Ausgabe eine breit kompatible Datei ist, die
          sich überall abspielen lässt.
        </>
      ),
      text: "Du kannst MP3, WAV, AAC, M4A, OGG oder FLAC ablegen. Das Tool codiert mit der von dir gewählten Bitrate zu MP3 (mit dem LAME-Encoder) oder AAC (.m4a) neu, sodass die Ausgabe eine breit kompatible Datei ist, die sich überall abspielen lässt.",
    },
    {
      q: "Sollte ich MP3 oder AAC wählen?",
      a: (
        <>
          Beide sind hervorragend. MP3 ist das Format mit der größten
          universellen Kompatibilität und eine sichere Standardwahl zum Teilen.
          AAC klingt bei gleicher Bitrate in der Regel etwas besser und ist das
          native Format von Apple-Geräten und der meisten Streaming-Dienste. Wenn
          du unsicher bist, ist MP3 mit 128 kbps eine zuverlässige Allround-Wahl.
        </>
      ),
      text: "Beide sind hervorragend. MP3 ist das Format mit der größten universellen Kompatibilität und eine sichere Standardwahl zum Teilen. AAC klingt bei gleicher Bitrate in der Regel etwas besser und ist nativ für Apple-Geräte und die meisten Streaming-Dienste. Wenn du unsicher bist, ist MP3 mit 128 kbps eine zuverlässige Allround-Wahl.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum Audiodateien komprimieren?</h2>
      <p>
        Audiodateien können überraschend schwer sein. Ein paar Minuten
        unkomprimiertes WAV können Dutzende Megabyte erreichen, eine
        Podcast-Folge mit hoher Bitrate kann einen Download aufblähen, und
        verlustfreie FLAC-Alben füllen mühelos eine Festplatte. Ob du eine
        Sprachnotiz per E-Mail verschickst, einen Podcast hochlädst, einen Song
        an eine Nachricht anhängst oder Platz auf dem Telefon sparst – das
        Verkleinern der Datei macht alles schneller und günstiger im Verschieben
        und Speichern, bei sinnvollen Einstellungen meist ohne hörbaren
        Unterschied.
      </p>
      <p>
        Da dieses Tool vollständig auf deinem Gerät läuft, ist es zugleich der
        private Weg, es zu tun. Die meisten Online-Audio-Kompressoren laden deine
        Aufnahme auf einen entfernten Server hoch, verarbeiten sie dort und
        senden sie zurück – das bedeutet, dass eine Kopie deiner Stimme oder
        Musik auf der Maschine einer anderen Person liegt. Hier wird deine Datei
        in den Speicher geladen, mit einer in WebAssembly kompilierten Version
        von FFmpeg neu codiert und dir direkt zurückgegeben. Sie berührt nie ein
        Netzwerk.
      </p>
      <p>
        Dieses ausschließlich lokale Design hat über die Privatsphäre hinaus
        praktische Vorteile. Es gibt keine Upload- oder Download-Wartezeiten,
        während die Datei das Internet durchquert, keine Warteschlange hinter den
        Aufträgen anderer Leute und kein Größenlimit, das ein Server vorgibt, den
        du nicht kontrollierst. Beim ersten Gebrauch lädt das Tool die
        FFmpeg-Engine einmal herunter; danach wird dieselbe Engine für jede Datei
        wiederverwendet, und selbst wiederholte Komprimierungen bleiben schnell,
        weil die gesamte Arbeit auf deinem eigenen Prozessor stattfindet.
      </p>

      <h2 id="bitrate">Bitrate gegen Qualität: wie du wählst</h2>
      <p>
        Der mit Abstand größte Hebel für die Größe einer Audiodatei ist die{" "}
        <strong>Bitrate</strong> – die Anzahl der Kilobit, die zum Speichern
        jeder Sekunde Klang verwendet werden, geschrieben als kbps. Halbiere die
        Bitrate, und du halbierst ungefähr die Datei. Der Haken ist, dass
        niedrigere Bitraten mehr Details verwerfen, daher besteht das Ziel darin,
        die niedrigste Bitrate zu wählen, bei der deine Ohren den Unterschied noch
        nicht bemerken.
      </p>
      <p>
        Die Bitrate hängt auch mit der Art des Audios zusammen, das du codierst.
        Dichte, komplexe Musik – volle Mixe, Becken, verzerrte Gitarren – lässt
        sich schwerer komprimieren und profitiert von einer höheren Bitrate,
        während eine einfache Sprachaufnahme selbst bei starker Komprimierung klar
        bleibt. Es gibt keine einzelne &bdquo;richtige&ldquo; Zahl; die beste
        Einstellung ist die, die auf den Lautsprechern oder Kopfhörern sauber
        klingt, die deine Hörer tatsächlich verwenden werden. Eine schnelle
        Methode zur Entscheidung ist, denselben Clip mit zwei Bitraten zu
        exportieren und sie direkt hintereinander zu vergleichen. Nimm diese als
        Ausgangspunkte:
      </p>
      <ul>
        <li>
          <strong>256 kbps</strong> – nahezu transparent für Musik; wähle dies,
          wenn du die kleinste Datei willst, die immer noch im Wesentlichen wie
          das Original klingt.
        </li>
        <li>
          <strong>192 kbps</strong> – ausgezeichnete Qualität für Musik mit einer
          deutlichen Größenersparnis gegenüber der Quelle.
        </li>
        <li>
          <strong>128 kbps</strong> – der klassische Allrounder. Für die meisten
          Hörer ist sie auf alltäglichen Lautsprechern und Kopfhörern von Musik
          in CD-Qualität nicht zu unterscheiden, bei einem Bruchteil der Größe.
        </li>
        <li>
          <strong>96 kbps</strong> – ideal für gesprochene Inhalte wie Hörbücher,
          Podcasts und Sprachnotizen, bei denen es keine Musik zu bewahren gibt.
        </li>
      </ul>
      <p>
        Eine wichtige Einschränkung: Sowohl MP3 als auch AAC sind{" "}
        <strong>verlustbehaftet</strong>, und das erneute Codieren einer
        verlustbehafteten Datei wirft immer ein wenig mehr weg. Komprimiere immer
        von der hochwertigsten Quelle, die du hast, und codiere nie eine Datei,
        die du bereits mit niedriger Bitrate komprimiert hast, auf eine höhere
        hoch – das bläht nur die Größe auf, ohne verlorene Details
        wiederherzustellen.
      </p>
      <p>
        Es hilft auch zu wissen, was eine angestrebte Dateigröße in der Praxis
        bedeutet. Die Bitrate entspricht ungefähr der Dateigröße geteilt durch
        die Dauer, sodass ein einminütiger Clip bei 128 kbps rund ein Megabyte
        ergibt und ein typischer drei- bis vierminütiger Song bei gleicher
        Bitrate bei etwa drei bis vier Megabyte landet. Wenn du eine harte
        Größengrenze einhalten musst – ein Limit für E-Mail-Anhänge, ein
        Upload-Formular oder eine Messaging-App –, teile dieses Limit durch die
        Länge der Spur, um die Bitrate abzuschätzen, die du dir leisten kannst,
        und runde dann auf das nächstgelegene Preset ab.
      </p>

      <h2 id="formats">MP3, AAC, WAV und FLAC erklärt</h2>
      <p>
        Audioformate teilen sich in zwei Lager. <strong>Verlustfreie</strong>{" "}
        Formate wie WAV und FLAC behalten jede Probe der Originalaufnahme – WAV
        speichert sie unkomprimiert (riesig), während FLAC sie kleiner packt,
        ohne etwas zu verlieren. <strong>Verlustbehaftete</strong> Formate wie
        MP3, AAC und OGG entfernen dauerhaft den Klang, den das menschliche Ohr am
        wenigsten wahrnehmen dürfte, und so erreichen sie drastische
        Größenreduktionen. Einen klaren technischen Überblick über diese Codecs
        findest du in{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDNs Leitfaden zu Web-Audio-Codecs
        </a>
        .
      </p>
      <p>
        Genau hier liegen die größten Ersparnisse. Das Umwandeln einer WAV- oder
        FLAC-Datei in ein MP3 oder AAC mit 128 kbps verringert die Größe
        routinemäßig um <strong>80&ndash;90 %</strong>, weil du vom Speichern
        jeder Probe zum Speichern nur dessen übergehst, was du hören kannst. Wenn
        du ein Master-Archiv behältst, bewahre das verlustfreie Original auf –
        aber zum Teilen, Streamen oder Hochladen ist eine verlustbehaftete Kopie
        fast immer die richtige Wahl. Wenn du maximale Kompatibilität brauchst,
        wähle MP3; wenn du den besten Klang bei einer gegebenen Bitrate willst
        oder im Apple-Ökosystem bist, wähle AAC (.m4a).
      </p>
      <p>
        Ein häufiger Verwirrungspunkt ist der Unterschied zwischen einem Container
        und einem Codec. Eine <strong>.m4a</strong>-Datei ist ein Container, der
        meist AAC-codiertes Audio enthält, während <strong>.mp3</strong> sowohl
        ein Container als auch dessen Codec ist. OGG wiederum ist ein Container,
        der am häufigsten Vorbis- oder Opus-Audio transportiert. Dieses Tool gibt
        dir unabhängig davon, was du hineingibst, immer ein sauberes MP3- oder
        AAC-Ergebnis, sodass du dir keine Sorgen über unpassende Endungen oder
        Dateien machen musst, die sich nicht öffnen lassen – die Ausgabe ist
        genau das, was ihr Name sagt, und spielt in Browsern, Telefonen,
        Autoradios und Bearbeitungssoftware gleichermaßen ab.
      </p>

      <h2 id="tips">Tipps für die besten Ergebnisse</h2>
      <ul>
        <li>
          <strong>Passe die Bitrate an den Inhalt an.</strong> Setze
          Sprachaufnahmen auf 96 kbps herunter und reserviere 192&ndash;256 kbps
          für Musik, die du nah an der Quelle halten willst.
        </li>
        <li>
          <strong>Erhöhe die Qualität nicht künstlich.</strong> Eine
          96-kbps-Datei mit 256 kbps neu zu codieren stellt die Qualität nicht
          wieder her; es macht die Datei nur größer. Geh vom besten Original aus,
          das du hast.
        </li>
        <li>
          <strong>Willst du Audio aus einem Clip extrahieren?</strong> Wenn dein
          Ton in einem Video gefangen ist, verkleinere zuerst das Video mit dem{" "}
          <Link href="/de/video-compressor">Video-Kompressor</Link>, der die
          Audiospur als Teil des Vorgangs neu codiert – und bring dann das
          exportierte Audio hierher für eine feinere Kontrolle über Bitrate und
          Format.
        </li>
        <li>
          <strong>Behalte ein verlustfreies Master.</strong> Komprimiere Kopien
          zum Teilen, aber archiviere das ursprüngliche WAV oder FLAC, damit du
          später jederzeit in einer anderen Qualität neu exportieren kannst.
        </li>
        <li>
          <strong>Achte bei riesigen Dateien auf dein Gerät.</strong> Da die
          Codierung in deinem Browser läuft, braucht ein WAV von mehreren Hundert
          Megabyte einiges an Speicher. Komprimiere auf einem Telefon jeweils nur
          eine große Datei und schließe andere Tabs, wenn du eine Verlangsamung
          bemerkst.
        </li>
      </ul>
    </>
  ),
};
