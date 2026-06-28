import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresseur vidéo — gratuit, dans le navigateur",
  metaDescription:
    "Compressez des vidéos MP4, MOV, WebM, MKV et AVI dans votre navigateur avec ffmpeg. Privé et local : aucun envoi, votre vidéo reste sur votre appareil.",
  heading: "Compresseur vidéo",
  intro: (
    <>
      Compressez des vidéos MP4, MOV, WebM, MKV et AVI directement dans votre
      navigateur grâce à une version WebAssembly de ffmpeg. Choisissez un
      préréglage de qualité, déposez votre clip et téléchargez un MP4 H.264 plus
      léger : votre séquence n&rsquo;est jamais envoyée nulle part.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser une vidéo",
    description:
      "Compressez une vidéo localement dans votre navigateur avec ffmpeg en quatre étapes.",
    steps: [
      {
        name: "Ajoutez votre vidéo",
        text: "Glissez-déposez un fichier vidéo dans la zone de dépôt ou cliquez pour le parcourir. Pour une expérience optimale, gardez les fichiers en dessous d'environ 150 Mo.",
      },
      {
        name: "Choisissez un préréglage de qualité",
        text: "Choisissez un préréglage ou affinez le curseur CRF. Les préréglages les plus bas réduisent la résolution et le débit pour obtenir des fichiers bien plus petits.",
      },
      {
        name: "Laissez l'encodage se faire sur votre appareil",
        text: "ffmpeg ré-encode la vidéo en H.264/MP4 localement. Une barre de progression indique l'avancement : les clips plus grands ou plus longs prennent plus de temps.",
      },
      {
        name: "Téléchargez le résultat",
        text: "Enregistrez le MP4 plus léger. Si le résultat n'est pas plus petit, votre fichier était déjà efficace : essayez une qualité ou une résolution plus basse et relancez.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes vidéos sont-elles envoyées vers un serveur ?",
      a: (
        <>
          Non. Toute la compression s&rsquo;exécute dans votre navigateur grâce à
          une version WebAssembly de ffmpeg. Votre vidéo est chargée en mémoire,
          ré-encodée sur votre propre machine, puis vous est rendue directement.
          Rien n&rsquo;est jamais envoyé, et aucun serveur ne pourrait stocker
          votre séquence.
        </>
      ),
      text: "Non. Toute la compression s'exécute dans votre navigateur grâce à une version WebAssembly de ffmpeg. Votre vidéo est chargée en mémoire, ré-encodée sur votre propre machine, puis vous est rendue. Rien n'est envoyé et aucun serveur ne pourrait stocker votre séquence.",
    },
    {
      q: "Le compresseur vidéo est-il vraiment gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans inscription, sans filigrane et
          sans frais par fichier. Comme tout le travail se fait sur votre
          appareil, il n&rsquo;y a aucun coût de serveur à répercuter. Le site est
          financé par des publicités discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans frais par fichier. Comme tout le travail se fait sur votre appareil, il n'y a aucun coût de serveur à répercuter. Le site est financé par des publicités discrètes.",
    },
    {
      q: "La compression va-t-elle réduire la qualité de ma vidéo ?",
      a: (
        <>
          La compression vidéo est avec perte, donc certains détails sont
          supprimés. Le curseur CRF détermine son intensité : autour de 23-28, le
          rendu est très proche de l&rsquo;original pour la plupart des séquences.
          Réduire la résolution (par exemple de la 4K vers le 1080p) économise le
          plus d&rsquo;espace tout en gardant une image nette à des tailles de
          visionnage normales.
        </>
      ),
      text: "La compression vidéo est avec perte, donc certains détails sont supprimés. Le curseur CRF détermine son intensité ; autour de 23-28, le rendu est très proche de l'original pour la plupart des séquences. Réduire la résolution (par exemple de la 4K vers le 1080p) économise le plus d'espace tout en gardant une image nette à des tailles normales.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite stricte, mais comme tout s&rsquo;exécute
          dans votre navigateur avec un ffmpeg mono-thread, nous recommandons des
          fichiers en dessous d&rsquo;environ <strong>150&nbsp;Mo</strong>. Les
          vidéos volumineuses ou longues consomment beaucoup de mémoire et peuvent
          être lentes, et peuvent échouer sur les téléphones ou les ordinateurs
          portables anciens dotés de peu de RAM. Pour les gros clips, coupez-les
          d&rsquo;abord ou compressez-les sur le navigateur d&rsquo;un ordinateur
          de bureau.
        </>
      ),
      text: "Il n'y a pas de limite stricte, mais comme tout s'exécute dans votre navigateur avec un ffmpeg mono-thread, nous recommandons des fichiers en dessous d'environ 150 Mo. Les vidéos volumineuses ou longues consomment beaucoup de mémoire, peuvent être lentes et peuvent échouer sur les téléphones ou les ordinateurs portables anciens dotés de peu de RAM. Pour les gros clips, coupez-les d'abord ou utilisez le navigateur d'un ordinateur de bureau.",
    },
    {
      q: "Pourquoi la compression vidéo dans le navigateur est-elle plus lente que sur d'autres sites ?",
      a: (
        <>
          La plupart des compresseurs en ligne envoient votre fichier vers un
          puissant serveur multicœur qui réalise l&rsquo;encodage à votre place.
          Cet outil refuse délibérément de faire cela : il exécute ffmpeg
          localement pour que votre vidéo reste privée. Un seul thread de
          navigateur est plus lent qu&rsquo;une ferme de serveurs, donc quelques
          minutes de séquence peuvent prendre un peu de temps. Ce compromis vous
          garantit une confidentialité totale.
        </>
      ),
      text: "La plupart des compresseurs en ligne envoient votre fichier vers un puissant serveur multicœur qui l'encode à votre place. Cet outil refuse délibérément de faire cela ; il exécute ffmpeg localement pour que votre vidéo reste privée. Un seul thread de navigateur est plus lent qu'une ferme de serveurs, donc quelques minutes de séquence peuvent prendre un peu de temps. Ce compromis vous garantit une confidentialité totale.",
    },
    {
      q: "Dans quel format la vidéo compressée est-elle produite ?",
      a: (
        <>
          Le résultat est une <strong>vidéo H.264 dans un conteneur MP4</strong>,
          que votre fichier d&rsquo;entrée ait été un MOV, un WebM, un MKV ou un
          AVI. Le H.264/MP4 se lit sur pratiquement tous les téléphones,
          navigateurs, téléviseurs et logiciels de montage, ce qui en fait le
          choix le plus sûr pour partager et publier.
        </>
      ),
      text: "Le résultat est une vidéo H.264 dans un conteneur MP4, que votre fichier d'entrée ait été un MOV, un WebM, un MKV ou un AVI. Le H.264/MP4 se lit sur pratiquement tous les téléphones, navigateurs, téléviseurs et logiciels de montage, ce qui en fait le choix le plus sûr pour partager et publier.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi compresser une vidéo dans votre navigateur ?</h2>
      <p>
        La vidéo est de loin le média le plus lourd auquel la plupart des gens
        sont confrontés. Une minute de séquence 4K filmée au téléphone peut
        atteindre plusieurs centaines de mégaoctets, ce qui est trop volumineux
        pour un envoi par e-mail, malcommode à téléverser, et remplit vite le
        stockage cloud et la pellicule du téléphone. Compresser un clip peut
        réduire sa taille de moitié ou plus tout en le gardant parfaitement
        regardable, ce qui facilite son partage sur les applications de
        messagerie, son ajout en pièce jointe ou sa publication sur un site
        imposant une limite de taille.
      </p>
      <p>
        Ce qui distingue cet outil, c&rsquo;est <strong>l&rsquo;endroit</strong>{" "}
        où le travail s&rsquo;effectue. Vos séquences brutes contiennent souvent
        des moments privés : la famille, votre domicile, votre lieu de travail,
        des documents à l&rsquo;écran. Un compresseur en ligne classique envoie
        tout cela vers un serveur distant. Ici, la vidéo est décodée, ré-encodée
        et ré-enregistrée entièrement dans l&rsquo;onglet de votre navigateur,
        si bien qu&rsquo;elle ne circule jamais sur internet. Une fois la page
        chargée, vous pouvez même couper votre connexion et la compression
        fonctionnera quand même.
      </p>
      <p>
        Il existe une foule de raisons quotidiennes de vouloir un fichier plus
        léger. Les applications de messagerie et les fournisseurs d&rsquo;e-mail
        plafonnent les pièces jointes, souvent à 25&nbsp;Mo ou moins, si bien
        qu&rsquo;un ré-encodage rapide fait toute la différence entre un message
        qui part et un message qui est rejeté. Les plateformes de cours, les
        portails de candidature et les formulaires de contact refusent
        fréquemment tout ce qui dépasse quelques mégaoctets. Et si vous archivez
        des années de clips familiaux, diviser par deux chaque fichier se
        rentabilise de nombreuses fois en stockage que vous n&rsquo;aurez pas à
        acheter.
      </p>

      <h2 id="how-it-works">
        Comment fonctionne l&rsquo;encodeur dans le navigateur (et ses limites)
      </h2>
      <p>
        En coulisses, cet outil exécute <strong>ffmpeg</strong>, le moteur
        multimédia de référence du secteur, compilé en WebAssembly pour
        s&rsquo;exécuter nativement dans votre navigateur. C&rsquo;est
        véritablement puissant, mais cela s&rsquo;accompagne de compromis
        honnêtes qu&rsquo;il faut connaître. La version est{" "}
        <strong>mono-thread</strong>, elle ne peut donc pas répartir
        l&rsquo;encodage sur tous les cœurs de votre processeur comme le font une
        application de bureau ou un serveur cloud. Résultat : la compression est
        ici <strong>plus lente</strong> qu&rsquo;un service basé sur le
        téléversement qui tourne sur une machine multicœur, et quelques minutes
        de vidéo peuvent demander un peu de patience.
      </p>
      <p>
        Elle est aussi <strong>limitée par la mémoire</strong>. Le fichier
        entier doit tenir dans la mémoire disponible du navigateur pendant son
        traitement, c&rsquo;est pourquoi nous recommandons de garder les entrées
        en dessous d&rsquo;environ <strong>150&nbsp;Mo</strong>. Les vidéos très
        volumineuses ou très longues peuvent être lentes et échouer complètement
        sur les téléphones ou les ordinateurs portables anciens dotés de peu de
        RAM. Si vous vous heurtez à un mur, coupez le clip pour ne garder que la
        partie nécessaire, baissez la résolution ou exécutez-le sur le navigateur
        d&rsquo;un ordinateur de bureau disposant de plus de mémoire. Ce sont de
        véritables contraintes du fait que tout se fait localement : l&rsquo;atout
        est que votre vidéo reste la vôtre.
      </p>
      <p>
        Quelques habitudes rendent l&rsquo;encodage local bien plus agréable.
        Fermez les autres onglets et applications gourmands avant de commencer
        pour que le navigateur ait de la marge. Gardez l&rsquo;onglet au
        premier plan : certains navigateurs ralentissent les onglets en
        arrière-plan, ce qui peut bloquer un long encodage. Et laissez-lui du
        temps sans recharger : la barre de progression est réelle, et recharger
        en plein encodage jette à la poubelle le travail déjà accompli.
      </p>

      <h2 id="settings">CRF, résolution et audio : les trois leviers</h2>
      <p>
        Trois réglages déterminent la taille finale de votre fichier. Le levier
        le plus important à lui seul est la <strong>résolution</strong>. Réduire
        de la 4K vers le 1080p, ou du 1080p vers le 720p, supprime un nombre
        énorme de pixels de chaque image et reste généralement invisible, sauf si
        vous regardez sur un grand écran et de près. Si vous avez seulement
        besoin d&rsquo;un clip pour un téléphone ou pour l&rsquo;intégrer à un
        site, réduire la résolution le rapetissera bien plus que de simplement
        ajuster la qualité.
      </p>
      <p>
        Le deuxième levier est le <strong>CRF</strong> (Constant Rate Factor), le
        contrôle de qualité du H.264. Les valeurs plus basses signifient une
        meilleure qualité et des fichiers plus volumineux ; les plus élevées, des
        fichiers plus petits avec une compression plus visible. Un CRF de{" "}
        <strong>23-28</strong> est le bon compromis pratique pour la plupart des
        séquences. Le troisième levier est le{" "}
        <strong>débit audio</strong> : la voix sonne bien à un débit faible,
        tandis que la musique profite de davantage. Si votre vidéo est surtout de
        la parole, réduire le débit audio économise de l&rsquo;espace sans perte
        notable. La sortie par défaut est du{" "}
        <strong>H.264 dans un conteneur MP4</strong> précisément parce
        qu&rsquo;il se lit presque partout.
      </p>
      <ul>
        <li>
          <strong>Adaptez la résolution à l&rsquo;endroit où elle sera regardée.</strong>{" "}
          Un clip destiné à un téléphone ou à un petit lecteur web ne gagne rien
          en 4K ; le 720p ou le 1080p auront l&rsquo;air identiques et pèseront
          une fraction.
        </li>
        <li>
          <strong>Ajustez le CRF avant toute autre chose.</strong> Passer de 23 à
          26 réduit souvent la taille de moitié avec une perte de détail que la
          plupart des spectateurs ne remarqueront jamais. Comparez le résultat
          avant d&rsquo;être plus agressif.
        </li>
        <li>
          <strong>Ne recompressez pas un clip déjà compressé.</strong> Chaque
          passe avec perte supprime davantage de détails. Si l&rsquo;outil indique
          que le résultat n&rsquo;est pas plus petit, votre fichier est déjà
          encodé efficacement : laissez-le tel quel plutôt que de le dégrader
          encore.
        </li>
        <li>
          <strong>Coupez d&rsquo;abord pour de grosses économies.</strong>{" "}
          Retirer les silences au début et à la fin d&rsquo;un clip supprime des
          images entières, ce qui surpasse n&rsquo;importe quel réglage de qualité
          pour rapetisser le fichier.
        </li>
      </ul>

      <h2 id="codecs">Quelques mots sur les codecs vidéo</h2>
      <p>
        Un &laquo;&nbsp;fichier vidéo&nbsp;&raquo; est en réalité deux choses : un{" "}
        <strong>codec</strong> qui encode les pixels (comme H.264, VP9 ou AV1) et
        un format <strong>conteneur</strong> qui l&rsquo;enveloppe (MP4, WebM,
        MOV, MKV). C&rsquo;est pourquoi une même vidéo H.264 peut résider dans un
        MP4 ou dans un MOV. Nous produisons du H.264/MP4 car il offre la
        compatibilité matérielle et logicielle la plus large de tous les codecs
        modernes : presque tous les appareils fabriqués au cours de la dernière
        décennie peuvent le décoder sans accroc. Vous pouvez en lire davantage
        sur la façon dont les codecs et les conteneurs s&rsquo;articulent dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          le guide des codecs vidéo web de MDN
        </a>
        .
      </p>
      <p>
        Cette page est le point central de tous nos outils vidéo. Si vous
        connaissez le format de votre fichier, les pages dédiées proposent des
        conseils adaptés : utilisez le{" "}
        <Link href="/fr/compress-mp4">compresseur MP4</Link> pour une séquence
        déjà au format MP4, ou le{" "}
        <Link href="/fr/compress-mov">compresseur MOV, WebM, MKV et AVI</Link>{" "}
        pour les clips issus de caméras, d&rsquo;enregistreurs d&rsquo;écran et
        d&rsquo;autres applications. Si vous avez seulement besoin de réduire le
        son (un podcast, un mémo vocal ou un fichier musical), le{" "}
        <Link href="/fr/audio-compressor">compresseur audio</Link> s&rsquo;en
        charge sans ré-encoder la moindre vidéo.
      </p>
    </>
  ),
};
