import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimere HEIC — Convertitore HEIC in JPG gratis",
  metaDescription:
    "Converti foto HEIC e HEIF dell'iPhone in JPG, WebP o AVIF nel browser, con qualità e dimensioni regolabili. Zero caricamenti: le foto non lasciano il dispositivo.",
  heading: "Compressore e convertitore HEIC",
  intro: (
    <>
      Trasforma le foto HEIC e HEIF dell'iPhone in file JPG, WebP o AVIF
      compatibili con tutto &mdash; e riducile con qualità e dimensioni
      regolabili. Tutto viene eseguito nel tuo browser, così le tue foto non
      vengono mai caricate.
    </>
  ),
  lastUpdated: "2026-06-28",
  howTo: {
    name: "Come convertire e comprimere foto HEIC",
    description:
      "Converti le immagini HEIC/HEIF dell'iPhone in JPG, WebP o AVIF localmente nel tuo browser.",
    steps: [
      {
        name: "Aggiungi le tue foto HEIC",
        text: "Trascina e rilascia i tuoi file .heic o .heif sull'area di caricamento, fai clic per sfogliare oppure incollali. Puoi aggiungere un intero lotto in una volta sola.",
      },
      {
        name: "Scegli un formato di output",
        text: "Scegli JPG per la massima compatibilità, oppure WebP/AVIF per i file più piccoli. Imposta un livello di qualità: intorno a 80 è ottimo per le foto.",
      },
      {
        name: "Converti sul tuo dispositivo",
        text: "Ogni foto viene decodificata con una versione WebAssembly di libheif e ricodificata localmente. Vedrai la dimensione originale e quella nuova di ogni file.",
      },
      {
        name: "Scarica le tue foto",
        text: "Scarica le immagini una alla volta, oppure prendile tutte in un ZIP. Modifica il formato, la qualità o le dimensioni e rielaborale quando vuoi.",
      },
    ],
  },
  faqs: [
    {
      q: "Le mie foto HEIC vengono caricate su un server?",
      a: (
        <>
          No. I tuoi file HEIC vengono decodificati e ricodificati interamente
          nel tuo browser tramite WebAssembly: non lasciano mai il tuo
          dispositivo. La maggior parte degli altri siti di
          &ldquo;convertitore HEIC&rdquo; carica le tue foto personali sui
          propri server; questo non ha alcun server su cui caricarle, e puoi
          disconnetterti da internet dopo il caricamento della pagina e
          continuerà a funzionare.
        </>
      ),
      text: "No. I file HEIC vengono decodificati e ricodificati interamente nel tuo browser tramite WebAssembly e non lasciano mai il tuo dispositivo. La maggior parte degli altri siti di convertitore HEIC carica le tue foto personali su un server; questo no. Puoi disconnetterti da internet dopo il caricamento della pagina e continuerà a funzionare.",
    },
    {
      q: "Perché dovrei convertire HEIC in JPG?",
      a: (
        <>
          HEIC è il formato foto predefinito di Apple, ma molti PC con Windows,
          siti web, app e dispositivi più vecchi non possono aprirlo.
          Convertire in JPG (o WebP/AVIF) fa sì che le tue foto si aprano
          ovunque, così puoi condividerle, caricarle e modificarle senza errori
          di compatibilità.
        </>
      ),
      text: "HEIC è il formato foto predefinito di Apple ma molti PC con Windows, siti web, app e dispositivi più vecchi non possono aprirlo. Convertire in JPG, WebP o AVIF fa sì che le foto si aprano ovunque così puoi condividerle, caricarle e modificarle.",
    },
    {
      q: "La conversione ridurrà la qualità della mia foto?",
      a: (
        <>
          Convertire in JPEG, WebP o AVIF è con perdita, quindi una parte del
          dettaglio viene ricodificata. Con qualità 75&ndash;85 la differenza è
          normalmente invisibile alle dimensioni di visualizzazione standard.
          Mantieni la qualità alta per restare fedele all'originale, oppure
          abbassala (e ridimensiona) quando un file più piccolo conta di più.
        </>
      ),
      text: "Convertire in JPEG, WebP o AVIF è con perdita, quindi una parte del dettaglio viene ricodificata. Con qualità 75-85 la differenza è normalmente invisibile. Mantieni la qualità alta per restare fedele all'originale, oppure abbassala e ridimensiona quando un file più piccolo conta di più.",
    },
    {
      q: "Perché il JPG convertito a volte è più grande dell'HEIC?",
      a: (
        <>
          HEIC è un formato estremamente efficiente: spesso memorizza una foto
          in circa la metà delle dimensioni di un JPEG equivalente. Quindi una
          conversione diretta da HEIC&rarr;JPEG può occasionalmente produrre un
          file più grande. Per ridurre davvero la foto, scegli WebP o AVIF (che
          eguagliano l'efficienza di HEIC), abbassa il cursore della qualità o
          ridimensiona l'immagine.
        </>
      ),
      text: "HEIC è molto efficiente e spesso memorizza una foto in circa la metà delle dimensioni di un JPEG equivalente, quindi una conversione diretta da HEIC a JPEG può produrre un file più grande. Per ridurre la foto, scegli WebP o AVIF, abbassa il cursore della qualità o ridimensiona l'immagine.",
    },
    {
      q: "Qual è la differenza tra HEIC e HEIF?",
      a: (
        <>
          HEIF (High Efficiency Image File Format) è il contenitore; HEIC è la
          variante comune usata da Apple, in cui l'immagine all'interno è
          codificata con HEVC (H.265). Nell'uso quotidiano i nomi sono
          intercambiabili: questo strumento accetta sia file .heic sia .heif.
        </>
      ),
      text: "HEIF (High Efficiency Image File Format) è il contenitore e HEIC è la variante comune di Apple in cui l'immagine è codificata con HEVC (H.265). I nomi vengono usati in modo intercambiabile; questo strumento accetta sia file .heic sia .heif.",
    },
    {
      q: "Posso convertire più foto HEIC in una volta?",
      a: (
        <>
          Sì. Rilascia un intero lotto &mdash; per esempio una cartella di foto
          inviate via AirDrop dal tuo iPhone &mdash; e vengono convertite una
          alla volta; poi puoi scaricarle singolarmente o tutte insieme in un
          ZIP.
        </>
      ),
      text: "Sì. Aggiungi un intero lotto di foto HEIC e vengono convertite una alla volta, poi scaricate singolarmente o tutte insieme in un ZIP.",
    },
    {
      q: "Il convertitore HEIC è gratuito?",
      a: (
        <>
          Completamente gratuito: nessuna registrazione, nessuna filigrana e
          nessun limite al numero o alle dimensioni dei file oltre alla memoria
          del tuo dispositivo. Il sito si sostiene con annunci discreti, e il
          codice è open source così puoi verificare esattamente cosa fa.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, filigrane o limiti ai file oltre alla memoria del tuo dispositivo. Il sito si sostiene con annunci discreti e il codice è open source.",
    },
  ],
  content: (
    <>
      <h2 id="why-convert">Perché convertire i file HEIC?</h2>
      <p>
        Da iOS 11, gli iPhone e gli iPad salvano le foto come{" "}
        <strong>HEIC</strong> per impostazione predefinita. È un formato
        eccellente per risparmiare spazio sul dispositivo, ma ha un grande
        svantaggio: la <strong>compatibilità</strong>. Molti PC con Windows, app
        web, sistemi di gestione dei contenuti, stampanti fotografiche e
        telefoni più vecchi ancora non riescono ad aprire un file .heic, il che
        porta al fin troppo familiare errore di &ldquo;formato non
        supportato&rdquo; quando provi a condividere o caricare un'immagine.
      </p>
      <p>
        Convertire le tue foto HEIC in un formato ampiamente supportato come{" "}
        <strong>JPG</strong>, <strong>WebP</strong> o <strong>AVIF</strong> lo
        risolve all'istante: l'immagine si apre ovunque, mentre tu mantieni il
        controllo su qualità e dimensione del file. E poiché questo strumento
        viene eseguito interamente sul tuo dispositivo, le tue foto personali
        non vengono mai caricate sul server di nessuno.
      </p>

      <h2 id="what-is-heic">Cos'è HEIC (e HEIF)?</h2>
      <p>
        HEIC sta per <em>High Efficiency Image Container</em>. È
        l'implementazione di Apple dello standard <strong>HEIF</strong> (High
        Efficiency Image File Format), in cui l'immagine vera e propria è
        compressa con <strong>HEVC (H.265)</strong> &mdash; lo stesso codec
        video moderno usato per i video efficienti. Quella compressione
        avanzata è il motivo per cui una foto HEIC occupa di solito circa{" "}
        <strong>la metà delle dimensioni</strong> di un JPEG equivalente a
        parità di qualità visiva, e anche il motivo per cui può memorizzare
        extra come mappe di profondità, Live Photos e un colore più ampio. Puoi
        leggere di più su come i browser gestiscono i formati immagine sulla{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai formati immagine di MDN
        </a>
        . La decodifica qui è alimentata da{" "}
        <a
          href="https://github.com/strukturag/libheif"
          target="_blank"
          rel="noopener noreferrer"
        >
          libheif
        </a>
        , la libreria open source per HEIF/HEIC, compilata in WebAssembly.
      </p>

      <h2 id="compress-vs-convert">
        Comprimere o convertire: cosa aspettarsi
      </h2>
      <p>
        Ecco un punto onesto che la maggior parte dei convertitori non ti dirà:
        poiché HEIC è già così efficiente, una semplice conversione
        HEIC&nbsp;&rarr;&nbsp;JPEG{" "}
        <strong>non renderà sempre il file più piccolo</strong> &mdash; e a
        volte può renderlo un po' più grande. Non è un bug; è il prezzo del
        passaggio alla compressione più vecchia e più compatibile di JPEG.
      </p>
      <p>
        Se il tuo obiettivo sono davvero file più piccoli, hai tre leve, e puoi
        combinarle:
      </p>
      <ul>
        <li>
          <strong>Scegli WebP o AVIF invece di JPEG.</strong> Questi formati
          moderni rivaleggiano con l'efficienza di HEIC, così mantieni le
          dimensioni ridotte <em>e</em> guadagni un'ampia compatibilità. AVIF,
          come HEIC, si basa su una tecnologia di codec moderna e di solito
          produce il risultato più piccolo.
        </li>
        <li>
          <strong>Abbassa il cursore della qualità.</strong> Passare da 90 a
          70&ndash;75 riduce il file in modo sostanziale con poche variazioni
          visibili.
        </li>
        <li>
          <strong>Ridimensiona l'immagine.</strong> Una foto da telefono di
          4032&times;3024 è molto più grande di quanto serva a qualsiasi
          schermo. Rimpicciolirla è il singolo risparmio più grande per la
          condivisione o per il web.
        </li>
      </ul>

      <h2 id="choosing-format">JPEG, WebP o AVIF: quale scegliere</h2>
      <p>
        <strong>JPEG</strong> è l'opzione predefinita sicura: ogni dispositivo,
        app e sito web sulla terra può aprirlo, il che lo rende perfetto per
        inviare foto via email, caricarle su un sito che rifiuta HEIC o
        spedirle a qualcuno con Windows.{" "}
        <Link href="/it/compress-jpeg">Comprimi i JPEG</Link> ulteriormente
        quando vuoi.
      </p>
      <p>
        <strong>WebP</strong> è ampiamente supportato nei browser e nelle app
        moderni ed è circa il 25&ndash;35% più piccolo di JPEG: un'ottima scelta
        per il web. <strong>AVIF</strong> è il più efficiente in termini di
        spazio dei tre e il parente più stretto di HEIC, ideale quando le
        dimensioni ridotte contano di più e la tua destinazione lo supporta. Non
        sei sicuro? Converti un campione in entrambi i modi con il nostro{" "}
        <Link href="/it/image-converter">convertitore di immagini</Link> e
        confronta, oppure leggi{" "}
        <Link href="/it/blog/jpeg-vs-png-vs-webp-vs-avif">
          il nostro confronto tra formati
        </Link>
        .
      </p>

      <h2 id="privacy">Privato per design, e open source</h2>
      <p>
        Il tuo rullino fotografico è personale. Caricarlo su un sito di
        conversione qualunque significa consegnare a sconosciuti copie delle
        tue foto, compreso tutto ciò che appare sullo sfondo. FileShrinking
        adotta un approccio diverso: i tuoi file HEIC vengono decodificati e
        ricodificati <strong>localmente nel tuo browser</strong> e non vengono
        mai trasmessi da nessuna parte. E non devi nemmeno fidarti della nostra
        parola: l'intero progetto è{" "}
        <Link href="/it/about">open source</Link>, così la promessa del nessun
        caricamento è qualcosa che chiunque può verificare nel codice. Scopri di
        più su come funziona nella{" "}
        <Link href="/it/blog/how-client-side-file-compression-works">
          nostra spiegazione sulla compressione lato client
        </Link>
        .
      </p>

      <h2 id="tips">Consigli per ottenere i migliori risultati</h2>
      <ul>
        <li>
          <strong>Stai inviando qualcosa a qualcuno o caricandolo da qualche
          parte?</strong> Scegli JPG: è garantito che si apra.
        </li>
        <li>
          <strong>Ottimizzi per il web o per l'archiviazione?</strong> Scegli
          AVIF o WebP per i file più piccoli a parità di qualità.
        </li>
        <li>
          <strong>Ridimensiona prima di convertire.</strong> Se la foto verrà
          vista su un telefono o in un documento, rimpicciolirla fa risparmiare
          molto più della sola qualità.
        </li>
        <li>
          <strong>Elabora in blocco un intero AirDrop.</strong> Rilascia tutte
          le foto in una volta e scaricale insieme in un ZIP.
        </li>
      </ul>
    </>
  ),
};
