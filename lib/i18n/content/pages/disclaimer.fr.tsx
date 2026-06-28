import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Avertissement",
  metaDescription:
    "Avertissement honnête de FileShrinking : nos outils gratuits de compression 100% dans le navigateur ne garantissent ni fidélité ni taille. Gardez vos originaux.",
  title: "Avertissement",
  intro: (
    <>
      FileShrinking propose des outils gratuits de compression fonctionnant dans
      le navigateur, par commodit&eacute;. Cette page explique les limites de ces
      outils, les r&eacute;sultats que vous pouvez raisonnablement attendre et les
      responsabilit&eacute;s qui restent les v&ocirc;tres.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="general">Informations g&eacute;n&eacute;rales uniquement</h2>
      <p>
        Les informations, les outils et le contenu de FileShrinking (le
        &laquo;&nbsp;Service&nbsp;&raquo;) sont fournis uniquement &agrave; des
        fins d&rsquo;information g&eacute;n&eacute;rale et d&rsquo;usage pratique.
        Nous nous effor&ccedil;ons de tout garder exact et utile, mais nous
        n&rsquo;offrons aucune garantie, expresse ou implicite, quant &agrave;
        l&rsquo;exhaustivit&eacute;, l&rsquo;exactitude, la fiabilit&eacute;,
        l&rsquo;ad&eacute;quation ou la disponibilit&eacute; du Service ou de ses
        r&eacute;sultats. Vous utilisez le Service enti&egrave;rement &agrave; vos
        propres risques. Cet avertissement doit &ecirc;tre lu conjointement avec
        nos <Link href="/fr/terms-of-service">Conditions d&rsquo;utilisation</Link>,
        qui r&eacute;gissent votre utilisation du site.
      </p>

      <h2 id="how-it-works">Comment fonctionnent r&eacute;ellement nos outils</h2>
      <p>
        Chaque compresseur de FileShrinking s&rsquo;ex&eacute;cute{" "}
        <strong>enti&egrave;rement dans votre navigateur web</strong>. Vos images,
        PDF, vid&eacute;os et fichiers audio sont charg&eacute;s dans la
        m&eacute;moire de votre appareil, trait&eacute;s localement avec
        WebAssembly, puis vous sont restitu&eacute;s directement.{" "}
        <strong>
          Vos fichiers ne sont jamais envoy&eacute;s chez nous, ni transmis sur le
          r&eacute;seau, ni stock&eacute;s sur aucun serveur.
        </strong>{" "}
        Comme tout le travail s&rsquo;effectue sur votre propre mat&eacute;riel, la
        vitesse, la qualit&eacute; et m&ecirc;me la possibilit&eacute; de traiter
        un fichier donn&eacute; d&eacute;pendent de votre appareil, de votre
        navigateur, de la m&eacute;moire disponible et du fichier que vous
        fournissez. Pour conna&icirc;tre les donn&eacute;es limit&eacute;es que le
        site lui-m&ecirc;me g&egrave;re, consultez notre{" "}
        <Link href="/fr/privacy-policy">Politique de confidentialit&eacute;</Link> et
        notre <Link href="/fr/cookie-policy">Politique relative aux cookies</Link>.
      </p>

      <h2 id="no-guarantee">Aucune garantie de r&eacute;sultats</h2>
      <p>
        La compression n&rsquo;a rien de magique et nous ne pouvons pas promettre
        un r&eacute;sultat pr&eacute;cis. La plupart des compressions
        d&rsquo;image, de vid&eacute;o et d&rsquo;audio se font{" "}
        <strong>avec perte</strong>, ce qui signifie qu&rsquo;elles &eacute;cartent
        d&eacute;finitivement une partie des donn&eacute;es pour r&eacute;duire la
        taille des fichiers. Nous ne garantissons aucun taux de compression,
        aucune taille de fichier, aucune qualit&eacute; de sortie ni fid&eacute;lit&eacute;
        parfaite par rapport &agrave; votre original. La r&eacute;duction de taille
        d&rsquo;un fichier et son rendu visuel ou sonore ensuite d&eacute;pendent
        du contenu lui-m&ecirc;me, du format, des r&eacute;glages que vous
        choisissez et du degr&eacute; d&rsquo;optimisation d&eacute;j&agrave;
        atteint par l&rsquo;original. Une photo tout droit sortie d&rsquo;un
        appareil photo peut se r&eacute;duire consid&eacute;rablement, tandis
        qu&rsquo;un fichier d&eacute;j&agrave; optimis&eacute; peut &agrave; peine
        changer &mdash; voire, dans certains cas, un fichier r&eacute;encod&eacute;
        peut m&ecirc;me &ecirc;tre plus volumineux que l&rsquo;original.
      </p>

      <h2 id="limits">Limites r&eacute;elles &agrave; conna&icirc;tre</h2>
      <p>
        Les diff&eacute;rents types de fichiers se comportent de mani&egrave;re
        tr&egrave;s diff&eacute;rente, et certains ont des limites pratiques
        absolues qu&rsquo;aucun outil fonctionnant dans le navigateur ne peut
        surmonter&nbsp;:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Type de fichier</th>
              <th>&Agrave; quoi s&rsquo;attendre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Images (JPEG, PNG, WebP, AVIF, GIF)</td>
              <td>
                Se compressent g&eacute;n&eacute;ralement bien, mais les gains
                varient. Les images d&eacute;j&agrave; optimis&eacute;es peuvent ne
                se r&eacute;duire que tr&egrave;s peu, voire pas du tout.
              </td>
            </tr>
            <tr>
              <td>PDF</td>
              <td>
                Notre outil PDF r&eacute;duit la taille principalement en
                recompressant les images int&eacute;gr&eacute;es. Les PDF
                compos&eacute;s de texte et de graphiques vectoriels peuvent ne se
                r&eacute;duire que tr&egrave;s peu, voire pas du tout, car il
                n&rsquo;y a pas de grandes images &agrave; optimiser.
              </td>
            </tr>
            <tr>
              <td>Vid&eacute;o</td>
              <td>
                La compression vid&eacute;o dans le navigateur est mono-thread et
                gourmande en CPU. Elle peut &ecirc;tre lente, et les fichiers
                tr&egrave;s volumineux peuvent &eacute;chouer compl&egrave;tement
                sur les appareils &agrave; faible m&eacute;moire ou les navigateurs
                anciens.
              </td>
            </tr>
            <tr>
              <td>Audio</td>
              <td>
                Le r&eacute;encodage avec perte peut r&eacute;duire la taille, mais
                recompresser un fichier d&eacute;j&agrave; compress&eacute; (comme
                un MP3 &agrave; faible d&eacute;bit) n&rsquo;apporte que peu de
                b&eacute;n&eacute;fice et peut d&eacute;grader la qualit&eacute;.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Si un outil se bloque, manque de m&eacute;moire ou &eacute;choue sur un
        fichier volumineux, il s&rsquo;agit d&rsquo;une limite li&eacute;e &agrave;
        l&rsquo;ex&eacute;cution d&rsquo;un traitement lourd dans un onglet de
        navigateur &mdash; et non d&rsquo;un d&eacute;faut que vous devriez
        compter sur nous pour corriger sur un fichier pr&eacute;cis. Essayer un
        fichier plus petit, un autre navigateur, un appareil plus puissant ou
        fermer d&rsquo;autres onglets aide souvent.
      </p>

      <h2 id="keep-originals">Conservez toujours vos fichiers originaux</h2>
      <p>
        C&rsquo;est le point le plus important de toute cette page.{" "}
        <strong>
          Conservez toujours une copie s&ucirc;re et non modifi&eacute;e de chaque
          fichier original avant de le compresser.
        </strong>{" "}
        La compression peut &ecirc;tre cumulative et irr&eacute;versible&nbsp;:
        une fois qu&rsquo;un d&eacute;tail est &eacute;cart&eacute;, il ne peut pas
        &ecirc;tre r&eacute;cup&eacute;r&eacute; &agrave; partir du r&eacute;sultat
        compress&eacute;. Traitez le fichier compress&eacute; comme une copie
        nouvelle et distincte &mdash; jamais comme votre unique copie.
      </p>
      <ul>
        <li>
          Sauvegardez les originaux de vos photos, documents et enregistrements
          importants avant de les traiter.
        </li>
        <li>
          Recompressez &agrave; partir de votre original de la plus haute
          qualit&eacute;, et non d&rsquo;un fichier d&eacute;j&agrave;
          compress&eacute;.
        </li>
        <li>
          V&eacute;rifiez que le fichier compress&eacute; s&rsquo;ouvre
          correctement et que son rendu visuel ou sonore est acceptable avant de
          supprimer l&rsquo;original.
        </li>
      </ul>

      <h2 id="no-liability">Aucune responsabilit&eacute; en cas de perte de donn&eacute;es</h2>
      <p>
        Dans toute la mesure permise par la loi, FileShrinking n&rsquo;est pas
        responsable de la perte, de la corruption ou de l&rsquo;endommagement de
        vos fichiers ou de vos donn&eacute;es, ni de toute autre perte directe,
        indirecte, accessoire ou cons&eacute;cutive d&eacute;coulant de votre
        utilisation (ou de votre impossibilit&eacute; d&rsquo;utiliser) du Service.
        Cela inclut les plantages du navigateur, les erreurs de l&rsquo;appareil,
        les traitements interrompus, les r&eacute;sultats inattendus ou la
        suppression d&rsquo;un original avant d&rsquo;avoir confirm&eacute; le
        r&eacute;sultat. Comme tout s&rsquo;ex&eacute;cute localement sur votre
        appareil, nous n&rsquo;avons aucun acc&egrave;s &agrave; vos fichiers ni
        aucune possibilit&eacute; de les r&eacute;cup&eacute;rer. La
        responsabilit&eacute; de sauvegarder et de v&eacute;rifier vos donn&eacute;es
        vous incombe &agrave; vous seul.
      </p>

      <h2 id="external-links">Liens externes et publicit&eacute;</h2>
      <p>
        Le Service peut contenir des liens vers des sites web tiers et affiche de
        la publicit&eacute; fournie par Google AdSense. Ces liens et publicit&eacute;s
        sont propos&eacute;s par commodit&eacute; et pour soutenir le
        fonctionnement gratuit du site. Nous ne contr&ocirc;lons, n&rsquo;approuvons,
        ne garantissons ni n&rsquo;assumons aucune responsabilit&eacute; quant au
        contenu, aux produits, aux services, &agrave; l&rsquo;exactitude ou aux
        pratiques de tout site ou annonceur tiers. Un lien ou une publicit&eacute;{" "}
        <strong>ne constitue pas une approbation</strong>. Toute relation que vous
        nouez avec un tiers rel&egrave;ve exclusivement de vous et de cette partie.
        Les cookies de publicit&eacute; et d&rsquo;analyse ne sont charg&eacute;s
        qu&rsquo;apr&egrave;s votre consentement&nbsp;; vous pouvez lire comment
        nous g&eacute;rons cela dans notre{" "}
        <Link href="/fr/cookie-policy">Politique relative aux cookies</Link> et
        notre{" "}
        <Link href="/fr/privacy-policy">Politique de confidentialit&eacute;</Link>.
      </p>

      <h2 id="no-professional-advice">Pas un conseil professionnel</h2>
      <p>
        Rien de ce qui figure sur FileShrinking ne constitue un conseil juridique,
        technique, financier ou tout autre conseil professionnel. Les guides, les
        FAQ et les explications sur les formats de fichiers et la compression sont
        un contenu &eacute;ducatif g&eacute;n&eacute;ral et peuvent ne pas
        s&rsquo;appliquer &agrave; votre situation particuli&egrave;re. Si vous
        devez respecter une sp&eacute;cification technique pr&eacute;cise, une
        norme d&rsquo;archivage ou une exigence l&eacute;gale ou r&eacute;glementaire
        &mdash; par exemple pour des d&eacute;p&ocirc;ts judiciaires, de
        l&rsquo;imagerie m&eacute;dicale ou de l&rsquo;impression professionnelle
        &mdash; consultez un professionnel qualifi&eacute; plut&ocirc;t que de vous
        fier &agrave; ces outils ou &agrave; ces articles.
      </p>

      <h2 id="availability">Disponibilit&eacute; et modifications</h2>
      <p>
        Nous fournissons le Service &laquo;&nbsp;en l&rsquo;&eacute;tat&nbsp;&raquo;
        et &laquo;&nbsp;selon disponibilit&eacute;&nbsp;&raquo;. Nous pouvons
        modifier, suspendre ou interrompre tout outil ou toute fonctionnalit&eacute;
        &agrave; tout moment et sans pr&eacute;avis, et nous ne garantissons pas que
        le Service sera ininterrompu, exempt d&rsquo;erreurs ou compatible avec tous
        les appareils ou navigateurs. Nous pouvons mettre &agrave; jour cet
        avertissement de temps &agrave; autre&nbsp;; la date de &laquo;&nbsp;Derni&egrave;re
        mise &agrave; jour&nbsp;&raquo; indiqu&eacute;e ci-dessus refl&egrave;te la
        modification la plus r&eacute;cente, et votre utilisation continue du
        Service signifie que vous acceptez la version en vigueur.
      </p>

      <h2 id="contact">Contactez-nous</h2>
      <p>
        Si vous avez des questions concernant cet avertissement, vous pouvez nous
        &eacute;crire par e-mail &agrave;{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>
    </>
  ),
};
