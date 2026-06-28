import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-video-for-email-and-web",
  title: "Comment compresser une vidéo pour email, web et réseaux",
  description:
    "Réglages pratiques pour réduire une vidéo sous la limite email de 25 Mo, des intégrations web rapides et les réseaux : résolution, CRF, H.264 et découpe.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  authorId: "maya",
  tags: ["Vidéo", "Tutoriel"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        La vidéo est ce qu&rsquo;il y a de plus lourd à partager pour la plupart
        des gens. Une seule minute de séquence tout droit sortie d&rsquo;un
        téléphone ou d&rsquo;une caméra peut peser des centaines de mégaoctets :
        bien trop volumineux pour être joint à un email, lent à charger sur une
        page web et très susceptible d&rsquo;être recompressé dès qu&rsquo;une
        plateforme sociale y touche. La bonne nouvelle, c&rsquo;est que vous
        pouvez réduire presque n&rsquo;importe quel clip de façon spectaculaire
        sans qu&rsquo;il ait l&rsquo;air mauvais, à condition d&rsquo;adapter
        quelques réglages à la destination de la vidéo. Ce guide parcourt les
        trois cibles les plus courantes &mdash;email, web et réseaux
        sociaux&mdash; et les leviers exacts qui vous y mènent.
      </p>

      <h2 id="why-video-is-big">Pourquoi les fichiers vidéo deviennent si volumineux</h2>
      <p>
        Une vidéo n&rsquo;est qu&rsquo;une longue séquence d&rsquo;images jouées
        rapidement, plus de l&rsquo;audio. Sa taille dépend de quatre choses :{" "}
        <strong>la résolution</strong> (combien de pixels par image),{" "}
        <strong>la fréquence d&rsquo;images</strong> (images par seconde),{" "}
        <strong>la durée</strong> (combien de secondes) et le{" "}
        <strong>débit</strong> (combien de bits le codeur dépense par seconde de
        séquence). Un clip en 4K à 60 fps a environ neuf fois plus de pixels
        qu&rsquo;un clip en 1080p à 30 fps avant même de changer quoi que ce soit
        d&rsquo;autre. C&rsquo;est pourquoi la chose la plus efficace que vous
        puissiez faire est de réduire la résolution et la durée : vous supprimez
        des données, vous ne faites pas que les compresser.
      </p>
      <p>
        Le débit, c&rsquo;est là que se produit la compression réelle. Les codecs
        modernes jettent les détails que votre œil a le moins de chances de
        remarquer, donc un débit plus faible signifie un fichier plus petit avec
        une certaine perte de fidélité. L&rsquo;art consiste à trouver le débit
        assez petit pour votre cible mais assez élevé pour que personne ne le
        remarque.
      </p>

      <h2 id="resolution-and-trimming">Commencez par la résolution et la durée</h2>
      <p>
        Avant de toucher aux réglages du codeur, demandez-vous si vous avez
        vraiment besoin de chaque pixel et de chaque seconde. Réduire la
        résolution est le changement au plus fort impact que vous puissiez faire :
      </p>
      <ul>
        <li>
          <strong>De 4K à 1080p</strong> réduit le nombre de pixels au quart.
          Pour l&rsquo;email et presque toute intégration web, 1080p suffit
          largement.
        </li>
        <li>
          <strong>De 1080p à 720p</strong> le réduit encore de moitié environ et
          convient parfaitement aux captures d&rsquo;écran rapides, aux démos et
          à tout ce qui sera lu dans une petite fenêtre.
        </li>
        <li>
          <strong>Couper</strong> les blancs du début et de la fin, ou ne garder
          que la partie qui compte, réduit la taille du fichier de façon
          linéaire. Un clip de 30 secondes pèse la moitié d&rsquo;un clip de 60
          secondes à qualité égale.
        </li>
      </ul>
      <p>
        Si vous ne devez retenir qu&rsquo;une chose, que ce soit celle-ci :
        réduire un clip 4K de 2 minutes en un extrait 720p de 40 secondes fera
        bien plus pour la taille de votre fichier que n&rsquo;importe quel
        ajustement de débit.
      </p>

      <h2 id="crf-and-bitrate">CRF et débit : contrôler la qualité</h2>
      <p>
        Une fois la résolution et la durée fixées, vous contrôlez la qualité avec
        un débit cible ou avec un facteur de qualité appelé <strong>CRF</strong>{" "}
        (Constant Rate Factor, facteur de débit constant). Le CRF indique au
        codeur de viser une qualité visuelle constante et de dépenser le débit
        qu&rsquo;il faut, image par image : les scènes très animées reçoivent plus
        de bits et les scènes statiques moins. Pour H.264, le CRF va d&rsquo;environ
        0 (sans perte, énorme) à 51 (minuscule, laid), et les valeurs plus basses
        signifient une meilleure qualité :
      </p>
      <ul>
        <li>
          <strong>CRF 18&ndash;20 :</strong> visuellement quasi sans perte,
          fichiers plus volumineux ; idéal pour des masters ou de la vidéo web où
          la qualité prime.
        </li>
        <li>
          <strong>CRF 23 :</strong> la valeur par défaut courante ; un bon
          équilibre entre taille et qualité pour la plupart des usages web et
          réseaux.
        </li>
        <li>
          <strong>CRF 26&ndash;28 :</strong> nettement plus petit, avec un léger
          adoucissement ; pratique quand vous devez respecter une limite de
          taille stricte comme un plafond d&rsquo;email.
        </li>
      </ul>
      <p>
        Quand vous avez un plafond strict &mdash;par exemple une pièce jointe
        d&rsquo;email de 25 Mo&mdash; un débit cible est plus prévisible que le
        CRF. Le calcul approximatif : une taille de fichier cible en mégabits
        (multipliez les Mo par 8) divisée par la durée en secondes vous donne
        votre budget total de débit. Réservez environ 128 kbps pour l&rsquo;audio
        et donnez le reste à la vidéo. Pour un plafond de 25 Mo sur un clip de 60
        secondes, cela fait environ 3,3 Mbps au total, largement suffisant pour
        un 720p propre.
      </p>

      <h2 id="codec-h264">Choisissez H.264 pour la compatibilité</h2>
      <p>
        Le choix du codec décide si votre vidéo se lit partout ou échoue en
        silence. <strong>H.264</strong> (aussi appelé AVC) est de loin
        l&rsquo;option la plus sûre : il se lit dans tous les navigateurs
        modernes, les aperçus des clients de messagerie, les téléphones et les
        plateformes sociales, et il se combine avec de l&rsquo;audio AAC dans un
        conteneur MP4. Les codecs plus récents comme H.265/HEVC, VP9 et AV1
        compressent mieux &mdash;parfois de 30 à 50&nbsp;% plus petits à qualité
        égale&mdash; mais leur prise en charge est inégale, et un destinataire
        d&rsquo;email sur un appareil ancien pourrait ne rien voir du tout. Pour
        partager, restez sur H.264 dans un MP4 à moins de contrôler exactement
        comment le fichier sera lu.
      </p>
      <p>
        Si vous voulez comprendre quels codecs un navigateur donné prend
        réellement en charge et pourquoi, MDN tient une référence exhaustive et à
        jour dans son{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guide des codecs vidéo pour le web
        </a>
        . C&rsquo;est la meilleure source unique pour décider quand il est sûr
        d&rsquo;aller au-delà de H.264.
      </p>

      <h2 id="targets">Réglages selon la destination</h2>
      <p>
        Voici comment les pièces s&rsquo;assemblent pour chaque cible courante.
      </p>
      <ul>
        <li>
          <strong>Pièces jointes d&rsquo;email :</strong> la plupart des
          fournisseurs limitent les pièces jointes autour de 25 Mo (Gmail et
          Outlook se situent tous deux près de cette valeur). Visez 720p,
          H.264/MP4 et coupez sans pitié. Si vous dépassez encore, descendez à
          CRF 26&ndash;28 ou fixez un débit cible avec le calcul ci-dessus. Pour
          tout ce qui dépasse quelques minutes, un lien est généralement plus
          aimable qu&rsquo;une pièce jointe.
        </li>
        <li>
          <strong>Intégration web :</strong> la vitesse de la page compte, alors
          gardez les fichiers légers : 1080p à CRF 23 est un point idéal, et 720p
          pour les arrière-plans ou les boucles décoratives. Utilisez MP4/H.264
          comme base pour que la vidéo se lise sans format de repli.
        </li>
        <li>
          <strong>Plateformes sociales :</strong> Instagram, TikTok, X et
          d&rsquo;autres réencodent tout ce que vous téléversez, alors inutile
          d&rsquo;envoyer un master énorme : il sera compressé de toute façon.
          Téléversez un fichier H.264 en 1080p propre à un débit raisonnable et
          laissez la plateforme faire sa passe. Respecter le format
          d&rsquo;image de la plateforme (vertical 9:16 pour les Reels et TikTok)
          compte plus que la taille brute.
        </li>
      </ul>

      <h2 id="in-browser">Compresser en privé, dans votre navigateur</h2>
      <p>
        Vous n&rsquo;avez pas besoin de téléverser votre séquence sur le serveur
        d&rsquo;un inconnu pour la compresser. Le{" "}
        <Link href="/fr/video-compressor">compresseur vidéo</Link> de
        FileShrinking s&rsquo;exécute entièrement dans votre navigateur : votre
        vidéo est traitée sur votre propre appareil et n&rsquo;en sort jamais, ce
        qui compte pour tout ce qui est personnel ou confidentiel. Il existe aussi
        des outils dédiés pour les formats les plus courants :{" "}
        <Link href="/fr/compress-mp4">compresser MP4</Link> pour le conteneur
        H.264 universel et <Link href="/fr/compress-mov">compresser MOV</Link>{" "}
        pour les séquences tout droit sorties d&rsquo;un iPhone ou d&rsquo;une
        caméra. Si un clip est principalement de l&rsquo;audio qui se trouve dans
        une enveloppe vidéo, le{" "}
        <Link href="/fr/audio-compressor">compresseur audio</Link> peut réduire
        la piste sonore à elle seule.
      </p>
      <p>
        Le seul compromis honnête : l&rsquo;encodage dans le navigateur utilise le
        processeur de votre ordinateur, il est donc <strong>plus lent
        qu&rsquo;un service cloud</strong> pour les clips longs ou en haute
        résolution, et un fichier très volumineux peut prendre un moment. En
        échange de la confidentialité de ne jamais téléverser votre vidéo, la
        plupart des gens estiment que cette attente en vaut largement la peine.
        Partez de votre original de la plus haute qualité, réduisez la résolution
        et coupez d&rsquo;abord, choisissez H.264 et ce n&rsquo;est qu&rsquo;ensuite
        que vous ajusterez le CRF ou le débit : faites cela et vous atteindrez
        n&rsquo;importe quelle cible email, web ou réseaux avec de la marge.
      </p>
    </>
  );
}
