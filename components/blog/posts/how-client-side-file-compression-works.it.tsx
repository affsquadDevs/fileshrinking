import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-client-side-file-compression-works",
  title:
    "Come funziona la compressione dei file lato client (e perché è più privata)",
  description:
    "Come FileShrinking comprime immagini, video e PDF interamente nel tuo browser con WebAssembly e Web Workers, e perché ciò mantiene privati i tuoi file.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Privacy", "Come funziona"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Quando comprimi una foto o riduci un PDF sulla maggior parte dei siti
        web, il tuo file compie un viaggio di andata e ritorno: viene caricato
        su un server, elaborato in un data center da qualche parte, e ti viene
        restituita una versione più piccola. Funziona, ma significa che una
        copia del tuo file privato vive per un breve momento su un computer che
        non controlli. FileShrinking adotta un approccio diverso: ogni byte
        della compressione avviene{" "}
        <strong>all&rsquo;interno della scheda del tuo browser</strong>, e i
        tuoi file non lasciano mai il tuo dispositivo. Questo articolo spiega
        esattamente come ciò sia possibile, quali tecnologie del browser lo
        rendono possibile e gli onesti compromessi che ne derivano.
      </p>

      <h2 id="two-models">Due modi per comprimere un file sul web</h2>
      <p>
        Il modello tradizionale è <strong>lato server</strong>. Il tuo browser
        invia il file originale attraverso la rete; un backend che esegue uno
        strumento come ImageMagick o FFmpeg svolge il lavoro pesante; il
        risultato viene trasmesso indietro. La macchina dell&rsquo;utente
        fatica appena, e il server può essere enormemente potente. Il prezzo
        sono la privacy e la fiducia: i tuoi dati vengono trasmessi, restano
        (anche solo temporaneamente) sul disco di qualcun altro, e devi fidarti
        della sua parola su cosa accade loro in seguito.
      </p>
      <p>
        Il modello più recente è <strong>lato client</strong>. Gli stessi
        algoritmi di compressione vengono eseguiti direttamente sul tuo
        dispositivo, nel browser, senza alcun passaggio di caricamento. Per anni
        ciò è stato poco pratico: JavaScript da solo era troppo lento per
        eseguire un codec serio per immagini o video a una velocità utilizzabile.
        Le cose sono cambiate quando i browser hanno acquisito la capacità di
        eseguire codice compilato, quasi nativo, sul web. Oggi un portatile o
        uno smartphone moderni possono svolgere il lavoro che un tempo
        richiedeva un server, e FileShrinking è costruito interamente su questo
        modello.
      </p>

      <h2 id="webassembly">
        WebAssembly: codec reali in esecuzione nel browser
      </h2>
      <p>
        La tecnologia che rende praticabile la compressione lato client è{" "}
        <strong>WebAssembly</strong> (spesso abbreviato in Wasm). È un formato
        di istruzioni binarie compatto e di basso livello che i browser possono
        eseguire a velocità prossime al codice nativo. In modo cruciale,
        consente agli sviluppatori di prendere codec scritti in C, C++ o Rust (e
        affinati nell&rsquo;arco di decenni) e di compilarli affinché vengano
        eseguiti sul web senza riscriverli in JavaScript.
      </p>
      <p>
        È così che gli stessi collaudati motori di compressione che troveresti
        in software professionale per desktop finiscono in una scheda del
        browser:
      </p>
      <ul>
        <li>
          <strong>MozJPEG</strong> per una codifica JPEG di alta qualità che
          spreme di più da ogni kilobyte.
        </li>
        <li>
          <strong>OxiPNG</strong> per l&rsquo;ottimizzazione PNG senza perdite.
        </li>
        <li>
          <strong>libwebp</strong> e i codificatori AVIF per i moderni formati{" "}
          <Link href="/it/compress-webp">WebP</Link> e{" "}
          <Link href="/it/compress-avif">AVIF</Link>.
        </li>
        <li>
          <strong>FFmpeg</strong>, compilato in WebAssembly, per transcodificare
          e ridurre i video.
        </li>
      </ul>
      <p>
        Per un riferimento tecnico più approfondito, la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/WebAssembly"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentazione di WebAssembly di MDN
        </a>{" "}
        è la fonte canonica su come funziona il formato e perché è veloce.
      </p>

      <h2 id="web-workers">
        Web Workers: mantenere la pagina reattiva
      </h2>
      <p>
        La compressione è onerosa dal punto di vista computazionale. Se eseguissi
        una transcodifica video sul thread principale del browser, l&rsquo;intera
        pagina si bloccherebbe: i pulsanti smetterebbero di rispondere, lo
        scorrimento sarebbe a scatti e le barre di avanzamento si bloccherebbero.
        Per evitarlo, FileShrinking esegue il lavoro su un thread separato
        usando i <strong>Web Workers</strong>.
      </p>
      <p>
        Un Web Worker è un contesto JavaScript in background che viene eseguito
        in parallelo con l&rsquo;interfaccia utente. Il thread principale
        consegna il file (e il codec Wasm) al worker, il worker elabora la
        compressione e restituisce il risultato finito quando ha terminato. Nel
        frattempo l&rsquo;interfaccia rimane fluida e può mostrare
        l&rsquo;avanzamento in tempo reale. La{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida di MDN all&rsquo;uso dei Web Workers
        </a>{" "}
        illustra in dettaglio il modello di scambio dei messaggi. I dati binari
        di grandi dimensioni possono essere spostati tra i thread in modo
        efficiente mediante oggetti trasferibili, così il file non deve essere
        copiato byte per byte solo per attraversare il confine tra i thread.
      </p>

      <h2 id="decoding">Leggere e decodificare i file senza la rete</h2>
      <p>
        Prima di poter comprimere qualcosa, il browser deve leggere il tuo file
        in memoria e decodificarlo. Ciò si basa su una piccola famiglia di API
        web standard, nessuna delle quali coinvolge un server:
      </p>
      <ul>
        <li>
          <strong>Le API File e Blob</strong> rappresentano il file che
          selezioni o trascini. Espongono i byte grezzi come un{" "}
          <code>ArrayBuffer</code> su cui i codec possono lavorare direttamente,
          il tutto in memoria.
        </li>
        <li>
          <strong>createImageBitmap</strong> decodifica in modo efficiente
          un&rsquo;immagine in una forma pronta per l&rsquo;elaborazione, e può
          farlo al di fuori del thread principale.
        </li>
        <li>
          <strong>OffscreenCanvas</strong> consente al browser di disegnare,
          ridimensionare e ricodificare i dati delle immagini all&rsquo;interno
          di un worker, senza mai toccare la pagina visibile.
        </li>
      </ul>
      <p>
        Messi insieme, la pipeline ha questo aspetto: rilasci un file, il
        browser ne legge i byte localmente, un worker lo decodifica, il codec
        Wasm lo ricodifica con la qualità che scegli e ti viene restituito un
        nuovo <code>Blob</code> da scaricare. In nessun momento il file viaggia
        da nessuna parte. Se sei curioso riguardo alle scelte di qualità in quel
        passaggio di ricodifica, la nostra guida alla{" "}
        <Link href="/it/blog/lossy-vs-lossless-compression">
          compressione con perdita rispetto a quella senza perdita
        </Link>{" "}
        spiega cosa viene effettivamente scartato e perché.
      </p>

      <h2 id="privacy">Perché questo è davvero più privato</h2>
      <p>
        Il vantaggio in termini di privacy del modello lato client non è uno
        slogan di marketing: è una conseguenza diretta dell&rsquo;architettura.
        Poiché il tuo file viene letto solo nella memoria locale e ricodificato
        sul tuo dispositivo:
      </p>
      <ul>
        <li>
          <strong>Non viene trasmesso nulla.</strong> Non c&rsquo;è alcun
          caricamento, quindi non c&rsquo;è alcuna copia del tuo file in transito
          da intercettare né alcuna copia a riposo su un server che possa essere
          violata, venduta o richiesta dalle autorità.
        </li>
        <li>
          <strong>Funziona offline.</strong> Una volta che la pagina e i suoi
          codec Wasm si sono caricati, puoi disconnetterti completamente da
          internet e gli strumenti continuano a funzionare. Questa è la prova
          più semplice che non sta avvenendo alcun caricamento: puoi verificarlo
          tu stesso nella scheda di rete del tuo browser.
        </li>
        <li>
          <strong>Non c&rsquo;è nulla da conservare.</strong> Quando chiudi la
          scheda, i dati del file scompaiono dalla memoria. Non ci sono registri
          del server che colleghino i tuoi documenti alla tua identità.
        </li>
      </ul>
      <p>
        E poiché FileShrinking è{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          completamente open source sotto licenza MIT
        </a>
        , non devi accettare queste affermazioni sulla fiducia. Chiunque può
        leggere il codice, confermare che non esiste un percorso di caricamento e
        verificare esattamente come si comporta la pipeline di compressione. La
        privacy verificabile è la più solida.
      </p>

      <h2 id="tradeoffs">Gli onesti compromessi</h2>
      <p>
        La compressione lato client non è magia, ed è giusto essere chiari su
        dove il modello server ha ancora dei vantaggi:
      </p>
      <ul>
        <li>
          <strong>Velocità sui lavori molto grandi.</strong> Un data center può
          dedicare a un video lungo molti più core di quanti ne abbia il tuo
          portatile. Per la maggior parte delle immagini e dei clip brevi la
          differenza è impercettibile, ma un video di lunga durata sarà più lento
          nel browser che su una server farm.
        </li>
        <li>
          <strong>Limiti di memoria.</strong> Tutto avviene nella RAM del tuo
          dispositivo. I file estremamente grandi (ad esempio, un video di
          diversi gigabyte su uno smartphone con poca memoria) possono scontrarsi
          con i limiti di memoria del browser che un server non avrebbe.
        </li>
        <li>
          <strong>Costo del primo caricamento.</strong> I codec Wasm devono
          essere scaricati la prima volta che usi uno strumento. In seguito
          restano nella cache, così le visite successive sono istantanee, ma la
          primissima esecuzione paga un download una tantum.
        </li>
      </ul>
      <p>
        Per la stragrande maggioranza delle attività quotidiane (ottimizzare le
        foto per il web, ridurre un PDF alle dimensioni di un&rsquo;email,
        rimpicciolire una registrazione dello schermo) questi compromessi valgono
        ampiamente la pena, e ottieni la privacy gratis.
      </p>

      <h2 id="try-it">Provalo tu stesso</h2>
      <p>
        Il modo migliore per capire la compressione lato client è usarla. Prova
        il <Link href="/it/image-compressor">compressore di immagini</Link>, il{" "}
        <Link href="/it/video-compressor">compressore di video</Link> o il{" "}
        <Link href="/it/pdf-compressor">compressore di PDF</Link>, poi apri gli
        strumenti per sviluppatori del tuo browser, osserva la scheda di rete e
        conferma che non viene caricato nulla mentre il tuo file si rimpicciolisce.
        Tutto viene eseguito localmente, il codice è aperto affinché chiunque
        possa ispezionarlo, e i tuoi file restano esattamente dove devono stare:
        con te.
      </p>
    </>
  );
}
