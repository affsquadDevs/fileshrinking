import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Termini di servizio",
  metaDescription:
    "Le condizioni d'uso di FileShrinking, un compressore di file gratuito lato client. Offerto cos&igrave; com'&egrave;, funziona in locale e non carica mai i tuoi file.",
  title: "Termini di servizio",
  intro: (
    <>
      Questi termini regolano il tuo uso di FileShrinking. Usando il sito, li
      accetti. Sono redatti per essere comprensibili &mdash; e, poich&eacute;
      ogni strumento funziona interamente nel tuo browser, sono
      misericordiosamente brevi.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="acceptance">1. Accettazione di questi termini</h2>
      <p>
        FileShrinking (&ldquo;FileShrinking,&rdquo; &ldquo;noi,&rdquo;
        &ldquo;ci&rdquo; o &ldquo;il servizio&rdquo;) offre strumenti gratuiti
        basati sul browser che comprimono e convertono immagini, PDF, video e
        audio. Accedendo al sito web{" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a> o
        utilizzandolo, accetti di essere vincolato dai presenti Termini di
        servizio. Se non sei d&rsquo;accordo con una qualsiasi parte di questi
        termini, ti preghiamo di non usare il sito.
      </p>
      <p>
        Questi termini operano insieme alla nostra{" "}
        <Link href="/it/privacy-policy">Informativa sulla privacy</Link> e al
        nostro <Link href="/it/disclaimer">Avviso legale</Link>, che sono qui
        incorporati per riferimento. Insieme descrivono come funziona il
        servizio e i limiti di ci&ograve; che possiamo promettere.
      </p>

      <h2 id="how-it-works">2. Come funziona il servizio</h2>
      <p>
        FileShrinking &egrave; uno strumento{" "}
        <strong>100% lato client</strong>. Quando aggiungi un file, questo viene
        caricato nella memoria del tuo browser ed elaborato l&igrave; tramite
        WebAssembly e API web standard. I tuoi file{" "}
        <strong>non vengono mai caricati su un server</strong>, non vengono mai
        trasmessi attraverso la rete e non vengono mai conservati da noi.
        Poich&eacute; il lavoro avviene sul tuo stesso dispositivo, non possiamo
        vedere, accedere a, copiare n&eacute; acquisire la propriet&agrave; di
        alcun file che elabori &mdash; semplicemente non esiste una copia lato
        server che possiamo trattenere.
      </p>
      <p>
        Una conseguenza pratica di questa progettazione &egrave; che i risultati
        dipendono dal tuo hardware e software. La velocit&agrave; di
        elaborazione, la dimensione massima del file che puoi gestire, i formati
        supportati dal tuo browser e il risultato esatto variano a seconda del
        dispositivo, del browser, della memoria disponibile e del sistema
        operativo. Non garantiamo che un determinato file venga compresso,
        convertito o aperto correttamente nella tua configurazione.
      </p>

      <h2 id="free">3. Il servizio &egrave; gratuito</h2>
      <p>
        Gli strumenti sono gratuiti, senza registrazione, senza abbonamento e
        senza filigrane. Manteniamo tutto in funzione grazie alla pubblicit&agrave;,
        anzich&eacute; farti pagare. Possiamo aggiungere, modificare o rimuovere
        strumenti e funzionalit&agrave; in qualsiasi momento e possiamo limitare
        o interrompere il servizio in tutto o in parte senza preavviso. Non
        abbiamo alcun obbligo di mantenere disponibile alcuno strumento
        specifico.
      </p>

      <h2 id="acceptable-use">4. Uso accettabile</h2>
      <p>Accetti di non utilizzare FileShrinking per:</p>
      <ul>
        <li>
          elaborare, creare o distribuire contenuti illegali, lesivi di
          diritti, diffamatori o che violino i diritti di terzi;
        </li>
        <li>
          gestire file di cui non sei proprietario o per i quali non disponi dei
          diritti e dei permessi necessari per usarli;
        </li>
        <li>
          violare qualsiasi legge o normativa applicabile nella tua
          giurisdizione, comprese le leggi in materia di esportazione, privacy e
          propriet&agrave; intellettuale;
        </li>
        <li>
          tentare di perturbare, sovraccaricare, decodificare a fini malevoli o
          interferire con il funzionamento, la sicurezza o l&rsquo;integrit&agrave;
          del sito o del suo codice sottostante; oppure
        </li>
        <li>
          travisare il servizio, ad esempio reospitandolo in un modo che lasci
          intendere che sia tuo o che carichi i file quando non lo fa.
        </li>
      </ul>
      <p>
        <strong>Sei l&rsquo;unico responsabile dei tuoi file</strong> e della
        verifica di avere il diritto di usarli. Poich&eacute;
        l&rsquo;elaborazione avviene sul tuo dispositivo, solo tu controlli ci&ograve;
        che inserisci negli strumenti e ci&ograve; che fai con i risultati.
      </p>

      <h2 id="no-warranty">
        5. Nessuna garanzia &mdash; offerto &ldquo;cos&igrave; com&rsquo;&egrave;&rdquo;
      </h2>
      <p>
        Il servizio &egrave; offerto <strong>&ldquo;cos&igrave; com&rsquo;&egrave;&rdquo;</strong> e{" "}
        <strong>&ldquo;come disponibile,&rdquo;</strong> senza garanzie di alcun
        tipo, esplicite o implicite. Nella massima misura consentita dalla
        legge, decliniamo ogni garanzia, comprese le garanzie implicite di
        commerciabilit&agrave;, idoneit&agrave; a uno scopo particolare,
        accuratezza e non violazione. Non garantiamo che il servizio sia
        ininterrotto, privo di errori, sicuro, n&eacute; che alcun risultato
        soddisfi le tue aspettative.
      </p>
      <p>
        La compressione &egrave; spesso <strong>con perdita</strong>: per
        rendere i file pi&ugrave; piccoli, gli strumenti possono scartare dati
        che non possono essere recuperati. Sei responsabile della verifica di
        ogni risultato prima di farvi affidamento.
      </p>

      <h2 id="liability">
        6. Limitazione di responsabilit&agrave; e perdita di dati
      </h2>
      <p>
        Nella massima misura consentita dalla legge, FileShrinking e i suoi
        operatori non saranno responsabili per alcun danno indiretto,
        incidentale, speciale, consequenziale o punitivo, n&eacute; per alcuna
        perdita di dati, file, profitti o avviamento, derivante da o connessa al
        tuo uso (o all&rsquo;impossibilit&agrave; di usare) il servizio &mdash;
        anche se siamo stati avvisati della possibilit&agrave; di tali danni.
      </p>
      <p>
        Fondamentale:{" "}
        <strong>conserva sempre una copia dei tuoi file originali.</strong>{" "}
        L&rsquo;elaborazione nel browser pu&ograve; fallire, una scheda
        pu&ograve; bloccarsi o un risultato pu&ograve; non essere
        soddisfacente e, poich&eacute; non riceviamo mai i tuoi file, non
        possiamo recuperare nulla per te. Tratta il risultato come una copia
        nuova e verificalo prima di eliminare i tuoi originali.
      </p>

      <h2 id="ip">7. Propriet&agrave; intellettuale</h2>
      <p>
        Il nome, il logo, il design del sito web, i testi e il codice originale
        di FileShrinking sono di nostra propriet&agrave; o dei nostri
        licenzianti e sono protetti dalle leggi sulla propriet&agrave;
        intellettuale. Puoi usare il sito per la sua finalit&agrave; prevista,
        ma non puoi copiare, rimarchiare n&eacute; ridistribuire il sito stesso
        senza autorizzazione. I motori di compressione sottostanti sono forniti
        dai rispettivi progetti open source secondo le loro licenze.
      </p>
      <p>
        <strong>I tuoi file restano tuoi.</strong> Non rivendichiamo alcuna
        propriet&agrave;, n&eacute; acquisiamo alcun diritto, su qualsiasi file
        tu elabori &mdash; e, come gi&agrave; indicato, non lo riceviamo
        nemmeno.
      </p>

      <h2 id="third-party">8. Servizi di terze parti</h2>
      <p>
        Utilizziamo un piccolo numero di servizi di terze parti per gestire il
        sito e mantenerlo gratuito. Questi vengono caricati esclusivamente come
        descritto nella nostra{" "}
        <Link href="/it/privacy-policy">Informativa sulla privacy</Link> e, ove
        richiesto, sono subordinati al tuo consenso:
      </p>
      <table>
        <thead>
          <tr>
            <th>Servizio</th>
            <th>Finalit&agrave;</th>
            <th>Quando viene caricato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google AdSense</td>
            <td>Pubblicit&agrave; che finanzia gli strumenti gratuiti</td>
            <td>Solo dopo il tuo consenso</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Statistiche d&rsquo;uso aggregate e anonime</td>
            <td>Solo dopo il tuo consenso</td>
          </tr>
        </tbody>
      </table>
      <p>
        Questi fornitori operano secondo i propri termini e le proprie
        informative sulla privacy, che non controlliamo. E, soprattutto: nessuno
        di essi riceve mai i tuoi file; trattano esclusivamente dati standard di
        analisi web e pubblicit&agrave;, e solo con il tuo consenso.
      </p>

      <h2 id="changes">9. Modifiche a questi termini</h2>
      <p>
        Possiamo aggiornare questi termini di tanto in tanto, man mano che il
        servizio evolve o la legge cambia. Quando lo faremo, aggiorneremo la
        data di &ldquo;Ultimo aggiornamento&rdquo; in cima a questa pagina. Le
        modifiche sostanziali possono essere evidenziate sul sito. L&rsquo;uso
        continuato di FileShrinking dopo un aggiornamento significa che accetti i
        termini revisionati.
      </p>

      <h2 id="governing-law">10. Legge applicabile</h2>
      <p>
        Questi termini sono regolati dalle leggi applicabili nel luogo in cui ha
        sede l&rsquo;operatore del Sito, senza riguardo alle norme sui conflitti
        di legge. Laddove si applichi una normativa imperativa di protezione del
        consumatore, conservi il diritto di avviare procedimenti nel tuo paese
        di residenza, e nulla in questi termini limita i diritti che non possono
        essere rinunciati in virt&ugrave; della legge a te applicabile. Qualora
        una qualsiasi disposizione di questi termini sia ritenuta inapplicabile,
        le restanti disposizioni resteranno pienamente in vigore.
      </p>

      <h2 id="contact">11. Contatti</h2>
      <p>
        Domande su questi termini? Scrivici all&rsquo;indirizzo{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> o
        visita la nostra <Link href="/it/contact">pagina dei contatti</Link>.
        Saremo lieti di aiutarti a chiarire qualsiasi cosa.
      </p>
    </>
  ),
};
