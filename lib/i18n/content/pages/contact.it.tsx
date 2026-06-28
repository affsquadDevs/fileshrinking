import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Contatti",
  metaDescription:
    "Contatta FileShrinking: domande, feedback, segnalazioni di bug o idee. Scrivi a hello@fileshrinking.com — privacy prima di tutto, nessun dato salvato.",
  title: "Contattaci",
  intro: (
    <>
      Ci farebbe piacere sentirti. Che tu abbia una domanda, un feedback, un bug
      da segnalare o un&rsquo;idea per una funzione, il modulo qui sotto è il
      modo più rapido per raggiungere le persone che creano FileShrinking.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="get-in-touch">Mettiti in contatto</h2>
      <p>
        FileShrinking è un insieme di strumenti gratuito e incentrato sulla
        privacy per ridurre le dimensioni dei file direttamente nel tuo browser:
        dalle immagini <Link href="/it/compress-jpeg">JPEG</Link> e{" "}
        <Link href="/it/compress-png">PNG</Link> ai{" "}
        <Link href="/it/pdf-compressor">documenti PDF</Link>, al{" "}
        <Link href="/it/video-compressor">video</Link> e all&rsquo;{" "}
        <Link href="/it/audio-compressor">audio</Link>. Poiché ogni strumento
        funziona interamente sul tuo dispositivo, non vediamo i tuoi file e non
        possiamo recuperarli né esaminarli. Ma per qualsiasi altra cosa &mdash;
        come funziona uno strumento, perché un risultato appare in un certo modo
        o cosa dovremmo creare in futuro &mdash; saremo davvero lieti di
        aiutarti.
      </p>
      <p>Motivi per cui di solito le persone ci scrivono:</p>
      <ul>
        <li>
          <strong>Domande</strong> su come funziona uno strumento, quale formato
          scegliere o come ottenere il file più piccolo senza perdere qualità.
        </li>
        <li>
          <strong>Segnalazioni di bug</strong> &mdash; un file che non viene
          elaborato, un pulsante che non risponde o qualsiasi cosa che sembri
          non funzionare. Indicarci il tuo browser e il sistema operativo ci
          aiuta a riprodurre il problema rapidamente.
        </li>
        <li>
          <strong>Richieste di funzioni</strong> &mdash; un formato che
          vorresti supportassimo, un&rsquo;opzione che ti manca o un flusso di
          lavoro che potremmo rendere più scorrevole.
        </li>
        <li>
          <strong>Feedback</strong> di ogni tipo, comprese le parti che ami e
          quelle che ti frustrano. Tutto contribuisce a definire cosa faremo
          dopo.
        </li>
      </ul>

      <h2 id="form">Inviaci un messaggio</h2>
      <p>
        Compila il modulo qui sotto e fai clic su &laquo;Invia
        messaggio&raquo;. C&rsquo;è una cosa importante da sapere su come
        funziona:{" "}
        <strong>
          il modulo compone un&rsquo;email nella tua app di posta anziché
          inviarci direttamente qualcosa.
        </strong>{" "}
        Quando lo invii, il tuo dispositivo apre il tuo client di posta
        predefinito (come Apple Mail, Outlook o Gmail) con il messaggio già
        compilato e indirizzato a noi. Nulla viene trasmesso finché non sei{" "}
        <em>tu</em> a premere invio all&rsquo;interno di quell&rsquo;app. Di
        conseguenza, FileShrinking non raccoglie, non trasmette a un server né
        memorizza alcun dato del messaggio tramite questa pagina &mdash; lo
        stesso principio di privacy che mantiene i tuoi file sul tuo dispositivo
        si applica anche ai tuoi messaggi.
      </p>

      <ContactForm />

      <h2 id="email">Preferisci scrivere direttamente via email?</h2>
      <p>
        Puoi sempre contattarci alla vecchia maniera. Scrivi a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>{" "}
        dall&rsquo;account che preferisci e il tuo messaggio arriverà
        direttamente nella nostra casella di assistenza. È comodo se il tuo
        browser blocca l&rsquo;azione del modulo di &laquo;aprire la mia app di
        posta&raquo;, se sei su un computer condiviso senza un client di posta
        configurato o se vuoi semplicemente allegare uno screenshot &mdash; cosa
        che spesso rende una segnalazione di bug molto più facile da capire.
      </p>

      <h2 id="response-times">Tempi di risposta</h2>
      <p>
        FileShrinking è gestito da un piccolo team, quindi leggiamo ogni
        messaggio personalmente anziché instradarlo a un call center.
        Cerchiamo di rispondere entro <strong>due o tre giorni
        lavorativi</strong>. Nei periodi di maggiore attività, o per domande
        tecniche complesse che richiedono indagini, potrebbe volerci un po&rsquo;
        di più &mdash; grazie in anticipo per la pazienza. Se non ricevi
        risposta entro circa una settimana, controlla la cartella spam o posta
        indesiderata, poi non esitare a scriverci di nuovo nel caso il tuo
        messaggio originale si fosse perso.
      </p>
      <p>
        Tieni presente che offriamo assistenza solo in inglese e che non
        possiamo aiutarti con file che hai elaborato altrove o con software di
        terze parti. Per domande su come trattiamo i dati e sulle limitate
        analisi e pubblicità presenti su questo sito &mdash; tutte subordinate
        al tuo consenso &mdash; consulta la nostra{" "}
        <Link href="/it/privacy-policy">Informativa sulla privacy</Link>. Per le
        regole che disciplinano l&rsquo;uso del sito, consulta i nostri{" "}
        <Link href="/it/terms-of-service">Termini di servizio</Link>.
      </p>

      <h2 id="before-you-write">Prima di scrivere, un consiglio rapido</h2>
      <p>
        Molte domande comuni trovano già risposta nella pagina di ciascuno
        strumento, dove troverai una breve sezione di domande frequenti su
        privacy, limiti di dimensione dei file, qualità ed elaborazione in
        batch. Se sei curioso di sapere chi crea FileShrinking e perché abbiamo
        scelto un approccio interamente lato client, la nostra{" "}
        <Link href="/it/about">pagina Chi siamo</Link> racconta la storia. E se
        la tua risposta non è lì, è esattamente questo lo scopo del modulo qui
        sopra &mdash; non esitare a contattarci.
      </p>
    </>
  ),
};
