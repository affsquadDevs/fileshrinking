import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressore video — gratis e nel browser",
  metaDescription:
    "Comprimi video MP4, MOV, WebM, MKV e AVI nel tuo browser con ffmpeg. Privato e nel browser: nessun caricamento, il tuo video non lascia mai il dispositivo.",
  heading: "Compressore video",
  intro: (
    <>
      Comprimi video MP4, MOV, WebM, MKV e AVI direttamente nel tuo browser con
      una versione in WebAssembly di ffmpeg. Scegli un preset di qualità, trascina
      il tuo clip e scarica un MP4 H.264 più piccolo: il tuo materiale non viene
      mai caricato da nessuna parte.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Come comprimere un video",
    description:
      "Comprimi video localmente nel tuo browser con ffmpeg in quattro passaggi.",
    steps: [
      {
        name: "Aggiungi il tuo video",
        text: "Trascina e rilascia un file video nell'area di caricamento oppure fai clic per cercarlo. Per un'esperienza più fluida, mantieni i file sotto i 150 MB circa.",
      },
      {
        name: "Scegli un preset di qualità",
        text: "Scegli un preset oppure regola con precisione il cursore CRF. I preset più bassi riducono la risoluzione e il bitrate per ottenere file molto più piccoli.",
      },
      {
        name: "Lascia che codifichi sul tuo dispositivo",
        text: "ffmpeg ricodifica il video in H.264/MP4 localmente. Una barra di avanzamento mostra il progresso: i clip più grandi o più lunghi richiedono più tempo.",
      },
      {
        name: "Scarica il risultato",
        text: "Salva l'MP4 più piccolo. Se il risultato non è più piccolo, il tuo file era già efficiente: prova con una qualità o una risoluzione più bassa e riesegui.",
      },
    ],
  },
  faqs: [
    {
      q: "I miei video vengono caricati su un server?",
      a: (
        <>
          No. L'intera compressione viene eseguita all'interno del tuo browser
          usando una versione in WebAssembly di ffmpeg. Il tuo video viene caricato
          in memoria, ricodificato sulla tua stessa macchina e restituito
          direttamente a te. Non viene mai caricato nulla e non esiste alcun server
          che possa memorizzare il tuo materiale.
        </>
      ),
      text: "No. L'intera compressione viene eseguita all'interno del tuo browser usando una versione in WebAssembly di ffmpeg. Il tuo video viene caricato in memoria, ricodificato sulla tua stessa macchina e restituito a te. Non viene caricato nulla e non esiste alcun server che possa memorizzare il tuo materiale.",
    },
    {
      q: "Il compressore video è davvero gratuito?",
      a: (
        <>
          Sì: è completamente gratuito, senza registrazione, senza filigrane e
          senza addebiti per file. Poiché tutto il lavoro avviene sul tuo
          dispositivo, non ci sono costi di server da ribaltare. Il sito si sostiene
          con annunci discreti.
        </>
      ),
      text: "Sì. È completamente gratuito, senza registrazione, senza filigrane e senza addebiti per file. Poiché tutto il lavoro avviene sul tuo dispositivo, non ci sono costi di server da ribaltare. Il sito si sostiene con annunci discreti.",
    },
    {
      q: "La compressione ridurrà la qualità del mio video?",
      a: (
        <>
          La compressione video è con perdita di dati, quindi una parte del
          dettaglio viene scartata. Il cursore CRF determina quanto è aggressiva:
          intorno a 23-28 appare molto simile all'originale per la maggior parte del
          materiale. Ridurre la risoluzione (ad esempio da 4K a 1080p) consente il
          massimo risparmio di spazio mantenendo l'immagine nitida alle normali
          dimensioni di visione.
        </>
      ),
      text: "La compressione video è con perdita di dati, quindi una parte del dettaglio viene scartata. Il cursore CRF determina quanto è aggressiva; intorno a 23-28 appare molto simile all'originale per la maggior parte del materiale. Ridurre la risoluzione (ad esempio da 4K a 1080p) consente il massimo risparmio di spazio mantenendo l'immagine nitida alle normali dimensioni.",
    },
    {
      q: "Qual è la dimensione massima del file che posso comprimere?",
      a: (
        <>
          Non c'è un limite rigido, ma poiché tutto viene eseguito nel tuo browser
          con ffmpeg a thread singolo, consigliamo file sotto i{" "}
          <strong>150&nbsp;MB</strong> circa. I video grandi o lunghi consumano
          molta memoria e possono essere lenti, e potrebbero non funzionare su
          telefoni o portatili più vecchi con poca RAM. Per i clip di grandi
          dimensioni, tagliali prima oppure comprimili nel browser di un computer
          desktop.
        </>
      ),
      text: "Non c'è un limite rigido, ma poiché tutto viene eseguito nel tuo browser con ffmpeg a thread singolo consigliamo file sotto i 150 MB circa. I video grandi o lunghi consumano molta memoria, possono essere lenti e potrebbero non funzionare su telefoni o portatili più vecchi con poca RAM. Per i clip di grandi dimensioni, tagliali prima oppure usa il browser di un computer desktop.",
    },
    {
      q: "Perché la compressione video nel browser è più lenta che su altri siti?",
      a: (
        <>
          La maggior parte dei compressori online carica il tuo file su un potente
          server multi-core che esegue la codifica al posto tuo. Questo strumento
          deliberatamente non lo fa: esegue ffmpeg localmente affinché il tuo video
          resti privato. Un singolo thread del browser è più lento di una server
          farm, quindi qualche minuto di materiale può richiedere un po' di tempo.
          Questo compromesso ti garantisce una privacy totale.
        </>
      ),
      text: "La maggior parte dei compressori online carica il tuo file su un potente server multi-core che lo codifica al posto tuo. Questo strumento deliberatamente non lo fa; esegue ffmpeg localmente affinché il tuo video resti privato. Un singolo thread del browser è più lento di una server farm, quindi qualche minuto di materiale può richiedere un po' di tempo. Questo compromesso ti garantisce una privacy totale.",
    },
    {
      q: "In quale formato esce il video compresso?",
      a: (
        <>
          Il risultato è <strong>video H.264 in un contenitore MP4</strong>,
          indipendentemente dal fatto che il file di ingresso fosse MOV, WebM, MKV o
          AVI. H.264/MP4 si riproduce praticamente su qualsiasi telefono, browser,
          TV e applicazione di editing, quindi il risultato è la scelta più sicura
          per condividere e caricare.
        </>
      ),
      text: "Il risultato è video H.264 in un contenitore MP4, indipendentemente dal fatto che il file di ingresso fosse MOV, WebM, MKV o AVI. H.264/MP4 si riproduce praticamente su qualsiasi telefono, browser, TV e applicazione di editing, quindi il risultato è la scelta più sicura per condividere e caricare.",
    },
  ],
  content: (
    <>
      <h2 id="why">Perché comprimere video nel tuo browser?</h2>
      <p>
        Il video è di gran lunga il media più pesante con cui ha a che fare la
        maggior parte delle persone. Un minuto di materiale 4K girato con il
        telefono può occupare centinaia di megabyte, troppo grande per essere
        inviato via email, scomodo da caricare e veloce a riempire lo spazio di
        archiviazione nel cloud e il rullino del telefono. Comprimere un clip può
        ridurne le dimensioni della metà o più mantenendolo perfettamente
        guardabile, il che rende facile condividerlo nelle app di chat, allegarlo a
        un messaggio o pubblicarlo su un sito con un limite di caricamento.
      </p>
      <p>
        Ciò che rende diverso questo strumento è <strong>dove</strong> avviene il
        lavoro. Il tuo materiale grezzo spesso contiene momenti privati: la
        famiglia, la tua casa, il tuo luogo di lavoro, documenti sullo schermo. Un
        tipico compressore online carica tutto questo su un server remoto. Qui, il
        video viene decodificato, ricodificato e risalvato interamente all'interno
        della scheda del tuo browser, così non viaggia mai attraverso internet. Una
        volta caricata la pagina, puoi persino disattivare la connessione e
        continuerà comunque a comprimere.
      </p>
      <p>
        Ci sono molte ragioni quotidiane per ricorrere a un file più piccolo. Le
        app di messaggistica e i provider di posta limitano gli allegati, spesso a
        25&nbsp;MB o meno, quindi una rapida ricodifica fa la differenza tra un
        messaggio che parte e uno che rimbalza. Le piattaforme di corsi, i portali
        per le candidature di lavoro e i moduli di contatto rifiutano spesso
        qualsiasi cosa superi pochi megabyte. E se stai archiviando anni di clip di
        famiglia, dimezzare ogni file si ripaga molte volte in spazio di
        archiviazione che non dovrai acquistare.
      </p>

      <h2 id="how-it-works">
        Come funziona il codificatore nel browser (e i suoi limiti)
      </h2>
      <p>
        Sotto il cofano, questo strumento esegue <strong>ffmpeg</strong>, il motore
        multimediale standard del settore, compilato in WebAssembly affinché venga
        eseguito in modo nativo nel tuo browser. È davvero potente, ma comporta
        compromessi onesti che è bene conoscere. La versione è{" "}
        <strong>a thread singolo</strong>, quindi non può distribuire la codifica
        su tutti i core della tua CPU come fanno un'applicazione desktop o un server
        nel cloud. Di conseguenza, la compressione qui è{" "}
        <strong>più lenta</strong> di un servizio basato sul caricamento che gira su
        una macchina multi-core, e qualche minuto di video può richiedere un po' di
        pazienza.
      </p>
      <p>
        È anche <strong>limitata dalla memoria</strong>. L'intero file deve entrare
        nella memoria disponibile del browser mentre viene elaborato, perciò
        consigliamo di mantenere gli input sotto i <strong>150&nbsp;MB</strong>{" "}
        circa. I video molto grandi o molto lunghi possono essere lenti e fallire
        del tutto su telefoni o portatili più vecchi con poca RAM. Se incontri un
        ostacolo, taglia il clip alla parte che ti serve, abbassa la risoluzione
        oppure eseguilo nel browser di un computer desktop con più memoria. Queste
        sono limitazioni reali del fare tutto in locale: il vantaggio è che il tuo
        video resta tuo.
      </p>
      <p>
        Alcune buone abitudini rendono la codifica locale molto più piacevole.
        Chiudi altre schede e applicazioni pesanti prima di iniziare, così il
        browser ha spazio per lavorare. Mantieni la scheda in primo piano: alcuni
        browser rallentano le schede in secondo piano, il che può bloccare una
        codifica lunga. E dalle tempo senza ricaricare: la barra di avanzamento è
        reale e ricaricare a metà della codifica butta via il lavoro svolto fino a
        quel momento.
      </p>

      <h2 id="settings">CRF, risoluzione e audio: le tre leve</h2>
      <p>
        Tre impostazioni determinano le dimensioni finali del tuo file. La leva
        singola più importante è la <strong>risoluzione</strong>. Ridurre da 4K a
        1080p, o da 1080p a 720p, elimina un numero enorme di pixel da ogni
        fotogramma ed è di solito invisibile, a meno che tu non guardi su uno
        schermo grande e da vicino. Se ti serve un clip solo per un telefono o per
        incorporarlo in un sito web, ridurre la risoluzione lo rimpicciolirà molto
        più che regolare solo la qualità.
      </p>
      <p>
        La seconda leva è il <strong>CRF</strong> (Constant Rate Factor), il
        controllo di qualità per H.264. I numeri più bassi significano qualità più
        alta e file più grandi; quelli più alti, file più piccoli con una
        compressione più visibile. Un CRF di <strong>23-28</strong> è il punto
        ideale pratico per la maggior parte del materiale. La terza leva è il{" "}
        <strong>bitrate audio</strong>: il parlato va bene con un bitrate basso,
        mentre la musica beneficia di un valore più alto. Se il tuo video è
        soprattutto parlato, ridurre il bitrate audio fa risparmiare spazio senza
        perdite percepibili. L'output predefinito è{" "}
        <strong>H.264 in un contenitore MP4</strong> proprio perché si riproduce
        quasi ovunque.
      </p>
      <ul>
        <li>
          <strong>Adatta la risoluzione al luogo in cui verrà guardato.</strong> Un
          clip destinato a un telefono o a un piccolo player web non guadagna nulla
          dal 4K; 720p o 1080p appariranno identici e peseranno una frazione.
        </li>
        <li>
          <strong>Regola il CRF prima di qualsiasi altra cosa.</strong> Passare da
          23 a 26 spesso dimezza le dimensioni con una perdita di dettaglio che la
          maggior parte degli spettatori non noterà mai. Confronta il risultato
          prima di essere più aggressivo.
        </li>
        <li>
          <strong>Non ricomprimere un clip già compresso.</strong> Ogni passaggio
          con perdita scarta altro dettaglio. Se lo strumento segnala che il
          risultato non è più piccolo, il tuo file è già codificato in modo
          efficiente: lascialo com'è invece di degradarlo ulteriormente.
        </li>
        <li>
          <strong>Taglia prima per grandi risparmi.</strong> Eliminare i silenzi
          dall'inizio e dalla fine di un clip rimuove interi fotogrammi, il che
          batte qualsiasi impostazione di qualità per rimpicciolire il file.
        </li>
      </ul>

      <h2 id="codecs">Due parole rapide sui codec video</h2>
      <p>
        Un &laquo;file video&raquo; è in realtà due cose: un{" "}
        <strong>codec</strong> che codifica i pixel (come H.264, VP9 o AV1) e un
        formato <strong>contenitore</strong> che lo avvolge (MP4, WebM, MOV, MKV).
        Ecco perché lo stesso video H.264 può vivere dentro un MP4 o un MOV.
        Generiamo H.264/MP4 perché ha la più ampia compatibilità hardware e
        software di qualsiasi codec moderno: quasi tutti i dispositivi prodotti
        nell'ultimo decennio possono decodificarlo senza problemi. Puoi leggere di
        più su come codec e contenitori si combinano nella{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida ai codec video web di MDN
        </a>
        .
      </p>
      <p>
        Questa pagina è il punto di riferimento per tutti i nostri strumenti video.
        Se conosci il formato del tuo file, le pagine dedicate hanno consigli su
        misura: usa il{" "}
        <Link href="/it/compress-mp4">compressore MP4</Link> per materiale già in
        MP4, oppure il{" "}
        <Link href="/it/compress-mov">compressore MOV, WebM, MKV e AVI</Link>{" "}
        per clip da fotocamere, registratori di schermo e altre app. Se ti serve
        solo ridurre l'audio (un podcast, una nota vocale o un file musicale), il{" "}
        <Link href="/it/audio-compressor">compressore audio</Link> se ne occupa
        senza ricodificare alcun video.
      </p>
    </>
  ),
};
