import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Política de cookies",
  metaDescription:
    "Como o FileShrinking usa cookies e armazenamento local: armazenamento próprio mínimo para o consentimento e o tema, mais Google Analytics e AdSense com consentimento.",
  title: "Política de cookies",
  intro: (
    <>
      O FileShrinking funciona inteiramente no seu navegador e mantém as cookies
      no mínimo absoluto. Esta página explica exatamente o que é guardado no seu
      dispositivo, porquê, durante quanto tempo e como pode alterar as suas
      escolhas a qualquer momento.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Resumo</h2>
      <p>
        Uma &ldquo;cookie&rdquo; é um pequeno ficheiro de texto que um sítio web
        pede ao seu navegador para guardar, de modo a poder recordar informação
        entre visitas. Tecnologias relacionadas como{" "}
        <strong>localStorage</strong> funcionam da mesma forma: guardam um pouco
        de dados no seu próprio dispositivo. O FileShrinking é uma ferramenta que
        prioriza a privacidade e funciona 100% do lado do cliente. Os seus
        ficheiros são comprimidos localmente no seu navegador e{" "}
        <strong>nunca são carregados</strong> para nós nem para mais ninguém, pelo
        que nunca definimos uma cookie que contenha, rastreie ou transmita os
        seus ficheiros ou o respetivo conteúdo.
      </p>
      <p>
        Usamos apenas uma quantidade mínima de armazenamento{" "}
        <strong>próprio</strong> para recordar as suas preferências e carregamos
        serviços de <strong>publicidade e análise de terceiros</strong> da Google{" "}
        <strong>apenas depois de dar o seu consentimento</strong>. Até que aceite,
        esses serviços estão bloqueados e não definem nenhuma cookie. Esta
        política deve ser lida em conjunto com a nossa{" "}
        <Link href="/pt/privacy-policy">Política de privacidade</Link>.
      </p>

      <h2 id="first-party">Armazenamento próprio que definimos</h2>
      <p>
        Estes elementos são escritos pelo próprio FileShrinking, residem
        unicamente no seu dispositivo e são essenciais para que o sítio recorde
        escolhas básicas. São guardados no localStorage do seu navegador, e não
        como cookies tradicionais, nunca são enviados para um servidor e não o
        identificam.
      </p>
      <ul>
        <li>
          <strong>Escolha de consentimento.</strong> Quando aceita ou rejeita os
          serviços opcionais no nosso banner de consentimento, guardamos essa
          decisão para não voltar a perguntar a cada carregamento de página e para
          a podermos respeitar.
        </li>
        <li>
          <strong>Preferência de tema.</strong> Se alternar entre o modo claro e
          o escuro, recordamos a sua escolha para que o sítio tenha o aspeto com
          que o deixou.
        </li>
      </ul>

      <h2 id="consent-gated">
        Serviços de terceiros sujeitos a consentimento
      </h2>
      <p>
        Para manter o FileShrinking gratuito, o sítio é financiado por publicidade
        e usamos análise para perceber quais as ferramentas úteis. Estes serviços
        são fornecidos pela Google e são carregados através do{" "}
        <strong>Google Tag Manager</strong>. Podem definir as suas próprias
        cookies, mas só são executados <strong>depois de ter aceitado
        explicitamente</strong> no nosso banner de consentimento. Os serviços
        envolvidos são:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> &mdash; mede a utilização agregada e
          anónima, como as visualizações de páginas e quais os compressores
          populares, ajudando-nos a melhorar o sítio.
        </li>
        <li>
          <strong>Google AdSense</strong> (e a respetiva veiculação de anúncios
          DoubleClick) &mdash; apresenta os anúncios que financiam o projeto e
          ajuda a limitar a frequência com que vê o mesmo anúncio.
        </li>
      </ul>

      <h2 id="table">Cookies e armazenamento que utilizamos</h2>
      <p>
        A tabela abaixo enumera os principais elementos. Os nomes e durações
        exatos definidos pela Google podem mudar; para conhecer os detalhes mais
        atuais, consulte a documentação da própria Google indicada em{" "}
        <a href="#managing">Gerir as suas escolhas</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Fornecedor</th>
            <th>Finalidade</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Escolha de consentimento
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (própria)</td>
            <td>
              Recorda se aceitou ou rejeitou as cookies opcionais.
            </td>
            <td>Persistente até que a elimine</td>
          </tr>
          <tr>
            <td>
              Tema
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (própria)</td>
            <td>Recorda a sua preferência de modo claro ou escuro.</td>
            <td>Persistente até que a elimine</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics (definida apenas com consentimento)</td>
            <td>
              Distingue os visitantes anónimos para medir a utilização agregada
              do sítio.
            </td>
            <td>Até 2 anos</td>
          </tr>
          <tr>
            <td>
              IDE, DSID, test_cookie
              <br />
              e cookies de anúncios relacionadas
            </td>
            <td>Google AdSense / DoubleClick (definida apenas com consentimento)</td>
            <td>
              Veicula e mede anúncios e limita a apresentação repetida do mesmo
              anúncio.
            </td>
            <td>Sessão até 13 meses</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consent-mode">
        Modo de consentimento v2: negado por predefinição
      </h2>
      <p>
        Usamos o <strong>Modo de consentimento v2</strong> da Google. Em termos
        simples, isto significa que cada sinal de consentimento &mdash; para o
        armazenamento de análise, o armazenamento de anúncios, a personalização
        de anúncios e os dados de utilizador para anúncios &mdash; começa no
        estado <strong>&ldquo;negado&rdquo;</strong> por predefinição no momento
        em que a página é carregada. Nada é concedido até que faça uma escolha.
      </p>
      <p>
        Se <strong>aceitar</strong>, os sinais correspondentes passam a
        &ldquo;concedido&rdquo; e o Google Analytics e o AdSense podem definir as
        cookies descritas acima. Se <strong>rejeitar</strong> ou simplesmente
        ignorar o banner, esses sinais permanecem em &ldquo;negado&rdquo;: os
        scripts são executados num modo restrito e sem cookies, e não armazenam
        identificadores no seu dispositivo. Em qualquer dos casos, as suas
        preferências próprias indicadas acima continuam a funcionar porque são
        estritamente necessárias para o funcionamento do sítio.
      </p>

      <h2 id="managing">Gerir as suas escolhas</h2>
      <p>
        Tem sempre o controlo. Pode alterar ou retirar o seu consentimento a
        qualquer momento através da ligação <strong>Definições de
        consentimento</strong> que surge no rodapé de cada página, a qual reabre o
        banner de consentimento para que atualize a sua decisão. Retirar o
        consentimento impede que os serviços da Google definam novas cookies daí
        em diante.
      </p>
      <p>
        Também pode gerir as cookies diretamente no seu navegador: a maioria dos
        navegadores permite-lhe ver, bloquear ou eliminar cookies e limpar o
        armazenamento do sítio a partir do respetivo menu de privacidade ou
        definições. Eliminar os nossos elementos próprios significa simplesmente
        que o sítio voltará a pedir-lhe as suas preferências de tema e
        consentimento. Para mais detalhes sobre os serviços de terceiros, consulte
        a{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          informação sobre cookies
        </a>{" "}
        da Google e a sua{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidade
        </a>
        .
      </p>

      <h2 id="changes">Alterações a esta política</h2>
      <p>
        Podemos atualizar esta Política de cookies se acrescentarmos uma
        funcionalidade ou alterarmos os serviços em que nos apoiamos. Quando o
        fizermos, reveremos a data de &ldquo;Última atualização&rdquo; no topo
        desta página. As alterações significativas que afetem as cookies que
        definimos serão refletidas no banner de consentimento para que possa rever
        a sua escolha.
      </p>

      <h2 id="contact">Contacte-nos</h2>
      <p>
        Se tiver alguma dúvida sobre como usamos as cookies ou o armazenamento
        local, escreva-nos para{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Para
        obter uma visão mais completa de como tratamos os dados, leia a nossa{" "}
        <Link href="/pt/privacy-policy">Política de privacidade</Link>.
      </p>
    </>
  ),
};
