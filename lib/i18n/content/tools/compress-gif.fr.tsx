import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser un GIF — Optimiseur de GIF gratuit",
  metaDescription:
    "Compressez un GIF en WebP ou PNG dans votre navigateur. 100 % privé, sans envoi : vos fichiers restent sur votre appareil. Pour les GIF animés, convertissez-les en vidéo.",
  heading: "Compresseur de GIF",
  intro: (
    <>
      Transformez un GIF en une image WebP ou PNG bien plus légère, directement dans
      votre navigateur : rien n&rsquo;est jamais envoyé. Notez que cet outil convertit
      uniquement la <strong>première image</strong> et ne conserve pas l&rsquo;animation.
      Pour réduire un GIF <em>animé</em> tout en gardant le mouvement, convertissez-le
      plutôt en une{" "}
      <Link href="/fr/compress-mp4">vidéo MP4 minuscule</Link>.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser un GIF",
    description:
      "Convertissez un GIF en un WebP ou PNG plus léger localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez votre GIF",
        text: "Glissez-déposez votre fichier .gif dans la zone de dépôt, cliquez pour parcourir ou collez-le depuis le presse-papiers. Vous pouvez en ajouter plusieurs à la fois.",
      },
      {
        name: "Choisissez un format de sortie",
        text: "Choisissez WebP pour le fichier le plus léger et prêt pour le web, ou PNG pour une copie sans perte et parfaitement compatible de la première image.",
      },
      {
        name: "Réglez la qualité",
        text: "Pour le WebP, faites glisser le curseur de qualité : autour de 75 offre un excellent équilibre entre taille et détail. Le PNG est toujours sans perte.",
      },
      {
        name: "Téléchargez votre fichier",
        text: "Enregistrez les images une par une ou toutes à la fois dans un ZIP. Relancez avec d'autres réglages à tout moment pour comparer les résultats.",
      },
    ],
  },
  faqs: [
    {
      q: "Est-ce que mon GIF reste animé ?",
      a: (
        <>
          Non, et c&rsquo;est le point le plus important à connaître. Cet outil
          intégré au navigateur convertit la <strong>première image</strong> de votre
          GIF en une seule image fixe WebP ou PNG. Il ne conserve pas l&rsquo;animation.
          Si votre GIF bouge et que vous voulez garder ce mouvement pour une fraction
          de la taille, convertissez-le plutôt en une courte vidéo avec notre{" "}
          <Link href="/fr/compress-mp4">compresseur MP4</Link> ou notre{" "}
          <Link href="/fr/video-compressor">compresseur vidéo</Link>.
        </>
      ),
      text: "Non. Cet outil convertit la première image de votre GIF en une seule image fixe WebP ou PNG et ne conserve pas l'animation. Pour garder le mouvement pour une fraction de la taille, convertissez un GIF animé en une courte vidéo avec notre compresseur MP4 ou notre compresseur vidéo.",
    },
    {
      q: "Mes fichiers GIF sont-ils envoyés sur un serveur ?",
      a: "Non. Chaque fichier est traité localement dans votre navigateur. Vos GIF ne quittent jamais votre appareil et il n'y a aucun serveur où les envoyer : vous pouvez même vous déconnecter d'internet une fois la page chargée, et cela fonctionne toujours.",
      text: "Non. Chaque fichier est traité localement dans votre navigateur. Vos GIF ne quittent jamais votre appareil et il n'y a aucun serveur où les envoyer. Vous pouvez vous déconnecter d'internet une fois la page chargée, et cela fonctionne toujours.",
    },
    {
      q: "Le compresseur de GIF est-il vraiment gratuit ?",
      a: "Oui, il est entièrement gratuit, sans inscription, sans filigrane et sans limite de nombre ou de taille de fichiers au-delà de ce que la mémoire de votre appareil peut gérer. Le site est financé par des publicités discrètes.",
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite de nombre ou de taille de fichiers au-delà de ce que la mémoire de votre appareil peut gérer. Le site est financé par des publicités discrètes.",
    },
    {
      q: "La conversion va-t-elle réduire la qualité ?",
      a: (
        <>
          Pour un GIF statique, la conversion en WebP améliore généralement la qualité{" "}
          <em>et</em> réduit la taille du fichier, car le WebP prend en charge des
          millions de couleurs alors que le GIF est limité à 256. Choisissez{" "}
          <strong>PNG</strong> pour un résultat sans perte, ou utilisez le curseur de
          qualité avec <strong>WebP</strong> pour sacrifier un peu de détail au profit
          d&rsquo;un fichier beaucoup plus léger. Autour de 75, l&rsquo;équilibre est
          excellent.
        </>
      ),
      text: "Pour un GIF statique, la conversion en WebP améliore généralement la qualité et réduit la taille du fichier, car le WebP prend en charge des millions de couleurs alors que le GIF est limité à 256. Choisissez PNG pour un résultat sans perte, ou utilisez le curseur de qualité avec WebP pour sacrifier un peu de détail au profit d'un fichier beaucoup plus léger. Autour de 75, l'équilibre est bon.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux traiter ?",
      a: "Il n'y a pas de limite stricte : cela dépend de la mémoire disponible sur votre appareil. Les téléphones et les ordinateurs portables gèrent sans problème les GIF classiques de quelques mégaoctets, et même les fichiers plus volumineux fonctionnent bien. Comme tout s'exécute en mémoire, les fichiers très volumineux consomment plus de RAM, alors fermez les autres onglets gourmands si vous atteignez une limite.",
      text: "Il n'y a pas de limite stricte ; cela dépend de la mémoire disponible sur votre appareil. Les GIF classiques de quelques mégaoctets et même les fichiers plus volumineux fonctionnent bien. Comme tout s'exécute en mémoire, les fichiers très volumineux consomment plus de RAM, alors fermez les autres onglets gourmands si vous atteignez une limite.",
    },
    {
      q: "Dois-je utiliser WebP ou PNG en sortie ?",
      a: (
        <>
          Utilisez <strong>WebP</strong> pour le fichier le plus léger : il est idéal
          pour le web et prend en charge les modes avec et sans perte. Utilisez{" "}
          <strong>PNG</strong> lorsque vous avez besoin d&rsquo;une compatibilité
          maximale avec d&rsquo;anciens logiciels ou d&rsquo;une copie sans perte
          garantie, par exemple un logo ou une icône que vous avez extrait d&rsquo;un
          GIF.
        </>
      ),
      text: "Utilisez WebP pour le fichier le plus léger ; il est idéal pour le web et prend en charge les modes avec et sans perte. Utilisez PNG lorsque vous avez besoin d'une compatibilité maximale avec d'anciens logiciels ou d'une copie sans perte garantie, comme un logo ou une icône extrait d'un GIF.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi convertir ou compresser un GIF ?</h2>
      <p>
        Le format GIF est partout, mais c&rsquo;est l&rsquo;une des manières les moins
        efficaces de stocker une image. Un GIF est limité à une palette de seulement{" "}
        <strong>256 couleurs</strong> par image et utilise un schéma de compression
        ancien et léger ; les photographies et les graphiques détaillés enregistrés en
        GIF présentent donc des bandes et pèsent bien plus lourd qu&rsquo;ils ne le
        devraient. Les GIF animés sont encore pires : chaque image est stockée comme
        une image complète, c&rsquo;est pourquoi un court extrait peut gonfler jusqu&rsquo;à
        plusieurs mégaoctets, parfois plus qu&rsquo;une vidéo en haute définition du
        même contenu.
      </p>
      <p>
        Cet outil s&rsquo;attaque au cas statique. Il lit la première image de votre
        GIF et la réencode en un <strong>WebP</strong> ou un{" "}
        <strong>PNG</strong> moderne, ce qui produit généralement un fichier beaucoup
        plus léger et de meilleure qualité. Comme tout se passe sur votre appareil,
        c&rsquo;est aussi privé : votre GIF est décodé en mémoire, converti avec un
        encodeur WebAssembly, puis vous est rendu directement. Il ne touche jamais le
        réseau.
      </p>
      <p>
        Si votre GIF est animé, continuez votre lecture : le geste vraiment utile
        n&rsquo;est pas de compresser le GIF, mais de le convertir en vidéo, où les
        économies sont énormes.
      </p>

      <h2 id="animation">GIF animé ? Convertissez-le plutôt en vidéo</h2>
      <p>
        Soyons transparents : ce convertisseur intégré au navigateur produit une seule
        image fixe, il ne peut donc pas conserver l&rsquo;animation. C&rsquo;est une
        limitation délibérée et honnête, pas un bug. Pour un GIF animé, la bonne
        solution est de le remplacer par un véritable format vidéo comme le MP4 (H.264)
        ou le WebM. Les codecs vidéo modernes utilisent la compensation de mouvement
        (ils ne stockent que ce qui change entre les images), de sorte que la même
        animation ressort généralement <strong>90 % plus légère, voire davantage</strong>,
        tout en étant plus nette.
      </p>
      <p>
        Ce n&rsquo;est pas seulement notre avis ; c&rsquo;est une recommandation de
        performance web de longue date. Le web.dev de Google recommande de{" "}
        <a
          href="https://web.dev/articles/replace-gifs-with-videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          remplacer les GIF animés par de la vidéo
        </a>{" "}
        précisément pour cette raison. Pour le faire ici, envoyez votre GIF animé à
        notre <Link href="/fr/compress-mp4">compresseur MP4</Link> ou au plus
        polyvalent <Link href="/fr/video-compressor">compresseur vidéo</Link>, qui
        prend aussi en charge le MOV, le WebM et plus encore. Vous obtiendrez un
        fichier minuscule qui se lit en douceur et boucle automatiquement, tout comme
        le faisait le GIF d&rsquo;origine.
      </p>

      <h2 id="format">Qu&rsquo;est-ce qu&rsquo;un GIF, et pourquoi WebP ou PNG l&rsquo;emporte</h2>
      <p>
        Le GIF (Graphics Interchange Format) remonte à 1987 et utilise la compression
        LZW avec une palette indexée plafonnée à 256 couleurs. Il prend en charge une
        animation simple et un seul niveau de transparence binaire, ce qui l&rsquo;a
        rendu emblématique des débuts du web, mais ces contraintes sont précisément la
        raison pour laquelle il peine avec tout ce qui dépasse les petits graphiques
        plats. Vous pouvez en lire le contexte technique dans la{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format"
          target="_blank"
          rel="noopener noreferrer"
        >
          référence des formats d&rsquo;image de MDN
        </a>
        .
      </p>
      <p>
        Convertir l&rsquo;image en <strong>WebP</strong> supprime la limite de 256
        couleurs, ajoute une transparence alpha complète et prend en charge les modes
        avec et sans perte ; les fichiers sont donc généralement bien plus légers pour
        une qualité égale ou supérieure. <strong>PNG</strong> est le bon choix lorsque
        vous avez besoin d&rsquo;une copie sans perte garantie ou de la plus large
        compatibilité logicielle, par exemple pour extraire un logo ou un sticker
        d&rsquo;un GIF. Si vous voulez ensuite explorer d&rsquo;autres cibles comme
        l&rsquo;AVIF, notre <Link href="/fr/compress-webp">outil WebP</Link> et notre{" "}
        <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link> vous
        permettent de comparer les formats côte à côte.
      </p>

      <h2 id="tips">Conseils pour de meilleurs résultats</h2>
      <ul>
        <li>
          <strong>GIF animé ? Passez à la vidéo.</strong> Ne luttez pas contre le
          format. Convertissez-le avec le{" "}
          <Link href="/fr/compress-mp4">compresseur MP4</Link> pour la plus grande
          économie et la lecture la plus fluide.
        </li>
        <li>
          <strong>Choisissez PNG pour les graphiques, WebP pour la taille.</strong> Les
          logos, les icônes et les illustrations aux bords nets restent précis en PNG ;
          pour le web, le WebP est presque toujours le choix le plus léger.
        </li>
        <li>
          <strong>Redimensionnez avant de convertir.</strong> Si l&rsquo;image
          s&rsquo;affichera sur 400 px de large, réduisez-la avec l&rsquo;option de
          redimensionnement intégrée : cela économise bien plus que les réglages de
          qualité à eux seuls.
        </li>
        <li>
          <strong>Comparez le résultat.</strong> Essayez le WebP à la qualité 75,
          puis relancez plus bas ou passez au PNG et vérifiez si vous repérez la
          différence à la taille de votre écran.
        </li>
      </ul>
    </>
  ),
};
