import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser HEIC — Convertisseur HEIC en JPG gratuit",
  metaDescription:
    "Convertissez vos photos HEIC et HEIF d'iPhone en JPG, WebP ou AVIF dans le navigateur, avec qualité et taille réglables. Zéro envoi : vos photos restent chez vous.",
  heading: "Compresseur et convertisseur HEIC",
  intro: (
    <>
      Transformez les photos HEIC et HEIF de votre iPhone en fichiers JPG, WebP
      ou AVIF compatibles partout &mdash; et réduisez-les grâce à une qualité et
      une taille réglables. Tout s&rsquo;exécute dans votre navigateur, donc vos
      photos ne sont jamais envoyées.
    </>
  ),
  lastUpdated: "2026-06-28",
  howTo: {
    name: "Comment convertir et compresser des photos HEIC",
    description:
      "Convertissez vos images HEIC/HEIF d'iPhone en JPG, WebP ou AVIF localement dans votre navigateur.",
    steps: [
      {
        name: "Ajoutez vos photos HEIC",
        text: "Glissez-déposez vos fichiers .heic ou .heif sur la zone de dépôt, cliquez pour parcourir, ou collez-les. Vous pouvez ajouter un lot entier d'un coup.",
      },
      {
        name: "Choisissez un format de sortie",
        text: "Choisissez JPG pour une compatibilité maximale, ou WebP/AVIF pour les fichiers les plus petits. Définissez un niveau de qualité : environ 80 est idéal pour les photos.",
      },
      {
        name: "Convertissez sur votre appareil",
        text: "Chaque photo est décodée avec une version WebAssembly de libheif et ré-encodée localement. Vous verrez la taille d'origine et la nouvelle taille de chaque fichier.",
      },
      {
        name: "Téléchargez vos photos",
        text: "Téléchargez les images une par une, ou récupérez le tout dans un ZIP. Ajustez le format, la qualité ou la taille et relancez quand vous voulez.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes photos HEIC sont-elles envoyées sur un serveur ?",
      a: (
        <>
          Non. Vos fichiers HEIC sont décodés et ré-encodés intégralement dans
          votre navigateur à l&rsquo;aide de WebAssembly : ils ne quittent jamais
          votre appareil. La plupart des autres sites de &ldquo;convertisseur
          HEIC&rdquo; envoient vos photos personnelles sur leurs serveurs ;
          celui-ci n&rsquo;a aucun serveur où les envoyer, et vous pouvez vous
          déconnecter d&rsquo;internet une fois la page chargée, cela fonctionne
          toujours.
        </>
      ),
      text: "Non. Les fichiers HEIC sont décodés et ré-encodés intégralement dans votre navigateur à l'aide de WebAssembly et ne quittent jamais votre appareil. La plupart des autres sites de convertisseur HEIC envoient vos photos personnelles sur un serveur ; pas celui-ci. Vous pouvez vous déconnecter d'internet une fois la page chargée, cela fonctionne toujours.",
    },
    {
      q: "Pourquoi convertir du HEIC en JPG ?",
      a: (
        <>
          HEIC est le format photo par défaut d&rsquo;Apple, mais de nombreux PC
          sous Windows, sites web, applications et anciens appareils ne peuvent
          pas l&rsquo;ouvrir. Convertir en JPG (ou WebP/AVIF) permet à vos photos
          de s&rsquo;ouvrir partout, afin que vous puissiez les partager, les
          téléverser et les modifier sans erreurs de compatibilité.
        </>
      ),
      text: "HEIC est le format photo par défaut d'Apple mais de nombreux PC sous Windows, sites web, applications et anciens appareils ne peuvent pas l'ouvrir. Convertir en JPG, WebP ou AVIF permet aux photos de s'ouvrir partout afin que vous puissiez les partager, les téléverser et les modifier.",
    },
    {
      q: "La conversion va-t-elle réduire la qualité de ma photo ?",
      a: (
        <>
          Convertir en JPEG, WebP ou AVIF est avec perte, donc une partie des
          détails est ré-encodée. À une qualité de 75&ndash;85, la différence est
          normalement invisible aux tailles d&rsquo;affichage standard. Gardez une
          qualité élevée pour rester fidèle à l&rsquo;original, ou baissez-la (et
          redimensionnez) lorsqu&rsquo;un fichier plus petit compte davantage.
        </>
      ),
      text: "Convertir en JPEG, WebP ou AVIF est avec perte, donc une partie des détails est ré-encodée. À une qualité de 75-85, la différence est normalement invisible. Gardez une qualité élevée pour rester fidèle à l'original, ou baissez-la et redimensionnez lorsqu'un fichier plus petit compte davantage.",
    },
    {
      q: "Pourquoi le JPG converti est-il parfois plus gros que le HEIC ?",
      a: (
        <>
          HEIC est un format extrêmement efficace : il stocke souvent une photo
          dans environ la moitié de la taille d&rsquo;un JPEG équivalent. Ainsi,
          une conversion directe HEIC&rarr;JPEG peut parfois produire un fichier
          plus gros. Pour réellement réduire la photo, choisissez WebP ou AVIF
          (qui égalent l&rsquo;efficacité du HEIC), baissez le curseur de qualité
          ou redimensionnez l&rsquo;image.
        </>
      ),
      text: "HEIC est très efficace et stocke souvent une photo dans environ la moitié de la taille d'un JPEG équivalent, donc une conversion directe HEIC en JPEG peut produire un fichier plus gros. Pour réduire la photo, choisissez WebP ou AVIF, baissez le curseur de qualité ou redimensionnez l'image.",
    },
    {
      q: "Quelle est la différence entre HEIC et HEIF ?",
      a: (
        <>
          HEIF (High Efficiency Image File Format) est le conteneur ; HEIC est la
          variante courante utilisée par Apple, dans laquelle l&rsquo;image
          interne est encodée avec HEVC (H.265). Au quotidien, les noms sont
          interchangeables : cet outil accepte à la fois les fichiers .heic et
          .heif.
        </>
      ),
      text: "HEIF (High Efficiency Image File Format) est le conteneur et HEIC est la variante courante d'Apple dans laquelle l'image est encodée avec HEVC (H.265). Les noms s'emploient de façon interchangeable ; cet outil accepte à la fois les fichiers .heic et .heif.",
    },
    {
      q: "Puis-je convertir plusieurs photos HEIC à la fois ?",
      a: (
        <>
          Oui. Déposez un lot entier &mdash; par exemple un dossier de photos
          envoyées par AirDrop depuis votre iPhone &mdash; et elles sont
          converties une par une ; vous pouvez ensuite les télécharger
          individuellement ou toutes ensemble dans un ZIP.
        </>
      ),
      text: "Oui. Ajoutez un lot entier de photos HEIC et elles sont converties une par une, puis téléchargées individuellement ou toutes ensemble dans un ZIP.",
    },
    {
      q: "Le convertisseur HEIC est-il gratuit ?",
      a: (
        <>
          Entièrement gratuit : sans inscription, sans filigrane et sans limite de
          nombre de fichiers ni de taille au-delà de la mémoire de votre appareil.
          Le site est financé par des publicités discrètes, et le code est open
          source pour que vous puissiez vérifier exactement ce qu&rsquo;il fait.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane ni limite de fichiers au-delà de la mémoire de votre appareil. Le site est financé par des publicités discrètes et le code est open source.",
    },
  ],
  content: (
    <>
      <h2 id="why-convert">Pourquoi convertir les fichiers HEIC ?</h2>
      <p>
        Depuis iOS 11, les iPhone et iPad enregistrent les photos en{" "}
        <strong>HEIC</strong> par défaut. C&rsquo;est un format formidable pour
        économiser de l&rsquo;espace sur votre appareil, mais il a un gros
        inconvénient : la <strong>compatibilité</strong>. De nombreux PC sous
        Windows, applications web, systèmes de gestion de contenu, imprimantes
        photo et anciens téléphones ne peuvent toujours pas ouvrir un fichier
        .heic, ce qui provoque la trop familière erreur de &ldquo;format non
        pris en charge&rdquo; lorsque vous tentez de partager ou de téléverser
        une image.
      </p>
      <p>
        Convertir vos photos HEIC vers un format largement pris en charge comme{" "}
        <strong>JPG</strong>, <strong>WebP</strong> ou <strong>AVIF</strong> y
        remédie instantanément : l&rsquo;image s&rsquo;ouvre partout, tout en
        gardant le contrôle de la qualité et de la taille du fichier. Et comme
        cet outil s&rsquo;exécute entièrement sur votre appareil, vos photos
        personnelles ne sont jamais envoyées sur le serveur de qui que ce soit.
      </p>

      <h2 id="what-is-heic">Qu&rsquo;est-ce que le HEIC (et le HEIF) ?</h2>
      <p>
        HEIC signifie <em>High Efficiency Image Container</em>. C&rsquo;est
        l&rsquo;implémentation par Apple de la norme <strong>HEIF</strong> (High
        Efficiency Image File Format), dans laquelle l&rsquo;image réelle est
        compressée avec <strong>HEVC (H.265)</strong> &mdash; le même codec vidéo
        moderne utilisé pour la vidéo efficace. Cette compression avancée explique
        pourquoi une photo HEIC fait généralement environ{" "}
        <strong>la moitié de la taille</strong> d&rsquo;un JPEG équivalent à
        qualité visuelle égale, et pourquoi elle peut aussi stocker des extras
        comme des cartes de profondeur, des Live Photos et des couleurs plus
        larges. Vous pouvez en savoir plus sur la façon dont les navigateurs
        gèrent les formats d&rsquo;image dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          la référence des formats d&rsquo;image de MDN
        </a>
        . Le décodage ici est assuré par{" "}
        <a
          href="https://github.com/strukturag/libheif"
          target="_blank"
          rel="noopener noreferrer"
        >
          libheif
        </a>
        , la bibliothèque open source pour HEIF/HEIC, compilée en WebAssembly.
      </p>

      <h2 id="compress-vs-convert">
        Compresser ou convertir : à quoi s&rsquo;attendre
      </h2>
      <p>
        Voici un point honnête que la plupart des convertisseurs ne vous diront
        pas : comme HEIC est déjà si efficace, une simple conversion
        HEIC&nbsp;&rarr;&nbsp;JPEG{" "}
        <strong>ne rendra pas toujours le fichier plus petit</strong> &mdash; et
        peut même parfois le rendre un peu plus gros. Ce n&rsquo;est pas un
        bogue ; c&rsquo;est le prix du passage à la compression plus ancienne et
        plus compatible du JPEG.
      </p>
      <p>
        Si votre objectif est réellement d&rsquo;obtenir des fichiers plus
        petits, vous disposez de trois leviers, que vous pouvez combiner :
      </p>
      <ul>
        <li>
          <strong>Choisissez WebP ou AVIF plutôt que JPEG.</strong> Ces formats
          modernes rivalisent avec l&rsquo;efficacité du HEIC, vous conservez donc
          une petite taille <em>et</em> gagnez une large compatibilité. AVIF,
          comme HEIC, repose sur une technologie de codec moderne et produit
          généralement le résultat le plus petit.
        </li>
        <li>
          <strong>Baissez le curseur de qualité.</strong> Passer de 90 à
          70&ndash;75 réduit le fichier de façon substantielle avec peu de
          changement visible.
        </li>
        <li>
          <strong>Redimensionnez l&rsquo;image.</strong> Une photo de téléphone de
          4032&times;3024 est bien plus grande que ce dont a besoin n&rsquo;importe
          quel écran. La réduire est la plus grande économie à elle seule pour le
          partage ou le web.
        </li>
      </ul>

      <h2 id="choosing-format">JPEG, WebP ou AVIF : lequel choisir</h2>
      <p>
        <strong>JPEG</strong> est l&rsquo;option sûre par défaut : tous les
        appareils, applications et sites web de la planète peuvent l&rsquo;ouvrir,
        ce qui le rend parfait pour envoyer des photos par e-mail, les téléverser
        sur un site qui refuse le HEIC, ou les envoyer à quelqu&rsquo;un sous
        Windows. <Link href="/fr/compress-jpeg">Compressez vos JPEG</Link>{" "}
        davantage quand vous voulez.
      </p>
      <p>
        <strong>WebP</strong> est largement pris en charge dans les navigateurs et
        applications modernes et est environ 25&ndash;35&nbsp;% plus petit que le
        JPEG &mdash; un excellent choix pour le web. <strong>AVIF</strong> est le
        plus économe en espace des trois et le plus proche parent du HEIC, idéal
        lorsque la petite taille compte le plus et que votre destination le prend
        en charge. Pas sûr ? Convertissez un échantillon des deux façons avec
        notre <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link>{" "}
        et comparez, ou lisez{" "}
        <Link href="/fr/blog/jpeg-vs-png-vs-webp-vs-avif">
          notre comparatif des formats
        </Link>
        .
      </p>

      <h2 id="privacy">Privé par conception, et open source</h2>
      <p>
        Votre pellicule est personnelle. La téléverser sur un site de conversion
        quelconque revient à confier à des inconnus des copies de vos photos
        &mdash; y compris tout ce qui apparaît à l&rsquo;arrière-plan.
        FileShrinking adopte une approche différente : vos fichiers HEIC sont
        décodés et ré-encodés <strong>localement dans votre navigateur</strong> et
        ne sont jamais transmis où que ce soit. Vous n&rsquo;avez pas non plus à
        nous croire sur parole &mdash; l&rsquo;ensemble du projet est{" "}
        <Link href="/fr/about">open source</Link>, donc la promesse de zéro envoi
        est quelque chose que n&rsquo;importe qui peut vérifier dans le code.
        Apprenez-en plus sur le fonctionnement de tout cela dans{" "}
        <Link href="/fr/blog/how-client-side-file-compression-works">
          notre explication sur la compression côté client
        </Link>
        .
      </p>

      <h2 id="tips">Conseils pour les meilleurs résultats</h2>
      <ul>
        <li>
          <strong>Vous l&rsquo;envoyez à quelqu&rsquo;un ou le téléversez quelque
          part ?</strong> Choisissez JPG : il est garanti de s&rsquo;ouvrir.
        </li>
        <li>
          <strong>Vous optimisez pour le web ou le stockage ?</strong> Choisissez
          AVIF ou WebP pour les fichiers les plus petits à qualité égale.
        </li>
        <li>
          <strong>Redimensionnez avant de convertir.</strong> Si la photo sera
          consultée sur un téléphone ou dans un document, la réduire économise
          bien plus que la qualité seule.
        </li>
        <li>
          <strong>Traitez par lot tout un AirDrop.</strong> Déposez toutes les
          photos d&rsquo;un coup et téléchargez-les ensemble dans un ZIP.
        </li>
      </ul>
    </>
  ),
};
