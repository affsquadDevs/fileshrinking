import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Disclaimer",
  metaDescription:
    "Disclaimer onesto di FileShrinking: i nostri strumenti gratuiti di compressione 100% nel browser non garantiscono fedelt&agrave; n&eacute; dimensioni. Conserva gli originali.",
  title: "Disclaimer",
  intro: (
    <>
      FileShrinking offre strumenti gratuiti di compressione basati sul browser
      come comodit&agrave;. Questa pagina spiega i limiti di tali strumenti, i
      risultati che puoi realisticamente aspettarti e le responsabilit&agrave;
      che restano a tuo carico.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="general">Solo informazioni generali</h2>
      <p>
        Le informazioni, gli strumenti e i contenuti di FileShrinking (il
        &ldquo;Servizio&rdquo;) sono forniti unicamente a scopo informativo
        generale e di utilizzo pratico. Ci impegniamo a mantenere tutto preciso
        e utile, ma non offriamo garanzie di alcun tipo, esplicite o implicite,
        sulla completezza, l&rsquo;accuratezza, l&rsquo;affidabilit&agrave;,
        l&rsquo;idoneit&agrave; o la disponibilit&agrave; del Servizio o dei suoi
        risultati. L&rsquo;uso del Servizio avviene interamente a tuo rischio.
        Questo disclaimer va letto insieme alle nostre{" "}
        <Link href="/it/terms-of-service">Condizioni del servizio</Link>, che
        disciplinano l&rsquo;uso del sito.
      </p>

      <h2 id="how-it-works">Come funzionano davvero i nostri strumenti</h2>
      <p>
        Ogni compressore di FileShrinking viene eseguito{" "}
        <strong>interamente all&rsquo;interno del tuo browser web</strong>. Le
        tue immagini, i tuoi PDF, i tuoi video e i tuoi file audio vengono
        caricati nella memoria del tuo dispositivo, elaborati localmente con
        WebAssembly e restituiti direttamente a te.{" "}
        <strong>
          I tuoi file non vengono mai caricati sui nostri server, n&eacute;
          trasmessi sulla rete, n&eacute; memorizzati su alcun server.
        </strong>{" "}
        Poich&eacute; tutto il lavoro avviene sul tuo hardware, la velocit&agrave;,
        la qualit&agrave; e perfino la possibilit&agrave; o meno di elaborare un
        determinato file dipendono dal tuo dispositivo, dal tuo browser, dalla
        memoria disponibile e dal file che fornisci. Per conoscere i dati
        limitati che il sito stesso gestisce, consulta la nostra{" "}
        <Link href="/it/privacy-policy">Informativa sulla privacy</Link> e la
        nostra <Link href="/it/cookie-policy">Informativa sui cookie</Link>.
      </p>

      <h2 id="no-guarantee">Nessuna garanzia sui risultati</h2>
      <p>
        La compressione non &egrave; magia e non possiamo promettere un
        risultato specifico. La maggior parte della compressione di immagini,
        video e audio &egrave; <strong>con perdita</strong>, il che significa che
        scarta in modo permanente parte dei dati per ridurre le dimensioni dei
        file. Non garantiamo alcun rapporto di compressione, dimensione del file,
        qualit&agrave; di output o perfetta fedelt&agrave; rispetto al tuo
        originale in particolare. Quanto si riduce un file e come appare o suona
        in seguito dipendono dal contenuto stesso, dal formato, dalle
        impostazioni che scegli e da quanto era gi&agrave; ottimizzato
        l&rsquo;originale. Una foto appena scattata da una fotocamera pu&ograve;
        ridursi drasticamente, mentre un file gi&agrave; ottimizzato pu&ograve;
        cambiare a malapena &mdash; o, in alcuni casi, un file ricodificato
        potrebbe persino risultare pi&ugrave; grande dell&rsquo;originale.
      </p>

      <h2 id="limits">Limiti reali che &egrave; bene conoscere</h2>
      <p>
        I diversi tipi di file si comportano in modo molto differente, e alcuni
        hanno limiti pratici assoluti che nessuno strumento eseguito nel browser
        pu&ograve; superare:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Tipo di file</th>
              <th>Cosa aspettarsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Immagini (JPEG, PNG, WebP, AVIF, GIF)</td>
              <td>
                Di solito si comprimono bene, ma il risparmio varia. Le immagini
                gi&agrave; ottimizzate possono ridursi poco o per nulla.
              </td>
            </tr>
            <tr>
              <td>PDF</td>
              <td>
                Il nostro strumento per i PDF riduce le dimensioni
                principalmente ricomprimendo le immagini incorporate. I PDF
                composti da testo e grafica vettoriale possono ridursi pochissimo
                o per nulla, perch&eacute; non ci sono immagini grandi da
                ottimizzare.
              </td>
            </tr>
            <tr>
              <td>Video</td>
              <td>
                La compressione video nel browser &egrave; a thread singolo e
                impegnativa per la CPU. Pu&ograve; essere lenta, e i file molto
                grandi possono fallire del tutto su dispositivi con poca memoria
                o browser datati.
              </td>
            </tr>
            <tr>
              <td>Audio</td>
              <td>
                La ricodifica con perdita pu&ograve; ridurre le dimensioni, ma
                ricomprimere un file gi&agrave; compresso (come un MP3 a basso
                bitrate) porta pochi benefici e pu&ograve; ridurre la
                qualit&agrave;.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Se uno strumento si blocca, esaurisce la memoria o fallisce con un file
        grande, si tratta di un limite dell&rsquo;esecuzione di
        un&rsquo;elaborazione pesante in una scheda del browser &mdash; non di un
        difetto che dovresti aspettarti che risolviamo per un file specifico.
        Provare con un file pi&ugrave; piccolo, un browser diverso, un
        dispositivo pi&ugrave; potente o chiudere le altre schede spesso aiuta.
      </p>

      <h2 id="keep-originals">Conserva sempre i tuoi file originali</h2>
      <p>
        Questo &egrave; il punto pi&ugrave; importante di tutta questa pagina.{" "}
        <strong>
          Conserva sempre una copia sicura e non modificata di ogni file
          originale prima di comprimerlo.
        </strong>{" "}
        La compressione pu&ograve; essere cumulativa e irreversibile: una volta
        scartato il dettaglio, non &egrave; possibile recuperarlo dal risultato
        compresso. Tratta il file compresso come una copia nuova e separata
        &mdash; mai come la tua unica copia.
      </p>
      <ul>
        <li>
          Mantieni copie di backup degli originali delle tue foto, dei tuoi
          documenti e delle tue registrazioni importanti prima di elaborarli.
        </li>
        <li>
          Ricomprimi a partire dal tuo originale di qualit&agrave; pi&ugrave;
          elevata, non da un file che &egrave; gi&agrave; stato compresso.
        </li>
        <li>
          Verifica che il file compresso si apra correttamente e appaia o suoni
          in modo accettabile prima di eliminare l&rsquo;originale.
        </li>
      </ul>

      <h2 id="no-liability">Nessuna responsabilit&agrave; per la perdita di dati</h2>
      <p>
        Nella misura massima consentita dalla legge, FileShrinking non &egrave;
        responsabile per alcuna perdita, danneggiamento o corruzione dei tuoi
        file o dati, n&eacute; per qualsiasi altra perdita diretta, indiretta,
        incidentale o consequenziale derivante dall&rsquo;uso (o
        dall&rsquo;impossibilit&agrave; di utilizzo) del Servizio. Ci&ograve;
        include arresti anomali del browser, errori del dispositivo, elaborazioni
        interrotte, risultati inattesi o l&rsquo;eliminazione di un originale
        prima di aver confermato il risultato. Poich&eacute; tutto viene eseguito
        localmente sul tuo dispositivo, non abbiamo accesso ai tuoi file
        n&eacute; possibilit&agrave; di recuperarli. La responsabilit&agrave; di
        eseguire i backup e di verificare i tuoi dati &egrave; esclusivamente
        tua.
      </p>

      <h2 id="external-links">Collegamenti esterni e pubblicit&agrave;</h2>
      <p>
        Il Servizio pu&ograve; contenere collegamenti a siti web di terze parti
        e mostra pubblicit&agrave; fornita da Google AdSense. Questi collegamenti
        e annunci sono offerti per comodit&agrave; e per sostenere il
        funzionamento gratuito del sito. Non controlliamo, approviamo,
        garantiamo n&eacute; ci assumiamo alcuna responsabilit&agrave; per il
        contenuto, i prodotti, i servizi, l&rsquo;accuratezza o le pratiche di
        alcun sito o inserzionista di terze parti. Un collegamento o un annuncio{" "}
        <strong>non costituisce un&rsquo;approvazione</strong>. Qualsiasi
        rapporto tu abbia con una terza parte intercorre esclusivamente tra te e
        tale parte. I cookie di pubblicit&agrave; e analisi vengono caricati solo
        dopo che hai prestato il consenso; puoi leggere come gestiamo tutto
        questo nella nostra{" "}
        <Link href="/it/cookie-policy">Informativa sui cookie</Link> e nella
        nostra{" "}
        <Link href="/it/privacy-policy">Informativa sulla privacy</Link>.
      </p>

      <h2 id="no-professional-advice">Non &egrave; consulenza professionale</h2>
      <p>
        Nulla di quanto presente su FileShrinking costituisce consulenza legale,
        tecnica, finanziaria o professionale di altro tipo. Le guide, le domande
        frequenti e le spiegazioni sui formati di file e sulla compressione sono
        contenuti didattici generali e potrebbero non applicarsi alla tua
        situazione specifica. Se devi soddisfare una specifica tecnica
        particolare, uno standard di archiviazione o un requisito legale o
        normativo &mdash; ad esempio per atti giudiziari, imaging medico o stampa
        professionale &mdash; rivolgiti a un professionista qualificato anzich&eacute;
        affidarti a questi strumenti o articoli.
      </p>

      <h2 id="availability">Disponibilit&agrave; e modifiche</h2>
      <p>
        Forniamo il Servizio &ldquo;cos&igrave; com&rsquo;&egrave;&rdquo; e
        &ldquo;in base alla disponibilit&agrave;&rdquo;. Possiamo modificare,
        sospendere o interrompere qualsiasi strumento o funzionalit&agrave; in
        qualsiasi momento e senza preavviso, e non garantiamo che il Servizio sia
        ininterrotto, privo di errori o compatibile con ogni dispositivo o
        browser. Possiamo aggiornare di tanto in tanto questo disclaimer; la data
        di &ldquo;Ultimo aggiornamento&rdquo; riportata sopra riflette la modifica
        pi&ugrave; recente, e l&rsquo;uso continuato del Servizio implica che
        accetti la versione vigente.
      </p>

      <h2 id="contact">Contattaci</h2>
      <p>
        Se hai domande su questo disclaimer, puoi scriverci via e-mail
        all&rsquo;indirizzo{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>
    </>
  ),
};
