import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Politique relative aux cookies",
  metaDescription:
    "Comment FileShrinking utilise les cookies et le stockage local : stockage propre minimal pour consentement et thème, plus Google Analytics et AdSense.",
  title: "Politique relative aux cookies",
  intro: (
    <>
      FileShrinking fonctionne entièrement dans votre navigateur et réduit les
      cookies au strict minimum. Cette page explique précisément ce qui est
      stocké sur votre appareil, pourquoi, pendant combien de temps et comment
      vous pouvez modifier vos choix à tout moment.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Aperçu</h2>
      <p>
        Un &laquo;&nbsp;cookie&nbsp;&raquo; est un petit fichier texte qu&rsquo;un
        site web demande à votre navigateur de stocker afin de pouvoir mémoriser
        des informations d&rsquo;une visite à l&rsquo;autre. Des technologies
        connexes comme <strong>localStorage</strong> fonctionnent de la même
        manière&nbsp;: elles enregistrent un peu de données sur votre propre
        appareil. FileShrinking est un outil qui privilégie la confidentialité et
        fonctionne 100&nbsp;% côté client. Vos fichiers sont compressés localement
        dans votre navigateur et ne sont <strong>jamais envoyés</strong> ni à
        nous ni à qui que ce soit d&rsquo;autre&nbsp;; nous ne déposons donc
        jamais de cookie qui contienne, suive ou transmette vos fichiers ou leur
        contenu.
      </p>
      <p>
        Nous utilisons seulement une infime quantité de stockage{" "}
        <strong>propre</strong> pour mémoriser vos préférences, et nous chargeons
        des services <strong>publicitaires et d&rsquo;analyse tiers</strong> de
        Google <strong>uniquement après que vous avez donné votre
        consentement</strong>. Tant que vous n&rsquo;avez pas accepté, ces
        services sont bloqués et ne déposent aucun cookie. Cette politique doit
        être lue conjointement avec notre{" "}
        <Link href="/fr/privacy-policy">Politique de confidentialité</Link>.
      </p>

      <h2 id="first-party">Stockage propre que nous déposons</h2>
      <p>
        Ces éléments sont écrits par FileShrinking lui-même, résident uniquement
        sur votre appareil et sont essentiels pour que le site se souvienne de
        choix de base. Ils sont stockés dans le localStorage de votre navigateur
        plutôt que sous forme de cookies traditionnels, ne sont jamais envoyés à
        un serveur et ne vous identifient pas.
      </p>
      <ul>
        <li>
          <strong>Choix de consentement.</strong> Lorsque vous acceptez ou
          refusez les services optionnels dans notre bannière de consentement,
          nous enregistrons cette décision afin de ne pas vous redemander à
          chaque chargement de page et de pouvoir la respecter.
        </li>
        <li>
          <strong>Préférence de thème.</strong> Si vous basculez entre le mode
          clair et le mode sombre, nous mémorisons votre choix pour que le site
          s&rsquo;affiche tel que vous l&rsquo;avez laissé.
        </li>
      </ul>

      <h2 id="consent-gated">Services tiers soumis à consentement</h2>
      <p>
        Pour que FileShrinking reste gratuit, le site est financé par la
        publicité et nous utilisons des outils d&rsquo;analyse pour comprendre
        quels outils sont utiles. Ces services sont fournis par Google et chargés
        via <strong>Google Tag Manager</strong>. Ils peuvent déposer leurs
        propres cookies, mais ils ne s&rsquo;exécutent{" "}
        <strong>qu&rsquo;après que vous avez explicitement accepté</strong> dans
        notre bannière de consentement. Les services concernés sont&nbsp;:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> &mdash; mesure l&rsquo;utilisation
          agrégée et anonyme, comme les pages vues et les compresseurs les plus
          populaires, ce qui nous aide à améliorer le site.
        </li>
        <li>
          <strong>Google AdSense</strong> (et sa diffusion publicitaire
          DoubleClick) &mdash; affiche les publicités qui financent le projet et
          aide à limiter la fréquence à laquelle vous voyez la même publicité.
        </li>
      </ul>

      <h2 id="table">Cookies et stockage que nous utilisons</h2>
      <p>
        Le tableau ci-dessous répertorie les principaux éléments. Les noms et
        durées exacts définis par Google peuvent changer&nbsp;; pour connaître les
        détails les plus actuels, consultez la propre documentation de Google
        liée dans{" "}
        <a href="#managing">Gérer vos choix</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Fournisseur</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Choix de consentement
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (propre)</td>
            <td>
              Mémorise si vous avez accepté ou refusé les cookies optionnels.
            </td>
            <td>Persistant jusqu&rsquo;à ce que vous l&rsquo;effaciez</td>
          </tr>
          <tr>
            <td>
              Thème
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (propre)</td>
            <td>Mémorise votre préférence de mode clair ou sombre.</td>
            <td>Persistant jusqu&rsquo;à ce que vous l&rsquo;effaciez</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics (déposé uniquement avec consentement)</td>
            <td>
              Distingue les visiteurs anonymes afin de mesurer l&rsquo;utilisation
              agrégée du site.
            </td>
            <td>Jusqu&rsquo;à 2 ans</td>
          </tr>
          <tr>
            <td>
              IDE, DSID, test_cookie
              <br />
              et cookies publicitaires associés
            </td>
            <td>Google AdSense / DoubleClick (déposé uniquement avec consentement)</td>
            <td>
              Diffuse et mesure les publicités et limite l&rsquo;affichage répété
              de la même publicité.
            </td>
            <td>Session jusqu&rsquo;à 13 mois</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consent-mode">Consent Mode v2&nbsp;: refusé par défaut</h2>
      <p>
        Nous utilisons le <strong>Consent Mode v2</strong> de Google. En termes
        simples, cela signifie que chaque signal de consentement &mdash; pour le
        stockage analytique, le stockage publicitaire, la personnalisation des
        publicités et les données utilisateur pour les publicités &mdash; démarre
        à l&rsquo;état <strong>&laquo;&nbsp;refusé&nbsp;&raquo;</strong> par
        défaut dès le chargement de la page. Rien n&rsquo;est accordé tant que
        vous n&rsquo;avez pas fait de choix.
      </p>
      <p>
        Si vous <strong>acceptez</strong>, les signaux concernés passent à
        &laquo;&nbsp;accordé&nbsp;&raquo; et Google Analytics et AdSense peuvent
        déposer les cookies décrits ci-dessus. Si vous <strong>refusez</strong>{" "}
        ou ignorez simplement la bannière, ces signaux restent
        &laquo;&nbsp;refusé&nbsp;&raquo;&nbsp;: les scripts s&rsquo;exécutent dans
        un mode restreint et sans cookies, et ne stockent aucun identifiant sur
        votre appareil. Dans tous les cas, vos préférences propres indiquées
        ci-dessus continuent de fonctionner car elles sont strictement
        nécessaires au fonctionnement du site.
      </p>

      <h2 id="managing">Gérer vos choix</h2>
      <p>
        Vous gardez toujours le contrôle. Vous pouvez modifier ou retirer votre
        consentement à tout moment grâce au lien <strong>Paramètres de
        consentement</strong> présent dans le pied de page de chaque page, qui
        rouvre la bannière de consentement pour que vous puissiez mettre à jour
        votre décision. Le retrait du consentement empêche les services de Google
        de déposer de nouveaux cookies à l&rsquo;avenir.
      </p>
      <p>
        Vous pouvez également gérer les cookies directement dans votre
        navigateur&nbsp;: la plupart des navigateurs vous permettent d&rsquo;afficher,
        de bloquer ou de supprimer les cookies et d&rsquo;effacer le stockage du
        site depuis leur menu de confidentialité ou de paramètres. Supprimer nos
        éléments propres signifie simplement que le site vous redemandera vos
        préférences de thème et de consentement. Pour plus de détails sur les
        services tiers, consultez les{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          informations sur les cookies
        </a>{" "}
        de Google et sa{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          politique de confidentialité
        </a>
        .
      </p>

      <h2 id="changes">Modifications de cette politique</h2>
      <p>
        Nous pouvons mettre à jour cette Politique relative aux cookies si nous
        ajoutons une fonctionnalité ou modifions les services sur lesquels nous
        nous appuyons. Le cas échéant, nous réviserons la date de
        &laquo;&nbsp;Dernière mise à jour&nbsp;&raquo; en haut de cette page. Les
        modifications importantes affectant les cookies que nous déposons seront
        reflétées dans la bannière de consentement afin que vous puissiez
        réexaminer votre choix.
      </p>

      <h2 id="contact">Nous contacter</h2>
      <p>
        Si vous avez des questions sur la façon dont nous utilisons les cookies
        ou le stockage local, écrivez-nous à{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Pour
        une vision plus complète de la manière dont nous traitons les données,
        veuillez lire notre{" "}
        <Link href="/fr/privacy-policy">Politique de confidentialité</Link>.
      </p>
    </>
  ),
};
