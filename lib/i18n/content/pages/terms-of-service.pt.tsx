import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Termos de Serviço",
  metaDescription:
    "Os termos de utilização do FileShrinking, um compressor de ficheiros gratuito do lado do cliente. É fornecido tal como está, funciona localmente e nunca carrega os seus ficheiros.",
  title: "Termos de Serviço",
  intro: (
    <>
      Estes termos regem a sua utilização do FileShrinking. Ao usar o
      site, aceita-os. Estão redigidos para serem legíveis &mdash; e,
      como cada ferramenta funciona inteiramente no seu navegador, são
      misericordiosamente breves.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="acceptance">1. Aceita&ccedil;&atilde;o destes termos</h2>
      <p>
        O FileShrinking (&ldquo;FileShrinking,&rdquo; &ldquo;n&oacute;s,&rdquo;
        &ldquo;nos&rdquo; ou &ldquo;o servi&ccedil;o&rdquo;) oferece ferramentas
        gratuitas baseadas no navegador que comprimem e convertem imagens, PDF,
        v&iacute;deo e &aacute;udio. Ao aceder ao site{" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a> ou ao
        utiliz&aacute;-lo, concorda ficar vinculado a estes Termos de
        Servi&ccedil;o. Se n&atilde;o concordar com alguma parte destes termos,
        pedimos-lhe que n&atilde;o utilize o site.
      </p>
      <p>
        Estes termos funcionam em conjunto com a nossa{" "}
        <Link href="/pt/privacy-policy">Pol&iacute;tica de Privacidade</Link> e
        o nosso <Link href="/pt/disclaimer">Aviso Legal</Link>, que aqui se
        incorporam por refer&ecirc;ncia. Em conjunto, descrevem como funciona o
        servi&ccedil;o e os limites daquilo que podemos prometer.
      </p>

      <h2 id="how-it-works">2. Como funciona o servi&ccedil;o</h2>
      <p>
        O FileShrinking &eacute; uma ferramenta{" "}
        <strong>100% do lado do cliente</strong>. Quando adiciona um ficheiro,
        este &eacute; carregado para a mem&oacute;ria do seu navegador e
        processado a&iacute; atrav&eacute;s do WebAssembly e de APIs web
        padr&atilde;o. Os seus ficheiros{" "}
        <strong>nunca s&atilde;o carregados para um servidor</strong>, nunca
        s&atilde;o transmitidos pela rede e nunca s&atilde;o armazenados por
        n&oacute;s. Como o trabalho ocorre no seu pr&oacute;prio dispositivo,
        n&atilde;o podemos ver, aceder, copiar nem adquirir a propriedade de
        qualquer ficheiro que processe &mdash; simplesmente n&atilde;o existe uma
        c&oacute;pia no servidor que possamos conservar.
      </p>
      <p>
        Uma consequ&ecirc;ncia pr&aacute;tica deste design &eacute; que os
        resultados dependem do seu pr&oacute;prio hardware e software. A
        velocidade de processamento, o tamanho m&aacute;ximo de ficheiro que
        consegue manusear, os formatos que o seu navegador suporta e o resultado
        exato variam consoante o dispositivo, o navegador, a mem&oacute;ria
        dispon&iacute;vel e o sistema operativo. N&atilde;o garantimos que um
        ficheiro espec&iacute;fico seja comprimido, convertido ou aberto com
        sucesso na sua configura&ccedil;&atilde;o.
      </p>

      <h2 id="free">3. O servi&ccedil;o &eacute; gratuito</h2>
      <p>
        As ferramentas s&atilde;o de utiliza&ccedil;&atilde;o gratuita, sem
        registo, sem subscri&ccedil;&atilde;o e sem marcas de &aacute;gua.
        Mantemos tudo a funcionar gra&ccedil;as &agrave; publicidade, em vez de
        lhe cobrarmos. Podemos adicionar, alterar ou remover ferramentas e
        funcionalidades a qualquer momento e podemos limitar ou descontinuar o
        servi&ccedil;o, no todo ou em parte, sem aviso pr&eacute;vio. N&atilde;o
        temos qualquer obriga&ccedil;&atilde;o de manter dispon&iacute;vel
        qualquer ferramenta espec&iacute;fica.
      </p>

      <h2 id="acceptable-use">4. Utiliza&ccedil;&atilde;o aceit&aacute;vel</h2>
      <p>Concorda que n&atilde;o utilizar&aacute; o FileShrinking para:</p>
      <ul>
        <li>
          processar, criar ou distribuir conte&uacute;do que seja ilegal,
          infrator, difamat&oacute;rio ou que viole os direitos de qualquer
          terceiro;
        </li>
        <li>
          manusear ficheiros que n&atilde;o lhe perten&ccedil;am ou sobre os
          quais n&atilde;o tenha os direitos e permiss&otilde;es necess&aacute;rios
          para os utilizar;
        </li>
        <li>
          violar qualquer lei ou regulamento aplic&aacute;vel na sua
          jurisdi&ccedil;&atilde;o, incluindo as leis de exporta&ccedil;&atilde;o,
          de privacidade e de propriedade intelectual;
        </li>
        <li>
          tentar perturbar, sobrecarregar, fazer engenharia inversa com fins
          maliciosos ou interferir no funcionamento, na seguran&ccedil;a ou na
          integridade do site ou do seu c&oacute;digo subjacente; ou
        </li>
        <li>
          deturpar o servi&ccedil;o, por exemplo, ao realoj&aacute;-lo de um modo
          que d&ecirc; a entender que &eacute; seu ou que carrega ficheiros quando
          n&atilde;o o faz.
        </li>
      </ul>
      <p>
        <strong>
          &Eacute; o &uacute;nico respons&aacute;vel pelos seus ficheiros
        </strong>{" "}
        e por confirmar que tem o direito de os utilizar. Uma vez que o
        processamento ocorre no seu dispositivo, s&oacute; voc&ecirc; controla o
        que introduz nas ferramentas e o que faz com os resultados.
      </p>

      <h2 id="no-warranty">
        5. Sem garantia &mdash; fornecido &ldquo;tal como est&aacute;&rdquo;
      </h2>
      <p>
        O servi&ccedil;o &eacute; fornecido{" "}
        <strong>&ldquo;tal como est&aacute;&rdquo;</strong> e{" "}
        <strong>&ldquo;conforme dispon&iacute;vel,&rdquo;</strong> sem garantias
        de qualquer tipo, sejam expressas ou impl&iacute;citas. Na m&aacute;xima
        medida permitida por lei, renunciamos a todas as garantias, incluindo as
        garantias impl&iacute;citas de comercializa&ccedil;&atilde;o, de
        adequa&ccedil;&atilde;o a um fim espec&iacute;fico, de exatid&atilde;o e
        de n&atilde;o viola&ccedil;&atilde;o. N&atilde;o garantimos que o
        servi&ccedil;o seja ininterrupto, isento de erros, seguro nem que qualquer
        resultado v&aacute; corresponder &agrave;s suas expectativas.
      </p>
      <p>
        A compress&atilde;o &eacute; muitas vezes{" "}
        <strong>com perdas</strong>: para tornar os ficheiros mais pequenos, as
        ferramentas podem descartar dados que n&atilde;o podem ser recuperados.
        &Eacute; respons&aacute;vel por rever cada resultado antes de confiar
        nele.
      </p>

      <h2 id="liability">
        6. Limita&ccedil;&atilde;o de responsabilidade e perda de dados
      </h2>
      <p>
        Na m&aacute;xima medida permitida por lei, o FileShrinking e os seus
        operadores n&atilde;o ser&atilde;o respons&aacute;veis por quaisquer
        danos indiretos, incidentais, especiais, consequenciais ou punitivos, nem
        por qualquer perda de dados, ficheiros, lucros ou clientela, decorrente
        de ou relacionada com a sua utiliza&ccedil;&atilde;o (ou a impossibilidade
        de utiliza&ccedil;&atilde;o) do servi&ccedil;o &mdash; mesmo que tenhamos
        sido avisados da possibilidade de tais danos.
      </p>
      <p>
        Fundamental:{" "}
        <strong>
          guarde sempre uma c&oacute;pia dos seus ficheiros originais.
        </strong>{" "}
        O processamento no navegador pode falhar, um separador pode bloquear ou
        um resultado pode n&atilde;o ser satisfat&oacute;rio e, como nunca
        recebemos os seus ficheiros, n&atilde;o podemos recuperar nada por si.
        Trate o resultado como uma c&oacute;pia nova e verifique-o antes de
        eliminar os seus originais.
      </p>

      <h2 id="ip">7. Propriedade intelectual</h2>
      <p>
        O nome, o logot&iacute;po, o design do site, os textos e o c&oacute;digo
        original do FileShrinking s&atilde;o propriedade nossa ou dos nossos
        licenciadores e est&atilde;o protegidos pelas leis de propriedade
        intelectual. Pode utilizar o site para a sua finalidade prevista, mas
        n&atilde;o pode copiar, mudar a marca nem redistribuir o pr&oacute;prio
        site sem autoriza&ccedil;&atilde;o. Os motores de compress&atilde;o
        subjacentes s&atilde;o fornecidos pelos respetivos projetos de
        c&oacute;digo aberto ao abrigo das suas pr&oacute;prias licen&ccedil;as.
      </p>
      <p>
        <strong>Os seus ficheiros continuam a ser seus.</strong> N&atilde;o
        reivindicamos qualquer propriedade sobre nenhum ficheiro que processe,
        nem adquirimos qualquer direito sobre ele &mdash; e, conforme referido
        acima, nem sequer o recebemos.
      </p>

      <h2 id="third-party">8. Servi&ccedil;os de terceiros</h2>
      <p>
        Utilizamos um pequeno n&uacute;mero de servi&ccedil;os de terceiros para
        operar o site e mant&ecirc;-lo gratuito. Estes s&atilde;o carregados
        apenas conforme descrito na nossa{" "}
        <Link href="/pt/privacy-policy">Pol&iacute;tica de Privacidade</Link> e,
        quando necess&aacute;rio, est&atilde;o condicionados ao seu
        consentimento:
      </p>
      <table>
        <thead>
          <tr>
            <th>Servi&ccedil;o</th>
            <th>Finalidade</th>
            <th>Quando carrega</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google AdSense</td>
            <td>Publicidade que financia as ferramentas gratuitas</td>
            <td>Apenas ap&oacute;s o seu consentimento</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Estat&iacute;sticas de utiliza&ccedil;&atilde;o agregadas e an&oacute;nimas</td>
            <td>Apenas ap&oacute;s o seu consentimento</td>
          </tr>
        </tbody>
      </table>
      <p>
        Estes fornecedores operam ao abrigo dos seus pr&oacute;prios termos e
        pol&iacute;ticas de privacidade, que n&atilde;o controlamos. E, o que
        &eacute; importante: nenhum deles recebe alguma vez os seus ficheiros;
        tratam apenas dados padr&atilde;o de an&aacute;lise web e de publicidade,
        e apenas com o seu consentimento.
      </p>

      <h2 id="changes">9. Altera&ccedil;&otilde;es a estes termos</h2>
      <p>
        Podemos atualizar estes termos de tempos a tempos &agrave; medida que o
        servi&ccedil;o evolui ou a lei muda. Quando o fizermos, revemos a data de
        &ldquo;&Uacute;ltima atualiza&ccedil;&atilde;o&rdquo; no topo desta
        p&aacute;gina. As altera&ccedil;&otilde;es relevantes podem ser destacadas
        no site. A sua utiliza&ccedil;&atilde;o continuada do FileShrinking
        ap&oacute;s uma atualiza&ccedil;&atilde;o significa que aceita os termos
        revistos.
      </p>

      <h2 id="governing-law">10. Legisla&ccedil;&atilde;o aplic&aacute;vel</h2>
      <p>
        Estes termos regem-se pelas leis aplic&aacute;veis no local onde o
        operador do Site est&aacute; estabelecido, sem ter em conta as regras de
        conflito de leis. Quando for aplic&aacute;vel a legisla&ccedil;&atilde;o
        imperativa de prote&ccedil;&atilde;o do consumidor, mant&eacute;m o
        direito de intentar a&ccedil;&otilde;es no seu pr&oacute;prio pa&iacute;s
        de resid&ecirc;ncia, e nada nestes termos limita os direitos que n&atilde;o
        possam ser renunciados ao abrigo da lei que lhe seja aplic&aacute;vel. Se
        alguma disposi&ccedil;&atilde;o destes termos for considerada
        inexequ&iacute;vel, as restantes disposi&ccedil;&otilde;es
        permanecer&atilde;o em pleno vigor.
      </p>

      <h2 id="contact">11. Contacto</h2>
      <p>
        Tem quest&otilde;es sobre estes termos? Escreva-nos para{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> ou
        visite a nossa <Link href="/pt/contact">p&aacute;gina de contacto</Link>.
        Teremos todo o gosto em ajudar a esclarecer qualquer ponto aqui presente.
      </p>
    </>
  ),
};
