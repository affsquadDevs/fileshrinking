import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Cookie Policy",
  metaDescription:
    "Come FileShrinking usa i cookie e l'archiviazione locale: archiviazione propria minima per consenso e tema, più Google Analytics e AdSense soggetti a consenso.",
  title: "Cookie Policy",
  intro: (
    <>
      FileShrinking funziona interamente nel tuo browser e riduce i cookie al
      minimo assoluto. Questa pagina spiega esattamente cosa viene memorizzato
      sul tuo dispositivo, perché, per quanto tempo e come puoi modificare le tue
      scelte in qualsiasi momento.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Panoramica</h2>
      <p>
        Un &ldquo;cookie&rdquo; è un piccolo file di testo che un sito web chiede
        al tuo browser di memorizzare per poter ricordare informazioni tra una
        visita e l&rsquo;altra. Tecnologie correlate come{" "}
        <strong>localStorage</strong> funzionano allo stesso modo: salvano una
        piccola quantità di dati sul tuo dispositivo. FileShrinking è uno
        strumento che mette al primo posto la privacy e funziona al 100% lato
        client. I tuoi file vengono compressi localmente nel tuo browser e{" "}
        <strong>non vengono mai caricati</strong> verso di noi né verso chiunque
        altro, quindi non impostiamo mai un cookie che contenga, tracci o
        trasmetta i tuoi file o il loro contenuto.
      </p>
      <p>
        Usiamo solo una minima quantità di archiviazione{" "}
        <strong>propria</strong> per ricordare le tue preferenze, e carichiamo i
        servizi di <strong>pubblicità e analisi di terze parti</strong> di Google{" "}
        <strong>solo dopo che hai dato il consenso</strong>. Finché non accetti,
        tali servizi sono bloccati e non impostano alcun cookie. Questa policy va
        letta insieme alla nostra{" "}
        <Link href="/it/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2 id="first-party">Archiviazione propria che impostiamo</h2>
      <p>
        Questi elementi vengono scritti da FileShrinking stesso, risiedono
        unicamente sul tuo dispositivo e sono essenziali affinché il sito ricordi
        le scelte di base. Sono memorizzati nel localStorage del tuo browser
        anziché come cookie tradizionali, non vengono mai inviati a un server e
        non ti identificano.
      </p>
      <ul>
        <li>
          <strong>Scelta di consenso.</strong> Quando accetti o rifiuti i servizi
          opzionali nel nostro banner di consenso, salviamo tale decisione per
          non chiedertelo di nuovo a ogni caricamento di pagina e per poterla
          rispettare.
        </li>
        <li>
          <strong>Preferenza del tema.</strong> Se passi dalla modalità chiara a
          quella scura, ricordiamo la tua scelta in modo che il sito appaia come
          lo hai lasciato.
        </li>
      </ul>

      <h2 id="consent-gated">Servizi di terze parti soggetti a consenso</h2>
      <p>
        Per mantenere FileShrinking gratuito, il sito è sostenuto dalla
        pubblicità e usiamo l&rsquo;analisi per capire quali strumenti sono
        utili. Questi servizi sono forniti da Google e vengono caricati tramite{" "}
        <strong>Google Tag Manager</strong>. Possono impostare i propri cookie,
        ma vengono eseguiti solo <strong>dopo che hai accettato
        esplicitamente</strong> nel nostro banner di consenso. I servizi
        coinvolti sono:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> &mdash; misura l&rsquo;utilizzo
          aggregato e anonimo, come le visualizzazioni di pagina e quali
          compressori sono popolari, aiutandoci a migliorare il sito.
        </li>
        <li>
          <strong>Google AdSense</strong> (e il suo servizio di pubblicazione
          annunci DoubleClick) &mdash; mostra gli annunci che finanziano il
          progetto e aiuta a limitare la frequenza con cui vedi lo stesso annuncio.
        </li>
      </ul>

      <h2 id="table">Cookie e archiviazione che utilizziamo</h2>
      <p>
        La tabella seguente elenca gli elementi principali. I nomi e le durate
        esatti impostati da Google possono cambiare; per i dettagli più aggiornati
        consulta la documentazione di Google collegata in{" "}
        <a href="#managing">Gestire le tue scelte</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Fornitore</th>
            <th>Finalità</th>
            <th>Durata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Scelta di consenso
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (propria)</td>
            <td>
              Ricorda se hai accettato o rifiutato i cookie opzionali.
            </td>
            <td>Persistente finché non la cancelli</td>
          </tr>
          <tr>
            <td>
              Tema
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (propria)</td>
            <td>Ricorda la tua preferenza per la modalità chiara o scura.</td>
            <td>Persistente finché non la cancelli</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics (impostato solo con consenso)</td>
            <td>
              Distingue i visitatori anonimi per misurare l&rsquo;utilizzo
              aggregato del sito.
            </td>
            <td>Fino a 2 anni</td>
          </tr>
          <tr>
            <td>
              IDE, DSID, test_cookie
              <br />
              e cookie pubblicitari correlati
            </td>
            <td>Google AdSense / DoubleClick (impostato solo con consenso)</td>
            <td>
              Pubblica e misura gli annunci e limita la visualizzazione ripetuta
              dello stesso annuncio.
            </td>
            <td>Sessione fino a 13 mesi</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consent-mode">Consent Mode v2: negato per impostazione predefinita</h2>
      <p>
        Usiamo il <strong>Consent Mode v2</strong> di Google. In parole semplici,
        questo significa che ogni segnale di consenso &mdash; per
        l&rsquo;archiviazione analitica, l&rsquo;archiviazione pubblicitaria, la
        personalizzazione degli annunci e i dati utente per gli annunci &mdash;
        parte dallo stato <strong>&ldquo;negato&rdquo;</strong> per impostazione
        predefinita nel momento in cui la pagina viene caricata. Nulla viene
        concesso finché non effettui una scelta.
      </p>
      <p>
        Se <strong>accetti</strong>, i segnali pertinenti passano a
        &ldquo;concesso&rdquo; e Google Analytics e AdSense possono impostare i
        cookie descritti sopra. Se <strong>rifiuti</strong> o semplicemente
        ignori il banner, tali segnali rimangono &ldquo;negato&rdquo;: gli script
        vengono eseguiti in una modalità limitata e senza cookie e non
        memorizzano identificatori sul tuo dispositivo. In ogni caso, le tue
        preferenze proprie indicate sopra continuano a funzionare perché sono
        strettamente necessarie al funzionamento del sito.
      </p>

      <h2 id="managing">Gestire le tue scelte</h2>
      <p>
        Hai sempre il controllo. Puoi modificare o revocare il tuo consenso in
        qualsiasi momento utilizzando il link <strong>Impostazioni di
        consenso</strong> presente nel piè di pagina di ogni pagina, che riapre il
        banner di consenso così da poter aggiornare la tua decisione. Revocare il
        consenso impedisce ai servizi di Google di impostare nuovi cookie in
        futuro.
      </p>
      <p>
        Puoi anche gestire i cookie direttamente nel tuo browser: la maggior
        parte dei browser ti consente di visualizzare, bloccare o eliminare i
        cookie e di cancellare l&rsquo;archiviazione del sito dal menu della
        privacy o delle impostazioni. Eliminare i nostri elementi propri significa
        semplicemente che il sito ti chiederà di nuovo le tue preferenze di tema e
        consenso. Per maggiori dettagli sui servizi di terze parti, consulta le{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          informazioni sui cookie
        </a>{" "}
        di Google e la sua{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          informativa sulla privacy
        </a>
        .
      </p>

      <h2 id="changes">Modifiche a questa policy</h2>
      <p>
        Potremmo aggiornare questa Cookie Policy se aggiungiamo una funzionalità o
        cambiamo i servizi su cui ci basiamo. Quando lo faremo, aggiorneremo la
        data di &ldquo;Ultimo aggiornamento&rdquo; in cima a questa pagina. Le
        modifiche significative che riguardano i cookie che impostiamo saranno
        riflesse nel banner di consenso così da poter rivedere la tua scelta.
      </p>

      <h2 id="contact">Contattaci</h2>
      <p>
        Se hai domande su come usiamo i cookie o l&rsquo;archiviazione locale,
        scrivici a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Per
        un quadro più completo di come trattiamo i dati, leggi la nostra{" "}
        <Link href="/it/privacy-policy">Privacy Policy</Link>.
      </p>
    </>
  ),
};
