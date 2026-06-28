import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Informativa sulla privacy",
  metaDescription:
    "Come FileShrinking gestisce i tuoi dati: i file non vengono mai caricati, la compressione avviene nel browser. Analytics e annunci richiedono il consenso.",
  title: "Informativa sulla privacy",
  intro: (
    <>
      FileShrinking &egrave; progettato mettendo la privacy al primo posto. I file
      che comprimi non vengono mai caricati: vengono elaborati interamente nel tuo
      browser, quindi non li riceviamo, non li vediamo e non li memorizziamo mai.
      Questa informativa spiega i pochi dati che effettivamente trattiamo e le
      scelte che controlli tu.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Panoramica</h2>
      <p>
        Questa Informativa sulla privacy descrive come FileShrinking
        ({" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a>, il
        &laquo;Sito&raquo;) raccoglie, utilizza e protegge le informazioni quando
        lo visiti. Il Sito &egrave; gestito dal team di FileShrinking
        (&laquo;noi&raquo; o &laquo;nostro&raquo;). Utilizzando il Sito accetti le
        pratiche descritte qui. Leggi anche la nostra{" "}
        <Link href="/it/cookie-policy">Politica sui cookie</Link> e i nostri{" "}
        <Link href="/it/terms-of-service">Termini di servizio</Link>, che fanno
        parte del tuo accordo con noi.
      </p>

      <h2 id="files-never-uploaded">I tuoi file non vengono mai caricati</h2>
      <p>
        Questa &egrave; la cosa pi&ugrave; importante da capire su FileShrinking.
        Tutti i nostri strumenti di compressione &mdash; per immagini, PDF, video e
        audio &mdash; vengono eseguiti{" "}
        <strong>al 100&nbsp;% all&rsquo;interno del tuo browser web</strong>{" "}
        tramite WebAssembly. Quando aggiungi un file, questo viene caricato nella
        memoria del tuo dispositivo ed elaborato localmente sul tuo hardware. Il
        risultato compresso ti viene restituito direttamente per il download.
      </p>
      <p>
        Grazie a questa progettazione, <strong>non riceviamo, vediamo,
        memorizziamo n&eacute; trasmettiamo</strong> mai i file che comprimi
        n&eacute; alcuno dei loro contenuti. Non c&rsquo;&egrave; alcun passaggio
        di caricamento lato server, non viene conservata alcuna copia da nessuna
        parte e i tuoi file non lasciano mai il tuo dispositivo. Anzi, una volta
        caricata la pagina puoi disconnetterti completamente da internet e gli
        strumenti continueranno a funzionare.
      </p>

      <h2 id="what-we-do-not-collect">Ci&ograve; che non raccogliamo</h2>
      <ul>
        <li>
          <strong>I tuoi file o i loro contenuti.</strong> Non abbiamo accesso ai
          documenti, alle foto, ai video o all&rsquo;audio che elabori.
        </li>
        <li>
          <strong>Dati dell&rsquo;account.</strong> FileShrinking non prevede
          registrazione, accesso n&eacute; account utente, quindi non raccogliamo
          nomi, password o profili.
        </li>
        <li>
          <strong>Informazioni di pagamento.</strong> Il Sito &egrave; gratuito;
          non elaboriamo pagamenti n&eacute; memorizziamo alcun dato finanziario.
        </li>
      </ul>

      <h2 id="data-we-use">Informazioni che vengono utilizzate</h2>
      <p>
        FileShrinking utilizza intenzionalmente pochissimi dati. La tabella
        seguente riassume cosa viene memorizzato o elaborato, dove risiede e
        perch&eacute;.
      </p>
      <table>
        <thead>
          <tr>
            <th>Dati</th>
            <th>Dove risiedono</th>
            <th>Finalit&agrave;</th>
            <th>&Egrave; richiesto il consenso?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scelta sul consenso</td>
            <td>localStorage (il tuo browser)</td>
            <td>
              Ricordare se hai accettato o rifiutato analytics e annunci
            </td>
            <td>No: strettamente necessario</td>
          </tr>
          <tr>
            <td>Preferenza del tema</td>
            <td>localStorage (il tuo browser)</td>
            <td>
              Ricordare la modalit&agrave; chiara/scura affinch&eacute; il Sito
              appaia correttamente al ritorno
            </td>
            <td>No: strettamente necessario</td>
          </tr>
          <tr>
            <td>Dati di analytics</td>
            <td>Google Analytics (tramite Google Tag Manager)</td>
            <td>Comprendere l&rsquo;uso aggregato per migliorare il Sito</td>
            <td>S&igrave;</td>
          </tr>
          <tr>
            <td>Dati pubblicitari</td>
            <td>Google AdSense</td>
            <td>Mostrare annunci che aiutano a mantenere il Sito gratuito</td>
            <td>S&igrave;</td>
          </tr>
        </tbody>
      </table>
      <p>
        I valori in <strong>localStorage</strong> sopra indicati sono piccole
        impostazioni memorizzate unicamente nel tuo browser. Non ci vengono
        trasmessi e non contengono informazioni personali: solo la tua decisione
        sul consenso e il tema che hai scelto. Puoi cancellarli in qualsiasi
        momento dalle impostazioni del tuo browser.
      </p>

      <h2 id="analytics">Analytics</h2>
      <p>
        Utilizziamo <strong>Google Analytics</strong>, caricato tramite{" "}
        <strong>Google Tag Manager (GTM)</strong>, per comprendere come i
        visitatori utilizzano il Sito in forma aggregata; per esempio, quali
        strumenti sono pi&ugrave; popolari e quali pagine si caricano lentamente.
        Questo ci aiuta a stabilire le priorit&agrave; dei miglioramenti. Analytics
        viene <strong>caricato solo dopo che hai dato il tuo consenso</strong>. Se
        lo rifiuti, questi script non vengono eseguiti e non viene raccolto alcun
        dato di analytics. I dati di analytics vengono raccolti ed elaborati in
        forma aggregata e non vengono utilizzati per identificarti personalmente.
      </p>

      <h2 id="advertising">Pubblicit&agrave;</h2>
      <p>
        FileShrinking &egrave; gratuito e copriamo i nostri costi con la
        pubblicit&agrave; fornita da <strong>Google AdSense</strong>. Gli annunci
        vengono <strong>caricati solo dopo che hai dato il tuo consenso</strong>.
        Quando acconsenti alla pubblicit&agrave;, Google e i suoi partner possono
        utilizzare cookie, identificatori del dispositivo e tecnologie simili per
        pubblicare e misurare gli annunci, inclusi{" "}
        <strong>annunci personalizzati (basati sugli interessi)</strong> in base
        alla tua attivit&agrave; precedente. Se lo rifiuti, AdSense non viene
        caricato e non riceverai pubblicit&agrave; personalizzata da parte nostra.
      </p>
      <p>
        L&rsquo;uso che Google fa dei cookie pubblicitari &egrave; disciplinato
        dalle politiche proprie di Google. Puoi ottenere maggiori informazioni e
        gestire le tue impostazioni sugli annunci nella{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          pagina sulla Pubblicit&agrave; di Google
        </a>{" "}
        e consultare la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Informativa sulla privacy di Google
        </a>
        .
      </p>

      <h2 id="consent-mode">Google Consent Mode v2</h2>
      <p>
        Implementiamo <strong>Google Consent Mode v2</strong>. Prima che tu compia
        una scelta, i tag di analytics e pubblicit&agrave; di Google adottano per
        impostazione predefinita uno stato negato, il che significa che non
        impostano cookie identificativi n&eacute; raccolgono dati personali. Solo
        dopo che hai concesso il consenso vengono aggiornati i segnali pertinenti e
        abilitati i servizi corrispondenti. Questo ti d&agrave; un controllo reale
        sul fatto che analytics e pubblicit&agrave; vengano eseguiti o meno.
      </p>

      <h2 id="third-party">Servizi e collegamenti di terze parti</h2>
      <p>
        I servizi di terze parti menzionati sopra sono gestiti da Google LLC. Il
        trattamento di qualsiasi dato che raccolgono &egrave; disciplinato dai loro
        termini, non dai nostri:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Informativa sulla privacy di Google
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Come Google utilizza i cookie nella pubblicit&agrave;
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy e sicurezza dei dati di Google Analytics
          </a>
        </li>
      </ul>
      <p>
        Il Sito pu&ograve; inoltre contenere collegamenti ad altri siti web che non
        controlliamo. Non siamo responsabili delle pratiche sulla privacy di tali
        siti e ti invitiamo a leggere le loro politiche.
      </p>

      <h2 id="your-rights">I tuoi diritti sulla privacy (GDPR)</h2>
      <p>
        Se ti trovi nello Spazio economico europeo o nel Regno Unito, disponi di
        diritti ai sensi del Regolamento generale sulla protezione dei dati, tra
        cui il diritto di <strong>accedere</strong> ai dati personali conservati su
        di te, il diritto alla{" "}
        <strong>cancellazione (eliminazione)</strong>, il diritto di{" "}
        <strong>opporti al trattamento o di limitarlo</strong> e il diritto di{" "}
        <strong>revocare il consenso</strong> in qualsiasi momento. Quando ci
        basiamo sul consenso (analytics e pubblicit&agrave;), revocarlo &egrave;
        facile quanto concederlo e non pregiudica la liceit&agrave; del trattamento
        effettuato in precedenza.
      </p>
      <p>Per esercitare questi diritti puoi:</p>
      <ul>
        <li>
          <strong>Riaprire le tue impostazioni sul consenso</strong> in qualsiasi
          momento utilizzando il collegamento al consenso o alle preferenze sui
          cookie presente nel pi&egrave; di pagina di ogni pagina, quindi
          modificare o revocare le tue scelte.
        </li>
        <li>
          <strong>Cancellare l&rsquo;archiviazione del tuo browser</strong> per
          rimuovere i valori di consenso e di tema memorizzati localmente.
        </li>
        <li>
          <strong>Scriverci</strong> all&rsquo;indirizzo{" "}
          <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> e ti
          risponderemo entro i termini previsti dalla legge applicabile.
        </li>
      </ul>
      <p>
        Hai inoltre il diritto di presentare un reclamo all&rsquo;autorit&agrave; di
        protezione dei dati del tuo Paese o della tua regione se ritieni che i tuoi
        diritti siano stati violati.
      </p>

      <h2 id="ccpa">Diritti sulla privacy della California (CCPA/CPRA)</h2>
      <p>
        Se risiedi in California, il California Consumer Privacy Act, nella sua
        versione modificata, ti conferisce il diritto di sapere quali informazioni
        personali vengono raccolte, di richiederne l&rsquo;eliminazione e di
        rinunciare alla &laquo;vendita&raquo; o alla{" "}
        &laquo;condivisione&raquo; delle informazioni personali. Non vendiamo le
        tue informazioni personali in cambio di denaro. Laddove l&rsquo;uso dei
        cookie pubblicitari possa essere considerato &laquo;condivisione&raquo; per
        la pubblicit&agrave; comportamentale tra contesti diversi, puoi rinunciare
        rifiutando il consenso alla pubblicit&agrave; nelle nostre impostazioni sul
        consenso o non concedendolo fin dall&rsquo;inizio. Per inoltrare una
        richiesta, scrivi a{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2 id="retention">Conservazione dei dati</h2>
      <p>
        Poich&eacute; i tuoi file vengono elaborati localmente e non arrivano mai
        fino a noi, non c&rsquo;&egrave; nulla che possiamo conservare su di essi. I
        valori di consenso e di tema memorizzati nel tuo browser persistono finch&eacute;
        non li cancelli o non modifichi le tue scelte. I dati di analytics e
        pubblicit&agrave;, quando abilitati con il tuo consenso, vengono conservati
        da Google in base alle proprie impostazioni e politiche di conservazione.
      </p>

      <h2 id="children">Privacy dei minori</h2>
      <p>
        FileShrinking &egrave; uno strumento destinato al pubblico generale e non
        &egrave; rivolto ai minori di 13 anni (o all&rsquo;et&agrave; minima nella
        tua giurisdizione). Non raccogliamo consapevolmente informazioni personali
        dai minori. Se ritieni che un minore ci abbia fornito informazioni
        personali, contattaci affinch&eacute; possiamo adottare le misure
        appropriate.
      </p>

      <h2 id="changes">Modifiche a questa informativa</h2>
      <p>
        Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto per
        riflettere cambiamenti nelle nostre pratiche o per motivi legali. Quando lo
        faremo, rivedremo la data di &laquo;Ultimo aggiornamento&raquo; nella parte
        superiore di questa pagina. Le modifiche significative possono essere
        evidenziate sul Sito. Ti invitiamo a consultare periodicamente questa
        pagina.
      </p>

      <h2 id="contact">Contattaci</h2>
      <p>
        Se hai domande su questa Informativa sulla privacy o su come vengono
        gestiti i tuoi dati, scrivici all&rsquo;indirizzo{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> o
        visita la nostra <Link href="/it/contact">pagina dei contatti</Link>, e
        saremo lieti di aiutarti.
      </p>
    </>
  ),
};
