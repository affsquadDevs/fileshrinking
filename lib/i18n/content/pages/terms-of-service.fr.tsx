import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Conditions d'utilisation",
  metaDescription:
    "Conditions d'utilisation de FileShrinking, compresseur de fichiers gratuit côté client. Fonctionne en local et n'envoie jamais vos fichiers.",
  title: "Conditions d'utilisation",
  intro: (
    <>
      Ces conditions r&eacute;gissent votre utilisation de FileShrinking. En
      utilisant le site, vous les acceptez. Elles sont r&eacute;dig&eacute;es
      pour &ecirc;tre lisibles &mdash; et, comme chaque outil fonctionne
      enti&egrave;rement dans votre navigateur, elles sont mis&eacute;ricordieusement
      br&egrave;ves.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="acceptance">1. Acceptation de ces conditions</h2>
      <p>
        FileShrinking (&laquo;&nbsp;FileShrinking&nbsp;&raquo;,
        &laquo;&nbsp;nous&nbsp;&raquo; ou &laquo;&nbsp;le service&nbsp;&raquo;)
        propose des outils gratuits bas&eacute;s sur le navigateur qui
        compressent et convertissent des images, des PDF, de la vid&eacute;o et
        de l&rsquo;audio. En acc&eacute;dant au site web{" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a> ou en
        l&rsquo;utilisant, vous acceptez d&rsquo;&ecirc;tre li&eacute; par ces
        Conditions d&rsquo;utilisation. Si vous n&rsquo;&ecirc;tes pas
        d&rsquo;accord avec une quelconque partie de ces conditions, nous vous
        prions de ne pas utiliser le site.
      </p>
      <p>
        Ces conditions fonctionnent de pair avec notre{" "}
        <Link href="/fr/privacy-policy">Politique de confidentialit&eacute;</Link>{" "}
        et notre <Link href="/fr/disclaimer">Avertissement</Link>, qui y sont
        incorpor&eacute;s par r&eacute;f&eacute;rence. Ensemble, ils
        d&eacute;crivent le fonctionnement du service et les limites de ce que
        nous pouvons promettre.
      </p>

      <h2 id="how-it-works">2. Comment fonctionne le service</h2>
      <p>
        FileShrinking est un outil{" "}
        <strong>100&nbsp;% c&ocirc;t&eacute; client</strong>. Lorsque vous
        ajoutez un fichier, celui-ci est charg&eacute; dans la m&eacute;moire de
        votre navigateur et y est trait&eacute; au moyen de WebAssembly et
        d&rsquo;API web standard. Vos fichiers ne sont{" "}
        <strong>jamais envoy&eacute;s &agrave; un serveur</strong>, jamais
        transmis sur le r&eacute;seau et jamais stock&eacute;s par nous. Comme
        le traitement se d&eacute;roule sur votre propre appareil, nous ne
        pouvons ni voir, ni consulter, ni copier, ni acqu&eacute;rir la
        propri&eacute;t&eacute; d&rsquo;aucun fichier que vous traitez &mdash;
        il n&rsquo;existe tout simplement aucune copie c&ocirc;t&eacute; serveur
        que nous puissions conserver.
      </p>
      <p>
        Une cons&eacute;quence pratique de cette conception est que les
        r&eacute;sultats d&eacute;pendent de votre propre mat&eacute;riel et
        logiciel. La vitesse de traitement, la taille de fichier maximale que
        vous pouvez g&eacute;rer, les formats pris en charge par votre
        navigateur et le r&eacute;sultat exact varient selon l&rsquo;appareil,
        le navigateur, la m&eacute;moire disponible et le syst&egrave;me
        d&rsquo;exploitation. Nous ne garantissons pas qu&rsquo;un fichier
        donn&eacute; se compressera, se convertira ou s&rsquo;ouvrira
        correctement sur votre configuration.
      </p>

      <h2 id="free">3. Le service est gratuit</h2>
      <p>
        Les outils sont gratuits, sans inscription, sans abonnement et sans
        filigrane. Nous assurons le fonctionnement gr&acirc;ce &agrave; la
        publicit&eacute; plut&ocirc;t qu&rsquo;en vous facturant. Nous pouvons
        ajouter, modifier ou supprimer des outils et des fonctionnalit&eacute;s
        &agrave; tout moment, et nous pouvons limiter ou interrompre le service
        en tout ou en partie sans pr&eacute;avis. Nous n&rsquo;avons aucune
        obligation de maintenir disponible un outil sp&eacute;cifique.
      </p>

      <h2 id="acceptable-use">4. Utilisation acceptable</h2>
      <p>Vous acceptez de ne pas utiliser FileShrinking pour&nbsp;:</p>
      <ul>
        <li>
          traiter, cr&eacute;er ou distribuer du contenu ill&eacute;gal,
          contrefaisant, diffamatoire ou qui porte atteinte aux droits de tout
          tiers&nbsp;;
        </li>
        <li>
          manipuler des fichiers dont vous n&rsquo;&ecirc;tes pas
          propri&eacute;taire ou pour lesquels vous ne disposez pas par ailleurs
          des droits et autorisations n&eacute;cessaires &agrave; leur
          utilisation&nbsp;;
        </li>
        <li>
          enfreindre toute loi ou r&eacute;glementation applicable dans votre
          juridiction, y compris les lois sur l&rsquo;exportation, la
          confidentialit&eacute; et la propri&eacute;t&eacute;
          intellectuelle&nbsp;;
        </li>
        <li>
          tenter de perturber, de surcharger, de pratiquer l&rsquo;ing&eacute;nierie
          inverse &agrave; des fins malveillantes ou d&rsquo;interf&eacute;rer
          avec le fonctionnement, la s&eacute;curit&eacute; ou
          l&rsquo;int&eacute;grit&eacute; du site ou de son code
          sous-jacent&nbsp;; ou
        </li>
        <li>
          d&eacute;naturer le service, par exemple en le r&eacute;h&eacute;bergeant
          d&rsquo;une mani&egrave;re qui laisse entendre qu&rsquo;il vous
          appartient ou qu&rsquo;il envoie des fichiers alors que ce n&rsquo;est
          pas le cas.
        </li>
      </ul>
      <p>
        <strong>Vous &ecirc;tes seul responsable de vos fichiers</strong> et de
        la v&eacute;rification que vous avez le droit de les utiliser. Comme le
        traitement se d&eacute;roule sur votre appareil, vous seul contr&ocirc;lez
        ce que vous introduisez dans les outils et ce que vous faites des
        r&eacute;sultats.
      </p>

      <h2 id="no-warranty">
        5. Aucune garantie &mdash; fourni &laquo;&nbsp;tel quel&nbsp;&raquo;
      </h2>
      <p>
        Le service est fourni{" "}
        <strong>&laquo;&nbsp;tel quel&nbsp;&raquo;</strong> et{" "}
        <strong>&laquo;&nbsp;selon disponibilit&eacute;&nbsp;&raquo;</strong>,
        sans garantie d&rsquo;aucune sorte, qu&rsquo;elle soit expresse ou
        implicite. Dans toute la mesure permise par la loi, nous d&eacute;clinons
        toutes les garanties, y compris les garanties implicites de
        qualit&eacute; marchande, d&rsquo;ad&eacute;quation &agrave; un usage
        particulier, d&rsquo;exactitude et de non-contrefa&ccedil;on. Nous ne
        garantissons pas que le service sera ininterrompu, exempt
        d&rsquo;erreurs, s&eacute;curis&eacute;, ni qu&rsquo;un quelconque
        r&eacute;sultat r&eacute;pondra &agrave; vos attentes.
      </p>
      <p>
        La compression est souvent <strong>avec perte</strong>&nbsp;: pour
        r&eacute;duire la taille des fichiers, les outils peuvent
        &eacute;carter des donn&eacute;es qui ne pourront pas &ecirc;tre
        r&eacute;cup&eacute;r&eacute;es. Il vous incombe de v&eacute;rifier
        chaque r&eacute;sultat avant de vous y fier.
      </p>

      <h2 id="liability">
        6. Limitation de responsabilit&eacute; et perte de donn&eacute;es
      </h2>
      <p>
        Dans toute la mesure permise par la loi, FileShrinking et ses
        exploitants ne seront pas responsables des dommages indirects,
        accessoires, sp&eacute;ciaux, cons&eacute;cutifs ou punitifs, ni
        d&rsquo;aucune perte de donn&eacute;es, de fichiers, de profits ou de
        client&egrave;le, d&eacute;coulant de ou li&eacute;s &agrave; votre
        utilisation (ou &agrave; votre incapacit&eacute; &agrave; utiliser) du
        service &mdash; m&ecirc;me si nous avons &eacute;t&eacute; inform&eacute;s
        de la possibilit&eacute; de tels dommages.
      </p>
      <p>
        Point crucial&nbsp;:{" "}
        <strong>conservez toujours une copie de vos fichiers originaux.</strong>{" "}
        Le traitement dans le navigateur peut &eacute;chouer, un onglet peut
        planter ou un r&eacute;sultat peut s&rsquo;av&eacute;rer
        insatisfaisant, et comme nous ne recevons jamais vos fichiers, nous ne
        pouvons rien r&eacute;cup&eacute;rer pour vous. Traitez le
        r&eacute;sultat comme une nouvelle copie et v&eacute;rifiez-le avant de
        supprimer vos originaux.
      </p>

      <h2 id="ip">7. Propri&eacute;t&eacute; intellectuelle</h2>
      <p>
        Le nom, le logo, la conception du site web, les textes et le code
        original de FileShrinking nous appartiennent ou appartiennent &agrave;
        nos conc&eacute;dants de licence et sont prot&eacute;g&eacute;s par les
        lois sur la propri&eacute;t&eacute; intellectuelle. Vous pouvez utiliser
        le site pour l&rsquo;usage auquel il est destin&eacute;, mais vous ne
        pouvez pas copier, renommer ni redistribuer le site lui-m&ecirc;me sans
        autorisation. Les moteurs de compression sous-jacents sont fournis par
        leurs projets open source respectifs sous leurs propres licences.
      </p>
      <p>
        <strong>Vos fichiers restent les v&ocirc;tres.</strong> Nous ne
        revendiquons aucune propri&eacute;t&eacute; sur, et n&rsquo;acqu&eacute;rons
        aucun droit dans, tout fichier que vous traitez &mdash; et, comme
        indiqu&eacute; ci-dessus, nous ne le recevons m&ecirc;me jamais.
      </p>

      <h2 id="third-party">8. Services tiers</h2>
      <p>
        Nous utilisons un petit nombre de services tiers pour faire fonctionner
        le site et le maintenir gratuit. Ceux-ci ne sont charg&eacute;s que
        comme d&eacute;crit dans notre{" "}
        <Link href="/fr/privacy-policy">Politique de confidentialit&eacute;</Link>{" "}
        et, lorsque cela est requis, sont conditionn&eacute;s &agrave; votre
        consentement&nbsp;:
      </p>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Finalit&eacute;</th>
            <th>Quand il se charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google AdSense</td>
            <td>Publicit&eacute; qui finance les outils gratuits</td>
            <td>Uniquement apr&egrave;s votre consentement</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Statistiques d&rsquo;utilisation agr&eacute;g&eacute;es et anonymes</td>
            <td>Uniquement apr&egrave;s votre consentement</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ces prestataires op&egrave;rent selon leurs propres conditions et
        politiques de confidentialit&eacute;, que nous ne contr&ocirc;lons pas.
        Surtout, aucun d&rsquo;entre eux ne re&ccedil;oit jamais vos fichiers
        &mdash; ils ne traitent que des donn&eacute;es web standard
        d&rsquo;analyse et de publicit&eacute;, et uniquement avec votre
        consentement.
      </p>

      <h2 id="changes">9. Modifications de ces conditions</h2>
      <p>
        Nous pouvons mettre &agrave; jour ces conditions de temps &agrave; autre
        &agrave; mesure que le service &eacute;volue ou que la loi change.
        Lorsque nous le ferons, nous r&eacute;viserons la date de
        &laquo;&nbsp;Derni&egrave;re mise &agrave; jour&nbsp;&raquo; en haut de
        cette page. Les modifications importantes pourront &ecirc;tre mises en
        &eacute;vidence sur le site. Votre utilisation continue de FileShrinking
        apr&egrave;s une mise &agrave; jour signifie que vous acceptez les
        conditions r&eacute;vis&eacute;es.
      </p>

      <h2 id="governing-law">10. Droit applicable</h2>
      <p>
        Ces conditions sont r&eacute;gies par les lois applicables au lieu
        d&rsquo;&eacute;tablissement de l&rsquo;exploitant du Site, sans
        &eacute;gard aux r&egrave;gles de conflit de lois. Lorsque le droit
        imp&eacute;ratif de protection des consommateurs s&rsquo;applique, vous
        conservez le droit d&rsquo;intenter une action dans votre propre pays de
        r&eacute;sidence, et rien dans ces conditions ne limite les droits
        auxquels il ne peut &ecirc;tre renonc&eacute; en vertu de la loi qui
        vous est applicable. Si une disposition de ces conditions est
        jug&eacute;e inapplicable, les dispositions restantes demeurent
        pleinement en vigueur.
      </p>

      <h2 id="contact">11. Contact</h2>
      <p>
        Des questions sur ces conditions&nbsp;? &Eacute;crivez-nous &agrave;{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> ou
        consultez notre <Link href="/fr/contact">page de contact</Link>. Nous
        serons ravis de vous aider &agrave; clarifier tout ce qui figure ici.
      </p>
    </>
  ),
};
