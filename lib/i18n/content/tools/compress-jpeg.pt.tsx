import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir JPEG — Compressor de JPG grátis",
  metaDescription:
    "Comprima imagens JPG e JPEG no seu navegador com MozJPEG. Qualidade ajustável, processamento em lote e zero envios: as suas fotos não saem do dispositivo.",
  heading: "Compressor de JPEG",
  intro: (
    <>
      Comprima imagens JPG e JPEG diretamente no seu navegador com o MozJPEG, o
      mesmo codificador em que confiam fotógrafos e programadores web. Escolha um
      nível de qualidade, largue as suas fotos e descarregue ficheiros mais
      pequenos em segundos: nada é enviado.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir um JPEG",
    description:
      "Comprima imagens JPG/JPEG localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione as suas imagens",
        text: "Arraste e largue os seus ficheiros JPG na zona de carregamento, clique para procurar ou cole a partir da área de transferência. Pode adicionar várias de uma vez.",
      },
      {
        name: "Escolha um nível de qualidade",
        text: "Use o controlo deslizante de qualidade ou uma predefinição. Cerca de 75 é um excelente equilíbrio entre tamanho e qualidade visual para a maioria das fotos.",
      },
      {
        name: "Deixe a compressão acontecer no seu dispositivo",
        text: "Cada imagem é comprimida localmente com o MozJPEG. Verá o tamanho original, o tamanho novo e a percentagem poupada de cada ficheiro.",
      },
      {
        name: "Descarregue os seus ficheiros",
        text: "Descarregue as imagens uma a uma ou todas de uma vez num ZIP. Ajuste a qualidade e volte a comprimir quando quiser.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros JPEG são enviados para um servidor?",
      a: (
        <>
          Não. Cada imagem é comprimida localmente no seu navegador com
          WebAssembly. Os seus ficheiros nunca saem do dispositivo e não há
          qualquer servidor para onde os enviar: pode até desligar-se da
          internet depois de a página carregar e continua a funcionar.
        </>
      ),
      text: "Não. Cada imagem é comprimida localmente no seu navegador com WebAssembly. Os seus ficheiros nunca saem do dispositivo e não há qualquer servidor para onde os enviar. Pode desligar-se da internet depois de a página carregar e continua a funcionar.",
    },
    {
      q: "O compressor de JPEG é mesmo grátis?",
      a: (
        <>
          Sim: é totalmente grátis, sem registo, sem marcas de água e sem
          limites de número de ficheiros ou de tamanho para além do que a
          memória do seu dispositivo conseguir gerir. O site é mantido com
          anúncios pouco intrusivos.
        </>
      ),
      text: "Sim. É totalmente grátis, sem registo, sem marcas de água e sem limites de número de ficheiros ou de tamanho para além do que a memória do seu dispositivo conseguir gerir. O site é mantido com anúncios pouco intrusivos.",
    },
    {
      q: "Comprimir reduz a qualidade das minhas fotos?",
      a: (
        <>
          A compressão JPEG é com perda, pelo que alguns dados são descartados.
          Com uma qualidade de 70-80, a diferença costuma ser invisível, ao
          passo que o ficheiro fica muito mais pequeno. Baixe o controlo de
          qualidade para obter ficheiros mais pequenos ou suba-o para se manter
          mais perto do original.
        </>
      ),
      text: "JPEG é um formato com perda, pelo que alguns dados são descartados. Com uma qualidade de 70-80, a diferença costuma ser invisível, ao passo que o ficheiro fica muito mais pequeno. Baixe o controlo de qualidade para obter ficheiros mais pequenos ou suba-o para se manter mais perto do original.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: (
        <>
          Não há um limite rígido: depende da memória disponível do seu
          dispositivo. Telemóveis e portáteis gerem sem problemas fotos comuns
          (alguns megabytes) e até imagens grandes de 20-50 MP. Os lotes muito
          grandes são processados um ficheiro de cada vez para manter o uso de
          memória baixo.
        </>
      ),
      text: "Não há um limite rígido; depende da memória disponível do seu dispositivo. As fotos comuns de alguns megabytes e até as imagens grandes de 20-50 MP funcionam bem. Os lotes grandes são processados um ficheiro de cada vez para manter o uso de memória baixo.",
    },
    {
      q: "Posso comprimir muitos JPEG ao mesmo tempo?",
      a: (
        <>
          Sim. Largue tantos ficheiros quantos quiser e eles são colocados em
          fila e comprimidos de forma sequencial; depois pode descarregá-los
          individualmente ou todos juntos num ZIP.
        </>
      ),
      text: "Sim. Adicione tantos ficheiros quantos quiser; são colocados em fila e comprimidos um a um, e depois descarregados individualmente ou juntos num ZIP.",
    },
    {
      q: "Mantém o meu original se a compressão tornar o ficheiro maior?",
      a: (
        <>
          Sim. Se um JPEG recodificado ficar maior do que o seu original (algo
          comum com imagens já otimizadas), a ferramenta mantém o seu ficheiro
          original e avisa-o de que já estava bem otimizado.
        </>
      ),
      text: "Sim. Se um JPEG recodificado ficar maior do que o original, a ferramenta mantém o seu ficheiro original e avisa de que já estava bem otimizado.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê comprimir imagens JPEG?</h2>
      <p>
        JPEG (também escrito JPG) é o formato mais comum para as fotografias na
        web, mas as imagens de câmaras e telemóveis costumam ser muito maiores
        do que o necessário, frequentemente com vários megabytes cada. As
        imagens grandes tornam os sites mais lentos, enchem os anexos de
        e-mail, consomem o armazenamento na nuvem e desperdiçam dados móveis.
        Comprimi-las mantém a qualidade visual que lhe interessa enquanto reduz
        drasticamente o tamanho do ficheiro, muitas vezes entre 60 e 80 %.
      </p>
      <p>
        Como esta ferramenta funciona inteiramente no seu dispositivo, é também
        a forma mais privada de o fazer. Os compressores online tradicionais
        enviam as suas fotos para um servidor remoto, processam-nas lá e
        devolvem-nas. Aqui, as suas imagens são lidas para a memória,
        comprimidas com uma versão em WebAssembly do MozJPEG e devolvidas
        diretamente: nunca passam por uma rede.
      </p>

      <h2 id="lossy">Compressão com perda e qualidade: o que esperar</h2>
      <p>
        JPEG é um formato <strong>com perda</strong>: para tornar os ficheiros
        mais pequenos, descarta de forma permanente o detalhe da imagem que o
        olho humano tem menos probabilidade de notar. O controlo de qualidade
        determina o quão agressivo é esse processo. Os valores mais altos
        preservam mais detalhe e produzem ficheiros maiores; os valores mais
        baixos poupam mais espaço, mas podem introduzir
        &ldquo;artefactos&rdquo; visíveis, como blocos ou halos em torno dos
        contornos nítidos.
      </p>
      <p>
        Para a maioria das fotografias, uma qualidade de{" "}
        <strong>70-80</strong> é o ponto ideal: o resultado é visualmente
        indistinguível do original a tamanhos de visualização normais e, ainda
        assim, ocupa uma fração do tamanho. Baixe para 50-60 quando o tamanho
        reduzido importar mais do que a fidelidade perfeita (por exemplo, em
        miniaturas) e mantenha-se em 85-90 para imagens com gradientes finos ou
        texto, onde os artefactos são mais evidentes. A compressão é{" "}
        <strong>cumulativa</strong>, por isso volte sempre a comprimir a partir
        do seu original de máxima qualidade e não a partir de uma cópia já
        comprimida.
      </p>

      <h2 id="format">O que é um JPEG e quando deve usá-lo?</h2>
      <p>
        JPEG foi normalizado pelo Joint Photographic Experts Group e utiliza a
        transformada de cosseno discreta para comprimir de forma eficiente
        imagens de tom contínuo. Destaca-se nas fotografias e na imagética
        realista com transições de cor suaves, razão pela qual quase todas as
        câmaras guardam JPEG por predefinição. Pode consultar os detalhes
        técnicos na{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          referência de formatos de imagem da MDN
        </a>
        .
      </p>
      <p>
        No entanto, o JPEG nem sempre é a opção adequada. Não suporta
        transparência e gere mal os gráficos planos, os logótipos, as capturas
        de ecrã e o texto: estes comprimem-se melhor e ficam mais nítidos como{" "}
        <Link href="/pt/compress-png">PNG</Link>. E para conseguir as fotos mais
        pequenas possíveis com compatibilidade com os navegadores modernos, os
        formatos mais recentes ganham: um ficheiro{" "}
        <Link href="/pt/compress-webp">WebP</Link> costuma ser entre 25 e 35 %
        mais pequeno do que um JPEG equivalente, e{" "}
        <Link href="/pt/compress-avif">AVIF</Link> pode ser ainda mais pequeno.
        Se está a otimizar para a web, experimente converter com o nosso{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link> e compare.
      </p>

      <h2 id="tips">Dicas para obter os melhores resultados</h2>
      <ul>
        <li>
          <strong>Comece a partir do original.</strong> Voltar a guardar um JPEG
          repetidamente degrada-o. Mantenha uma cópia-mãe e comprima a partir
          dela.
        </li>
        <li>
          <strong>Redimensione antes de comprimir.</strong> Se uma imagem vai
          ser apresentada com 1200 px de largura, não é preciso entregar um
          ficheiro de 6000 px. Use a opção de redimensionamento integrada para
          uma poupança muito maior do que a da qualidade por si só.
        </li>
        <li>
          <strong>Use as predefinições para comparar.</strong> Experimente
          primeiro &ldquo;Equilibrado&rdquo;, depois volte a comprimir com
          &ldquo;Mais pequeno&rdquo; e verifique se nota a diferença ao seu
          tamanho de visualização.
        </li>
        <li>
          <strong>Agrupe imagens semelhantes em lote.</strong> As fotos da mesma
          câmara costumam ficar ótimas com o mesmo ajuste de qualidade, por isso
          pode processá-las de uma só vez.
        </li>
      </ul>
    </>
  ),
};
