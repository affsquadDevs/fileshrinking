import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser PNG — Optimiseur PNG gratuit",
  metaDescription:
    "Optimisez vos images PNG dans le navigateur avec OxiPNG : sans perte, privé, sans envoi. Ou convertissez en WebP pour des fichiers bien plus légers.",
  heading: "Compresseur de PNG",
  intro: (
    <>
      Optimisez vos images PNG directement dans votre navigateur avec OxiPNG, un
      optimiseur sans perte qui réduit la taille des fichiers sans toucher au
      moindre pixel. Conservez la transparence et les bords nets intacts, ou
      convertissez en WebP pour un gain bien plus important. Rien n&rsquo;est
      jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser un PNG",
    description:
      "Optimisez vos images PNG sans perte dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez vos images PNG",
        text: "Glissez-déposez vos fichiers PNG sur la zone de dépôt, cliquez pour parcourir ou collez depuis le presse-papiers. Vous pouvez en ajouter plusieurs à la fois.",
      },
      {
        name: "Choisissez un niveau d'optimisation",
        text: "Choisissez Rapide, Équilibré ou Maximum. Les niveaux supérieurs cherchent plus longuement un encodage sans perte plus petit : ils prennent donc un peu plus de temps mais grappillent un peu plus.",
      },
      {
        name: "Optimisez sur votre appareil",
        text: "Chaque PNG est réécrit localement avec OxiPNG. Vous verrez la taille d'origine, la nouvelle taille et le pourcentage économisé pour chaque fichier, avec tous les pixels préservés.",
      },
      {
        name: "Téléchargez — ou convertissez pour gagner plus",
        text: "Téléchargez les fichiers un par un ou tous ensemble dans un ZIP. Si une photo en PNG reste volumineuse, basculez la sortie en WebP pour un résultat bien plus léger et adapté au web.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers PNG sont-ils envoyés sur un serveur ?",
      a: (
        <>
          Non. Chaque PNG est optimisé localement dans votre navigateur grâce à
          WebAssembly. Vos images ne quittent jamais votre appareil et il
          n&rsquo;y a aucun serveur vers lequel les envoyer ; vous pouvez même
          vous déconnecter d&rsquo;internet une fois la page chargée et tout
          continue de fonctionner.
        </>
      ),
      text: "Non. Chaque PNG est optimisé localement dans votre navigateur grâce à WebAssembly. Vos images ne quittent jamais votre appareil et il n'y a aucun serveur vers lequel les envoyer. Vous pouvez vous déconnecter d'internet une fois la page chargée et tout continue de fonctionner.",
    },
    {
      q: "Le compresseur de PNG est-il vraiment gratuit ?",
      a: (
        <>
          Oui, il est entièrement gratuit, sans inscription, sans filigrane et
          sans limite de nombre de fichiers ni de taille au-delà de ce que la
          mémoire de votre appareil peut gérer. Le site est financé par des
          publicités discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite de nombre de fichiers ni de taille au-delà de ce que la mémoire de votre appareil peut gérer. Le site est financé par des publicités discrètes.",
    },
    {
      q: "Optimiser mon PNG réduira-t-il sa qualité ?",
      a: (
        <>
          Non, l&rsquo;optimisation de PNG avec OxiPNG est{" "}
          <strong>totalement sans perte</strong>. Chaque pixel est conservé à
          l&rsquo;identique, y compris la transparence ; OxiPNG se contente de
          réécrire le fichier de façon plus efficace. La contrepartie, c&rsquo;est
          que le gain sans perte est modeste, généralement de 5 à 30 %. Si vous
          convertissez plutôt en WebP, cette étape est avec perte et peut
          modifier légèrement l&rsquo;image, mais réduit la taille bien
          davantage.
        </>
      ),
      text: "Non. L'optimisation de PNG avec OxiPNG est totalement sans perte. Chaque pixel est conservé à l'identique, y compris la transparence ; OxiPNG se contente de réécrire le fichier de façon plus efficace. Le gain sans perte est modeste, généralement de 5 à 30 %. Convertir en WebP est avec perte mais réduit la taille bien davantage.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux optimiser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite stricte : cela dépend de la mémoire
          disponible sur votre appareil. Les téléphones et ordinateurs portables
          gèrent sans peine les captures d&rsquo;écran et logos courants, et même
          les grands PNG en haute résolution. Les gros lots sont traités un
          fichier à la fois pour limiter l&rsquo;utilisation de la mémoire.
        </>
      ),
      text: "Il n'y a pas de limite stricte ; cela dépend de la mémoire disponible sur votre appareil. Les captures d'écran courantes, les logos et même les grands PNG en haute résolution fonctionnent sans problème. Les gros lots sont traités un fichier à la fois pour limiter l'utilisation de la mémoire.",
    },
    {
      q: "Pourquoi ma photo en PNG reste-t-elle énorme après optimisation ?",
      a: (
        <>
          Le PNG est sans perte : il ne peut donc pas écarter le détail
          photographique comme le font JPEG ou WebP — une photo en couleurs
          réelles a tout simplement besoin de beaucoup de données en PNG.
          L&rsquo;optimisation élimine le superflu, mais la vraie solution pour
          les photos est de convertir vers un format avec perte. Essayez nos
          outils <Link href="/fr/compress-webp">WebP</Link> ou{" "}
          <Link href="/fr/compress-avif">AVIF</Link> pour que les fichiers de
          photos ne pèsent qu&rsquo;une fraction de leur taille.
        </>
      ),
      text: "Le PNG est sans perte : il ne peut donc pas écarter le détail photographique comme le font JPEG ou WebP ; une photo en couleurs réelles a besoin de beaucoup de données en PNG. L'optimisation élimine le superflu, mais la vraie solution pour les photos est de convertir vers un format avec perte comme WebP ou AVIF.",
    },
    {
      q: "L'optimisation conserve-t-elle la transparence de mon PNG ?",
      a: (
        <>
          Oui. Le canal alpha (transparence) est conservé à l&rsquo;identique :
          les logos, icônes et éléments d&rsquo;interface à fond transparent
          ressortent identiques pixel par pixel, simplement dans un fichier plus
          léger. La conversion en WebP conserve aussi la transparence ; la
          conversion en JPEG non, car JPEG n&rsquo;a pas de canal alpha.
        </>
      ),
      text: "Oui. Le canal alpha (transparence) est conservé à l'identique : les logos, icônes et éléments d'interface à fond transparent ressortent identiques pixel par pixel dans un fichier plus léger. WebP conserve aussi la transparence ; JPEG non, car il n'a pas de canal alpha.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi compresser ou convertir un PNG ?</h2>
      <p>
        Le PNG est partout : c&rsquo;est le format par défaut des captures
        d&rsquo;écran, le choix de prédilection pour les logos et icônes, et le
        standard pour tout graphisme nécessitant un fond transparent. Le hic,
        c&rsquo;est que les fichiers PNG sont souvent plus volumineux que
        nécessaire. Les éditeurs d&rsquo;images et les outils de capture
        enregistrent des fichiers généreux et non optimisés, avec des métadonnées
        superflues, des réglages de compression peu optimaux et des données de
        couleur inutiles. Optimiser élimine ce gaspillage pour que les pages se
        chargent plus vite, que les pièces jointes s&rsquo;envoient plus
        rapidement et que le stockage dure plus longtemps.
      </p>
      <p>
        Comme cet outil s&rsquo;exécute entièrement sur votre appareil,
        c&rsquo;est aussi la manière privée de procéder. Les optimiseurs en ligne
        traditionnels envoient vos images vers un serveur distant, les y traitent
        et vous les renvoient. Ici, chaque PNG est lu en mémoire, réécrit avec
        une version WebAssembly d&rsquo;<strong>OxiPNG</strong>, puis vous est
        rendu directement : vos fichiers ne transitent jamais par un réseau, ce
        qui compte lorsqu&rsquo;une capture d&rsquo;écran ou un élément de design
        contient des informations sensibles.
      </p>

      <h2 id="lossless">Optimisation sans perte vs. conversion avec perte</h2>
      <p>
        Le PNG est un format <strong>sans perte</strong> : il reproduit chaque
        pixel exactement, sans artefacts de compression et avec une prise en
        charge complète de la transparence. Cette fidélité est la raison
        d&rsquo;être du PNG, mais elle limite aussi à quel point un PNG peut
        rétrécir. OxiPNG conserve votre image{" "}
        <strong>parfaite pixel par pixel</strong> : il trouve seulement une façon
        plus efficace de stocker les mêmes données en réduisant la palette de
        couleurs lorsque c&rsquo;est possible, en choisissant de meilleurs
        filtres et en supprimant les blocs inutiles. Soyons honnêtes sur les
        chiffres : le gain sans perte est{" "}
        <strong>modeste, généralement de 5 à 30 %</strong>, et un PNG déjà
        optimisé risque de ne presque pas rétrécir.
      </p>
      <p>
        Lorsque vous avez besoin d&rsquo;une réduction spectaculaire, la réponse
        n&rsquo;est pas un meilleur PNG, mais un format différent. Convertir un
        PNG en <Link href="/fr/compress-webp">WebP</Link> ou en{" "}
        <Link href="/fr/compress-avif">AVIF</Link> applique une compression avec
        perte qui peut réduire la taille du fichier de 60 à 90 % tout en
        continuant de prendre en charge la transparence. La contrepartie, c&rsquo;est
        que la conversion avec perte peut introduire de subtiles modifications :
        elle est donc idéale pour les photographies et les images complexes,
        tandis que le PNG sans perte reste le meilleur choix pour les graphismes
        aux bords nets où chaque pixel compte. Cet outil vous laisse choisir :
        conservez le PNG pour la fidélité, ou basculez la sortie en WebP pour la
        taille.
      </p>

      <h2 id="format">Qu&rsquo;est-ce qu&rsquo;un PNG et quand l&rsquo;utiliser ?</h2>
      <p>
        Le PNG (Portable Network Graphics) a été créé comme un remplaçant de GIF
        libre de brevets et sans perte. Il utilise la compression DEFLATE
        associée à des filtres de prédiction par ligne, et prend en charge un
        canal alpha complet de 8 bits pour une transparence douce. Cela le rend
        excellent pour les{" "}
        <strong>
          logos, icônes, captures d&rsquo;écran, dessins au trait, graphiques et
          toute image aux bords nets, à couleur plate ou contenant du texte
        </strong>{" "}
        : du contenu que les formats avec perte rendent flou ou entourent de
        halos. Vous pouvez consulter les détails techniques dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          la référence des formats d&rsquo;image de MDN
        </a>
        .
      </p>
      <p>
        Le PNG est le <strong>mauvais</strong> choix pour les photographies.
        Comme il n&rsquo;écarte jamais le détail, une photo à tons continus
        devient un PNG énorme, souvent bien plus volumineux que la même image en{" "}
        <Link href="/fr/compress-jpeg">JPEG</Link> ou en WebP. Si vous avez
        l&rsquo;habitude d&rsquo;enregistrer vos photos en PNG, cette seule
        habitude est probablement votre plus grande source de poids inutile.
        Optez pour le PNG quand vous avez besoin de bords nets ou de
        transparence, et pour un format avec perte quand vous avez une photo.
        Vous ne savez pas lequel choisir ? Notre{" "}
        <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link> vous
        permet d&rsquo;essayer les deux et de comparer les résultats côte à côte.
      </p>

      <h2 id="tips">Conseils pour obtenir les meilleurs résultats</h2>
      <ul>
        <li>
          <strong>Adaptez le niveau d&rsquo;optimisation à la tâche.</strong>{" "}
          Utilisez &laquo;&nbsp;Rapide&nbsp;&raquo; pour une passe rapide sur de
          nombreux fichiers, et &laquo;&nbsp;Maximum&nbsp;&raquo; quand exprimer
          le moindre octet d&rsquo;une seule image phare vaut le temps de
          traitement supplémentaire.
        </li>
        <li>
          <strong>Redimensionnez avant d&rsquo;optimiser.</strong> Une capture
          d&rsquo;écran 4K affichée à 800 px de large, c&rsquo;est surtout des
          pixels gaspillés. Utilisez l&rsquo;option de redimensionnement intégrée
          pour un gain bien plus important que ce que l&rsquo;optimisation sans
          perte peut offrir à elle seule.
        </li>
        <li>
          <strong>Convertissez les photos, ne luttez pas contre elles.</strong>{" "}
          Si un &laquo;&nbsp;PNG&nbsp;&raquo; est en réalité une photo, basculez
          la sortie en <Link href="/fr/compress-webp">WebP</Link> au lieu
          d&rsquo;attendre des miracles de l&rsquo;optimisation sans perte.
        </li>
        <li>
          <strong>Réservez le PNG à la transparence.</strong> Quand vous avez
          besoin d&rsquo;un fond transparent et d&rsquo;une large compatibilité,
          le PNG sans perte est le choix sûr, et OxiPNG conserve ce canal alpha
          parfait pixel par pixel.
        </li>
      </ul>
    </>
  ),
};
