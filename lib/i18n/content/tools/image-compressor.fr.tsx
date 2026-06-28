import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresseur d'images — Gratuit et privé",
  metaDescription:
    "Compressez vos images JPEG, PNG, WebP, AVIF et GIF dans votre navigateur. 100 % privé, sans envoi ni inscription : vos photos ne quittent jamais votre appareil.",
  heading: "Compresseur d'images",
  intro: (
    <>
      Compressez et convertissez vos images JPEG, PNG, WebP, AVIF et GIF
      directement dans votre navigateur. Ajoutez vos photos, choisissez un
      format et une qualité, puis téléchargez des fichiers plus légers en
      quelques secondes : tout s&rsquo;exécute sur votre appareil, donc rien
      n&rsquo;est jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser une image",
    description:
      "Compressez ou convertissez n'importe quel format d'image courant en local dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez vos images",
        text: "Glissez-déposez vos fichiers JPEG, PNG, WebP, AVIF ou GIF sur la zone de dépôt, cliquez pour parcourir ou collez depuis le presse-papiers. Mélangez les formats librement : chaque fichier est traité séparément.",
      },
      {
        name: "Choisissez un format de sortie",
        text: "Laissez sur Même format pour recompresser sans changer le type, ou choisissez JPEG, PNG, WebP ou AVIF pour convertir. WebP et AVIF produisent les fichiers les plus légers pour les photos.",
      },
      {
        name: "Réglez la qualité (et redimensionnez si besoin)",
        text: "Utilisez le curseur de qualité — autour de 75 convient à la plupart des photos — ou le niveau sans perte pour le PNG. Vous pouvez aussi redimensionner par pourcentage ou en pixels exacts pour gagner encore plus de place.",
      },
      {
        name: "Téléchargez vos résultats",
        text: "Enregistrez les images une par une ou récupérez-les toutes dans un ZIP. Chaque fichier affiche sa taille d'origine, sa nouvelle taille et le pourcentage économisé, pour que vous puissiez réajuster et réessayer.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes images sont-elles envoyées sur un serveur ?",
      a: (
        <>
          Non. Chaque image que vous ajoutez est décodée et réencodée
          entièrement dans votre propre navigateur grâce à WebAssembly. Rien
          n&rsquo;est envoyé où que ce soit : il n&rsquo;y a aucune étape
          d&rsquo;envoi ni aucun serveur qui voie vos fichiers. Vous pouvez même
          couper votre connexion internet une fois la page chargée et continuer
          à compresser.
        </>
      ),
      text: "Non. Chaque image est décodée et réencodée entièrement dans votre propre navigateur grâce à WebAssembly. Rien n'est envoyé où que ce soit ; il n'y a aucune étape d'envoi ni aucun serveur qui voie vos fichiers. Vous pouvez couper votre connexion internet une fois la page chargée et continuer à compresser.",
    },
    {
      q: "Le compresseur d'images est-il gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans compte, sans filigrane et sans
          limites quotidiennes. Vous pouvez traiter autant d&rsquo;images que la
          mémoire de votre appareil le permet. Le site est maintenu grâce à des
          publicités discrètes affichées à côté de l&rsquo;article, jamais à
          l&rsquo;intérieur de l&rsquo;outil lui-même.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans compte, sans filigrane et sans limites quotidiennes. Vous pouvez traiter autant d'images que la mémoire de votre appareil le permet. Le site est financé par des publicités discrètes affichées à côté de l'article, pas à l'intérieur de l'outil.",
    },
    {
      q: "La compression réduira-t-elle la qualité de mes images ?",
      a: (
        <>
          Cela dépend du format et des réglages. Les formats avec perte comme
          JPEG, WebP et AVIF écartent les détails fins pour réduire le fichier,
          mais à une qualité d&rsquo;environ 75 le changement est généralement
          invisible. L&rsquo;optimisation sans perte du PNG ne supprime aucun
          détail : elle se contente de réécrire le fichier de façon plus
          efficace. Utilisez le curseur de qualité pour équilibrer la taille et
          la fidélité pour chaque travail.
        </>
      ),
      text: "Cela dépend du format et des réglages. Les formats avec perte comme JPEG, WebP et AVIF écartent les détails fins pour réduire le fichier, mais à une qualité d'environ 75 le changement est généralement invisible. L'optimisation sans perte du PNG ne supprime aucun détail ; elle se contente de réécrire le fichier de façon plus efficace. Utilisez le curseur de qualité pour équilibrer la taille et la fidélité.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite fixe : elle dépend uniquement de la
          mémoire disponible sur votre appareil. Les photos ordinaires de
          quelques mégaoctets et les grandes images de 20 à 50 MP fonctionnent
          confortablement aussi bien sur les téléphones que sur les ordinateurs
          portables. Les lots sont traités une image à la fois, ce qui maintient
          une faible consommation de mémoire même avec de nombreux gros
          fichiers.
        </>
      ),
      text: "Il n'y a pas de limite fixe ; elle dépend uniquement de la mémoire disponible sur votre appareil. Les photos ordinaires de quelques mégaoctets et les grandes images de 20-50 MP fonctionnent confortablement sur téléphones et ordinateurs portables. Les lots sont traités une image à la fois pour maintenir une faible consommation de mémoire.",
    },
    {
      q: "Quels formats d'image cet outil prend-il en charge ?",
      a: (
        <>
          Vous pouvez déposer des fichiers JPEG, PNG, WebP, AVIF et GIF, et
          exporter en JPEG, PNG, WebP ou AVIF. Laissez la sortie sur
          &laquo;&nbsp;Même format&nbsp;&raquo; pour recompresser sans changer
          le type, ou choisissez un autre format pour convertir. Pour un flux de
          travail dédié à chaque format, rendez-vous sur le compresseur{" "}
          <Link href="/fr/compress-jpeg">JPEG</Link>,{" "}
          <Link href="/fr/compress-png">PNG</Link>,{" "}
          <Link href="/fr/compress-webp">WebP</Link>,{" "}
          <Link href="/fr/compress-avif">AVIF</Link> ou{" "}
          <Link href="/fr/compress-gif">GIF</Link>.
        </>
      ),
      text: "Vous pouvez déposer des fichiers JPEG, PNG, WebP, AVIF et GIF, et exporter en JPEG, PNG, WebP ou AVIF. Laissez la sortie sur Même format pour recompresser sans changer le type, ou choisissez un autre format pour convertir. Des outils dédiés existent pour JPEG, PNG, WebP, AVIF et GIF.",
    },
    {
      q: "Quelle est la différence entre compresser et convertir une image ?",
      a: (
        <>
          Compresser conserve le même format et rend le fichier plus léger ;
          convertir change le format lui-même, par exemple en transformant une
          lourde capture d&rsquo;écran en PNG en un WebP bien plus léger. Ce
          centre fait les deux : réglez le format de sortie pour convertir, ou
          laissez-le identique pour seulement compresser. Si votre objectif
          principal est la conversion, le{" "}
          <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link>{" "}
          dédié est une option plus ciblée, et le{" "}
          <Link href="/fr/image-resizer">redimensionneur d&rsquo;images</Link>{" "}
          se charge de modifier les dimensions.
        </>
      ),
      text: "Compresser conserve le même format et rend le fichier plus léger ; convertir change le format lui-même, comme transformer un PNG lourd en un WebP plus léger. Ce centre fait les deux. Pour la conversion, le convertisseur d'images dédié est plus ciblé, et le redimensionneur d'images se charge de modifier les dimensions.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi compresser et convertir des images ?</h2>
      <p>
        Les images sont la partie la plus lourde de la plupart des pages web,
        des e-mails et des dossiers partagés. L&rsquo;appareil photo d&rsquo;un
        téléphone moderne peut produire des photos de 4 à 12 Mo, et les captures
        d&rsquo;écran enregistrées en PNG peuvent elles aussi être étonnamment
        volumineuses. Les images trop lourdes ralentissent les sites web, font
        dépasser les limites de taille des pièces jointes, remplissent le
        stockage cloud et grignotent les données mobiles. Les compresser
        préserve les détails qui comptent vraiment pour vous tout en réduisant
        drastiquement la taille du fichier, souvent de 60 à 90 % selon le format
        que vous choisissez.
      </p>
      <p>
        Cette page est le centre pour tous les formats d&rsquo;image. Comme elle
        s&rsquo;exécute <strong>entièrement sur votre appareil</strong>,
        c&rsquo;est aussi la manière privée de procéder. Les compresseurs en
        ligne classiques envoient vos photos sur un serveur distant, les y
        traitent et vous les renvoient. Ici, chaque image est lue en mémoire,
        réencodée avec un codec WebAssembly et vous est rendue directement. Vos
        photos ne transitent jamais par un réseau, ce qui compte pour les photos
        personnelles, les scans de pièces d&rsquo;identité, les contrats et tout
        ce que vous préféreriez ne pas confier au serveur d&rsquo;un inconnu.
      </p>

      <h2 id="lossy">Avec perte ou sans perte : l&rsquo;arbitrage central</h2>
      <p>
        Tous les formats d&rsquo;image se rangent dans l&rsquo;une de deux
        catégories. La compression <strong>avec perte</strong> — utilisée par
        JPEG, et par les modes par défaut de WebP et AVIF — supprime
        définitivement les détails que l&rsquo;œil humain a le moins de chances
        de remarquer, et c&rsquo;est ainsi qu&rsquo;elle obtient des gains aussi
        importants. Le curseur de qualité contrôle l&rsquo;agressivité de
        l&rsquo;opération : les valeurs plus élevées conservent plus de détails
        et produisent des fichiers plus gros, tandis que les valeurs plus basses
        économisent plus d&rsquo;espace mais peuvent introduire des
        &laquo;&nbsp;artefacts&nbsp;&raquo; visibles, comme un effet de blocs ou
        des halos autour des contours. La compression{" "}
        <strong>sans perte</strong> — utilisée par PNG et GIF, et un mode
        optionnel de WebP — réécrit le fichier de façon plus efficace sans
        supprimer un seul pixel, de sorte que l&rsquo;image est identique bit
        pour bit une fois décodée. Le revers, c&rsquo;est que les gains sans
        perte sont bien plus modestes.
      </p>
      <p>
        La règle pratique : utilisez des formats avec perte pour les
        photographies et les images réalistes, où une qualité de 70 à 80 est
        généralement indiscernable de l&rsquo;original, et utilisez des formats
        sans perte pour les graphiques, les logos, les captures d&rsquo;écran et
        tout ce qui comporte des contours nets ou du texte, où les artefacts de
        la compression avec perte sont évidents. N&rsquo;oubliez pas que la
        compression avec perte est <strong>cumulative</strong> : travaillez
        toujours à partir de votre original de la plus haute qualité plutôt que
        de réenregistrer une copie déjà compressée.
      </p>

      <h2 id="formats">Choisir le bon format</h2>
      <p>
        Le choix du format importe autant que le réglage de qualité. En guise de
        guide rapide : <strong>JPEG</strong> est le choix universel pour les
        photos sans transparence ; <strong>PNG</strong> est idéal pour les
        graphiques plats, les captures d&rsquo;écran et tout ce qui nécessite un
        fond transparent ; <strong>WebP</strong> produit généralement des
        fichiers de 25 à 35 % plus légers que JPEG tout en prenant en charge la
        transparence et l&rsquo;animation ; <strong>AVIF</strong> est le plus
        récent et habituellement le plus léger de tous pour les photographies,
        au prix d&rsquo;un encodage plus lent ; et <strong>GIF</strong> est un
        ancien format d&rsquo;animation qui est presque toujours surpassé par
        une conversion en WebP ou en vidéo. Le panorama de référence sur le
        comportement de chaque format dans les navigateurs se trouve dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          le guide des types et formats de fichiers image de MDN
        </a>
        .
      </p>
      <p>
        Si vous savez déjà avec quel format vous travaillez, les outils dédiés
        vous offrent les contrôles et les explications les plus pertinents : le{" "}
        <Link href="/fr/compress-jpeg">compresseur JPEG</Link> pour les photos,
        le <Link href="/fr/compress-png">compresseur PNG</Link> pour les
        graphiques sans perte, les outils{" "}
        <Link href="/fr/compress-webp">WebP</Link> et{" "}
        <Link href="/fr/compress-avif">AVIF</Link> pour les fichiers modernes
        les plus légers, et le{" "}
        <Link href="/fr/compress-gif">compresseur GIF</Link> pour les
        animations. Pour faire passer un lot de fichiers d&rsquo;un format à un
        autre, utilisez le{" "}
        <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link> ;
        pour modifier les dimensions en pixels, recourez au{" "}
        <Link href="/fr/image-resizer">redimensionneur d&rsquo;images</Link>.
      </p>

      <h2 id="tips">Conseils pratiques pour les meilleurs résultats</h2>
      <ul>
        <li>
          <strong>Redimensionnez avant de compresser.</strong> Si une image ne
          sera jamais affichée qu&rsquo;à 1200 px de large, livrer un original de
          6000 px gaspille la majeure partie du fichier. Réduire la taille
          permet généralement d&rsquo;économiser plus que ne le pourrait jamais
          le curseur de qualité.
        </li>
        <li>
          <strong>Adaptez le format au contenu.</strong> Les photos vont en
          JPEG, WebP ou AVIF ; les logos, les icônes et les captures
          d&rsquo;écran restent plus nets et plus légers en PNG. Convertir une
          photo en PNG vers WebP peut la réduire d&rsquo;un ordre de grandeur.
        </li>
        <li>
          <strong>Conservez une copie maîtresse.</strong> Comme le réencodage
          avec perte se cumule, compressez toujours à partir de votre original
          et non d&rsquo;un fichier que vous avez exporté auparavant.
        </li>
        <li>
          <strong>Comparez avant de valider.</strong> Essayez d&rsquo;abord
          &laquo;&nbsp;Équilibré&nbsp;&raquo;, puis relancez en
          &laquo;&nbsp;Plus petit&nbsp;&raquo; et vérifiez si vous repérez la
          différence à la taille à laquelle vous afficherez réellement
          l&rsquo;image.
        </li>
        <li>
          <strong>Regroupez les images similaires.</strong> Les photos du même
          appareil ou les captures du même écran rendent généralement très bien
          avec un seul réglage commun, vous pouvez donc les traiter en une seule
          passe.
        </li>
      </ul>
    </>
  ),
};
