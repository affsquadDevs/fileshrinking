import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Aviso legal",
  metaDescription:
    "Aviso legal honesto da FileShrinking: as nossas ferramentas gratuitas de compressão 100% no navegador não garantem fidelidade nem tamanho. Guarde os originais.",
  title: "Aviso legal",
  intro: (
    <>
      A FileShrinking disponibiliza ferramentas gratuitas de compress&atilde;o
      baseadas no navegador como uma comodidade. Esta p&aacute;gina explica os
      limites dessas ferramentas, os resultados que pode esperar de forma
      realista e as responsabilidades que continuam a ser suas.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="general">Apenas informa&ccedil;&atilde;o geral</h2>
      <p>
        A informa&ccedil;&atilde;o, as ferramentas e o conte&uacute;do da
        FileShrinking (o &ldquo;Servi&ccedil;o&rdquo;) s&atilde;o
        disponibilizados unicamente para fins informativos gerais e de uso
        pr&aacute;tico. Esfor&ccedil;amo-nos por manter tudo rigoroso e
        &uacute;til, mas n&atilde;o oferecemos garantias de qualquer tipo,
        expressas ou impl&iacute;citas, sobre a integridade, exatid&atilde;o,
        fiabilidade, adequa&ccedil;&atilde;o ou disponibilidade do Servi&ccedil;o
        ou dos seus resultados. A utiliza&ccedil;&atilde;o do Servi&ccedil;o
        decorre inteiramente por sua conta e risco. Este aviso legal deve ser
        lido em conjunto com os nossos{" "}
        <Link href="/pt/terms-of-service">Termos de Servi&ccedil;o</Link>, que
        regem a utiliza&ccedil;&atilde;o do site.
      </p>

      <h2 id="how-it-works">Como funcionam realmente as nossas ferramentas</h2>
      <p>
        Cada compressor da FileShrinking &eacute; executado{" "}
        <strong>inteiramente dentro do seu navegador web</strong>. As suas
        imagens, PDF, v&iacute;deos e ficheiros de &aacute;udio s&atilde;o
        carregados para a mem&oacute;ria do seu dispositivo, processados
        localmente com WebAssembly e devolvidos diretamente a si.{" "}
        <strong>
          Os seus ficheiros nunca s&atilde;o carregados para n&oacute;s,
          transmitidos pela rede nem armazenados em qualquer servidor.
        </strong>{" "}
        Como todo o trabalho acontece no seu pr&oacute;prio hardware, a
        velocidade, a qualidade e at&eacute; mesmo a possibilidade de um dado
        ficheiro poder ser processado dependem do seu dispositivo, do seu
        navegador, da mem&oacute;ria dispon&iacute;vel e do ficheiro que
        fornecer. Para conhecer os dados limitados que o pr&oacute;prio site
        gere, consulte a nossa{" "}
        <Link href="/pt/privacy-policy">Pol&iacute;tica de Privacidade</Link> e a
        nossa <Link href="/pt/cookie-policy">Pol&iacute;tica de Cookies</Link>.
      </p>

      <h2 id="no-guarantee">Sem garantia de resultados</h2>
      <p>
        A compress&atilde;o n&atilde;o &eacute; magia e n&atilde;o podemos
        prometer um resultado concreto. A maior parte da compress&atilde;o de
        imagem, v&iacute;deo e &aacute;udio &eacute;{" "}
        <strong>com perda</strong>, o que significa que descarta de forma
        permanente parte dos dados para reduzir o tamanho dos ficheiros.
        N&atilde;o garantimos qualquer taxa de compress&atilde;o, tamanho de
        ficheiro, qualidade de sa&iacute;da ou fidelidade perfeita ao seu
        original em concreto. O quanto um ficheiro encolhe e o aspeto ou som que
        ter&aacute; depois dependem do pr&oacute;prio conte&uacute;do, do
        formato, das defini&ccedil;&otilde;es que escolher e de qu&atilde;o bem
        otimizado j&aacute; estava o original. Uma fotografia tirada diretamente
        de uma c&acirc;mara pode reduzir-se drasticamente, ao passo que um
        ficheiro j&aacute; otimizado pode quase n&atilde;o mudar &mdash; ou, em
        alguns casos, um ficheiro recodificado pode at&eacute; ficar maior do
        que o original.
      </p>

      <h2 id="limits">Limites reais que deve conhecer</h2>
      <p>
        Os diferentes tipos de ficheiro comportam-se de forma muito diferente, e
        alguns t&ecirc;m limites pr&aacute;ticos absolutos que nenhuma ferramenta
        dentro do navegador consegue superar:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Tipo de ficheiro</th>
              <th>O que esperar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Imagens (JPEG, PNG, WebP, AVIF, GIF)</td>
              <td>
                Costumam comprimir-se bem, mas a poupan&ccedil;a varia. As
                imagens j&aacute; otimizadas podem reduzir-se pouco ou nada.
              </td>
            </tr>
            <tr>
              <td>PDF</td>
              <td>
                A nossa ferramenta de PDF reduz o tamanho principalmente ao
                recomprimir as imagens incorporadas. Os PDF compostos por texto
                e gr&aacute;ficos vetoriais podem reduzir-se muito pouco ou nada,
                porque n&atilde;o h&aacute; imagens grandes para otimizar.
              </td>
            </tr>
            <tr>
              <td>V&iacute;deo</td>
              <td>
                A compress&atilde;o de v&iacute;deo no navegador &eacute; de um
                s&oacute; fio de execu&ccedil;&atilde;o e intensiva em CPU. Pode
                ser lenta, e os ficheiros muito grandes podem falhar por completo
                em dispositivos com pouca mem&oacute;ria ou em navegadores
                antigos.
              </td>
            </tr>
            <tr>
              <td>&Aacute;udio</td>
              <td>
                A recodifica&ccedil;&atilde;o com perda pode reduzir o tamanho,
                mas recomprimir um ficheiro j&aacute; comprimido (como um MP3 de
                baixa taxa de bits) traz pouco benef&iacute;cio e pode reduzir a
                qualidade.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Se uma ferramenta bloquear, ficar sem mem&oacute;ria ou falhar com um
        ficheiro grande, isso &eacute; uma limita&ccedil;&atilde;o de executar um
        processamento pesado num separador do navegador &mdash; n&atilde;o um
        defeito que deva esperar que resolvamos para um ficheiro concreto.
        Experimentar um ficheiro mais pequeno, um navegador diferente, um
        dispositivo mais potente ou fechar outros separadores costuma ajudar.
      </p>

      <h2 id="keep-originals">Guarde sempre os seus ficheiros originais</h2>
      <p>
        Este &eacute; o ponto mais importante de toda esta p&aacute;gina.{" "}
        <strong>
          Guarde sempre uma c&oacute;pia segura e inalterada de cada ficheiro
          original antes de o comprimir.
        </strong>{" "}
        A compress&atilde;o pode ser cumulativa e irrevers&iacute;vel: uma vez
        descartado o detalhe, n&atilde;o pode ser recuperado a partir do
        resultado comprimido. Trate o ficheiro comprimido como uma c&oacute;pia
        nova e independente &mdash; nunca como a sua &uacute;nica c&oacute;pia.
      </p>
      <ul>
        <li>
          Mantenha c&oacute;pias de seguran&ccedil;a dos originais das suas
          fotografias, documentos e grava&ccedil;&otilde;es importantes antes de
          os processar.
        </li>
        <li>
          Volte a comprimir a partir do seu original de mais alta qualidade,
          n&atilde;o a partir de um ficheiro que j&aacute; tenha sido comprimido.
        </li>
        <li>
          Verifique se o ficheiro comprimido abre corretamente e tem um aspeto
          ou som aceit&aacute;vel antes de eliminar o original.
        </li>
      </ul>

      <h2 id="no-liability">Sem responsabilidade por perda de dados</h2>
      <p>
        Na m&aacute;xima medida permitida por lei, a FileShrinking n&atilde;o
        &eacute; respons&aacute;vel por qualquer perda, danifica&ccedil;&atilde;o
        ou corrup&ccedil;&atilde;o dos seus ficheiros ou dados, nem por qualquer
        outra perda direta, indireta, incidental ou consequente decorrente da
        utiliza&ccedil;&atilde;o (ou da impossibilidade de utiliza&ccedil;&atilde;o)
        do Servi&ccedil;o. Isto inclui falhas do navegador, erros do
        dispositivo, processamentos interrompidos, resultados inesperados ou a
        elimina&ccedil;&atilde;o de um original antes de ter confirmado o
        resultado. Como tudo &eacute; executado localmente no seu dispositivo,
        n&atilde;o temos acesso aos seus ficheiros nem qualquer possibilidade de
        os recuperar. A responsabilidade de fazer c&oacute;pias de
        seguran&ccedil;a e de verificar os seus dados &eacute; exclusivamente
        sua.
      </p>

      <h2 id="external-links">Liga&ccedil;&otilde;es externas e publicidade</h2>
      <p>
        O Servi&ccedil;o pode conter liga&ccedil;&otilde;es para sites de
        terceiros e apresenta publicidade fornecida pelo Google AdSense. Estas
        liga&ccedil;&otilde;es e an&uacute;ncios s&atilde;o oferecidos por
        comodidade e para apoiar o funcionamento gratuito do site. N&atilde;o
        controlamos, n&atilde;o subscrevemos, n&atilde;o garantimos nem assumimos
        qualquer responsabilidade pelo conte&uacute;do, pelos produtos, pelos
        servi&ccedil;os, pela exatid&atilde;o ou pelas pr&aacute;ticas de
        qualquer site ou anunciante terceiro. Uma liga&ccedil;&atilde;o ou um
        an&uacute;ncio <strong>n&atilde;o constitui uma aprova&ccedil;&atilde;o</strong>.
        Quaisquer neg&oacute;cios que tenha com um terceiro s&atilde;o
        exclusivamente entre si e essa parte. As cookies de publicidade e de
        an&aacute;lise s&atilde;o carregadas apenas depois de dar o seu
        consentimento; pode ler como tratamos isto na nossa{" "}
        <Link href="/pt/cookie-policy">Pol&iacute;tica de Cookies</Link> e na
        nossa{" "}
        <Link href="/pt/privacy-policy">Pol&iacute;tica de Privacidade</Link>.
      </p>

      <h2 id="no-professional-advice">N&atilde;o &eacute; aconselhamento profissional</h2>
      <p>
        Nada do que consta na FileShrinking constitui aconselhamento jur&iacute;dico,
        t&eacute;cnico, financeiro ou profissional de qualquer outro tipo. Os
        guias, as perguntas frequentes e as explica&ccedil;&otilde;es sobre
        formatos de ficheiro e compress&atilde;o s&atilde;o conte&uacute;do
        educativo geral e podem n&atilde;o se aplicar &agrave; sua
        situa&ccedil;&atilde;o concreta. Se precisar de cumprir uma
        especifica&ccedil;&atilde;o t&eacute;cnica espec&iacute;fica, uma norma de
        arquivo ou um requisito legal ou regulamentar &mdash; por exemplo, para
        peti&ccedil;&otilde;es judiciais, imagiologia m&eacute;dica ou
        impress&atilde;o profissional &mdash; consulte um profissional
        qualificado em vez de confiar nestas ferramentas ou artigos.
      </p>

      <h2 id="availability">Disponibilidade e altera&ccedil;&otilde;es</h2>
      <p>
        Disponibilizamos o Servi&ccedil;o &ldquo;tal como est&aacute;&rdquo; e
        &ldquo;conforme a disponibilidade&rdquo;. Podemos alterar, suspender ou
        descontinuar qualquer ferramenta ou funcionalidade a qualquer momento e
        sem aviso pr&eacute;vio, e n&atilde;o garantimos que o Servi&ccedil;o
        seja ininterrupto, esteja livre de erros ou seja compat&iacute;vel com
        todos os dispositivos ou navegadores. Podemos atualizar este aviso legal
        de tempos a tempos; a data de &ldquo;&Uacute;ltima
        atualiza&ccedil;&atilde;o&rdquo; indicada acima reflete a
        altera&ccedil;&atilde;o mais recente, e a utiliza&ccedil;&atilde;o
        continuada do Servi&ccedil;o significa que aceita a vers&atilde;o em
        vigor.
      </p>

      <h2 id="contact">Contacte-nos</h2>
      <p>
        Se tiver alguma quest&atilde;o sobre este aviso legal, pode escrever-nos
        por correio eletr&oacute;nico para{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>
    </>
  ),
};
