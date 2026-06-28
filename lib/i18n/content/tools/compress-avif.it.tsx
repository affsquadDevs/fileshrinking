import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimere AVIF — Convertitore AVIF gratis",
  metaDescription:
    "Converti e comprimi immagini in AVIF nel tuo browser. Privato, senza caricamento né registrazione: i file non lasciano mai il tuo dispositivo. File minuscoli.",
  heading: "Compressore e convertitore AVIF",
  intro: (
    <>
      Trasforma immagini JPEG, PNG, WebP, GIF o AVIF esistenti in file AVIF
      minuscoli e di alta qualità direttamente nel tuo browser. AVIF è il
      formato di immagine moderno più compatto: scegli un livello di qualità,
      trascina le tue foto e scarica file leggerissimi senza che nulla venga mai
      caricato da qualche parte.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come convertire e comprimere AVIF",
    description:
      "Crea o ricomprimi immagini AVIF localmente nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi le tue immagini",
        text: "Trascina e rilascia file JPEG, PNG, WebP, GIF o AVIF nell'area di caricamento, fai clic per sfogliare oppure incolla dagli appunti. Puoi aggiungerne diverse alla volta.",
      },
      {
        name: "Scegli un livello di qualità",
        text: "La scala di qualità di AVIF è più bassa di quella di JPEG: un valore predefinito intorno a 55 ha già un aspetto ottimo. Alzalo per risultati quasi senza perdita o abbassalo per i file più piccoli possibile.",
      },
      {
        name: "Lascia lavorare il codificatore AV1 sul tuo dispositivo",
        text: "Ogni immagine viene codificata localmente in AVIF. AV1 è intensivo, quindi le foto grandi possono richiedere qualche secondo: è normale ed è ciò che rende i file così piccoli.",
      },
      {
        name: "Scarica i tuoi file AVIF",
        text: "Salva le immagini una alla volta oppure scaricale tutte in un file ZIP. Regola la qualità e ricodifica quando vuoi per trovare la dimensione ideale.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file AVIF vengono caricati su un server?",
      a: "No. La codifica avviene interamente sul tuo dispositivo tramite un codificatore AV1 in WebAssembly. Le tue immagini vengono caricate in memoria, convertite in AVIF localmente e restituite a te: non viene mai caricato nulla, quindi puoi persino disconnetterti da internet dopo il caricamento della pagina.",
      text: "No. La codifica avviene interamente sul tuo dispositivo tramite un codificatore AV1 in WebAssembly. Le tue immagini vengono caricate in memoria, convertite in AVIF localmente e restituite a te. Non viene mai caricato nulla, quindi puoi disconnetterti da internet dopo il caricamento della pagina.",
    },
    {
      q: "Il compressore AVIF è davvero gratis?",
      a: "Sì: è completamente gratis, senza registrazione, senza filigrane e senza limiti di numero o dimensione dei file oltre alla memoria del tuo dispositivo. Il sito è sostenuto da annunci discreti.",
      text: "Sì. È completamente gratis, senza registrazione, senza filigrane e senza limiti di numero o dimensione dei file oltre alla memoria del tuo dispositivo. Il sito è sostenuto da annunci discreti.",
    },
    {
      q: "Come incide AVIF sulla qualità dell'immagine?",
      a: (
        <>
          La compressione AVIF è con perdita, ma il suo codificatore basato su
          AV1 conserva il dettaglio molto meglio dei formati più vecchi a parità
          di dimensione del file. Tieni presente che la scala di qualità si
          legge in modo diverso: un valore intorno a <strong>50–60</strong> su
          AVIF di solito ha un aspetto eccellente, mentre lo stesso numero su
          JPEG apparirebbe scadente. Alza il cursore per una fedeltà quasi
          perfetta oppure abbassalo per i file più piccoli possibile.
        </>
      ),
      text: "La compressione AVIF è con perdita, ma il suo codificatore basato su AV1 conserva il dettaglio molto meglio dei formati più vecchi a parità di dimensione del file. La scala di qualità si legge in modo diverso: intorno a 50-60 di solito ha un aspetto eccellente, mentre lo stesso numero su JPEG apparirebbe scadente. Alza il cursore per una fedeltà quasi perfetta o abbassalo per i file più piccoli.",
    },
    {
      q: "Perché la codifica AVIF è lenta?",
      a: (
        <>
          AVIF usa il codec AV1, che è molto impegnativo dal punto di vista del
          calcolo: svolge molto più lavoro per pixel rispetto a JPEG o WebP per
          raggiungere le sue dimensioni di file minuscole. Eseguire quel
          codificatore nel browser con WebAssembly significa che una foto grande
          può richiedere diversi secondi, e le immagini molto grandi (diciamo
          oltre 20 megapixel) possono richiedere decisamente più tempo. È
          normale: l&rsquo;attesa ti regala un file molto più piccolo.
          Ridimensionare prima velocizza parecchio il processo.
        </>
      ),
      text: "AVIF usa il codec AV1, che è molto impegnativo dal punto di vista del calcolo e svolge molto più lavoro per pixel rispetto a JPEG o WebP. Eseguire quel codificatore nel browser con WebAssembly significa che una foto grande può richiedere diversi secondi, e le immagini molto grandi possono richiedere decisamente più tempo. È normale e ridimensionare prima velocizza il processo.",
    },
    {
      q: "Qual è la dimensione massima di file che posso convertire?",
      a: "Non c'è un limite rigido: dipende dalla memoria disponibile sul tuo dispositivo. Le foto tipiche funzionano senza problemi e sono supportate anche immagini grandi da 20–50 MP, anche se si codificano più lentamente perché AV1 è intensivo. I lotti vengono elaborati un file alla volta per mantenere basso l'uso della memoria.",
      text: "Non c'è un limite rigido; dipende dalla memoria disponibile sul tuo dispositivo. Le foto tipiche funzionano senza problemi e sono supportate anche immagini grandi da 20-50 MP, anche se si codificano più lentamente perché AV1 è intensivo. I lotti vengono elaborati un file alla volta per mantenere basso l'uso della memoria.",
    },
    {
      q: "Quali browser possono aprire i file AVIF?",
      a: (
        <>
          Il supporto dei browser è ormai ampio: Chrome, Edge, Firefox, Safari e
          Opera mostrano tutti AVIF nelle versioni moderne, e lo fanno anche la
          maggior parte degli smartphone. Per browser molto vecchi o alcune
          applicazioni desktop che non si sono ancora aggiornate, mantieni
          un&rsquo;alternativa in <Link href="/it/compress-jpeg">JPEG</Link> o{" "}
          <Link href="/it/compress-webp">WebP</Link>, oppure servi l&rsquo;AVIF
          dentro un elemento <code>&lt;picture&gt;</code> così il browser sceglie
          il formato migliore che riesce a leggere.
        </>
      ),
      text: "Il supporto dei browser è ormai ampio: Chrome, Edge, Firefox, Safari e Opera mostrano tutti AVIF nelle versioni moderne, e lo fa anche la maggior parte degli smartphone. Per browser molto vecchi o alcune applicazioni desktop, mantieni un'alternativa in JPEG o WebP, oppure servi l'AVIF dentro un elemento picture così il browser sceglie il formato migliore che riesce a leggere.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché convertire le immagini in AVIF?</h2>
      <p>
        AVIF è il formato di immagine di uso generale più compatto disponibile
        oggi. Costruito sul codec video esente da royalty <strong>AV1</strong>,
        produce abitualmente file <strong>più piccoli del 30–50% rispetto a
        WebP</strong> e spesso la metà della dimensione di un JPEG comparabile, a
        parità di qualità percepita. Per i siti web ricchi di foto, questo si
        traduce direttamente in caricamenti delle pagine più rapidi, migliori
        Core Web Vitals, bollette della banda più basse e un&rsquo;esperienza
        più fluida sulle connessioni mobili lente.
      </p>
      <p>
        Oltre alla dimensione pura, AVIF porta funzionalità davvero moderne alle
        immagini fisse: <strong>trasparenza alfa</strong> completa come PNG,
        gamma di colori ampia e supporto <strong>HDR</strong> (a 10 e 12 bit), e
        sia la modalità con perdita sia quella senza perdita in un unico
        formato. Poiché questo convertitore funziona interamente sul tuo
        dispositivo, è anche il modo privato di adottare AVIF: a differenza dei
        tipici convertitori online, le tue foto vengono codificate con una build
        di AV1 in WebAssembly all&rsquo;interno della pagina stessa e non
        viaggiano mai verso un server.
      </p>

      <h2 id="quality">Qualità, la scala AVIF e la velocità di codifica</h2>
      <p>
        AVIF viene normalmente usato come formato <strong>con perdita</strong>,
        scartando il dettaglio che l&rsquo;occhio ha meno probabilità di notare,
        ma lo fa in modo molto più intelligente di JPEG, evitando gli artefatti
        a blocchi che compaiono quando spingi troppo i formati più vecchi. Una
        cosa da sapere fin da subito: i{" "}
        <strong>numeri di qualità si leggono in modo diverso</strong>. Un&rsquo;impostazione
        vicina a <strong>50–60</strong> su AVIF in genere ha un aspetto
        eccellente, dove lo stesso valore su un JPEG apparirebbe grezzo. Per
        questo lo strumento usa per impostazione predefinita un valore intorno a{" "}
        <strong>55</strong>: è un punto ottimale, non un compromesso.
      </p>
      <p>
        Il compromesso onesto è la <strong>velocità</strong>. AV1 esegue una
        grande quantità di calcolo per pixel per raggiungere quelle dimensioni
        minuscole, ed eseguirlo nel browser tramite WebAssembly è più lento di
        una codifica JPEG o WebP. Una foto tipica si conclude in pochi secondi;
        un&rsquo;immagine molto grande da oltre 20 megapixel può richiedere
        decisamente più tempo, e un lotto grande si somma. È normale: è il costo
        dell&rsquo;efficienza di AVIF, non un difetto. Ridimensionare prima di
        codificare è l&rsquo;accelerazione più grande possibile, e riduce ancora
        di più il risultato.
      </p>

      <h2 id="format">Che cos&rsquo;è AVIF e quando dovresti usarlo?</h2>
      <p>
        AVIF (AV1 Image File Format) memorizza uno o più fotogrammi codificati in
        AV1 dentro un contenitore ISO base media, la stessa famiglia di MP4.
        Supporta trasparenza, animazione, colore ampio e HDR, il che lo rende un
        solido sostituto unico di JPEG, PNG e perfino del GIF animato in molti
        casi. Puoi leggere l&rsquo;analisi completa delle funzionalità e del
        supporto dei browser nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentazione sull&rsquo;immagine AVIF di MDN
        </a>
        .
      </p>
      <p>
        AVIF è un&rsquo;ottima scelta predefinita per fotografie e immagini web
        ricche destinate ai browser moderni. È meno ideale quando hai bisogno di
        compatibilità universale con software più vecchio, quando i file devono
        essere rieditati molte volte (ogni passaggio con perdita perde un po&rsquo;)
        o per semplici grafiche piatte dove un{" "}
        <Link href="/it/compress-png">PNG</Link> senza perdita può rivaleggiare
        con esso. Se vuoi un supporto un po&rsquo; più ampio con una compressione
        comunque ottima, <Link href="/it/compress-webp">WebP</Link> è la via di
        mezzo naturale, e il nostro{" "}
        <Link href="/it/image-converter">convertitore di immagini</Link> ti
        permette di confrontare i formati affiancati. Per rifilare immagini di
        origine troppo grandi prima di codificare, ricorri al{" "}
        <Link href="/it/image-resizer">ridimensionatore di immagini</Link>.
      </p>

      <h2 id="tips">Consigli per i migliori risultati con AVIF</h2>
      <ul>
        <li>
          <strong>Fidati dei numeri più bassi.</strong> Non impostare la qualità
          di AVIF a 80–90 per abitudine da JPEG: parti vicino a 55 e alzala solo
          se noti davvero una differenza alla dimensione del tuo schermo.
        </li>
        <li>
          <strong>Ridimensiona prima di codificare.</strong> Inviare
          un&rsquo;immagine da 6000px che viene mostrata a 1200px spreca sia
          dimensione del file sia tempo di codifica. Ridimensionare prima rende
          la lenta passata di AV1 molto più rapida.
        </li>
        <li>
          <strong>Mantieni un&rsquo;alternativa in JPEG o WebP.</strong> Per la
          massima portata, servi l&rsquo;AVIF dentro un elemento{" "}
          <code>&lt;picture&gt;</code> con una fonte in{" "}
          <Link href="/it/compress-jpeg">JPEG</Link> o{" "}
          <Link href="/it/compress-webp">WebP</Link> così i client più vecchi
          ricevono comunque un&rsquo;immagine.
        </li>
        <li>
          <strong>Sii paziente con i lotti grandi.</strong> Il risparmio di AVIF
          vale l&rsquo;attesa. Metti in coda i tuoi file, lascia che il
          codificatore li elabori uno per uno e scarica tutto in un file ZIP alla
          fine.
        </li>
      </ul>
    </>
  ),
};
