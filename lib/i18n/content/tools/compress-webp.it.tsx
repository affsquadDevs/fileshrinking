import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimere WebP — Compressore e convertitore gratis",
  metaDescription:
    "Comprimi WebP o converti JPEG e PNG in WebP nel browser. Con o senza perdita, privato e locale: nessun caricamento, nulla lascia il tuo dispositivo.",
  heading: "Compressore e convertitore WebP",
  intro: (
    <>
      Comprimi immagini WebP esistenti o converti JPEG, PNG e altri formati in
      WebP, tutto nel tuo browser. Scegli un livello di qualità, trascina i tuoi
      file e scarica immagini più piccole in pochi secondi. Non viene mai
      caricato nulla.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere o convertire in WebP",
    description:
      "Comprimi WebP o converti immagini in WebP localmente nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi le tue immagini",
        text: "Trascina e rilascia file WebP, JPEG, PNG, AVIF o GIF sull'area di caricamento, fai clic per sfogliare o incolla dagli appunti. Aggiungine diversi alla volta se vuoi.",
      },
      {
        name: "Scegli un livello di qualità",
        text: "Usa il cursore della qualità o un'impostazione predefinita. Un valore intorno a 80 offre un ottimo equilibrio tra dimensioni ridotte e fedeltà visiva per la maggior parte delle foto e dei grafici.",
      },
      {
        name: "Lascia che la conversione avvenga sul tuo dispositivo",
        text: "Ogni immagine viene codificata in WebP localmente con WebAssembly. Vedrai la dimensione originale, la nuova dimensione WebP e la percentuale risparmiata per ogni file.",
      },
      {
        name: "Scarica i tuoi file WebP",
        text: "Scarica le immagini una alla volta oppure tutte insieme in un file ZIP. Regola la qualità e riavvia l'operazione quando vuoi per confrontare.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file WebP vengono caricati su un server?",
      a: (
        <>
          No. Tutto avviene localmente nel tuo browser tramite WebAssembly. Le
          tue immagini vengono lette in memoria, convertite e restituite a te:
          non c'è alcun server su cui caricarle e puoi continuare a lavorare
          offline una volta caricata la pagina.
        </>
      ),
      text: "No. Tutto avviene localmente nel tuo browser tramite WebAssembly. Le tue immagini vengono lette in memoria, convertite e restituite a te. Non c'è alcun server su cui caricarle e puoi continuare a lavorare offline una volta caricata la pagina.",
    },
    {
      q: "Il compressore WebP è davvero gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza registrazione, senza filigrane e
          senza limiti al numero o alle dimensioni dei file, oltre a quanto
          consente la memoria del tuo dispositivo. Alcuni annunci discreti
          mantengono il sito attivo.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, senza filigrane e senza limiti al numero o alle dimensioni dei file, oltre a quanto consente la memoria del tuo dispositivo. Alcuni annunci discreti mantengono il sito attivo.",
    },
    {
      q: "Come influisce sulla qualità dell'immagine la conversione in WebP?",
      a: (
        <>
          Il WebP con perdita scarta alcuni dettagli per ridurre il file, in modo
          molto simile al JPEG, ma è più efficiente: un WebP è in genere il
          25-35&nbsp;% più piccolo di un JPEG a parità di qualità visibile. Con
          qualità 75-85 il risultato è di solito indistinguibile dall'originale.
          Scegli il WebP senza perdita se ti serve una copia perfetta pixel per
          pixel.
        </>
      ),
      text: "Il WebP con perdita scarta alcuni dettagli per ridurre il file, in modo molto simile al JPEG, ma è più efficiente: un WebP è in genere il 25-35 % più piccolo di un JPEG a parità di qualità visibile. Con qualità 75-85 il risultato è di solito indistinguibile dall'originale. Scegli il WebP senza perdita se ti serve una copia perfetta pixel per pixel.",
    },
    {
      q: "Qual è la dimensione massima del file che posso comprimere?",
      a: (
        <>
          Non c'è un limite fisso: dipende dalla memoria disponibile sul tuo
          dispositivo. Le foto tipiche di pochi megabyte e le immagini grandi da
          20-50&nbsp;MP funzionano senza problemi, e i lotti vengono elaborati un
          file alla volta per mantenere basso l'uso della memoria.
        </>
      ),
      text: "Non c'è un limite fisso; dipende dalla memoria disponibile sul tuo dispositivo. Le foto tipiche di pochi megabyte e le immagini grandi da 20-50 MP funzionano senza problemi, e i lotti vengono elaborati un file alla volta per mantenere basso l'uso della memoria.",
    },
    {
      q: "Posso convertire file JPEG e PNG in WebP?",
      a: (
        <>
          Sì. Questo strumento accetta JPEG, PNG, WebP, AVIF e GIF e genera WebP,
          quindi funziona sia come ricompressore per file WebP esistenti sia come
          convertitore da altri formati. La trasparenza dei file PNG viene
          conservata perché WebP supporta un canale alfa.
        </>
      ),
      text: "Sì. Questo strumento accetta JPEG, PNG, WebP, AVIF e GIF e genera WebP, quindi funziona sia come ricompressore per file WebP esistenti sia come convertitore da altri formati. La trasparenza dei file PNG viene conservata perché WebP supporta un canale alfa.",
    },
    {
      q: "Dovrei usare WebP con perdita o senza perdita?",
      a: (
        <>
          Usa il WebP con perdita per fotografie e immagini complesse in cui
          conta la dimensione minima e la lieve perdita di dettaglio è invisibile.
          Usa il WebP senza perdita per loghi, icone, screenshot e grafici con
          colori piatti o testo nitido, dove vuoi una riproduzione esatta senza
          artefatti.
        </>
      ),
      text: "Usa il WebP con perdita per fotografie e immagini complesse in cui conta la dimensione minima e la lieve perdita di dettaglio è invisibile. Usa il WebP senza perdita per loghi, icone, screenshot e grafici con colori piatti o testo nitido, dove vuoi una riproduzione esatta senza artefatti.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché comprimere e convertire in WebP?</h2>
      <p>
        WebP è un formato di immagine moderno creato appositamente per il web, e
        passare a esso è uno dei modi più semplici per rendere un sito più veloce
        senza sacrificare l'aspetto delle immagini. Un file WebP è in genere il{" "}
        <strong>25-35&nbsp;% più piccolo di un JPEG equivalente</strong> e molto
        più piccolo di un PNG comparabile, il che si traduce in caricamenti di
        pagina più rapidi, bollette di banda più basse e un'esperienza migliore
        per i visitatori con connessioni mobili lente o a consumo.
      </p>
      <p>
        Questo strumento svolge una doppia funzione. Se hai già immagini WebP, le
        ricodifica alla qualità che scegli per spremere un risparmio aggiuntivo.
        Se hai JPEG, PNG, AVIF o GIF, li converte in WebP così da poter
        modernizzare in una sola volta un'intera cartella di risorse. Poiché
        tutto viene eseguito sul tuo dispositivo con un codificatore WebAssembly,
        le tue immagini non vengono mai caricate: un'alternativa davvero privata
        ai convertitori basati su server che inviano le tue foto a una macchina
        remota.
      </p>

      <h2 id="lossy-lossless">WebP con e senza perdita, e la qualità</h2>
      <p>
        WebP supporta due distinte modalità di compressione, e scegliere quella
        giusta è importante. Il <strong>WebP con perdita</strong> funziona come
        JPEG: scarta in modo permanente i dettagli che l'occhio ha meno
        probabilità di notare, generando file molto piccoli. È la scelta giusta
        per fotografie e immagini ricche a tono continuo. Il cursore della
        qualità regola quanto questo sia aggressivo: i valori più alti conservano
        più dettagli a costo di dimensioni maggiori, quelli più bassi risparmiano
        più spazio ma possono introdurre artefatti visibili.
      </p>
      <p>
        Il <strong>WebP senza perdita</strong>, al contrario, riproduce ogni
        pixel con esattezza, senza alcun artefatto. È la scelta migliore per
        loghi, icone, screenshot e grafici o testo a colori piatti, gli stessi
        casi in cui di norma ricorreresti al{" "}
        <Link href="/it/compress-png">PNG</Link>, con la differenza che WebP di
        solito produce un file più piccolo. Per la maggior parte delle fotografie
        una qualità con perdita di <strong>75-85</strong> è il punto ottimale:
        visivamente identica all'originale alle normali dimensioni di
        visualizzazione, ma con una frazione delle dimensioni. Tieni presente che
        la compressione con perdita è cumulativa, quindi converti sempre dal tuo
        originale di massima qualità e non da una copia già compressa.
      </p>

      <h2 id="format">Cos'è WebP e quando dovresti usarlo?</h2>
      <p>
        WebP è stato sviluppato da Google e combina una compressione con perdita
        derivata dal codec video VP8 con un'efficiente modalità senza perdita.
        Oltre alle dimensioni pure, supporta due caratteristiche che i formati
        più vecchi gestiscono in modo goffo: la{" "}
        <strong>trasparenza</strong> (un canale alfa, come PNG) e l'
        <strong>animazione</strong> (come GIF, ma drasticamente più piccola).
        Questa combinazione consente a un unico formato di sostituire JPEG, PNG e
        GIF animato in molte situazioni. Puoi leggere la panoramica tecnica nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai formati di immagine di MDN
        </a>{" "}
        e una guida pratica per adottarlo su{" "}
        <a
          href="https://web.dev/articles/serve-images-webp"
          target="_blank"
          rel="noopener noreferrer"
        >
          web.dev
        </a>
        .
      </p>
      <p>
        Il supporto dei browser è ormai praticamente universale: tutte le
        versioni attuali di Chrome, Firefox, Safari ed Edge mostrano WebP, quindi
        è sicuro usarlo in tutto il web moderno. Se devi supportare browser molto
        vecchi, mantieni un'alternativa in JPEG o PNG. E quando vuoi i file
        assolutamente più piccoli e puoi accettare una codifica più lenta,{" "}
        <Link href="/it/compress-avif">AVIF</Link> spesso supera WebP; confronta i
        due sulle tue immagini. Per fare il percorso inverso, o per passare tra
        più formati alla volta, usa il nostro{" "}
        <Link href="/it/image-converter">convertitore di immagini</Link>, e se le
        tue fonti sono fotografie potrebbe interessarti anche il nostro{" "}
        <Link href="/it/compress-jpeg">compressore JPEG</Link> dedicato.
      </p>

      <h2 id="tips">Consigli per ottenere i migliori risultati con WebP</h2>
      <ul>
        <li>
          <strong>Abbina la modalità al contenuto.</strong> Usa il WebP con
          perdita per le foto e il WebP senza perdita per loghi, screenshot e
          grafici piatti con bordi nitidi.
        </li>
        <li>
          <strong>Ridimensiona prima di codificare.</strong> Se un'immagine verrà
          visualizzata a 1200&nbsp;px di larghezza, non c'è motivo di fornire un
          file da 6000&nbsp;px. L'opzione di ridimensionamento integrata fa
          risparmiare molto più della sola qualità.
        </li>
        <li>
          <strong>Conserva la trasparenza di proposito.</strong> Convertire un
          PNG trasparente in WebP mantiene il canale alfa, ma appiattirlo in JPEG
          no. Scegli WebP quando la trasparenza è importante.
        </li>
        <li>
          <strong>Confronta con AVIF.</strong> Per le immagini in evidenza e le
          foto grandi, ripassa lo stesso file attraverso AVIF e scegli quello che
          dà la dimensione minore a una qualità che ti soddisfa.
        </li>
        <li>
          <strong>Raggruppa per tipo di contenuto.</strong> Metti insieme le tue
          foto da una parte e i tuoi grafici dall'altra, così ogni gruppo può
          usare un'unica impostazione di qualità ideale in un solo passaggio.
        </li>
      </ul>
    </>
  ),
};
