import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "À propos de FileShrinking",
  metaDescription:
    "Découvrez qui crée FileShrinking et pourquoi notre compresseur 100 % dans le navigateur garde vos images, PDF, vidéos et audio sur votre appareil.",
  title: "À propos de FileShrinking",
  intro: (
    <>
      FileShrinking est une boîte à outils gratuite et soucieuse de la
      confidentialité pour compresser des images, des PDF, des vidéos et de
      l&rsquo;audio. Chaque fichier est traité entièrement dans votre navigateur,
      si bien que rien de ce que vous ouvrez ici n&rsquo;est jamais envoyé vers un
      serveur.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2>Notre mission</h2>
      <p>
        FileShrinking existe pour rendre la compression de fichiers véritablement
        gratuite, véritablement privée et accessible à toute personne disposant
        d&rsquo;un navigateur web. Les fichiers volumineux ralentissent les sites
        web, encombrent les boîtes de réception et saturent le stockage des
        téléphones et les forfaits cloud. Les réduire ne devrait pas exiger
        d&rsquo;installer un logiciel, de créer un compte, de payer un abonnement
        ni de confier vos documents personnels à une entreprise que vous
        n&rsquo;avez jamais rencontrée. Notre objectif est simple : vous offrir une
        compression de qualité professionnelle qui s&rsquo;exécute sur votre propre
        appareil, ne coûte rien et respecte votre vie privée dès la conception.
      </p>

      <h2>Pourquoi le &laquo;&nbsp;100 % dans votre navigateur&nbsp;&raquo; est important</h2>
      <p>
        La plupart des compresseurs en ligne fonctionnent en envoyant votre
        fichier vers un serveur distant, en le traitant là-bas et en vous renvoyant
        le résultat. Cela signifie qu&rsquo;une copie de votre photo, de votre
        contrat ou de votre vidéo personnelle se retrouve sur l&rsquo;ordinateur
        d&rsquo;une autre personne, au moins temporairement. FileShrinking
        fonctionne différemment. Lorsque vous choisissez un fichier, celui-ci est
        chargé dans la mémoire de votre navigateur et compressé localement à
        l&rsquo;aide de versions WebAssembly d&rsquo;encodeurs open source de
        confiance comme MozJPEG, OxiPNG et FFmpeg. Le fichier final vous est
        directement restitué.
      </p>
      <p>
        Le résultat concret, c&rsquo;est que <strong>vos fichiers ne quittent
        physiquement jamais votre appareil</strong>. Il n&rsquo;y a rien que nous
        puissions stocker, rien que nous puissions divulguer lors d&rsquo;une fuite
        de données et rien que nous puissions vendre ou partager. Vous pouvez le
        vérifier par vous-même : ouvrez n&rsquo;importe lequel de nos outils,
        coupez votre connexion internet et la compression fonctionne toujours,
        parce que tout le travail lourd s&rsquo;effectue sur votre machine. Ce
        modèle exclusivement local est le fondement de la confiance que nous vous
        demandons de nous accorder, et ce n&rsquo;est pas un slogan marketing sur
        lequel nous pourrions revenir discrètement par la suite.
      </p>

      <h2>Ce que nous créons</h2>
      <p>
        FileShrinking est une suite croissante d&rsquo;outils ciblés, chacun dédié
        à une seule tâche. Notre{" "}
        <Link href="/fr/image-compressor">compresseur d&rsquo;images</Link> prend
        en charge le JPEG, le PNG, le WebP, l&rsquo;AVIF et le GIF, avec des outils
        complémentaires pour convertir et redimensionner. À côté des outils
        d&rsquo;image, nous proposons un compresseur de PDF qui recompresse les
        images intégrées dans les documents, la compression vidéo dans le
        navigateur pour des formats comme MP4, MOV, WebM, MKV et AVI, ainsi
        qu&rsquo;un compresseur audio pour MP3, WAV et AAC. Tous les outils
        partagent les mêmes principes : aucun envoi, aucune inscription, aucun
        filigrane et aucune limite artificielle quant au nombre ou à la taille des
        fichiers au-delà de ce que permet la mémoire de votre propre appareil.
      </p>

      <h2>Comment nous documentons et rédigeons nos guides</h2>
      <p>
        Au-delà des outils, nous publions des guides pratiques et des articles
        explicatifs sur notre{" "}
        <Link href="/fr/blog">blog</Link> qui expliquent comment fonctionnent
        réellement les formats de compression et comment obtenir le meilleur
        compromis qualité-taille. Nous prenons l&rsquo;exactitude au sérieux. Notre
        processus éditorial part de sources primaires et faisant autorité : les
        spécifications des formats elles-mêmes, la documentation de la plateforme
        web de{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>{" "}
        et du{" "}
        <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
          W3C
        </a>
        , ainsi que la documentation des encodeurs open source sur lesquels
        reposent nos outils. Nous confrontons les affirmations au comportement réel
        des outils que nous publions, nous citons nos sources pour que vous
        puissiez les vérifier et nous révisons les articles lorsque les normes ou
        la prise en charge par les navigateurs évoluent. Lorsque nous avons un
        doute, nous le disons plutôt que de deviner.
      </p>

      <h2>Qui maintient FileShrinking</h2>
      <p>
        FileShrinking est créé et maintenu par une petite équipe indépendante de
        développeurs web qui se soucient de la performance et de la confidentialité
        sur le web moderne. Nous ne sommes pas financés par du capital-risque et
        nous n&rsquo;exploitons pas de commerce de données ; le site reste gratuit
        grâce à une publicité discrète et clairement identifiée.
      </p>
      <p>
        Nos mainteneurs viennent d&rsquo;horizons liés à la performance web et au
        traitement des médias, et ont passé des années à aider des équipes à
        publier des pages plus légères et plus rapides sans sacrifier la qualité.
        L&rsquo;équipe dirige l&rsquo;orientation technique du projet, examine
        chaque outil avant sa sortie et est responsable des standards éditoriaux
        décrits plus haut. Vous pouvez nous contacter directement à{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2>Publicité, analytique et votre consentement</h2>
      <p>
        Pour garder FileShrinking gratuit, nous affichons de la publicité et
        utilisons des outils d&rsquo;analytique pour comprendre quels outils sont
        utiles. Ces services tiers sont{" "}
        <strong>soumis à votre consentement</strong> : les scripts de publicité et
        d&rsquo;analytique ne se chargent qu&rsquo;après votre accord, et vous
        pouvez les refuser tout en continuant à utiliser chaque outil. Surtout,
        rien de tout cela ne change la manière dont vos fichiers sont traités : la
        publicité et l&rsquo;analytique ne reçoivent jamais vos documents, photos,
        vidéos ou fichiers audio, parce que ceux-ci ne quittent jamais votre
        appareil en premier lieu. Pour tous les détails, consultez nos politiques
        de confidentialité et de cookies publiées.
      </p>

      <h2>Nous contacter</h2>
      <p>
        Les questions, les rapports de bugs ou les idées d&rsquo;outils que nous
        devrions créer ensuite sont toujours les bienvenus. Consultez notre{" "}
        <Link href="/fr/contact">page de contact</Link> ou écrivez-nous à{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Nous
        lisons tout et utilisons vos retours pour décider de ce que nous devons
        améliorer.
      </p>
    </>
  ),
};
