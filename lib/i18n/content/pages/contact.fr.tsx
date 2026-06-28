import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Nous contacter",
  metaDescription:
    "Contactez FileShrinking : questions, retours, bugs ou idées. Écrivez à hello@fileshrinking.com — confidentialité d'abord, aucune donnée conservée.",
  title: "Nous contacter",
  intro: (
    <>
      Nous serions ravis d&rsquo;avoir de vos nouvelles. Que vous ayez une
      question, un retour, un bug à signaler ou une idée de fonctionnalité, le
      formulaire ci-dessous est le moyen le plus rapide de joindre les personnes
      qui conçoivent FileShrinking.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="get-in-touch">Prendre contact</h2>
      <p>
        FileShrinking est une boîte à outils gratuite et axée sur la
        confidentialité pour réduire des fichiers directement dans votre
        navigateur &mdash; des images{" "}
        <Link href="/fr/compress-jpeg">JPEG</Link> et{" "}
        <Link href="/fr/compress-png">PNG</Link> aux{" "}
        <Link href="/fr/pdf-compressor">documents PDF</Link>, en passant par la{" "}
        <Link href="/fr/video-compressor">vidéo</Link> et l&rsquo;
        <Link href="/fr/audio-compressor">audio</Link>. Comme chaque outil
        s&rsquo;exécute entièrement sur votre propre appareil, nous ne voyons pas
        vos fichiers et ne pouvons ni les récupérer ni les inspecter. Mais pour
        tout le reste &mdash; le fonctionnement d&rsquo;un outil, la raison pour
        laquelle un résultat a tel aspect, ou ce que nous devrions créer ensuite
        &mdash; nous sommes vraiment heureux de vous aider.
      </p>
      <p>Les raisons pour lesquelles les gens nous écrivent en général :</p>
      <ul>
        <li>
          <strong>Questions</strong> sur le fonctionnement d&rsquo;un outil, le
          format à choisir, ou la manière d&rsquo;obtenir le fichier le plus
          petit sans perdre en qualité.
        </li>
        <li>
          <strong>Signalements de bugs</strong> &mdash; un fichier qui ne se
          traite pas, un bouton qui ne répond pas, ou tout ce qui semble cassé.
          Nous indiquer votre navigateur et votre système d&rsquo;exploitation
          nous aide à le reproduire rapidement.
        </li>
        <li>
          <strong>Demandes de fonctionnalités</strong> &mdash; un format que vous
          aimeriez que nous prenions en charge, une option qui vous manque, ou un
          flux de travail que nous pourrions rendre plus fluide.
        </li>
        <li>
          <strong>Retours</strong> en tout genre, y compris ce que vous adorez et
          ce qui vous frustre. Tout cela façonne ce que nous faisons ensuite.
        </li>
      </ul>

      <h2 id="form">Envoyez-nous un message</h2>
      <p>
        Remplissez le formulaire ci-dessous et cliquez sur «&nbsp;Envoyer le
        message&nbsp;». Voici quelque chose d&rsquo;important à savoir sur son
        fonctionnement :{" "}
        <strong>
          le formulaire rédige un e-mail dans votre propre application de
          messagerie au lieu de nous envoyer quoi que ce soit directement.
        </strong>{" "}
        Lorsque vous validez, votre appareil ouvre votre client de messagerie par
        défaut (comme Apple Mail, Outlook ou Gmail) avec le message pré-rempli et
        adressé à nous. Rien n&rsquo;est transmis tant que <em>vous</em> ne
        cliquez pas sur envoyer dans cette application. Par conséquent, aucune
        donnée de message n&rsquo;est collectée, transmise à un serveur ou
        stockée par FileShrinking via cette page &mdash; le même principe de
        confidentialité d&rsquo;abord qui garde vos fichiers sur votre appareil
        s&rsquo;applique aussi à vos messages.
      </p>

      <ContactForm />

      <h2 id="email">Vous préférez écrire directement par e-mail ?</h2>
      <p>
        Vous pouvez toujours nous joindre à l&rsquo;ancienne. Écrivez à{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>{" "}
        depuis le compte de votre choix, et votre message arrivera directement
        dans notre boîte de réception du support. C&rsquo;est pratique si votre
        navigateur bloque l&rsquo;action «&nbsp;ouvrir mon application de
        messagerie&nbsp;» du formulaire, si vous êtes sur un ordinateur partagé
        sans client de messagerie configuré, ou si vous voulez simplement joindre
        une capture d&rsquo;écran &mdash; ce qui rend souvent un signalement de
        bug bien plus facile à comprendre.
      </p>

      <h2 id="response-times">Délais de réponse</h2>
      <p>
        FileShrinking est géré par une petite équipe, nous lisons donc chaque
        message personnellement plutôt que de les acheminer vers un centre
        d&rsquo;appels. Nous nous efforçons de répondre sous{" "}
        <strong>deux à trois jours ouvrables</strong>. En période de forte
        affluence, ou pour des questions techniques délicates nécessitant une
        investigation, cela peut prendre un peu plus de temps &mdash; merci
        d&rsquo;avance pour votre patience. Si vous n&rsquo;avez pas de réponse au
        bout d&rsquo;une semaine environ, vérifiez votre dossier spam ou courrier
        indésirable, puis n&rsquo;hésitez pas à nous réécrire au cas où votre
        message initial se serait égaré.
      </p>
      <p>
        Veuillez noter que nous proposons une assistance uniquement en anglais et
        que nous ne pouvons pas vous aider avec des fichiers que vous avez traités
        ailleurs ni avec des logiciels tiers. Pour toute question sur la façon
        dont nous traitons les données et sur les analyses et la publicité
        limitées de ce site &mdash; toutes soumises à votre consentement &mdash;
        consultez notre{" "}
        <Link href="/fr/privacy-policy">Politique de confidentialité</Link>. Pour
        les règles qui régissent l&rsquo;utilisation du site, consultez nos{" "}
        <Link href="/fr/terms-of-service">Conditions d&rsquo;utilisation</Link>.
      </p>

      <h2 id="before-you-write">Avant d&rsquo;écrire, un conseil rapide</h2>
      <p>
        De nombreuses questions courantes trouvent déjà leur réponse sur la page
        de chaque outil, où vous trouverez une courte FAQ couvrant la
        confidentialité, les limites de taille de fichier, la qualité et le
        traitement par lots. Si vous êtes curieux de savoir qui conçoit
        FileShrinking et pourquoi nous avons choisi une approche entièrement côté
        client, notre <Link href="/fr/about">page À propos</Link> vous raconte
        l&rsquo;histoire. Et si votre réponse ne s&rsquo;y trouve pas, c&rsquo;est
        exactement à cela que sert le formulaire ci-dessus &mdash; n&rsquo;hésitez
        pas à nous contacter.
      </p>
    </>
  ),
};
