import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir WebP — Compressor e conversor grátis",
  metaDescription:
    "Comprima WebP ou converta JPEG e PNG para WebP no seu navegador. Com ou sem perdas, privado e local: sem envios, nada sai do seu dispositivo.",
  heading: "Compressor e conversor de WebP",
  intro: (
    <>
      Comprima imagens WebP existentes ou converta JPEG, PNG e outros formatos
      para WebP, tudo no seu navegador. Escolha um nível de qualidade, largue os
      seus ficheiros e descarregue imagens mais pequenas em segundos. Nunca é
      enviado nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir ou converter para WebP",
    description:
      "Comprima WebP ou converta imagens para WebP de forma local no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione as suas imagens",
        text: "Arraste e largue ficheiros WebP, JPEG, PNG, AVIF ou GIF sobre a zona de carregamento, clique para procurar ou cole a partir da área de transferência. Adicione vários ao mesmo tempo, se quiser.",
      },
      {
        name: "Escolha um nível de qualidade",
        text: "Use o cursor de qualidade ou uma predefinição. Um valor à volta de 80 é um excelente equilíbrio entre tamanho reduzido e fidelidade visual para a maioria das fotos e gráficos.",
      },
      {
        name: "Deixe converter no seu dispositivo",
        text: "Cada imagem é codificada para WebP de forma local com WebAssembly. Verá o tamanho original, o novo tamanho WebP e a percentagem poupada para cada ficheiro.",
      },
      {
        name: "Descarregue os seus ficheiros WebP",
        text: "Descarregue as imagens uma a uma ou todas ao mesmo tempo num ZIP. Ajuste a qualidade e volte a executar sempre que quiser para comparar.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros WebP são enviados para um servidor?",
      a: (
        <>
          Não. Tudo acontece localmente no seu navegador com WebAssembly. As suas
          imagens são lidas para a memória, convertidas e devolvidas a si: não há
          nenhum servidor para onde as enviar e pode continuar a trabalhar offline
          depois de a página carregar.
        </>
      ),
      text: "Não. Tudo acontece localmente no seu navegador com WebAssembly. As suas imagens são lidas para a memória, convertidas e devolvidas a si. Não há nenhum servidor para onde as enviar e pode continuar a trabalhar offline depois de a página carregar.",
    },
    {
      q: "O compressor de WebP é mesmo grátis?",
      a: (
        <>
          Sim: é completamente grátis, sem registo, sem marcas de água e sem
          limites no número ou no tamanho dos ficheiros além do que a memória do
          seu dispositivo permitir. Alguns anúncios discretos mantêm o site em
          funcionamento.
        </>
      ),
      text: "Sim. É completamente grátis, sem registo, sem marcas de água e sem limites no número ou no tamanho dos ficheiros além do que a memória do seu dispositivo permitir. Alguns anúncios discretos mantêm o site em funcionamento.",
    },
    {
      q: "Como afeta a qualidade da imagem converter para WebP?",
      a: (
        <>
          O WebP com perdas descarta algum detalhe para reduzir o ficheiro, tal
          como o JPEG, mas é mais eficiente: um WebP costuma ser 25-35&nbsp;% mais
          pequeno do que um JPEG com a mesma qualidade visível. Com qualidade
          75-85, o resultado costuma ser indistinguível do original. Escolha WebP
          sem perdas se precisar de uma cópia perfeita pixel a pixel.
        </>
      ),
      text: "O WebP com perdas descarta algum detalhe para reduzir o ficheiro, tal como o JPEG, mas é mais eficiente: um WebP costuma ser 25-35 % mais pequeno do que um JPEG com a mesma qualidade visível. Com qualidade 75-85, o resultado costuma ser indistinguível do original. Escolha WebP sem perdas se precisar de uma cópia perfeita pixel a pixel.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: (
        <>
          Não há um limite fixo: depende da memória disponível no seu dispositivo.
          As fotos típicas de alguns megabytes e as imagens grandes de 20-50&nbsp;MP
          funcionam sem problemas, e os lotes são processados ficheiro a ficheiro
          para manter baixo o uso de memória.
        </>
      ),
      text: "Não há um limite fixo; depende da memória disponível no seu dispositivo. As fotos típicas de alguns megabytes e as imagens grandes de 20-50 MP funcionam sem problemas, e os lotes são processados ficheiro a ficheiro para manter baixo o uso de memória.",
    },
    {
      q: "Posso converter ficheiros JPEG e PNG para WebP?",
      a: (
        <>
          Sim. Esta ferramenta aceita JPEG, PNG, WebP, AVIF e GIF e produz WebP,
          pelo que funciona tanto como recompressor de ficheiros WebP existentes
          como conversor a partir de outros formatos. A transparência dos ficheiros
          PNG é preservada porque o WebP suporta um canal alfa.
        </>
      ),
      text: "Sim. Esta ferramenta aceita JPEG, PNG, WebP, AVIF e GIF e produz WebP, pelo que funciona tanto como recompressor de ficheiros WebP existentes como conversor a partir de outros formatos. A transparência dos ficheiros PNG é preservada porque o WebP suporta um canal alfa.",
    },
    {
      q: "Devo usar WebP com perdas ou sem perdas?",
      a: (
        <>
          Use WebP com perdas para fotografias e imagens complexas em que o tamanho
          mínimo é o que importa e a perda de detalhe é invisível. Use WebP sem
          perdas para logótipos, ícones, capturas de ecrã e gráficos com cores
          planas ou texto nítido, onde quer uma reprodução exata sem artefactos.
        </>
      ),
      text: "Use WebP com perdas para fotografias e imagens complexas em que o tamanho mínimo é o que importa e a perda de detalhe é invisível. Use WebP sem perdas para logótipos, ícones, capturas de ecrã e gráficos com cores planas ou texto nítido, onde quer uma reprodução exata sem artefactos.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê comprimir e converter para WebP?</h2>
      <p>
        O WebP é um formato de imagem moderno criado especificamente para a web, e
        passar para ele é uma das formas mais simples de tornar um site mais rápido
        sem sacrificar o aspeto das imagens. Um ficheiro WebP costuma ser{" "}
        <strong>25-35&nbsp;% mais pequeno do que um JPEG equivalente</strong> e
        muito mais pequeno do que um PNG comparável, o que se traduz em
        carregamentos de página mais rápidos, faturas de largura de banda mais
        baixas e uma melhor experiência para os visitantes com ligações móveis
        lentas ou limitadas.
      </p>
      <p>
        Esta ferramenta cumpre uma dupla função. Se já tiver imagens WebP,
        recodifica-as com a qualidade que escolher para extrair uma poupança
        adicional. Se tiver JPEG, PNG, AVIF ou GIF, converte-os para WebP para que
        possa modernizar de uma só vez uma pasta inteira de recursos. Como tudo é
        executado no seu dispositivo com um codificador WebAssembly, as suas imagens
        nunca são enviadas: uma alternativa genuinamente privada aos conversores
        baseados em servidor que enviam as suas fotos para uma máquina remota.
      </p>

      <h2 id="lossy-lossless">WebP com e sem perdas, e a qualidade</h2>
      <p>
        O WebP suporta dois modos de compressão distintos, e escolher o adequado é
        importante. O <strong>WebP com perdas</strong> funciona como o JPEG:
        descarta de forma permanente o detalhe que o olho tem menos probabilidade
        de notar, o que produz ficheiros muito pequenos. É a opção certa para
        fotografias e imagens ricas de tom contínuo. O cursor de qualidade controla
        o quão agressivo isto é: os valores mais altos conservam mais detalhe à
        custa de um maior tamanho, os mais baixos poupam mais espaço, mas podem
        introduzir artefactos visíveis.
      </p>
      <p>
        O <strong>WebP sem perdas</strong>, pelo contrário, reproduz cada pixel com
        exatidão, sem qualquer artefacto. É a melhor escolha para logótipos, ícones,
        capturas de ecrã e gráficos ou texto de cor plana, os mesmos casos em que
        normalmente recorreria a{" "}
        <Link href="/pt/compress-png">PNG</Link>, exceto que o WebP costuma produzir
        um ficheiro mais pequeno. Para a maioria das fotografias, uma qualidade com
        perdas de <strong>75-85</strong> é o ponto ideal: visualmente idêntica ao
        original a tamanhos de visualização normais, mas com uma fração do tamanho.
        Tenha em conta que a compressão com perdas é cumulativa, por isso converta
        sempre a partir do seu original de máxima qualidade e não a partir de uma
        cópia já comprimida.
      </p>

      <h2 id="format">O que é o WebP e quando deve usá-lo?</h2>
      <p>
        O WebP foi desenvolvido pela Google e combina uma compressão com perdas
        derivada do codec de vídeo VP8 com um eficiente modo sem perdas. Para além
        do tamanho puro, suporta duas funcionalidades que os formatos antigos
        gerem com dificuldade: a <strong>transparência</strong> (um canal alfa,
        como o PNG) e a <strong>animação</strong> (como o GIF, mas drasticamente
        mais pequena). Essa combinação permite que um único formato substitua o
        JPEG, o PNG e o GIF animado em muitas situações. Pode ler a descrição
        técnica na{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          referência de formatos de imagem da MDN
        </a>{" "}
        e um guia prático para o adotar em{" "}
        <a
          href="https://web.dev/articles/serve-images-webp"
          target="_blank"
          rel="noopener noreferrer"
        >
          web.dev
        </a>
        .
      </p>
      <p>
        O suporte dos navegadores é hoje praticamente universal: todas as versões
        atuais do Chrome, Firefox, Safari e Edge mostram WebP, por isso é seguro
        usá-lo em toda a web moderna. Se precisar de dar suporte a navegadores muito
        antigos, mantenha uma alternativa em JPEG ou PNG. E quando quiser os
        ficheiros absolutamente mais pequenos e puder aceitar uma codificação mais
        lenta, o{" "}
        <Link href="/pt/compress-avif">AVIF</Link> costuma superar o WebP; compare
        os dois com as suas próprias imagens. Para fazer o caminho inverso, ou para
        alternar entre vários formatos ao mesmo tempo, use o nosso{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link>, e se as suas
        fontes forem fotografias talvez também lhe interesse o nosso{" "}
        <Link href="/pt/compress-jpeg">compressor de JPEG</Link> dedicado.
      </p>

      <h2 id="tips">Dicas para obter os melhores resultados com WebP</h2>
      <ul>
        <li>
          <strong>Adeque o modo ao conteúdo.</strong> Use WebP com perdas para
          fotos e WebP sem perdas para logótipos, capturas de ecrã e gráficos
          planos com contornos nítidos.
        </li>
        <li>
          <strong>Redimensione antes de codificar.</strong> Se uma imagem vai ser
          mostrada a 1200&nbsp;px de largura, não há razão para entregar um ficheiro
          de 6000&nbsp;px. A opção de redimensionamento integrada poupa muito mais
          do que a qualidade por si só.
        </li>
        <li>
          <strong>Preserve a transparência de propósito.</strong> Converter um PNG
          transparente para WebP mantém o canal alfa, mas achatá-lo para JPEG não o
          faria. Escolha WebP quando a transparência importar.
        </li>
        <li>
          <strong>Compare com o AVIF.</strong> Para imagens em destaque e fotos
          grandes, volte a passar o mesmo ficheiro pelo AVIF e fique com o que der
          o menor tamanho a uma qualidade que o satisfaça.
        </li>
        <li>
          <strong>Agrupe por tipo de conteúdo.</strong> Junte as suas fotos por um
          lado e os seus gráficos por outro, para que cada conjunto possa usar um
          único ajuste de qualidade ideal numa só passagem.
        </li>
      </ul>
    </>
  ),
};
