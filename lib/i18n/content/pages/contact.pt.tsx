import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Contacte-nos",
  metaDescription:
    "Entre em contacto com a FileShrinking: perguntas, comentários, erros ou ideias. Escreva para hello@fileshrinking.com — privacidade primeiro, sem dados guardados.",
  title: "Contacte-nos",
  intro: (
    <>
      Gostaríamos muito de ouvir a sua opinião. Quer tenha uma pergunta, um
      comentário, um erro a comunicar ou uma ideia para uma funcionalidade, o
      formulário abaixo é a forma mais rápida de chegar às pessoas que criam a
      FileShrinking.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="get-in-touch">Entre em contacto</h2>
      <p>
        A FileShrinking é um conjunto de ferramentas gratuito e centrado na
        privacidade para reduzir ficheiros diretamente no seu navegador: desde
        imagens <Link href="/pt/compress-jpeg">JPEG</Link> e{" "}
        <Link href="/pt/compress-png">PNG</Link> até{" "}
        <Link href="/pt/pdf-compressor">documentos PDF</Link>,{" "}
        <Link href="/pt/video-compressor">vídeo</Link> e{" "}
        <Link href="/pt/audio-compressor">áudio</Link>. Como cada ferramenta é
        executada por completo no seu próprio dispositivo, não vemos os seus
        ficheiros e não os podemos recuperar nem inspecionar. Mas para qualquer
        outra coisa &mdash; como funciona uma ferramenta, porque é que um
        resultado tem o aspeto que tem ou o que devemos criar a seguir &mdash;
        teremos todo o gosto em ajudar.
      </p>
      <p>Motivos pelos quais as pessoas costumam escrever-nos:</p>
      <ul>
        <li>
          <strong>Perguntas</strong> sobre como funciona uma ferramenta, que
          formato escolher ou como obter o ficheiro mais pequeno sem perder
          qualidade.
        </li>
        <li>
          <strong>Relatórios de erros</strong> &mdash; um ficheiro que não é
          processado, um botão que não responde ou qualquer coisa que pareça
          avariada. Indicar-nos o seu navegador e sistema operativo ajuda-nos a
          reproduzi-lo rapidamente.
        </li>
        <li>
          <strong>Pedidos de funcionalidades</strong> &mdash; um formato que
          gostaria que suportássemos, uma opção que lhe falta ou um fluxo de
          trabalho que poderíamos tornar mais simples.
        </li>
        <li>
          <strong>Comentários</strong> de qualquer tipo, incluindo as partes que
          adora e as partes que o frustram. Tudo influencia o que fazemos a
          seguir.
        </li>
      </ul>

      <h2 id="form">Envie-nos uma mensagem</h2>
      <p>
        Preencha o formulário abaixo e clique em &laquo;Enviar mensagem&raquo;.
        Há algo importante que deve saber sobre o seu funcionamento:{" "}
        <strong>
          o formulário compõe um e-mail na sua própria aplicação de correio em
          vez de nos enviar algo diretamente.
        </strong>{" "}
        Quando o submete, o seu dispositivo abre o seu cliente de correio
        predefinido (como o Apple Mail, o Outlook ou o Gmail) com a mensagem já
        preenchida e endereçada a nós. Nada é transmitido até que <em>você</em>{" "}
        clique em enviar dentro dessa aplicação. Como resultado, a FileShrinking
        não recolhe, transmite a um servidor nem armazena quaisquer dados da
        mensagem através desta página &mdash; o mesmo princípio de privacidade
        que mantém os seus ficheiros no seu dispositivo aplica-se também às suas
        mensagens.
      </p>

      <ContactForm />

      <h2 id="email">Prefere escrever diretamente por e-mail?</h2>
      <p>
        Pode sempre contactar-nos à maneira tradicional. Escreva para{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> a
        partir da conta que preferir e a sua mensagem chegará diretamente à nossa
        caixa de entrada de suporte. Isto é útil se o seu navegador bloquear a
        ação de &laquo;abrir a minha aplicação de correio&raquo; do formulário,
        se estiver num computador partilhado sem um cliente de correio
        configurado, ou se simplesmente quiser anexar uma captura de ecrã &mdash;
        o que muitas vezes torna um relatório de erro muito mais fácil de
        entender.
      </p>

      <h2 id="response-times">Tempos de resposta</h2>
      <p>
        A FileShrinking é gerida por uma equipa pequena, por isso lemos cada
        mensagem pessoalmente em vez de as encaminhar para um centro de
        atendimento. Procuramos responder no prazo de{" "}
        <strong>dois a três dias úteis</strong>. Em períodos de muita atividade,
        ou perante perguntas técnicas complexas que exigem investigação, pode
        demorar um pouco mais &mdash; obrigado desde já pela sua paciência. Se não
        receber resposta dentro de cerca de uma semana, verifique a sua pasta de
        spam ou de lixo eletrónico e depois não hesite em escrever-nos novamente,
        caso a sua mensagem original se tenha perdido.
      </p>
      <p>
        Tenha em atenção que fornecemos suporte apenas em inglês e que não
        podemos ajudar com ficheiros que tenha processado noutro lugar nem com
        software de terceiros. Para perguntas sobre como tratamos os dados e sobre
        as limitadas análises e publicidade deste site &mdash; todas sujeitas ao
        seu consentimento &mdash; consulte a nossa{" "}
        <Link href="/pt/privacy-policy">Política de Privacidade</Link>. Para as
        regras que regem a utilização do site, consulte os nossos{" "}
        <Link href="/pt/terms-of-service">Termos de Serviço</Link>.
      </p>

      <h2 id="before-you-write">Antes de escrever, uma dica rápida</h2>
      <p>
        Muitas perguntas frequentes já estão respondidas na página de cada
        ferramenta, onde encontrará umas breves perguntas frequentes sobre
        privacidade, limites de tamanho, qualidade e processamento em lote. Se
        tem curiosidade sobre quem cria a FileShrinking e porque é que escolhemos
        uma abordagem totalmente do lado do cliente, a nossa{" "}
        <Link href="/pt/about">página Sobre nós</Link> conta a história. E se a
        sua resposta não estiver lá, é exatamente para isso que serve o
        formulário acima &mdash; não hesite em contactar-nos.
      </p>
    </>
  ),
};
