import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresser une vidéo MOV, WebM, MKV et AVI gratuit",
  metaDescription:
    "Compressez vos vidéos MOV, WebM, MKV et AVI en privé dans votre navigateur. Convertit en MP4 H.264 efficace sans aucun envoi : rien ne quitte votre appareil.",
  heading: "Compresseur de MOV, WebM, MKV et AVI",
  intro: (
    <>
      Compressez vos vidéos MOV, WebM, MKV et AVI directement dans votre
      navigateur. Chaque clip est ré-encodé avec l&rsquo;efficace H.264 et
      enregistré sous forme de MP4 compact et universellement compatible, le tout
      sur votre propre appareil et sans que rien ne soit jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser MOV, WebM, MKV et AVI",
    description:
      "Compressez une vidéo MOV, WebM, MKV et AVI en MP4 H.264 localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez votre vidéo",
        text: "Glissez-déposez un fichier MOV, WebM, MKV ou AVI sur la zone de dépôt, ou cliquez pour le parcourir. Les clips courts et les enregistrements d'écran se traitent le plus rapidement.",
      },
      {
        name: "Choisissez un préréglage de qualité",
        text: "Choisissez un préréglage, ou affinez le curseur CRF et la résolution cible. Autour d'un CRF de 23-28, les clips restent superbes tout en se réduisant beaucoup.",
      },
      {
        name: "Laissez ffmpeg le transcoder sur votre appareil",
        text: "La vidéo est ré-encodée en MP4 H.264 avec une version WebAssembly de ffmpeg. Une barre de progression montre le travail s'effectuant localement : rien n'est envoyé nulle part.",
      },
      {
        name: "Téléchargez votre MP4",
        text: "Enregistrez le MP4 plus léger une fois prêt. Si le résultat n'est pas plus petit, l'outil vous le signale afin que vous puissiez baisser la qualité ou la résolution et réessayer.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers MOV, WebM, MKV ou AVI sont-ils envoyés sur un serveur ?",
      a: (
        <>
          Non. Chaque vidéo est traitée localement dans votre navigateur avec
          une version WebAssembly de ffmpeg. Vos fichiers ne quittent jamais
          votre appareil et il n&rsquo;y a aucun serveur où les envoyer : une
          fois la page chargée, vous pouvez même vous déconnecter d&rsquo;internet
          et cela fonctionne toujours.
        </>
      ),
      text: "Non. Chaque vidéo est traitée localement dans votre navigateur avec une version WebAssembly de ffmpeg. Vos fichiers ne quittent jamais votre appareil et il n'y a aucun serveur où les envoyer. Une fois la page chargée, vous pouvez vous déconnecter d'internet et cela fonctionne toujours.",
    },
    {
      q: "Ce compresseur vidéo est-il vraiment gratuit ?",
      a: (
        <>
          Oui, il est entièrement gratuit, sans inscription, sans filigrane et
          sans frais par fichier. Les seules limites pratiques viennent de la
          mémoire et de la patience de votre appareil, puisque tout s&rsquo;exécute
          sur votre propre matériel. Le site est financé par des publicités
          discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans inscription, sans filigrane et sans frais par fichier. Les seules limites pratiques viennent de la mémoire et de la patience de votre appareil, puisque tout s'exécute sur votre propre matériel. Le site est financé par des publicités discrètes.",
    },
    {
      q: "La compression va-t-elle réduire la qualité de ma vidéo ?",
      a: (
        <>
          La compression vidéo est avec perte, donc une partie des détails est
          écartée pour gagner de l&rsquo;espace. Avec le curseur de qualité (CRF)
          dans la plage 23-28, la plupart des clips paraissent quasiment
          identiques à la source à des tailles de visionnage normales. Baissez le
          CRF pour plus de fidélité et des fichiers plus volumineux, ou
          augmentez-le pour des fichiers plus petits.
        </>
      ),
      text: "La compression vidéo est avec perte, donc une partie des détails est écartée pour gagner de l'espace. Avec le curseur de qualité (CRF) dans la plage 23-28, la plupart des clips paraissent quasiment identiques à la source. Baissez le CRF pour plus de fidélité et des fichiers plus volumineux, ou augmentez-le pour des fichiers plus petits.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite fixe, mais comme ffmpeg s&rsquo;exécute sur
          un seul fil dans votre navigateur, les vidéos très grandes ou longues
          (au-delà d&rsquo;environ 150 Mo) peuvent être lentes et échouer sur les
          téléphones disposant de peu de mémoire. Les clips courts et les
          enregistrements d&rsquo;écran fonctionnent le mieux ; pour les fichiers
          énormes, découpez-les d&rsquo;abord ou utilisez un outil de bureau.
        </>
      ),
      text: "Il n'y a pas de limite fixe, mais comme ffmpeg s'exécute sur un seul fil dans votre navigateur, les vidéos très grandes ou longues au-delà d'environ 150 Mo peuvent être lentes et échouer sur les téléphones disposant de peu de mémoire. Les clips courts et les enregistrements d'écran fonctionnent le mieux ; pour les fichiers énormes, découpez-les d'abord ou utilisez un outil de bureau.",
    },
    {
      q: "Pourquoi mon MOV ou AVI me revient-il en MP4 ?",
      a: (
        <>
          Pour réduire votre fichier, l&rsquo;outil ré-encode la vidéo avec H.264
          et l&rsquo;enveloppe dans un conteneur MP4, bien plus efficace en
          espace et bien plus largement pris en charge que le MOV de QuickTime ou
          l&rsquo;AVI hérité. Le résultat se lit sur pratiquement tous les
          téléphones, navigateurs et lecteurs, généralement à une taille bien
          moindre.
        </>
      ),
      text: "Pour réduire votre fichier, l'outil ré-encode la vidéo avec H.264 et l'enveloppe dans un conteneur MP4, bien plus efficace en espace et largement pris en charge que le MOV de QuickTime ou l'AVI hérité. Le résultat se lit sur pratiquement tous les téléphones, navigateurs et lecteurs, généralement à une taille bien moindre.",
    },
    {
      q: "Puis-je aussi compresser des fichiers WebM et MKV ?",
      a: (
        <>
          Oui. Cet outil accepte les MOV, WebM, MKV et AVI et les transcode tous
          en MP4 H.264. WebM et MKV sont des conteneurs flexibles capables
          d&rsquo;héberger de nombreux codecs ; convertir en MP4 vous donne un
          format unique et prévisible qui se lit partout, y compris sur les
          appareils anciens et les logiciels de montage.
        </>
      ),
      text: "Oui. Cet outil accepte les MOV, WebM, MKV et AVI et les transcode tous en MP4 H.264. WebM et MKV sont des conteneurs flexibles capables d'héberger de nombreux codecs ; convertir en MP4 vous donne un format unique et prévisible qui se lit partout, y compris sur les appareils anciens et les logiciels de montage.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi les fichiers MOV, WebM, MKV et AVI sont si volumineux</h2>
      <p>
        Si vous filmez avec un iPhone, un reflex, une GoPro ou un enregistreur
        d&rsquo;écran, vous vous retrouvez souvent avec des fichiers énormes :
        quelques minutes de séquence peuvent facilement atteindre des centaines
        de mégaoctets. Il y a de bonnes raisons à cela. Les téléphones et les
        appareils photo privilégient la vitesse de capture et la qualité à la
        taille du fichier, et enregistrent donc à des débits binaires élevés, des
        résolutions élevées et des fréquences d&rsquo;images élevées. Les
        appareils Apple enregistrent des fichiers{" "}
        <strong>.mov</strong> (QuickTime), les enregistreurs d&rsquo;écran
        produisent fréquemment du <strong>.mkv</strong> ou du{" "}
        <strong>.webm</strong>, et les appareils photo et outils Windows plus
        anciens génèrent encore du <strong>.avi</strong>. Chacun de ces formats
        peut être bien plus volumineux que nécessaire pour le partage ou
        l&rsquo;archivage.
      </p>
      <p>
        Les grosses vidéos sont pénibles à gérer : elles dépassent les limites
        de pièces jointes des e-mails et des messageries, mettent une éternité à
        s&rsquo;envoyer, remplissent le stockage du téléphone et du cloud, et
        épuisent les données mobiles. Les ré-encoder avec un codec moderne et
        efficace peut réduire la taille de façon spectaculaire — souvent de
        moitié ou plus — tout en gardant une séquence à l&rsquo;apparence
        essentiellement identique. Comme cet outil s&rsquo;exécute entièrement
        sur votre appareil, vous obtenez ces économies sans jamais confier vos
        enregistrements personnels à un serveur tiers.
      </p>
      <p>
        La confidentialité est la raison pour laquelle ce dernier point compte
        autant. Vidéos de famille, enregistrements d&rsquo;écran confidentiels,
        images de vos enfants, démos de produit que vous n&rsquo;avez pas encore
        annoncées : ce ne sont pas des choses que vous voulez laisser sur les
        serveurs d&rsquo;une entreprise inconnue, même temporairement. Les
        compresseurs vidéo en ligne classiques envoient votre fichier entier, le
        traitent à distance, et comptent sur vous pour croire qu&rsquo;il a été
        supprimé ensuite. Ici, votre vidéo est chargée dans la mémoire de votre
        navigateur, transcodée avec WebAssembly, et vous est rendue directement.
        Aucune requête réseau ne transporte la séquence, il n&rsquo;y a donc rien
        à divulguer, à journaliser ni à conserver.
      </p>

      <h2 id="container-vs-codec">
        Conteneur ou codec : ce qui détermine réellement la taille
      </h2>
      <p>
        Une confusion fréquente porte sur la différence entre un{" "}
        <strong>conteneur</strong> et un <strong>codec</strong>.
        L&rsquo;extension du fichier — .mov, .mkv, .webm, .avi, .mp4 — nomme le
        conteneur : une enveloppe qui regroupe le flux vidéo, le flux audio, les
        sous-titres et les métadonnées dans un seul fichier. Le codec est
        l&rsquo;algorithme qui encode réellement l&rsquo;image et le son à
        l&rsquo;intérieur de cette enveloppe. Un même conteneur peut héberger de
        nombreux codecs différents, ce qui explique précisément pourquoi deux
        fichiers .mkv peuvent avoir des tailles et des compatibilités
        radicalement différentes.
      </p>
      <p>
        Cette distinction importe car c&rsquo;est le codec, et non le conteneur,
        qui détermine l&rsquo;essentiel de la taille du fichier. Un MOV
        provenant d&rsquo;un iPhone peut utiliser l&rsquo;efficace codec HEVC,
        tandis qu&rsquo;un AVI d&rsquo;un vieux caméscope peut en utiliser un
        daté et surdimensionné. Les conteneurs diffèrent aussi par leur prise en
        charge : MKV et WebM sont flexibles et ouverts mais ne se lisent pas
        nativement partout, et l&rsquo;AVI est en grande partie un format hérité.
        Vous pouvez lire une explication claire des relations entre les
        conteneurs web courants et leurs codecs dans le{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guide des formats de conteneurs multimédias de MDN
        </a>
        .
      </p>
      <p>
        En pratique, c&rsquo;est pourquoi se contenter de renommer
        l&rsquo;extension d&rsquo;un fichier ne le rend jamais plus petit et
        casse généralement la lecture : vous réétiquetteriez l&rsquo;enveloppe
        sans toucher aux données qu&rsquo;elle contient. Une vraie compression
        signifie décoder le flux vidéo d&rsquo;origine et le ré-encoder avec un
        codec plus efficace à un niveau de qualité choisi. C&rsquo;est
        exactement ce qui se passe ici : votre MOV, WebM, MKV ou AVI est
        entièrement décodé puis reconstruit en un MP4 H.264 tout neuf, au lieu
        d&rsquo;être simplement remballé.
      </p>

      <h2 id="mp4-h264">Pourquoi convertir en MP4 H.264 aide</h2>
      <p>
        Cet outil transcode tout ce que vous lui donnez en vidéo{" "}
        <strong>H.264</strong> dans un conteneur <strong>MP4</strong>. Il y a
        ici deux grands avantages. Premièrement, la <strong>taille</strong> :
        ré-encoder avec H.264 à un niveau de qualité raisonnable vous permet
        d&rsquo;éliminer l&rsquo;excès de débit binaire que les appareils photo
        et les enregistreurs intègrent, et vous pouvez éventuellement plafonner
        la résolution pour réduire encore davantage. Deuxièmement, et tout aussi
        important, la <strong>compatibilité</strong> : le MP4 H.264 est ce qui
        se rapproche le plus d&rsquo;un format vidéo universel. Il se lit dans
        tous les navigateurs modernes, sur les téléphones et tablettes, sur les
        téléviseurs connectés et dans les logiciels de montage, sans avoir besoin
        de packs de codecs ni de conversions à l&rsquo;autre bout.
      </p>
      <p>
        La qualité se contrôle avec une valeur CRF (Constant Rate Factor,
        facteur de débit constant). Les nombres plus bas signifient une qualité
        supérieure et des fichiers plus volumineux ; les nombres plus élevés
        signifient des fichiers plus petits avec une compression plus visible.
        Pour la plupart des clips, un CRF autour de <strong>23-28</strong> est le
        point idéal, paraissant presque identique à la source pour une fraction
        de la taille. Si votre vidéo est déjà un MP4 encodé efficacement, vous ne
        gagnerez peut-être pas grand-chose à la recompresser : dans ce cas, notre{" "}
        <Link href="/fr/compress-mp4">compresseur de MP4</Link> avec un CRF plus
        élevé ou une résolution cible plus basse est le meilleur levier à
        actionner.
      </p>

      <h2 id="tips">Conseils, limites et ce à quoi s&rsquo;attendre</h2>
      <p>
        Tout se passe dans votre navigateur grâce à une version WebAssembly de
        ffmpeg, ce qui est réellement privé mais comporte une réserve honnête :
        cela s&rsquo;exécute sur <strong>un seul fil</strong>. Cela signifie que
        l&rsquo;outil ne peut pas utiliser tous les cœurs de votre processeur
        comme le fait un encodeur de bureau natif, de sorte que les vidéos
        longues ou en haute résolution prennent nettement plus de temps et
        peuvent mettre à rude épreuve les appareils disposant de peu de mémoire.
        Gardez ces conseils à l&rsquo;esprit pour de meilleurs résultats :
      </p>
      <ul>
        <li>
          <strong>Privilégiez les clips plus courts.</strong> Une minute ou deux
          de séquence se compresse rapidement. Pour les enregistrements très
          longs, découpez la partie dont vous avez réellement besoin avant de
          compresser.
        </li>
        <li>
          <strong>Baissez la résolution pour les plus grandes économies.</strong>{" "}
          Un enregistrement d&rsquo;écran en 4K réduit à 1080p rétrécit bien plus
          que les seuls réglages de qualité, sans perte visible sur la plupart
          des écrans.
        </li>
        <li>
          <strong>Utilisez un ordinateur de bureau pour les tâches lourdes.</strong>{" "}
          Les gros fichiers (au-delà d&rsquo;environ 150&nbsp;Mo) sont plus lents
          sur les téléphones ; un portable ou un ordinateur de bureau doté de
          plus de mémoire les gère plus confortablement.
        </li>
        <li>
          <strong>Choisissez le bon outil pour la tâche.</strong> Besoin
          d&rsquo;un aperçu rapide de tous les formats au même endroit ? Utilisez
          le{" "}
          <Link href="/fr/video-compressor">compresseur vidéo</Link>. Vous
          travaillez plutôt avec des fichiers audio ? Essayez le{" "}
          <Link href="/fr/audio-compressor">compresseur audio</Link>.
        </li>
        <li>
          <strong>Revérifiez le résultat.</strong> Si la sortie revient un jour
          à la même taille ou plus volumineuse, c&rsquo;est que votre source
          était déjà encodée efficacement : augmentez le CRF ou baissez la
          résolution et relancez plutôt que d&rsquo;accepter un fichier qui ne
          s&rsquo;est pas réduit.
        </li>
      </ul>
    </>
  ),
};
