import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-client-side-file-compression-works",
  title:
    "Comment fonctionne la compression côté client (et pourquoi elle est plus respectueuse de la vie privée)",
  description:
    "Comment FileShrinking compresse images, vidéos et PDF entièrement dans votre navigateur avec WebAssembly et Web Workers, et pourquoi vos fichiers restent privés.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Confidentialité", "Comment ça marche"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Lorsque vous compressez une photo ou réduisez un PDF sur la plupart des
        sites web, votre fichier effectue un aller-retour&nbsp;: il est
        téléversé vers un serveur, traité dans un centre de données quelque
        part, et une version plus petite vous est renvoyée. Cela fonctionne,
        mais cela signifie qu&rsquo;une copie de votre fichier privé réside
        brièvement sur un ordinateur que vous ne contrôlez pas. FileShrinking
        adopte une approche différente&nbsp;: chaque octet de la compression se
        déroule <strong>dans l&rsquo;onglet de votre propre navigateur</strong>,
        et vos fichiers ne quittent jamais votre appareil. Cet article explique
        exactement comment c&rsquo;est possible, quelles technologies du
        navigateur le rendent possible, et les compromis honnêtes que cela
        implique.
      </p>

      <h2 id="two-models">Deux façons de compresser un fichier sur le web</h2>
      <p>
        Le modèle traditionnel est <strong>côté serveur</strong>. Votre
        navigateur envoie le fichier original sur le réseau&nbsp;; un backend
        exécutant un outil comme ImageMagick ou FFmpeg effectue le gros du
        travail&nbsp;; le résultat est renvoyé en flux. La machine de
        l&rsquo;utilisateur peine à peine, et le serveur peut être extrêmement
        puissant. Le prix à payer, ce sont la confidentialité et la
        confiance&nbsp;: vos données sont transmises, elles séjournent (même
        temporairement) sur le disque de quelqu&rsquo;un d&rsquo;autre, et vous
        devez vous fier à sa parole quant à ce qu&rsquo;il en advient ensuite.
      </p>
      <p>
        Le modèle plus récent est <strong>côté client</strong>. Les mêmes
        algorithmes de compression s&rsquo;exécutent directement sur votre
        appareil, dans le navigateur, sans aucune étape de téléversement.
        Pendant des années, c&rsquo;était peu pratique&nbsp;: JavaScript seul
        était trop lent pour exécuter un codec d&rsquo;image ou de vidéo sérieux
        à une vitesse utilisable. Cela a changé lorsque les navigateurs ont
        acquis la capacité d&rsquo;exécuter du code compilé, quasi natif, sur le
        web. Aujourd&rsquo;hui, un ordinateur portable ou un téléphone modernes
        peuvent accomplir le travail qui nécessitait autrefois un serveur, et
        FileShrinking est entièrement construit sur ce modèle.
      </p>

      <h2 id="webassembly">
        WebAssembly&nbsp;: de vrais codecs exécutés dans le navigateur
      </h2>
      <p>
        La technologie qui rend la compression côté client viable est{" "}
        <strong>WebAssembly</strong> (souvent abrégé en Wasm). C&rsquo;est un
        format d&rsquo;instructions binaires compact et de bas niveau que les
        navigateurs peuvent exécuter à des vitesses proches du code natif. Point
        crucial, il permet aux développeurs de prendre des codecs écrits en C,
        C++ ou Rust — et affinés pendant des décennies — et de les compiler pour
        qu&rsquo;ils s&rsquo;exécutent sur le web sans les réécrire en
        JavaScript.
      </p>
      <p>
        C&rsquo;est ainsi que les mêmes moteurs de compression éprouvés que vous
        trouveriez dans un logiciel de bureau professionnel se retrouvent dans
        un onglet de navigateur&nbsp;:
      </p>
      <ul>
        <li>
          <strong>MozJPEG</strong> pour un encodage JPEG de haute qualité qui
          tire le meilleur parti de chaque kilo-octet.
        </li>
        <li>
          <strong>OxiPNG</strong> pour l&rsquo;optimisation PNG sans perte.
        </li>
        <li>
          <strong>libwebp</strong> et les encodeurs AVIF pour les formats
          modernes <Link href="/fr/compress-webp">WebP</Link> et{" "}
          <Link href="/fr/compress-avif">AVIF</Link>.
        </li>
        <li>
          <strong>FFmpeg</strong>, compilé en WebAssembly, pour le transcodage
          et la réduction de vidéos.
        </li>
      </ul>
      <p>
        Pour une référence technique plus approfondie, la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/WebAssembly"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation WebAssembly de MDN
        </a>{" "}
        est la source canonique sur le fonctionnement du format et les raisons
        de sa rapidité.
      </p>

      <h2 id="web-workers">
        Web Workers&nbsp;: garder la page réactive
      </h2>
      <p>
        La compression est lourde sur le plan du calcul. Si vous exécutiez un
        transcodage vidéo sur le thread principal du navigateur, toute la page
        se figerait&nbsp;: les boutons cesseraient de répondre, le défilement
        saccaderait et les barres de progression se bloqueraient. Pour
        l&rsquo;éviter, FileShrinking exécute le travail sur un thread distinct à
        l&rsquo;aide des <strong>Web Workers</strong>.
      </p>
      <p>
        Un Web Worker est un contexte JavaScript en arrière-plan qui
        s&rsquo;exécute en parallèle de l&rsquo;interface utilisateur. Le thread
        principal remet le fichier (et le codec Wasm) au worker, le worker
        traite la compression, et il renvoie le résultat terminé une fois
        achevé. Pendant ce temps, l&rsquo;interface reste fluide et peut
        afficher la progression en temps réel. Le{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guide de MDN sur l&rsquo;utilisation des Web Workers
        </a>{" "}
        détaille le modèle de transmission de messages. Les données binaires
        volumineuses peuvent être déplacées entre les threads de manière
        efficace grâce aux objets transférables, de sorte que le fichier
        n&rsquo;a pas à être copié octet par octet juste pour franchir la
        frontière entre les threads.
      </p>

      <h2 id="decoding">Lire et décoder les fichiers sans le réseau</h2>
      <p>
        Avant de pouvoir compresser quoi que ce soit, le navigateur doit lire
        votre fichier en mémoire et le décoder. Cela repose sur une petite
        famille d&rsquo;API web standard, dont aucune n&rsquo;implique de
        serveur&nbsp;:
      </p>
      <ul>
        <li>
          <strong>Les API File et Blob</strong> représentent le fichier que vous
          sélectionnez ou glissez. Elles exposent les octets bruts sous la forme
          d&rsquo;un <code>ArrayBuffer</code> sur lequel les codecs peuvent
          travailler directement, le tout en mémoire.
        </li>
        <li>
          <strong>createImageBitmap</strong> décode efficacement une image en
          une forme prête à être traitée, et peut le faire en dehors du thread
          principal.
        </li>
        <li>
          <strong>OffscreenCanvas</strong> permet au navigateur de dessiner, de
          redimensionner et de réencoder des données d&rsquo;image au sein
          d&rsquo;un worker, sans jamais toucher la page visible.
        </li>
      </ul>
      <p>
        Mis bout à bout, le pipeline ressemble à ceci&nbsp;: vous déposez un
        fichier, le navigateur lit ses octets localement, un worker le décode,
        le codec Wasm le réencode à la qualité que vous avez choisie, et un
        nouveau <code>Blob</code> vous est remis pour le téléchargement. À aucun
        moment le fichier ne voyage où que ce soit. Si les choix de qualité de
        cette étape de réencodage vous intriguent, notre guide sur la{" "}
        <Link href="/fr/blog/lossy-vs-lossless-compression">
          compression avec perte par rapport à la compression sans perte
        </Link>{" "}
        explique ce qui est réellement écarté et pourquoi.
      </p>

      <h2 id="privacy">
        Pourquoi c&rsquo;est véritablement plus respectueux de la vie privée
      </h2>
      <p>
        L&rsquo;avantage du modèle côté client en matière de confidentialité
        n&rsquo;est pas un slogan marketing&nbsp;: c&rsquo;est une conséquence
        directe de l&rsquo;architecture. Parce que votre fichier n&rsquo;est
        jamais lu qu&rsquo;en mémoire locale et réencodé sur votre appareil&nbsp;:
      </p>
      <ul>
        <li>
          <strong>Rien n&rsquo;est transmis.</strong> Il n&rsquo;y a aucun
          téléversement, donc aucune copie de votre fichier en transit à
          intercepter, ni aucune copie au repos sur un serveur susceptible
          d&rsquo;être compromise, vendue ou réquisitionnée par la justice.
        </li>
        <li>
          <strong>Cela fonctionne hors ligne.</strong> Une fois la page et ses
          codecs Wasm chargés, vous pouvez vous déconnecter entièrement
          d&rsquo;internet et les outils continuent de fonctionner. C&rsquo;est
          la preuve la plus simple qu&rsquo;aucun téléversement n&rsquo;a
          lieu&nbsp;: vous pouvez le constater vous-même dans l&rsquo;onglet
          réseau de votre navigateur.
        </li>
        <li>
          <strong>Il n&rsquo;y a rien à conserver.</strong> Lorsque vous fermez
          l&rsquo;onglet, les données du fichier disparaissent de la mémoire. Il
          n&rsquo;existe aucun journal serveur reliant vos documents à votre
          identité.
        </li>
      </ul>
      <p>
        Et comme FileShrinking est{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          entièrement open source sous licence MIT
        </a>
        , vous n&rsquo;avez pas à accepter ces affirmations sur parole.
        N&rsquo;importe qui peut lire le code, confirmer qu&rsquo;il
        n&rsquo;existe aucun chemin de téléversement et vérifier exactement
        comment se comporte le pipeline de compression. La confidentialité
        vérifiable est la plus solide qui soit.
      </p>

      <h2 id="tradeoffs">Les compromis honnêtes</h2>
      <p>
        La compression côté client n&rsquo;est pas magique, et il est juste
        d&rsquo;être transparent sur les domaines où le modèle serveur conserve
        encore des avantages&nbsp;:
      </p>
      <ul>
        <li>
          <strong>La vitesse sur les très gros travaux.</strong> Un centre de
          données peut consacrer bien plus de cœurs à une longue vidéo que
          n&rsquo;en possède votre ordinateur portable. Pour la plupart des
          images et des clips courts, la différence est imperceptible, mais une
          vidéo de la durée d&rsquo;un long métrage sera plus lente dans le
          navigateur que sur une ferme de serveurs.
        </li>
        <li>
          <strong>Les limites de mémoire.</strong> Tout se passe dans la RAM de
          votre appareil. Les fichiers extrêmement volumineux — par exemple, une
          vidéo de plusieurs gigaoctets sur un téléphone à faible mémoire —
          peuvent atteindre des plafonds de mémoire du navigateur qu&rsquo;un
          serveur n&rsquo;aurait pas.
        </li>
        <li>
          <strong>Le coût du premier chargement.</strong> Les codecs Wasm
          doivent être téléchargés la première fois que vous utilisez un outil.
          Ils sont ensuite mis en cache, de sorte que les visites suivantes sont
          instantanées, mais la toute première exécution paie un téléchargement
          unique.
        </li>
      </ul>
      <p>
        Pour l&rsquo;immense majorité des tâches quotidiennes — optimiser des
        photos pour le web, réduire un PDF à la taille d&rsquo;un e-mail,
        comprimer un enregistrement d&rsquo;écran — ces compromis en valent
        largement la peine, et vous obtenez la confidentialité gratuitement.
      </p>

      <h2 id="try-it">Constatez-le par vous-même</h2>
      <p>
        La meilleure façon de comprendre la compression côté client est de
        l&rsquo;utiliser. Essayez le{" "}
        <Link href="/fr/image-compressor">compresseur d&rsquo;images</Link>, le{" "}
        <Link href="/fr/video-compressor">compresseur de vidéos</Link> ou le{" "}
        <Link href="/fr/pdf-compressor">compresseur de PDF</Link>, puis ouvrez
        les outils de développement de votre navigateur, observez l&rsquo;onglet
        réseau et confirmez que rien n&rsquo;est téléversé pendant que votre
        fichier rétrécit. Tout s&rsquo;exécute localement, le code est ouvert à
        l&rsquo;inspection de tous, et vos fichiers restent exactement là où ils
        doivent être&nbsp;: avec vous.
      </p>
    </>
  );
}
