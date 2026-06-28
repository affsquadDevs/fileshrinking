import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compresseur audio — MP3 et AAC gratuit en ligne",
  metaDescription:
    "Compressez vos fichiers MP3, WAV, AAC, M4A, OGG et FLAC dans le navigateur. Choisissez le débit, sans envoi ni inscription : rien ne quitte l'appareil.",
  heading: "Compresseur audio",
  intro: (
    <>
      Réduisez la taille de vos fichiers MP3, WAV, AAC, M4A, OGG et FLAC
      directement dans votre navigateur. Réencodez en MP3 ou AAC au débit de
      votre choix, puis téléchargez une piste plus légère en quelques secondes :
      rien n&rsquo;est jamais envoyé.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Comment compresser un fichier audio",
    description:
      "Compressez vos MP3, WAV, AAC et plus encore localement dans votre navigateur en quatre étapes.",
    steps: [
      {
        name: "Ajoutez votre audio",
        text: "Glissez-déposez vos fichiers audio dans la zone de dépôt ou cliquez pour les parcourir. Les formats MP3, WAV, AAC, M4A, OGG et FLAC sont tous acceptés.",
      },
      {
        name: "Choisissez un format de sortie",
        text: "Choisissez MP3 pour une compatibilité maximale ou AAC (.m4a) pour une qualité légèrement supérieure à taille égale.",
      },
      {
        name: "Choisissez un débit",
        text: "Réglez le débit pour gérer l'équilibre entre taille et qualité. 128 kbps convient à la musique ; descendez à 96 kbps pour la voix et les podcasts afin d'économiser encore plus.",
      },
      {
        name: "Téléchargez votre fichier",
        text: "Chaque piste est réencodée sur votre appareil avec FFmpeg. Vous verrez la taille d'origine, la nouvelle taille et le pourcentage économisé, puis vous téléchargez le résultat.",
      },
    ],
  },
  faqs: [
    {
      q: "Mes fichiers audio sont-ils envoyés sur un serveur ?",
      a: (
        <>
          Non. Chaque piste est réencodée localement dans votre navigateur avec
          une version de FFmpeg compilée en WebAssembly. Votre audio ne quitte
          jamais votre appareil et aucun serveur ne le reçoit : une fois la page
          chargée, vous pouvez même vous déconnecter d&rsquo;internet et cela
          continue de fonctionner.
        </>
      ),
      text: "Non. Chaque piste est réencodée localement dans votre navigateur avec une version de FFmpeg compilée en WebAssembly. Votre audio ne quitte jamais votre appareil et aucun serveur ne le reçoit. Une fois la page chargée, vous pouvez vous déconnecter d'internet et cela continue de fonctionner.",
    },
    {
      q: "Le compresseur audio est-il vraiment gratuit ?",
      a: (
        <>
          Oui : il est entièrement gratuit, sans compte, sans filigrane et sans
          limite sur le nombre de fichiers. La seule limite pratique est la
          mémoire de votre appareil. Le site est financé par des publicités
          discrètes.
        </>
      ),
      text: "Oui. Il est entièrement gratuit, sans compte, sans filigrane et sans limite sur le nombre de fichiers. La seule limite pratique est la mémoire de votre appareil. Le site est financé par des publicités discrètes.",
    },
    {
      q: "La compression réduira-t-elle la qualité audio ?",
      a: (
        <>
          MP3 et AAC sont des formats avec perte, donc une partie des détails
          inaudibles est supprimée pour réduire le fichier. À 128 kbps, la
          plupart des auditeurs ne distinguent pas la musique de l&rsquo;original,
          et 96 kbps suffit largement pour la voix ou les podcasts. Choisissez un
          débit plus élevé pour rester plus proche de la source.
        </>
      ),
      text: "MP3 et AAC sont des formats avec perte, donc une partie des détails inaudibles est supprimée pour réduire le fichier. À 128 kbps, la plupart des auditeurs ne distinguent pas la musique de l'original, et 96 kbps suffit largement pour la voix ou les podcasts. Choisissez un débit plus élevé pour rester plus proche de la source.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: (
        <>
          Il n&rsquo;y a pas de limite fixe : cela dépend de la mémoire
          disponible sur votre appareil. Les chansons, podcasts et mémos vocaux
          ordinaires sont traités en quelques secondes. Les très gros fichiers
          WAV non compressés (de plusieurs centaines de mégaoctets) fonctionnent
          aussi, mais utilisent plus de mémoire et prennent plus de temps car
          l&rsquo;encodeur tourne sur un seul fil d&rsquo;exécution dans votre
          navigateur.
        </>
      ),
      text: "Il n'y a pas de limite fixe ; cela dépend de la mémoire disponible sur votre appareil. Les chansons, podcasts et mémos vocaux ordinaires sont traités en quelques secondes. Les très gros fichiers WAV non compressés de plusieurs centaines de mégaoctets fonctionnent aussi, mais utilisent plus de mémoire et prennent plus de temps car l'encodeur tourne sur un seul fil d'exécution dans votre navigateur.",
    },
    {
      q: "Quels formats puis-je compresser et qu'est-ce que je récupère ?",
      a: (
        <>
          Vous pouvez déposer des fichiers MP3, WAV, AAC, M4A, OGG ou FLAC.
          L&rsquo;outil réencode en MP3 (avec l&rsquo;encodeur LAME) ou en AAC
          (.m4a) au débit que vous choisissez, de sorte que la sortie est un
          fichier largement compatible qui se lit partout.
        </>
      ),
      text: "Vous pouvez déposer des fichiers MP3, WAV, AAC, M4A, OGG ou FLAC. L'outil réencode en MP3 (avec l'encodeur LAME) ou en AAC (.m4a) au débit que vous choisissez, de sorte que la sortie est un fichier largement compatible qui se lit partout.",
    },
    {
      q: "Faut-il choisir MP3 ou AAC ?",
      a: (
        <>
          Les deux sont excellents. MP3 est le format le plus universellement
          compatible et un choix sûr pour le partage. AAC sonne en général un peu
          mieux à débit égal et c&rsquo;est le format natif des appareils Apple et
          de la plupart des services de streaming. En cas de doute, MP3 à
          128 kbps est une valeur sûre pour tout.
        </>
      ),
      text: "Les deux sont excellents. MP3 est le format le plus universellement compatible et un choix sûr pour le partage. AAC sonne en général un peu mieux à débit égal et c'est le format natif des appareils Apple et de la plupart des services de streaming. En cas de doute, MP3 à 128 kbps est une valeur sûre pour tout.",
    },
  ],
  content: (
    <>
      <h2 id="why">Pourquoi compresser des fichiers audio ?</h2>
      <p>
        Les fichiers audio peuvent être étonnamment lourds. Quelques minutes de
        WAV non compressé peuvent atteindre des dizaines de mégaoctets, un
        épisode de podcast à débit élevé peut faire gonfler un téléchargement, et
        les albums FLAC sans perte remplissent un disque sans peine. Que vous
        envoyiez un mémo vocal par e-mail, mettiez en ligne un podcast, joigniez
        une chanson à un message ou économisiez de l&rsquo;espace sur votre
        téléphone, réduire le fichier rend tout plus rapide et moins coûteux à
        déplacer et à stocker, généralement sans différence audible avec des
        réglages raisonnables.
      </p>
      <p>
        Comme cet outil s&rsquo;exécute entièrement sur votre appareil,
        c&rsquo;est aussi la façon privée de procéder. La plupart des
        compresseurs audio en ligne envoient votre enregistrement vers un serveur
        distant, le traitent là-bas et vous le renvoient, ce qui signifie
        qu&rsquo;une copie de votre voix ou de votre musique se retrouve sur la
        machine de quelqu&rsquo;un d&rsquo;autre. Ici, votre fichier est chargé en
        mémoire, réencodé avec une version de FFmpeg compilée en WebAssembly,
        puis vous est rendu directement. Il ne touche jamais au réseau.
      </p>
      <p>
        Cette conception exclusivement locale présente des avantages pratiques
        au-delà de la confidentialité. Il n&rsquo;y a aucune attente
        d&rsquo;envoi ou de téléchargement pendant que le fichier traverse
        internet, aucune file d&rsquo;attente derrière les travaux
        d&rsquo;autres personnes, ni aucune limite de taille imposée par un
        serveur que vous ne contrôlez pas. La première fois que vous utilisez
        l&rsquo;outil, il télécharge le moteur FFmpeg une seule fois ; ensuite, le
        même moteur est réutilisé pour chaque fichier, et même les compressions
        répétées restent rapides car tout le travail se fait sur votre propre
        processeur.
      </p>

      <h2 id="bitrate">Débit et qualité : comment choisir</h2>
      <p>
        Le plus grand levier sur la taille d&rsquo;un fichier audio est le{" "}
        <strong>débit</strong> : le nombre de kilobits utilisés pour stocker
        chaque seconde de son, écrit en kbps. Divisez le débit par deux et vous
        divisez à peu près le fichier par deux. La contrepartie est que les
        débits plus faibles écartent plus de détails, donc l&rsquo;objectif est
        de choisir le débit le plus bas auquel vos oreilles ne perçoivent encore
        aucune différence.
      </p>
      <p>
        Le débit interagit aussi avec le type d&rsquo;audio que vous encodez. La
        musique dense et complexe — mixages chargés, cymbales, guitares saturées
        — est plus difficile à compresser et profite d&rsquo;un débit plus élevé,
        tandis qu&rsquo;un simple enregistrement de voix reste net même fortement
        compressé. Il n&rsquo;existe pas de nombre &laquo;&nbsp;correct&nbsp;&raquo;
        unique ; le meilleur réglage est celui qui sonne proprement sur les
        enceintes ou les écouteurs que vos auditeurs utiliseront réellement. Une
        façon rapide de décider est d&rsquo;exporter le même extrait à deux
        débits et de les comparer dans la foulée. Servez-vous de ces valeurs
        comme points de départ :
      </p>
      <ul>
        <li>
          <strong>256 kbps</strong> : quasi transparent pour la musique ;
          choisissez-le quand vous voulez le plus petit fichier qui sonne encore
          essentiellement comme l&rsquo;original.
        </li>
        <li>
          <strong>192 kbps</strong> : excellente qualité pour la musique avec un
          gain de taille notable par rapport à la source.
        </li>
        <li>
          <strong>128 kbps</strong> : le classique polyvalent. Pour la plupart
          des auditeurs, il est indiscernable de la musique de qualité CD sur des
          enceintes et des écouteurs de tous les jours, pour une fraction de la
          taille.
        </li>
        <li>
          <strong>96 kbps</strong> : idéal pour le contenu parlé comme les
          livres audio, les podcasts et les mémos vocaux, où il n&rsquo;y a pas de
          musique à préserver.
        </li>
      </ul>
      <p>
        Une réserve importante : MP3 comme AAC sont des formats{" "}
        <strong>avec perte</strong>, et réencoder un fichier avec perte écarte
        toujours un peu plus. Compressez toujours à partir de la source de la
        plus haute qualité dont vous disposez, et ne réencodez jamais un fichier
        déjà compressé à bas débit vers un débit plus élevé : cela ne fait que
        gonfler la taille sans récupérer le moindre détail perdu.
      </p>
      <p>
        Il est également utile de savoir ce qu&rsquo;implique en pratique une
        taille de fichier cible. Le débit correspond à peu près à la taille du
        fichier divisée par la durée, donc un extrait d&rsquo;une minute à
        128 kbps avoisine un mégaoctet, et une chanson typique de trois à quatre
        minutes au même débit tourne autour de trois à quatre mégaoctets. Si vous
        avez une limite de taille stricte à respecter — un plafond de pièce
        jointe d&rsquo;e-mail, un formulaire de mise en ligne ou une application
        de messagerie —, divisez cette limite par la durée de la piste pour
        estimer le débit que vous pouvez vous permettre, puis arrondissez vers le
        bas au préréglage le plus proche.
      </p>

      <h2 id="formats">MP3, AAC, WAV et FLAC expliqués</h2>
      <p>
        Les formats audio se répartissent en deux camps. Les formats{" "}
        <strong>sans perte</strong> comme WAV et FLAC conservent chaque
        échantillon de l&rsquo;enregistrement original : WAV le stocke non
        compressé (énorme), tandis que FLAC l&rsquo;empaquette plus petit sans
        rien perdre. Les formats <strong>avec perte</strong> comme MP3, AAC et
        OGG suppriment définitivement le son que l&rsquo;oreille humaine est la
        moins susceptible de percevoir, ce qui leur permet d&rsquo;obtenir des
        réductions de taille spectaculaires. Vous pouvez lire un aperçu technique
        clair de ces codecs dans{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          le guide des codecs audio web de MDN
        </a>
        .
      </p>
      <p>
        C&rsquo;est exactement là que se trouvent les plus grandes économies.
        Convertir un fichier WAV ou FLAC en un MP3 ou AAC à 128 kbps réduit
        couramment la taille de <strong>80 à 90&nbsp;%</strong>, car vous passez
        du stockage de chaque échantillon au stockage de ce que vous pouvez
        seulement entendre. Si vous conservez une archive maîtresse, gardez
        l&rsquo;original sans perte ; mais pour partager, diffuser ou mettre en
        ligne, une copie avec perte est presque toujours le bon choix. Lorsque
        vous avez besoin d&rsquo;une compatibilité maximale, choisissez MP3 ;
        lorsque vous voulez le meilleur son à un débit donné ou que vous êtes
        dans l&rsquo;écosystème Apple, choisissez AAC (.m4a).
      </p>
      <p>
        Une confusion fréquente concerne la différence entre un conteneur et un
        codec. Un fichier <strong>.m4a</strong> est un conteneur qui héberge
        généralement de l&rsquo;audio encodé en AAC, tandis que{" "}
        <strong>.mp3</strong> est à la fois un conteneur et son codec. OGG, quant
        à lui, est un conteneur qui transporte le plus souvent de l&rsquo;audio
        Vorbis ou Opus. Cet outil vous remet toujours un résultat propre en MP3
        ou AAC quel que soit ce que vous y mettez, vous n&rsquo;avez donc pas à
        vous soucier d&rsquo;extensions incohérentes ni de fichiers qui ne
        s&rsquo;ouvrent pas : la sortie est exactement ce que son nom indique et
        se lit aussi bien dans les navigateurs, les téléphones, les autoradios que
        dans les logiciels de montage.
      </p>

      <h2 id="tips">Conseils pour obtenir les meilleurs résultats</h2>
      <ul>
        <li>
          <strong>Adaptez le débit au contenu.</strong> Descendez les
          enregistrements parlés à 96 kbps et réservez 192 à 256 kbps pour la
          musique que vous voulez garder proche de la source.
        </li>
        <li>
          <strong>N&rsquo;augmentez pas artificiellement la qualité.</strong>{" "}
          Réencoder un fichier de 96 kbps à 256 kbps ne restaurera pas la
          qualité ; cela ne fait qu&rsquo;agrandir le fichier. Partez du meilleur
          original dont vous disposez.
        </li>
        <li>
          <strong>Vous extrayez l&rsquo;audio d&rsquo;un clip ?</strong> Si votre
          son est prisonnier d&rsquo;une vidéo, réduisez d&rsquo;abord la vidéo
          avec le{" "}
          <Link href="/fr/video-compressor">compresseur vidéo</Link>, qui
          réencode la piste audio dans le cadre du traitement, puis amenez
          l&rsquo;audio exporté ici pour un contrôle plus fin du débit et du
          format.
        </li>
        <li>
          <strong>Conservez un master sans perte.</strong> Compressez des copies
          pour le partage, mais archivez le WAV ou FLAC original afin de toujours
          pouvoir réexporter à une autre qualité plus tard.
        </li>
        <li>
          <strong>Ménagez votre appareil avec les fichiers énormes.</strong>{" "}
          Comme l&rsquo;encodage s&rsquo;exécute dans votre navigateur, un WAV de
          plusieurs centaines de mégaoctets nécessite pas mal de mémoire. Sur un
          téléphone, compressez un seul gros fichier à la fois et fermez les
          autres onglets si vous constatez un ralentissement.
        </li>
      </ul>
    </>
  ),
};
