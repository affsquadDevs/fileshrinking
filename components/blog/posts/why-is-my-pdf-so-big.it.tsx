import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "why-is-my-pdf-so-big",
  title: "Perché il mio PDF è così grande? (e come ridurlo)",
  description:
    "Immagini ad alta risoluzione, pagine scansionate, font incorporati e oggetti duplicati appesantiscono un PDF. Ecco cosa lo causa e come risolverlo.",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  authorId: "team",
  tags: ["PDF", "Guida"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Hai finito un documento di due pagine, lo hai esportato come PDF e, in
        qualche modo, ti sei ritrovato con un file da 40&nbsp;MB che si rifiuta
        di essere allegato a un&rsquo;email. È un&rsquo;esperienza
        sorprendentemente comune. Un PDF non è una cosa sola: è un contenitore
        che raccoglie testo, font, immagini, grafica vettoriale e metadati in un
        unico file. Quando quel file è enorme, la dimensione deriva quasi sempre
        da pochi colpevoli specifici. Una volta capito a chi dare la colpa,
        ridurre il PDF è semplice. Questa guida ripercorre ogni causa e la
        soluzione che funziona davvero per ciascuna.
      </p>

      <h2 id="how-pdfs-store-data">Cosa c&rsquo;è davvero dentro un PDF</h2>
      <p>
        Un PDF memorizza il contenuto come una raccolta di{" "}
        <strong>oggetti</strong>: flussi di testo, dati di immagine, programmi
        di font e le istruzioni che li dispongono sulla pagina. Il formato è
        definito da uno standard ISO aperto, e la{" "}
        <a
          href="https://www.pdfa.org/resource/iso-32000-pdf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          panoramica di ISO&nbsp;32000 della PDF Association
        </a>{" "}
        è un buon riferimento se vuoi i dettagli formali. La conclusione pratica
        è semplice: <strong>il testo e la grafica vettoriale sono
        minuscoli</strong>, mentre{" "}
        <strong>le immagini sono enormi al confronto</strong>. Una pagina intera
        di testo fitto può occupare pochi kilobyte. Una singola foto a pagina
        intera può occupare diversi megabyte. Quindi, quando un PDF è
        inaspettatamente grande, la prima domanda da porsi è quasi sempre: da
        dove vengono le immagini?
      </p>

      <h2 id="high-res-images">
        Causa n.&nbsp;1: immagini incorporate ad alta risoluzione
      </h2>
      <p>
        Questo è il motivo più comune per cui un PDF si gonfia di dimensioni.
        Quando trascini in un documento una foto da uno smartphone o una
        fotocamera moderni, può essere larga 4000&nbsp;pixel o più. Anche se
        viene mostrata sulla pagina a una frazione di quella dimensione, il PDF
        spesso memorizza la risoluzione <em>completa</em>. Per un documento
        pensato per essere letto a schermo o stampato a qualità normale, raramente
        ti servono più di <strong>150 pixel per pollice (PPI)</strong>; per la
        stampa di alta qualità, 300&nbsp;PPI sono più che sufficienti. Tutto ciò
        che va oltre è peso sprecato.
      </p>
      <p>
        La soluzione è ridurre la risoluzione e ricomprimere quelle immagini
        prima o dopo che entrino nel PDF. Se controlli le immagini di origine,
        riducile prima: passale attraverso il{" "}
        <Link href="/it/compress-jpeg">compressore JPEG</Link> con una qualità di
        70&ndash;80 e ridimensionale alle dimensioni che ti servono davvero. Se
        le immagini sono già integrate nel PDF, passa l&rsquo;intero file
        attraverso il{" "}
        <Link href="/it/pdf-compressor">compressore PDF</Link>, che ricodifica le
        immagini incorporate a una dimensione inferiore e ragionevole. Per i
        contenuti fotografici, questo solo passaggio spesso riduce il file
        dell&rsquo;80&nbsp;per cento o più.
      </p>

      <h2 id="scanned-pages">Causa n.&nbsp;2: pagine scansionate</h2>
      <p>
        Un documento scansionato è un caso speciale, e particolarmente pesante.
        Quando scansioni carta, ogni pagina diventa un&rsquo;immagine a pagina
        intera: nel file non c&rsquo;è alcun testo reale, solo immagini di testo.
        Gli scanner spesso si configurano per impostazione predefinita con valori
        DPI molto alti (600&nbsp;DPI è comune) e a colori, il che produce file
        enormi per quello che essenzialmente è inchiostro nero su carta bianca.
      </p>
      <p>
        Puoi fare due cose. Primo, scansionare con più criterio: per un documento
        di testo, scansionare a{" "}
        <strong>200&ndash;300&nbsp;DPI in scala di grigi o in bianco e
        nero</strong>{" "}
        anziché a 600&nbsp;DPI a colori può ridurre drasticamente la dimensione
        rimanendo perfettamente leggibile. Secondo, per le scansioni che hai già,
        ricomprimile: passando il file attraverso il{" "}
        <Link href="/it/pdf-compressor">compressore PDF</Link> quelle immagini di
        pagina vengono ricodificate a una risoluzione e qualità più ragionevoli.
        Ma sii realista riguardo al limite: una scansione è, fondamentalmente, una
        pila di immagini, quindi sarà sempre più grande di un PDF di testo nativo
        digitale della stessa lunghezza.
      </p>

      <h2 id="fonts-and-objects">
        Causa n.&nbsp;3: font incorporati e oggetti duplicati
      </h2>
      <p>
        I PDF incorporano i font che utilizzano affinché il documento appaia
        identico su ogni dispositivo, il che è ottimo per la fedeltà ma aggiunge
        peso. Un esportatore ben configurato crea{" "}
        <strong>sottoinsiemi</strong> di font, incorporando solo i caratteri
        effettivamente usati. Gli strumenti mal configurati incorporano
        l&rsquo;<em>intera</em> famiglia di font, e un documento che usa diverse
        tipografie decorative può trascinarsi dietro diversi megabyte di dati di
        font che quasi non tocca. Limitarsi a un piccolo insieme di font comuni, e
        lasciare che il software ne crei sottoinsiemi, tiene tutto questo sotto
        controllo.
      </p>
      <p>
        Poi c&rsquo;è la pura inefficienza. Alcuni programmi scrivono la stessa
        immagine o risorsa nel file più volte invece di farvi riferimento una
        sola volta: un logo che compare in un&rsquo;intestazione su ogni pagina
        può finire incorporato decine di volte. I cicli ripetuti di &ldquo;Salva
        con nome&rdquo; e le modifiche incrementali possono anche lasciare dietro
        di sé oggetti orfani e obsoleti che non vengono mai eliminati. Salvare di
        nuovo il PDF con uno strumento che riscrive ed elimina i duplicati della
        sua struttura di oggetti ripulisce tutto questo automaticamente.
      </p>

      <h2 id="metadata">Causa n.&nbsp;4: metadati, allegati e residui</h2>
      <p>
        I contributi più piccoli si sommano. I PDF possono contenere metadati del
        documento, pacchetti XMP, profili colore incorporati, miniature, dati dei
        campi modulo, JavaScript e persino interi file allegati. I documenti
        esportati da software di progettazione a volte includono livelli nascosti,
        commenti o cronologia delle revisioni. Niente di tutto questo è visibile
        sulla pagina, ma tutto conta per il totale dei byte. Ottimizzare o
        &ldquo;appiattire&rdquo; il PDF rimuove le parti che non ti servono
        lasciando intatto il contenuto visibile.
      </p>

      <h2 id="when-it-wont-shrink">Quando un PDF non si riduce di molto</h2>
      <p>
        La compressione non è magia, e aiuta sapere quando hai toccato il fondo.
        Se il tuo PDF è{" "}
        <strong>per lo più testo reale e grafica vettoriale</strong>{" "}
        &mdash;un report nativo digitale, un contratto, un listato di codice&mdash;
        probabilmente è già piccolo, e c&rsquo;è poco da guadagnare. I byte stanno
        svolgendo un lavoro utile, e stringere di più non servirà a nulla. I grandi
        guadagni provengono quasi interamente dalle{" "}
        <strong>immagini</strong>: foto ad alta risoluzione e pagine scansionate.
        Se ricomprimere quelle immagini non sposta l&rsquo;ago della bilancia, è
        probabile che il tuo file non avesse molte immagini in partenza.
      </p>
      <p>
        Un modo rapido per diagnosticarlo: chiediti se riesci a selezionare e
        copiare il testo del documento. Se ci riesci, è nativo digitale e la
        dimensione proviene da immagini incorporate, font o residui. Se non ci
        riesci &mdash;se il testo è solo parte di un&rsquo;immagine&mdash; hai una
        scansione, e ridurre la risoluzione di quelle immagini di pagina è la tua
        leva più potente.
      </p>

      <h2 id="do-it">Ridurre il tuo, in modo privato</h2>
      <p>
        La buona notizia è che risolvere tutto questo non richiede di caricare il
        tuo documento da nessuna parte. Il{" "}
        <Link href="/it/pdf-compressor">compressore PDF di FileShrinking</Link>{" "}
        funziona interamente nel tuo browser, quindi un contratto riservato o un
        documento d&rsquo;identità scansionato non lascia mai il tuo dispositivo:
        viene elaborato localmente e non viene inviato nulla a nessun server.
        Inizia da lì per qualsiasi PDF grande; se stai assemblando un documento a
        partire dalle tue foto, riducile prima con il{" "}
        <Link href="/it/compress-jpeg">compressore JPEG</Link> così che il peso in
        eccesso non entri mai. Tra i due, la maggior parte dei PDF sovradimensionati
        scende a una dimensione gestibile e adatta alle email in un solo passaggio.
      </p>
    </>
  );
}
