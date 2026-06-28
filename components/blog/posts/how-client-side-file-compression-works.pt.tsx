import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-client-side-file-compression-works",
  title:
    "Como funciona a compressão de ficheiros no cliente (e porque é mais privada)",
  description:
    "Como o FileShrinking comprime imagens, vídeo e PDF inteiramente no seu navegador com WebAssembly e Web Workers, e porque isso mantém os seus ficheiros privados.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Privacidade", "Como funciona"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Quando comprime uma fotografia ou reduz um PDF na maioria dos sites, o
        seu ficheiro faz uma viagem de ida e volta: é carregado para um
        servidor, processado nalgum centro de dados e devolvem-lhe uma versão
        mais pequena. Funciona, mas significa que uma cópia do seu ficheiro
        privado vive brevemente num computador que não controla. O FileShrinking
        adota uma abordagem diferente: cada byte da compressão acontece{" "}
        <strong>dentro do separador do seu próprio navegador</strong>, e os seus
        ficheiros nunca saem do seu dispositivo. Este artigo explica exatamente
        como isso é possível, que tecnologias do navegador o tornam viável e os
        compromissos honestos que implica.
      </p>

      <h2 id="two-models">Duas formas de comprimir um ficheiro na web</h2>
      <p>
        O modelo tradicional é do <strong>lado do servidor</strong>. O seu
        navegador envia o ficheiro original pela rede; um backend que executa uma
        ferramenta como o ImageMagick ou o FFmpeg faz o trabalho pesado; o
        resultado é transmitido de volta. A máquina do utilizador mal se esforça,
        e o servidor pode ser enormemente potente. O custo são a privacidade e a
        confiança: os seus dados são transmitidos, ficam (ainda que
        temporariamente) no disco de outra pessoa, e tem de acreditar na palavra
        dela quanto ao que lhes acontece depois.
      </p>
      <p>
        O modelo mais recente é do <strong>lado do cliente</strong>. Os mesmos
        algoritmos de compressão são executados diretamente no seu dispositivo,
        no navegador, sem qualquer passo de carregamento. Durante anos isto foi
        pouco prático: o JavaScript por si só era demasiado lento para executar
        um codec de imagem ou vídeo a sério a uma velocidade utilizável. Isso
        mudou quando os navegadores ganharam a capacidade de executar código
        compilado, quase nativo, na web. Hoje um portátil ou um telemóvel
        modernos conseguem fazer o trabalho que antes exigia um servidor, e o
        FileShrinking está construído inteiramente sobre este modelo.
      </p>

      <h2 id="webassembly">
        WebAssembly: codecs reais a correr no navegador
      </h2>
      <p>
        A tecnologia que torna viável a compressão no cliente é o{" "}
        <strong>WebAssembly</strong> (frequentemente abreviado para Wasm). É um
        formato de instruções binárias compacto e de baixo nível que os
        navegadores conseguem executar a velocidades próximas do código nativo.
        De forma crucial, permite aos programadores pegar em codecs escritos em
        C, C++ ou Rust (e refinados ao longo de décadas) e compilá-los para
        correrem na web sem os reescrever em JavaScript.
      </p>
      <p>
        É assim que os mesmos motores de compressão testados em batalha que
        encontraria em software profissional de desktop acabam num separador do
        navegador:
      </p>
      <ul>
        <li>
          <strong>MozJPEG</strong> para uma codificação JPEG de alta qualidade
          que extrai mais de cada kilobyte.
        </li>
        <li>
          <strong>OxiPNG</strong> para a otimização PNG sem perdas.
        </li>
        <li>
          <strong>libwebp</strong> e os codificadores AVIF para os formatos
          modernos <Link href="/pt/compress-webp">WebP</Link> e{" "}
          <Link href="/pt/compress-avif">AVIF</Link>.
        </li>
        <li>
          <strong>FFmpeg</strong>, compilado para WebAssembly, para
          transcodificar e reduzir vídeo.
        </li>
      </ul>
      <p>
        Para uma referência técnica mais aprofundada, a{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/WebAssembly"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentação do WebAssembly da MDN
        </a>{" "}
        é a fonte canónica sobre como o formato funciona e porque é rápido.
      </p>

      <h2 id="web-workers">
        Web Workers: manter a página com boa resposta
      </h2>
      <p>
        A compressão é computacionalmente pesada. Se executasse uma
        transcodificação de vídeo na thread principal do navegador, toda a página
        congelaria: os botões deixariam de responder, o deslocamento daria
        solavancos e as barras de progresso bloqueariam. Para evitar isto, o
        FileShrinking executa o trabalho numa thread separada usando{" "}
        <strong>Web Workers</strong>.
      </p>
      <p>
        Um Web Worker é um contexto de JavaScript em segundo plano que corre em
        paralelo com a interface do utilizador. A thread principal entrega o
        ficheiro (e o codec Wasm) ao worker, o worker processa a compressão e
        devolve o resultado terminado quando acaba. Entretanto, a interface
        mantém-se fluida e pode mostrar o progresso em tempo real. O{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia da MDN sobre a utilização de Web Workers
        </a>{" "}
        aborda em detalhe o modelo de passagem de mensagens. Os dados binários
        grandes podem ser movidos entre threads de forma eficiente através de
        objetos transferíveis, de modo que o ficheiro não tem de ser copiado byte
        a byte só para cruzar a fronteira entre threads.
      </p>

      <h2 id="decoding">Ler e descodificar ficheiros sem a rede</h2>
      <p>
        Antes de poder comprimir seja o que for, o navegador tem de ler o seu
        ficheiro para a memória e descodificá-lo. Isto apoia-se numa pequena
        família de APIs web padrão, nenhuma das quais envolve um servidor:
      </p>
      <ul>
        <li>
          <strong>As APIs File e Blob</strong> representam o ficheiro que
          seleciona ou arrasta. Expõem os bytes em bruto como um{" "}
          <code>ArrayBuffer</code> sobre o qual os codecs podem trabalhar
          diretamente, tudo em memória.
        </li>
        <li>
          <strong>createImageBitmap</strong> descodifica eficientemente uma
          imagem para uma forma pronta a processar, e pode fazê-lo fora da thread
          principal.
        </li>
        <li>
          <strong>OffscreenCanvas</strong> permite ao navegador desenhar,
          redimensionar e recodificar dados de imagem dentro de um worker, sem
          nunca tocar na página visível.
        </li>
      </ul>
      <p>
        No conjunto, a cadeia de processamento tem este aspeto: larga um
        ficheiro, o navegador lê os seus bytes localmente, um worker descodifica-o,
        o codec Wasm recodifica-o com a qualidade que escolher e devolve-se-lhe um
        novo <code>Blob</code> para descarregar. Em momento algum o ficheiro
        viaja para qualquer lado. Se tiver curiosidade sobre as decisões de
        qualidade nesse passo de recodificação, o nosso guia sobre{" "}
        <Link href="/pt/blog/lossy-vs-lossless-compression">
          compressão com perdas versus sem perdas
        </Link>{" "}
        explica o que é realmente descartado e porquê.
      </p>

      <h2 id="privacy">Porque isto é genuinamente mais privado</h2>
      <p>
        O benefício de privacidade do modelo do lado do cliente não é um slogan
        de marketing: é uma consequência direta da arquitetura. Como o seu
        ficheiro só é lido para a memória local e recodificado no seu
        dispositivo:
      </p>
      <ul>
        <li>
          <strong>Nada é transmitido.</strong> Não há carregamento, por isso não
          existe nenhuma cópia do seu ficheiro em trânsito que possa ser
          intercetada nem nenhuma cópia em repouso num servidor que possa ser
          violada, vendida ou requerida judicialmente.
        </li>
        <li>
          <strong>Funciona offline.</strong> Assim que a página e os seus codecs
          Wasm estiverem carregados, pode desligar-se por completo da internet e
          as ferramentas continuam a funcionar. Essa é a prova mais simples de
          que não está a ocorrer qualquer carregamento: pode verificá-lo por si
          mesmo no separador de rede do seu navegador.
        </li>
        <li>
          <strong>Não há nada para reter.</strong> Quando fecha o separador, os
          dados do ficheiro desaparecem da memória. Não há registos de servidor
          que liguem os seus documentos à sua identidade.
        </li>
      </ul>
      <p>
        E como o FileShrinking é{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          totalmente de código aberto sob a licença MIT
        </a>
        , não tem de aceitar estas afirmações por fé. Qualquer pessoa pode ler o
        código, confirmar que não existe um caminho de carregamento e verificar
        exatamente como se comporta a cadeia de compressão. A privacidade
        auditável é a mais sólida.
      </p>

      <h2 id="tradeoffs">Os compromissos honestos</h2>
      <p>
        A compressão no cliente não é magia, e é justo sermos claros sobre onde o
        modelo de servidor ainda tem vantagens:
      </p>
      <ul>
        <li>
          <strong>Velocidade em trabalhos muito grandes.</strong> Um centro de
          dados pode dedicar muitos mais núcleos a um vídeo longo do que aqueles
          que o seu portátil tem. Para a maioria das imagens e dos clips curtos a
          diferença é impercetível, mas um vídeo de longa duração será mais lento
          no navegador do que numa quinta de servidores.
        </li>
        <li>
          <strong>Limites de memória.</strong> Tudo acontece na RAM do seu
          dispositivo. Os ficheiros extremamente grandes (por exemplo, um vídeo
          de vários gigabytes num telemóvel com pouca memória) podem chocar com
          os tetos de memória do navegador que um servidor não teria.
        </li>
        <li>
          <strong>Custo do primeiro carregamento.</strong> Os codecs Wasm têm de
          ser descarregados na primeira vez que usa uma ferramenta. Depois ficam
          em cache, de modo que as visitas seguintes são instantâneas, mas a
          primeira execução paga uma transferência única.
        </li>
      </ul>
      <p>
        Para a esmagadora maioria das tarefas do dia a dia (otimizar fotografias
        para a web, recortar um PDF até ao tamanho de um e-mail, reduzir uma
        gravação de ecrã) estes compromissos valem largamente a pena, e obtém
        privacidade de graça.
      </p>

      <h2 id="try-it">Veja por si mesmo</h2>
      <p>
        A melhor forma de compreender a compressão no cliente é usá-la.
        Experimente o{" "}
        <Link href="/pt/image-compressor">compressor de imagens</Link>, o{" "}
        <Link href="/pt/video-compressor">compressor de vídeo</Link> ou o{" "}
        <Link href="/pt/pdf-compressor">compressor de PDF</Link>, e depois abra
        as ferramentas de programador do seu navegador, observe o separador de
        rede e confirme que nada é carregado enquanto o seu ficheiro encolhe.
        Tudo corre localmente, o código está aberto para que qualquer pessoa o
        inspecione, e os seus ficheiros ficam exatamente onde pertencem:
        consigo.
      </p>
    </>
  );
}
