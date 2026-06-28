import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Politique de confidentialité",
  metaDescription:
    "Comment FileShrinking traite vos données : vos fichiers ne sont jamais envoyés, la compression se fait dans votre navigateur. Analytics et pubs sur consentement.",
  title: "Politique de confidentialité",
  intro: (
    <>
      FileShrinking est con&ccedil;u en pla&ccedil;ant la confidentialit&eacute; au
      premier plan. Les fichiers que vous compressez ne sont jamais envoy&eacute;s :
      ils sont trait&eacute;s enti&egrave;rement dans votre navigateur, de sorte que
      nous ne les recevons jamais, ne les voyons jamais et ne les stockons jamais.
      Cette politique explique les rares donn&eacute;es que nous traitons malgr&eacute;
      tout et les choix que vous contr&ocirc;lez.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Aper&ccedil;u</h2>
      <p>
        Cette Politique de confidentialit&eacute; d&eacute;crit comment
        FileShrinking
        ({" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a>, le
        &laquo;&nbsp;Site&nbsp;&raquo;) collecte, utilise et prot&egrave;ge les
        informations lorsque vous le visitez. Le Site est exploit&eacute; par
        l&rsquo;&eacute;quipe FileShrinking (&laquo;&nbsp;nous&nbsp;&raquo; ou
        &laquo;&nbsp;notre&nbsp;&raquo;). En utilisant le Site, vous acceptez les
        pratiques d&eacute;crites ici. Veuillez &eacute;galement lire notre{" "}
        <Link href="/fr/cookie-policy">Politique relative aux cookies</Link> et nos{" "}
        <Link href="/fr/terms-of-service">Conditions d&rsquo;utilisation</Link>, qui
        font partie de votre accord avec nous.
      </p>

      <h2 id="files-never-uploaded">Vos fichiers ne sont jamais envoy&eacute;s</h2>
      <p>
        C&rsquo;est l&rsquo;essentiel &agrave; comprendre au sujet de FileShrinking.
        Tous nos outils de compression &mdash; pour les images, les PDF, la
        vid&eacute;o et l&rsquo;audio &mdash; s&rsquo;ex&eacute;cutent{" "}
        <strong>&agrave; 100&nbsp;% dans votre navigateur web</strong> gr&acirc;ce
        &agrave; WebAssembly. Lorsque vous ajoutez un fichier, il est charg&eacute;
        dans la m&eacute;moire de votre appareil et trait&eacute; localement sur
        votre propre mat&eacute;riel. Le r&eacute;sultat compress&eacute; vous est
        directement restitu&eacute; pour t&eacute;l&eacute;chargement.
      </p>
      <p>
        Gr&acirc;ce &agrave; cette conception, nous{" "}
        <strong>ne recevons, ne voyons, ne stockons ni ne transmettons
        jamais</strong> les fichiers que vous compressez ni aucun de leurs contenus.
        Il n&rsquo;y a aucune &eacute;tape d&rsquo;envoi vers un serveur, aucune
        copie n&rsquo;est conserv&eacute;e o&ugrave; que ce soit, et vos fichiers ne
        quittent jamais votre appareil. En r&eacute;alit&eacute;, une fois la page
        charg&eacute;e, vous pouvez vous d&eacute;connecter compl&egrave;tement
        d&rsquo;internet et les outils continueront de fonctionner.
      </p>

      <h2 id="what-we-do-not-collect">Ce que nous ne collectons pas</h2>
      <ul>
        <li>
          <strong>Vos fichiers ou leurs contenus.</strong> Nous n&rsquo;avons
          aucun acc&egrave;s aux documents, photos, vid&eacute;os ou fichiers audio
          que vous traitez.
        </li>
        <li>
          <strong>Donn&eacute;es de compte.</strong> FileShrinking n&rsquo;a ni
          inscription, ni connexion, ni comptes utilisateur, nous ne collectons donc
          ni noms, ni mots de passe, ni profils.
        </li>
        <li>
          <strong>Informations de paiement.</strong> Le Site est gratuit ; nous ne
          traitons aucun paiement et ne stockons aucune donn&eacute;e
          financi&egrave;re.
        </li>
      </ul>

      <h2 id="data-we-use">Informations qui sont utilis&eacute;es</h2>
      <p>
        FileShrinking utilise d&eacute;lib&eacute;r&eacute;ment tr&egrave;s peu de
        donn&eacute;es. Le tableau ci-dessous r&eacute;sume ce qui est stock&eacute;
        ou trait&eacute;, o&ugrave; cela r&eacute;side et pourquoi.
      </p>
      <table>
        <thead>
          <tr>
            <th>Donn&eacute;es</th>
            <th>O&ugrave; elles r&eacute;sident</th>
            <th>Finalit&eacute;</th>
            <th>Consentement requis&nbsp;?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Choix de consentement</td>
            <td>localStorage (votre navigateur)</td>
            <td>
              M&eacute;moriser si vous avez accept&eacute; ou refus&eacute; les
              analytics et les publicit&eacute;s
            </td>
            <td>Non&nbsp;: strictement n&eacute;cessaire</td>
          </tr>
          <tr>
            <td>Pr&eacute;f&eacute;rence de th&egrave;me</td>
            <td>localStorage (votre navigateur)</td>
            <td>
              M&eacute;moriser le mode clair/sombre pour que le Site
              s&rsquo;affiche correctement &agrave; votre retour
            </td>
            <td>Non&nbsp;: strictement n&eacute;cessaire</td>
          </tr>
          <tr>
            <td>Donn&eacute;es analytics</td>
            <td>Google Analytics (via Google Tag Manager)</td>
            <td>Comprendre l&rsquo;usage agr&eacute;g&eacute; pour am&eacute;liorer le Site</td>
            <td>Oui</td>
          </tr>
          <tr>
            <td>Donn&eacute;es publicitaires</td>
            <td>Google AdSense</td>
            <td>Afficher des publicit&eacute;s qui aident &agrave; maintenir le Site gratuit</td>
            <td>Oui</td>
          </tr>
        </tbody>
      </table>
      <p>
        Les valeurs de <strong>localStorage</strong> ci-dessus sont de petits
        param&egrave;tres stock&eacute;s uniquement dans votre navigateur. Elles ne
        nous sont pas transmises et ne contiennent aucune information personnelle :
        seulement votre d&eacute;cision de consentement et le th&egrave;me que vous
        avez choisi. Vous pouvez les effacer &agrave; tout moment depuis les
        param&egrave;tres de votre navigateur.
      </p>

      <h2 id="analytics">Analytics</h2>
      <p>
        Nous utilisons <strong>Google Analytics</strong>, charg&eacute; via{" "}
        <strong>Google Tag Manager (GTM)</strong>, pour comprendre comment les
        visiteurs utilisent le Site de mani&egrave;re agr&eacute;g&eacute;e &mdash;
        par exemple quels outils sont populaires et quelles pages se chargent
        lentement. Cela nous aide &agrave; prioriser les am&eacute;liorations. Les
        analytics ne sont{" "}
        <strong>charg&eacute;s qu&rsquo;apr&egrave;s votre consentement</strong>. Si
        vous le refusez, ces scripts ne s&rsquo;ex&eacute;cutent pas et aucune
        donn&eacute;e analytics n&rsquo;est collect&eacute;e. Les donn&eacute;es
        analytics sont collect&eacute;es et trait&eacute;es de mani&egrave;re
        agr&eacute;g&eacute;e et ne sont pas utilis&eacute;es pour vous identifier
        personnellement.
      </p>

      <h2 id="advertising">Publicit&eacute;</h2>
      <p>
        FileShrinking est gratuit, et nous couvrons nos frais gr&acirc;ce &agrave;
        la publicit&eacute; diffus&eacute;e par <strong>Google AdSense</strong>. Les
        publicit&eacute;s ne sont{" "}
        <strong>charg&eacute;es qu&rsquo;apr&egrave;s votre consentement</strong>.
        Lorsque vous consentez &agrave; la publicit&eacute;, Google et ses
        partenaires peuvent utiliser des cookies, des identifiants d&rsquo;appareil
        et des technologies similaires pour diffuser et mesurer les
        publicit&eacute;s, y compris des{" "}
        <strong>publicit&eacute;s personnalis&eacute;es (bas&eacute;es sur les
        centres d&rsquo;int&eacute;r&ecirc;t)</strong> &agrave; partir de votre
        activit&eacute; ant&eacute;rieure. Si vous le refusez, AdSense n&rsquo;est
        pas charg&eacute; et vous ne recevrez pas de publicit&eacute;
        personnalis&eacute;e de notre part.
      </p>
      <p>
        L&rsquo;utilisation par Google des cookies publicitaires est r&eacute;gie par
        les propres politiques de Google. Vous pouvez en savoir plus et g&eacute;rer
        vos param&egrave;tres publicitaires sur la{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          page Publicit&eacute; de Google
        </a>{" "}
        et consulter les{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          R&egrave;gles de confidentialit&eacute; de Google
        </a>
        .
      </p>

      <h2 id="consent-mode">Google Consent Mode v2</h2>
      <p>
        Nous mettons en &oelig;uvre le <strong>Google Consent Mode v2</strong>.
        Avant que vous ne fassiez un choix, les balises analytics et publicitaires de
        Google adoptent par d&eacute;faut un &eacute;tat refus&eacute;, ce qui
        signifie qu&rsquo;elles ne d&eacute;posent pas de cookies identifiants et ne
        collectent pas de donn&eacute;es personnelles. Ce n&rsquo;est
        qu&rsquo;apr&egrave;s que vous avez accord&eacute; votre consentement que les
        signaux pertinents sont mis &agrave; jour et que les services correspondants
        sont activ&eacute;s. Cela vous donne un v&eacute;ritable contr&ocirc;le sur le
        fait que les analytics et la publicit&eacute; s&rsquo;ex&eacute;cutent ou non.
      </p>

      <h2 id="third-party">Services et liens tiers</h2>
      <p>
        Les services tiers mentionn&eacute;s ci-dessus sont exploit&eacute;s par
        Google LLC. Le traitement de toute donn&eacute;e qu&rsquo;ils collectent est
        r&eacute;gi par leurs propres conditions, et non par les n&ocirc;tres :
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            R&egrave;gles de confidentialit&eacute; de Google
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comment Google utilise les cookies dans la publicit&eacute;
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confidentialit&eacute; et s&eacute;curit&eacute; des donn&eacute;es de Google Analytics
          </a>
        </li>
      </ul>
      <p>
        Le Site peut &eacute;galement contenir des liens vers d&rsquo;autres sites
        web que nous ne contr&ocirc;lons pas. Nous ne sommes pas responsables des
        pratiques de confidentialit&eacute; de ces sites et vous encourageons
        &agrave; lire leurs politiques.
      </p>

      <h2 id="your-rights">Vos droits en mati&egrave;re de confidentialit&eacute; (RGPD)</h2>
      <p>
        Si vous vous trouvez dans l&rsquo;Espace &eacute;conomique europ&eacute;en ou
        au Royaume-Uni, vous disposez de droits au titre du R&egrave;glement
        g&eacute;n&eacute;ral sur la protection des donn&eacute;es, dont le droit
        d&rsquo;<strong>acc&eacute;der</strong> aux donn&eacute;es personnelles
        conserv&eacute;es &agrave; votre sujet, le droit &agrave;{" "}
        <strong>l&rsquo;effacement (suppression)</strong>, le droit de{" "}
        <strong>vous opposer au traitement ou de le limiter</strong>, et le droit de{" "}
        <strong>retirer votre consentement</strong> &agrave; tout moment. Lorsque
        nous nous appuyons sur le consentement (analytics et publicit&eacute;), le
        retirer est aussi simple que de le donner et n&rsquo;affectera pas la
        licit&eacute; du traitement effectu&eacute; auparavant.
      </p>
      <p>Pour exercer ces droits, vous pouvez :</p>
      <ul>
        <li>
          <strong>Rouvrir vos param&egrave;tres de consentement</strong> &agrave;
          tout moment via le lien de consentement ou de pr&eacute;f&eacute;rences de
          cookies pr&eacute;sent dans le pied de page de chaque page, puis modifier
          ou retirer vos choix.
        </li>
        <li>
          <strong>Effacer le stockage de votre navigateur</strong> pour supprimer
          les valeurs de consentement et de th&egrave;me stock&eacute;es localement.
        </li>
        <li>
          <strong>Nous &eacute;crire</strong> &agrave;{" "}
          <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> et
          nous vous r&eacute;pondrons dans le d&eacute;lai exig&eacute; par la
          l&eacute;gislation applicable.
        </li>
      </ul>
      <p>
        Vous avez &eacute;galement le droit d&rsquo;introduire une r&eacute;clamation
        aupr&egrave;s de l&rsquo;autorit&eacute; de protection des donn&eacute;es de
        votre pays ou r&eacute;gion si vous estimez que vos droits ont
        &eacute;t&eacute; enfreints.
      </p>

      <h2 id="ccpa">Droits de confidentialit&eacute; en Californie (CCPA/CPRA)</h2>
      <p>
        Si vous r&eacute;sidez en Californie, le California Consumer Privacy Act, tel
        que modifi&eacute;, vous accorde le droit de savoir quelles informations
        personnelles sont collect&eacute;es, de demander leur suppression et de vous
        opposer &agrave; la &laquo;&nbsp;vente&nbsp;&raquo; ou au{" "}
        &laquo;&nbsp;partage&nbsp;&raquo; d&rsquo;informations personnelles. Nous ne
        vendons pas vos informations personnelles contre de l&rsquo;argent. Lorsque
        l&rsquo;utilisation de cookies publicitaires peut &ecirc;tre
        consid&eacute;r&eacute;e comme un &laquo;&nbsp;partage&nbsp;&raquo; &agrave;
        des fins de publicit&eacute; comportementale inter-contextes, vous pouvez
        vous y opposer en refusant le consentement publicitaire dans nos
        param&egrave;tres de consentement ou en ne l&rsquo;accordant pas d&egrave;s le
        d&eacute;part. Pour formuler une demande, &eacute;crivez &agrave;{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2 id="retention">Conservation des donn&eacute;es</h2>
      <p>
        Comme vos fichiers sont trait&eacute;s localement et ne nous parviennent
        jamais, il n&rsquo;y a rien que nous puissions conserver &agrave; leur sujet.
        Les valeurs de consentement et de th&egrave;me stock&eacute;es dans votre
        navigateur persistent jusqu&rsquo;&agrave; ce que vous les effaciez ou
        modifiiez vos choix. Les donn&eacute;es analytics et publicitaires,
        lorsqu&rsquo;elles sont activ&eacute;es avec votre consentement, sont
        conserv&eacute;es par Google conform&eacute;ment &agrave; ses propres
        param&egrave;tres et politiques de conservation.
      </p>

      <h2 id="children">Confidentialit&eacute; des mineurs</h2>
      <p>
        FileShrinking est un outil destin&eacute; au grand public et n&rsquo;est pas
        destin&eacute; aux enfants de moins de 13 ans (ou l&rsquo;&acirc;ge minimum
        dans votre juridiction). Nous ne collectons pas sciemment
        d&rsquo;informations personnelles aupr&egrave;s des enfants. Si vous pensez
        qu&rsquo;un enfant nous a fourni des informations personnelles, veuillez nous
        contacter afin que nous puissions prendre les mesures appropri&eacute;es.
      </p>

      <h2 id="changes">Modifications de cette politique</h2>
      <p>
        Nous pouvons mettre &agrave; jour cette Politique de confidentialit&eacute;
        de temps &agrave; autre afin de refl&eacute;ter des changements dans nos
        pratiques ou pour des raisons l&eacute;gales. Lorsque nous le ferons, nous
        r&eacute;viserons la date de &laquo;&nbsp;Derni&egrave;re mise &agrave;
        jour&nbsp;&raquo; en haut de cette page. Les changements importants pourront
        &ecirc;tre mis en &eacute;vidence sur le Site. Nous vous encourageons
        &agrave; consulter cette page p&eacute;riodiquement.
      </p>

      <h2 id="contact">Contactez-nous</h2>
      <p>
        Si vous avez des questions sur cette Politique de confidentialit&eacute; ou
        sur la mani&egrave;re dont vos donn&eacute;es sont trait&eacute;es, veuillez
        nous &eacute;crire &agrave;{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> ou
        visiter notre <Link href="/fr/contact">page de contact</Link>, et nous serons
        ravis de vous aider.
      </p>
    </>
  ),
};
