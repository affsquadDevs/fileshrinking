import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser MP4 — Compresseur vidéo MP4 gratuit",
  metaDescription:
    "Compressez vos vidéos MP4 dans votre navigateur avec H.264. Préréglages de qualité, mise à l'échelle, sans envoi : vos fichiers restent privés.",
  heading: "Compresseur de MP4",
  intro: (
    <>
      Compressez vos vidéos MP4 directement dans votre navigateur avec H.264.
      Choisissez un préréglage de qualité, déposez votre clip et téléchargez un
      fichier plus léger en quelques minutes : rien n&rsquo;est jamais envoyé,
      vos séquences restent donc totalement privées.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser un MP4",
    description:
      "Compressez une vidéo MP4 localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez votre MP4",
        text: "Glissez-déposez votre fichier .mp4 dans la zone de dépôt, ou cliquez pour le rechercher. La vidéo est chargée dans la mémoire de votre appareil, elle n'est envoyée nulle part.",
      },
      {
        name: "Choisissez un préréglage de qualité",
        text: "Commencez par Équilibré. Il définit un CRF raisonnable et limite la résolution ; passez à un préréglage plus petit pour des fichiers plus compressés ou à un plus grand pour rester proche de l'original.",
      },
      {
        name: "Affinez le CRF",
        text: "Déplacez le curseur du CRF si vous voulez plus de contrôle. Une valeur plus basse conserve davantage de détails et un fichier plus volumineux ; entre 23 et 28 se trouve le point d'équilibre pratique pour la plupart des clips.",
      },
      {
        name: "Compressez et téléchargez",
        text: "Le réencodage s'exécute sur votre appareil avec ffmpeg. Une fois terminé, vous verrez l'espace économisé et pourrez télécharger votre MP4 plus léger.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers MP4 sont-ils envoyés sur un serveur ?",
      a: (
        <>
          Non. Votre vidéo est compressée localement dans votre navigateur avec
          une version WebAssembly de ffmpeg. Le fichier est lu en mémoire,
          réencodé sur votre propre appareil et vous est rendu directement : il
          n&rsquo;y a aucun serveur vers lequel l&rsquo;envoyer, et rien
          n&rsquo;est jamais transmis.
        </>
      ),
      text: "Non. Votre vidéo est compressée localement dans votre navigateur avec une version WebAssembly de ffmpeg. Le fichier est lu en mémoire, réencodé sur votre propre appareil et vous est rendu directement. Il n'y a aucun serveur vers lequel l'envoyer, et rien n'est jamais transmis.",
    },
    {
      q: "Le compresseur de MP4 est-il vraiment gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans inscription, sans filigrane et
          sans limite par fichier ou par jour. Comme tout le travail se fait sur
          votre machine, il n&rsquo;y a aucun coût de serveur à amortir. Le site
          est financé par des publicités discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans limite par fichier ou par jour. Comme tout le travail se fait sur votre machine, il n'y a aucun coût de serveur à amortir. Le site est financé par des publicités discrètes.",
    },
    {
      q: "La compression va-t-elle réduire la qualité de ma vidéo ?",
      a: (
        <>
          H.264 est un codec avec pertes, donc le réencodage supprime toujours
          un peu de détail. Avec le préréglage Équilibré (autour de CRF 23-28),
          la perte est difficile à remarquer à des tailles d&rsquo;affichage
          normales, tandis que le fichier rétrécit considérablement. Choisissez
          un CRF plus bas pour rester plus proche de la source, ou un plus haut
          pour un fichier plus léger.
        </>
      ),
      text: "H.264 est un codec avec pertes, donc le réencodage supprime toujours un peu de détail. Avec le préréglage Équilibré (autour de CRF 23-28), la perte est difficile à remarquer à des tailles d'affichage normales, tandis que le fichier rétrécit considérablement. Choisissez un CRF plus bas pour rester plus proche de la source ou un plus haut pour un fichier plus léger.",
    },
    {
      q: "Quelle est la taille maximale de fichier MP4 que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite stricte, mais le réencodage vidéo
          consomme beaucoup de mémoire et de processeur et s&rsquo;exécute sur
          un seul fil d&rsquo;exécution dans le navigateur. Les clips
          jusqu&rsquo;à environ 150&nbsp;Mo se compressent sans problème sur la
          plupart des appareils ; les vidéos plus volumineuses ou plus longues
          fonctionnent également, mais peuvent être lentes et risquent
          d&rsquo;échouer sur les téléphones à faible mémoire. Les clips courts
          terminent le plus vite.
        </>
      ),
      text: "Il n'y a pas de limite stricte, mais le réencodage vidéo consomme beaucoup de mémoire et de processeur et s'exécute sur un seul fil d'exécution dans le navigateur. Les clips jusqu'à environ 150 Mo se compressent sans problème sur la plupart des appareils ; les vidéos plus volumineuses ou plus longues fonctionnent également, mais peuvent être lentes et risquent d'échouer sur les téléphones à faible mémoire. Les clips courts terminent le plus vite.",
    },
    {
      q: "Pourquoi compresser mon MP4 est-il plus lent que compresser une image ?",
      a: (
        <>
          Une vidéo, ce sont des milliers d&rsquo;images, et chacune est
          décodée, éventuellement redimensionnée et réencodée avec H.264. La
          version de ffmpeg qui tourne dans le navigateur fonctionne sur un seul
          fil d&rsquo;exécution pour des raisons de compatibilité et de
          sécurité, elle ne peut donc pas utiliser tous les cœurs du processeur
          comme le ferait une application de bureau. Attendez-vous à une vitesse
          allant d&rsquo;environ le temps réel à quelques fois le temps réel
          selon la résolution et votre matériel.
        </>
      ),
      text: "Une vidéo, ce sont des milliers d'images, et chacune est décodée, éventuellement redimensionnée et réencodée avec H.264. La version de ffmpeg qui tourne dans le navigateur fonctionne sur un seul fil d'exécution pour des raisons de compatibilité et de sécurité, elle ne peut donc pas utiliser tous les cœurs du processeur comme le ferait une application de bureau. Attendez-vous à une vitesse allant d'environ le temps réel à quelques fois le temps réel selon la résolution et le matériel.",
    },
    {
      q: "Est-il utile de réencoder un MP4 qui est déjà en H.264 ?",
      a: (
        <>
          Parfois. Si l&rsquo;original a été exporté avec un débit élevé ou une
          grande résolution, le réencoder avec un CRF plus haut ou une hauteur
          moindre peut faire gagner beaucoup. Mais un fichier qui était déjà
          compressé efficacement peut à peine rétrécir, voire grossir. Si le
          résultat n&rsquo;est pas plus léger, l&rsquo;outil vous prévient que le
          fichier est déjà efficace et vous pouvez conserver l&rsquo;original.
        </>
      ),
      text: "Parfois. Si l'original a été exporté avec un débit élevé ou une grande résolution, le réencoder avec un CRF plus haut ou une hauteur moindre peut faire gagner beaucoup. Mais un fichier qui était déjà compressé efficacement peut à peine rétrécir, voire grossir. Si le résultat n'est pas plus léger, l'outil vous prévient que le fichier est déjà efficace et vous pouvez conserver l'original.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi les fichiers MP4 sont-ils si volumineux ?</h2>
      <p>
        MP4 est un conteneur, pas un codec : il regroupe un flux vidéo, un flux
        audio et des métadonnées dans un seul fichier. La taille de ce fichier
        est déterminée presque entièrement par le <strong>débit</strong> du flux
        vidéo : combien de bits par seconde l&rsquo;encodeur consacre à décrire
        l&rsquo;image. Le débit, à son tour, évolue avec trois éléments que vous
        contrôlez : la <strong>résolution</strong> (une image 4K compte quatre
        fois plus de pixels que le 1080p), la <strong>durée</strong> du clip et
        l&rsquo;<strong>objectif de qualité</strong> avec lequel la source a été
        exportée.
      </p>
      <p>
        Les téléphones, les enregistreurs d&rsquo;écran et les applications de
        montage privilégient généralement la qualité, en exportant à des débits
        élevés pour que rien ne paraisse flou. C&rsquo;est parfait pour
        archiver, mais c&rsquo;est du gaspillage pour partager : un clip de
        téléphone d&rsquo;une minute en 4K peut facilement dépasser
        150&nbsp;Mo, bien plus que ce dont vous avez besoin pour l&rsquo;envoyer
        par messagerie ou par e-mail. Réencoder avec un objectif de qualité
        raisonnable, et souvent une résolution plus petite, c&rsquo;est de là
        que viennent les grandes économies.
      </p>

      <h2 id="crf">Comment le CRF et la résolution réduisent le fichier</h2>
      <p>
        Cet outil réencode votre vidéo avec <strong>H.264</strong> en utilisant
        un <strong>facteur de débit constant (CRF)</strong>. Au lieu
        d&rsquo;imposer un débit fixe, le CRF vise une qualité{" "}
        <em>perçue</em> constante et laisse l&rsquo;encodeur dépenser plus de
        bits sur les scènes complexes et moins sur les simples. Ici,
        l&rsquo;échelle va de 18 (très haute qualité, fichier plus volumineux) à
        36 (fichier plus léger, artefacts plus visibles). Chaque pas
        d&rsquo;environ &plusmn;6 correspond à la moitié ou au double de la
        taille du fichier, de sorte que de petits changements du curseur ont un
        grand effet.
      </p>
      <p>
        Le second levier est la <strong>résolution</strong>. Réduire la hauteur
        maximale — par exemple de 2160p à 1080p ou 720p — diminue
        considérablement le nombre de pixels, et moins de pixels nécessitent
        moins de bits à qualité égale. Pour des séquences qui seront regardées
        sur un téléphone ou intégrées dans un document, un réencodage en 720p ou
        1080p paraît souvent identique en pratique tout en occupant une fraction
        de la taille. Les préréglages combinent un CRF et une limite de hauteur
        afin que vous obteniez un bon résultat sans rien régler ; le curseur du
        CRF est là pour quand vous voulez un contrôle plus fin.
      </p>
      <p>
        Deux choses comptent moins que les gens ne le pensent.
        Premièrement, la fréquence d&rsquo;images : la plupart des clips
        n&rsquo;ont pas besoin de plus que ce que la source possède déjà, et la
        réduire n&rsquo;économise qu&rsquo;un espace modeste comparé au CRF et à
        la résolution. Deuxièmement, la piste audio. La parole et la musique
        ajoutent un peu de poids, mais une bande-son AAC typique ne représente
        qu&rsquo;une petite part d&rsquo;un fichier vidéo, l&rsquo;image est donc
        presque toujours là où se trouvent les économies. C&rsquo;est pourquoi
        cet outil concentre vos choix sur la qualité et la résolution — les deux
        réglages qui font la différence — et réencode l&rsquo;audio à un débit
        raisonnable automatiquement.
      </p>

      <h2 id="format">
        MP4, H.264 et quand le réencodage aide vraiment
      </h2>
      <p>
        La grande majorité des fichiers MP4 contiennent déjà un flux vidéo H.264
        (aussi appelé AVC), ce qui explique pourquoi le MP4 se lit pratiquement
        partout : des vieux téléphones aux téléviseurs connectés. Vous pouvez
        lire comment les navigateurs décrivent le conteneur MP4 et le codec
        H.264 dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          le guide des conteneurs multimédias de MDN
        </a>{" "}
        et dans sa{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264"
          target="_blank"
          rel="noopener noreferrer"
        >
          référence du codec AVC / H.264
        </a>
        . Produire du H.264 en MP4 préserve intacte cette compatibilité
        universelle.
      </p>
      <p>
        Réencoder un MP4 qui est <em>déjà</em> en H.264 aide lorsque
        l&rsquo;original a été exporté généreusement — débit élevé, grande
        résolution, ou les deux — parce qu&rsquo;il y a de la marge à retirer.
        Cela aide beaucoup moins, et peut même produire un fichier{" "}
        <strong>plus volumineux</strong>, lorsque la vidéo était déjà compressée
        au maximum : réencoder un flux avec pertes implique de le décoder et de
        le recompresser avec pertes, vous n&rsquo;y gagnez donc que si votre
        nouvel objectif est réellement plus bas que l&rsquo;original. Si la
        sortie ne devait pas être plus légère, cet outil vous tient informé afin
        que vous puissiez simplement conserver votre original. Pour en tirer
        davantage, augmentez le CRF ou baissez la résolution plutôt
        que d&rsquo;attendre des miracles d&rsquo;une seule passe.
      </p>

      <h2 id="tips">Conseils et le compromis de vitesse dans le navigateur</h2>
      <p>
        Tout se passe sur votre appareil grâce à une version WebAssembly de{" "}
        ffmpeg, ce qui rend la chose privée, mais c&rsquo;est aussi en{" "}
        <strong>un seul fil d&rsquo;exécution</strong>. Un encodeur de bureau
        natif répartit le travail entre tous les cœurs du processeur ; la
        version du navigateur, pour des raisons de compatibilité et de sécurité,
        n&rsquo;en utilise qu&rsquo;un. Cela signifie que les vidéos longues ou
        en haute résolution peuvent prendre un moment et solliciter les
        téléphones à faible mémoire. Quelques habitudes gardent tout fluide :
      </p>
      <ul>
        <li>
          <strong>Coupez d&rsquo;abord quand vous le pouvez.</strong> La durée
          est un multiplicateur direct à la fois de la taille du fichier et du
          temps d&rsquo;encodage, alors supprimer les temps morts avant de
          compresser est le gain le plus facile.
        </li>
        <li>
          <strong>Baissez la résolution pour partager.</strong> Le 720p ou le
          1080p est amplement suffisant pour la messagerie, les diapositives et
          la plupart des intégrations web ; réservez le 4K aux fichiers que vous
          regardez vraiment sur un grand écran.
        </li>
        <li>
          <strong>Commencez par Équilibré, puis comparez.</strong> Relancez avec
          un préréglage plus petit et vérifiez si vous repérez la différence à
          votre taille d&rsquo;affichage réelle avant de vous décider.
        </li>
        <li>
          <strong>Faites les gros travaux sur un appareil à la fois.</strong>{" "}
          Fermez les autres onglets gourmands pour que l&rsquo;encodeur dispose
          de mémoire et de processeur ; les clips courts terminent le plus vite.
        </li>
      </ul>
      <p>
        Vous travaillez avec d&rsquo;autres formats ? Utilisez le{" "}
        <Link href="/fr/video-compressor">compresseur vidéo</Link> plus général
        pour le MP4 et tout le reste, le{" "}
        <Link href="/fr/compress-mov">compresseur de MOV, WebM, MKV et AVI</Link>{" "}
        pour les séquences qui ne sont pas en MP4, ou le{" "}
        <Link href="/fr/audio-compressor">compresseur audio</Link> lorsque vous
        avez seulement besoin de réduire une bande-son ou un enregistrement
        vocal.
      </p>
    </>
  ),
};
