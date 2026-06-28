import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "is-it-safe-to-compress-files-online",
  title: "É seguro comprimir ficheiros online? Guia de privacidade",
  description:
    "A maioria dos compressores online envia os seus ficheiros para um servidor. Eis o que lhes acontece de facto, os riscos reais e como reconhecer uma ferramenta verdadeiramente privada.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "team",
  tags: ["Privacidade", "Segurança"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Procure uma forma de reduzir o tamanho de uma foto ou de um PDF e
        encontrará centenas de sites de &ldquo;compressor online
        gratuito&rdquo;. São cómodos, funcionam e, na maior parte do tempo, nada
        de mau acontece. Mas &ldquo;online&rdquo; costuma significar uma coisa
        muito concreta nos bastidores:{" "}
        <strong>o seu ficheiro é enviado para o servidor de outra pessoa</strong>
        , processado lá e devolvido. Que isto seja seguro depende inteiramente de
        quem é o dono desse servidor e do que faz com os seus dados. Este guia
        explica o que acontece realmente quando envia um ficheiro, onde estão os
        verdadeiros riscos e como distinguir uma ferramenta genuinamente privada
        de uma que apenas diz sê-lo.
      </p>

      <h2 id="what-happens">O que acontece quando envia um ficheiro para o comprimir</h2>
      <p>
        Um compressor online tradicional segue um percurso de ida e volta
        simples: o seu navegador envia o ficheiro original através da internet
        para um servidor web, um programa lá comprime-o e o resultado é devolvido
        para que o transfira. A compressão em si é inofensiva. A exposição vem de
        tudo o que toca no seu ficheiro pelo caminho:
      </p>
      <ul>
        <li>
          <strong>São escritas cópias no disco.</strong> Para processar um
          ficheiro, um servidor quase sempre o guarda temporariamente.
          &ldquo;Temporariamente&rdquo; pode significar segundos ou, consoante os
          processos de limpeza e as cópias de segurança, muito mais tempo.
        </li>
        <li>
          <strong>Registos e caches.</strong> Os servidores web, as redes de
          distribuição de conteúdos e os proxies registam os pedidos de forma
          rotineira e podem guardar as respostas em cache. O seu ficheiro ou os
          seus metadados podem persistir em locais que nem sequer o operador do
          site controla diretamente.
        </li>
        <li>
          <strong>Processadores de terceiros.</strong> Muitos sites não gerem a
          sua própria infraestrutura; passam o seu ficheiro para um
          armazenamento na nuvem, para uma função serverless ou para a API de
          compressão de outra empresa. Cada salto é mais uma parte que tem, por
          mais breve que seja, uma cópia dos seus dados.
        </li>
        <li>
          <strong>Retenção que não aceitou.</strong> Uma promessa de
          &ldquo;eliminar os ficheiros ao fim de uma hora&rdquo; vale o que valer
          a honestidade e a engenharia do operador. Não tem forma de a verificar.
        </li>
      </ul>
      <p>
        Nada disto é intrinsecamente malicioso. Um serviço de boa reputação com
        boa segurança pode gerir tudo isto de forma responsável. O problema é
        que{" "}
        <strong>está a confiar em pessoas que não consegue ver</strong>, e, uma
        vez que um ficheiro sai do seu dispositivo, perde o controlo sobre onde
        ficam as suas cópias.
      </p>

      <h2 id="real-risks">Os riscos reais (sem alarmismos)</h2>
      <p>
        Sejamos honestos quanto às probabilidades. A esmagadora maioria das
        compressões online decorre sem incidentes. Mas, quando algo corre mal, as
        consequências podem ser graves, e crescem em função de quão sensível for
        o ficheiro.
      </p>
      <h3>Fugas de dados</h3>
      <p>
        Qualquer servidor que armazene ficheiros, ainda que brevemente, é um
        alvo. Buckets na nuvem mal configurados, credenciais expostas e software
        sem correções já expuseram no passado os carregamentos dos utilizadores.
        Se o seu ficheiro estava nesse servidor quando sofreu a violação, deixou
        de estar nas suas mãos.
      </p>
      <h3>Condições que concedem direitos discretamente</h3>
      <p>
        Leia as letras miudinhas de algumas ferramentas gratuitas e encontrará
        licenças amplas: permissão para &ldquo;armazenar, reproduzir e
        processar&rdquo; o seu conteúdo, ou para usar os carregamentos a fim de
        &ldquo;melhorar os nossos serviços&rdquo; &mdash; o que pode incluir
        alimentar fluxos de análise ou de aprendizagem automática. Talvez esteja
        a entregar mais do que pensa em troca do &ldquo;gratuito&rdquo;.
      </p>
      <h3>Rastreio de terceiros</h3>
      <p>
        Os compressores financiados por publicidade carregam frequentemente
        rastreadores e scripts publicitários. Esses scripts não conseguem ler o
        conteúdo do seu ficheiro, mas conseguem registar que usou uma ferramenta
        para, por exemplo, comprimir imagens médicas, e associá-lo a um perfil
        seu.
      </p>

      <h2 id="sensitive-files">Porque é que os ficheiros sensíveis merecem cautela acrescida</h2>
      <p>
        O cálculo muda por completo consoante o que estiver a comprimir. Reduzir
        um meme é de baixo risco. Enviar qualquer um dos seguintes para um
        servidor desconhecido é algo completamente diferente:
      </p>
      <ul>
        <li>
          <strong>Documentos de identificação</strong> &mdash; passaportes,
          cartas de condução, cartões de cidadão. São ouro para a fraude.
        </li>
        <li>
          <strong>Ficheiros financeiros e legais</strong> &mdash; contratos
          assinados, formulários fiscais, extratos bancários, faturas com dados
          de conta.
        </li>
        <li>
          <strong>Históricos e exames médicos</strong> &mdash; estes podem ainda
          estar sujeitos a proteções legais (como a HIPAA nos EUA ou as regras de
          categorias especiais do RGPD na UE) pelas quais você, ou a sua empresa,
          são responsáveis.
        </li>
        <li>
          <strong>Fotos privadas e correspondência pessoal</strong> &mdash;
          material que nunca quereria ver surgir numa fuga ou num conjunto de
          treino.
        </li>
      </ul>
      <p>
        Para ficheiros como estes, a pergunta certa não é &ldquo;este site
        provavelmente está bem?&rdquo;, mas sim &ldquo;será que este ficheiro
        precisa sequer de sair do meu dispositivo?&rdquo;. Muitas vezes, a
        resposta é não.
      </p>

      <h2 id="how-to-tell">Como saber se um compressor é realmente privado</h2>
      <p>
        O marketing sai barato; &ldquo;seguro&rdquo; e &ldquo;privado&rdquo;
        aparecem em montes de sites que mesmo assim enviam tudo. Eis como
        verificar por si mesmo, mais ou menos por ordem de quão conclusivo é cada
        teste.
      </p>
      <h3>1. Envia alguma coisa? Vigie o separador de rede.</h3>
      <p>
        Este é o teste mais poderoso de todos, e qualquer pessoa o pode fazer.
        Abra as ferramentas de programador do seu navegador (F12 ou clique com o
        botão direito e depois <em>Inspecionar</em>), mude para o separador{" "}
        <strong>Rede</strong> e comprima um ficheiro. Se vir um grande pedido de
        saída a transportar o seu ficheiro, foi enviado. Se o processamento for
        local, verá o ficheiro a carregar na página, mas{" "}
        <strong>sem qualquer envio do seu conteúdo</strong> a sair. A{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentação da MDN sobre como os navegadores lidam com os pedidos
          entre origens
        </a>{" "}
        é uma boa introdução ao que significam essas entradas de rede.
      </p>
      <h3>2. O processamento é do lado do cliente?</h3>
      <p>
        Os navegadores modernos conseguem comprimir imagens, vídeo, áudio e PDF
        inteiramente na sua própria máquina através de tecnologias como a API
        Canvas, o WebAssembly e os{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Workers
        </a>
        . Uma ferramenta construída assim nunca precisa de um servidor para o
        trabalho propriamente dito. Aprofundamos como isto é possível no nosso
        artigo sobre{" "}
        <Link href="/pt/blog/compress-images-without-losing-quality">
          comprimir imagens sem perder qualidade
        </Link>
        .
      </p>
      <h3>3. O código é de fonte aberta e auditável?</h3>
      <p>
        Uma afirmação de privacidade cujo código-fonte pode ler vale muito mais
        do que uma que não pode. Se o projeto for de fonte aberta, qualquer
        pessoa &mdash; incluindo os investigadores de segurança &mdash; pode
        confirmar que os ficheiros são processados localmente e que nada é
        exfiltrado. Uma ferramenta fechada pede-lhe que confie na sua palavra.
      </p>
      <h3>4. A política de privacidade é específica e clara?</h3>
      <p>
        Uma política fiável indica com clareza se os ficheiros são enviados, o
        que é retido e durante quanto tempo, e que terceiros estão envolvidos.
        Uma linguagem vaga, ou uma política que contradiz o lema &ldquo;nunca
        vemos os seus ficheiros&rdquo;, é um sinal de alarme.
      </p>

      <h2 id="client-side-alternative">A alternativa mais segura: manter os ficheiros no seu dispositivo</h2>
      <p>
        A forma mais limpa de eliminar o risco de envio é não enviar nada. Um
        compressor <strong>do lado do cliente</strong> (no navegador) faz cada
        passo de forma local: o seu ficheiro é lido para dentro da página,
        processado por código que corre na sua própria CPU e guardado de volta na
        sua pasta de transferências &mdash; sem que um único byte do seu conteúdo
        atravesse a rede. Não há nenhuma cópia no servidor que possa ser violada,
        nenhuma política de retenção em que confiar e nenhum processador de
        terceiros no circuito, porque não há nenhum servidor a fazer o trabalho.
      </p>
      <p>
        É exatamente assim que o FileShrinking está construído. Cada ferramenta
        &mdash; <Link href="/pt/image-compressor">o compressor de imagens</Link>,{" "}
        <Link href="/pt/pdf-compressor">o compressor de PDF</Link> e as restantes
        &mdash; corre <strong>a 100% no seu navegador</strong>. Os seus ficheiros
        nunca são enviados. E, como o projeto é{" "}
        <strong>totalmente de fonte aberta sob a licença MIT</strong>, essa
        afirmação de que nada é enviado é verificável em vez de uma mera promessa:
        pode ler o código em{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/affsquadDevs/fileshrinking
        </a>
        , abrir o separador de rede enquanto o usa e confirmar que ambos contam a
        mesma história. A nossa{" "}
        <Link href="/pt/privacy-policy">política de privacidade</Link> diz o mesmo
        em linguagem clara.
      </p>

      <h2 id="bottom-line">Em resumo</h2>
      <p>
        Comprimir ficheiros online não é automaticamente inseguro &mdash; mas o
        modelo predefinido, em que o seu ficheiro é enviado para o servidor de um
        desconhecido, acarreta riscos reais que crescem com quão sensível for o
        ficheiro. Antes de enviar fosse o que for que importe, faça as
        verificações rápidas: abra o separador de rede, procure processamento do
        lado do cliente e prefira ferramentas cujo código possa inspecionar de
        verdade. Melhor ainda: quando o trabalho puder acontecer inteiramente no
        seu navegador, deixe que assim seja. O ficheiro que nunca sai do seu
        dispositivo é o que nunca pode ter fugas.
      </p>
    </>
  );
}
