import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Política de Privacidade",
  metaDescription:
    "Como a FileShrinking trata os seus dados: os ficheiros nunca são enviados, a compressão acontece no seu navegador. Analytics e anúncios exigem consentimento.",
  title: "Política de Privacidade",
  intro: (
    <>
      A FileShrinking foi concebida com a privacidade em primeiro lugar. Os
      ficheiros que comprime nunca s&atilde;o enviados: s&atilde;o processados
      inteiramente no seu navegador, pelo que nunca os recebemos, vemos ou
      armazenamos. Esta pol&iacute;tica explica os poucos dados que de facto
      tratamos e as op&ccedil;&otilde;es que o utilizador controla.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Resumo</h2>
      <p>
        Esta Pol&iacute;tica de Privacidade descreve como a FileShrinking
        ({" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a>, o
        &laquo;Site&raquo;) recolhe, utiliza e protege as informa&ccedil;&otilde;es
        quando o visita. O Site &eacute; gerido pela equipa da FileShrinking
        (&laquo;n&oacute;s&raquo; ou &laquo;nosso&raquo;). Ao utilizar o Site,
        aceita as pr&aacute;ticas aqui descritas. Leia tamb&eacute;m a nossa{" "}
        <Link href="/pt/cookie-policy">Pol&iacute;tica de Cookies</Link> e os
        nossos{" "}
        <Link href="/pt/terms-of-service">Termos de Servi&ccedil;o</Link>, que
        fazem parte do seu acordo connosco.
      </p>

      <h2 id="files-never-uploaded">Os seus ficheiros nunca s&atilde;o enviados</h2>
      <p>
        Isto &eacute; o mais importante que deve compreender sobre a
        FileShrinking. Todas as nossas ferramentas de compress&atilde;o &mdash;
        para imagens, PDF, v&iacute;deo e &aacute;udio &mdash; s&atilde;o
        executadas{" "}
        <strong>100&nbsp;% dentro do seu navegador web</strong> atrav&eacute;s de
        WebAssembly. Quando adiciona um ficheiro, este &eacute; carregado para a
        mem&oacute;ria do seu dispositivo e processado localmente no seu pr&oacute;prio
        hardware. O resultado comprimido &eacute;-lhe devolvido diretamente para
        que o transfira.
      </p>
      <p>
        Gra&ccedil;as a esta conce&ccedil;&atilde;o, <strong>nunca recebemos,
        vemos, armazenamos nem transmitimos</strong> os ficheiros que comprime
        nem qualquer um dos seus conte&uacute;dos. N&atilde;o existe qualquer
        passo de envio no servidor, n&atilde;o &eacute; guardada nenhuma
        c&oacute;pia em lado nenhum e os seus ficheiros nunca saem do seu
        dispositivo. Na verdade, depois de a p&aacute;gina estar carregada, pode
        desligar-se por completo da internet e as ferramentas continuar&atilde;o
        a funcionar.
      </p>

      <h2 id="what-we-do-not-collect">O que n&atilde;o recolhemos</h2>
      <ul>
        <li>
          <strong>Os seus ficheiros ou os respetivos conte&uacute;dos.</strong> N&atilde;o
          temos acesso aos documentos, fotografias, v&iacute;deos ou &aacute;udio
          que processa.
        </li>
        <li>
          <strong>Dados de conta.</strong> A FileShrinking n&atilde;o tem
          registo, in&iacute;cio de sess&atilde;o nem contas de utilizador, pelo
          que n&atilde;o recolhemos nomes, palavras-passe nem perfis.
        </li>
        <li>
          <strong>Informa&ccedil;&otilde;es de pagamento.</strong> O Site &eacute;
          de utiliza&ccedil;&atilde;o gratuita; n&atilde;o processamos pagamentos
          nem armazenamos quaisquer dados financeiros.
        </li>
      </ul>

      <h2 id="data-we-use">Informa&ccedil;&otilde;es que s&atilde;o utilizadas</h2>
      <p>
        A FileShrinking utiliza intencionalmente muito poucos dados. A tabela
        seguinte resume o que &eacute; armazenado ou processado, onde reside e
        porqu&ecirc;.
      </p>
      <table>
        <thead>
          <tr>
            <th>Dados</th>
            <th>Onde residem</th>
            <th>Finalidade</th>
            <th>Requer consentimento?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Escolha de consentimento</td>
            <td>localStorage (o seu navegador)</td>
            <td>
              Recordar se aceitou ou recusou analytics e an&uacute;ncios
            </td>
            <td>N&atilde;o: estritamente necess&aacute;rio</td>
          </tr>
          <tr>
            <td>Prefer&ecirc;ncia de tema</td>
            <td>localStorage (o seu navegador)</td>
            <td>
              Recordar o modo claro/escuro para que o Site apare&ccedil;a
              corretamente ao voltar
            </td>
            <td>N&atilde;o: estritamente necess&aacute;rio</td>
          </tr>
          <tr>
            <td>Dados de analytics</td>
            <td>Google Analytics (atrav&eacute;s do Google Tag Manager)</td>
            <td>Compreender a utiliza&ccedil;&atilde;o agregada para melhorar o Site</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>Dados publicit&aacute;rios</td>
            <td>Google AdSense</td>
            <td>Mostrar an&uacute;ncios que ajudam a manter o Site gratuito</td>
            <td>Sim</td>
          </tr>
        </tbody>
      </table>
      <p>
        Os valores de <strong>localStorage</strong> acima s&atilde;o
        pequenas defini&ccedil;&otilde;es armazenadas apenas no seu navegador.
        N&atilde;o nos s&atilde;o transmitidos e n&atilde;o cont&ecirc;m
        informa&ccedil;&otilde;es pessoais: apenas a sua decis&atilde;o de
        consentimento e o tema que escolheu. Pode apag&aacute;-los a qualquer
        momento atrav&eacute;s das defini&ccedil;&otilde;es do seu navegador.
      </p>

      <h2 id="analytics">Analytics</h2>
      <p>
        Utilizamos o <strong>Google Analytics</strong>, carregado atrav&eacute;s
        do{" "}
        <strong>Google Tag Manager (GTM)</strong>, para perceber como os
        visitantes utilizam o Site de forma agregada; por exemplo, que
        ferramentas s&atilde;o populares e que p&aacute;ginas carregam
        lentamente. Isto ajuda-nos a priorizar melhorias. O Analytics{" "}
        <strong>s&oacute; &eacute; carregado depois de dar o seu consentimento</strong>.
        Se recusar, estes scripts n&atilde;o s&atilde;o executados e n&atilde;o &eacute;
        recolhido qualquer dado de analytics. Os dados de analytics s&atilde;o
        recolhidos e processados de forma agregada e n&atilde;o s&atilde;o
        utilizados para o identificar pessoalmente.
      </p>

      <h2 id="advertising">Publicidade</h2>
      <p>
        A FileShrinking &eacute; gratuita e cobrimos os nossos custos com
        publicidade fornecida pelo <strong>Google AdSense</strong>. Os
        an&uacute;ncios{" "}
        <strong>s&oacute; s&atilde;o carregados depois de dar o seu consentimento</strong>.
        Quando consente a publicidade, a Google e os seus parceiros podem
        utilizar cookies, identificadores de dispositivo e tecnologias
        semelhantes para apresentar e medir an&uacute;ncios, incluindo{" "}
        <strong>an&uacute;ncios personalizados (baseados em interesses)</strong> com
        base na sua atividade anterior. Se recusar, o AdSense n&atilde;o &eacute;
        carregado e n&atilde;o receber&aacute; publicidade personalizada da nossa
        parte.
      </p>
      <p>
        A utiliza&ccedil;&atilde;o que a Google faz dos cookies
        publicit&aacute;rios rege-se pelas pr&oacute;prias pol&iacute;ticas da
        Google. Pode obter mais informa&ccedil;&otilde;es e gerir as suas
        defini&ccedil;&otilde;es de an&uacute;ncios na{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          p&aacute;gina de Publicidade da Google
        </a>{" "}
        e consultar a{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pol&iacute;tica de Privacidade da Google
        </a>
        .
      </p>

      <h2 id="consent-mode">Google Consent Mode v2</h2>
      <p>
        Implementamos o <strong>Google Consent Mode v2</strong>. Antes de tomar
        uma decis&atilde;o, as etiquetas de analytics e de publicidade da Google
        assumem por predefini&ccedil;&atilde;o um estado recusado, o que
        significa que n&atilde;o definem cookies identificativos nem recolhem
        dados pessoais. S&oacute; depois de conceder o seu consentimento &eacute;
        que os sinais pertinentes s&atilde;o atualizados e os servi&ccedil;os
        correspondentes ativados. Isto d&aacute;-lhe um controlo real sobre se o
        analytics e a publicidade chegam sequer a ser executados.
      </p>

      <h2 id="third-party">Servi&ccedil;os e liga&ccedil;&otilde;es de terceiros</h2>
      <p>
        Os servi&ccedil;os de terceiros mencionados acima s&atilde;o geridos pela
        Google LLC. O tratamento de quaisquer dados que recolham rege-se pelos
        seus pr&oacute;prios termos, n&atilde;o pelos nossos:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pol&iacute;tica de Privacidade da Google
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Como a Google utiliza os cookies na publicidade
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacidade e seguran&ccedil;a dos dados do Google Analytics
          </a>
        </li>
      </ul>
      <p>
        O Site pode tamb&eacute;m conter liga&ccedil;&otilde;es para outros sites
        que n&atilde;o controlamos. N&atilde;o somos respons&aacute;veis pelas
        pr&aacute;ticas de privacidade desses sites e incentivamo-lo a ler as
        respetivas pol&iacute;ticas.
      </p>

      <h2 id="your-rights">Os seus direitos de privacidade (RGPD)</h2>
      <p>
        Se se encontrar no Espa&ccedil;o Econ&oacute;mico Europeu ou no Reino
        Unido, disp&otilde;e de direitos ao abrigo do Regulamento Geral sobre a
        Prote&ccedil;&atilde;o de Dados, incluindo o direito de{" "}
        <strong>aceder</strong> aos dados pessoais que conservamos sobre si, o
        direito ao <strong>apagamento (elimina&ccedil;&atilde;o)</strong>, o
        direito de <strong>se opor ao tratamento ou de o limitar</strong> e o
        direito de <strong>retirar o consentimento</strong> a qualquer momento.
        Quando nos baseamos no consentimento (analytics e publicidade),
        retir&aacute;-lo &eacute; t&atilde;o f&aacute;cil como d&aacute;-lo e
        n&atilde;o afetar&aacute; a licitude do tratamento realizado
        anteriormente.
      </p>
      <p>Para exercer estes direitos pode:</p>
      <ul>
        <li>
          <strong>Reabrir as suas defini&ccedil;&otilde;es de consentimento</strong>{" "}
          a qualquer momento atrav&eacute;s da liga&ccedil;&atilde;o de
          consentimento ou de prefer&ecirc;ncias de cookies no rodap&eacute; de
          cada p&aacute;gina e, em seguida, alterar ou retirar as suas escolhas.
        </li>
        <li>
          <strong>Apagar o armazenamento do seu navegador</strong> para remover
          os valores de consentimento e de tema guardados localmente.
        </li>
        <li>
          <strong>Enviar-nos um e-mail</strong> para{" "}
          <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> e
          responderemos dentro do prazo exigido pela legisla&ccedil;&atilde;o
          aplic&aacute;vel.
        </li>
      </ul>
      <p>
        Tem ainda o direito de apresentar uma reclama&ccedil;&atilde;o junto da
        autoridade de prote&ccedil;&atilde;o de dados do seu pa&iacute;s ou
        regi&atilde;o se considerar que os seus direitos foram violados.
      </p>

      <h2 id="ccpa">Direitos de privacidade da Calif&oacute;rnia (CCPA/CPRA)</h2>
      <p>
        Se for residente na Calif&oacute;rnia, a Lei de Privacidade do Consumidor
        da Calif&oacute;rnia, conforme alterada, confere-lhe direitos para saber
        que informa&ccedil;&otilde;es pessoais s&atilde;o recolhidas, para
        solicitar a sua elimina&ccedil;&atilde;o e para recusar a
        &laquo;venda&raquo; ou a &laquo;partilha&raquo; de
        informa&ccedil;&otilde;es pessoais. N&atilde;o vendemos as suas
        informa&ccedil;&otilde;es pessoais por dinheiro. Quando a
        utiliza&ccedil;&atilde;o de cookies publicit&aacute;rios possa ser
        considerada &laquo;partilha&raquo; para publicidade comportamental entre
        contextos, pode recusar rejeitando o consentimento de publicidade nas
        nossas defini&ccedil;&otilde;es de consentimento ou n&atilde;o o
        concedendo de in&iacute;cio. Para apresentar um pedido, envie um e-mail
        para{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2 id="retention">Conserva&ccedil;&atilde;o de dados</h2>
      <p>
        Uma vez que os seus ficheiros s&atilde;o processados localmente e nunca
        chegam at&eacute; n&oacute;s, n&atilde;o h&aacute; nada que possamos
        conservar sobre eles. Os valores de consentimento e de tema armazenados
        no seu navegador persistem at&eacute; que os apague ou altere as suas
        escolhas. Os dados de analytics e de publicidade, quando ativados com o
        seu consentimento, s&atilde;o conservados pela Google de acordo com as
        suas pr&oacute;prias defini&ccedil;&otilde;es e pol&iacute;ticas de
        conserva&ccedil;&atilde;o.
      </p>

      <h2 id="children">Privacidade das crian&ccedil;as</h2>
      <p>
        A FileShrinking &eacute; uma ferramenta para o p&uacute;blico em geral e
        n&atilde;o se destina a crian&ccedil;as com menos de 13 anos (ou a idade
        m&iacute;nima na sua jurisdi&ccedil;&atilde;o). N&atilde;o recolhemos
        conscientemente informa&ccedil;&otilde;es pessoais de crian&ccedil;as. Se
        acredita que uma crian&ccedil;a nos forneceu informa&ccedil;&otilde;es
        pessoais, contacte-nos para que possamos tomar as medidas adequadas.
      </p>

      <h2 id="changes">Altera&ccedil;&otilde;es a esta pol&iacute;tica</h2>
      <p>
        Poderemos atualizar esta Pol&iacute;tica de Privacidade de tempos a
        tempos para refletir altera&ccedil;&otilde;es nas nossas pr&aacute;ticas
        ou por motivos legais. Quando o fizermos, reveremos a data de
        &laquo;&Uacute;ltima atualiza&ccedil;&atilde;o&raquo; no topo desta
        p&aacute;gina. As altera&ccedil;&otilde;es significativas podem ser
        destacadas no Site. Incentivamo-lo a rever esta p&aacute;gina
        periodicamente.
      </p>

      <h2 id="contact">Contacte-nos</h2>
      <p>
        Se tiver alguma quest&atilde;o sobre esta Pol&iacute;tica de Privacidade
        ou sobre a forma como os seus dados s&atilde;o tratados, envie-nos um
        e-mail para{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> ou
        visite a nossa <Link href="/pt/contact">p&aacute;gina de contacto</Link>,
        e teremos todo o gosto em ajudar.
      </p>
    </>
  ),
};
