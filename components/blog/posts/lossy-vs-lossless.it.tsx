import type { BlogPostMeta } from "@/lib/blog/types";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "lossy-vs-lossless-compression",
  title: "Compressione con perdita e senza perdita, spiegata",
  description:
    "Qual &egrave; la vera differenza tra compressione con e senza perdita? Quando usare ciascuna, come si bilanciano qualit&agrave; e dimensione e quali formati usano ciascun tipo.",
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  authorId: "maya",
  tags: ["Fondamenti", "Compressione"],
  readingMinutes: 6,
};

export default function Content() {
  return (
    <>
      <p>
        Quasi tutti i file che invii, carichi o conservi sono stati compressi in
        qualche modo. La compressione &egrave; ci&ograve; che permette a un film
        di due ore di stare su un disco e a una foto ad alta risoluzione di
        viaggiare su una connessione lenta. Ma non tutte le compressioni sono
        uguali. La distinzione pi&ugrave; importante di tutte &egrave; se sia{" "}
        <strong>con perdita</strong> o <strong>senza perdita</strong> &mdash; e
        capire la differenza ti aiuter&agrave; a scegliere ogni volta il formato
        e le impostazioni giuste.
      </p>

      <h2 id="lossless">Che cos&apos;&egrave; la compressione senza perdita?</h2>
      <p>
        La compressione senza perdita riduce la dimensione di un file
        conservando <strong>ogni singolo bit</strong> dei dati originali. Quando
        lo decomprimi, recuperi una copia perfetta, identica byte per byte.
        Funziona individuando ed eliminando la ridondanza statistica &mdash;
        schemi ripetuti, sequenze prevedibili, serie di valori identici &mdash; e
        codificandoli in modo pi&ugrave; efficiente.
      </p>
      <p>
        L&apos;esempio classico &egrave; un archivio ZIP: lo decomprimi e i tuoi
        documenti restano esattamente come erano. Anche i formati di immagine
        come <Link href="/it/compress-png">PNG</Link> e quelli audio come FLAC
        sono senza perdita. Il compromesso &egrave; che la compressione senza
        perdita pu&ograve; ridurre i file solo fino a un certo punto &mdash; di
        solito a una dimensione compresa tra il 50&nbsp;% e il 90&nbsp;% di
        quella originale, a seconda del contenuto. I dati che sono gi&agrave;
        casuali o gi&agrave; compressi si riducono a malapena.
      </p>

      <h2 id="lossy">Che cos&apos;&egrave; la compressione con perdita?</h2>
      <p>
        La compressione con perdita va oltre,{" "}
        <strong>scartando informazioni in modo permanente</strong> &mdash; nello
        specifico, le informazioni che &egrave; meno probabile che le persone
        notino mancare. Una foto{" "}
        <Link href="/it/compress-jpeg">JPEG</Link> elimina sfumature di colore e
        dettagli che il tuo occhio tende a trascurare; un MP3 elimina i suoni che
        vengono mascherati da altri pi&ugrave; forti. Il risultato sono file
        enormemente pi&ugrave; piccoli: un JPEG pu&ograve; occupare un decimo
        dell&apos;immagine senza perdita equivalente, senza differenze
        apprezzabili alle normali dimensioni di visualizzazione.
      </p>
      <p>
        L&apos;inganno sta nel nome: i dati scartati spariscono per sempre. Se
        abbassi troppo la qualit&agrave;, inizi a notare il prezzo &mdash;
        artefatti a blocchi nelle immagini, audio ovattato o metallico, video
        sgranato. E poich&eacute; la perdita &egrave; permanente, &egrave; anche{" "}
        <strong>cumulativa</strong>: ogni volta che risalvi un file con perdita
        usando un&apos;impostazione con perdita, si degrada un po&apos; di
        pi&ugrave;.
      </p>

      <h2 id="which">Quando dovresti usare ciascuna?</h2>
      <p>Usa la compressione <strong>senza perdita</strong> quando la fedelt&agrave; &egrave; irrinunciabile:</p>
      <ul>
        <li>Loghi, icone, disegni al tratto e screenshot (il PNG mantiene i bordi nitidi).</li>
        <li>Immagini con trasparenza.</li>
        <li>Copie originali che modificherai di nuovo in seguito.</li>
        <li>Testo, codice, fogli di calcolo e qualsiasi dato di un documento.</li>
      </ul>
      <p>Usa la compressione <strong>con perdita</strong> quando conta una dimensione ridotta ed &egrave; accettabile una perdita minima e quasi sempre invisibile:</p>
      <ul>
        <li>Fotografie e immagini realistiche per il web (JPEG, WebP, AVIF).</li>
        <li>Musica e podcast da ascoltare (MP3, AAC).</li>
        <li>Video per lo streaming, i social o l&apos;email (H.264 e simili).</li>
      </ul>

      <h2 id="formats">Un rapido prontuario dei formati</h2>
      <p>
        Molti formati moderni in realt&agrave; supportano <em>entrambe</em> le
        modalit&agrave;. <Link href="/it/compress-webp">WebP</Link> e{" "}
        <Link href="/it/compress-avif">AVIF</Link>, ad esempio, hanno varianti
        con e senza perdita. Ecco la versione breve:
      </p>
      <ul>
        <li>
          <strong>Senza perdita:</strong> PNG, GIF, FLAC, WAV (non compresso),
          ZIP, WebP/AVIF senza perdita.
        </li>
        <li>
          <strong>Con perdita:</strong> JPEG, MP3, AAC, H.264/H.265, VP9,
          WebP/AVIF con perdita.
        </li>
      </ul>
      <p>
        Per un riferimento pi&ugrave; approfondito su come i browser gestiscono
        questi formati, la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          guida di MDN ai tipi di file immagine
        </a>{" "}
        &egrave; eccellente.
      </p>

      <h2 id="practical">La conclusione pratica</h2>
      <p>
        Parti dal tuo originale con la massima qualit&agrave; e comprimi una sola
        volta, nel formato pi&ugrave; adatto al compito. Per le foto destinate al
        web, un JPEG, WebP o AVIF con perdita a una qualit&agrave; di 70&ndash;80
        &egrave; quasi sempre la scelta giusta. Per la grafica e qualsiasi cosa
        con testo o trasparenza, opta per il PNG senza perdita. E qualunque cosa
        tu faccia, conserva un originale impeccabile cos&igrave; da non dover mai
        ricomprimere un file gi&agrave; compresso.
      </p>
      <p>
        Tutti gli strumenti di FileShrinking vengono eseguiti interamente nel tuo
        browser, quindi puoi sperimentare in totale libert&agrave; &mdash; prova
        a <Link href="/it/image-compressor">comprimere un&apos;immagine</Link> a
        diversi livelli di qualit&agrave; e confronta. I tuoi file non lasciano
        mai il tuo dispositivo, quindi non c&apos;&egrave; alcun rischio nel fare
        prove.
      </p>
    </>
  );
}
