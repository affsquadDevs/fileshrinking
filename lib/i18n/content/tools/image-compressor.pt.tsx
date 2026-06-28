import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressor de imagens — Grátis e privado",
  metaDescription:
    "Comprima imagens JPEG, PNG, WebP, AVIF e GIF no seu navegador. 100% privado, sem envios nem registo: as suas fotos nunca saem do seu dispositivo.",
  heading: "Compressor de imagens",
  intro: (
    <>
      Comprima e converta imagens JPEG, PNG, WebP, AVIF e GIF diretamente no seu
      navegador. Adicione as suas fotos, escolha um formato e uma qualidade e
      descarregue ficheiros mais pequenos em segundos: tudo é executado no seu
      dispositivo, por isso nunca se envia nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir uma imagem",
    description:
      "Comprima ou converta qualquer formato de imagem comum localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione as suas imagens",
        text: "Arraste e largue ficheiros JPEG, PNG, WebP, AVIF ou GIF sobre a zona de carregamento, clique para explorar ou cole a partir da área de transferência. Misture formatos à vontade: cada ficheiro é processado separadamente.",
      },
      {
        name: "Escolha um formato de saída",
        text: "Deixe em Mesmo formato para recomprimir sem alterar o tipo, ou escolha JPEG, PNG, WebP ou AVIF para converter. WebP e AVIF geram os ficheiros mais pequenos para fotos.",
      },
      {
        name: "Defina a qualidade (e redimensione se for necessário)",
        text: "Use o controlo de qualidade — cerca de 75 serve para a maioria das fotos — ou o nível sem perdas para PNG. Se quiser, redimensione por percentagem ou por píxeis exatos para poupar ainda mais.",
      },
      {
        name: "Descarregue os seus resultados",
        text: "Guarde as imagens uma a uma ou descarregue tudo num ZIP. Cada ficheiro mostra o tamanho original, o novo tamanho e a percentagem poupada, para que possa reajustar e tentar de novo.",
      },
    ],
  },
  faqs: [
    {
      q: "As minhas imagens são enviadas para um servidor?",
      a: (
        <>
          Não. Cada imagem que adiciona é descodificada e novamente codificada
          inteiramente no seu próprio navegador através de WebAssembly. Nada é
          enviado para parte alguma: não há qualquer passo de envio nem nenhum
          servidor que veja os seus ficheiros. Pode até desligar a sua ligação à
          internet depois de a página carregar e continuar a comprimir.
        </>
      ),
      text: "Não. Cada imagem é descodificada e novamente codificada inteiramente no seu próprio navegador através de WebAssembly. Nada é enviado para parte alguma; não há qualquer passo de envio nem nenhum servidor que veja os seus ficheiros. Pode desligar a sua ligação à internet depois de a página carregar e continuar a comprimir.",
    },
    {
      q: "O compressor de imagens é gratuito?",
      a: (
        <>
          Sim: é totalmente gratuito, sem conta, sem marcas de água e sem
          limites diários. Pode processar tantas imagens quantas a memória do seu
          dispositivo permitir. O site mantém-se a funcionar graças a anúncios
          discretos apresentados junto ao artigo, nunca dentro da própria
          ferramenta.
        </>
      ),
      text: "Sim. É totalmente gratuito, sem conta, sem marcas de água e sem limites diários. Pode processar tantas imagens quantas a memória do seu dispositivo permitir. O site mantém-se com anúncios discretos apresentados junto ao artigo, não dentro da ferramenta.",
    },
    {
      q: "Comprimir vai reduzir a qualidade das minhas imagens?",
      a: (
        <>
          Depende do formato e das definições. Os formatos com perdas como JPEG,
          WebP e AVIF descartam detalhes finos para reduzir o ficheiro, mas com
          uma qualidade em torno de 75 a alteração costuma ser impercetível. A
          otimização sem perdas de PNG não elimina qualquer detalhe: apenas
          reescreve o ficheiro de forma mais eficiente. Use o controlo de
          qualidade para equilibrar tamanho e fidelidade em cada trabalho.
        </>
      ),
      text: "Depende do formato e das definições. Os formatos com perdas como JPEG, WebP e AVIF descartam detalhes finos para reduzir o ficheiro, mas com uma qualidade em torno de 75 a alteração costuma ser impercetível. A otimização sem perdas de PNG não elimina qualquer detalhe; apenas reescreve o ficheiro de forma mais eficiente. Use o controlo de qualidade para equilibrar tamanho e fidelidade.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: (
        <>
          Não há um limite fixo: está condicionado apenas pela memória disponível
          do seu dispositivo. As fotos normais de alguns megabytes e as imagens
          grandes de 20–50 MP funcionam com folga tanto em telemóveis como em
          portáteis. Os lotes são processados uma imagem de cada vez, o que
          mantém baixo o uso de memória mesmo com muitos ficheiros grandes.
        </>
      ),
      text: "Não há um limite fixo; está condicionado apenas pela memória disponível do seu dispositivo. As fotos normais de alguns megabytes e as imagens grandes de 20-50 MP funcionam com folga em telemóveis e portáteis. Os lotes são processados uma imagem de cada vez para manter baixo o uso de memória.",
    },
    {
      q: "Que formatos de imagem é que esta ferramenta suporta?",
      a: (
        <>
          Pode largar ficheiros JPEG, PNG, WebP, AVIF e GIF, e exportar para
          JPEG, PNG, WebP ou AVIF. Deixe a saída em &laquo;Mesmo formato&raquo;
          para recomprimir sem alterar o tipo, ou escolha outro formato para
          converter. Para um fluxo de trabalho específico de cada formato, vá ao
          compressor de{" "}
          <Link href="/pt/compress-jpeg">JPEG</Link>,{" "}
          <Link href="/pt/compress-png">PNG</Link>,{" "}
          <Link href="/pt/compress-webp">WebP</Link>,{" "}
          <Link href="/pt/compress-avif">AVIF</Link> ou{" "}
          <Link href="/pt/compress-gif">GIF</Link>.
        </>
      ),
      text: "Pode largar ficheiros JPEG, PNG, WebP, AVIF e GIF, e exportar para JPEG, PNG, WebP ou AVIF. Deixe a saída em Mesmo formato para recomprimir sem alterar o tipo, ou escolha outro formato para converter. Existem ferramentas específicas para JPEG, PNG, WebP, AVIF e GIF.",
    },
    {
      q: "Qual é a diferença entre comprimir e converter uma imagem?",
      a: (
        <>
          Comprimir mantém o mesmo formato e torna o ficheiro mais pequeno;
          converter altera o próprio formato, por exemplo transformando uma
          pesada captura de ecrã em PNG num WebP muito mais pequeno. Este centro
          faz ambas as coisas: defina o formato de saída para converter, ou
          deixe-o igual para apenas comprimir. Se o seu objetivo principal for a
          conversão, o{" "}
          <Link href="/pt/image-converter">conversor de imagens</Link>{" "}
          específico é uma opção mais focada, e o{" "}
          <Link href="/pt/image-resizer">redimensionador de imagens</Link>{" "}
          trata da alteração das dimensões.
        </>
      ),
      text: "Comprimir mantém o mesmo formato e torna o ficheiro mais pequeno; converter altera o próprio formato, como transformar um PNG pesado num WebP mais pequeno. Este centro faz ambas as coisas. Para a conversão, o conversor de imagens específico é mais focado, e o redimensionador de imagens trata da alteração das dimensões.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê comprimir e converter imagens?</h2>
      <p>
        As imagens são a parte mais pesada da maioria das páginas web, dos
        e-mails e das pastas partilhadas. A câmara de um telemóvel moderno pode
        gerar fotos de 4–12 MB, e as capturas de ecrã guardadas como PNG também
        podem ser surpreendentemente grandes. As imagens demasiado grandes
        tornam os sites mais lentos, ultrapassam os limites de tamanho dos
        anexos de e-mail, enchem o armazenamento na nuvem e consomem dados
        móveis. Comprimi-las preserva o detalhe que realmente lhe importa
        enquanto reduz drasticamente o tamanho do ficheiro, muitas vezes entre
        60 e 90% consoante o formato que escolher.
      </p>
      <p>
        Esta página é o centro para todos os formatos de imagem. Como é executada{" "}
        <strong>inteiramente no seu dispositivo</strong>, é também a forma
        privada de o fazer. Os compressores online convencionais enviam as suas
        fotos para um servidor remoto, processam-nas lá e devolvem-nas. Aqui,
        cada imagem é lida para a memória, novamente codificada com um codec
        WebAssembly e entregue diretamente a si. As suas fotos nunca viajam
        através de uma rede, algo que importa para fotos pessoais, digitalizações
        de documentos de identidade, contratos e qualquer outra coisa que
        prefira não entregar ao servidor de um desconhecido.
      </p>

      <h2 id="lossy">Com perdas versus sem perdas: o compromisso fundamental</h2>
      <p>
        Todos os formatos de imagem se enquadram num de dois grupos. A compressão{" "}
        <strong>com perdas</strong> —usada pelo JPEG e pelos modos predefinidos
        de WebP e AVIF— descarta de forma permanente o detalhe que é menos
        provável que o olho humano sinta falta, e é assim que consegue poupanças
        tão grandes. O controlo de qualidade regula o quão agressiva é: os
        valores mais altos conservam mais detalhe e produzem ficheiros maiores,
        enquanto os valores mais baixos poupam mais espaço mas podem introduzir
        &laquo;artefactos&raquo; visíveis, como blocos ou halos à volta dos
        contornos. A compressão <strong>sem perdas</strong> —usada pelo PNG e
        GIF, e num modo opcional de WebP— reescreve o ficheiro de forma mais
        eficiente sem descartar um único píxel, de modo que a imagem é idêntica
        bit a bit quando descodificada. O inconveniente é que a poupança sem
        perdas é muito mais modesta.
      </p>
      <p>
        A regra prática: use formatos com perdas para fotografias e imagens
        realistas, onde uma qualidade de 70–80 costuma ser indistinguível do
        original, e use formatos sem perdas para gráficos, logótipos, capturas de
        ecrã e tudo o que tenha contornos nítidos ou texto, onde os artefactos da
        compressão com perdas são evidentes. Lembre-se de que a compressão com
        perdas é <strong>cumulativa</strong>: trabalhe sempre a partir da sua
        cópia mestra de qualidade máxima em vez de voltar a guardar uma cópia já
        comprimida.
      </p>

      <h2 id="formats">Escolher o formato adequado</h2>
      <p>
        Escolher o formato importa tanto como a definição de qualidade. Como guia
        rápido: <strong>JPEG</strong> é a opção universal para fotos sem
        transparência; <strong>PNG</strong> é o melhor para gráficos planos,
        capturas de ecrã e tudo o que precise de um fundo transparente;{" "}
        <strong>WebP</strong> costuma gerar ficheiros entre 25 e 35% mais
        pequenos do que o JPEG, suportando ao mesmo tempo transparência e
        animação; <strong>AVIF</strong> é o mais recente e normalmente o mais
        pequeno de todos para fotografias, ao custo de uma codificação mais
        lenta; e <strong>GIF</strong> é um velho formato de animação que é quase
        sempre batido pela conversão para WebP ou vídeo. A análise de referência
        sobre como cada formato se comporta nos navegadores está no{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de tipos e formatos de ficheiro de imagem da MDN
        </a>
        .
      </p>
      <p>
        Se já sabe com que formato está a trabalhar, as ferramentas específicas
        oferecem-lhe os controlos e as explicações mais relevantes: o{" "}
        <Link href="/pt/compress-jpeg">compressor de JPEG</Link> para fotos, o{" "}
        <Link href="/pt/compress-png">compressor de PNG</Link> para gráficos sem
        perdas, as ferramentas de{" "}
        <Link href="/pt/compress-webp">WebP</Link> e{" "}
        <Link href="/pt/compress-avif">AVIF</Link> para os ficheiros modernos
        mais pequenos, e o{" "}
        <Link href="/pt/compress-gif">compressor de GIF</Link> para animações.
        Para mudar um lote de ficheiros de um formato para outro, use o{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link>; para
        alterar as dimensões em píxeis, recorra ao{" "}
        <Link href="/pt/image-resizer">redimensionador de imagens</Link>.
      </p>

      <h2 id="tips">Conselhos práticos para obter os melhores resultados</h2>
      <ul>
        <li>
          <strong>Redimensione antes de comprimir.</strong> Se uma imagem só vai
          ser mostrada a 1200 px de largura, enviar um original de 6000 px
          desperdiça a maior parte do ficheiro. Reduzir a escala costuma poupar
          mais do que o controlo de qualidade alguma vez poderia.
        </li>
        <li>
          <strong>Ajuste o formato ao conteúdo.</strong> As fotos vão em JPEG,
          WebP ou AVIF; os logótipos, os ícones e as capturas de ecrã mantêm-se
          mais nítidos e mais pequenos como PNG. Converter uma foto em PNG para
          WebP pode reduzi-la numa ordem de grandeza.
        </li>
        <li>
          <strong>Conserve uma cópia mestra.</strong> Como a recodificação com
          perdas se acumula, comprima sempre a partir do seu original e não a
          partir de um ficheiro que exportou antes.
        </li>
        <li>
          <strong>Compare antes de decidir.</strong> Experimente primeiro
          &laquo;Equilibrado&raquo;, depois volte a executar com &laquo;Mais
          pequeno&raquo; e verifique se nota a diferença no tamanho com que vai
          realmente mostrar a imagem.
        </li>
        <li>
          <strong>Agrupe imagens parecidas.</strong> As fotos da mesma câmara ou
          as capturas do mesmo ecrã costumam ficar muito bem com uma mesma
          definição partilhada, por isso pode processá-las numa só passagem.
        </li>
      </ul>
    </>
  ),
};
