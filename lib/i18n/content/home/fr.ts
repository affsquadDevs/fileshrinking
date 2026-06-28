import type { HomeContent } from "@/lib/i18n/content/home";

export const content: HomeContent = {
  metaTitle: "FileShrinking — Compression de fichiers privée et gratuite",
  metaDescription:
    "Compressez images, PDF, vidéos et audio gratuitement, dans votre navigateur. Vos fichiers ne quittent jamais votre appareil. Sans envoi ni inscription.",
  hero: {
    badge: "Aucun envoi · Les fichiers restent sur votre appareil",
    titleLead: "Réduisez n’importe quel fichier,",
    titleHighlight: "directement dans votre navigateur",
    subtitle:
      "Compression gratuite et respectueuse de la vie privée pour images, PDF, vidéos et audio. Vos fichiers sont traités entièrement sur votre appareil : rien n’est jamais envoyé.",
    ctaImages: "Compresser des images",
    ctaPdf: "Compresser un PDF",
    trust: ["Aucun fichier envoyé", "100 % gratuit", "Sans inscription"],
  },
  popular: "Populaire :",
  toolsEyebrow: "Tous les outils dont vous avez besoin",
  toolsTitle: "Compressez et convertissez n’importe quel fichier",
  toolsDescription:
    "Un outil dédié à chaque format, chacun fonctionnant localement, avec un retour clair sur la taille avant et après.",
  viewAll: "Tout voir",
  whyEyebrow: "Pourquoi FileShrinking",
  whyTitle: "Une compression qui respecte votre vie privée",
  whyDescription:
    "La plupart des compresseurs en ligne envoient vos fichiers sur leurs serveurs. Nous avons adopté une approche différente, et elle s’avère meilleure à presque tous les égards.",
  features: [
    {
      title: "100 % privé",
      body: "Les fichiers sont lus et compressés sur votre appareil. Rien n’est jamais envoyé sur un serveur : il n’y a aucun serveur où les envoyer.",
    },
    {
      title: "Rapide et utilisable hors ligne",
      body: "Aucun aller-retour d’envoi ou de téléchargement. La compression s’exécute localement avec WebAssembly, donc elle fonctionne même si votre connexion est coupée.",
    },
    {
      title: "Gratuit, sans inscription",
      body: "Chaque outil est gratuit, sans compte, sans filigrane et sans e-mail requis. Utilisez-le autant que vous le souhaitez.",
    },
    {
      title: "Aucune limite de nombre de fichiers",
      body: "Traitez de nombreux fichiers à la fois et téléchargez-les tous dans une seule archive zip. La seule limite est la mémoire de votre appareil.",
    },
  ],
  howEyebrow: "Comment ça marche",
  howTitle: "Trois étapes, zéro envoi",
  howDescription:
    "D’un fichier à un fichier plus léger en quelques secondes, sans que vos données ne quittent jamais votre appareil.",
  steps: [
    {
      title: "Ajoutez vos fichiers",
      body: "Glissez-déposez, parcourez ou collez depuis votre presse-papiers. Mettez-en autant que vous voulez en file d’attente : ils restent sur votre appareil.",
    },
    {
      title: "Choisissez vos réglages",
      body: "Sélectionnez un préréglage ou ajustez la qualité avec précision. Voyez les économies estimées se mettre à jour avant de valider.",
    },
    {
      title: "Téléchargez instantanément",
      body: "Récupérez chaque fichier compressé, ou téléchargez le tout dans une archive zip. Sans attendre un envoi ni une file d’attente serveur.",
    },
  ],
  os: {
    title: "Entièrement open source",
    body: "Ne nous croyez pas sur parole. FileShrinking est 100 % open source sous licence MIT : l’intégralité du code est publique, afin que chacun puisse vérifier que vos fichiers ne quittent jamais votre appareil.",
    points: [
      {
        title: "Auditable",
        body: "Lisez le code qui s’exécute dans votre navigateur. Aucun envoi caché, aucun suivi de vos fichiers.",
      },
      {
        title: "Sous licence MIT",
        body: "Libre d’utilisation, de fork et de développement, pour des projets personnels ou commerciaux.",
      },
      {
        title: "Auto-hébergeable",
        body: "Clonez-le et exécutez votre propre instance privée où vous le souhaitez.",
      },
    ],
    button: "Voir le code source sur GitHub",
  },
  faqTitle: "Questions fréquentes",
  faqs: [
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. Chaque outil de FileShrinking s’exécute entièrement dans votre navigateur web grâce à WebAssembly. Vos fichiers sont chargés en mémoire sur votre propre appareil, compressés localement, puis vous sont rendus pour le téléchargement. Ils ne transitent jamais par le réseau, il n’y a donc rien que nous, ou quiconque, puissions voir.",
    },
    {
      q: "FileShrinking est-il vraiment gratuit ?",
      a: "Oui. Tous nos compresseurs et convertisseurs sont gratuits, sans compte, sans filigrane et sans limites cachées. Le site est financé par une publicité discrète, c’est pourquoi vous pouvez voir des annonces à côté du contenu.",
    },
    {
      q: "La compression va-t-elle réduire la qualité de mon fichier ?",
      a: "Cela dépend du format et des réglages. Les options sans perte (comme notre optimiseur PNG) réduisent la taille sans aucun changement de qualité. Les options avec perte (JPEG, WebP, AVIF, vidéo) sacrifient une quantité de qualité minime, généralement invisible, pour un fichier bien plus léger, et vous contrôlez exactement combien grâce au curseur de qualité.",
    },
    {
      q: "Quelle est la taille de fichier maximale que je peux compresser ?",
      a: "Il n’y a pas de limite fixe, car le traitement a lieu sur votre appareil. Le plafond pratique correspond à la mémoire disponible de votre appareil. Les grandes images et l’audio sont gérés sans difficulté ; pour la vidéo, nous recommandons des fichiers de moins de 150 Mo environ, car l’encodage vidéo dans le navigateur consomme beaucoup de mémoire.",
    },
    {
      q: "Quels navigateurs et appareils sont pris en charge ?",
      a: "Tout navigateur moderne — Chrome, Edge, Firefox, Safari — sur ordinateur ou mobile. Les outils utilisent une technologie web standard qui fonctionne partout, même si les appareils plus rapides compresseront naturellement les gros fichiers plus vite.",
    },
    {
      q: "Stockez-vous ou suivez-vous mes fichiers ?",
      a: "Nous ne le pouvons pas. Les fichiers ne quittent jamais votre navigateur, nous n’en avons donc aucune copie ni aucun moyen d’y accéder. Nous utilisons des statistiques respectueuses de la vie privée uniquement après votre consentement, et vous pouvez modifier vos choix de consentement à tout moment depuis le pied de page.",
    },
    {
      q: "FileShrinking est-il open source ?",
      a: "Oui — FileShrinking est entièrement open source sous licence MIT. L’intégralité du code est publique sur GitHub, afin que chacun puisse examiner exactement son fonctionnement, confirmer qu’aucun fichier n’est envoyé, le forker, ou même héberger sa propre copie privée.",
    },
  ],
  ctaTitle: "Prêt à réduire vos fichiers ?",
  ctaBody: "Sans compte, sans envoi, sans piège. Choisissez un outil et essayez-le maintenant.",
  ctaStart: "Commencer à compresser",
  ctaTrust: "Pourquoi nous faire confiance",
};
