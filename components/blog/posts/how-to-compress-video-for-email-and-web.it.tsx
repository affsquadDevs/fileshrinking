import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-video-for-email-and-web",
  title: "Come comprimere i video per email, web e social",
  description:
    "Impostazioni pratiche per ridurre i video al limite di 25 MB delle email, incorporamenti web rapidi e caricamenti social: risoluzione, CRF, H.264 e taglio, nel browser.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  authorId: "maya",
  tags: ["Video", "Tutorial"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Il video è la cosa più pesante che la maggior parte delle persone prova a
        condividere. Un solo minuto di ripresa appena uscito da un telefono o da
        una fotocamera può occupare centinaia di megabyte: troppo grande per
        allegarlo a un&rsquo;email, lento da caricare su una pagina web e con ogni
        probabilità destinato a essere ricompresso non appena una piattaforma
        social lo tocca. La buona notizia è che puoi ridurre quasi qualsiasi clip
        in modo drastico senza che si veda male, purché adatti qualche
        impostazione alla destinazione del video. Questa guida percorre le tre
        destinazioni più comuni &mdash;email, web e social&mdash; e le leve esatte
        che ti portano fino a loro.
      </p>

      <h2 id="why-video-is-big">Perché i file video diventano così grandi</h2>
      <p>
        Un video non è altro che una lunga sequenza di immagini riprodotte
        rapidamente, più l&rsquo;audio. La dimensione dipende da quattro cose:{" "}
        <strong>risoluzione</strong> (quanti pixel per fotogramma),{" "}
        <strong>frequenza dei fotogrammi</strong> (fotogrammi al secondo),{" "}
        <strong>durata</strong> (quanti secondi) e <strong>bitrate</strong>{" "}
        (quanti bit spende il codificatore per ogni secondo di ripresa). Una clip
        in 4K a 60 fps ha all&rsquo;incirca nove volte i pixel di una in 1080p a
        30 fps prima ancora di cambiare qualsiasi altra cosa. Ecco perché la cosa
        più efficace che puoi fare è ridurre la risoluzione e la durata: stai
        eliminando dati, non solo comprimendoli.
      </p>
      <p>
        Il bitrate è dove avviene la compressione vera e propria. I codec moderni
        scartano il dettaglio che il tuo occhio ha meno probabilità di notare,
        perciò un bitrate più basso significa un file più piccolo con una certa
        perdita di fedeltà. L&rsquo;arte sta nel trovare il bitrate abbastanza
        piccolo per la tua destinazione ma abbastanza alto perché nessuno se ne
        accorga.
      </p>

      <h2 id="resolution-and-trimming">Parti dalla risoluzione e dalla durata</h2>
      <p>
        Prima di toccare le impostazioni del codificatore, chiediti se hai
        davvero bisogno di ogni pixel e di ogni secondo. Ridurre la risoluzione è
        il cambiamento di maggior impatto che puoi fare:
      </p>
      <ul>
        <li>
          <strong>Da 4K a 1080p</strong> riduce il numero di pixel a un quarto.
          Per l&rsquo;email e per quasi ogni incorporamento web, 1080p è più che
          sufficiente.
        </li>
        <li>
          <strong>Da 1080p a 720p</strong> lo riduce di nuovo più o meno alla
          metà ed è perfetto per registrazioni dello schermo rapide, demo e
          qualsiasi cosa debba essere riprodotta in una finestra piccola.
        </li>
        <li>
          <strong>Tagliare</strong> i momenti morti all&rsquo;inizio e alla fine,
          o tenere solo la parte che conta, riduce la dimensione del file in modo
          lineare. Una clip di 30 secondi pesa la metà di una da 60 a parità di
          qualità.
        </li>
      </ul>
      <p>
        Se ricordi una sola cosa, che sia questa: ridurre una clip 4K di 2 minuti
        a un riassunto in 720p di 40 secondi farà di più per la dimensione del tuo
        file di qualsiasi ritocco al bitrate.
      </p>

      <h2 id="crf-and-bitrate">CRF e bitrate: controllare la qualità</h2>
      <p>
        Una volta fissate risoluzione e durata, controlli la qualità con un
        bitrate target o con un fattore di qualità chiamato <strong>CRF</strong>{" "}
        (Constant Rate Factor, fattore di tasso costante). Il CRF indica al
        codificatore di puntare a una qualità visiva costante e di spendere il
        bitrate necessario, fotogramma per fotogramma: le scene con molto
        movimento ricevono più bit e quelle statiche meno. Per H.264, il CRF va
        da circa 0 (senza perdite, enorme) a 51 (minuscolo, brutto), e i numeri
        più bassi significano qualità migliore:
      </p>
      <ul>
        <li>
          <strong>CRF 18&ndash;20:</strong> visivamente quasi senza perdite, file
          più grandi; ideale per master o video web dove la qualità è
          fondamentale.
        </li>
        <li>
          <strong>CRF 23:</strong> il valore predefinito più comune; un solido
          equilibrio tra dimensione e qualità per la maggior parte degli usi su
          web e social.
        </li>
        <li>
          <strong>CRF 26&ndash;28:</strong> notevolmente più piccolo, con una
          leggera sfocatura; utile quando devi rispettare un limite di dimensione
          rigido come il tetto di un&rsquo;email.
        </li>
      </ul>
      <p>
        Quando hai un tetto rigido &mdash;ad esempio un allegato email da 25
        MB&mdash; un bitrate target è più prevedibile del CRF. Il calcolo
        approssimativo: una dimensione di file target in megabit (moltiplica i MB
        per 8) divisa per la durata in secondi ti dà il budget totale di bitrate.
        Riserva circa 128 kbps per l&rsquo;audio e dai il resto al video. Per un
        tetto di 25 MB su una clip di 60 secondi, sono circa 3,3 Mbps in totale,
        più che sufficienti per un 720p pulito.
      </p>

      <h2 id="codec-h264">Scegli H.264 per la compatibilità</h2>
      <p>
        La scelta del codec decide se il tuo video verrà riprodotto ovunque o
        fallirà in silenzio. <strong>H.264</strong> (chiamato anche AVC) è di gran
        lunga la scelta più sicura: viene riprodotto in tutti i browser moderni,
        nelle anteprime dei client di posta, sui telefoni e sulle piattaforme
        social, e si abbina all&rsquo;audio AAC dentro un contenitore MP4. I codec
        più recenti come H.265/HEVC, VP9 e AV1 comprimono meglio &mdash;a volte dal
        30 al 50&nbsp;% più piccoli a parità di qualità&mdash; ma il supporto è
        disomogeneo, e chi riceve l&rsquo;email su un dispositivo datato potrebbe
        non vedere assolutamente nulla. Per condividere, resta su H.264 in un MP4 a
        meno che tu non controlli esattamente come verrà riprodotto il file.
      </p>
      <p>
        Se vuoi capire quali codec supporta davvero un determinato browser e
        perché, MDN mantiene un riferimento esaustivo e aggiornato nella sua{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai codec video per il web
        </a>
        . È la migliore fonte unica per decidere quando è sicuro andare oltre
        H.264.
      </p>

      <h2 id="targets">Impostazioni in base alla destinazione</h2>
      <p>
        Ecco come si incastrano i pezzi per ogni destinazione comune.
      </p>
      <ul>
        <li>
          <strong>Allegati email:</strong> la maggior parte dei provider limita
          gli allegati intorno ai 25 MB (sia Gmail che Outlook si attestano vicino
          a quella soglia). Punta a 720p, H.264/MP4 e taglia senza pietà. Se sei
          ancora oltre, scendi a CRF 26&ndash;28 o imposta un bitrate target con il
          calcolo qui sopra. Per qualsiasi cosa più lunga di un paio di minuti, un
          link è di solito più gentile di un allegato.
        </li>
        <li>
          <strong>Incorporamento web:</strong> la velocità della pagina conta,
          quindi mantieni i file leggeri: 1080p a CRF 23 è il punto ideale, e 720p
          per sfondi o loop decorativi. Usa MP4/H.264 come base così che il video
          venga riprodotto senza un formato alternativo.
        </li>
        <li>
          <strong>Piattaforme social:</strong> Instagram, TikTok, X e altre
          ricodificano tutto ciò che carichi, quindi non ha senso inviare un master
          enorme: verrà comunque compresso. Carica un file H.264 in 1080p pulito a
          un bitrate ragionevole e lascia che la piattaforma faccia la sua
          passata. Rispettare le proporzioni della piattaforma (verticale 9:16 per
          Reels e TikTok) conta più della dimensione grezza.
        </li>
      </ul>

      <h2 id="in-browser">Comprimere in modo privato, nel tuo browser</h2>
      <p>
        Non devi caricare le tue riprese sul server di uno sconosciuto per
        comprimerle. Il{" "}
        <Link href="/it/video-compressor">compressore video</Link> di
        FileShrinking gira interamente nel tuo browser: il tuo video viene
        elaborato sul tuo dispositivo e non lo lascia mai, il che conta per
        qualsiasi cosa personale o riservata. Ci sono anche strumenti dedicati per
        i formati più comuni:{" "}
        <Link href="/it/compress-mp4">comprimere MP4</Link> per il contenitore
        H.264 universale e <Link href="/it/compress-mov">comprimere MOV</Link> per
        riprese appena uscite da un iPhone o da una fotocamera. Se una clip è
        principalmente audio che per caso è dentro un involucro video, il{" "}
        <Link href="/it/audio-compressor">compressore audio</Link> può ridurre la
        traccia sonora per conto suo.
      </p>
      <p>
        L&rsquo;unico compromesso onesto: la codifica nel browser usa la CPU del
        tuo computer, quindi è <strong>più lenta di un servizio cloud</strong> per
        clip lunghe o ad alta risoluzione, e un file molto grande può richiedere
        un po&rsquo; di tempo. In cambio della privacy di non caricare mai il tuo
        video, la maggior parte delle persone ritiene che quell&rsquo;attesa ne
        valga la pena. Parti dal tuo originale di massima qualità, riduci la
        risoluzione e taglia prima, scegli H.264 e solo allora regola il CRF o il
        bitrate: fallo e raggiungerai qualsiasi obiettivo di email, web o social con
        margine in abbondanza.
      </p>
    </>
  );
}
