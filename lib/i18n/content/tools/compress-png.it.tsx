import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimi PNG — Ottimizzatore PNG gratuito",
  metaDescription:
    "Ottimizza immagini PNG nel browser con OxiPNG: senza perdita, privato e senza upload. Oppure converti in WebP per file molto più piccoli.",
  heading: "Compressore PNG",
  intro: (
    <>
      Ottimizza le immagini PNG direttamente nel browser con OxiPNG, un
      ottimizzatore senza perdita che riduce le dimensioni dei file senza
      toccare un solo pixel. Mantieni intatte la trasparenza e i bordi nitidi,
      oppure converti in WebP per un risparmio molto maggiore. Niente viene mai
      caricato.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere un PNG",
    description:
      "Ottimizza immagini PNG senza perdita nel tuo browser in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi le tue immagini PNG",
        text: "Trascina e rilascia i tuoi file PNG nell'area di caricamento, fai clic per sfogliare o incolla dagli appunti. Puoi aggiungerne diversi alla volta.",
      },
      {
        name: "Scegli un livello di ottimizzazione",
        text: "Scegli Veloce, Bilanciato o Massimo. I livelli più alti cercano con più impegno una codifica senza perdita più piccola, quindi impiegano un po' più di tempo ma spremono qualcosa in più.",
      },
      {
        name: "Ottimizza sul tuo dispositivo",
        text: "Ogni PNG viene riscritto localmente con OxiPNG. Vedrai la dimensione originale, la nuova dimensione e la percentuale risparmiata per ogni file, con tutti i pixel conservati.",
      },
      {
        name: "Scarica — oppure converti per risparmiare di più",
        text: "Scarica i file uno alla volta o tutti insieme in un file ZIP. Se una foto in PNG è ancora grande, cambia il formato di uscita in WebP per ottenere un risultato molto più piccolo e adatto al web.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei file PNG vengono caricati su un server?",
      a: (
        <>
          No. Ogni PNG viene ottimizzato localmente nel tuo browser usando
          WebAssembly. Le tue immagini non lasciano mai il tuo dispositivo e non
          c&rsquo;è alcun server su cui caricarle; puoi persino disconnetterti da
          internet dopo che la pagina si è caricata e continuerà a funzionare.
        </>
      ),
      text: "No. Ogni PNG viene ottimizzato localmente nel tuo browser usando WebAssembly. Le tue immagini non lasciano mai il tuo dispositivo e non c'è alcun server su cui caricarle. Puoi disconnetterti da internet dopo che la pagina si è caricata e continuerà a funzionare.",
    },
    {
      q: "Il compressore PNG è davvero gratuito?",
      a: (
        <>
          Sì, è completamente gratuito, senza registrazione, senza filigrane e
          senza limiti al numero di file o alle dimensioni oltre a quanto può
          gestire la memoria del tuo dispositivo. Il sito si sostiene con
          pubblicità discreta.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, senza filigrane e senza limiti al numero di file o alle dimensioni oltre a quanto può gestire la memoria del tuo dispositivo. Il sito si sostiene con pubblicità discreta.",
    },
    {
      q: "Ottimizzare il mio PNG ne ridurrà la qualità?",
      a: (
        <>
          No, l&rsquo;ottimizzazione PNG con OxiPNG è{" "}
          <strong>totalmente senza perdita</strong>. Ogni pixel viene conservato
          esattamente, compresa la trasparenza; OxiPNG si limita a riscrivere il
          file in modo più efficiente. Il compromesso è che il risparmio senza
          perdita è modesto, di solito tra il 5 e il 30 %. Se invece converti in
          WebP, quel passaggio è con perdita e può modificare leggermente
          l&rsquo;immagine, ma riduce molto di più le dimensioni.
        </>
      ),
      text: "No. L'ottimizzazione PNG con OxiPNG è totalmente senza perdita. Ogni pixel viene conservato esattamente, compresa la trasparenza; OxiPNG si limita a riscrivere il file in modo più efficiente. Il risparmio senza perdita è modesto, di solito tra il 5 e il 30 %. Convertire in WebP è con perdita ma riduce molto di più le dimensioni.",
    },
    {
      q: "Qual è la dimensione massima del file che posso ottimizzare?",
      a: (
        <>
          Non c&rsquo;è un limite rigido: dipende dalla memoria disponibile sul
          tuo dispositivo. Telefoni e portatili gestiscono comodamente le
          consuete schermate e i loghi, e perfino PNG grandi ad alta
          risoluzione. I lotti grandi vengono elaborati un file alla volta per
          mantenere basso l&rsquo;uso della memoria.
        </>
      ),
      text: "Non c'è un limite rigido; dipende dalla memoria disponibile sul tuo dispositivo. Le consuete schermate, i loghi e perfino i PNG grandi ad alta risoluzione funzionano bene. I lotti grandi vengono elaborati un file alla volta per mantenere basso l'uso della memoria.",
    },
    {
      q: "Perché la mia foto in PNG è ancora enorme dopo l'ottimizzazione?",
      a: (
        <>
          Il PNG è senza perdita, quindi non può scartare il dettaglio
          fotografico come fanno JPEG o WebP: una foto a colori pieni ha
          semplicemente bisogno di molti dati come PNG. L&rsquo;ottimizzazione
          taglia il superfluo, ma la vera soluzione per le foto è convertire in
          un formato con perdita. Prova i nostri strumenti{" "}
          <Link href="/it/compress-webp">WebP</Link> o{" "}
          <Link href="/it/compress-avif">AVIF</Link> per far sì che i file delle
          foto occupino una frazione delle dimensioni.
        </>
      ),
      text: "Il PNG è senza perdita, quindi non può scartare il dettaglio fotografico come fanno JPEG o WebP; una foto a colori pieni ha bisogno di molti dati come PNG. L'ottimizzazione taglia il superfluo, ma la vera soluzione per le foto è convertire in un formato con perdita come WebP o AVIF.",
    },
    {
      q: "L'ottimizzazione conserva la trasparenza del mio PNG?",
      a: (
        <>
          Sì. Il canale alfa (trasparenza) viene conservato esattamente, quindi
          loghi, icone ed elementi di interfaccia con sfondo trasparente
          risultano identici pixel per pixel, solo in un file più piccolo.
          Convertire in WebP conserva anch&rsquo;esso la trasparenza; convertire
          in JPEG no, dato che JPEG non ha un canale alfa.
        </>
      ),
      text: "Sì. Il canale alfa (trasparenza) viene conservato esattamente, quindi loghi, icone ed elementi di interfaccia con sfondo trasparente risultano identici pixel per pixel in un file più piccolo. Anche WebP conserva la trasparenza; JPEG no, dato che non ha un canale alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché comprimere o convertire un PNG?</h2>
      <p>
        Il PNG è ovunque: è il formato predefinito per le schermate, la scelta
        abituale per loghi e icone e lo standard per qualsiasi grafica che
        necessiti di uno sfondo trasparente. Il problema è che i file PNG sono
        spesso più grandi del necessario. Gli editor di immagini e gli strumenti
        di cattura salvano file generosi e non ottimizzati, con metadati in più,
        impostazioni di compressione poco ottimali e dati cromatici di cui non
        hanno bisogno. Ottimizzare elimina quello spreco affinché le pagine si
        carichino più in fretta, gli allegati partano prima e lo spazio di
        archiviazione renda di più.
      </p>
      <p>
        Poiché questo strumento funziona interamente sul tuo dispositivo, è
        anche il modo privato di farlo. Gli ottimizzatori online tradizionali
        caricano le tue immagini su un server remoto, le elaborano lì e te le
        rispediscono. Qui ogni PNG viene letto in memoria, riscritto con una
        build in WebAssembly di <strong>OxiPNG</strong> e restituito
        direttamente a te: i tuoi file non passano mai attraverso una rete, una
        cosa che conta quando una schermata o un asset di design contiene
        informazioni sensibili.
      </p>

      <h2 id="lossless">Ottimizzazione senza perdita vs. conversione con perdita</h2>
      <p>
        Il PNG è un formato <strong>senza perdita</strong>: riproduce ogni pixel
        esattamente, senza artefatti di compressione e con pieno supporto per la
        trasparenza. Quella fedeltà è la ragion d&rsquo;essere del PNG, ma limita
        anche quanto piccolo possa diventare. OxiPNG mantiene la tua immagine{" "}
        <strong>perfetta pixel per pixel</strong>: trova solo un modo più
        efficiente di memorizzare gli stessi dati riducendo la tavolozza dei
        colori dove possibile, scegliendo filtri migliori e scartando i blocchi
        superflui. Siamo onesti con i conti: il risparmio senza perdita è{" "}
        <strong>modesto, in genere tra il 5 e il 30 %</strong>, e un PNG già
        ottimizzato potrebbe ridursi a malapena.
      </p>
      <p>
        Quando ti serve una riduzione drastica, la risposta non è un PNG
        migliore, ma un formato diverso. Convertire un PNG in{" "}
        <Link href="/it/compress-webp">WebP</Link> o{" "}
        <Link href="/it/compress-avif">AVIF</Link> applica una compressione con
        perdita che può tagliare le dimensioni del file tra il 60 e il 90 % pur
        continuando a supportare la trasparenza. Il compromesso è che la
        conversione con perdita può introdurre cambiamenti sottili, quindi è
        ideale per fotografie e immagini complesse, mentre il PNG senza perdita
        resta il migliore per grafiche dai bordi nitidi in cui ogni pixel conta.
        Questo strumento ti lascia scegliere: mantieni il PNG per la fedeltà
        oppure cambia il formato di uscita in WebP per le dimensioni.
      </p>

      <h2 id="format">Che cos&rsquo;è un PNG e quando dovresti usarlo?</h2>
      <p>
        Il PNG (Portable Network Graphics) è stato creato come sostituto del GIF
        privo di brevetti e senza perdita. Usa la compressione DEFLATE insieme a
        filtri di predizione per riga e supporta un canale alfa completo a 8 bit
        per una trasparenza morbida. Questo lo rende eccellente per{" "}
        <strong>
          loghi, icone, schermate, disegni al tratto, grafici e qualsiasi
          immagine con bordi nitidi, colore piatto o testo
        </strong>
        : contenuti che i formati con perdita sfocano o circondano di aloni.
        Puoi leggere i dettagli tecnici nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai formati di immagine di MDN
        </a>
        .
      </p>
      <p>
        Il PNG è la scelta <strong>sbagliata</strong> per le fotografie. Poiché
        non scarta mai il dettaglio, una foto a tono continuo diventa un PNG
        enorme, spesso molte volte più grande della stessa immagine come{" "}
        <Link href="/it/compress-jpeg">JPEG</Link> o WebP. Se hai salvato le foto
        come PNG, quell&rsquo;unica abitudine è probabilmente la tua maggiore
        fonte di peso superfluo. Ricorri al PNG quando ti servono bordi nitidi o
        trasparenza, e ricorri a un formato con perdita quando hai una foto. Non
        sai quale usare? Il nostro{" "}
        <Link href="/it/image-converter">convertitore di immagini</Link> ti
        permette di provare entrambi e confrontare i risultati fianco a fianco.
      </p>

      <h2 id="tips">Consigli per ottenere i risultati migliori</h2>
      <ul>
        <li>
          <strong>Adatta il livello di ottimizzazione al compito.</strong> Usa{" "}
          &laquo;Veloce&raquo; per una passata rapida su molti file, e
          &laquo;Massimo&raquo; quando spremere fino all&rsquo;ultimo byte da una
          singola immagine principale vale il tempo di elaborazione extra.
        </li>
        <li>
          <strong>Ridimensiona prima di ottimizzare.</strong> Una schermata 4K
          mostrata a 800 px di larghezza è in gran parte pixel sprecati. Usa
          l&rsquo;opzione di ridimensionamento integrata per ottenere un
          risparmio molto maggiore di quanto l&rsquo;ottimizzazione senza perdita
          possa mai offrire da sola.
        </li>
        <li>
          <strong>Converti le foto, non combatterle.</strong> Se un
          &laquo;PNG&raquo; è in realtà una foto, cambia il formato di uscita in{" "}
          <Link href="/it/compress-webp">WebP</Link> invece di aspettarti che
          l&rsquo;ottimizzazione senza perdita faccia miracoli.
        </li>
        <li>
          <strong>Riserva il PNG alla trasparenza.</strong> Quando ti serve uno
          sfondo trasparente e un&rsquo;ampia compatibilità, il PNG senza perdita
          è la scelta sicura, e OxiPNG mantiene quel canale alfa perfetto pixel
          per pixel.
        </li>
      </ul>
    </>
  ),
};
