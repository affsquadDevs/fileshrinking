import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresseur PDF — Gratuit, privé, dans le navigateur",
  metaDescription:
    "Compressez vos PDF dans votre navigateur. Recompressez les images intégrées pour réduire les PDF scannés et riches en images, sans envoi ni inscription.",
  heading: "Compresseur PDF",
  intro: (
    <>
      Réduisez la taille des PDF scannés et riches en images directement dans
      votre navigateur. Cet outil recompresse les images intégrées à votre
      document et supprime les métadonnées superflues, de sorte que le fichier
      devient plus léger tandis que votre texte reste net, et rien n&rsquo;est
      jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser un PDF",
    description:
      "Réduisez un PDF localement dans votre navigateur en quatre étapes, sans rien envoyer.",
    steps: [
      {
        name: "Ajoutez votre PDF",
        text: "Glissez-déposez votre PDF dans la zone de dépôt ou cliquez pour le sélectionner. Le fichier est lu directement dans votre navigateur : il n'est jamais envoyé où que ce soit.",
      },
      {
        name: "Choisissez un niveau de compression",
        text: "Sélectionnez un préréglage ou ajustez finement le curseur de qualité d'image. Équilibré convient à la plupart des documents ; choisissez Le plus petit pour le gain maximal sur les scans et les fichiers riches en photos.",
      },
      {
        name: "Laissez le traitement se faire sur votre appareil",
        text: "Les images intégrées sont sous-échantillonnées et réencodées en JPEG, et les métadonnées sont supprimées, le tout en local. Vous verrez la taille d'origine, la nouvelle taille et le pourcentage économisé.",
      },
      {
        name: "Téléchargez le PDF plus petit",
        text: "Enregistrez votre fichier optimisé. Si le résultat devait être plus volumineux que votre original, l'outil conserve l'original afin que vous n'obteniez jamais un fichier plus gros.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers PDF sont-ils envoyés sur un serveur ?",
      a: (
        <>
          Non. Chaque PDF est ouvert et entièrement réécrit dans votre
          navigateur à l&rsquo;aide de pdf-lib et d&rsquo;un encodeur
          d&rsquo;images WebAssembly. Rien n&rsquo;est envoyé : il n&rsquo;y a
          aucun serveur auquel transmettre votre document. Vous pouvez même
          vous déconnecter d&rsquo;internet une fois la page chargée, et cela
          fonctionne toujours.
        </>
      ),
      text: "Non. Chaque PDF est ouvert et entièrement réécrit dans votre navigateur à l'aide de pdf-lib et d'un encodeur d'images WebAssembly. Rien n'est envoyé et il n'y a aucun serveur auquel transmettre votre document. Vous pouvez vous déconnecter d'internet une fois la page chargée, et cela fonctionne toujours.",
    },
    {
      q: "Le compresseur PDF est-il vraiment gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans inscription, sans filigrane
          apposé sur vos pages et sans limite quotidienne de fichiers ni de
          pages. Le seul plafond pratique est la mémoire de votre appareil. Le
          site est financé par des publicités discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane sur vos pages et sans limite quotidienne de fichiers ni de pages. Le seul plafond pratique est la mémoire de votre appareil. Le site est financé par des publicités discrètes.",
    },
    {
      q: "La compression réduira-t-elle la qualité de mon PDF ?",
      a: (
        <>
          Elle n&rsquo;affecte que les images intégrées, qui sont
          sous-échantillonnées et réencodées en JPEG ; le texte et les
          graphiques vectoriels restent nets et entièrement sélectionnables.
          Les réglages de qualité d&rsquo;image plus élevés gardent les photos
          nettes, tandis que les plus bas économisent davantage d&rsquo;espace.
          Les PDF scannés (qui sont en réalité des images) montreront le
          compromis le plus visible.
        </>
      ),
      text: "Elle n'affecte que les images intégrées, qui sont sous-échantillonnées et réencodées en JPEG ; le texte et les graphiques vectoriels restent nets et sélectionnables. Les réglages de qualité d'image plus élevés gardent les photos nettes, tandis que les plus bas économisent davantage d'espace. Les PDF scannés, qui sont en réalité des images, montrent le compromis le plus visible.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite stricte : cela dépend de la quantité de
          mémoire libre dont dispose votre appareil. Les documents typiques de
          quelques mégaoctets sont instantanés, et les gros PDF scannés de 50 à
          100 Mo fonctionnent généralement sur un ordinateur portable moderne.
          Les fichiers très volumineux utilisent plus de RAM, car tout le PDF
          est conservé en mémoire pendant sa réécriture.
        </>
      ),
      text: "Il n'y a pas de limite stricte ; cela dépend de la quantité de mémoire libre dont dispose votre appareil. Les documents typiques de quelques mégaoctets sont instantanés, et les gros PDF scannés de 50 à 100 Mo fonctionnent généralement sur un ordinateur portable moderne. Les fichiers très volumineux utilisent plus de RAM, car tout le PDF est conservé en mémoire pendant sa réécriture.",
    },
    {
      q: "Pourquoi mon PDF n'a-t-il pas du tout rétréci ?",
      a: (
        <>
          Cet outil réduit les PDF en recompressant les images intégrées. Si
          votre document est surtout composé de texte, de tableaux ou de
          graphiques vectoriels, il n&rsquo;y a pas de grandes images à
          optimiser, donc il y a peu à supprimer. Lorsqu&rsquo;un PDF
          recompressé finirait par être plus volumineux que l&rsquo;original,
          l&rsquo;outil conserve votre fichier original intact.
        </>
      ),
      text: "Cet outil réduit les PDF en recompressant les images intégrées. Si votre document est surtout composé de texte, de tableaux ou de graphiques vectoriels, il n'y a pas de grandes images à optimiser, donc il y a peu à supprimer. Lorsqu'un PDF recompressé finirait par être plus volumineux que l'original, l'outil conserve votre fichier original intact.",
    },
    {
      q: "La compression conserve-t-elle un texte recherchable dans mon PDF ?",
      a: (
        <>
          Oui. L&rsquo;outil ne pixellise jamais vos pages et ne convertit
          jamais le texte en images, de sorte que tout texte sélectionnable et
          recherchable de l&rsquo;original le reste ensuite. Seules les données
          d&rsquo;image intégrées au fichier sont réencodées, et la mise en page
          est préservée.
        </>
      ),
      text: "Oui. L'outil ne pixellise jamais vos pages et ne convertit jamais le texte en images, de sorte que tout texte sélectionnable et recherchable de l'original le reste ensuite. Seules les données d'image intégrées au fichier sont réencodées, et la mise en page est préservée.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi les fichiers PDF sont-ils si volumineux ?</h2>
      <p>
        Un PDF peut gonfler jusqu&rsquo;à des dizaines de mégaoctets pour des
        raisons qui ne sautent pas aux yeux quand on regarde la page. Le plus
        grand coupable, de loin, ce sont les{" "}
        <strong>images intégrées</strong> : lorsque vous scannez un document,
        exportez des diapositives ou déposez une photo de téléphone dans un
        rapport, l&rsquo;image en pleine résolution est stockée dans le fichier,
        souvent à 300 DPI ou plus, bien plus de détail qu&rsquo;un écran ou un
        destinataire d&rsquo;e-mail ne verra jamais. Parmi les autres facteurs
        courants figurent les <strong>polices intégrées</strong>, les objets
        dupliqués issus d&rsquo;éditions répétées et les{" "}
        <strong>métadonnées</strong> résiduelles telles que les miniatures, les
        annotations et l&rsquo;historique des révisions.
      </p>
      <p>
        Les documents scannés sont le cas extrême. Un &laquo;&nbsp;PDF
        scanné&nbsp;&raquo; est en réalité une pile de photographies de papier,
        avec une grande image par page et peu ou pas de texte réel. C&rsquo;est
        pourquoi un scan de 10 pages peut être plus volumineux qu&rsquo;un
        rapport texte de 200 pages. Ces fichiers riches en images et scannés
        sont précisément là où ce compresseur excelle.
      </p>
      <p>
        Il est utile de voir un PDF comme un conteneur de type zip plutôt que
        comme une unique image plate. Un rapport nativement numérique exporté
        depuis un traitement de texte est surtout constitué d&rsquo;instructions
        de texte compactes plus quelques polices intégrées, il reste donc petit.
        Dès l&rsquo;instant où vous ajoutez des graphiques haute résolution, des
        photos de produits ou des captures d&rsquo;écran pleine page, le fichier
        hérite de toutes leurs données de pixels. Éditer et réenregistrer à
        répétition dans certaines applications peut aussi laisser des copies
        orphelines d&rsquo;images remplacées, gonflant silencieusement le
        fichier avec des données qui ne sont même plus visibles sur la page.
      </p>

      <h2 id="how-it-works">Comment fonctionne ce compresseur PDF</h2>
      <p>
        Soyons précis sur ce qui se passe, car l&rsquo;honnêteté compte plus
        qu&rsquo;une promesse tape-à-l&rsquo;œil de &laquo;&nbsp;90&nbsp;% plus
        petit&nbsp;&raquo;. Cet outil ouvre votre PDF, repère les images qui y
        sont intégrées et{" "}
        <strong>sous-échantillonne</strong> celles qui sont plus grandes que
        nécessaire, puis{" "}
        <strong>les réencode en JPEG</strong> à la qualité que vous choisissez.
        Il supprime aussi les métadonnées non essentielles. Il reconstruit
        ensuite le document avec{" "}
        <a
          href="https://pdf-lib.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf-lib
        </a>{" "}
        et un encodeur d&rsquo;images WebAssembly, le tout à l&rsquo;intérieur de
        l&rsquo;onglet du navigateur.
      </p>
      <p>
        Ce qu&rsquo;il <strong>ne</strong> fait pas est tout aussi important. Il
        n&rsquo;aplatit pas vos pages en images, de sorte que votre{" "}
        <strong>texte reste réel, sélectionnable et recherchable</strong>, et
        que les graphiques vectoriels restent nets à n&rsquo;importe quel niveau
        de zoom. Le revers de la médaille : si votre PDF est surtout du texte,
        des tableaux ou de l&rsquo;art vectoriel, il n&rsquo;y a presque rien
        qu&rsquo;un recompresseur d&rsquo;images puisse rogner, et le gain sera
        faible. Dans ce cas, l&rsquo;outil{" "}
        <strong>renvoie simplement votre fichier original</strong> : il ne vous
        rend jamais quelque chose de plus volumineux que ce avec quoi vous avez
        commencé.
      </p>
      <p>
        Les deux réglages que vous contrôlez correspondent directement à ces
        deux leviers. Le
        <strong> curseur de qualité d&rsquo;image</strong> détermine
        l&rsquo;agressivité avec laquelle chaque image est réencodée en JPEG :
        plus haut conserve intacts le détail fin et les dégradés, plus bas en
        rejette davantage pour un fichier plus petit. Les préréglages limitent
        aussi les dimensions maximales en pixels des images intégrées, de sorte
        qu&rsquo;une photo surdimensionnée est{" "}
        <strong>sous-échantillonnée</strong> à une résolution raisonnable avant
        d&rsquo;être réencodée. Le sous-échantillonnage est généralement
        l&rsquo;origine des plus grandes économies, car diviser par deux la
        largeur et la hauteur d&rsquo;une image supprime environ les
        trois quarts de ses pixels. Tout est traité un fichier à la fois, de
        sorte que l&rsquo;utilisation de la mémoire reste prévisible, même sur
        un téléphone.
      </p>

      <h2 id="format">Ce qu&rsquo;est réellement un PDF, et le modèle de confidentialité</h2>
      <p>
        Le PDF (Portable Document Format) a été créé par Adobe et est désormais
        une norme ISO ouverte (ISO 32000). Un PDF est un conteneur
        d&rsquo;objets : descriptions de pages, polices, tracés vectoriels et
        flux d&rsquo;images, chacun pouvant utiliser sa propre compression.
        Comme les images sont stockées sous forme de flux distincts, elles
        peuvent être remplacées par des versions plus petites et réencodées sans
        toucher au reste du document : c&rsquo;est le mécanisme sur lequel
        s&rsquo;appuie cet outil. Vous pouvez lire la présentation du format par
        Adobe sur la{" "}
        <a
          href="https://www.adobe.com/acrobat/about-adobe-pdf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          page de référence Adobe PDF
        </a>
        .
      </p>
      <p>
        La confidentialité est la raison de faire cela dans un navigateur plutôt
        que d&rsquo;envoyer vers un site web. Les PDF sont souvent les fichiers
        les <em>plus</em> sensibles que les gens compressent : contrats,
        déclarations d&rsquo;impôts, dossiers médicaux, scans de pièces
        d&rsquo;identité et accords signés. Avec un compresseur en ligne
        classique, tout cela quitte votre machine et se retrouve sur le serveur
        de quelqu&rsquo;un d&rsquo;autre. Ici, votre document est lu en mémoire,
        réécrit sur votre appareil et vous est directement rendu. Rien
        n&rsquo;est transmis, journalisé ni stocké : vous pouvez vous déconnecter
        d&rsquo;internet une fois la page chargée et l&rsquo;outil continue de
        fonctionner.
      </p>
      <p>
        Cette approche local-first présente aussi un avantage pratique : pas de
        files d&rsquo;attente, pas de plafonds de taille par fichier imposés par
        un serveur, et pas d&rsquo;attente qu&rsquo;un envoi puis un
        téléchargement se terminent. La vitesse ne dépend que de votre propre
        matériel. Le compromis, c&rsquo;est que les fichiers très volumineux
        s&rsquo;appuient sur la mémoire de votre appareil pendant leur
        réécriture, de sorte qu&rsquo;un scan extrêmement grand sur un téléphone
        ancien peut être lent ; le diviser au préalable en PDF plus petits est
        une solution simple.
      </p>

      <h2 id="tips">Conseils pour des PDF les plus petits possible</h2>
      <ul>
        <li>
          <strong>Scannez à un DPI plus bas.</strong> 150 à 200 DPI suffisent
          amplement pour la lecture à l&rsquo;écran et l&rsquo;e-mail ; 600 DPI
          quadruple les données pour un détail que vous ne verrez que rarement.
          Réglez la résolution avant de scanner pour le gain le plus facile de
          tous.
        </li>
        <li>
          <strong>Choisissez d&rsquo;abord Équilibré, puis Le plus petit.</strong>{" "}
          Commencez par le préréglage Équilibré, vérifiez le résultat, puis
          relancez avec Le plus petit et comparez. Sur les scans riches en
          photos, le réglage le plus bas peut à nouveau réduire la taille de
          près de moitié avec peu de différence visible.
        </li>
        <li>
          <strong>Compressez les images sources avant de les insérer.</strong>{" "}
          Si vous créez un PDF à partir de photos ou de captures d&rsquo;écran,
          réduisez-les d&rsquo;abord avec le{" "}
          <Link href="/fr/image-compressor">compresseur d&rsquo;images</Link> ou
          le{" "}
          <Link href="/fr/compress-jpeg">compresseur JPEG</Link>. Une entrée
          plus légère signifie un PDF plus léger.
        </li>
        <li>
          <strong>Redimensionnez les images surdimensionnées au
          préalable.</strong> Une photo de 6000 pixels sur une page A4, c&rsquo;est
          du détail gaspillé. Utilisez le{" "}
          <Link href="/fr/image-resizer">redimensionneur d&rsquo;images</Link> ou
          convertissez vers un format moderne avec le{" "}
          <Link href="/fr/image-converter">convertisseur d&rsquo;images</Link>{" "}
          avant d&rsquo;assembler le document.
        </li>
        <li>
          <strong>N&rsquo;attendez pas de miracles des PDF textuels.</strong> Si
          un fichier est presque entièrement du texte et qu&rsquo;il ne rétrécit
          quasiment pas, c&rsquo;est normal : il n&rsquo;y avait simplement
          aucune image lourde à optimiser.
        </li>
      </ul>
    </>
  ),
};
