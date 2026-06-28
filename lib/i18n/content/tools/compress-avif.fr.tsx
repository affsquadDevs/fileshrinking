import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser AVIF — Convertisseur AVIF gratuit",
  metaDescription:
    "Convertissez et compressez vos images en AVIF dans votre navigateur. Privé, sans envoi ni inscription : vos fichiers ne quittent jamais votre appareil.",
  heading: "Compresseur et convertisseur AVIF",
  intro: (
    <>
      Transformez vos images JPEG, PNG, WebP, GIF ou AVIF existantes en fichiers
      AVIF minuscules et de haute qualité, directement dans votre navigateur.
      AVIF est le format d&rsquo;image moderne le plus compact : choisissez un
      niveau de qualité, déposez vos photos et téléchargez des fichiers
      ultralégers sans que rien ne soit jamais envoyé en ligne.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment convertir et compresser en AVIF",
    description:
      "Créez ou recompressez des images AVIF localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez vos images",
        text: "Glissez-déposez des fichiers JPEG, PNG, WebP, GIF ou AVIF sur la zone de dépôt, cliquez pour parcourir ou collez depuis le presse-papiers. Vous pouvez en ajouter plusieurs à la fois.",
      },
      {
        name: "Choisissez un niveau de qualité",
        text: "L'échelle de qualité d'AVIF est plus basse que celle de JPEG : une valeur par défaut autour de 55 rend déjà très bien. Augmentez-la pour des résultats quasi sans perte ou baissez-la pour obtenir les fichiers les plus petits possibles.",
      },
      {
        name: "Laissez le codeur AV1 travailler sur votre appareil",
        text: "Chaque image est encodée localement en AVIF. AV1 est gourmand en calcul, les grandes photos peuvent donc prendre quelques secondes : c'est normal et c'est ce qui rend les fichiers si petits.",
      },
      {
        name: "Téléchargez vos fichiers AVIF",
        text: "Enregistrez les images une par une ou récupérez-les toutes dans un ZIP. Ajustez la qualité et réencodez à tout moment pour trouver votre taille idéale.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers AVIF sont-ils envoyés sur un serveur ?",
      a: "Non. L'encodage se déroule entièrement sur votre appareil grâce à un codeur AV1 en WebAssembly. Vos images sont chargées en mémoire, converties en AVIF localement, puis vous sont rendues : rien n'est jamais envoyé, vous pouvez donc même vous déconnecter d'internet une fois la page chargée.",
      text: "Non. L'encodage se déroule entièrement sur votre appareil grâce à un codeur AV1 en WebAssembly. Vos images sont chargées en mémoire, converties en AVIF localement, puis vous sont rendues. Rien n'est jamais envoyé, vous pouvez donc vous déconnecter d'internet une fois la page chargée.",
    },
    {
      q: "Le compresseur AVIF est-il vraiment gratuit ?",
      a: "Oui : il est entièrement gratuit, sans inscription, sans filigrane et sans limite de nombre ni de taille de fichiers au-delà de la mémoire de votre appareil. Le site est financé par des publicités discrètes.",
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite de nombre ni de taille de fichiers au-delà de la mémoire de votre appareil. Le site est financé par des publicités discrètes.",
    },
    {
      q: "Quel est l'impact d'AVIF sur la qualité de l'image ?",
      a: (
        <>
          La compression AVIF est avec perte, mais son codeur basé sur AV1
          préserve les détails bien mieux que les anciens formats pour une même
          taille de fichier. Notez que l&rsquo;échelle de qualité se lit
          différemment : une valeur autour de <strong>50–60</strong> en AVIF rend
          généralement excellente, alors que le même chiffre en JPEG rendrait
          médiocre. Montez le curseur pour une fidélité quasi parfaite, ou
          baissez-le pour obtenir les fichiers les plus petits possibles.
        </>
      ),
      text: "La compression AVIF est avec perte, mais son codeur basé sur AV1 préserve les détails bien mieux que les anciens formats pour une même taille de fichier. L'échelle de qualité se lit différemment : autour de 50-60, le rendu est généralement excellent, alors que le même chiffre en JPEG rendrait médiocre. Montez le curseur pour une fidélité quasi parfaite ou baissez-le pour obtenir les fichiers les plus petits.",
    },
    {
      q: "Pourquoi l'encodage AVIF est-il lent ?",
      a: (
        <>
          AVIF utilise le codec AV1, qui est très gourmand en calcul : il
          effectue beaucoup plus de travail par pixel que JPEG ou WebP pour
          atteindre ses tailles de fichier minuscules. Exécuter ce codeur dans le
          navigateur avec WebAssembly signifie qu&rsquo;une grande photo peut
          prendre plusieurs secondes, et que les très grandes images (disons plus
          de 20 mégapixels) peuvent prendre nettement plus de temps. C&rsquo;est
          normal : l&rsquo;attente vous offre un fichier bien plus petit.
          Redimensionner au préalable accélère beaucoup le processus.
        </>
      ),
      text: "AVIF utilise le codec AV1, qui est très gourmand en calcul et effectue beaucoup plus de travail par pixel que JPEG ou WebP. Exécuter ce codeur dans le navigateur avec WebAssembly signifie qu'une grande photo peut prendre plusieurs secondes, et que les très grandes images peuvent prendre nettement plus de temps. C'est normal et redimensionner au préalable accélère le processus.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux convertir ?",
      a: "Il n'y a pas de limite stricte : cela dépend de la mémoire disponible sur votre appareil. Les photos courantes fonctionnent sans problème, et les grandes images de 20 à 50 MP sont aussi prises en charge, bien qu'elles s'encodent plus lentement car AV1 est intensif. Les lots sont traités un fichier à la fois pour limiter l'utilisation de la mémoire.",
      text: "Il n'y a pas de limite stricte ; cela dépend de la mémoire disponible sur votre appareil. Les photos courantes fonctionnent sans problème et les grandes images de 20 à 50 MP sont aussi prises en charge, bien qu'elles s'encodent plus lentement car AV1 est intensif. Les lots sont traités un fichier à la fois pour limiter l'utilisation de la mémoire.",
    },
    {
      q: "Quels navigateurs peuvent ouvrir les fichiers AVIF ?",
      a: (
        <>
          La prise en charge par les navigateurs est désormais large : Chrome,
          Edge, Firefox, Safari et Opera affichent tous l&rsquo;AVIF dans leurs
          versions récentes, et la plupart des téléphones aussi. Pour les
          navigateurs très anciens ou certaines applications de bureau qui
          n&rsquo;ont pas encore suivi, conservez une solution de repli en{" "}
          <Link href="/fr/compress-jpeg">JPEG</Link> ou{" "}
          <Link href="/fr/compress-webp">WebP</Link>, ou servez l&rsquo;AVIF dans
          un élément <code>&lt;picture&gt;</code> afin que le navigateur choisisse
          le meilleur format qu&rsquo;il sait lire.
        </>
      ),
      text: "La prise en charge par les navigateurs est désormais large : Chrome, Edge, Firefox, Safari et Opera affichent tous l'AVIF dans leurs versions récentes, et la plupart des téléphones aussi. Pour les navigateurs très anciens ou certaines applications de bureau, conservez une solution de repli en JPEG ou WebP, ou servez l'AVIF dans un élément picture afin que le navigateur choisisse le meilleur format qu'il sait lire.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi convertir des images en AVIF ?</h2>
      <p>
        AVIF est le format d&rsquo;image grand public le plus compact disponible
        aujourd&rsquo;hui. Bâti sur le codec vidéo libre de droits{" "}
        <strong>AV1</strong>, il produit régulièrement des fichiers{" "}
        <strong>30 à 50&nbsp;% plus petits que WebP</strong> et souvent deux fois
        plus petits qu&rsquo;un JPEG comparable, à qualité perçue égale. Pour les
        sites web riches en photos, cela se traduit directement par des
        chargements de page plus rapides, de meilleurs Core Web Vitals, des
        factures de bande passante réduites et une expérience plus fluide sur les
        connexions mobiles lentes.
      </p>
      <p>
        Au-delà de la simple taille, AVIF apporte des fonctionnalités vraiment
        modernes aux images fixes : la <strong>transparence alpha</strong>{" "}
        complète comme PNG, une large gamme de couleurs et la prise en charge du{" "}
        <strong>HDR</strong> (10 et 12 bits), ainsi que des modes avec et sans
        perte dans un seul format. Comme ce convertisseur fonctionne entièrement
        sur votre appareil, c&rsquo;est aussi la façon privée d&rsquo;adopter
        l&rsquo;AVIF : contrairement aux convertisseurs en ligne classiques, vos
        photos sont encodées avec une version WebAssembly d&rsquo;AV1 directement
        dans la page et ne voyagent jamais vers un serveur.
      </p>

      <h2 id="quality">Qualité, l&rsquo;échelle AVIF et la vitesse d&rsquo;encodage</h2>
      <p>
        AVIF est normalement utilisé comme un format <strong>avec perte</strong>,
        écartant les détails que l&rsquo;œil est le moins susceptible de
        remarquer, mais il le fait bien plus intelligemment que JPEG, en évitant
        les artefacts en blocs qui apparaissent quand on pousse trop les anciens
        formats. Une chose à savoir d&rsquo;emblée : les{" "}
        <strong>chiffres de qualité se lisent différemment</strong>. Un réglage
        proche de <strong>50–60</strong> en AVIF rend généralement excellent, là
        où la même valeur sur un JPEG rendrait grossier. C&rsquo;est pourquoi cet
        outil utilise par défaut une valeur autour de <strong>55</strong> :
        c&rsquo;est un point optimal, pas un compromis.
      </p>
      <p>
        La contrepartie honnête, c&rsquo;est la <strong>vitesse</strong>. AV1
        effectue une énorme quantité de calcul par pixel pour atteindre ces
        tailles minuscules, et l&rsquo;exécuter dans le navigateur via
        WebAssembly est plus lent qu&rsquo;un encodage JPEG ou WebP. Une photo
        courante se termine en quelques secondes ; une très grande image de plus
        de 20 mégapixels peut prendre nettement plus de temps, et un gros lot
        s&rsquo;additionne. C&rsquo;est normal : c&rsquo;est le prix de
        l&rsquo;efficacité d&rsquo;AVIF, pas un bug. Redimensionner avant
        d&rsquo;encoder est la plus grande accélération possible, et cela réduit
        encore davantage le résultat.
      </p>

      <h2 id="format">Qu&rsquo;est-ce qu&rsquo;AVIF et quand faut-il l&rsquo;utiliser ?</h2>
      <p>
        AVIF (AV1 Image File Format) stocke une ou plusieurs images encodées en
        AV1 dans un conteneur ISO base media, la même famille que MP4. Il prend
        en charge la transparence, l&rsquo;animation, la couleur large et le HDR,
        ce qui en fait un solide remplaçant unique de JPEG, PNG et même du GIF
        animé dans bien des cas. Vous pouvez lire le détail complet des capacités
        et de la compatibilité des navigateurs dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          la documentation de l&rsquo;image AVIF de MDN
        </a>
        .
      </p>
      <p>
        AVIF est un excellent choix par défaut pour les photographies et les
        images web riches destinées aux navigateurs modernes. Il est moins idéal
        lorsque vous avez besoin d&rsquo;une compatibilité universelle avec les
        anciens logiciels, lorsque les fichiers doivent être réédités de
        nombreuses fois (chaque passe avec perte en perd un peu) ou pour les
        graphismes plats simples où un <Link href="/fr/compress-png">PNG</Link>{" "}
        sans perte peut rivaliser avec lui. Si vous voulez une compatibilité un
        peu plus large avec une compression toujours excellente,{" "}
        <Link href="/fr/compress-webp">WebP</Link> est le juste milieu naturel,
        et notre <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link>{" "}
        vous permet de comparer les formats côte à côte. Pour réduire les images
        source trop grandes avant l&rsquo;encodage, faites appel au{" "}
        <Link href="/fr/image-resizer">redimensionneur d&rsquo;images</Link>.
      </p>

      <h2 id="tips">Conseils pour de meilleurs résultats AVIF</h2>
      <ul>
        <li>
          <strong>Faites confiance aux chiffres plus bas.</strong> Ne réglez pas
          la qualité AVIF à 80–90 par habitude du JPEG : commencez vers 55 et ne
          l&rsquo;augmentez que si vous voyez réellement une différence à la
          taille d&rsquo;affichage.
        </li>
        <li>
          <strong>Redimensionnez avant d&rsquo;encoder.</strong> Envoyer une
          image de 6000&nbsp;px qui s&rsquo;affiche à 1200&nbsp;px gaspille à la
          fois la taille du fichier et le temps d&rsquo;encodage. Redimensionner
          d&rsquo;abord rend la lente passe d&rsquo;AV1 nettement plus rapide.
        </li>
        <li>
          <strong>Conservez une solution de repli en JPEG ou WebP.</strong> Pour
          une portée maximale, servez l&rsquo;AVIF dans un élément{" "}
          <code>&lt;picture&gt;</code> avec une source en{" "}
          <Link href="/fr/compress-jpeg">JPEG</Link> ou{" "}
          <Link href="/fr/compress-webp">WebP</Link> afin que les clients plus
          anciens reçoivent quand même une image.
        </li>
        <li>
          <strong>Soyez patient avec les gros lots.</strong> Les économies
          d&rsquo;AVIF valent l&rsquo;attente. Mettez vos fichiers en file
          d&rsquo;attente, laissez le codeur les traiter un par un, puis
          téléchargez le tout dans un ZIP à la fin.
        </li>
      </ul>
    </>
  ),
};
