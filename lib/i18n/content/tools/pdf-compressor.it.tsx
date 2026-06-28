import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressore PDF — Gratis, privato e nel browser",
  metaDescription:
    "Comprimi i PDF nel tuo browser. Ricomprimi le immagini incorporate per ridurre i PDF scansionati e ricchi di immagini, senza caricare nulla né registrarti.",
  heading: "Compressore PDF",
  intro: (
    <>
      Riduci le dimensioni dei PDF scansionati e ricchi di immagini direttamente
      nel tuo browser. Questo strumento ricomprime le immagini incorporate nel
      tuo documento ed elimina i metadati superflui, così il file diventa più
      piccolo mentre il testo resta nitido, e non viene mai caricato nulla.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere un PDF",
    description:
      "Riduci un PDF localmente nel tuo browser in quattro passaggi, senza caricare nulla.",
    steps: [
      {
        name: "Aggiungi il tuo PDF",
        text: "Trascina e rilascia il tuo PDF nell'area di caricamento o fai clic per cercarlo. Il file viene letto direttamente nel tuo browser: non viene mai inviato da nessuna parte.",
      },
      {
        name: "Scegli un livello di compressione",
        text: "Seleziona un preset o regola con precisione il cursore della qualità dell'immagine. Equilibrato va bene per la maggior parte dei documenti; scegli Più piccolo per il massimo risparmio su scansioni e file con molte foto.",
      },
      {
        name: "Lascia che venga elaborato sul tuo dispositivo",
        text: "Le immagini incorporate vengono ridotte di risoluzione e ricodificate come JPEG, e i metadati vengono eliminati, tutto in locale. Vedrai la dimensione originale, la nuova dimensione e la percentuale risparmiata.",
      },
      {
        name: "Scarica il PDF più piccolo",
        text: "Salva il tuo file ottimizzato. Se il risultato fosse più grande dell'originale, lo strumento conserva l'originale così non ottieni mai un file più grande.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file PDF vengono caricati su un server?",
      a: (
        <>
          No. Ogni PDF viene aperto e riscritto completamente nel tuo browser
          usando pdf-lib e un codificatore di immagini WebAssembly. Non viene
          caricato nulla: non c'è alcun server a cui inviare il tuo documento.
          Puoi persino disconnetterti da internet dopo il caricamento della
          pagina e continuerà a funzionare.
        </>
      ),
      text: "No. Ogni PDF viene aperto e riscritto completamente nel tuo browser usando pdf-lib e un codificatore di immagini WebAssembly. Non viene caricato nulla e non c'è alcun server a cui inviare il tuo documento. Puoi disconnetterti da internet dopo il caricamento della pagina e continuerà a funzionare.",
    },
    {
      q: "Il compressore PDF è davvero gratis?",
      a: (
        <>
          Sì: è completamente gratis, senza registrazione, senza filigrane
          impresse sulle tue pagine e senza limiti giornalieri di file o pagine.
          L'unico tetto pratico è la memoria del tuo dispositivo. Il sito è
          sostenuto da annunci discreti.
        </>
      ),
      text: "Sì. È completamente gratis, senza registrazione, senza filigrane sulle tue pagine e senza limiti giornalieri di file o pagine. L'unico tetto pratico è la memoria del tuo dispositivo. Il sito è sostenuto da annunci discreti.",
    },
    {
      q: "La compressione ridurrà la qualità del mio PDF?",
      a: (
        <>
          Interessa solo le immagini incorporate, che vengono ridotte di
          risoluzione e ricodificate come JPEG; il testo e la grafica vettoriale
          restano nitidi e completamente selezionabili. Le impostazioni di
          qualità dell'immagine più alte mantengono le foto nitide, mentre
          quelle più basse risparmiano più spazio. I PDF scansionati (che in
          realtà sono immagini) mostreranno il compromesso più visibile.
        </>
      ),
      text: "Interessa solo le immagini incorporate, che vengono ridotte di risoluzione e ricodificate come JPEG; il testo e la grafica vettoriale restano nitidi e selezionabili. Le impostazioni di qualità dell'immagine più alte mantengono le foto nitide, mentre quelle più basse risparmiano più spazio. I PDF scansionati, che in realtà sono immagini, mostrano il compromesso più visibile.",
    },
    {
      q: "Qual è la dimensione massima del file che posso comprimere?",
      a: (
        <>
          Non c'è un limite rigido: dipende da quanta memoria libera ha il tuo
          dispositivo. I documenti tipici di pochi megabyte sono istantanei, e i
          grandi PDF scansionati da 50 a 100 MB di solito funzionano su un
          portatile moderno. I file molto grandi usano più RAM perché l'intero
          PDF viene tenuto in memoria mentre viene riscritto.
        </>
      ),
      text: "Non c'è un limite rigido; dipende da quanta memoria libera ha il tuo dispositivo. I documenti tipici di pochi megabyte sono istantanei, e i grandi PDF scansionati da 50 a 100 MB di solito funzionano su un portatile moderno. I file molto grandi usano più RAM perché l'intero PDF viene tenuto in memoria mentre viene riscritto.",
    },
    {
      q: "Perché il mio PDF non si è ridotto affatto?",
      a: (
        <>
          Questo strumento riduce i PDF ricomprimendo le immagini incorporate.
          Se il tuo documento è per lo più testo, tabelle o grafica vettoriale,
          non ci sono immagini grandi da ottimizzare, quindi c'è poco da
          rimuovere. Quando un PDF ricompresso finirebbe per essere più grande
          dell'originale, lo strumento conserva intatto il tuo file originale.
        </>
      ),
      text: "Questo strumento riduce i PDF ricomprimendo le immagini incorporate. Se il tuo documento è per lo più testo, tabelle o grafica vettoriale, non ci sono immagini grandi da ottimizzare, quindi c'è poco da rimuovere. Quando un PDF ricompresso finirebbe per essere più grande dell'originale, lo strumento conserva intatto il tuo file originale.",
    },
    {
      q: "La compressione mantiene il mio PDF con testo ricercabile?",
      a: (
        <>
          Sì. Lo strumento non rasterizza mai le tue pagine né converte il testo
          in immagini, quindi qualsiasi testo selezionabile e ricercabile
          dell'originale resta selezionabile e ricercabile dopo. Vengono
          ricodificati solo i dati delle immagini incorporate nel file, e il
          layout della pagina viene preservato.
        </>
      ),
      text: "Sì. Lo strumento non rasterizza mai le tue pagine né converte il testo in immagini, quindi qualsiasi testo selezionabile e ricercabile dell'originale resta selezionabile e ricercabile dopo. Vengono ricodificati solo i dati delle immagini incorporate nel file, e il layout della pagina viene preservato.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché i file PDF sono così grandi?</h2>
      <p>
        Un PDF può gonfiarsi fino a decine di megabyte per motivi che non
        risultano ovvi guardando la pagina. Il colpevole maggiore, di gran
        lunga, sono le <strong>immagini incorporate</strong>: quando scansioni
        un documento, esporti delle diapositive o trascini una foto del
        telefono in un report, l'immagine a piena risoluzione viene salvata
        all'interno del file, spesso a 300 DPI o più, molto più dettaglio di
        quanto uno schermo o un destinatario di posta riusciranno mai a vedere.
        Altri fattori comuni sono i <strong>caratteri incorporati</strong>, gli
        oggetti duplicati da modifiche ripetute e i <strong>metadati</strong>{" "}
        residui, come miniature, annotazioni e cronologia delle revisioni.
      </p>
      <p>
        I documenti scansionati sono il caso estremo. Un &laquo;PDF
        scansionato&raquo; è in realtà una pila di fotografie di carta, con
        un'immagine grande per pagina e poco o nessun testo reale. Per questo una
        scansione di 10 pagine può essere più grande di un report di testo di 200
        pagine. Quei file ricchi di immagini e scansionati sono proprio dove
        questo compressore eccelle.
      </p>
      <p>
        Aiuta pensare a un PDF come a un contenitore simile a uno zip, anziché
        come a un'unica immagine piatta. Un report nato digitale esportato da un
        elaboratore di testi è per lo più istruzioni di testo compatte più
        qualche carattere incorporato, quindi resta piccolo. Nel momento in cui
        aggiungi grafici ad alta risoluzione, foto di prodotti o screenshot a
        pagina intera, il file eredita tutti i loro dati dei pixel. Modificare e
        risalvare ripetutamente in alcune applicazioni può anche lasciare copie
        orfane di immagini sostituite, gonfiando silenziosamente il file con dati
        che non sono nemmeno più visibili sulla pagina.
      </p>

      <h2 id="how-it-works">Come funziona questo compressore PDF</h2>
      <p>
        Siamo precisi su ciò che accade, perché l'onestà conta più di una
        promessa appariscente di &laquo;90&nbsp;% più piccolo&raquo;. Questo
        strumento apre il tuo PDF, trova le immagini incorporate in esso e{" "}
        <strong>ne riduce la risoluzione</strong> per quelle più grandi del
        necessario, e poi{" "}
        <strong>le ricodifica come JPEG</strong> alla qualità che scegli.
        Elimina anche i metadati non essenziali. Quindi ricostruisce il
        documento con{" "}
        <a
          href="https://pdf-lib.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf-lib
        </a>{" "}
        e un codificatore di immagini WebAssembly, tutto all'interno della scheda
        del browser.
      </p>
      <p>
        Ciò che <strong>non</strong> fa è altrettanto importante. Non appiattisce
        le tue pagine trasformandole in immagini, quindi il tuo{" "}
        <strong>testo resta reale, selezionabile e ricercabile</strong>, e la
        grafica vettoriale resta nitida a qualsiasi livello di zoom. L'altra
        faccia della medaglia: se il tuo PDF è per lo più testo, tabelle o arte
        vettoriale, non c'è quasi nulla che un ricompressore di immagini possa
        eliminare, e il risparmio sarà piccolo. In quel caso lo strumento
        semplicemente <strong>restituisce il tuo file originale</strong>: non ti
        consegna mai qualcosa di più grande di quello da cui sei partito.
      </p>
      <p>
        Le due impostazioni che controlli corrispondono direttamente a quelle due
        leve. Il
        <strong> cursore della qualità dell'immagine</strong> stabilisce con
        quanta aggressività ogni immagine viene ricodificata come JPEG: più alto
        mantiene intatti il dettaglio fine e le sfumature, più basso ne scarta di
        più per un file più piccolo. I preset limitano anche le dimensioni
        massime in pixel delle immagini incorporate, così una foto sovradimensionata
        viene <strong>ridotta di risoluzione</strong> a una risoluzione
        ragionevole prima di essere ricodificata. La riduzione di risoluzione è
        di solito da dove provengono i maggiori risparmi, perché dimezzare la
        larghezza e l'altezza di un'immagine rimuove circa tre quarti dei suoi
        pixel. Tutto viene elaborato un file alla volta, così l'uso della memoria
        resta prevedibile anche su un telefono.
      </p>

      <h2 id="format">Cos'è davvero un PDF, e il modello di privacy</h2>
      <p>
        Il PDF (Portable Document Format) è stato creato da Adobe ed è ora uno
        standard ISO aperto (ISO 32000). Un PDF è un contenitore di oggetti:
        descrizioni di pagina, caratteri, tracciati vettoriali e flussi di
        immagini, ognuno dei quali può usare la propria compressione. Poiché le
        immagini sono memorizzate come flussi separati, possono essere sostituite
        con versioni più piccole e ricodificate senza toccare il resto del
        documento: è questo il meccanismo su cui si basa questo strumento. Puoi
        leggere la descrizione del formato fornita da Adobe stessa nella{" "}
        <a
          href="https://www.adobe.com/acrobat/about-adobe-pdf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          pagina di riferimento di Adobe PDF
        </a>
        .
      </p>
      <p>
        La privacy è il motivo per fare questo in un browser anziché caricarlo su
        un sito web. I PDF sono spesso i file <em>più</em> sensibili che le
        persone comprimono: contratti, dichiarazioni dei redditi, cartelle
        cliniche, scansioni di documenti d'identità e accordi firmati. Con un
        tipico compressore online, tutto ciò esce dalla tua macchina e finisce
        sul server di qualcun altro. Qui, il tuo documento viene letto in
        memoria, riscritto sul tuo dispositivo e restituito direttamente a te.
        Non viene trasmesso, registrato né memorizzato nulla: puoi disconnetterti
        da internet dopo il caricamento della pagina e lo strumento continuerà a
        funzionare.
      </p>
      <p>
        Questo approccio local-first ha anche un vantaggio pratico: non ci sono
        code, né tetti di dimensione per file imposti da un server, né attese che
        terminino un caricamento e uno scaricamento. La velocità dipende
        unicamente dal tuo hardware. Lo svantaggio è che i file molto grandi si
        appoggiano alla memoria del tuo dispositivo mentre vengono riscritti,
        quindi una scansione estremamente grande su un telefono datato può essere
        lenta; dividerla prima in PDF più piccoli è una soluzione facile.
      </p>

      <h2 id="tips">Consigli per i PDF più piccoli</h2>
      <ul>
        <li>
          <strong>Scansiona a un DPI più basso.</strong> 150 a 200 DPI sono più
          che sufficienti per la lettura a schermo e la posta; 600 DPI
          quadruplica i dati per un dettaglio che vedrai raramente. Imposta la
          risoluzione prima di scansionare per la vittoria più facile di tutte.
        </li>
        <li>
          <strong>Scegli prima Equilibrato, poi Più piccolo.</strong> Inizia con
          il preset Equilibrato, controlla il risultato, poi eseguilo di nuovo su
          Più piccolo e confronta. Sulle scansioni con molte foto, l'impostazione
          più bassa può ridurre di nuovo le dimensioni circa alla metà con poca
          differenza visibile.
        </li>
        <li>
          <strong>Comprimi le immagini di origine prima di inserirle.</strong>{" "}
          Se stai creando un PDF a partire da foto o screenshot, riducile prima
          con il{" "}
          <Link href="/it/image-compressor">compressore di immagini</Link> o il{" "}
          <Link href="/it/compress-jpeg">compressore JPEG</Link>. Un input più
          leggero significa un PDF più leggero.
        </li>
        <li>
          <strong>Ridimensiona in anticipo le immagini sovradimensionate.</strong>{" "}
          Una foto da 6000 pixel su una pagina A4 è dettaglio sprecato. Usa il{" "}
          <Link href="/it/image-resizer">ridimensionatore di immagini</Link> o
          converti in un formato moderno con il{" "}
          <Link href="/it/image-converter">convertitore di immagini</Link> prima
          di assemblare il documento.
        </li>
        <li>
          <strong>Non aspettarti miracoli dai PDF di testo.</strong> Se un file è
          quasi tutto testo e si riduce a malapena, è normale: semplicemente non
          c'erano immagini pesanti da ottimizzare.
        </li>
      </ul>
    </>
  ),
};
