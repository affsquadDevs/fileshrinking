import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-audio-files",
  title: "Come comprimere i file audio senza rovinare il suono",
  description:
    "Riduci i file MP3, AAC, FLAC e WAV in modo intelligente: scegli il bitrate giusto per musica o voce, comprendi la frequenza di campionamento e mantieni un audio pulito.",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  authorId: "team",
  tags: ["Audio", "Tutorial"],
  readingMinutes: 6,
};

export default function Content() {
  return (
    <>
      <p>
        I file audio tendono a crescere senza controllo. Un brano di tre minuti
        estratto in <strong>WAV</strong> può facilmente superare i 30 MB,
        un&rsquo;intervista registrata di un&rsquo;ora può andare oltre il
        gigabyte, e le app di posta e messaggistica iniziano a rifiutare gli
        allegati molto prima di quel punto. La buona notizia è che l&rsquo;audio
        si comprime estremamente bene &mdash; se capisci alcune impostazioni
        fondamentali. Azzeccale e potrai ridurre un file dell&rsquo;80&ndash;90%
        senza che le tue orecchie notino alcuna differenza. Sbagliale e ti
        ritroverai con un audio metallico, vorticoso e dal suono come se fosse
        sott&rsquo;acqua. Questa guida ripercorre le scelte che contano
        davvero.
      </p>

      <h2 id="why-wav-is-huge">Perché i file WAV e AIFF sono così grandi</h2>
      <p>
        Il WAV (e il suo cugino Apple, l&rsquo;AIFF) memorizza l&rsquo;audio
        come campioni PCM grezzi e <strong>non compressi</strong>. Non viene
        scartato nulla e nulla viene impacchettato, quindi la dimensione è del
        tutto prevedibile a partire da tre numeri: la frequenza di
        campionamento, la profondità di bit e il numero di canali. La qualità CD
        &mdash; 44.100 campioni al secondo, 16 bit per campione, due canali
        &mdash; corrisponde a circa{" "}
        <strong>10 MB al minuto</strong>. Ecco perché un album completo in WAV
        può riempire diverse centinaia di megabyte, mentre lo stesso album in
        MP3 entra in un telefono con spazio in abbondanza.
      </p>
      <p>
        L&rsquo;audio non compresso è la scelta giusta mentre stai{" "}
        <em>registrando e modificando</em>, perché ogni modifica e ogni effetto
        rimangono impeccabili. Ma è una pessima scelta per condividere o
        archiviare il risultato finale. Nel momento in cui finisci di
        modificare, vale la pena convertirlo in un formato compresso.
      </p>

      <h2 id="lossy-vs-lossless">Con perdita o senza perdita: MP3/AAC contro FLAC</h2>
      <p>
        La compressione audio esiste in due varianti. I formati{" "}
        <strong>senza perdita</strong> come FLAC e ALAC riducono il file
        mantenendo intatto ogni campione originale &mdash; decodifica un FLAC e
        riottieni una copia identica byte per byte dell&rsquo;originale. In
        genere riducono la dimensione del 40&ndash;60%, così quel WAV da 10 MB
        al minuto diventa circa 5&ndash;6 MB al minuto. Usa i formati senza
        perdita quando archivi i master o tieni a una fedeltà perfetta.
      </p>
      <p>
        I formati <strong>con perdita</strong> come MP3 e AAC vanno molto oltre,
        scartando in modo permanente il suono che è poco probabile che
        l&rsquo;orecchio umano percepisca &mdash; frequenze mascherate da altre
        più forti, dettagli al di sopra della tua gamma uditiva e così via. È
        così che la codifica psicoacustica riduce un brano a un decimo della sua
        dimensione originale. Il compromesso è che i dati scartati sono persi per
        sempre, quindi ricodificare ripetutamente un file con perdita lo degrada
        poco a poco. Se vuoi il modello mentale completo, consulta la nostra
        guida sulla{" "}
        <Link href="/it/blog/lossy-vs-lossless-compression">
          compressione con perdita e senza perdita
        </Link>
        .
      </p>
      <p>
        Tra le due opzioni moderne con perdita, l&rsquo;<strong>AAC</strong>{" "}
        in genere suona un po&rsquo; meglio dell&rsquo;<strong>MP3</strong> allo
        stesso bitrate ed è l&rsquo;opzione predefinita di Apple Music, YouTube
        e della maggior parte dello streaming. L&rsquo;MP3 vince ancora sulla
        compatibilità universale &mdash; se ti serve un file che si riproduca
        letteralmente su qualsiasi dispositivo prodotto negli ultimi 25 anni,
        l&rsquo;MP3 è la scelta sicura.
      </p>

      <h2 id="bitrate">L&rsquo;impostazione che conta di più: il bitrate</h2>
      <p>
        Per l&rsquo;audio con perdita, il <strong>bitrate</strong> &mdash;
        misurato in kilobit al secondo (kbps) &mdash; è la leva più importante
        sia sulla qualità che sulla dimensione. Un bitrate più alto significa
        più dati conservati per ogni secondo di suono, il che si traduce in una
        qualità migliore e in un file più grande. Il trucco sta
        nell&rsquo;adattare il bitrate al contenuto.
      </p>
      <p>
        Per la <strong>musica</strong>, dove vuoi una fedeltà a gamma completa:
      </p>
      <ul>
        <li>
          <strong>128 kbps</strong> &mdash; accettabile per un ascolto casuale
          con gli auricolari; il valore più basso a cui dovresti scendere con la
          musica.
        </li>
        <li>
          <strong>192 kbps</strong> &mdash; un punto di equilibrio ideale per
          tutti i giorni; la maggior parte delle persone non riesce a
          distinguerlo dall&rsquo;originale in modo affidabile.
        </li>
        <li>
          <strong>256&ndash;320 kbps</strong> &mdash; praticamente
          trasparente, la scelta adatta se hai buone cuffie o un orecchio
          esigente.
        </li>
      </ul>
      <p>
        Per la <strong>voce</strong> &mdash; podcast, note vocali, audiolibri,
        interviste &mdash; puoi scendere molto di più, perché la voce umana
        occupa una gamma di frequenze ristretta:
      </p>
      <ul>
        <li>
          <strong>64 kbps</strong> &mdash; perfettamente nitido per una sola
          voce; ideale per i podcast parlati.
        </li>
        <li>
          <strong>96 kbps</strong> &mdash; un margine comodo per la voce con un
          po&rsquo; di musica di sottofondo o due interlocutori.
        </li>
      </ul>
      <p>
        Codificare un podcast di un&rsquo;ora a 64 kbps invece che a 192 kbps lo
        porta da circa 86 MB a circa 29 MB &mdash; un terzo della dimensione,
        senza alcuna perdita significativa di chiarezza per la voce.
      </p>

      <h2 id="sample-rate-channels">Frequenza di campionamento, profondità di bit e mono contro stereo</h2>
      <p>
        Altre tre impostazioni possono ridurre ulteriormente la dimensione se
        usate in modo appropriato. La{" "}
        <strong>frequenza di campionamento</strong> è quante volte al secondo
        viene misurato l&rsquo;audio. I 44,1 kHz (CD) e i 48 kHz (video)
        catturano l&rsquo;intera gamma dell&rsquo;udito umano, quindi raramente
        c&rsquo;è motivo di salire più in alto in un&rsquo;esportazione finale.
        Puoi ridurre senza problemi una nota vocale del telefono a 22,05 kHz, ma
        lascia la musica a 44,1 kHz o 48 kHz.
      </p>
      <p>
        Anche i <strong>canali</strong> contano. Una registrazione in mono
        occupa la metà di una in stereo. Se la tua fonte è un singolo narratore
        o una nota vocale in mono, esportare in mono è un risparmio gratuito
        senza alcun costo di qualità. Riserva lo stereo per la musica e per
        qualsiasi cosa abbia una vera immagine sinistra/destra.
      </p>
      <p>
        Per un riferimento esauriente e orientato al browser su cosa fa ciascun
        codec e su come gestiscono questi parametri, la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida di MDN ai codec audio web
        </a>{" "}
        è la fonte di riferimento autorevole.
      </p>

      <h2 id="converting">Convertire FLAC o WAV in MP3 o AAC per condividere</h2>
      <p>
        L&rsquo;attività più comune nel mondo reale è prendere un grande file
        senza perdita e trasformarlo in qualcosa di abbastanza piccolo da poter
        essere inviato per email, caricato o pubblicato. La ricetta è semplice:
      </p>
      <ul>
        <li>Parti dalla tua fonte di massima qualità (il master in WAV o FLAC).</li>
        <li>Scegli AAC per la migliore qualità per byte, oppure MP3 per la massima compatibilità.</li>
        <li>Scegli un bitrate adatto al contenuto: ~192 kbps per la musica, ~64&ndash;96 kbps per la voce.</li>
        <li>Imposta il mono per le registrazioni a voce singola; lascia lo stereo per la musica.</li>
        <li>Mantieni la frequenza di campionamento a 44,1 o 48 kHz per la musica; 22,05 kHz va bene per la voce.</li>
      </ul>
      <p>
        Poiché la conversione da senza perdita a con perdita avviene una sola
        volta, conservi tutta la qualità possibile ottenendo comunque un file
        drasticamente più piccolo. Ricordati però di conservare il master
        originale &mdash; non ricomprimere mai un file che è già con perdita se
        puoi ripartire dalla fonte.
      </p>

      <h2 id="try-it">Fallo in modo privato nel tuo browser</h2>
      <p>
        Non hai bisogno di installare nulla né di caricare le tue registrazioni
        su un server qualsiasi per comprimerle. Il{" "}
        <Link href="/it/audio-compressor">compressore audio</Link> di
        FileShrinking funziona interamente nel tuo browser, quindi i tuoi file
        non lasciano mai il tuo dispositivo &mdash; non viene mai caricato
        nulla. Trascina un WAV, FLAC, MP3 o AAC, scegli il tuo bitrate e scarica
        il risultato. Se il tuo audio fa in realtà parte di una clip che stai
        condividendo, lo stesso approccio incentrato sulla privacy si applica al
        nostro{" "}
        <Link href="/it/video-compressor">compressore video</Link>. Sperimenta
        con un paio di impostazioni di bitrate e fidati delle tue orecchie
        &mdash; dato che tutto resta in locale, non c&rsquo;è alcun rischio nel
        provare.
      </p>
    </>
  );
}
