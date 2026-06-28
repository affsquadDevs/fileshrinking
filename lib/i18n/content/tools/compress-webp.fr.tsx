import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser WebP — Compresseur et convertisseur",
  metaDescription:
    "Compressez vos WebP ou convertissez JPEG et PNG en WebP dans votre navigateur. Avec ou sans perte, privé et local : aucun envoi, rien ne quitte votre appareil.",
  heading: "Compresseur et convertisseur WebP",
  intro: (
    <>
      Compressez des images WebP existantes ou convertissez des fichiers JPEG,
      PNG et d&rsquo;autres formats en WebP, le tout dans votre navigateur.
      Choisissez un niveau de qualité, déposez vos fichiers et téléchargez des
      images plus légères en quelques secondes. Rien n&rsquo;est jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser ou convertir en WebP",
    description:
      "Compressez vos WebP ou convertissez des images en WebP localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez vos images",
        text: "Glissez-déposez des fichiers WebP, JPEG, PNG, AVIF ou GIF sur la zone de dépôt, cliquez pour parcourir ou collez depuis le presse-papiers. Ajoutez-en plusieurs à la fois si vous le souhaitez.",
      },
      {
        name: "Choisissez un niveau de qualité",
        text: "Utilisez le curseur de qualité ou un préréglage. Une valeur autour de 80 offre un excellent équilibre entre faible taille et fidélité visuelle pour la plupart des photos et des graphiques.",
      },
      {
        name: "Laissez la conversion se faire sur votre appareil",
        text: "Chaque image est encodée en WebP localement avec WebAssembly. Vous verrez la taille d'origine, la nouvelle taille WebP et le pourcentage économisé pour chaque fichier.",
      },
      {
        name: "Téléchargez vos fichiers WebP",
        text: "Téléchargez les images une par une ou toutes en même temps dans un ZIP. Ajustez la qualité et relancez à tout moment pour comparer.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers WebP sont-ils envoyés sur un serveur ?",
      a: (
        <>
          Non. Tout se passe localement dans votre navigateur grâce à
          WebAssembly. Vos images sont lues en mémoire, converties, puis vous
          sont rendues : il n&rsquo;y a aucun serveur où les envoyer, et vous
          pouvez rester hors ligne une fois la page chargée.
        </>
      ),
      text: "Non. Tout se passe localement dans votre navigateur grâce à WebAssembly. Vos images sont lues en mémoire, converties, puis vous sont rendues. Il n'y a aucun serveur où les envoyer, et vous pouvez rester hors ligne une fois la page chargée.",
    },
    {
      q: "Le compresseur WebP est-il vraiment gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans inscription, sans filigrane et
          sans limite sur le nombre ou la taille des fichiers au-delà de ce que
          permet la mémoire de votre appareil. Des publicités discrètes font
          vivre le site.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite sur le nombre ou la taille des fichiers au-delà de ce que permet la mémoire de votre appareil. Des publicités discrètes font vivre le site.",
    },
    {
      q: "Comment la conversion en WebP affecte-t-elle la qualité de l'image ?",
      a: (
        <>
          Le WebP avec perte supprime certains détails pour réduire le fichier,
          un peu comme le JPEG, mais il est plus efficace : un WebP est
          généralement 25-35&nbsp;% plus petit qu&rsquo;un JPEG à qualité
          visible égale. À une qualité de 75-85, le résultat est généralement
          indiscernable de l&rsquo;original. Choisissez le WebP sans perte si
          vous avez besoin d&rsquo;une copie parfaite au pixel près.
        </>
      ),
      text: "Le WebP avec perte supprime certains détails pour réduire le fichier, un peu comme le JPEG, mais il est plus efficace : un WebP est généralement 25-35 % plus petit qu'un JPEG à qualité visible égale. À une qualité de 75-85, le résultat est généralement indiscernable de l'original. Choisissez le WebP sans perte si vous avez besoin d'une copie parfaite au pixel près.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite fixe : cela dépend de la mémoire
          disponible sur votre appareil. Les photos courantes de quelques
          mégaoctets et les grandes images de 20-50&nbsp;MP fonctionnent sans
          problème, et les lots sont traités un fichier à la fois pour limiter
          l&rsquo;utilisation de la mémoire.
        </>
      ),
      text: "Il n'y a pas de limite fixe ; cela dépend de la mémoire disponible sur votre appareil. Les photos courantes de quelques mégaoctets et les grandes images de 20-50 MP fonctionnent sans problème, et les lots sont traités un fichier à la fois pour limiter l'utilisation de la mémoire.",
    },
    {
      q: "Puis-je convertir des fichiers JPEG et PNG en WebP ?",
      a: (
        <>
          Oui. Cet outil accepte les formats JPEG, PNG, WebP, AVIF et GIF et
          produit du WebP : il fonctionne donc à la fois comme recompresseur de
          fichiers WebP existants et comme convertisseur depuis d&rsquo;autres
          formats. La transparence des fichiers PNG est préservée, car WebP
          prend en charge un canal alpha.
        </>
      ),
      text: "Oui. Cet outil accepte les formats JPEG, PNG, WebP, AVIF et GIF et produit du WebP : il fonctionne donc à la fois comme recompresseur de fichiers WebP existants et comme convertisseur depuis d'autres formats. La transparence des fichiers PNG est préservée, car WebP prend en charge un canal alpha.",
    },
    {
      q: "Dois-je utiliser le WebP avec ou sans perte ?",
      a: (
        <>
          Utilisez le WebP avec perte pour les photographies et les images
          complexes, lorsque la plus petite taille possible compte et que la
          légère perte de détail est invisible. Utilisez le WebP sans perte pour
          les logos, les icônes, les captures d&rsquo;écran et les graphiques aux
          couleurs unies ou au texte net, lorsque vous voulez une reproduction
          exacte sans artefacts.
        </>
      ),
      text: "Utilisez le WebP avec perte pour les photographies et les images complexes, lorsque la plus petite taille possible compte et que la légère perte de détail est invisible. Utilisez le WebP sans perte pour les logos, les icônes, les captures d'écran et les graphiques aux couleurs unies ou au texte net, lorsque vous voulez une reproduction exacte sans artefacts.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi compresser et convertir en WebP ?</h2>
      <p>
        WebP est un format d&rsquo;image moderne conçu spécifiquement pour le
        web, et y passer est l&rsquo;un des moyens les plus simples
        d&rsquo;accélérer un site sans sacrifier l&rsquo;apparence des images. Un
        fichier WebP est généralement{" "}
        <strong>25-35&nbsp;% plus petit qu&rsquo;un JPEG équivalent</strong> et
        bien plus petit qu&rsquo;un PNG comparable, ce qui se traduit par des
        chargements de page plus rapides, des factures de bande passante réduites
        et une meilleure expérience pour les visiteurs aux connexions mobiles
        lentes ou limitées.
      </p>
      <p>
        Cet outil remplit une double fonction. Si vous avez déjà des images
        WebP, il les réencode à la qualité de votre choix pour grappiller des
        économies supplémentaires. Si vous avez des fichiers JPEG, PNG, AVIF ou
        GIF, il les convertit en WebP afin que vous puissiez moderniser
        d&rsquo;un coup un dossier entier de ressources. Comme tout
        s&rsquo;exécute sur votre appareil avec un encodeur WebAssembly, vos
        images ne sont jamais envoyées : une alternative réellement privée aux
        convertisseurs hébergés sur serveur qui expédient vos photos vers une
        machine distante.
      </p>

      <h2 id="lossy-lossless">WebP avec et sans perte, et la qualité</h2>
      <p>
        WebP prend en charge deux modes de compression distincts, et choisir le
        bon est important. Le <strong>WebP avec perte</strong> fonctionne comme
        le JPEG : il supprime définitivement les détails que l&rsquo;œil est le
        moins susceptible de remarquer, ce qui produit des fichiers très petits.
        C&rsquo;est le bon choix pour les photographies et les images riches à
        tons continus. Le curseur de qualité contrôle l&rsquo;agressivité de
        cette opération : les valeurs plus élevées conservent davantage de détail
        au prix d&rsquo;une taille supérieure, les plus basses économisent plus
        d&rsquo;espace mais peuvent introduire des artefacts visibles.
      </p>
      <p>
        Le <strong>WebP sans perte</strong>, à l&rsquo;inverse, reproduit chaque
        pixel à l&rsquo;identique, sans aucun artefact. C&rsquo;est le meilleur
        choix pour les logos, les icônes, les captures d&rsquo;écran et les
        graphiques ou textes aux couleurs unies, c&rsquo;est-à-dire les mêmes cas
        où vous opteriez normalement pour{" "}
        <Link href="/fr/compress-png">PNG</Link>, sauf que WebP produit
        généralement un fichier plus petit. Pour la plupart des photographies,
        une qualité avec perte de <strong>75-85</strong> est le point idéal :
        visuellement identique à l&rsquo;original à des tailles
        d&rsquo;affichage normales, mais pour une fraction de la taille. Gardez à
        l&rsquo;esprit que la compression avec perte est cumulative ;
        convertissez donc toujours depuis votre original de la plus haute qualité
        plutôt que depuis une copie déjà compressée.
      </p>

      <h2 id="format">Qu&rsquo;est-ce que le WebP, et quand l&rsquo;utiliser ?</h2>
      <p>
        WebP a été développé par Google et combine une compression avec perte
        dérivée du codec vidéo VP8 et un mode sans perte efficace. Au-delà de la
        taille brute, il prend en charge deux fonctionnalités que les formats
        plus anciens gèrent maladroitement : la{" "}
        <strong>transparence</strong> (un canal alpha, comme PNG) et
        l&rsquo;<strong>animation</strong> (comme le GIF, mais radicalement plus
        légère). Cette combinaison permet à un seul format de remplacer JPEG, PNG
        et le GIF animé dans de nombreuses situations. Vous pouvez lire la
        présentation technique dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          la référence des formats d&rsquo;image de MDN
        </a>{" "}
        et un guide pratique pour l&rsquo;adopter sur{" "}
        <a
          href="https://web.dev/articles/serve-images-webp"
          target="_blank"
          rel="noopener noreferrer"
        >
          web.dev
        </a>
        .
      </p>
      <p>
        La prise en charge par les navigateurs est désormais quasiment
        universelle : toutes les versions actuelles de Chrome, Firefox, Safari et
        Edge affichent le WebP, son utilisation est donc sûre sur l&rsquo;ensemble
        du web moderne. Si vous devez prendre en charge des navigateurs très
        anciens, conservez une solution de repli en JPEG ou PNG. Et lorsque vous
        voulez les fichiers absolument les plus petits et que vous pouvez accepter
        un encodage plus lent,{" "}
        <Link href="/fr/compress-avif">AVIF</Link> surpasse souvent le WebP ;
        comparez les deux sur vos propres images. Pour faire le chemin inverse,
        ou pour passer d&rsquo;un format à un autre, utilisez notre{" "}
        <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link>, et
        si vos sources sont des photographies, notre{" "}
        <Link href="/fr/compress-jpeg">compresseur JPEG</Link> dédié pourrait
        également vous intéresser.
      </p>

      <h2 id="tips">Conseils pour de meilleurs résultats avec WebP</h2>
      <ul>
        <li>
          <strong>Adaptez le mode au contenu.</strong> Utilisez le WebP avec
          perte pour les photos et le WebP sans perte pour les logos, les
          captures d&rsquo;écran et les graphiques plats aux bords nets.
        </li>
        <li>
          <strong>Redimensionnez avant d&rsquo;encoder.</strong> Si une image
          s&rsquo;affichera sur 1200&nbsp;px de large, il n&rsquo;y a aucune
          raison de livrer un fichier de 6000&nbsp;px. L&rsquo;option de
          redimensionnement intégrée fait économiser bien plus que la qualité à
          elle seule.
        </li>
        <li>
          <strong>Préservez la transparence à dessein.</strong> Convertir un PNG
          transparent en WebP conserve le canal alpha, mais l&rsquo;aplatir en
          JPEG ne le ferait pas. Choisissez le WebP quand la transparence compte.
        </li>
        <li>
          <strong>Comparez avec AVIF.</strong> Pour les images d&rsquo;en-tête et
          les grandes photos, repassez le même fichier par AVIF et gardez celui
          qui offre la plus petite taille à une qualité qui vous convient.
        </li>
        <li>
          <strong>Regroupez par type de contenu.</strong> Rassemblez vos photos
          d&rsquo;un côté et vos graphiques de l&rsquo;autre pour que chaque
          ensemble puisse utiliser un seul réglage de qualité idéal en une seule
          passe.
        </li>
      </ul>
    </>
  ),
};
