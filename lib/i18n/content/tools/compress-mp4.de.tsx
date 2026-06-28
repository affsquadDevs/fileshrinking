import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "MP4 komprimieren — Gratis MP4-Video-Kompressor",
  metaDescription:
    "Komprimiere MP4-Videos im Browser mit H.264. Qualitätsvorgaben, Auflösungsskalierung, kein Upload — deine Dateien bleiben privat und verlassen dein Gerät nie.",
  heading: "MP4-Kompressor",
  intro: (
    <>
      Komprimiere MP4-Videos direkt in deinem Browser mit H.264. Wähle eine
      Qualitätsvorgabe, lege deinen Clip ab und lade in wenigen Minuten eine
      kleinere Datei herunter — es wird nie etwas hochgeladen, sodass deine
      Aufnahmen vollständig privat bleiben.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "So komprimierst du ein MP4",
    description:
      "Komprimiere ein MP4-Video in vier Schritten lokal in deinem Browser.",
    steps: [
      {
        name: "Füge dein MP4 hinzu",
        text: "Ziehe deine .mp4-Datei per Drag-and-drop in den Ablagebereich oder klicke, um sie auszuwählen. Das Video wird in den Speicher deines Geräts geladen und nirgendwohin gesendet.",
      },
      {
        name: "Wähle eine Qualitätsvorgabe",
        text: "Beginne mit Ausgewogen. Sie legt einen sinnvollen CRF fest und begrenzt die Auflösung; wechsle zu einer kleineren Vorgabe für stärker komprimierte Dateien oder zu einer größeren, um nah am Original zu bleiben.",
      },
      {
        name: "Feine den CRF ab",
        text: "Verschiebe den CRF-Regler, wenn du mehr Kontrolle möchtest. Ein niedrigerer Wert bewahrt mehr Details und eine größere Datei; zwischen 23 und 28 liegt der praktische Optimalbereich für die meisten Clips.",
      },
      {
        name: "Komprimiere und lade herunter",
        text: "Die Neukodierung läuft mit ffmpeg auf deinem Gerät. Wenn sie fertig ist, siehst du die eingesparte Größe und kannst dein kleineres MP4 herunterladen.",
      },
    ],
  },
  faqs: [
    {
      q: "Werden meine MP4-Dateien auf einen Server hochgeladen?",
      a: (
        <>
          Nein. Dein Video wird lokal in deinem Browser mit einer
          WebAssembly-Version von ffmpeg komprimiert. Die Datei wird in den
          Speicher gelesen, auf deinem eigenen Gerät neu kodiert und direkt
          zurückgegeben: Es gibt keinen Server, auf den sie hochgeladen werden
          könnte, und es wird nie etwas übertragen.
        </>
      ),
      text: "Nein. Dein Video wird lokal in deinem Browser mit einer WebAssembly-Version von ffmpeg komprimiert. Die Datei wird in den Speicher gelesen, auf deinem eigenen Gerät neu kodiert und direkt zurückgegeben. Es gibt keinen Server, auf den sie hochgeladen werden könnte, und es wird nie etwas übertragen.",
    },
    {
      q: "Ist der MP4-Kompressor wirklich kostenlos?",
      a: (
        <>
          Ja: Er ist komplett kostenlos, ohne Registrierung, ohne Wasserzeichen
          und ohne Limits pro Datei oder pro Tag. Da die gesamte Arbeit auf
          deinem Rechner stattfindet, gibt es keine Serverkosten, die
          hereingeholt werden müssten. Die Seite finanziert sich über dezente
          Werbung.
        </>
      ),
      text: "Ja. Er ist komplett kostenlos, ohne Registrierung, ohne Wasserzeichen und ohne Limits pro Datei oder pro Tag. Da die gesamte Arbeit auf deinem Rechner stattfindet, gibt es keine Serverkosten, die hereingeholt werden müssten. Die Seite finanziert sich über dezente Werbung.",
    },
    {
      q: "Verringert das Komprimieren die Qualität meines Videos?",
      a: (
        <>
          H.264 ist ein verlustbehafteter Codec, daher gehen beim Neukodieren
          immer einige Details verloren. Mit der Vorgabe Ausgewogen (rund um CRF
          23–28) ist der Verlust bei normalen Anzeigegrößen kaum zu bemerken,
          während die Datei erheblich schrumpft. Wähle einen niedrigeren CRF, um
          näher am Original zu bleiben, oder einen höheren für eine kleinere
          Datei.
        </>
      ),
      text: "H.264 ist ein verlustbehafteter Codec, daher gehen beim Neukodieren immer einige Details verloren. Mit der Vorgabe Ausgewogen (rund um CRF 23-28) ist der Verlust bei normalen Anzeigegrößen kaum zu bemerken, während die Datei erheblich schrumpft. Wähle einen niedrigeren CRF, um näher am Original zu bleiben, oder einen höheren für eine kleinere Datei.",
    },
    {
      q: "Was ist die maximale MP4-Dateigröße, die ich komprimieren kann?",
      a: (
        <>
          Es gibt kein hartes Limit, aber das Neukodieren von Videos ist
          speicher- und CPU-intensiv und läuft im Browser in einem einzigen
          Thread. Clips bis etwa 150&nbsp;MB lassen sich auf den meisten Geräten
          problemlos komprimieren; größere oder längere Videos funktionieren
          ebenfalls, können aber langsam sein und auf Telefonen mit wenig
          Speicher scheitern. Kurze Clips sind am schnellsten fertig.
        </>
      ),
      text: "Es gibt kein hartes Limit, aber das Neukodieren von Videos ist speicher- und CPU-intensiv und läuft im Browser in einem einzigen Thread. Clips bis etwa 150 MB lassen sich auf den meisten Geräten problemlos komprimieren; größere oder längere Videos funktionieren ebenfalls, können aber langsam sein und auf Telefonen mit wenig Speicher scheitern. Kurze Clips sind am schnellsten fertig.",
    },
    {
      q: "Warum ist das Komprimieren meines MP4 langsamer als das Komprimieren eines Bildes?",
      a: (
        <>
          Ein Video besteht aus tausenden Einzelbildern, und jedes wird
          dekodiert, optional skaliert und mit H.264 neu kodiert. Die
          ffmpeg-Version, die im Browser läuft, arbeitet aus Gründen der
          Kompatibilität und Sicherheit in einem einzigen Thread und kann daher
          nicht alle CPU-Kerne nutzen, wie es eine Desktop-Anwendung tun würde.
          Erwarte ungefähr Echtzeit bis zum Mehrfachen der Echtzeit, je nach
          Auflösung und deiner Hardware.
        </>
      ),
      text: "Ein Video besteht aus tausenden Einzelbildern, und jedes wird dekodiert, optional skaliert und mit H.264 neu kodiert. Die ffmpeg-Version, die im Browser läuft, arbeitet aus Gründen der Kompatibilität und Sicherheit in einem einzigen Thread und kann daher nicht alle CPU-Kerne nutzen, wie es eine Desktop-Anwendung tun würde. Erwarte ungefähr Echtzeit bis zum Mehrfachen der Echtzeit, je nach Auflösung und Hardware.",
    },
    {
      q: "Bringt es etwas, ein MP4 neu zu kodieren, das bereits H.264 ist?",
      a: (
        <>
          Manchmal. Wenn das Original mit hoher Bitrate oder großer Auflösung
          exportiert wurde, kann das Neukodieren mit einem höheren CRF oder einer
          geringeren Höhe viel einsparen. Aber eine Datei, die bereits effizient
          komprimiert war, schrumpft womöglich kaum oder wird sogar größer. Wenn
          das Ergebnis nicht kleiner ist, weist dich das Werkzeug darauf hin,
          dass die Datei bereits effizient ist, und du kannst das Original
          behalten.
        </>
      ),
      text: "Manchmal. Wenn das Original mit hoher Bitrate oder großer Auflösung exportiert wurde, kann das Neukodieren mit einem höheren CRF oder einer geringeren Höhe viel einsparen. Aber eine Datei, die bereits effizient komprimiert war, schrumpft womöglich kaum oder wird sogar größer. Wenn das Ergebnis nicht kleiner ist, weist dich das Werkzeug darauf hin, dass die Datei bereits effizient ist, und du kannst das Original behalten.",
    },
  ],
  content: (
    <>
      <h2 id="why">Warum sind MP4-Dateien so groß?</h2>
      <p>
        MP4 ist ein Container, kein Codec: Es bündelt einen Videostream, einen
        Audiostream und Metadaten in einer einzigen Datei. Die Größe dieser Datei
        wird fast vollständig durch die <strong>Bitrate</strong> des Videostreams
        bestimmt: wie viele Bits pro Sekunde der Encoder aufwendet, um das Bild zu
        beschreiben. Die Bitrate wiederum skaliert mit drei Dingen, die du
        steuerst: der <strong>Auflösung</strong> (ein 4K-Bild hat viermal so
        viele Pixel wie 1080p), der <strong>Länge</strong> des Clips und dem{" "}
        <strong>Qualitätsziel</strong>, mit dem das Original exportiert wurde.
      </p>
      <p>
        Telefone, Bildschirmrekorder und Schnittprogramme neigen meist zur Seite
        der Qualität und exportieren mit hohen Bitraten, damit nichts unscharf
        wirkt. Das ist großartig zum Archivieren, aber verschwenderisch zum
        Teilen: Ein einminütiger 4K-Clip vom Telefon kann leicht 150&nbsp;MB
        überschreiten, weit mehr, als du zum Versenden über Messaging-Apps oder
        E-Mail brauchst. Das Neukodieren mit einem sinnvollen Qualitätsziel und
        oft einer geringeren Auflösung ist es, woher die großen Einsparungen
        kommen.
      </p>

      <h2 id="crf">Wie CRF und Auflösung die Datei verkleinern</h2>
      <p>
        Dieses Werkzeug kodiert dein Video mit <strong>H.264</strong> neu und
        verwendet dazu einen{" "}
        <strong>konstanten Ratenfaktor (CRF)</strong>. Statt eine feste Bitrate
        zu erzwingen, zielt der CRF auf eine konstante <em>wahrgenommene</em>{" "}
        Qualität und lässt den Encoder mehr Bits für komplexe Szenen und weniger
        für einfache aufwenden. Die Skala reicht hier von 18 (sehr hohe Qualität,
        größere Datei) bis 36 (kleinere Datei, sichtbarere Artefakte). Jeder
        Schritt von etwa &plusmn;6 entspricht ungefähr der Hälfte oder dem
        Doppelten der Dateigröße, sodass kleine Änderungen am Regler eine große
        Wirkung haben.
      </p>
      <p>
        Der zweite Hebel ist die <strong>Auflösung</strong>. Das Verringern der
        maximalen Höhe — etwa von 2160p auf 1080p oder 720p — senkt die Pixelzahl
        drastisch, und weniger Pixel brauchen bei gleicher Qualität weniger Bits.
        Für Aufnahmen, die auf einem Telefon angesehen oder in ein Dokument
        eingebettet werden, sieht eine Neukodierung auf 720p oder 1080p in der
        Praxis oft identisch aus und ist dabei nur einen Bruchteil so groß. Die
        Vorgaben kombinieren einen CRF und eine Höhenbegrenzung, sodass du ohne
        irgendwelche Einstellungen ein gutes Ergebnis erhältst; der CRF-Regler ist
        da, wenn du eine feinere Kontrolle möchtest.
      </p>
      <p>
        Zwei Dinge sind weniger wichtig, als die Leute erwarten. Erstens die
        Bildrate: Die meisten Clips brauchen nicht mehr, als das Original bereits
        hat, und sie zu senken spart im Vergleich zu CRF und Auflösung nur
        bescheidenen Platz. Zweitens die Tonspur. Sprache und Musik fügen etwas
        Gewicht hinzu, aber eine typische AAC-Tonspur ist ein kleiner Teil einer
        Videodatei, sodass fast immer das Bild dort liegt, wo die Einsparungen
        sind. Deshalb richtet dieses Werkzeug deine Entscheidungen auf Qualität
        und Auflösung aus — die beiden Einstellungen, die den Ausschlag geben —
        und kodiert den Ton automatisch mit einer sinnvollen Bitrate neu.
      </p>

      <h2 id="format">
        MP4, H.264 und wann Neukodieren wirklich hilft
      </h2>
      <p>
        Die große Mehrheit der MP4-Dateien enthält bereits einen
        H.264-Videostream (auch AVC genannt), weshalb MP4 praktisch überall
        abgespielt wird: von alten Telefonen bis zu Smart-TVs. Du kannst
        nachlesen, wie Browser den MP4-Container und den H.264-Codec beschreiben,
        im{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leitfaden zu Medien-Containern von MDN
        </a>{" "}
        und in dessen{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264"
          target="_blank"
          rel="noopener noreferrer"
        >
          Referenz zum AVC-/H.264-Codec
        </a>
        . Die Ausgabe von H.264 in MP4 erhält diese universelle Kompatibilität.
      </p>
      <p>
        Ein MP4 neu zu kodieren, das <em>bereits</em> H.264 ist, hilft, wenn das
        Original großzügig exportiert wurde — hohe Bitrate, große Auflösung oder
        beides — weil es Spielraum zum Entfernen gibt. Es hilft weit weniger und
        kann sogar eine <strong>größere</strong> Datei erzeugen, wenn das Video
        bereits eng komprimiert war: Einen verlustbehafteten Stream neu zu
        kodieren bedeutet, ihn zu dekodieren und erneut verlustbehaftet zu
        komprimieren, sodass du nur gewinnst, wenn dein neues Ziel wirklich
        niedriger ist als das Original. Wenn die Ausgabe nicht kleiner wäre, hält
        dich dieses Werkzeug auf dem Laufenden, sodass du einfach dein Original
        behalten kannst. Um mehr herauszuholen, erhöhe den CRF oder senke die
        Auflösung, statt von einem einzigen Durchlauf Wunder zu erwarten.
      </p>

      <h2 id="tips">Tipps und der Geschwindigkeitskompromiss im Browser</h2>
      <p>
        Alles geschieht auf deinem Gerät mithilfe einer WebAssembly-Version von{" "}
        ffmpeg, was dies privat macht — aber es ist auch{" "}
        <strong>auf einen Thread beschränkt</strong>. Ein nativer Desktop-Encoder
        verteilt die Arbeit auf alle CPU-Kerne; die Browser-Version nutzt aus
        Gründen der Kompatibilität und Sicherheit einen. Das bedeutet, dass lange
        oder hochauflösende Videos eine Weile dauern und Telefone mit wenig
        Speicher belasten können. Ein paar Gewohnheiten halten alles flüssig:
      </p>
      <ul>
        <li>
          <strong>Schneide zuerst zu, wenn du kannst.</strong> Die Länge ist ein
          direkter Multiplikator sowohl für die Dateigröße als auch für die
          Kodierzeit, daher ist das Herausschneiden toter Passagen vor dem
          Komprimieren der einfachste Gewinn.
        </li>
        <li>
          <strong>Senke die Auflösung zum Teilen.</strong> 720p oder 1080p reicht
          locker für Messaging, Folien und die meisten Web-Einbettungen; reserviere
          4K für die Aufnahmen, die du wirklich auf einem großen Bildschirm
          ansiehst.
        </li>
        <li>
          <strong>Beginne mit Ausgewogen und vergleiche dann.</strong> Führe es
          mit einer kleineren Vorgabe erneut aus und prüfe, ob du bei deiner
          tatsächlichen Anzeigegröße einen Unterschied erkennst, bevor du dich
          festlegst.
        </li>
        <li>
          <strong>Erledige große Aufgaben jeweils auf einem Gerät.</strong>{" "}
          Schließe andere ressourcenintensive Tabs, damit der Encoder Speicher und
          CPU zur Verfügung hat; kurze Clips sind am schnellsten fertig.
        </li>
      </ul>
      <p>
        Arbeitest du mit anderen Formaten? Nutze den allgemeineren{" "}
        <Link href="/de/video-compressor">Video-Kompressor</Link> für MP4 und
        alles andere, den speziellen{" "}
        <Link href="/de/compress-mov">Kompressor für MOV, WebM, MKV und AVI</Link>{" "}
        für Aufnahmen, die kein MP4 sind, oder den{" "}
        <Link href="/de/audio-compressor">Audio-Kompressor</Link>, wenn du nur
        eine Tonspur oder Sprachaufnahme verkleinern musst.
      </p>
    </>
  ),
};
