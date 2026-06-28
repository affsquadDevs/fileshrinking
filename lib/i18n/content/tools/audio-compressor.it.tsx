import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressore audio — MP3 e AAC gratis online",
  metaDescription:
    "Comprimi audio MP3, WAV, AAC, M4A, OGG e FLAC nel browser. Scegli il bitrate, senza caricamenti né registrazione: i file non lasciano mai il tuo dispositivo.",
  heading: "Compressore audio",
  intro: (
    <>
      Riduci le dimensioni dei file MP3, WAV, AAC, M4A, OGG e FLAC direttamente
      nel tuo browser. Ricodifica in MP3 o AAC con il bitrate che preferisci e
      scarica una traccia più leggera in pochi secondi: non viene mai caricato
      nulla.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere un file audio",
    description:
      "Comprimi MP3, WAV, AAC e altro localmente nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi il tuo audio",
        text: "Trascina e rilascia i tuoi file audio nell'area di caricamento oppure fai clic per sceglierli. Sono accettati MP3, WAV, AAC, M4A, OGG e FLAC.",
      },
      {
        name: "Scegli un formato di output",
        text: "Scegli MP3 per la massima compatibilità o AAC (.m4a) per una qualità leggermente migliore a parità di dimensioni.",
      },
      {
        name: "Scegli un bitrate",
        text: "Imposta il bitrate per regolare l'equilibrio tra dimensioni e qualità. 128 kbps va bene per la musica; scendi a 96 kbps per voce e podcast e risparmia ancora di più.",
      },
      {
        name: "Scarica il tuo file",
        text: "Ogni traccia viene ricodificata sul tuo dispositivo con FFmpeg. Vedrai le dimensioni originali, le nuove dimensioni e la percentuale risparmiata, poi scarichi il risultato.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file audio vengono caricati su un server?",
      a: (
        <>
          No. Ogni traccia viene ricodificata localmente nel tuo browser con una
          versione di FFmpeg compilata in WebAssembly. Il tuo audio non lascia
          mai il tuo dispositivo e non c&rsquo;è alcun server a riceverlo: una
          volta caricata la pagina puoi persino disconnetterti da internet e
          continuerà a funzionare.
        </>
      ),
      text: "No. Ogni traccia viene ricodificata localmente nel tuo browser con una versione di FFmpeg compilata in WebAssembly. Il tuo audio non lascia mai il tuo dispositivo e non c'è alcun server a riceverlo. Una volta caricata la pagina puoi disconnetterti da internet e continuerà a funzionare.",
    },
    {
      q: "Il compressore audio è davvero gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza account, senza filigrane e senza
          limiti al numero di file. L&rsquo;unico tetto pratico è la memoria del
          tuo dispositivo. Il sito si sostiene con annunci discreti.
        </>
      ),
      text: "Sì. È completamente gratuito, senza account, senza filigrane e senza limiti al numero di file. L'unico tetto pratico è la memoria del tuo dispositivo. Il sito si sostiene con annunci discreti.",
    },
    {
      q: "La compressione ridurrà la qualità dell'audio?",
      a: (
        <>
          MP3 e AAC sono formati con perdita, quindi viene scartato un po&rsquo;
          di dettaglio non udibile per ridurre il file. A 128 kbps la maggior
          parte degli ascoltatori non distingue la musica dall&rsquo;originale, e
          96 kbps sono più che sufficienti per voce o podcast. Scegli un bitrate
          più alto per restare più vicino alla sorgente.
        </>
      ),
      text: "MP3 e AAC sono formati con perdita, quindi viene scartato un po' di dettaglio non udibile per ridurre il file. A 128 kbps la maggior parte degli ascoltatori non distingue la musica dall'originale, e 96 kbps sono più che sufficienti per voce o podcast. Scegli un bitrate più alto per restare più vicino alla sorgente.",
    },
    {
      q: "Qual è la dimensione massima del file che posso comprimere?",
      a: (
        <>
          Non c&rsquo;è un limite fisso: dipende dalla memoria disponibile sul
          tuo dispositivo. Le canzoni, i podcast e i memo vocali tipici vengono
          elaborati in pochi secondi. Anche i file WAV non compressi molto grandi
          (di centinaia di megabyte) funzionano, ma usano più memoria e
          richiedono più tempo perché il codificatore viene eseguito su un solo
          thread nel tuo browser.
        </>
      ),
      text: "Non c'è un limite fisso; dipende dalla memoria disponibile sul tuo dispositivo. Le canzoni, i podcast e i memo vocali tipici vengono elaborati in pochi secondi. Anche i file WAV non compressi molto grandi di centinaia di megabyte funzionano, ma usano più memoria e richiedono più tempo perché il codificatore viene eseguito su un solo thread nel tuo browser.",
    },
    {
      q: "Quali formati posso comprimere e cosa ottengo in cambio?",
      a: (
        <>
          Puoi inserire MP3, WAV, AAC, M4A, OGG o FLAC. Lo strumento ricodifica
          in MP3 (con il codificatore LAME) o AAC (.m4a) al bitrate che scegli,
          così l&rsquo;output è un file ampiamente compatibile che si riproduce
          ovunque.
        </>
      ),
      text: "Puoi inserire MP3, WAV, AAC, M4A, OGG o FLAC. Lo strumento ricodifica in MP3 (con il codificatore LAME) o AAC (.m4a) al bitrate che scegli, così l'output è un file ampiamente compatibile che si riproduce ovunque.",
    },
    {
      q: "Dovrei scegliere MP3 o AAC?",
      a: (
        <>
          Entrambi sono eccellenti. MP3 è il formato con la maggiore
          compatibilità universale e una scelta sicura per la condivisione. AAC
          in genere suona leggermente meglio a parità di bitrate ed è il formato
          nativo dei dispositivi Apple e della maggior parte dello streaming. Se
          hai dubbi, MP3 a 128 kbps è una scelta affidabile per ogni esigenza.
        </>
      ),
      text: "Entrambi sono eccellenti. MP3 è il formato con la maggiore compatibilità universale e una scelta sicura per la condivisione. AAC in genere suona leggermente meglio a parità di bitrate ed è nativo dei dispositivi Apple e della maggior parte dello streaming. Se hai dubbi, MP3 a 128 kbps è una scelta affidabile per ogni esigenza.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché comprimere i file audio?</h2>
      <p>
        I file audio possono essere sorprendentemente pesanti. Pochi minuti di
        WAV non compresso possono raggiungere decine di megabyte, un episodio di
        podcast con bitrate elevato può gonfiare un download e gli album FLAC
        senza perdita riempiono un disco con facilità. Che tu debba inviare un
        memo vocale via email, caricare un podcast, allegare una canzone a un
        messaggio o risparmiare spazio sul telefono, ridurre il file rende tutto
        più rapido ed economico da spostare e archiviare, di solito senza
        differenze udibili con impostazioni ragionevoli.
      </p>
      <p>
        Poiché questo strumento viene eseguito interamente sul tuo dispositivo,
        è anche il modo privato di farlo. La maggior parte dei compressori audio
        online carica la tua registrazione su un server remoto, la elabora lì e
        te la rispedisce, il che significa che una copia della tua voce o della
        tua musica resta sulla macchina di qualcun altro. Qui il tuo file viene
        caricato in memoria, ricodificato con una versione di FFmpeg compilata in
        WebAssembly e restituito direttamente a te. Non tocca mai la rete.
      </p>
      <p>
        Questo design esclusivamente locale ha vantaggi pratici oltre alla
        privacy. Non ci sono attese di caricamento o download mentre il file
        attraversa internet, né code dietro i lavori di altre persone, né un
        limite di dimensioni imposto da un server che non controlli. La prima
        volta che usi lo strumento, scarica il motore FFmpeg una sola volta;
        dopodiché lo stesso motore viene riutilizzato per ogni file, e anche le
        compressioni ripetute restano veloci perché tutto il lavoro avviene sul
        tuo processore.
      </p>

      <h2 id="bitrate">Bitrate e qualità: come scegliere</h2>
      <p>
        La leva più importante sulle dimensioni di un file audio è il{" "}
        <strong>bitrate</strong>: il numero di kilobit usati per memorizzare
        ogni secondo di suono, indicato come kbps. Dimezza il bitrate e dimezzi
        all&rsquo;incirca il file. Il compromesso è che i bitrate più bassi
        scartano più dettagli, quindi l&rsquo;obiettivo è scegliere il bitrate
        più basso al quale le tue orecchie ancora non notano la differenza.
      </p>
      <p>
        Il bitrate interagisce anche con il tipo di audio che stai codificando.
        La musica densa e complessa &mdash; mix affollati, piatti, chitarre
        distorte &mdash; è più difficile da comprimere e trae vantaggio da un
        bitrate più alto, mentre una semplice registrazione vocale resta nitida
        anche se compressa con decisione. Non esiste un unico numero
        &laquo;corretto&raquo;; l&rsquo;impostazione migliore è quella che suona
        pulita sugli altoparlanti o sulle cuffie che i tuoi ascoltatori
        useranno davvero. Un modo rapido per decidere è esportare lo stesso clip
        a due bitrate e confrontarli uno di seguito all&rsquo;altro. Usa questi
        come punti di partenza:
      </p>
      <ul>
        <li>
          <strong>256 kbps</strong>: quasi trasparente per la musica; scegli
          questo quando vuoi il file più piccolo che suoni ancora
          essenzialmente come l&rsquo;originale.
        </li>
        <li>
          <strong>192 kbps</strong>: qualità eccellente per la musica con un
          risparmio di dimensioni significativo rispetto alla sorgente.
        </li>
        <li>
          <strong>128 kbps</strong>: il classico tuttofare. Per la maggior parte
          degli ascoltatori è indistinguibile dalla musica con qualità da CD su
          altoparlanti e cuffie di uso quotidiano, con una frazione delle
          dimensioni.
        </li>
        <li>
          <strong>96 kbps</strong>: ideale per i contenuti parlati come
          audiolibri, podcast e memo vocali, dove non c&rsquo;è musica da
          preservare.
        </li>
      </ul>
      <p>
        Un avvertimento importante: sia MP3 sia AAC sono formati{" "}
        <strong>con perdita</strong>, e ricodificare un file con perdita scarta
        sempre un po&rsquo; di più. Comprimi sempre dalla sorgente di qualità
        più alta che hai, e non ricodificare mai un file che hai già compresso a
        un bitrate basso portandolo a uno più alto: ciò gonfia soltanto le
        dimensioni senza recuperare nulla del dettaglio perduto.
      </p>
      <p>
        Aiuta anche sapere cosa implica nella pratica una dimensione di file
        obiettivo. Il bitrate è all&rsquo;incirca la dimensione del file divisa
        per la durata, quindi un clip di un minuto a 128 kbps si aggira intorno
        a un megabyte, e una canzone tipica da tre o quattro minuti allo stesso
        bitrate si attesta su circa tre o quattro megabyte. Se hai un limite di
        dimensioni preciso da rispettare &mdash; un tetto per gli allegati
        email, un modulo di caricamento o un&rsquo;app di messaggistica &mdash;,
        dividi quel limite per la durata della traccia per stimare il bitrate
        che puoi permetterti, poi arrotonda per difetto al preset più vicino.
      </p>

      <h2 id="formats">MP3, AAC, WAV e FLAC spiegati</h2>
      <p>
        I formati audio si dividono in due gruppi. I formati{" "}
        <strong>senza perdita</strong> come WAV e FLAC conservano ogni campione
        della registrazione originale: WAV la memorizza non compressa (enorme),
        mentre FLAC la impacchetta in modo più piccolo senza perdere nulla. I
        formati <strong>con perdita</strong> come MP3, AAC e OGG rimuovono in
        modo permanente il suono che l&rsquo;orecchio umano è meno in grado di
        percepire, ed è così che ottengono riduzioni di dimensioni drastiche.
        Puoi leggere una chiara panoramica tecnica di questi codec nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai codec audio web di MDN
        </a>
        .
      </p>
      <p>
        È esattamente qui che si trovano i maggiori risparmi. Convertire un file
        WAV o FLAC in un MP3 o AAC a 128 kbps riduce abitualmente le dimensioni
        dell&rsquo;<strong>80&ndash;90%</strong>, perché passi dal memorizzare
        ogni campione al memorizzare solo ciò che puoi sentire. Se vuoi
        conservare un archivio master, tieni l&rsquo;originale senza perdita; ma
        per condividere, fare streaming o caricare, una copia con perdita è
        quasi sempre la scelta giusta. Quando ti serve la massima compatibilità,
        scegli MP3; quando vuoi il suono migliore a un dato bitrate o sei
        nell&rsquo;ecosistema Apple, scegli AAC (.m4a).
      </p>
      <p>
        Un punto di confusione comune è la differenza tra un contenitore e un
        codec. Un file <strong>.m4a</strong> è un contenitore che di solito
        ospita audio codificato in AAC, mentre <strong>.mp3</strong> è sia un
        contenitore sia il suo codec. OGG, dal canto suo, è un contenitore che
        più spesso trasporta audio Vorbis o Opus. Questo strumento ti consegna
        sempre un risultato pulito in MP3 o AAC qualunque cosa tu inserisca,
        così non devi preoccuparti di estensioni non corrispondenti o di file
        che non si aprono: l&rsquo;output è esattamente ciò che dice il suo nome
        e si riproduce allo stesso modo in browser, telefoni, impianti audio
        delle auto e software di editing.
      </p>

      <h2 id="tips">Consigli per ottenere i migliori risultati</h2>
      <ul>
        <li>
          <strong>Adatta il bitrate al contenuto.</strong> Abbassa le
          registrazioni vocali a 96 kbps e riserva 192&ndash;256 kbps alla
          musica che vuoi mantenere vicina alla sorgente.
        </li>
        <li>
          <strong>Non aumentare la qualità artificialmente.</strong>{" "}
          Ricodificare un file da 96 kbps a 256 kbps non ripristinerà la
          qualità; rende soltanto il file più grande. Parti dal miglior
          originale che hai.
        </li>
        <li>
          <strong>Vuoi estrarre l&rsquo;audio da un clip?</strong> Se il tuo
          suono è intrappolato dentro un video, riduci prima il video con il{" "}
          <Link href="/it/video-compressor">compressore video</Link>, che
          ricodifica la traccia audio come parte del lavoro, e poi porta qui
          l&rsquo;audio esportato per un controllo più fine su bitrate e
          formato.
        </li>
        <li>
          <strong>Conserva un master senza perdita.</strong> Comprimi copie da
          condividere, ma archivia il WAV o FLAC originale così da poter sempre
          riesportare con un&rsquo;altra qualità in seguito.
        </li>
        <li>
          <strong>Attenzione al dispositivo con i file enormi.</strong> Poiché
          la codifica viene eseguita nel tuo browser, un WAV di diverse centinaia
          di megabyte richiede parecchia memoria. Su un telefono, comprimi un
          solo file grande alla volta e chiudi le altre schede se noti
          rallentamenti.
        </li>
      </ul>
    </>
  ),
};
