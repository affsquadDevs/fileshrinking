import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Redimensionner une image en ligne gratuit (px ou %)",
  metaDescription:
    "Redimensionnez vos JPG, PNG, WebP, AVIF et GIF en pixels ou en pourcentage dans votre navigateur. Privé et sans envoi : vos images ne quittent jamais votre appareil.",
  heading: "Redimensionner une image",
  intro: (
    <>
      Redimensionnez vos images JPG, PNG, WebP, AVIF et GIF en pixels exacts ou
      en pourcentage, directement dans votre navigateur. Modifier les dimensions
      est le moyen le plus efficace de réduire un fichier : déposez vos images,
      définissez une taille cible et téléchargez-les en quelques secondes. Rien
      n&rsquo;est jamais envoyé en ligne.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment redimensionner une image",
    description:
      "Redimensionnez vos images en pixels ou en pourcentage, en local dans votre navigateur, en quatre étapes.",
    steps: [
      {
        name: "Ajoutez vos images",
        text: "Glissez-déposez vos photos sur la zone de dépôt, cliquez pour parcourir ou collez depuis le presse-papiers. Les formats JPEG, PNG, WebP, AVIF et GIF sont pris en charge, et vous pouvez en ajouter plusieurs à la fois.",
      },
      {
        name: "Choisissez les pixels ou le pourcentage",
        text: "Sélectionnez « Pourcentage » pour mettre à l’échelle selon un ratio (idéal pour des lots entiers) ou « Pixels » pour saisir une largeur ou une hauteur exacte. Gardez le rapport hauteur/largeur activé pour éviter toute déformation.",
      },
      {
        name: "Définissez le format et la qualité (facultatif)",
        text: "Laissez le format sur « Même format » pour conserver le type d’origine, ou convertissez-le en WebP ou AVIF pour obtenir un fichier plus petit. Ajustez le curseur de qualité pour compresser en même temps.",
      },
      {
        name: "Téléchargez vos images redimensionnées",
        text: "Chaque image est redimensionnée sur votre appareil par rééchantillonnage Lanczos. Téléchargez-les une par une ou toutes en une fois dans un fichier ZIP.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes images sont-elles envoyées sur un serveur quand je les redimensionne ?",
      a: (
        <>
          Non. Le redimensionnement se déroule entièrement dans votre navigateur,
          en utilisant le processeur de votre propre appareil. Les fichiers sont
          chargés en mémoire, redimensionnés, puis vous sont rendus
          immédiatement : rien n&rsquo;est jamais envoyé à un serveur, vos images
          restent donc totalement privées. Vous pouvez même vous déconnecter
          d&rsquo;internet une fois la page chargée.
        </>
      ),
      text: "Non. Le redimensionnement se déroule entièrement dans votre navigateur, en utilisant le processeur de votre appareil. Les fichiers sont chargés en mémoire, redimensionnés, puis vous sont rendus immédiatement. Rien n’est jamais envoyé à un serveur, vos images restent donc privées. Vous pouvez même vous déconnecter d’internet une fois la page chargée.",
    },
    {
      q: "Le redimensionneur d’images est-il vraiment gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans inscription, sans filigrane et
          sans limite sur le nombre d&rsquo;images que vous pouvez redimensionner
          ni sur leur taille, au-delà de ce que la mémoire de votre appareil
          permet. Le site est financé par des publicités discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite sur le nombre ni la taille des images, au-delà de ce que la mémoire de votre appareil permet. Le site est financé par des publicités discrètes.",
    },
    {
      q: "Le redimensionnement va-t-il réduire la qualité de mon image ?",
      a: (
        <>
          Réduire une image est doux pour la qualité, car les pixels sont
          moyennés de façon intelligente grâce au rééchantillonnage Lanczos de
          haute qualité, qui garde les contours nets et évite l&rsquo;aspect
          dentelé de la mise à l&rsquo;échelle naïve. La qualité ne se dégrade que
          si vous agrandissez (mise à l&rsquo;échelle vers le haut) une image
          au-delà de sa taille d&rsquo;origine, car il n&rsquo;y a aucun détail
          réel à inventer.
        </>
      ),
      text: "Réduire une image est doux pour la qualité, car les pixels sont moyennés grâce au rééchantillonnage Lanczos de haute qualité, qui garde les contours nets. La qualité ne se dégrade que si vous agrandissez une image au-delà de sa taille d’origine, car il n’y a aucun détail réel à inventer.",
    },
    {
      q: "Quelle est la taille maximale de fichier que je peux redimensionner ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite fixe : cela dépend de la mémoire
          disponible sur votre appareil. Les photos habituelles de quelques
          mégaoctets, et même les très grandes images de 40 à 80 MP, se
          redimensionnent sans problème. Les gros lots sont traités un fichier à
          la fois pour limiter l&rsquo;utilisation de la mémoire.
        </>
      ),
      text: "Il n’y a pas de limite fixe ; cela dépend de la mémoire disponible sur votre appareil. Les photos habituelles de quelques mégaoctets, et même les très grandes images de 40 à 80 MP, se redimensionnent sans problème. Les gros lots sont traités un fichier à la fois pour limiter l’utilisation de la mémoire.",
    },
    {
      q: "Puis-je conserver le rapport hauteur/largeur pour que mon image ne paraisse pas étirée ?",
      a: (
        <>
          Oui. Laissez la case « Conserver le rapport hauteur/largeur » cochée et
          saisissez uniquement une largeur ou uniquement une hauteur :
          l&rsquo;autre dimension est calculée automatiquement pour que
          l&rsquo;image soit mise à l&rsquo;échelle de façon proportionnelle.
          Décochez-la seulement lorsque vous avez délibérément besoin de
          dimensions exactes et non proportionnelles.
        </>
      ),
      text: "Oui. Laissez la case Conserver le rapport hauteur/largeur cochée et saisissez uniquement une largeur ou uniquement une hauteur ; l’autre dimension est calculée automatiquement pour que l’image soit mise à l’échelle de façon proportionnelle. Décochez-la seulement lorsque vous avez délibérément besoin de dimensions exactes et non proportionnelles.",
    },
    {
      q: "Puis-je redimensionner et compresser en même temps ?",
      a: (
        <>
          Oui, et vous devriez le faire. Définissez les dimensions cibles, puis
          choisissez un format de sortie et un niveau de qualité. Le
          redimensionnement réduit le nombre de pixels tandis que la compression
          presse les pixels restants ; combiner les deux donne donc le fichier le
          plus petit possible en une seule passe.
        </>
      ),
      text: "Oui, et vous devriez le faire. Définissez les dimensions cibles, puis choisissez un format de sortie et un niveau de qualité. Le redimensionnement réduit le nombre de pixels tandis que la compression presse les pixels restants ; combiner les deux donne donc le fichier le plus petit possible en une seule passe.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi redimensionner vos images ?</h2>
      <p>
        Les téléphones et les appareils photo modernes capturent des images
        énormes : une seule photo peut faire 6000 pixels de large et peser dix
        mégaoctets ou plus. C&rsquo;est bien plus de détails que ce que presque
        n&rsquo;importe quel écran, e-mail ou page web n&rsquo;affichera jamais.
        L&rsquo;en-tête d&rsquo;un blog peut s&rsquo;afficher à 1200 pixels de
        large ; une photo de profil à 400 ; une signature d&rsquo;e-mail à 150.
        Envoyer un fichier de 6000 pixels dans un emplacement de 1200 pixels
        gaspille de la bande passante, ralentit le chargement des pages et
        alourdit les pièces jointes sans aucun bénéfice visible.
      </p>
      <p>
        Le redimensionnement est aussi le{" "}
        <strong>levier le plus puissant dont vous disposez sur la taille du
        fichier</strong>. Comme les données d&rsquo;une image évoluent avec son
        nombre total de pixels, diviser par deux à la fois la largeur et la
        hauteur supprime environ les trois quarts des pixels — et donc
        l&rsquo;essentiel de la taille du fichier — avant même toute compression.
        Baisser la qualité JPEG peut réduire de 30 à 50 % ; redimensionner une
        photo trop grande à sa taille d&rsquo;affichage réelle réduit
        couramment de 80 à 95 %. Si un fichier vous semble trop volumineux,
        redimensionnez d&rsquo;abord et compressez ensuite.
      </p>
      <p>
        Et comme cet outil fonctionne entièrement sur votre appareil,
        c&rsquo;est la façon privée de procéder. D&rsquo;autres redimensionneurs
        en ligne envoient vos photos vers un serveur distant, les traitent là-bas
        et vous les renvoient. Ici, vos images sont chargées en mémoire,
        redimensionnées en local et vous sont rendues immédiatement : elles ne
        touchent jamais à un réseau.
      </p>

      <h2 id="quality">Comment le redimensionnement affecte la qualité</h2>
      <p>
        Réduire une image — la rendre plus petite — est par nature doux pour la
        qualité, mais <em>la façon</em> dont les pixels sont combinés compte
        énormément. La mise à l&rsquo;échelle naïve se contente de jeter des
        pixels, ce qui produit des contours dentelés et un scintillement sur les
        détails fins. Cet outil utilise plutôt le{" "}
        <strong>rééchantillonnage Lanczos</strong> de haute qualité, qui pondère
        un voisinage de pixels environnants pour chaque pixel de sortie. Le
        résultat garde les contours nets et le texte lisible, de sorte
        qu&rsquo;une image réduite paraît propre plutôt que floue ou crénelée.
      </p>
      <p>
        La seule opération qui nuit véritablement est la{" "}
        <strong>mise à l&rsquo;échelle vers le haut</strong> : agrandir une image
        au-delà de ses dimensions d&rsquo;origine. Aucun rééchantillonneur ne
        peut inventer un détail qui n&rsquo;a jamais été capturé, si bien
        qu&rsquo;une photo agrandie paraît molle et pâteuse. En règle générale,
        ne redimensionnez jamais que vers le <em>bas</em> : choisissez la plus
        grande taille dont vous avez réellement besoin et redimensionnez à cette
        taille, jamais au-dessus des dimensions de la source. Lorsque vous
        convertissez en plus vers un format avec perte, rappelez-vous que la
        compression et le redimensionnement se cumulent : une image
        redimensionnée a moins de pixels à compresser, ce qui explique
        précisément pourquoi les deux ensemble produisent des fichiers aussi
        petits.
      </p>

      <h2 id="sizes">Pixels, pourcentage et tailles cibles courantes</h2>
      <p>
        Le mode <strong>pourcentage</strong> est idéal pour les lots : réglez
        sur 50 % et chaque image se réduit de façon proportionnelle, quelle que
        soit sa taille de départ. Le mode <strong>pixels</strong> est destiné aux
        cibles précises : saisissez une largeur (ou une hauteur) et, avec le
        rapport hauteur/largeur verrouillé, l&rsquo;autre dimension est calculée
        pour vous afin que rien ne soit étiré. Le rapport hauteur/largeur
        n&rsquo;est rien d&rsquo;autre que la relation entre la largeur et la
        hauteur (16:9, 4:3, 1:1) ; le conserver intact est ce qui empêche les
        visages et les logos de paraître écrasés. Vous pouvez en lire davantage
        sur le fonctionnement des images et de leurs dimensions dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          le guide des images sur le web de MDN
        </a>
        .
      </p>
      <p>
        Quelques cibles utiles à garder en tête : la plupart des contenus{" "}
        <strong>web</strong> rendent très bien entre 1200 et 2000 pixels sur le
        plus grand côté (utilisez la valeur la plus élevée pour les images hero
        pleine largeur sur les écrans à haute densité). Les pièces jointes et
        signatures d&rsquo;<strong>e-mail</strong> devraient généralement rester
        à 800 pixels ou moins pour ne pas saturer les boîtes de réception. Pour
        les <strong>réseaux sociaux</strong>, les dimensions courantes sont
        d&rsquo;environ 1080×1080 pour une publication carrée Instagram,
        1080×1920 pour les stories et reels verticaux, 1200×630 pour un aperçu de
        lien Facebook ou Open Graph, et 1500×500 pour une bannière X/Twitter. En
        cas de doute, redimensionnez à la plus grande taille où l&rsquo;image
        apparaîtra et laissez la plateforme la réduire à partir de là.
      </p>

      <h2 id="tips">Conseils pour obtenir les meilleurs résultats</h2>
      <ul>
        <li>
          <strong>N&rsquo;agrandissez jamais.</strong> Agrandir au-delà de la
          taille d&rsquo;origine ne fait qu&rsquo;ajouter du flou. Choisissez la
          plus grande dimension dont vous avez vraiment besoin et arrêtez-vous
          là.
        </li>
        <li>
          <strong>Redimensionnez avant de compresser.</strong> Moins de pixels
          signifie un fichier plus petit et moins de travail pour
          l&rsquo;encodeur. Pour obtenir les photos les plus petites,
          redimensionnez ici puis faites-les passer par la{" "}
          <Link href="/fr/compress-jpeg">compression JPEG</Link>.
        </li>
        <li>
          <strong>Verrouillez le rapport hauteur/largeur.</strong> Saisissez
          seulement la largeur ou seulement la hauteur et laissez l&rsquo;autre
          dimension se remplir automatiquement : c&rsquo;est la façon la plus
          simple d&rsquo;éviter les images étirées et déformées.
        </li>
        <li>
          <strong>Convertissez pendant le redimensionnement.</strong> Passer en
          WebP ou AVIF avec le{" "}
          <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link>{" "}
          peut réduire une photo redimensionnée de 25 à 50 % de plus sans perte
          de qualité visible.
        </li>
        <li>
          <strong>Conservez vos originaux.</strong> Redimensionnez à chaque fois
          à partir d&rsquo;un master en pleine résolution plutôt que de
          redimensionner à nouveau une copie déjà réduite, ce qui cumule la perte
          de qualité.
        </li>
      </ul>
    </>
  ),
};
