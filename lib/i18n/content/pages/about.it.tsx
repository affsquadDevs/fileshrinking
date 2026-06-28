import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Informazioni su FileShrinking",
  metaDescription:
    "Scopri chi crea FileShrinking e perché il nostro compressore 100% nel browser mantiene immagini, PDF, video e audio sul tuo dispositivo.",
  title: "Informazioni su FileShrinking",
  intro: (
    <>
      FileShrinking è un set di strumenti gratuito e attento alla privacy per
      comprimere immagini, PDF, video e audio. Ogni file viene elaborato
      interamente nel tuo browser, quindi nulla di ciò che apri qui viene mai
      caricato su un server.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2>La nostra missione</h2>
      <p>
        FileShrinking esiste per rendere la compressione dei file davvero
        gratuita, davvero privata e accessibile a chiunque abbia un browser web.
        I file di grandi dimensioni rallentano i siti web, intasano le caselle di
        posta e riempiono la memoria del telefono e i piani cloud. Ridurli non
        dovrebbe richiedere di installare software, creare un account, pagare un
        abbonamento o consegnare i tuoi documenti personali a un&rsquo;azienda che
        non hai mai conosciuto. Il nostro obiettivo è semplice: offrirti una
        compressione di livello professionale che gira sul tuo dispositivo, non
        costa nulla e rispetta la tua privacy fin dalla progettazione.
      </p>

      <h2>Perché conta il &laquo;100% nel tuo browser&raquo;</h2>
      <p>
        La maggior parte dei compressori online funziona caricando il tuo file su
        un server remoto, elaborandolo lì e rimandandoti il risultato. Questo
        significa che una copia della tua foto, del tuo contratto o del tuo video
        casalingo resta sul computer di qualcun altro, almeno temporaneamente.
        FileShrinking funziona in modo diverso. Quando scegli un file, questo
        viene caricato nella memoria del tuo browser e compresso localmente
        usando build in WebAssembly di codificatori open source e affidabili come
        MozJPEG, OxiPNG e FFmpeg. Il file finito ti viene restituito
        direttamente.
      </p>
      <p>
        Il risultato pratico è che <strong>i tuoi file fisicamente non lasciano
        mai il tuo dispositivo</strong>. Non c&rsquo;è nulla che possiamo
        archiviare, nulla che possiamo divulgare in una violazione dei dati e
        nulla che possiamo vendere o condividere. Puoi verificarlo da solo: apri
        uno qualsiasi dei nostri strumenti, disconnettiti da internet e la
        compressione continuerà a funzionare, perché tutto il lavoro pesante
        avviene sulla tua macchina. Quel modello esclusivamente locale è la base
        della fiducia che ti chiediamo di riporre in noi, e non è uno slogan di
        marketing da cui possiamo discretamente tirarci indietro in seguito.
      </p>

      <h2>Cosa creiamo</h2>
      <p>
        FileShrinking è una suite in crescita di strumenti dedicati a un&rsquo;unica
        attività. Il nostro{" "}
        <Link href="/it/image-compressor">compressore di immagini</Link> gestisce
        JPEG, PNG, WebP, AVIF e GIF, con strumenti complementari per convertire e
        ridimensionare. Accanto agli strumenti per le immagini offriamo un
        compressore di PDF che ricomprime le immagini incorporate nei documenti,
        la compressione video nel browser per formati come MP4, MOV, WebM, MKV e
        AVI, e un compressore audio per MP3, WAV e AAC. Tutti gli strumenti
        condividono gli stessi principi: nessun caricamento, nessuna
        registrazione, nessuna filigrana e nessun limite artificiale al numero o
        alla dimensione dei file oltre a quanto consente la memoria del tuo
        dispositivo.
      </p>

      <h2>Come facciamo ricerca e scriviamo le nostre guide</h2>
      <p>
        Oltre agli strumenti, pubblichiamo guide pratiche e articoli esplicativi
        sul nostro{" "}
        <Link href="/it/blog">blog</Link> su come funzionano realmente i formati
        di compressione e su come ottenere il miglior compromesso tra qualità e
        dimensione. Prendiamo sul serio l&rsquo;accuratezza. Il nostro processo
        editoriale parte da fonti primarie e autorevoli: le specifiche stesse dei
        formati, la documentazione della piattaforma web di{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>{" "}
        e del{" "}
        <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
          W3C
        </a>
        , e la documentazione dei codificatori open source su cui si basano i
        nostri strumenti. Verifichiamo le affermazioni rispetto al comportamento
        reale degli strumenti che pubblichiamo, citiamo le nostre fonti affinché
        tu possa verificarle e rivediamo gli articoli quando cambiano gli
        standard o il supporto dei browser. Quando siamo incerti, lo diciamo
        invece di tirare a indovinare.
      </p>

      <h2>Chi mantiene FileShrinking</h2>
      <p>
        FileShrinking è creato e mantenuto da un piccolo team indipendente di
        sviluppatori web a cui stanno a cuore le prestazioni e la privacy sul web
        moderno. Non abbiamo finanziamenti di venture capital e non gestiamo
        un&rsquo;attività basata sui dati; il sito resta gratuito grazie a
        pubblicità discreta e chiaramente identificata.
      </p>
      <p>
        I nostri responsabili provengono da ambiti legati alle prestazioni web e
        all&rsquo;elaborazione dei media, e hanno trascorso anni aiutando i team a
        pubblicare pagine più leggere e veloci senza sacrificare la qualità. Il
        team guida la direzione tecnica del progetto, controlla ogni strumento
        prima del rilascio ed è responsabile degli standard editoriali descritti
        sopra. Puoi contattarci direttamente all&rsquo;indirizzo{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2>Pubblicità, analisi e il tuo consenso</h2>
      <p>
        Per mantenere FileShrinking gratuito mostriamo pubblicità e usiamo
        l&rsquo;analisi per capire quali strumenti sono utili. Questi servizi di
        terze parti sono{" "}
        <strong>subordinati al tuo consenso</strong>: gli script di pubblicità e
        analisi vengono caricati solo dopo che hai accettato, e puoi rifiutarli e
        continuare a usare ogni strumento. E, cosa più importante, nulla di tutto
        ciò cambia il modo in cui vengono trattati i tuoi file: pubblicità e
        analisi non ricevono mai i tuoi documenti, foto, video o audio, perché
        questi non lasciano mai il tuo dispositivo in primo luogo. Per tutti i
        dettagli, consulta le nostre politiche pubblicate sulla privacy e sui
        cookie.
      </p>

      <h2>Mettiti in contatto</h2>
      <p>
        Domande, segnalazioni di bug o idee su quale strumento dovremmo creare in
        futuro sono sempre benvenute. Visita la nostra{" "}
        <Link href="/it/contact">pagina dei contatti</Link> o scrivici a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
        Leggiamo tutto e usiamo i tuoi commenti per decidere cosa migliorare.
      </p>
    </>
  ),
};
