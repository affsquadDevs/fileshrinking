import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimere MP4 — Compressore video MP4 gratis",
  metaDescription:
    "Comprimi video MP4 nel browser con H.264. Preset di qualità, ridimensionamento e nessun caricamento: i tuoi file restano privati.",
  heading: "Compressore di MP4",
  intro: (
    <>
      Comprimi video MP4 direttamente nel tuo browser con H.264. Scegli un preset
      di qualità, trascina il tuo clip e scarica un file più piccolo in pochi
      minuti: niente viene mai caricato, così le tue riprese restano del tutto
      private.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere un MP4",
    description:
      "Comprimi un video MP4 localmente nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi il tuo MP4",
        text: "Trascina e rilascia il tuo file .mp4 nell'area di caricamento, oppure fai clic per sfogliare. Il video viene caricato nella memoria del tuo dispositivo, non viene inviato da nessuna parte.",
      },
      {
        name: "Scegli un preset di qualità",
        text: "Inizia con Bilanciato. Imposta un CRF sensato e limita la risoluzione; passa a un preset più piccolo per file più compressi o a uno più grande per restare vicino all'originale.",
      },
      {
        name: "Regola il CRF",
        text: "Sposta il cursore del CRF se vuoi più controllo. Un valore più basso conserva più dettaglio e un file più grande; tra 23 e 28 si trova il punto ottimale pratico per la maggior parte dei clip.",
      },
      {
        name: "Comprimi e scarica",
        text: "La ricodifica viene eseguita sul tuo dispositivo con ffmpeg. Al termine vedrai lo spazio risparmiato e potrai scaricare il tuo MP4 più piccolo.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file MP4 vengono caricati su un server?",
      a: (
        <>
          No. Il tuo video viene compresso localmente nel tuo browser con una
          versione in WebAssembly di ffmpeg. Il file viene letto in memoria,
          ricodificato sul tuo dispositivo e restituito direttamente: non c&rsquo;è
          alcun server su cui caricarlo e non viene mai trasmesso nulla.
        </>
      ),
      text: "No. Il tuo video viene compresso localmente nel tuo browser con una versione in WebAssembly di ffmpeg. Il file viene letto in memoria, ricodificato sul tuo dispositivo e restituito direttamente. Non c'è alcun server su cui caricarlo e non viene mai trasmesso nulla.",
    },
    {
      q: "Il compressore di MP4 è davvero gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza registrazione, senza filigrane e
          senza limiti per file o per giorno. Poiché tutto il lavoro avviene sul
          tuo computer, non ci sono costi di server da recuperare. Il sito si
          sostiene con annunci discreti.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, senza filigrane e senza limiti per file o per giorno. Poiché tutto il lavoro avviene sul tuo computer, non ci sono costi di server da recuperare. Il sito si sostiene con annunci discreti.",
    },
    {
      q: "Comprimere ridurrà la qualità del mio video?",
      a: (
        <>
          H.264 è un codec con perdita, quindi la ricodifica scarta sempre un
          po&rsquo; di dettaglio. Con il preset Bilanciato (intorno a CRF 23-28)
          la perdita è difficile da notare alle normali dimensioni di
          visualizzazione, mentre il file si riduce notevolmente. Scegli un CRF
          più basso per restare più vicino all&rsquo;originale, o uno più alto per
          un file più piccolo.
        </>
      ),
      text: "H.264 è un codec con perdita, quindi la ricodifica scarta sempre un po' di dettaglio. Con il preset Bilanciato (intorno a CRF 23-28) la perdita è difficile da notare alle normali dimensioni di visualizzazione, mentre il file si riduce notevolmente. Scegli un CRF più basso per restare più vicino all'originale o uno più alto per un file più piccolo.",
    },
    {
      q: "Qual è la dimensione massima del file MP4 che posso comprimere?",
      a: (
        <>
          Non c&rsquo;è un limite rigido, ma la ricodifica video è impegnativa per
          memoria e CPU e viene eseguita su un solo thread nel browser. I clip
          fino a circa 150&nbsp;MB si comprimono senza problemi sulla maggior
          parte dei dispositivi; i video più grandi o più lunghi funzionano
          comunque, ma possono essere lenti e potrebbero fallire sui telefoni con
          poca memoria. I clip brevi finiscono prima.
        </>
      ),
      text: "Non c'è un limite rigido, ma la ricodifica video è impegnativa per memoria e CPU e viene eseguita su un solo thread nel browser. I clip fino a circa 150 MB si comprimono senza problemi sulla maggior parte dei dispositivi; i video più grandi o più lunghi funzionano comunque, ma possono essere lenti e potrebbero fallire sui telefoni con poca memoria. I clip brevi finiscono prima.",
    },
    {
      q: "Perché comprimere il mio MP4 è più lento che comprimere un'immagine?",
      a: (
        <>
          Un video è composto da migliaia di fotogrammi, e ciascuno viene
          decodificato, eventualmente ridimensionato e ricodificato con H.264. La
          versione di ffmpeg che gira nel browser funziona su un solo thread per
          compatibilità e sicurezza, quindi non può usare tutti i core della CPU
          come farebbe un&rsquo;applicazione desktop. Aspettati una velocità di
          circa il tempo reale fino a qualche volta il tempo reale a seconda della
          risoluzione e del tuo hardware.
        </>
      ),
      text: "Un video è composto da migliaia di fotogrammi, e ciascuno viene decodificato, eventualmente ridimensionato e ricodificato con H.264. La versione di ffmpeg che gira nel browser funziona su un solo thread per compatibilità e sicurezza, quindi non può usare tutti i core della CPU come farebbe un'applicazione desktop. Aspettati una velocità di circa il tempo reale fino a qualche volta il tempo reale a seconda della risoluzione e dell'hardware.",
    },
    {
      q: "Serve a qualcosa ricodificare un MP4 che è già H.264?",
      a: (
        <>
          A volte. Se l&rsquo;originale è stato esportato con un bitrate alto o una
          risoluzione grande, ricodificare con un CRF più alto o un&rsquo;altezza
          minore può far risparmiare molto. Ma un file già compresso in modo
          efficiente può ridursi appena, o persino crescere. Se il risultato non è
          più piccolo, lo strumento ti avvisa che il file è già efficiente e puoi
          conservare l&rsquo;originale.
        </>
      ),
      text: "A volte. Se l'originale è stato esportato con un bitrate alto o una risoluzione grande, ricodificare con un CRF più alto o un'altezza minore può far risparmiare molto. Ma un file già compresso in modo efficiente può ridursi appena o persino crescere. Se il risultato non è più piccolo, lo strumento ti avvisa che il file è già efficiente e puoi conservare l'originale.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché i file MP4 sono così grandi?</h2>
      <p>
        MP4 è un contenitore, non un codec: racchiude un flusso video, un flusso
        audio e i metadati in un unico file. La dimensione di quel file è
        determinata quasi interamente dal <strong>bitrate</strong> del flusso
        video: quanti bit al secondo dedica l&rsquo;encoder a descrivere
        l&rsquo;immagine. Il bitrate, a sua volta, scala con tre cose che controlli
        tu: la <strong>risoluzione</strong> (un fotogramma 4K ha quattro volte i
        pixel del 1080p), la <strong>durata</strong> del clip e
        l&rsquo;<strong>obiettivo di qualità</strong> con cui è stato esportato
        l&rsquo;originale.
      </p>
      <p>
        Telefoni, registratori dello schermo e app di montaggio tendono di solito
        a privilegiare la qualità, esportando con bitrate alti perché nulla
        appaia sfocato. È ottimo per archiviare, ma uno spreco per condividere: un
        clip di un minuto in 4K da telefono può superare facilmente i
        150&nbsp;MB, molto più di quanto serva per inviarlo tramite app di
        messaggistica o email. Ricodificare con un obiettivo di qualità sensato, e
        spesso con una risoluzione minore, è da dove arrivano i grandi risparmi.
      </p>

      <h2 id="crf">Come il CRF e la risoluzione riducono il file</h2>
      <p>
        Questo strumento ricodifica il tuo video con <strong>H.264</strong>{" "}
        usando un <strong>Constant Rate Factor (CRF)</strong>. Invece di imporre
        un bitrate fisso, il CRF punta a una qualità <em>percepita</em> costante e
        lascia che l&rsquo;encoder spenda più bit nelle scene complesse e meno in
        quelle semplici. Qui la scala va da 18 (qualità molto alta, file più
        grande) a 36 (file più piccolo, artefatti più visibili). Ogni passo di
        circa &plusmn;6 corrisponde a circa la metà o il doppio della dimensione
        del file, quindi piccole variazioni del cursore hanno un grande effetto.
      </p>
      <p>
        La seconda leva è la <strong>risoluzione</strong>. Ridurre l&rsquo;altezza
        massima — ad esempio da 2160p a 1080p o 720p — taglia drasticamente il
        numero di pixel, e meno pixel richiedono meno bit a parità di qualità. Per
        le riprese che verranno guardate su un telefono o incorporate in un
        documento, una ricodifica a 720p o 1080p spesso appare identica nella
        pratica pur essendo una frazione della dimensione. I preset combinano un
        CRF e un limite di altezza così ottieni un buon risultato senza regolare
        nulla; il cursore del CRF è lì per quando vuoi un controllo più fine.
      </p>
      <p>
        Due cose contano meno di quanto la gente si aspetti. Primo, il frame rate:
        la maggior parte dei clip non ha bisogno di più di quello che
        l&rsquo;originale ha già, e ridurlo fa risparmiare solo uno spazio modesto
        rispetto al CRF e alla risoluzione. Secondo, la traccia audio. Voce e
        musica aggiungono un po&rsquo; di peso, ma una tipica colonna sonora AAC è
        una piccola fetta di un file video, quindi è quasi sempre nell&rsquo;immagine
        che stanno i risparmi. Ecco perché questo strumento concentra le tue
        scelte sulla qualità e sulla risoluzione — le due impostazioni che fanno
        la differenza — e ricodifica l&rsquo;audio a un bitrate sensato in modo
        automatico.
      </p>

      <h2 id="format">
        MP4, H.264 e quando ricodificare aiuta davvero
      </h2>
      <p>
        La stragrande maggioranza dei file MP4 contiene già un flusso video H.264
        (chiamato anche AVC), motivo per cui MP4 si riproduce praticamente
        ovunque: dai vecchi telefoni alle smart TV. Puoi leggere come i browser
        descrivono il contenitore MP4 e il codec H.264 nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai contenitori multimediali di MDN
        </a>{" "}
        e nel suo{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264"
          target="_blank"
          rel="noopener noreferrer"
        >
          riferimento al codec AVC / H.264
        </a>
        . Produrre H.264 in MP4 mantiene intatta quella compatibilità universale.
      </p>
      <p>
        Ricodificare un MP4 che è <em>già</em> H.264 aiuta quando
        l&rsquo;originale è stato esportato con generosità — bitrate alto,
        risoluzione grande, o entrambi — perché c&rsquo;è margine da recuperare.
        Aiuta molto meno, e può persino produrre un file{" "}
        <strong>più grande</strong>, quando il video era già compresso al massimo:
        ricodificare un flusso con perdita significa decodificarlo e comprimerlo di
        nuovo con perdita, quindi ci guadagni solo se il tuo nuovo obiettivo è
        realmente più basso dell&rsquo;originale. Se l&rsquo;output non risultasse
        più piccolo, questo strumento ti tiene informato così puoi semplicemente
        conservare il tuo originale. Per spremere di più, alza il CRF o abbassa la
        risoluzione invece di aspettarti magie da una sola passata.
      </p>

      <h2 id="tips">Consigli e il compromesso di velocità nel browser</h2>
      <p>
        Tutto avviene sul tuo dispositivo usando una versione in WebAssembly di{" "}
        ffmpeg, ed è ciò che rende tutto questo privato, ma è anche a{" "}
        <strong>un solo thread</strong>. Un encoder desktop nativo distribuisce il
        lavoro su tutti i core della CPU; la versione del browser, per
        compatibilità e sicurezza, ne usa uno. Questo significa che i video lunghi
        o ad alta risoluzione possono richiedere un po&rsquo; di tempo e mettere
        sotto sforzo i telefoni con poca memoria. Poche abitudini mantengono tutto
        scorrevole:
      </p>
      <ul>
        <li>
          <strong>Taglia prima quando puoi.</strong> La durata è un
          moltiplicatore diretto sia della dimensione del file sia del tempo di
          codifica, quindi tagliare i tempi morti prima di comprimere è la
          vittoria più facile.
        </li>
        <li>
          <strong>Abbassa la risoluzione per condividere.</strong> 720p o 1080p è
          più che sufficiente per messaggistica, diapositive e la maggior parte
          degli embed web; riserva il 4K agli archivi che guardi davvero su uno
          schermo grande.
        </li>
        <li>
          <strong>Inizia con Bilanciato, poi confronta.</strong> Riesegui con un
          preset più piccolo e verifica se riesci a cogliere la differenza alla
          tua reale dimensione di visualizzazione prima di decidere.
        </li>
        <li>
          <strong>Esegui i lavori grandi su un dispositivo alla volta.</strong>{" "}
          Chiudi le altre schede pesanti così l&rsquo;encoder ha memoria e CPU con
          cui lavorare; i clip brevi finiscono prima.
        </li>
      </ul>
      <p>
        Lavori con altri formati? Usa il{" "}
        <Link href="/it/video-compressor">compressore video</Link> più generale
        per MP4 e tutto il resto, il{" "}
        <Link href="/it/compress-mov">compressore di MOV, WebM, MKV e AVI</Link>{" "}
        per le riprese che non sono MP4, o il{" "}
        <Link href="/it/audio-compressor">compressore audio</Link> quando ti serve
        solo ridurre una colonna sonora o una registrazione vocale.
      </p>
    </>
  ),
};
