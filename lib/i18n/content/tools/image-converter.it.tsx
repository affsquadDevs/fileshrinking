import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Convertitore di immagini — JPEG, PNG, WebP e AVIF",
  metaDescription:
    "Converti immagini tra JPEG, PNG, WebP e AVIF in modo privato nel browser. Nessun caricamento: i tuoi file non lasciano mai il dispositivo.",
  heading: "Convertitore di immagini",
  intro: (
    <>
      Converti immagini tra JPEG, PNG, WebP e AVIF direttamente nel tuo browser.
      Trascina un file, scegli il formato che ti serve e scarica il risultato in
      pochi secondi: ogni conversione viene eseguita sul tuo dispositivo, quindi
      non viene mai caricato nulla.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come convertire un'immagine",
    description:
      "Converti tra JPEG, PNG, WebP e AVIF localmente nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi la tua immagine",
        text: "Trascina e rilascia un JPEG, PNG, WebP, AVIF o GIF nell'area di caricamento, fai clic per cercarlo o incollalo dagli appunti. Puoi metterne diversi in coda contemporaneamente.",
      },
      {
        name: "Scegli il formato di output",
        text: "Seleziona JPEG, PNG, WebP o AVIF. Usa WebP o AVIF per i file più leggeri e pronti per il web, PNG quando ti serve la trasparenza senza perdita di qualità, oppure JPEG per la massima compatibilità.",
      },
      {
        name: "Imposta la qualità",
        text: "Per JPEG, WebP e AVIF, regola il cursore della qualità: intorno a 80 è un equilibrio eccellente. L'output PNG è sempre senza perdita di qualità, quindi non c'è alcuna qualità da impostare.",
      },
      {
        name: "Scarica i tuoi file convertiti",
        text: "Salva ogni immagine convertita singolarmente oppure scaricale tutte in una volta in un file ZIP. Cambia il formato o la qualità e riconverti quando vuoi.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file vengono caricati su un server quando li converto?",
      a: (
        <>
          No. La conversione avviene interamente nel tuo browser usando codec
          WebAssembly. L'immagine viene decodificata e ricodificata in memoria
          sul tuo dispositivo, quindi i tuoi file non toccano mai un server:
          puoi persino disconnetterti da internet dopo il caricamento della
          pagina e continuerà a funzionare.
        </>
      ),
      text: "No. La conversione avviene interamente nel tuo browser usando codec WebAssembly. L'immagine viene decodificata e ricodificata in memoria sul tuo dispositivo, quindi i tuoi file non toccano mai un server. Puoi disconnetterti da internet dopo il caricamento della pagina e continuerà a funzionare.",
    },
    {
      q: "Il convertitore di immagini è gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza registrazione, senza filigrane e
          senza limiti sul numero di file che converti o sulla loro dimensione,
          oltre a ciò che consente la memoria del tuo dispositivo. Il sito è
          finanziato da annunci poco invasivi.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, senza filigrane e senza limiti sul numero di file che converti o sulla loro dimensione, oltre a ciò che consente la memoria del tuo dispositivo. Il sito è finanziato da annunci poco invasivi.",
    },
    {
      q: "La conversione influirà sulla qualità dell'immagine?",
      a: (
        <>
          Dipende dal formato di destinazione. Convertire in PNG è senza perdita
          di qualità, quindi non si perde alcun dettaglio. Convertire in JPEG,
          WebP o AVIF è con perdita di qualità e ricodifica l'immagine alla
          qualità che scegli: tra 75 e 85 è visivamente indistinguibile
          dall'originale per la maggior parte delle foto. Poiché la
          ricodifica con perdita si accumula, converti sempre dalla tua sorgente
          di massima qualità anziché da una copia già compressa.
        </>
      ),
      text: "Dipende dal formato di destinazione. Convertire in PNG è senza perdita di qualità, quindi non si perde alcun dettaglio. Convertire in JPEG, WebP o AVIF è con perdita di qualità e ricodifica alla qualità che scegli; tra 75 e 85 è visivamente indistinguibile dall'originale per la maggior parte delle foto. La ricodifica con perdita si accumula, quindi converti sempre dalla tua sorgente di massima qualità.",
    },
    {
      q: "Qual è la dimensione massima del file che posso convertire?",
      a: (
        <>
          Non c'è un limite rigido: è limitato solo dalla memoria disponibile del
          tuo dispositivo. Le foto di tutti i giorni di pochi megabyte e le
          immagini grandi da 20 a 50 MP si convertono senza problemi, e la
          codifica AVIF è quella che usa di più la CPU, quindi le immagini molto
          grandi richiedono semplicemente un po' più di tempo.
        </>
      ),
      text: "Non c'è un limite rigido; è limitato solo dalla memoria disponibile del tuo dispositivo. Le foto di tutti i giorni di pochi megabyte e le immagini grandi da 20 a 50 MP si convertono senza problemi. La codifica AVIF è quella che usa di più la CPU, quindi le immagini molto grandi richiedono un po' più di tempo.",
    },
    {
      q: "In quale formato dovrei convertire?",
      a: (
        <>
          Per le fotografie con cui vuoi un'ampia compatibilità, usa JPEG o
          WebP. Per grafica, loghi, screenshot o qualsiasi cosa che richieda
          trasparenza, usa PNG o WebP. Per il file più piccolo possibile con
          supporto sui browser moderni, scegli AVIF. WebP è l'opzione più sicura
          a tutto tondo perché supporta sia le foto con perdita sia la
          trasparenza senza perdita di qualità.
        </>
      ),
      text: "Per le fotografie con cui vuoi un'ampia compatibilità, usa JPEG o WebP. Per grafica, loghi, screenshot o qualsiasi cosa che richieda trasparenza, usa PNG o WebP. Per il file più piccolo possibile con supporto sui browser moderni, scegli AVIF. WebP è l'opzione più sicura a tutto tondo, perché supporta sia le foto con perdita sia la trasparenza senza perdita di qualità.",
    },
    {
      q: "Cosa succede alla trasparenza quando converto in JPEG?",
      a: (
        <>
          JPEG non supporta un canale alfa, quindi qualsiasi area trasparente
          viene appiattita su uno sfondo pieno quando converti in JPEG. Se la tua
          immagine dipende dalla trasparenza (per esempio un logo pensato per
          stare su sfondi diversi), converti invece in PNG o WebP, che
          conservano entrambi il canale alfa.
        </>
      ),
      text: "JPEG non supporta un canale alfa, quindi le aree trasparenti vengono appiattite su uno sfondo pieno quando converti in JPEG. Se la tua immagine dipende dalla trasparenza, come un logo, converti invece in PNG o WebP, che conservano entrambi il canale alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché convertire tra formati di immagine?</h2>
      <p>
        Non tutti i formati di immagine sono adatti a ogni compito. Un logo
        salvato come JPEG appare sfocato lungo i bordi; una fotografia salvata
        come PNG può essere diverse volte più grande del necessario; e un GIF di
        dieci anni fa occupa molto più spazio di un equivalente moderno.
        Convertire un'immagine in un formato più adatto può renderla
        notevolmente più piccola, più nitida o più compatibile con ciò su cui la
        stai pubblicando, senza dover rifotografare né ridisegnare nulla.
      </p>
      <p>
        Il motivo più comune per cui la gente converte è ridurre le immagini per
        il web. Passare una foto da JPEG a{" "}
        <Link href="/it/compress-webp">WebP</Link> o{" "}
        <Link href="/it/compress-avif">AVIF</Link> può ridurne le dimensioni da
        un quarto fino alla metà a parità di qualità visiva, il che significa
        pagine più veloci e minori costi di banda. Altri convertono nella
        direzione opposta: trasformano un WebP o AVIF di nuovo in un JPEG o PNG
        supportato universalmente affinché si apra su software più vecchio o si
        possa allegare a un'email. Poiché questo convertitore viene eseguito
        interamente sul tuo dispositivo, puoi fare tutto questo senza affidare le
        tue immagini a un server remoto.
      </p>

      <h2 id="lossy">Conversione senza perdita e con perdita: cosa cambia</h2>
      <p>
        Convertire un'immagine significa sempre decodificarla e ricodificarla in
        un nuovo formato, e il formato che scegli decide se quel passaggio è{" "}
        <strong>senza perdita</strong> o <strong>con perdita</strong>. PNG è
        senza perdita: ogni pixel viene conservato esattamente, ed è per questo
        che è ideale per grafica e screenshot, ma produce file grandi per le
        foto. JPEG, WebP e AVIF sono con perdita per impostazione predefinita:
        scartano i dettagli che è meno probabile che il tuo occhio noti per
        rendere il file molto più piccolo, e un cursore della qualità controlla
        quanto è aggressivo quel compromesso.
      </p>
      <p>
        Una cosa fondamentale da capire è che la conversione con perdita{" "}
        <strong>si accumula</strong>. Ogni volta che ricodifichi un'immagine già
        con perdita, viene scartato un po' più di dettaglio, quindi dovresti
        convertire sempre dalla sorgente di qualità più alta che hai anziché da
        una copia che è già stata compressa. Convertire un JPEG con perdita{" "}
        <em>in</em> PNG non ripristinerà nemmeno come per magia il dettaglio
        perduto: archivia semplicemente i pixel già degradati senza perdita,
        solitamente in un file più grande. Per le foto, una qualità di{" "}
        <strong>75-85</strong> in JPEG, WebP o AVIF è il punto ottimale in cui il
        risultato è essenzialmente indistinguibile dall'originale a dimensioni di
        visualizzazione normali.
      </p>

      <h2 id="formats">Una guida rapida ai quattro formati</h2>
      <p>
        Ogni formato ha un compito che svolge meglio. <strong>JPEG</strong> è il
        formato fotografico universale: supportato ovunque, ottimo per le
        immagini a tono continuo, ma senza trasparenza. <strong>PNG</strong> è
        senza perdita e supporta un canale alfa, il che lo rende la scelta giusta
        per loghi, icone, screenshot e qualsiasi grafica che abbia bisogno di
        bordi nitidi o di uno sfondo trasparente. <strong>WebP</strong> è il
        tuttofare moderno: gestisce sia le foto con perdita sia la trasparenza
        senza perdita ed è in genere dal 25% al 35% più piccolo di JPEG.{" "}
        <strong>AVIF</strong> di solito produce i file più piccoli di tutti e
        supporta anche la trasparenza, al costo di una codifica più lenta e di un
        supporto software leggermente più limitato. Puoi leggere
        un'analisi autorevole di ciascuno nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai tipi di file immagine di MDN
        </a>
        .
      </p>
      <p>
        In pratica: scegli <strong>JPEG o WebP</strong> per le fotografie,{" "}
        <strong>PNG o WebP</strong> per la grafica e qualsiasi cosa con
        trasparenza, e <strong>AVIF</strong> quando conta il file in assoluto più
        piccolo e il tuo pubblico usa browser attuali. Ricorda che{" "}
        <strong>JPEG non ha trasparenza</strong>, quindi convertire un PNG o WebP
        trasparente in JPEG lo appiattirà su uno sfondo pieno. Se vuoi solo
        rendere un file più piccolo senza cambiarne il formato, i compressori
        dedicati per{" "}
        <Link href="/it/compress-jpeg">JPEG</Link>,{" "}
        <Link href="/it/compress-png">PNG</Link>,{" "}
        <Link href="/it/compress-webp">WebP</Link> e{" "}
        <Link href="/it/compress-avif">AVIF</Link> sono più adatti.
      </p>

      <h2 id="tips">Consigli per conversioni pulite</h2>
      <ul>
        <li>
          <strong>Converti dall'originale.</strong> Parti dalla sorgente di
          qualità più alta che hai per non ricomprimere dettagli che erano già
          andati persi.
        </li>
        <li>
          <strong>Fai attenzione alla trasparenza prima di scegliere JPEG.</strong>{" "}
          Se la tua immagine ha aree trasparenti che vuoi conservare, scegli PNG
          o WebP: JPEG non può archiviare un canale alfa.
        </li>
        <li>
          <strong>Prova prima WebP per il web.</strong> È il miglior equilibrio
          tra dimensioni ridotte, supporto della trasparenza e ampia
          compatibilità con i browser, il che lo rende un'impostazione
          predefinita sicura per la maggior parte dei siti web.
        </li>
        <li>
          <strong>Ridimensiona mentre converti.</strong> Se l'immagine verrà
          mostrata in piccolo, ridurne le dimensioni fa risparmiare molto più
          della sola scelta del formato: usa l'opzione di ridimensionamento
          integrata o il{" "}
          <Link href="/it/image-resizer">ridimensionatore di immagini</Link>{" "}
          dedicato.
        </li>
        <li>
          <strong>Confronta prima di decidere.</strong> Converti la stessa
          sorgente in WebP e AVIF e controlla le dimensioni dei file e come
          appaiono alla tua dimensione di visualizzazione; il vincitore varia da
          un'immagine all'altra.
        </li>
      </ul>
    </>
  ),
};
