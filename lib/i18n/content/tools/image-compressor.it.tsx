import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressore di immagini — Gratis e privato",
  metaDescription:
    "Comprimi immagini JPEG, PNG, WebP, AVIF e GIF nel browser. 100% privato, senza caricamenti né registrazione: le foto non lasciano mai il dispositivo.",
  heading: "Compressore di immagini",
  intro: (
    <>
      Comprimi e converti immagini JPEG, PNG, WebP, AVIF e GIF direttamente nel
      tuo browser. Aggiungi le tue foto, scegli un formato e una qualità e
      scarica file più piccoli in pochi secondi: tutto viene eseguito sul tuo
      dispositivo, quindi non viene mai caricato nulla.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere un'immagine",
    description:
      "Comprimi o converti qualsiasi formato di immagine comune in locale nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi le tue immagini",
        text: "Trascina e rilascia file JPEG, PNG, WebP, AVIF o GIF nell'area di caricamento, fai clic per sfogliare oppure incolla dagli appunti. Mescola i formati liberamente: ogni file viene elaborato separatamente.",
      },
      {
        name: "Scegli un formato di output",
        text: "Lascia Stesso formato per ricomprimere senza cambiare il tipo, oppure scegli JPEG, PNG, WebP o AVIF per convertire. WebP e AVIF generano i file più piccoli per le foto.",
      },
      {
        name: "Imposta la qualità (e ridimensiona se serve)",
        text: "Usa il cursore della qualità — intorno a 75 va bene per la maggior parte delle foto — oppure il livello senza perdita per PNG. Se vuoi, ridimensiona per percentuale o per pixel esatti per risparmiare ancora di più.",
      },
      {
        name: "Scarica i tuoi risultati",
        text: "Salva le immagini una alla volta oppure scaricale tutte in un file ZIP. Ogni file mostra la dimensione originale, la nuova dimensione e la percentuale risparmiata, così puoi riregolare e riprovare.",
      },
    ],
  },
  faqs: [
    {
      q: "Le mie immagini vengono caricate su un server?",
      a: (
        <>
          No. Ogni immagine che aggiungi viene decodificata e ricodificata
          interamente nel tuo browser tramite WebAssembly. Non viene inviato
          nulla da nessuna parte: non c&apos;è alcun passaggio di caricamento né
          alcun server che veda i tuoi file. Puoi persino spegnere la connessione
          a internet una volta caricata la pagina e continuare a comprimere.
        </>
      ),
      text: "No. Ogni immagine viene decodificata e ricodificata interamente nel tuo browser tramite WebAssembly. Non viene inviato nulla da nessuna parte; non c'è alcun passaggio di caricamento né alcun server che veda i tuoi file. Puoi spegnere la connessione a internet una volta caricata la pagina e continuare a comprimere.",
    },
    {
      q: "Il compressore di immagini è gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza account, senza filigrane e senza
          limiti giornalieri. Puoi elaborare tutte le immagini che la memoria
          del tuo dispositivo consente. Il sito si mantiene grazie ad annunci
          discreti mostrati accanto all&apos;articolo, mai dentro lo strumento
          stesso.
        </>
      ),
      text: "Sì. È completamente gratuito, senza account, senza filigrane e senza limiti giornalieri. Puoi elaborare tutte le immagini che la memoria del tuo dispositivo consente. Il sito si mantiene con annunci discreti mostrati accanto all'articolo, non dentro lo strumento.",
    },
    {
      q: "Comprimere ridurrà la qualità delle mie immagini?",
      a: (
        <>
          Dipende dal formato e dalle impostazioni. I formati con perdita come
          JPEG, WebP e AVIF scartano i dettagli fini per ridurre il file, ma con
          una qualità intorno a 75 il cambiamento è di solito impercettibile.
          L&apos;ottimizzazione senza perdita di PNG non elimina alcun dettaglio:
          si limita a riscrivere il file in modo più efficiente. Usa il cursore
          della qualità per bilanciare dimensione e fedeltà in ogni lavoro.
        </>
      ),
      text: "Dipende dal formato e dalle impostazioni. I formati con perdita come JPEG, WebP e AVIF scartano i dettagli fini per ridurre il file, ma con una qualità intorno a 75 il cambiamento è di solito impercettibile. L'ottimizzazione senza perdita di PNG non elimina alcun dettaglio; si limita a riscrivere il file in modo più efficiente. Usa il cursore della qualità per bilanciare dimensione e fedeltà.",
    },
    {
      q: "Qual è la dimensione massima di file che posso comprimere?",
      a: (
        <>
          Non c&apos;è un limite fisso: è vincolato solo dalla memoria
          disponibile del tuo dispositivo. Le foto comuni di pochi megabyte e le
          immagini grandi da 20–50 MP funzionano comodamente sia su telefoni che
          su portatili. I lotti vengono elaborati un&apos;immagine alla volta,
          il che mantiene basso l&apos;uso della memoria anche con molti file di
          grandi dimensioni.
        </>
      ),
      text: "Non c'è un limite fisso; è vincolato solo dalla memoria disponibile del tuo dispositivo. Le foto comuni di pochi megabyte e le immagini grandi da 20-50 MP funzionano comodamente su telefoni e portatili. I lotti vengono elaborati un'immagine alla volta per mantenere basso l'uso della memoria.",
    },
    {
      q: "Quali formati di immagine supporta questo strumento?",
      a: (
        <>
          Puoi rilasciare file JPEG, PNG, WebP, AVIF e GIF ed esportare in JPEG,
          PNG, WebP o AVIF. Lascia l&apos;output su &laquo;Stesso formato&raquo;
          per ricomprimere senza cambiare il tipo, oppure scegli un altro
          formato per convertire. Per un flusso di lavoro specifico per ogni
          formato, vai al compressore di{" "}
          <Link href="/it/compress-jpeg">JPEG</Link>,{" "}
          <Link href="/it/compress-png">PNG</Link>,{" "}
          <Link href="/it/compress-webp">WebP</Link>,{" "}
          <Link href="/it/compress-avif">AVIF</Link> o{" "}
          <Link href="/it/compress-gif">GIF</Link>.
        </>
      ),
      text: "Puoi rilasciare file JPEG, PNG, WebP, AVIF e GIF ed esportare in JPEG, PNG, WebP o AVIF. Lascia l'output su Stesso formato per ricomprimere senza cambiare il tipo, oppure scegli un altro formato per convertire. Esistono strumenti dedicati per JPEG, PNG, WebP, AVIF e GIF.",
    },
    {
      q: "Qual è la differenza tra comprimere e convertire un'immagine?",
      a: (
        <>
          Comprimere mantiene lo stesso formato e rende il file più piccolo;
          convertire cambia il formato stesso, per esempio trasformando una
          pesante schermata in PNG in un WebP molto più piccolo. Questo hub fa
          entrambe le cose: imposta il formato di output per convertire, oppure
          lascialo invariato per comprimere soltanto. Se il tuo obiettivo
          principale è la conversione, il{" "}
          <Link href="/it/image-converter">convertitore di immagini</Link>{" "}
          dedicato è un&apos;opzione più mirata, e il{" "}
          <Link href="/it/image-resizer">ridimensionatore di immagini</Link> si
          occupa di cambiare le dimensioni.
        </>
      ),
      text: "Comprimere mantiene lo stesso formato e rende il file più piccolo; convertire cambia il formato stesso, come trasformare un PNG pesante in un WebP più piccolo. Questo hub fa entrambe le cose. Per la conversione, il convertitore di immagini dedicato è più mirato, e il ridimensionatore di immagini si occupa di cambiare le dimensioni.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché comprimere e convertire le immagini?</h2>
      <p>
        Le immagini sono la parte più pesante della maggior parte delle pagine
        web, delle email e delle cartelle condivise. La fotocamera di un telefono
        moderno può generare foto da 4–12 MB, e anche le schermate salvate come
        PNG possono risultare sorprendentemente grandi. Le immagini troppo grandi
        rallentano i siti web, superano i limiti di dimensione degli allegati
        email, riempiono lo spazio di archiviazione nel cloud e consumano i dati
        mobili. Comprimerle conserva il dettaglio che ti interessa davvero
        riducendo drasticamente la dimensione del file, spesso tra il 60 e il
        90% a seconda del formato che scegli.
      </p>
      <p>
        Questa pagina è l&apos;hub per ogni formato di immagine. Poiché viene
        eseguita <strong>interamente sul tuo dispositivo</strong>, è anche il
        modo privato di farlo. I compressori online convenzionali caricano le
        tue foto su un server remoto, le elaborano lì e te le rimandano
        indietro. Qui ogni immagine viene letta in memoria, ricodificata con un
        codec WebAssembly e restituita direttamente a te. Le tue foto non
        viaggiano mai attraverso una rete, cosa che conta per foto personali,
        scansioni di documenti d&apos;identità, contratti e qualsiasi altra cosa
        che preferiresti non affidare al server di uno sconosciuto.
      </p>

      <h2 id="lossy">Con perdita contro senza perdita: il compromesso chiave</h2>
      <p>
        Ogni formato di immagine rientra in uno di due gruppi. La compressione{" "}
        <strong>con perdita</strong> — usata da JPEG e dalle modalità
        predefinite di WebP e AVIF — scarta in modo permanente il dettaglio che
        è meno probabile che l&apos;occhio umano noti, ed è così che ottiene
        risparmi tanto grandi. Il cursore della qualità regola quanto è
        aggressiva: i valori più alti conservano più dettaglio e producono file
        più grandi, mentre i valori più bassi risparmiano più spazio ma possono
        introdurre &laquo;artefatti&raquo; visibili, come blocchi o aloni intorno
        ai bordi. La compressione <strong>senza perdita</strong> — usata da PNG e
        GIF, e una modalità opzionale di WebP — riscrive il file in modo più
        efficiente senza scartare un solo pixel, di modo che l&apos;immagine è
        identica bit per bit quando viene decodificata. Lo svantaggio è che il
        risparmio senza perdita è molto più modesto.
      </p>
      <p>
        La regola pratica: usa i formati con perdita per fotografie e immagini
        realistiche, dove una qualità di 70–80 è di solito indistinguibile
        dall&apos;originale, e usa i formati senza perdita per grafica, loghi,
        schermate e qualsiasi cosa con bordi netti o testo, dove gli artefatti
        della compressione con perdita risultano evidenti. Ricorda che la
        compressione con perdita è <strong>cumulativa</strong>: lavora sempre a
        partire dalla tua copia master di massima qualità invece di risalvare una
        copia già compressa.
      </p>

      <h2 id="formats">Scegliere il formato giusto</h2>
      <p>
        Scegliere il formato conta tanto quanto l&apos;impostazione della
        qualità. Come guida rapida: <strong>JPEG</strong> è la scelta universale
        per le foto senza trasparenza; <strong>PNG</strong> è il migliore per
        grafica piatta, schermate e tutto ciò che richiede uno sfondo
        trasparente; <strong>WebP</strong> genera in genere file dal 25 al 35%
        più piccoli di JPEG, pur supportando sia la trasparenza sia
        l&apos;animazione; <strong>AVIF</strong> è il più recente e di solito il
        più piccolo di tutti per le fotografie, al costo di una codifica più
        lenta; e <strong>GIF</strong> è un vecchio formato di animazione quasi
        sempre battuto dalla conversione in WebP o in video. Il resoconto di
        riferimento su come si comporta ogni formato nei browser si trova nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai tipi e ai formati di file immagine di MDN
        </a>
        .
      </p>
      <p>
        Se sai già con quale formato stai lavorando, gli strumenti dedicati ti
        offrono i controlli e le spiegazioni più pertinenti: il{" "}
        <Link href="/it/compress-jpeg">compressore di JPEG</Link> per le foto, il{" "}
        <Link href="/it/compress-png">compressore di PNG</Link> per la grafica
        senza perdita, gli strumenti{" "}
        <Link href="/it/compress-webp">WebP</Link> e{" "}
        <Link href="/it/compress-avif">AVIF</Link> per i file moderni più
        piccoli, e il{" "}
        <Link href="/it/compress-gif">compressore di GIF</Link> per le
        animazioni. Per cambiare un lotto di file da un formato a un altro, usa
        il <Link href="/it/image-converter">convertitore di immagini</Link>; per
        cambiare le dimensioni in pixel, ricorri al{" "}
        <Link href="/it/image-resizer">ridimensionatore di immagini</Link>.
      </p>

      <h2 id="tips">Consigli pratici per ottenere i migliori risultati</h2>
      <ul>
        <li>
          <strong>Ridimensiona prima di comprimere.</strong> Se un&apos;immagine
          verrà mostrata solo a 1200 px di larghezza, inviare un originale da
          6000 px spreca la maggior parte del file. Ridurre la scala di solito
          fa risparmiare più di quanto potrebbe mai fare il cursore della
          qualità.
        </li>
        <li>
          <strong>Adatta il formato al contenuto.</strong> Le foto vanno in
          JPEG, WebP o AVIF; loghi, icone e schermate restano più nitidi e
          piccoli come PNG. Convertire una foto in PNG in WebP può ridurla di un
          ordine di grandezza.
        </li>
        <li>
          <strong>Conserva una copia master.</strong> Poiché la ricodifica con
          perdita si accumula, comprimi sempre dal tuo originale e non da un file
          che hai esportato in precedenza.
        </li>
        <li>
          <strong>Confronta prima di decidere.</strong> Prova prima
          &laquo;Bilanciato&raquo;, poi riesegui con &laquo;Più piccolo&raquo; e
          verifica se noti la differenza alla dimensione con cui mostrerai
          effettivamente l&apos;immagine.
        </li>
        <li>
          <strong>Raggruppa immagini simili.</strong> Le foto della stessa
          fotocamera o le schermate dello stesso schermo di solito vengono
          benissimo con un&apos;unica impostazione condivisa, così puoi
          elaborarle in un solo passaggio.
        </li>
      </ul>
    </>
  ),
};
