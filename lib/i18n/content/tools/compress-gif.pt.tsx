import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir GIF — Otimizador de GIF gratuito",
  metaDescription:
    "Comprima um GIF para WebP ou PNG no seu navegador. 100% privado, sem envios: os ficheiros não saem do dispositivo. Para GIF animados, converta para vídeo.",
  heading: "Compressor de GIF",
  intro: (
    <>
      Transforme um GIF numa imagem WebP ou PNG muito mais pequena, diretamente no
      seu navegador: nada é enviado. Tenha em conta que isto converte apenas o{" "}
      <strong>primeiro fotograma</strong> e não mantém a animação. Para reduzir um
      GIF <em>animado</em> mantendo o movimento, converta-o antes para um{" "}
      <Link href="/pt/compress-mp4">vídeo MP4 minúsculo</Link>.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir um GIF",
    description:
      "Converta um GIF num WebP ou PNG mais pequeno localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione o seu GIF",
        text: "Arraste e largue o seu ficheiro .gif na zona de carregamento, clique para procurar ou cole-o a partir da área de transferência. Pode adicionar vários de uma só vez.",
      },
      {
        name: "Escolha um formato de saída",
        text: "Escolha WebP para o ficheiro mais pequeno e pronto para a web, ou PNG para uma cópia sem perdas e com a máxima compatibilidade do primeiro fotograma.",
      },
      {
        name: "Defina a qualidade",
        text: "Para WebP, arraste o controlo de qualidade: cerca de 75 é um ótimo equilíbrio entre tamanho e detalhe. O PNG é sempre sem perdas.",
      },
      {
        name: "Descarregue o seu ficheiro",
        text: "Guarde as imagens uma a uma ou todas de uma vez num ZIP. Volte a executar com definições diferentes sempre que quiser para comparar resultados.",
      },
    ],
  },
  faqs: [
    {
      q: "Isto mantém o meu GIF animado?",
      a: (
        <>
          Não, e isto é o mais importante que deve saber. Esta ferramenta dentro
          do navegador converte o <strong>primeiro fotograma</strong> do seu GIF
          numa única imagem WebP ou PNG estática. Não preserva a animação. Se o seu
          GIF se mexe e quer manter esse movimento ocupando uma fração do tamanho,
          converta-o antes para um vídeo curto com o nosso{" "}
          <Link href="/pt/compress-mp4">compressor de MP4</Link> ou o{" "}
          <Link href="/pt/video-compressor">compressor de vídeo</Link>.
        </>
      ),
      text: "Não. Esta ferramenta converte o primeiro fotograma do seu GIF numa única imagem WebP ou PNG estática e não preserva a animação. Para manter o movimento ocupando uma fração do tamanho, converta um GIF animado para um vídeo curto com o nosso compressor de MP4 ou o compressor de vídeo.",
    },
    {
      q: "Os meus ficheiros GIF são enviados para um servidor?",
      a: "Não. Cada ficheiro é processado localmente no seu navegador. Os seus GIF nunca saem do seu dispositivo e não há nenhum servidor para onde os enviar: pode até desligar-se da internet depois de a página carregar e continua a funcionar.",
      text: "Não. Cada ficheiro é processado localmente no seu navegador. Os seus GIF nunca saem do seu dispositivo e não há nenhum servidor para onde os enviar. Pode desligar-se da internet depois de a página carregar e continua a funcionar.",
    },
    {
      q: "O compressor de GIF é mesmo gratuito?",
      a: "Sim, é completamente gratuito, sem registo, sem marcas de água e sem limites de número de ficheiros nem de tamanho para além do que a memória do seu dispositivo consiga aguentar. O site é mantido com anúncios discretos.",
      text: "Sim. É completamente gratuito, sem registo, sem marcas de água e sem limites de número de ficheiros nem de tamanho para além do que a memória do seu dispositivo consiga aguentar. O site é mantido com anúncios discretos.",
    },
    {
      q: "A conversão reduz a qualidade?",
      a: (
        <>
          Para um GIF estático, converter para WebP normalmente melhora a qualidade{" "}
          <em>e</em> reduz o tamanho do ficheiro, porque o WebP suporta milhões de
          cores enquanto o GIF está limitado a 256. Escolha <strong>PNG</strong>{" "}
          para um resultado sem perdas, ou use o controlo de qualidade com{" "}
          <strong>WebP</strong> para trocar um pouco de detalhe por um ficheiro
          muito mais pequeno. Cerca de 75 é um ótimo equilíbrio.
        </>
      ),
      text: "Para um GIF estático, converter para WebP normalmente melhora a qualidade e reduz o tamanho do ficheiro, porque o WebP suporta milhões de cores enquanto o GIF está limitado a 256. Escolha PNG para um resultado sem perdas, ou use o controlo de qualidade com WebP para trocar um pouco de detalhe por um ficheiro muito mais pequeno. Cerca de 75 é um bom equilíbrio.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso processar?",
      a: "Não há um limite rígido: depende da memória disponível no seu dispositivo. Os telemóveis e portáteis lidam com folga com GIF típicos de alguns megabytes, e mesmo ficheiros maiores funcionam bem. Como tudo é executado em memória, os ficheiros muito grandes usam mais RAM, por isso feche outros separadores pesados se atingir um limite.",
      text: "Não há um limite rígido; depende da memória disponível no seu dispositivo. Os GIF típicos de alguns megabytes e mesmo ficheiros maiores funcionam bem. Como tudo é executado em memória, os ficheiros muito grandes usam mais RAM, por isso feche outros separadores pesados se atingir um limite.",
    },
    {
      q: "Devo usar WebP ou PNG como saída?",
      a: (
        <>
          Use <strong>WebP</strong> para o ficheiro mais pequeno: é ideal para a
          web e suporta modos com perdas e sem perdas. Use <strong>PNG</strong>{" "}
          quando precisar da máxima compatibilidade com software antigo ou de uma
          cópia sem perdas garantida, por exemplo um logótipo ou ícone que tenha
          extraído de um GIF.
        </>
      ),
      text: "Use WebP para o ficheiro mais pequeno; é ideal para a web e suporta modos com perdas e sem perdas. Use PNG quando precisar da máxima compatibilidade com software antigo ou de uma cópia sem perdas garantida, como um logótipo ou ícone extraído de um GIF.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê converter ou comprimir um GIF?</h2>
      <p>
        O formato GIF está em todo o lado, mas é uma das formas menos eficientes de
        armazenar uma imagem. Um GIF está limitado a uma paleta de apenas{" "}
        <strong>256 cores</strong> por fotograma e usa um esquema de compressão
        antigo e leve, por isso as fotografias e os gráficos detalhados guardados
        como GIF apresentam bandas e pesam muito mais do que deviam. Os GIF
        animados são ainda piores: cada fotograma é armazenado como uma imagem
        completa, razão pela qual um clipe curto pode disparar para muitos
        megabytes, por vezes mais do que um vídeo em alta definição do mesmo
        conteúdo.
      </p>
      <p>
        Esta ferramenta aborda o caso estático. Lê o primeiro fotograma do seu GIF
        e volta a codificá-lo como um <strong>WebP</strong> ou{" "}
        <strong>PNG</strong> moderno, o que normalmente produz um ficheiro muito
        mais pequeno e de maior qualidade. Como tudo acontece no seu dispositivo,
        também é privado: o seu GIF é descodificado em memória, convertido com um
        codificador WebAssembly e devolvido diretamente a si. Nunca toca na rede.
      </p>
      <p>
        Se o seu GIF for animado, continue a ler: a jogada realmente útil não é
        comprimir o GIF, mas sim convertê-lo para vídeo, onde a poupança é enorme.
      </p>

      <h2 id="animation">GIF animado? Converta-o antes para vídeo</h2>
      <p>
        Sejamos transparentes: este conversor dentro do navegador gera um único
        fotograma estático, por isso não consegue preservar a animação. É uma
        limitação deliberada e honesta, não um erro. Para um GIF animado, a
        resposta certa é substituí-lo por um formato de vídeo real como MP4 (H.264)
        ou WebM. Os codecs de vídeo modernos usam compensação de movimento (só
        armazenam o que muda entre fotogramas), por isso a mesma animação
        normalmente fica <strong>90% mais pequena ou mais</strong> e com um aspeto
        mais nítido.
      </p>
      <p>
        Isto não é apenas a nossa opinião; é uma recomendação de desempenho web de
        longa data. O web.dev da Google recomenda que{" "}
        <a
          href="https://web.dev/articles/replace-gifs-with-videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          substitua os GIF animados por vídeo
        </a>{" "}
        precisamente por esta razão. Para o fazer aqui, envie o seu GIF animado
        para o nosso <Link href="/pt/compress-mp4">compressor de MP4</Link> ou para
        o mais geral{" "}
        <Link href="/pt/video-compressor">compressor de vídeo</Link>, que também
        suporta MOV, WebM e mais. Vai obter um ficheiro minúsculo que reproduz com
        fluidez e repete em ciclo automaticamente, tal como o GIF original fazia.
      </p>

      <h2 id="format">O que é um GIF e porque é que o WebP ou o PNG vencem</h2>
      <p>
        O GIF (Graphics Interchange Format) remonta a 1987 e usa compressão LZW com
        uma paleta indexada limitada a 256 cores. Suporta animação simples e um
        nível de transparência binária, o que o tornou icónico na web inicial, mas
        essas restrições são exatamente o motivo pelo qual tem dificuldades com tudo
        o que vá além de gráficos pequenos e planos. Pode ler o contexto técnico na{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format"
          target="_blank"
          rel="noopener noreferrer"
        >
          referência de formatos de imagem da MDN
        </a>
        .
      </p>
      <p>
        Converter o fotograma para <strong>WebP</strong> elimina o limite de 256
        cores, adiciona transparência alfa completa e suporta modos com perdas e
        sem perdas, por isso os ficheiros costumam ser muito mais pequenos com
        qualidade igual ou melhor. O <strong>PNG</strong> é a opção certa quando
        precisa de uma cópia sem perdas garantida ou da maior compatibilidade com
        software, por exemplo, ao extrair um logótipo ou autocolante de um GIF. Se
        mais tarde quiser explorar outros destinos como AVIF, a nossa{" "}
        <Link href="/pt/compress-webp">ferramenta WebP</Link> e o nosso{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link> permitem-lhe
        comparar formatos lado a lado.
      </p>

      <h2 id="tips">Dicas para os melhores resultados</h2>
      <ul>
        <li>
          <strong>GIF animado? Passe-o para vídeo.</strong> Não lute contra o
          formato. Converta-o com o{" "}
          <Link href="/pt/compress-mp4">compressor de MP4</Link> para a maior
          poupança e a reprodução mais fluida.
        </li>
        <li>
          <strong>Escolha PNG para gráficos, WebP para o tamanho.</strong> Os
          logótipos, os ícones e a arte de contornos nítidos mantêm-se nítidos como
          PNG; para a web, o WebP é quase sempre a opção mais pequena.
        </li>
        <li>
          <strong>Redimensione antes de converter.</strong> Se a imagem vai ser
          apresentada com 400 px de largura, reduza-a com a opção de
          redimensionamento integrada: isso poupa muito mais do que as definições de
          qualidade por si só.
        </li>
        <li>
          <strong>Compare o resultado.</strong> Experimente WebP com qualidade 75,
          depois volte a executar mais baixo ou mude para PNG e verifique se nota a
          diferença ao tamanho do seu ecrã.
        </li>
      </ul>
    </>
  ),
};
