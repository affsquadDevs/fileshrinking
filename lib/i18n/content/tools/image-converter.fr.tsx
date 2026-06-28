import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Convertisseur d'images — JPEG, PNG, WebP et AVIF",
  metaDescription:
    "Convertissez vos images entre JPEG, PNG, WebP et AVIF en toute confidentialité dans votre navigateur. Sans envoi : vos fichiers ne quittent jamais votre appareil.",
  heading: "Convertisseur d'images",
  intro: (
    <>
      Convertissez vos images entre JPEG, PNG, WebP et AVIF directement dans
      votre navigateur. Déposez un fichier, choisissez le format dont vous avez
      besoin et téléchargez le résultat en quelques secondes : chaque conversion
      s'exécute sur votre appareil, donc rien n'est jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment convertir une image",
    description:
      "Convertissez entre JPEG, PNG, WebP et AVIF localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez votre image",
        text: "Glissez-déposez un JPEG, PNG, WebP, AVIF ou GIF sur la zone de dépôt, cliquez pour parcourir vos fichiers ou collez depuis le presse-papiers. Vous pouvez en mettre plusieurs en file d'attente à la fois.",
      },
      {
        name: "Choisissez le format de sortie",
        text: "Sélectionnez JPEG, PNG, WebP ou AVIF. Utilisez WebP ou AVIF pour les fichiers les plus légers et prêts pour le web, PNG lorsque vous avez besoin d'une transparence sans perte, ou JPEG pour une compatibilité maximale.",
      },
      {
        name: "Réglez la qualité",
        text: "Pour JPEG, WebP et AVIF, ajustez le curseur de qualité : environ 80 offre un excellent équilibre. La sortie PNG est toujours sans perte, il n'y a donc aucune qualité à définir.",
      },
      {
        name: "Téléchargez vos fichiers convertis",
        text: "Enregistrez chaque image convertie séparément ou récupérez-les toutes en une fois dans un ZIP. Changez le format ou la qualité et reconvertissez quand vous voulez.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur lorsque je les convertis ?",
      a: (
        <>
          Non. La conversion se déroule entièrement dans votre navigateur grâce à
          des codecs WebAssembly. L'image est décodée puis réencodée en mémoire
          sur votre propre appareil, donc vos fichiers ne touchent jamais un
          serveur : vous pouvez même vous déconnecter d'internet après le
          chargement de la page et cela continue de fonctionner.
        </>
      ),
      text: "Non. La conversion se déroule entièrement dans votre navigateur grâce à des codecs WebAssembly. L'image est décodée puis réencodée en mémoire sur votre propre appareil, donc vos fichiers ne touchent jamais un serveur. Vous pouvez vous déconnecter d'internet après le chargement de la page et cela continue de fonctionner.",
    },
    {
      q: "Le convertisseur d'images est-il gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans inscription, sans filigrane et
          sans limite sur le nombre de fichiers que vous convertissez ni sur leur
          taille, au-delà de ce que permet la mémoire de votre appareil. Le site
          est financé par des publicités peu intrusives.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite sur le nombre de fichiers que vous convertissez ni sur leur taille, au-delà de ce que permet la mémoire de votre appareil. Le site est financé par des publicités peu intrusives.",
    },
    {
      q: "La conversion va-t-elle affecter la qualité de l'image ?",
      a: (
        <>
          Cela dépend du format de destination. Convertir en PNG est sans perte,
          donc aucun détail n'est perdu. Convertir en JPEG, WebP ou AVIF se fait
          avec perte et réencode l'image à la qualité que vous choisissez : entre
          75 et 85, le résultat est visuellement indiscernable de l'original pour
          la plupart des photos. Comme le réencodage avec perte se cumule,
          convertissez toujours depuis votre source de la plus haute qualité
          plutôt que depuis une copie déjà compressée.
        </>
      ),
      text: "Cela dépend du format de destination. Convertir en PNG est sans perte, donc aucun détail n'est perdu. Convertir en JPEG, WebP ou AVIF se fait avec perte et réencode à la qualité que vous choisissez ; entre 75 et 85, le résultat est visuellement indiscernable de l'original pour la plupart des photos. Le réencodage avec perte se cumule, alors convertissez toujours depuis votre source de la plus haute qualité.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux convertir ?",
      a: (
        <>
          Il n'y a pas de limite stricte : elle n'est bornée que par la mémoire
          disponible de votre appareil. Les photos courantes de quelques
          mégaoctets et les grandes images de 20 à 50 MP se convertissent sans
          difficulté, et l'encodage AVIF est le plus gourmand en CPU, donc les
          très grandes images prennent simplement un peu plus de temps.
        </>
      ),
      text: "Il n'y a pas de limite stricte ; elle n'est bornée que par la mémoire disponible de votre appareil. Les photos courantes de quelques mégaoctets et les grandes images de 20 à 50 MP se convertissent sans difficulté. L'encodage AVIF est le plus gourmand en CPU, donc les très grandes images prennent un peu plus de temps.",
    },
    {
      q: "Vers quel format dois-je convertir ?",
      a: (
        <>
          Pour les photographies avec lesquelles vous voulez une large
          compatibilité, utilisez JPEG ou WebP. Pour les graphiques, logos,
          captures d'écran ou tout ce qui nécessite de la transparence, utilisez
          PNG ou WebP. Pour le fichier le plus petit possible avec une prise en
          charge par les navigateurs modernes, choisissez AVIF. WebP est l'option
          la plus polyvalente car elle gère à la fois les photos avec perte et la
          transparence sans perte.
        </>
      ),
      text: "Pour les photographies avec lesquelles vous voulez une large compatibilité, utilisez JPEG ou WebP. Pour les graphiques, logos, captures d'écran ou tout ce qui nécessite de la transparence, utilisez PNG ou WebP. Pour le fichier le plus petit possible avec une prise en charge par les navigateurs modernes, choisissez AVIF. WebP est l'option la plus polyvalente, car elle gère à la fois les photos avec perte et la transparence sans perte.",
    },
    {
      q: "Qu'arrive-t-il à la transparence quand je convertis en JPEG ?",
      a: (
        <>
          JPEG ne prend pas en charge de canal alpha, donc toute zone
          transparente est aplatie sur un fond uni lorsque vous convertissez en
          JPEG. Si votre image repose sur la transparence (par exemple un logo
          destiné à se poser sur différents fonds), convertissez plutôt en PNG ou
          WebP, qui conservent tous deux le canal alpha.
        </>
      ),
      text: "JPEG ne prend pas en charge de canal alpha, donc les zones transparentes sont aplaties sur un fond uni lorsque vous convertissez en JPEG. Si votre image repose sur la transparence, comme un logo, convertissez plutôt en PNG ou WebP, qui conservent tous deux le canal alpha.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi convertir entre formats d'image ?</h2>
      <p>
        Tous les formats d'image ne conviennent pas à chaque tâche. Un logo
        enregistré en JPEG paraît flou sur ses bords ; une photographie
        enregistrée en PNG peut être plusieurs fois plus volumineuse que
        nécessaire ; et un GIF vieux d'une décennie occupe bien plus d'espace
        qu'un équivalent moderne. Convertir une image vers un format plus adapté
        peut la rendre nettement plus petite, plus nette ou plus compatible avec
        ce sur quoi vous publiez, sans avoir à refaire de prise de vue ni à
        redessiner quoi que ce soit.
      </p>
      <p>
        La raison la plus courante pour laquelle les gens convertissent est de
        réduire les images pour le web. Passer une photo du JPEG au{" "}
        <Link href="/fr/compress-webp">WebP</Link> ou à l'
        <Link href="/fr/compress-avif">AVIF</Link> peut réduire sa taille d'un
        quart à la moitié à qualité visuelle égale, ce qui signifie des pages
        plus rapides et des factures de bande passante plus basses. D'autres
        convertissent dans l'autre sens : ils retransforment un WebP ou un AVIF
        en JPEG ou PNG universellement pris en charge afin qu'il s'ouvre dans des
        logiciels plus anciens ou puisse être joint à un e-mail. Comme ce
        convertisseur s'exécute intégralement sur votre appareil, vous pouvez
        faire tout cela sans confier vos images à un serveur distant.
      </p>

      <h2 id="lossy">Conversion sans perte et avec perte : ce qui change</h2>
      <p>
        Convertir une image implique toujours de la décoder puis de la réencoder
        dans un nouveau format, et le format que vous choisissez détermine si
        cette étape est <strong>sans perte</strong> ou{" "}
        <strong>avec perte</strong>. Le PNG est sans perte : chaque pixel est
        conservé exactement, c'est pourquoi il est idéal pour les graphiques et
        les captures d'écran, mais produit de gros fichiers pour les photos. Les
        formats JPEG, WebP et AVIF sont avec perte par défaut : ils écartent les
        détails que votre œil est le moins susceptible de remarquer afin de
        rendre le fichier bien plus petit, et un curseur de qualité contrôle
        l'agressivité de ce compromis.
      </p>
      <p>
        Un point essentiel à comprendre est que la conversion avec perte{" "}
        <strong>se cumule</strong>. Chaque fois que vous réencodez une image déjà
        en perte, un peu plus de détail est écarté, vous devriez donc toujours
        convertir depuis la source de la plus haute qualité dont vous disposez
        plutôt que depuis une copie déjà compressée. Convertir un JPEG avec perte{" "}
        <em>vers</em> du PNG ne restaurera pas non plus comme par magie les
        détails perdus : cela stocke simplement les pixels déjà dégradés sans
        perte, généralement dans un fichier plus volumineux. Pour les photos, une
        qualité de <strong>75 à 85</strong> en JPEG, WebP ou AVIF est le point
        idéal où le résultat est essentiellement indiscernable de l'original aux
        tailles d'affichage normales.
      </p>

      <h2 id="formats">Un guide rapide des quatre formats</h2>
      <p>
        Chaque format a une tâche qu'il accomplit le mieux. <strong>JPEG</strong>{" "}
        est le format photographique universel : pris en charge partout,
        excellent pour les images en tons continus, mais sans transparence.{" "}
        <strong>PNG</strong> est sans perte et prend en charge un canal alpha, ce
        qui en fait le bon choix pour les logos, icônes, captures d'écran et tout
        graphique nécessitant des bords nets ou un fond transparent.{" "}
        <strong>WebP</strong> est le polyvalent moderne : il gère à la fois les
        photos avec perte et la transparence sans perte et est généralement de 25
        à 35 % plus petit que le JPEG. <strong>AVIF</strong> produit
        habituellement les fichiers les plus petits de tous et prend également en
        charge la transparence, au prix d'un encodage plus lent et d'une prise en
        charge logicielle un peu plus restreinte. Vous pouvez lire une analyse
        faisant autorité de chacun d'eux dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          le guide des types de fichiers image de MDN
        </a>
        .
      </p>
      <p>
        En pratique : choisissez <strong>JPEG ou WebP</strong> pour les
        photographies, <strong>PNG ou WebP</strong> pour les graphiques et tout
        ce qui comporte de la transparence, et <strong>AVIF</strong> quand le
        fichier absolument le plus petit compte et que votre public utilise des
        navigateurs récents. N'oubliez pas que{" "}
        <strong>le JPEG n'a pas de transparence</strong>, donc convertir un PNG
        ou un WebP transparent en JPEG l'aplatira sur un fond uni. Si vous voulez
        seulement réduire un fichier sans changer son format, les compresseurs
        dédiés{" "}
        <Link href="/fr/compress-jpeg">JPEG</Link>,{" "}
        <Link href="/fr/compress-png">PNG</Link>,{" "}
        <Link href="/fr/compress-webp">WebP</Link> et{" "}
        <Link href="/fr/compress-avif">AVIF</Link> sont plus adaptés.
      </p>

      <h2 id="tips">Conseils pour des conversions propres</h2>
      <ul>
        <li>
          <strong>Convertissez depuis l'original.</strong> Partez de la source de
          la plus haute qualité dont vous disposez afin de ne pas recompresser
          des détails déjà perdus.
        </li>
        <li>
          <strong>Pensez à la transparence avant de choisir le JPEG.</strong> Si
          votre image comporte des zones transparentes que vous voulez conserver,
          choisissez PNG ou WebP : le JPEG ne peut pas stocker de canal alpha.
        </li>
        <li>
          <strong>Essayez d'abord le WebP pour le web.</strong> C'est le meilleur
          équilibre entre petite taille, prise en charge de la transparence et
          large compatibilité avec les navigateurs, ce qui en fait un choix par
          défaut sûr pour la plupart des sites web.
        </li>
        <li>
          <strong>Redimensionnez pendant que vous convertissez.</strong> Si
          l'image doit être affichée en petit, réduire ses dimensions fait
          économiser bien plus que le seul choix du format : utilisez l'option de
          redimensionnement intégrée ou le{" "}
          <Link href="/fr/image-resizer">redimensionneur d'images</Link> dédié.
        </li>
        <li>
          <strong>Comparez avant de décider.</strong> Convertissez la même source
          en WebP et en AVIF et vérifiez les tailles de fichier ainsi que leur
          rendu à votre taille d'affichage ; le gagnant varie d'une image à
          l'autre.
        </li>
      </ul>
    </>
  ),
};
