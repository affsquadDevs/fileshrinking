import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimere JPEG — Compressore JPG gratuito",
  metaDescription:
    "Comprimi immagini JPG e JPEG nel browser con MozJPEG. Qualità regolabile, elaborazione in batch e zero upload: le tue foto restano sul dispositivo.",
  heading: "Compressore JPEG",
  intro: (
    <>
      Comprimi immagini JPG e JPEG direttamente nel browser con MozJPEG, lo
      stesso codificatore di cui si fidano fotografi e sviluppatori web. Scegli
      un livello di qualità, trascina le tue foto e scarica file più piccoli in
      pochi secondi: non viene mai caricato nulla.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere un JPEG",
    description:
      "Comprimi immagini JPG/JPEG localmente nel browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi le tue immagini",
        text: "Trascina e rilascia i tuoi file JPG nell'area di caricamento, fai clic per sfogliare o incolla dagli appunti. Puoi aggiungerne diverse alla volta.",
      },
      {
        name: "Scegli un livello di qualità",
        text: "Usa il cursore della qualità o un'impostazione predefinita. Intorno a 75 c'è un ottimo equilibrio tra dimensione e qualità visiva per la maggior parte delle foto.",
      },
      {
        name: "Lascia che la compressione avvenga sul tuo dispositivo",
        text: "Ogni immagine viene compressa localmente con MozJPEG. Vedrai la dimensione originale, la nuova dimensione e la percentuale risparmiata per ogni file.",
      },
      {
        name: "Scarica i tuoi file",
        text: "Scarica le immagini una per una o tutte insieme in un ZIP. Regola la qualità e ricomprimi quando vuoi.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file JPEG vengono caricati su un server?",
      a: (
        <>
          No. Ogni immagine viene compressa localmente nel tuo browser con
          WebAssembly. I tuoi file non lasciano mai il dispositivo e non esiste
          alcun server su cui caricarli: puoi anche disconnetterti da internet
          dopo il caricamento della pagina e continuerà a funzionare.
        </>
      ),
      text: "No. Ogni immagine viene compressa localmente nel tuo browser con WebAssembly. I tuoi file non lasciano mai il dispositivo e non esiste alcun server su cui caricarli. Puoi disconnetterti da internet dopo il caricamento della pagina e continuerà a funzionare.",
    },
    {
      q: "Il compressore JPEG è davvero gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza registrazione, senza filigrane e
          senza limiti al numero di file o alla dimensione oltre a ciò che la
          memoria del tuo dispositivo può gestire. Il sito si sostiene con
          annunci poco invasivi.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, senza filigrane e senza limiti al numero di file o alla dimensione oltre a ciò che la memoria del tuo dispositivo può gestire. Il sito si sostiene con annunci poco invasivi.",
    },
    {
      q: "La compressione ridurrà la qualità delle mie foto?",
      a: (
        <>
          La compressione JPEG è con perdita, quindi alcuni dati vengono
          scartati. Con una qualità di 70-80 la differenza è di solito
          invisibile, mentre il file è molto più piccolo. Abbassa il cursore
          della qualità per ottenere file più piccoli o alzalo per restare più
          vicino all'originale.
        </>
      ),
      text: "JPEG è un formato con perdita, quindi alcuni dati vengono scartati. Con una qualità di 70-80 la differenza è di solito invisibile, mentre il file è molto più piccolo. Abbassa il cursore della qualità per ottenere file più piccoli o alzalo per restare più vicino all'originale.",
    },
    {
      q: "Qual è la dimensione massima del file che posso comprimere?",
      a: (
        <>
          Non c'è un limite rigido: dipende dalla memoria disponibile sul tuo
          dispositivo. Telefoni e laptop gestiscono senza problemi le foto
          tipiche (qualche megabyte) e persino le immagini grandi da 20-50 MP. I
          batch molto grandi vengono elaborati un file alla volta per mantenere
          basso l'uso della memoria.
        </>
      ),
      text: "Non c'è un limite rigido; dipende dalla memoria disponibile sul tuo dispositivo. Le foto tipiche di qualche megabyte e persino le immagini grandi da 20-50 MP funzionano bene. I batch grandi vengono elaborati un file alla volta per mantenere basso l'uso della memoria.",
    },
    {
      q: "Posso comprimere molti JPEG contemporaneamente?",
      a: (
        <>
          Sì. Trascina tutti i file che vuoi: vengono messi in coda e compressi
          in sequenza, poi puoi scaricarli singolarmente o tutti insieme in un
          ZIP.
        </>
      ),
      text: "Sì. Aggiungi tutti i file che vuoi; vengono messi in coda e compressi uno alla volta, poi scaricati singolarmente o insieme in un ZIP.",
    },
    {
      q: "Conserva il mio originale se la compressione rendesse il file più grande?",
      a: (
        <>
          Sì. Se un JPEG ricodificato risultasse più grande del tuo originale
          (cosa comune con immagini già ottimizzate), lo strumento conserva il
          tuo file originale e ti avvisa che era già ben ottimizzato.
        </>
      ),
      text: "Sì. Se un JPEG ricodificato risultasse più grande dell'originale, lo strumento conserva il tuo file originale e segnala che era già ben ottimizzato.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché comprimere le immagini JPEG?</h2>
      <p>
        JPEG (scritto anche JPG) è il formato più comune per le fotografie sul
        web, ma le immagini di fotocamere e telefoni sono spesso molto più
        grandi del necessario, spesso di diversi megabyte ciascuna. Le immagini
        grandi rallentano i siti web, riempiono gli allegati delle email,
        consumano lo spazio di archiviazione nel cloud e sprecano i dati mobili.
        Comprimerle conserva la qualità visiva a cui tieni riducendo
        drasticamente la dimensione del file, spesso tra il 60 e l'80 %.
      </p>
      <p>
        Poiché questo strumento viene eseguito interamente sul tuo dispositivo,
        è anche il modo più privato di farlo. I compressori online tradizionali
        caricano le tue foto su un server remoto, le elaborano lì e le rimandano
        indietro. Qui le tue immagini vengono lette in memoria, compresse con
        una versione in WebAssembly di MozJPEG e restituite direttamente a te:
        non passano mai attraverso una rete.
      </p>

      <h2 id="lossy">Compressione con perdita e qualità: cosa aspettarsi</h2>
      <p>
        JPEG è un formato <strong>con perdita</strong>: per rendere i file più
        piccoli scarta in modo permanente i dettagli dell'immagine che l'occhio
        umano ha meno probabilità di notare. Il cursore della qualità controlla
        quanto è aggressivo quel processo. I valori più alti conservano più
        dettagli e producono file più grandi; i valori più bassi risparmiano più
        spazio ma possono introdurre &ldquo;artefatti&rdquo; visibili, come
        squadrettatura o aloni intorno ai bordi nitidi.
      </p>
      <p>
        Per la maggior parte delle fotografie, una qualità di{" "}
        <strong>70-80</strong> è il punto ideale: il risultato è visivamente
        indistinguibile dall'originale a dimensioni di visualizzazione normali e,
        ciononostante, occupa una frazione della dimensione. Scendi a 50-60
        quando la dimensione ridotta conta più della fedeltà perfetta (ad
        esempio per le miniature) e resta su 85-90 per le immagini con gradienti
        sottili o testo, dove gli artefatti sono più evidenti. La compressione è{" "}
        <strong>cumulativa</strong>, quindi ricomprimi sempre dal tuo originale
        di massima qualità e non da una copia già compressa.
      </p>

      <h2 id="format">Cos'è un JPEG e quando dovresti usarlo?</h2>
      <p>
        JPEG è stato standardizzato dal Joint Photographic Experts Group e
        utilizza la trasformata discreta del coseno per comprimere in modo
        efficiente le immagini a tono continuo. Eccelle con le fotografie e le
        immagini realistiche dalle transizioni di colore morbide, motivo per cui
        quasi tutte le fotocamere salvano i JPEG in modo predefinito. Puoi
        consultare i dettagli tecnici nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai formati di immagine di MDN
        </a>
        .
      </p>
      <p>
        Tuttavia, JPEG non è sempre la scelta giusta. Non supporta la
        trasparenza e gestisce male la grafica piatta, i loghi, gli screenshot e
        il testo: questi si comprimono meglio e appaiono più nitidi come{" "}
        <Link href="/it/compress-png">PNG</Link>. E per ottenere le foto più
        piccole possibili con il supporto dei browser moderni, vincono i formati
        più recenti: un file <Link href="/it/compress-webp">WebP</Link> è in
        genere tra il 25 e il 35 % più piccolo di un JPEG equivalente, e{" "}
        <Link href="/it/compress-avif">AVIF</Link> può essere ancora più piccolo.
        Se stai ottimizzando per il web, prova a convertire con il nostro{" "}
        <Link href="/it/image-converter">convertitore di immagini</Link> e
        confronta.
      </p>

      <h2 id="tips">Consigli per ottenere i risultati migliori</h2>
      <ul>
        <li>
          <strong>Parti dall'originale.</strong> Salvare ripetutamente un JPEG lo
          degrada. Conserva una copia master e comprimi a partire da quella.
        </li>
        <li>
          <strong>Ridimensiona prima di comprimere.</strong> Se un'immagine verrà
          visualizzata a 1200 px di larghezza, non serve fornire un file da 6000
          px. Usa l'opzione di ridimensionamento integrata per un risparmio molto
          maggiore rispetto alla sola qualità.
        </li>
        <li>
          <strong>Usa le impostazioni predefinite per confrontare.</strong> Prova
          prima &ldquo;Bilanciato&rdquo;, poi ricomprimi con &ldquo;Più
          piccolo&rdquo; e verifica se noti la differenza alla tua dimensione di
          visualizzazione.
        </li>
        <li>
          <strong>Raggruppa in batch immagini simili.</strong> Le foto della
          stessa fotocamera di solito appaiono ottime con la stessa impostazione
          di qualità, quindi puoi elaborarle in una sola volta.
        </li>
      </ul>
    </>
  ),
};
