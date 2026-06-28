import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Ridimensiona immagini online gratis per pixel o %",
  metaDescription:
    "Ridimensiona JPG, PNG, WebP, AVIF e GIF per pixel o percentuale nel browser. Privato e senza caricamenti: le tue immagini non lasciano mai il dispositivo.",
  heading: "Ridimensiona immagini",
  intro: (
    <>
      Ridimensiona immagini JPG, PNG, WebP, AVIF e GIF per pixel esatti o per
      percentuale, direttamente nel tuo browser. Cambiare le dimensioni è il
      modo più efficace per ridurre un file: trascina le tue immagini, imposta
      una dimensione di destinazione e scaricale in pochi secondi. Non viene
      mai caricato nulla.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come ridimensionare un'immagine",
    description:
      "Ridimensiona le immagini per pixel o percentuale localmente nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi le tue immagini",
        text: "Trascina e rilascia le tue foto nell'area di caricamento, fai clic per sfogliare o incolla dagli appunti. Sono supportati JPEG, PNG, WebP, AVIF e GIF, e puoi aggiungerne diverse alla volta.",
      },
      {
        name: "Scegli pixel o percentuale",
        text: "Seleziona «Percentuale» per scalare in base a un rapporto (ideale per interi lotti) oppure «Pixel» per digitare una larghezza o un'altezza esatta. Mantieni attivo il rapporto d'aspetto per evitare deformazioni.",
      },
      {
        name: "Imposta formato e qualità (facoltativo)",
        text: "Lascia il formato su «Stesso formato» per conservare il tipo originale, oppure converti in WebP o AVIF per un file più piccolo. Regola il cursore della qualità per comprimere allo stesso tempo.",
      },
      {
        name: "Scarica le tue immagini ridimensionate",
        text: "Ogni immagine viene ridimensionata sul tuo dispositivo con il ricampionamento Lanczos. Scaricale una a una oppure tutte insieme in un file ZIP.",
      },
    ],
  },
  faqs: [
    {
      q: "Le mie immagini vengono caricate su un server quando le ridimensiono?",
      a: (
        <>
          No. Il ridimensionamento avviene interamente nel tuo browser usando
          il processore del tuo stesso dispositivo. I file vengono letti in
          memoria, ridimensionati e restituiti immediatamente: non viene mai
          inviato nulla a un server, quindi le tue immagini restano del tutto
          private. Puoi persino scollegarti da internet dopo che la pagina si è
          caricata.
        </>
      ),
      text: "No. Il ridimensionamento avviene interamente nel tuo browser usando il processore del tuo dispositivo. I file vengono letti in memoria, ridimensionati e restituiti immediatamente. Non viene mai inviato nulla a un server, quindi le tue immagini restano private. Puoi persino scollegarti da internet dopo che la pagina si è caricata.",
    },
    {
      q: "Lo strumento per ridimensionare le immagini è davvero gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza registrazione, senza filigrane e
          senza limiti al numero di immagini che puoi ridimensionare né alle
          loro dimensioni, oltre a ciò che consente la memoria del tuo
          dispositivo. Il sito è sostenuto da annunci discreti.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, senza filigrane e senza limiti al numero o alle dimensioni delle immagini oltre a ciò che consente la memoria del tuo dispositivo. Il sito è sostenuto da annunci discreti.",
    },
    {
      q: "Il ridimensionamento ridurrà la qualità della mia immagine?",
      a: (
        <>
          Rimpicciolire un'immagine è delicato sulla qualità perché i pixel
          vengono mediati in modo intelligente tramite il ricampionamento
          Lanczos di alta qualità, che mantiene i bordi nitidi ed evita l'aspetto
          frastagliato dello scaling semplice. La qualità ne risente solo se
          ingrandisci (scali verso l'alto) un'immagine oltre le sue dimensioni
          originali, poiché non c'è alcun dettaglio reale da inventare.
        </>
      ),
      text: "Rimpicciolire un'immagine è delicato sulla qualità perché i pixel vengono mediati tramite il ricampionamento Lanczos di alta qualità, che mantiene i bordi nitidi. La qualità ne risente solo se ingrandisci un'immagine oltre le sue dimensioni originali, perché non c'è alcun dettaglio reale da inventare.",
    },
    {
      q: "Qual è la dimensione massima del file che posso ridimensionare?",
      a: (
        <>
          Non c'è un limite fisso: dipende dalla memoria disponibile sul tuo
          dispositivo. Le foto comuni di pochi megabyte e persino le immagini
          molto grandi da 40-80 MP si ridimensionano senza problemi. I lotti
          grandi vengono elaborati un file alla volta per mantenere basso l'uso
          della memoria.
        </>
      ),
      text: "Non c'è un limite fisso; dipende dalla memoria disponibile sul tuo dispositivo. Le foto comuni di pochi megabyte e persino le immagini molto grandi da 40-80 MP si ridimensionano senza problemi. I lotti grandi vengono elaborati un file alla volta per mantenere basso l'uso della memoria.",
    },
    {
      q: "Posso mantenere il rapporto d'aspetto affinché la mia immagine non appaia stirata?",
      a: (
        <>
          Sì. Mantieni selezionata la casella «Mantieni rapporto d'aspetto» e
          inserisci solo una larghezza o solo un'altezza: l'altra dimensione
          viene calcolata automaticamente così che l'immagine si scali in modo
          proporzionale. Deselezionala soltanto quando hai deliberatamente
          bisogno di dimensioni esatte e non proporzionali.
        </>
      ),
      text: "Sì. Mantieni selezionata la casella Mantieni rapporto d'aspetto e inserisci solo una larghezza o solo un'altezza; l'altra dimensione viene calcolata automaticamente così che l'immagine si scali in modo proporzionale. Deselezionala soltanto quando hai deliberatamente bisogno di dimensioni esatte e non proporzionali.",
    },
    {
      q: "Posso ridimensionare e comprimere allo stesso tempo?",
      a: (
        <>
          Sì, e dovresti farlo. Imposta le dimensioni di destinazione, poi
          scegli un formato di output e un livello di qualità. Il
          ridimensionamento riduce il numero di pixel mentre la compressione
          spreme i pixel rimanenti, quindi combinare entrambi dà il file più
          piccolo possibile in un solo passaggio.
        </>
      ),
      text: "Sì, e dovresti farlo. Imposta le dimensioni di destinazione, poi scegli un formato di output e un livello di qualità. Il ridimensionamento riduce il numero di pixel mentre la compressione spreme i pixel rimanenti, quindi combinare entrambi dà il file più piccolo possibile in un solo passaggio.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché ridimensionare le tue immagini?</h2>
      <p>
        I telefoni e le fotocamere moderni catturano immagini enormi: una sola
        foto può essere larga 6000 pixel e pesare dieci megabyte o più. È molto
        più dettaglio di quanto quasi qualsiasi schermo, email o pagina web
        mostrerà mai. L'intestazione di un blog potrebbe essere visualizzata a
        1200 pixel di larghezza; una foto profilo a 400; la firma di un'email a
        150. Inviare un file da 6000 pixel in uno spazio da 1200 pixel spreca
        banda, rallenta il caricamento delle pagine e gonfia gli allegati senza
        alcun beneficio visibile.
      </p>
      <p>
        Ridimensionare è anche la{" "}
        <strong>leva più potente che hai sulla dimensione del file</strong>.
        Poiché i dati di un'immagine scalano con il suo numero totale di pixel,
        dimezzare sia la larghezza sia l'altezza elimina circa tre quarti dei
        pixel — e quindi gran parte della dimensione del file — ancor prima di
        qualsiasi compressione. Abbassare la qualità JPEG potrebbe ridurre del
        30-50%; ridimensionare una foto troppo grande alla sua reale dimensione
        di visualizzazione taglia regolarmente l'80-95%. Se un file ti sembra
        troppo grande, ridimensiona prima e comprimi dopo.
      </p>
      <p>
        E poiché questo strumento funziona interamente sul tuo dispositivo, è il
        modo privato di farlo. Altri strumenti di ridimensionamento online
        caricano le tue foto su un server remoto, le elaborano lì e te le
        rispediscono. Qui le tue immagini vengono lette in memoria,
        ridimensionate localmente e restituite immediatamente: non toccano mai
        una rete.
      </p>

      <h2 id="quality">Come il ridimensionamento influisce sulla qualità</h2>
      <p>
        Ridurre le dimensioni di un'immagine è, per natura, delicato sulla
        qualità, ma <em>come</em> vengono combinati i pixel conta molto. Lo
        scaling semplice si limita a scartare pixel, producendo bordi
        frastagliati e sfarfallio sui dettagli fini. Questo strumento usa invece
        il <strong>ricampionamento Lanczos</strong> di alta qualità, che pondera
        un vicinato di pixel circostanti per ogni pixel di output. Il risultato
        mantiene i bordi nitidi e il testo leggibile, così un'immagine ridotta
        appare pulita anziché sfocata o con effetto seghettato.
      </p>
      <p>
        L'unica operazione che danneggia davvero è lo{" "}
        <strong>scaling verso l'alto</strong>: ingrandire un'immagine oltre le
        sue dimensioni originali. Nessun ricampionatore può inventare dettaglio
        che non è mai stato catturato, quindi una foto ingrandita appare molle e
        impastata. Come regola, ridimensiona sempre solo verso il{" "}
        <em>basso</em>: scegli la dimensione più grande che ti serve davvero e
        ridimensiona a quella, mai oltre le dimensioni di origine. Quando inoltre
        converti in un formato con perdita, ricorda che compressione e
        ridimensionamento si sommano: un'immagine ridimensionata ha meno pixel da
        comprimere, ed è esattamente per questo che i due insieme producono file
        così piccoli.
      </p>

      <h2 id="sizes">Pixel, percentuale e dimensioni di destinazione comuni</h2>
      <p>
        La modalità <strong>percentuale</strong> è ideale per i lotti: imposta
        il 50% e ogni immagine si riduce in modo proporzionale indipendentemente
        dalle dimensioni di partenza. La modalità <strong>pixel</strong> è per
        obiettivi precisi: digita una larghezza (o un'altezza) e, con il rapporto
        d'aspetto bloccato, l'altra dimensione viene calcolata per te così che
        nulla venga stirato. Il rapporto d'aspetto non è altro che la relazione
        tra larghezza e altezza (16:9, 4:3, 1:1); mantenerlo intatto è ciò che
        impedisce a volti e loghi di apparire schiacciati. Puoi leggere di più su
        come funzionano le immagini e le loro dimensioni nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida alle immagini sul web di MDN
        </a>
        .
      </p>
      <p>
        Obiettivi utili da tenere a mente: la maggior parte dei contenuti{" "}
        <strong>web</strong> rende benissimo tra 1200 e 2000 pixel sul lato lungo
        (usa l'estremo maggiore per immagini hero a tutta larghezza su display ad
        alta densità). Gli allegati e le firme delle <strong>email</strong>{" "}
        dovrebbero di solito restare a 800 pixel o meno per non intasare le
        caselle di posta. Per i <strong>social media</strong>, le dimensioni
        comuni sono all'incirca 1080×1080 per un post quadrato di Instagram,
        1080×1920 per storie e reel verticali, 1200×630 per un'anteprima di link
        di Facebook o Open Graph, e 1500×500 per un'intestazione di X/Twitter. In
        caso di dubbio, ridimensiona alla destinazione più grande in cui apparirà
        l'immagine e lascia che la piattaforma la riduca da lì.
      </p>

      <h2 id="tips">Consigli per ottenere i migliori risultati</h2>
      <ul>
        <li>
          <strong>Non scalare mai verso l'alto.</strong> Ingrandire oltre la
          dimensione originale aggiunge solo sfocatura. Scegli la dimensione più
          grande che ti serve davvero e fermati lì.
        </li>
        <li>
          <strong>Ridimensiona prima di comprimere.</strong> Meno pixel
          significano un file più piccolo e meno lavoro per l'encoder. Per le
          foto più piccole, ridimensionale qui e poi passale attraverso la{" "}
          <Link href="/it/compress-jpeg">compressione JPEG</Link>.
        </li>
        <li>
          <strong>Blocca il rapporto d'aspetto.</strong> Inserisci solo la
          larghezza o solo l'altezza e lascia che l'altra dimensione si riempia
          automaticamente: è il modo più semplice per evitare immagini stirate e
          deformate.
        </li>
        <li>
          <strong>Converti mentre ridimensioni.</strong> Passare a WebP o AVIF
          con il{" "}
          <Link href="/it/image-converter">convertitore di immagini</Link> può
          ridurre una foto ridimensionata di un altro 25-50% senza perdita di
          qualità visibile.
        </li>
        <li>
          <strong>Conserva i tuoi originali.</strong> Ridimensiona ogni volta a
          partire da un master a piena risoluzione anziché ridimensionare di
          nuovo una copia già ridotta, cosa che accumula perdita di qualità.
        </li>
      </ul>
    </>
  ),
};
