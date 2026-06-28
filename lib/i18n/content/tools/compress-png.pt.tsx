import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir PNG — Otimizador de PNG grátis",
  metaDescription:
    "Otimize imagens PNG no seu navegador com OxiPNG: sem perdas, privado e sem envios. Ou converta para WebP para ficheiros muito mais pequenos.",
  heading: "Compressor de PNG",
  intro: (
    <>
      Otimize imagens PNG diretamente no seu navegador com OxiPNG, um otimizador
      sem perdas que reduz o tamanho dos ficheiros sem tocar num único píxel.
      Mantenha a transparência e os contornos nítidos intactos, ou converta para
      WebP para conseguir uma poupança muito maior. Nada é alguma vez enviado.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir um PNG",
    description:
      "Otimize imagens PNG sem perdas no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione as suas imagens PNG",
        text: "Arraste e largue os seus ficheiros PNG na zona de carregamento, clique para procurar ou cole a partir da área de transferência. Pode adicionar vários de uma vez.",
      },
      {
        name: "Escolha um nível de otimização",
        text: "Escolha Rápido, Equilibrado ou Máximo. Os níveis mais altos procuram com mais afinco uma codificação sem perdas mais pequena, por isso demoram um pouco mais mas espremem um pouco mais.",
      },
      {
        name: "Otimize no seu dispositivo",
        text: "Cada PNG é reescrito localmente com OxiPNG. Verá o tamanho original, o tamanho novo e a percentagem poupada de cada ficheiro, conservando todos os píxeis.",
      },
      {
        name: "Descarregue — ou converta para poupar mais",
        text: "Descarregue os ficheiros um a um ou todos de uma vez num ZIP. Se uma foto em PNG ainda for grande, mude a saída para WebP para obter um resultado muito mais pequeno e adequado para a web.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros PNG são enviados para um servidor?",
      a: (
        <>
          Não. Cada PNG é otimizado localmente no seu navegador usando
          WebAssembly. As suas imagens nunca saem do seu dispositivo e não há
          nenhum servidor para onde as enviar; pode até desligar-se da internet
          depois de a página carregar e continua a funcionar.
        </>
      ),
      text: "Não. Cada PNG é otimizado localmente no seu navegador usando WebAssembly. As suas imagens nunca saem do seu dispositivo e não há nenhum servidor para onde as enviar. Pode desligar-se da internet depois de a página carregar e continua a funcionar.",
    },
    {
      q: "O compressor de PNG é mesmo gratuito?",
      a: (
        <>
          Sim, é completamente gratuito, sem registo, sem marcas de água e sem
          limites de número de ficheiros nem de tamanho para além do que a
          memória do seu dispositivo conseguir aguentar. O site mantém-se com
          anúncios discretos.
        </>
      ),
      text: "Sim. É completamente gratuito, sem registo, sem marcas de água e sem limites de número de ficheiros nem de tamanho para além do que a memória do seu dispositivo conseguir aguentar. O site mantém-se com anúncios discretos.",
    },
    {
      q: "Otimizar o meu PNG reduz a sua qualidade?",
      a: (
        <>
          Não, a otimização de PNG com OxiPNG é{" "}
          <strong>totalmente sem perdas</strong>. Cada píxel é conservado
          exatamente, incluindo a transparência; o OxiPNG limita-se a reescrever
          o ficheiro de forma mais eficiente. A contrapartida é que a poupança
          sem perdas é modesta, normalmente de 5–30 %. Se em vez disso converter
          para WebP, esse passo é com perdas e pode alterar ligeiramente a
          imagem, mas reduz o tamanho muito mais.
        </>
      ),
      text: "Não. A otimização de PNG com OxiPNG é totalmente sem perdas. Cada píxel é conservado exatamente, incluindo a transparência; o OxiPNG limita-se a reescrever o ficheiro de forma mais eficiente. A poupança sem perdas é modesta, normalmente de 5-30 %. Converter para WebP é com perdas mas reduz o tamanho muito mais.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso otimizar?",
      a: (
        <>
          Não há um limite rígido: depende da memória disponível do seu
          dispositivo. Os telemóveis e portáteis lidam comodamente com capturas
          de ecrã e logótipos habituais, e até com PNG grandes de alta
          resolução. Os lotes grandes são processados um ficheiro de cada vez
          para manter baixo o uso de memória.
        </>
      ),
      text: "Não há um limite rígido; depende da memória disponível do seu dispositivo. As capturas de ecrã habituais, os logótipos e até os PNG grandes de alta resolução funcionam bem. Os lotes grandes são processados um ficheiro de cada vez para manter baixo o uso de memória.",
    },
    {
      q: "Porque é que a minha foto em PNG continua enorme depois de a otimizar?",
      a: (
        <>
          O PNG é sem perdas, por isso não consegue descartar detalhe
          fotográfico como fazem o JPEG ou o WebP: uma foto a cores precisa
          simplesmente de muitos dados como PNG. A otimização corta o que
          sobra, mas a verdadeira solução para as fotos é converter para um
          formato com perdas. Experimente as nossas ferramentas{" "}
          <Link href="/pt/compress-webp">WebP</Link> ou{" "}
          <Link href="/pt/compress-avif">AVIF</Link> para que os ficheiros de
          fotos ocupem uma fração do tamanho.
        </>
      ),
      text: "O PNG é sem perdas, por isso não consegue descartar detalhe fotográfico como fazem o JPEG ou o WebP; uma foto a cores precisa de muitos dados como PNG. A otimização corta o que sobra, mas a verdadeira solução para as fotos é converter para um formato com perdas como WebP ou AVIF.",
    },
    {
      q: "Otimizar mantém a transparência do meu PNG?",
      a: (
        <>
          Sim. O canal alfa (transparência) é conservado exatamente, por isso
          os logótipos, ícones e elementos de interface com fundo transparente
          ficam idênticos píxel a píxel, apenas num ficheiro mais pequeno.
          Converter para WebP também mantém a transparência; converter para JPEG
          não, já que o JPEG não tem canal alfa.
        </>
      ),
      text: "Sim. O canal alfa (transparência) é conservado exatamente, por isso os logótipos, ícones e elementos de interface com fundo transparente ficam idênticos píxel a píxel num ficheiro mais pequeno. O WebP também mantém a transparência; o JPEG não, já que não tem canal alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê comprimir ou converter um PNG?</h2>
      <p>
        O PNG está em todo o lado: é o formato predefinido para as capturas de
        ecrã, a opção habitual para logótipos e ícones, e o padrão para qualquer
        gráfico que precise de um fundo transparente. O problema é que os
        ficheiros PNG costumam ser maiores do que o necessário. Os editores de
        imagem e as ferramentas de captura guardam ficheiros generosos e sem
        otimizar, com metadados a mais, definições de compressão pouco ótimas e
        dados de cor de que não precisam. Otimizar elimina esse desperdício para
        que as páginas carreguem mais depressa, os anexos sejam enviados mais
        cedo e o armazenamento renda mais.
      </p>
      <p>
        Como esta ferramenta é executada totalmente no seu dispositivo, é também
        a forma privada de o fazer. Os otimizadores online tradicionais enviam
        as suas imagens para um servidor remoto, processam-nas lá e
        devolvem-nas. Aqui, cada PNG é lido para a memória, reescrito com uma
        compilação em WebAssembly do <strong>OxiPNG</strong> e devolvido
        diretamente: os seus ficheiros nunca passam por uma rede, algo que
        importa quando uma captura de ecrã ou um recurso de design contém
        informação sensível.
      </p>

      <h2 id="lossless">Otimização sem perdas vs. conversão com perdas</h2>
      <p>
        O PNG é um formato <strong>sem perdas</strong>: reproduz cada píxel
        exatamente, sem artefactos de compressão e com suporte completo para a
        transparência. Essa fidelidade é a razão de ser do PNG, mas também
        limita o quão pequeno pode chegar a ser. O OxiPNG mantém a sua imagem{" "}
        <strong>perfeita píxel a píxel</strong>: limita-se a encontrar uma forma
        mais eficiente de armazenar os mesmos dados, reduzindo a paleta de cores
        quando é possível, escolhendo melhores filtros e descartando blocos
        desnecessários. Sejamos honestos com as contas: a poupança sem perdas é{" "}
        <strong>modesta, normalmente de 5–30 %</strong>, e um PNG já otimizado
        pode quase não reduzir.
      </p>
      <p>
        Quando precisa de uma redução drástica, a resposta não é um PNG melhor,
        mas sim um formato diferente. Converter um PNG para{" "}
        <Link href="/pt/compress-webp">WebP</Link> ou{" "}
        <Link href="/pt/compress-avif">AVIF</Link> aplica uma compressão com
        perdas que pode cortar o tamanho do ficheiro entre 60 e 90 % sem deixar
        de admitir a transparência. A contrapartida é que a conversão com perdas
        pode introduzir alterações subtis, por isso é ideal para fotografias e
        imagens complexas, ao passo que o PNG sem perdas continua a ser o melhor
        para gráficos de contornos nítidos onde cada píxel conta. Esta
        ferramenta deixa-o escolher: mantenha PNG para a fidelidade ou mude a
        saída para WebP para o tamanho.
      </p>

      <h2 id="format">O que é um PNG e quando deve usá-lo?</h2>
      <p>
        O PNG (Portable Network Graphics) foi criado como uma alternativa ao GIF
        sem patentes e sem perdas. Usa compressão DEFLATE em conjunto com
        filtros de predição por linhas, e admite um canal alfa completo de 8
        bits para uma transparência suave. Isso torna-o excelente para{" "}
        <strong>
          logótipos, ícones, capturas de ecrã, desenhos lineares, gráficos e
          qualquer imagem com contornos nítidos, cor plana ou texto
        </strong>
        : conteúdo que os formatos com perdas borram ou rodeiam de halos. Pode
        ler os detalhes técnicos na{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          referência de formatos de imagem da MDN
        </a>
        .
      </p>
      <p>
        O PNG é a escolha <strong>errada</strong> para as fotografias. Como
        nunca descarta detalhe, uma foto de tons contínuos transforma-se num PNG
        enorme, muitas vezes várias vezes maior do que a mesma imagem em{" "}
        <Link href="/pt/compress-jpeg">JPEG</Link> ou WebP. Se tem andado a
        guardar fotos como PNG, esse único hábito é provavelmente a sua maior
        fonte de peso desnecessário. Recorra ao PNG quando precisar de contornos
        nítidos ou transparência, e recorra a um formato com perdas quando tiver
        uma foto. Não sabe qual usar? O nosso{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link> permite-lhe
        experimentar ambos e comparar os resultados lado a lado.
      </p>

      <h2 id="tips">Dicas para obter os melhores resultados</h2>
      <ul>
        <li>
          <strong>Adapte o nível de otimização à tarefa.</strong> Use{" "}
          &laquo;Rápido&raquo; para uma passagem rápida sobre muitos ficheiros, e
          &laquo;Máximo&raquo; quando espremer até ao último byte de uma única
          imagem de destaque compensar o tempo extra de processamento.
        </li>
        <li>
          <strong>Redimensione antes de otimizar.</strong> Uma captura de ecrã
          4K mostrada a 800 px de largura é na sua maioria píxeis
          desperdiçados. Use a opção de redimensionamento integrada para obter
          uma poupança muito maior do que a otimização sem perdas alguma vez
          conseguirá por si só.
        </li>
        <li>
          <strong>Converta as fotos, não lute contra elas.</strong> Se um{" "}
          &laquo;PNG&raquo; for na realidade uma foto, mude a saída para{" "}
          <Link href="/pt/compress-webp">WebP</Link> em vez de esperar que a
          otimização sem perdas faça milagres.
        </li>
        <li>
          <strong>Reserve o PNG para a transparência.</strong> Quando precisar
          de um fundo transparente e de ampla compatibilidade, o PNG sem perdas
          é a opção segura, e o OxiPNG mantém esse canal alfa perfeito píxel a
          píxel.
        </li>
      </ul>
    </>
  ),
};
