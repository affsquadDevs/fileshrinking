import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "best-image-formats-for-the-web-2026",
  title: "I migliori formati di immagine per il web nel 2026",
  description:
    "AVIF e WebP con JPEG come fallback, quando vince ancora PNG, l'elemento <picture> e come il peso delle immagini incide sui Core Web Vitals nel 2026.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  authorId: "maya",
  tags: ["Formati", "Prestazioni web"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Le immagini restano l&rsquo;elemento più pesante della maggior parte
        delle pagine web: di solito occupano più byte di script, font e fogli di
        stile messi insieme. Scegliere il formato giusto è la decisione di
        prestazioni a più alto impatto che puoi prendere, e nel 2026 la risposta
        si è finalmente consolidata. La versione breve: punta prima su{" "}
        <strong>AVIF</strong>, usa <strong>WebP</strong> come alternativa e
        mantieni <strong>JPEG</strong> come rete di sicurezza universale. PNG ha
        ancora il suo ruolo, ma più ristretto di quanto la maggior parte delle
        persone supponga. Ecco come conviene ragionarci.
      </p>

      <h2 id="the-modern-stack">Lo stack di immagini moderno in breve</h2>
      <p>
        Tre formati con perdita dominano ora i contenuti fotografici sul web, in
        ordine decrescente di efficienza di compressione:
      </p>
      <ul>
        <li>
          <strong>AVIF</strong>: derivato dal codec video AV1, di solito produce
          i file più piccoli a una data qualità visiva, spesso tra il 30 e il
          50&nbsp;% più piccoli di JPEG e sensibilmente inferiori a WebP. Inoltre
          supporta gamma di colori ampia, HDR, trasparenza e modalità sia con
          perdita sia senza perdita.
        </li>
        <li>
          <strong>WebP</strong>: un formato di Google un po&rsquo; più vecchio
          che resta comunque eccellente: all&rsquo;incirca tra il 25 e il
          35&nbsp;% più piccolo di JPEG, con supporto per trasparenza e
          animazione. Il suo vantaggio principale oggi è la velocità di codifica
          e un supporto dei browser solidissimo.
        </li>
        <li>
          <strong>JPEG</strong>: ha quasi 35 anni e un supporto universale. È il
          tuo fallback, non la tua prima scelta, ma verrà visualizzato
          letteralmente ovunque.
        </li>
      </ul>
      <p>
        La buona notizia per il 2026 è che non è più una scommessa. AVIF è
        supportato nelle versioni attuali di Chrome, Edge, Firefox e Safari, e
        WebP è supportato da anni su tutti i principali browser. Puoi consultare
        la matrice di supporto in tempo reale nel{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          riferimento ai tipi di immagine di MDN
        </a>
        , che traccia la disponibilità per browser di ciascun formato.
      </p>

      <h2 id="avif-vs-webp">AVIF o WebP: quale dovresti scegliere?</h2>
      <p>
        Se puoi servire un solo formato moderno, la decisione di solito si riduce
        a un compromesso tra dimensione del file e costo di codifica:
      </p>
      <ul>
        <li>
          <strong>Scegli AVIF</strong> quando i byte contano più di tutto:
          grandi immagini hero, portfolio fotografici, qualsiasi cosa in cui ogni
          kilobyte pesa sulle tue metriche di caricamento. Inoltre gestisce le
          sfumature morbide e i cieli con molti meno artefatti di banding rispetto
          a JPEG.
        </li>
        <li>
          <strong>Scegli WebP</strong> quando hai bisogno di una codifica rapida
          ed economica su larga scala, oppure quando vuoi un unico formato
          moderno con la massima diffusione possibile e un comportamento
          prevedibile. WebP codifica molto più velocemente di AVIF, il che conta
          se stai convertendo migliaia di immagini.
        </li>
      </ul>
      <p>
        In realtà non sei obbligato a scegliere. La risposta giusta per un sito
        in produzione è offrire entrambi e lasciare che sia il browser a
        decidere, ed è esattamente a questo che serve l&rsquo;elemento{" "}
        <code>&lt;picture&gt;</code>. Puoi sperimentare con entrambi proprio ora
        con il{" "}
        <Link href="/it/compress-avif">compressore AVIF</Link> e il{" "}
        <Link href="/it/compress-webp">compressore WebP</Link> di FileShrinking,
        confrontare le dimensioni dei file prodotti fianco a fianco e decidere
        cosa funziona meglio per i tuoi contenuti. Tutto viene eseguito nel tuo
        browser, quindi non si carica nulla.
      </p>

      <h2 id="picture-element">Servire il formato giusto con &lt;picture&gt;</h2>
      <p>
        Il modo più pulito per distribuire formati moderni con un fallback è la
        negoziazione del contenuto in HTML. L&rsquo;elemento{" "}
        <code>&lt;picture&gt;</code> ti consente di elencare le sorgenti
        candidate in ordine di priorità; il browser usa la prima che comprende e
        ignora le altre:
      </p>
      <ul>
        <li>
          Elenca per prima la tua sorgente <strong>AVIF</strong>, dato che il
          formato più efficiente dovrebbe prevalere quando è disponibile.
        </li>
        <li>
          Elenca <strong>WebP</strong> al secondo posto, per intercettare
          qualsiasi browser privo di AVIF ma che supporti WebP.
        </li>
        <li>
          Inserisci un normale <strong>JPEG</strong> (o PNG) nel tag{" "}
          <code>&lt;img&gt;</code> di chiusura come fallback garantito, e per
          trasportare il tuo testo <code>alt</code>, il <code>width</code> e
          l&rsquo;<code>height</code>.
        </li>
      </ul>
      <p>
        Poiché il browser scarica solo l&rsquo;unica sorgente che sceglie, questo
        ti offre il formato più piccolo che ciascun visitatore può visualizzare
        senza alcun JavaScript né rilevamento lato server. Per il pattern di
        markup completo, la{" "}
        <a
          href="https://web.dev/articles/serve-responsive-images"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida di web.dev alle immagini responsive
        </a>{" "}
        spiega come combinare <code>&lt;picture&gt;</code> con{" "}
        <code>srcset</code> anche per il cambio di risoluzione.
      </p>

      <h2 id="png-still-matters">Quando contano ancora PNG (e SVG)</h2>
      <p>
        I formati moderni con perdita sono pensati per le fotografie. Sono lo
        strumento sbagliato per la grafica piatta, e PNG si guadagna ancora il
        suo posto in alcuni casi specifici:
      </p>
      <ul>
        <li>
          <strong>Grafica dai bordi netti con pochi colori</strong>: loghi,
          icone, screenshot di interfacce e diagrammi. Il PNG senza perdita
          mantiene testo e bordi nitidi, dove la compressione con perdita li
          sfocherebbe.
        </li>
        <li>
          <strong>Screenshot con precisione al pixel</strong> che vuoi
          riprodurre esattamente, byte per byte.
        </li>
        <li>
          <strong>File master di origine</strong> che modificherai di nuovo in
          seguito, dato che PNG è senza perdita e non accumula perdita di
          generazione.
        </li>
      </ul>
      <p>
        Detto questo, per molti di questi compiti <strong>SVG</strong> è ancora
        meglio: loghi e icone semplici disegnati come vettori restano nitidissimi
        a qualsiasi dimensione e spesso pesano meno di un equivalente
        rasterizzato. E quando hai davvero bisogno di una grafica rasterizzata
        con trasparenza sul web, sia AVIF sia WebP supportano anch&rsquo;essi un
        canale alfa, quindi un WebP senza perdita può spesso battere PNG in
        dimensione. Se hai una risorsa nel formato sbagliato, il{" "}
        <Link href="/it/image-converter">convertitore di immagini</Link> può
        cambiarla senza ricaricare nulla.
      </p>

      <h2 id="core-web-vitals">Il peso delle immagini e i Core Web Vitals</h2>
      <p>
        La scelta del formato non riguarda solo le bollette della banda: incide
        direttamente sui Core Web Vitals di Google, che influenzano sia
        l&rsquo;esperienza utente sia il posizionamento nei motori di ricerca. La
        metrica più legata alle immagini è il{" "}
        <strong>Largest Contentful Paint (LCP)</strong>: in una pagina tipica,
        l&rsquo;elemento più grande è l&rsquo;immagine hero, quindi la rapidità
        con cui arriva quell&rsquo;immagine determina in gran parte il tuo
        punteggio LCP. L&rsquo;obiettivo consigliato è un LCP inferiore a{" "}
        <strong>2,5 secondi</strong> per la maggior parte delle tue visite.
      </p>
      <p>Alcune leve pratiche, in ordine approssimativo di impatto:</p>
      <ul>
        <li>
          <strong>Riduci i byte</strong> servendo AVIF o WebP invece di JPEG.
          Un&rsquo;immagine LCP più piccola arriva prima: è il singolo
          miglioramento più grande.
        </li>
        <li>
          <strong>Dimensiona le immagini in base alle dimensioni di
          visualizzazione.</strong>{" "}
          Inviare una foto da 4000&nbsp;px in uno spazio da 800&nbsp;px spreca la
          maggior parte del download. Usa <code>srcset</code> per servire varianti
          di dimensione adeguata.
        </li>
        <li>
          <strong>Imposta sempre <code>width</code> e <code>height</code></strong>{" "}
          (oppure usa <code>aspect-ratio</code> in CSS) in modo che il browser
          riservi lo spazio ed eviti lo spostamento del layout, il che protegge
          il tuo punteggio CLS.
        </li>
        <li>
          <strong>Evita il caricamento differito dell&rsquo;immagine LCP.</strong>{" "}
          Differisci il caricamento delle immagini sotto la piega, ma lascia che
          l&rsquo;immagine hero carichi subito così da non ritardarla.
        </li>
      </ul>

      <h2 id="takeaway">La conclusione per il 2026</h2>
      <p>
        Per i contenuti fotografici, usa per impostazione predefinita{" "}
        <strong>AVIF</strong> per ottenere i file più piccoli, offri{" "}
        <strong>WebP</strong> come alternativa rapida e ampiamente compatibile, e
        conserva un fallback in <strong>JPEG</strong> dentro un elemento{" "}
        <code>&lt;picture&gt;</code> così che ogni browser riceva qualcosa.
        Riserva <strong> PNG</strong> per grafica nitida, screenshot e master
        senza perdita, e usa <strong>SVG</strong> per loghi e icone ogni volta
        che puoi. Comprimi prima di pubblicare, dimensiona ogni immagine in base
        al suo spazio e i tuoi Core Web Vitals ti ricompenseranno.
      </p>
      <p>
        Vuoi metterlo in pratica? Converti e comprimi le tue immagini
        direttamente nel tuo browser con gli strumenti{" "}
        <Link href="/it/compress-avif">AVIF</Link> e{" "}
        <Link href="/it/compress-webp">WebP</Link>, oppure cambia formato con il{" "}
        <Link href="/it/image-converter">convertitore di immagini</Link>: nessun
        upload, nessun account e i tuoi file non lasciano mai il tuo dispositivo.
      </p>
    </>
  );
}
