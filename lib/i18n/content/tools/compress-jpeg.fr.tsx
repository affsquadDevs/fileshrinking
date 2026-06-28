import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser JPEG — Compresseur JPG gratuit",
  metaDescription:
    "Compressez vos JPG et JPEG dans le navigateur avec MozJPEG. Qualité réglable, traitement par lots, zéro envoi : vos photos restent sur votre appareil.",
  heading: "Compresseur de JPEG",
  intro: (
    <>
      Compressez vos images JPG et JPEG directement dans votre navigateur avec
      MozJPEG, le même encodeur auquel font confiance les photographes et les
      développeurs web. Choisissez un niveau de qualité, déposez vos photos et
      téléchargez des fichiers plus légers en quelques secondes : rien n&rsquo;est
      jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser un JPEG",
    description:
      "Compressez vos images JPG/JPEG localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez vos images",
        text: "Glissez-déposez vos fichiers JPG sur la zone de dépôt, cliquez pour parcourir ou collez depuis le presse-papiers. Vous pouvez en ajouter plusieurs à la fois.",
      },
      {
        name: "Choisissez un niveau de qualité",
        text: "Utilisez le curseur de qualité ou un préréglage. Autour de 75, c'est un excellent compromis entre taille et qualité visuelle pour la plupart des photos.",
      },
      {
        name: "Laissez la compression s'effectuer sur votre appareil",
        text: "Chaque image est compressée localement avec MozJPEG. Vous verrez la taille d'origine, la nouvelle taille et le pourcentage économisé pour chaque fichier.",
      },
      {
        name: "Téléchargez vos fichiers",
        text: "Téléchargez les images une par une ou tout d'un coup dans un ZIP. Ajustez la qualité et recompressez quand vous voulez.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers JPEG sont-ils envoyés sur un serveur ?",
      a: (
        <>
          Non. Chaque image est compressée localement dans votre navigateur avec
          WebAssembly. Vos fichiers ne quittent jamais votre appareil et il
          n&rsquo;y a aucun serveur vers lequel les envoyer : vous pouvez même
          vous déconnecter d&rsquo;internet une fois la page chargée, et cela
          continue de fonctionner.
        </>
      ),
      text: "Non. Chaque image est compressée localement dans votre navigateur avec WebAssembly. Vos fichiers ne quittent jamais votre appareil et il n'y a aucun serveur vers lequel les envoyer. Vous pouvez vous déconnecter d'internet une fois la page chargée, et cela continue de fonctionner.",
    },
    {
      q: "Le compresseur de JPEG est-il vraiment gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans inscription, sans filigrane et
          sans limite de nombre de fichiers ni de taille au-delà de ce que la
          mémoire de votre appareil peut gérer. Le site est financé par des
          publicités discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite de nombre de fichiers ni de taille au-delà de ce que la mémoire de votre appareil peut gérer. Le site est financé par des publicités discrètes.",
    },
    {
      q: "La compression réduira-t-elle la qualité de mes photos ?",
      a: (
        <>
          La compression JPEG est avec perte, donc certaines données sont
          supprimées. À une qualité de 70-80, la différence est généralement
          invisible alors que le fichier est bien plus léger. Baissez le curseur
          de qualité pour obtenir des fichiers plus légers, ou montez-le pour
          rester plus proche de l&rsquo;original.
        </>
      ),
      text: "JPEG est un format avec perte, donc certaines données sont supprimées. À une qualité de 70-80, la différence est généralement invisible alors que le fichier est bien plus léger. Baissez le curseur de qualité pour obtenir des fichiers plus légers, ou montez-le pour rester plus proche de l'original.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite stricte : cela dépend de la mémoire
          disponible de votre appareil. Les téléphones et les ordinateurs
          portables gèrent sans problème les photos courantes (quelques
          mégaoctets) et même les grandes images de 20-50 MP. Les très grands
          lots sont traités un fichier à la fois pour limiter l&rsquo;utilisation
          de la mémoire.
        </>
      ),
      text: "Il n'y a pas de limite stricte ; cela dépend de la mémoire disponible de votre appareil. Les photos courantes de quelques mégaoctets et même les grandes images de 20-50 MP fonctionnent bien. Les grands lots sont traités un fichier à la fois pour limiter l'utilisation de la mémoire.",
    },
    {
      q: "Puis-je compresser plusieurs JPEG à la fois ?",
      a: (
        <>
          Oui. Déposez autant de fichiers que vous le souhaitez : ils sont mis
          en file d&rsquo;attente et compressés les uns après les autres, puis
          vous pouvez les télécharger individuellement ou tous ensemble dans un
          ZIP.
        </>
      ),
      text: "Oui. Ajoutez autant de fichiers que vous le souhaitez ; ils sont mis en file d'attente et compressés un par un, puis téléchargés individuellement ou ensemble dans un ZIP.",
    },
    {
      q: "Conserve-t-il mon original si la compression rendait le fichier plus lourd ?",
      a: (
        <>
          Oui. Si un JPEG réencodé devait être plus lourd que votre original
          (chose fréquente avec les images déjà optimisées), l&rsquo;outil
          conserve votre fichier d&rsquo;origine et vous indique qu&rsquo;il
          était déjà bien optimisé.
        </>
      ),
      text: "Oui. Si un JPEG réencodé devait être plus lourd que l'original, l'outil conserve votre fichier d'origine et indique qu'il était déjà bien optimisé.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi compresser les images JPEG ?</h2>
      <p>
        JPEG (aussi écrit JPG) est le format le plus courant pour les
        photographies sur le web, mais les images des appareils photo et des
        téléphones sont souvent bien plus lourdes que nécessaire, fréquemment de
        plusieurs mégaoctets chacune. Les images volumineuses ralentissent les
        sites web, encombrent les pièces jointes des e-mails, grignotent le
        stockage dans le cloud et gaspillent les données mobiles. Les compresser
        préserve la qualité visuelle qui vous tient à cœur tout en réduisant
        considérablement la taille du fichier, souvent de 60 à 80 %.
      </p>
      <p>
        Comme cet outil s&rsquo;exécute entièrement sur votre appareil,
        c&rsquo;est aussi la façon la plus confidentielle de procéder. Les
        compresseurs en ligne traditionnels envoient vos photos vers un serveur
        distant, les traitent là-bas et les renvoient. Ici, vos images sont lues
        en mémoire, compressées avec une version WebAssembly de MozJPEG, puis
        vous sont rendues directement : elles ne passent jamais par un réseau.
      </p>

      <h2 id="lossy">Compression avec perte et qualité : à quoi s&rsquo;attendre</h2>
      <p>
        JPEG est un format <strong>avec perte</strong> : pour réduire la taille
        des fichiers, il supprime définitivement les détails de l&rsquo;image que
        l&rsquo;œil humain est le moins susceptible de remarquer. Le curseur de
        qualité contrôle l&rsquo;agressivité de ce processus. Les valeurs élevées
        préservent davantage de détails et produisent des fichiers plus lourds ;
        les valeurs basses économisent plus d&rsquo;espace mais peuvent
        introduire des &laquo;&nbsp;artefacts&nbsp;&raquo; visibles, comme un
        effet de blocs ou des halos autour des bords nets.
      </p>
      <p>
        Pour la plupart des photographies, une qualité de{" "}
        <strong>70-80</strong> est le réglage idéal : le résultat est
        visuellement impossible à distinguer de l&rsquo;original à des tailles
        d&rsquo;affichage normales, tout en n&rsquo;occupant qu&rsquo;une
        fraction de la taille. Descendez à 50-60 lorsque la légèreté compte plus
        que la fidélité parfaite (par exemple pour des vignettes), et restez à
        85-90 pour les images avec de fins dégradés ou du texte, où les artefacts
        sont plus visibles. La compression est{" "}
        <strong>cumulative</strong>, alors recompressez toujours à partir de
        votre original de qualité maximale et non d&rsquo;une copie déjà
        compressée.
      </p>

      <h2 id="format">Qu&rsquo;est-ce qu&rsquo;un JPEG et quand l&rsquo;utiliser ?</h2>
      <p>
        JPEG a été normalisé par le Joint Photographic Experts Group et utilise
        la transformée en cosinus discrète pour compresser efficacement les
        images en tons continus. Il excelle avec les photographies et les images
        réalistes aux transitions de couleurs douces, c&rsquo;est pourquoi
        presque tous les appareils photo enregistrent des JPEG par défaut. Vous
        pouvez consulter les détails techniques sur{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          la référence des formats d&rsquo;image de MDN
        </a>
        .
      </p>
      <p>
        Cependant, JPEG n&rsquo;est pas toujours le bon choix. Il ne prend pas en
        charge la transparence et gère mal les graphismes plats, les logos, les
        captures d&rsquo;écran et le texte : ceux-ci se compressent mieux et
        paraissent plus nets en{" "}
        <Link href="/fr/compress-png">PNG</Link>. Et pour obtenir les photos les
        plus légères possible avec une prise en charge des navigateurs modernes,
        les formats plus récents l&rsquo;emportent : un fichier{" "}
        <Link href="/fr/compress-webp">WebP</Link> est généralement 25 à 35 %
        plus léger qu&rsquo;un JPEG équivalent, et{" "}
        <Link href="/fr/compress-avif">AVIF</Link> peut l&rsquo;être encore
        davantage. Si vous optimisez pour le web, essayez de convertir avec notre{" "}
        <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link> et
        comparez.
      </p>

      <h2 id="tips">Conseils pour de meilleurs résultats</h2>
      <ul>
        <li>
          <strong>Partez de l&rsquo;original.</strong> Réenregistrer un JPEG à
          répétition le dégrade. Conservez une copie maîtresse et compressez à
          partir d&rsquo;elle.
        </li>
        <li>
          <strong>Redimensionnez avant de compresser.</strong> Si une image doit
          être affichée à 1200 px de large, inutile de livrer un fichier de
          6000 px. Utilisez l&rsquo;option de redimensionnement intégrée pour une
          économie bien plus importante que la qualité à elle seule.
        </li>
        <li>
          <strong>Utilisez les préréglages pour comparer.</strong> Essayez
          d&rsquo;abord &laquo;&nbsp;Équilibré&nbsp;&raquo;, puis recompressez en
          &laquo;&nbsp;Plus petit&nbsp;&raquo; et vérifiez si vous percevez la
          différence à votre taille d&rsquo;affichage.
        </li>
        <li>
          <strong>Regroupez les images similaires par lots.</strong> Les photos
          d&rsquo;un même appareil photo rendent généralement très bien avec le
          même réglage de qualité, vous pouvez donc les traiter en une seule
          fois.
        </li>
      </ul>
    </>
  ),
};
