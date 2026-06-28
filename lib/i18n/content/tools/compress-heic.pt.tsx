import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir HEIC — Conversor de HEIC para JPG grátis",
  metaDescription:
    "Converta fotografias HEIC e HEIF do iPhone para JPG, WebP ou AVIF no navegador, com qualidade e tamanho ajustáveis. Zero envios: as fotos não saem do dispositivo.",
  heading: "Compressor e conversor de HEIC",
  intro: (
    <>
      Converta as fotografias HEIC e HEIF do iPhone em ficheiros JPG, WebP ou
      AVIF compatíveis com tudo &mdash; e reduza-as com qualidade e tamanho
      ajustáveis. Tudo é executado no seu navegador, por isso as suas
      fotografias nunca são enviadas.
    </>
  ),
  lastUpdated: "2026-06-28",
  howTo: {
    name: "Como converter e comprimir fotografias HEIC",
    description:
      "Converta imagens HEIC/HEIF do iPhone para JPG, WebP ou AVIF localmente no seu navegador.",
    steps: [
      {
        name: "Adicione as suas fotografias HEIC",
        text: "Arraste e largue os seus ficheiros .heic ou .heif sobre a zona de carregamento, clique para explorar ou cole-os. Pode adicionar um lote inteiro de uma só vez.",
      },
      {
        name: "Escolha um formato de saída",
        text: "Escolha JPG para a máxima compatibilidade, ou WebP/AVIF para os ficheiros mais pequenos. Defina um nível de qualidade: cerca de 80 é ideal para fotografias.",
      },
      {
        name: "Converta no seu dispositivo",
        text: "Cada fotografia é descodificada com uma versão em WebAssembly da libheif e novamente codificada localmente. Verá o tamanho original e o novo de cada ficheiro.",
      },
      {
        name: "Transfira as suas fotografias",
        text: "Transfira as imagens uma a uma, ou obtenha-as todas num ZIP. Ajuste o formato, a qualidade ou o tamanho e processe novamente sempre que quiser.",
      },
    ],
  },
  faqs: [
    {
      q: "As minhas fotografias HEIC são enviadas para um servidor?",
      a: (
        <>
          Não. Os seus ficheiros HEIC são descodificados e novamente
          codificados inteiramente no seu navegador através de WebAssembly:
          nunca saem do seu dispositivo. A maioria dos outros sites de
          &ldquo;conversor de HEIC&rdquo; envia as suas fotografias pessoais
          para os seus servidores; este não tem servidor nenhum para onde as
          enviar, e pode desligar-se da internet depois de a página carregar
          que continuará a funcionar.
        </>
      ),
      text: "Não. Os ficheiros HEIC são descodificados e novamente codificados inteiramente no seu navegador através de WebAssembly e nunca saem do seu dispositivo. A maioria dos outros sites de conversor de HEIC envia as suas fotografias pessoais para um servidor; este não. Pode desligar-se da internet depois de a página carregar que continuará a funcionar.",
    },
    {
      q: "Porque haveria de converter HEIC para JPG?",
      a: (
        <>
          HEIC é o formato de fotografia predefinido da Apple, mas muitos PC com
          Windows, sites, aplicações e dispositivos antigos não conseguem
          abri-lo. Converter para JPG (ou WebP/AVIF) faz com que as suas
          fotografias abram em todo o lado, para que as possa partilhar, enviar
          e editar sem erros de compatibilidade.
        </>
      ),
      text: "HEIC é o formato de fotografia predefinido da Apple mas muitos PC com Windows, sites, aplicações e dispositivos antigos não conseguem abri-lo. Converter para JPG, WebP ou AVIF faz com que as fotografias abram em todo o lado para que as possa partilhar, enviar e editar.",
    },
    {
      q: "Converter vai reduzir a qualidade da minha fotografia?",
      a: (
        <>
          Converter para JPEG, WebP ou AVIF é com perdas, por isso parte do
          detalhe é novamente codificada. Com qualidade 75&ndash;85 a diferença
          é normalmente invisível em tamanhos de visualização padrão. Mantenha a
          qualidade alta para ser fiel ao original, ou baixe-a (e redimensione)
          quando um ficheiro mais pequeno for mais importante.
        </>
      ),
      text: "Converter para JPEG, WebP ou AVIF é com perdas, por isso parte do detalhe é novamente codificada. Com qualidade 75-85 a diferença é normalmente invisível. Mantenha a qualidade alta para ser fiel ao original, ou baixe-a e redimensione quando um ficheiro mais pequeno for mais importante.",
    },
    {
      q: "Porque é que o JPG convertido por vezes é maior do que o HEIC?",
      a: (
        <>
          HEIC é um formato extremamente eficiente: muitas vezes armazena uma
          fotografia em cerca de metade do tamanho de um JPEG equivalente.
          Assim, uma conversão direta de HEIC&rarr;JPEG pode, ocasionalmente,
          produzir um ficheiro maior. Para reduzir realmente a fotografia,
          escolha WebP ou AVIF (que igualam a eficiência do HEIC), baixe o
          cursor de qualidade ou redimensione a imagem.
        </>
      ),
      text: "HEIC é muito eficiente e muitas vezes armazena uma fotografia em cerca de metade do tamanho de um JPEG equivalente, por isso uma conversão direta de HEIC para JPEG pode produzir um ficheiro maior. Para reduzir a fotografia, escolha WebP ou AVIF, baixe o cursor de qualidade ou redimensione a imagem.",
    },
    {
      q: "Qual é a diferença entre HEIC e HEIF?",
      a: (
        <>
          HEIF (High Efficiency Image File Format) é o contentor; HEIC é a
          variante comum que a Apple utiliza, na qual a imagem do interior é
          codificada com HEVC (H.265). No uso quotidiano os nomes são
          intercambiáveis: esta ferramenta aceita tanto ficheiros .heic como
          .heif.
        </>
      ),
      text: "HEIF (High Efficiency Image File Format) é o contentor e HEIC é a variante comum da Apple na qual a imagem é codificada com HEVC (H.265). Os nomes são usados de forma intercambiável; esta ferramenta aceita tanto ficheiros .heic como .heif.",
    },
    {
      q: "Posso converter várias fotografias HEIC de uma vez?",
      a: (
        <>
          Sim. Largue um lote inteiro &mdash; por exemplo uma pasta de
          fotografias enviadas por AirDrop a partir do seu iPhone &mdash; e são
          convertidas uma a uma; depois pode transferi-las individualmente ou
          todas juntas num ZIP.
        </>
      ),
      text: "Sim. Adicione um lote inteiro de fotografias HEIC e são convertidas uma a uma, depois transferidas individualmente ou todas juntas num ZIP.",
    },
    {
      q: "O conversor de HEIC é gratuito?",
      a: (
        <>
          Completamente grátis: sem registo, sem marcas de água e sem limites de
          número de ficheiros nem de tamanho para além da memória do seu
          dispositivo. O site é mantido com anúncios discretos, e o código é de
          código aberto para que possa verificar exatamente o que faz.
        </>
      ),
      text: "Sim. É completamente grátis, sem registo, marcas de água nem limites de ficheiros para além da memória do seu dispositivo. O site é mantido com anúncios discretos e o código é de código aberto.",
    },
  ],
  content: (
    <>
      <h2 id="why-convert">Porquê converter ficheiros HEIC?</h2>
      <p>
        Desde o iOS 11, os iPhone e iPad guardam as fotografias como{" "}
        <strong>HEIC</strong> por predefinição. É um formato excelente para
        poupar espaço no seu dispositivo, mas tem um grande inconveniente: a{" "}
        <strong>compatibilidade</strong>. Muitos PC com Windows, aplicações web,
        gestores de conteúdos, impressoras de fotografias e telemóveis antigos
        ainda não conseguem abrir um ficheiro .heic, o que provoca o demasiado
        habitual erro de &ldquo;formato não suportado&rdquo; quando tenta
        partilhar ou enviar uma imagem.
      </p>
      <p>
        Converter as suas fotografias HEIC para um formato amplamente suportado
        como o <strong>JPG</strong>, <strong>WebP</strong> ou{" "}
        <strong>AVIF</strong> resolve isso instantaneamente: a imagem abre em
        todo o lado, ao mesmo tempo que mantém o controlo sobre a qualidade e o
        tamanho do ficheiro. E como esta ferramenta é executada inteiramente no
        seu dispositivo, as suas fotografias pessoais nunca são enviadas para o
        servidor de ninguém.
      </p>

      <h2 id="what-is-heic">O que é o HEIC (e o HEIF)?</h2>
      <p>
        HEIC significa <em>High Efficiency Image Container</em>. É a
        implementação da Apple do padrão <strong>HEIF</strong> (High Efficiency
        Image File Format), no qual a imagem real é comprimida com{" "}
        <strong>HEVC (H.265)</strong>, o mesmo codec de vídeo moderno utilizado
        para vídeo eficiente. Essa compressão avançada é a razão pela qual uma
        fotografia HEIC ocupa normalmente cerca de{" "}
        <strong>metade do tamanho</strong> de um JPEG equivalente com a mesma
        qualidade visual, e também por que pode armazenar extras como mapas de
        profundidade, Live Photos e uma gama de cor mais ampla. Pode ler mais
        sobre como os navegadores lidam com os formatos de imagem na{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          referência de formatos de imagem da MDN
        </a>
        . A descodificação aqui é assegurada pela{" "}
        <a
          href="https://github.com/strukturag/libheif"
          target="_blank"
          rel="noopener noreferrer"
        >
          libheif
        </a>
        , a biblioteca de código aberto para HEIF/HEIC, compilada para
        WebAssembly.
      </p>

      <h2 id="compress-vs-convert">
        Comprimir versus converter: o que esperar
      </h2>
      <p>
        Aqui fica um ponto honesto que a maioria dos conversores não lhe dirá:
        como o HEIC já é tão eficiente, uma conversão simples de
        HEIC&nbsp;&rarr;&nbsp;JPEG{" "}
        <strong>nem sempre tornará o ficheiro mais pequeno</strong> &mdash; e
        por vezes pode torná-lo um pouco maior. Não é um defeito; é o custo de
        passar para a compressão mais antiga e mais compatível do JPEG.
      </p>
      <p>
        Se o seu objetivo é realmente obter ficheiros mais pequenos, tem três
        alavancas, e pode combiná-las:
      </p>
      <ul>
        <li>
          <strong>Escolha WebP ou AVIF em vez de JPEG.</strong> Estes formatos
          modernos rivalizam com a eficiência do HEIC, por isso mantém o tamanho
          reduzido <em>e</em> ganha ampla compatibilidade. O AVIF, tal como o
          HEIC, baseia-se em tecnologia de codecs moderna e normalmente produz o
          resultado mais pequeno.
        </li>
        <li>
          <strong>Baixe o cursor de qualidade.</strong> Passar de 90 para
          70&ndash;75 reduz o ficheiro substancialmente com pouca alteração
          visível.
        </li>
        <li>
          <strong>Redimensione a imagem.</strong> Uma fotografia de telemóvel de
          4032&times;3024 é muito maior do que qualquer ecrã precisa. Reduzi-la é
          a maior poupança individual para partilhar ou para a web.
        </li>
      </ul>

      <h2 id="choosing-format">JPEG, WebP ou AVIF: qual escolher</h2>
      <p>
        <strong>JPEG</strong> é a opção segura por predefinição: todos os
        dispositivos, aplicações e sites do mundo conseguem abri-lo, o que o
        torna perfeito para enviar fotografias por e-mail, carregá-las num site
        que rejeita HEIC ou enviá-las a alguém com Windows.{" "}
        <Link href="/pt/compress-jpeg">Comprima JPEG</Link> ainda mais quando
        quiser.
      </p>
      <p>
        <strong>WebP</strong> goza de amplo suporte nos navegadores e aplicações
        modernos e é aproximadamente 25&ndash;35% mais pequeno do que o JPEG:
        uma excelente escolha para a web. <strong>AVIF</strong> é o mais
        eficiente em espaço dos três e o parente mais próximo do HEIC, ideal
        quando o tamanho reduzido é mais importante e o seu destino o suporta.
        Não tem a certeza? Converta uma amostra de ambas as formas com o nosso{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link> e compare,
        ou leia{" "}
        <Link href="/pt/blog/jpeg-vs-png-vs-webp-vs-avif">
          a nossa comparação de formatos
        </Link>
        .
      </p>

      <h2 id="privacy">Privado por conceção, e de código aberto</h2>
      <p>
        O seu rolo de câmara é pessoal. Carregá-lo para um site de conversão
        qualquer significa entregar a desconhecidos cópias das suas fotografias,
        incluindo tudo o que apareça em segundo plano. A FileShrinking adota uma
        abordagem diferente: os seus ficheiros HEIC são descodificados e
        novamente codificados <strong>localmente no seu navegador</strong> e
        nunca são transmitidos para parte alguma. Também não tem de acreditar na
        nossa palavra: todo o projeto é{" "}
        <Link href="/pt/about">de código aberto</Link>, por isso a promessa de
        não enviar nada é algo que qualquer pessoa pode verificar no código.
        Saiba mais sobre como isto funciona na{" "}
        <Link href="/pt/blog/how-client-side-file-compression-works">
          nossa explicação sobre a compressão do lado do cliente
        </Link>
        .
      </p>

      <h2 id="tips">Dicas para obter os melhores resultados</h2>
      <ul>
        <li>
          <strong>Vai enviar a alguém ou carregar nalgum lado?</strong> Escolha
          JPG: tem garantia de que abre.
        </li>
        <li>
          <strong>Está a otimizar para a web ou para armazenamento?</strong>{" "}
          Escolha AVIF ou WebP para os ficheiros mais pequenos com a mesma
          qualidade.
        </li>
        <li>
          <strong>Redimensione antes de converter.</strong> Se a fotografia for
          vista num telemóvel ou num documento, reduzi-la poupa muito mais do
          que a qualidade por si só.
        </li>
        <li>
          <strong>Processe em lote todo um AirDrop.</strong> Largue todas as
          fotografias de uma vez e transfira-as juntas num ZIP.
        </li>
      </ul>
    </>
  ),
};
