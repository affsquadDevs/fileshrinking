import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir AVIF — Conversor AVIF gratuito",
  metaDescription:
    "Converta e comprima imagens para AVIF no seu navegador. Privado, sem envio nem registo: os ficheiros nunca saem do seu dispositivo. Ficheiros minúsculos.",
  heading: "Compressor e conversor de AVIF",
  intro: (
    <>
      Transforme imagens JPEG, PNG, WebP, GIF ou AVIF existentes em ficheiros
      AVIF minúsculos e de alta qualidade diretamente no seu navegador. O AVIF é
      o formato de imagem moderno mais compacto: escolha um nível de qualidade,
      largue as suas fotografias e descarregue ficheiros leves como uma pluma
      sem que nada seja alguma vez enviado.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como converter e comprimir AVIF",
    description:
      "Crie ou recomprima imagens AVIF localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione as suas imagens",
        text: "Arraste e largue ficheiros JPEG, PNG, WebP, GIF ou AVIF na zona de carregamento, clique para procurar ou cole a partir da área de transferência. Pode adicionar várias de uma só vez.",
      },
      {
        name: "Escolha um nível de qualidade",
        text: "A escala de qualidade do AVIF é mais baixa do que a do JPEG: um valor predefinido em torno de 55 já fica ótimo. Aumente-o para resultados quase sem perdas ou reduza-o para os ficheiros mais pequenos possíveis.",
      },
      {
        name: "Deixe o codificador AV1 trabalhar no seu dispositivo",
        text: "Cada imagem é codificada localmente para AVIF. O AV1 é intensivo, por isso as fotografias grandes podem demorar alguns segundos: é o esperado e é o que torna os ficheiros tão pequenos.",
      },
      {
        name: "Descarregue os seus ficheiros AVIF",
        text: "Guarde as imagens uma a uma ou descarregue tudo num ZIP. Ajuste a qualidade e volte a codificar sempre que quiser para encontrar o seu tamanho ideal.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros AVIF são enviados para um servidor?",
      a: "Não. A codificação acontece inteiramente no seu dispositivo através de um codificador AV1 em WebAssembly. As suas imagens são lidas para a memória, convertidas para AVIF localmente e devolvidas a si: nunca nada é enviado, por isso pode até ficar offline depois de a página carregar.",
      text: "Não. A codificação acontece inteiramente no seu dispositivo através de um codificador AV1 em WebAssembly. As suas imagens são lidas para a memória, convertidas para AVIF localmente e devolvidas a si. Nunca nada é enviado, por isso pode ficar offline depois de a página carregar.",
    },
    {
      q: "O compressor de AVIF é mesmo gratuito?",
      a: "Sim: é totalmente gratuito, sem registo, sem marcas de água e sem limites de quantidade ou de tamanho de ficheiros para além da memória do seu dispositivo. O site é financiado por anúncios discretos.",
      text: "Sim. É totalmente gratuito, sem registo, sem marcas de água e sem limites de quantidade ou de tamanho de ficheiros para além da memória do seu dispositivo. O site é financiado por anúncios discretos.",
    },
    {
      q: "Como é que o AVIF afeta a qualidade da imagem?",
      a: (
        <>
          A compressão AVIF tem perdas, mas o seu codificador baseado em AV1
          preserva o detalhe muito melhor do que os formatos antigos com o mesmo
          tamanho de ficheiro. Tenha em conta que a escala de qualidade lê-se de
          forma diferente: um valor em torno de <strong>50–60</strong> em AVIF
          costuma ficar excelente, ao passo que o mesmo número em JPEG ficaria
          mau. Aumente o cursor para uma fidelidade quase perfeita ou reduza-o
          para os ficheiros mais pequenos possíveis.
        </>
      ),
      text: "A compressão AVIF tem perdas, mas o seu codificador baseado em AV1 preserva o detalhe muito melhor do que os formatos antigos com o mesmo tamanho de ficheiro. A escala de qualidade lê-se de forma diferente: em torno de 50-60 costuma ficar excelente, ao passo que o mesmo número em JPEG ficaria mau. Aumente o cursor para uma fidelidade quase perfeita ou reduza-o para os ficheiros mais pequenos.",
    },
    {
      q: "Porque é que a codificação AVIF é lenta?",
      a: (
        <>
          O AVIF usa o codec AV1, que é muito exigente em termos de cálculo: faz
          muito mais trabalho por píxel do que o JPEG ou o WebP para alcançar os
          seus tamanhos de ficheiro minúsculos. Executar esse codificador no
          navegador com WebAssembly significa que uma fotografia grande pode
          demorar vários segundos, e as imagens muito grandes (digamos, mais de
          20 megapíxeis) podem demorar bastante mais. Isto é normal: a espera
          compra-lhe um ficheiro muito mais pequeno. Redimensionar primeiro
          acelera bastante o processo.
        </>
      ),
      text: "O AVIF usa o codec AV1, que é muito exigente em termos de cálculo e faz muito mais trabalho por píxel do que o JPEG ou o WebP. Executar esse codificador no navegador com WebAssembly significa que uma fotografia grande pode demorar vários segundos, e as imagens muito grandes podem demorar bastante mais. Isto é normal e redimensionar primeiro acelera o processo.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso converter?",
      a: "Não há um limite rígido: depende da memória disponível no seu dispositivo. As fotografias típicas funcionam sem problemas, e também são suportadas imagens grandes de 20–50 MP, embora se codifiquem mais devagar porque o AV1 é intensivo. Os lotes são processados um ficheiro de cada vez para manter o uso de memória baixo.",
      text: "Não há um limite rígido; depende da memória disponível no seu dispositivo. As fotografias típicas funcionam sem problemas e também são suportadas imagens grandes de 20-50 MP, embora se codifiquem mais devagar porque o AV1 é intensivo. Os lotes são processados um ficheiro de cada vez para manter o uso de memória baixo.",
    },
    {
      q: "Que navegadores conseguem abrir ficheiros AVIF?",
      a: (
        <>
          A compatibilidade dos navegadores já é ampla: Chrome, Edge, Firefox,
          Safari e Opera mostram AVIF nas versões modernas, e a maioria dos
          telemóveis também. Para navegadores muito antigos ou algumas
          aplicações de computador que ainda não acompanharam, mantenha uma
          alternativa em <Link href="/pt/compress-jpeg">JPEG</Link> ou{" "}
          <Link href="/pt/compress-webp">WebP</Link>, ou sirva o AVIF dentro de
          um elemento <code>&lt;picture&gt;</code> para que o navegador escolha o
          melhor formato que conseguir ler.
        </>
      ),
      text: "A compatibilidade dos navegadores já é ampla: Chrome, Edge, Firefox, Safari e Opera mostram AVIF nas versões modernas, e a maioria dos telemóveis também. Para navegadores muito antigos ou algumas aplicações de computador, mantenha uma alternativa em JPEG ou WebP, ou sirva o AVIF dentro de um elemento picture para que o navegador escolha o melhor formato que conseguir ler.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê converter imagens para AVIF?</h2>
      <p>
        O AVIF é o formato de imagem de uso geral mais compacto disponível hoje.
        Construído sobre o codec de vídeo livre de royalties <strong>AV1</strong>,
        produz com frequência ficheiros <strong>30–50&nbsp;% mais pequenos do
        que o WebP</strong> e muitas vezes metade do tamanho de um JPEG
        comparável, com a mesma qualidade percebida. Para sites com muitas
        fotografias, isso traduz-se diretamente em carregamentos de página mais
        rápidos, melhores Core Web Vitals, faturas de largura de banda menores e
        uma experiência mais fluida em ligações móveis lentas.
      </p>
      <p>
        Para além do tamanho puro, o AVIF traz funcionalidades genuinamente
        modernas às imagens fixas: <strong>transparência alfa</strong> completa
        como o PNG, gama de cores ampla e suporte de <strong>HDR</strong> (10 e
        12 bits), e modos com e sem perdas num único formato. Como este
        conversor funciona inteiramente no seu dispositivo, também é a forma
        privada de adotar o AVIF: ao contrário dos conversores online típicos,
        as suas fotografias são codificadas com uma compilação de AV1 em
        WebAssembly dentro da própria página e nunca viajam para um servidor.
      </p>

      <h2 id="quality">Qualidade, a escala do AVIF e a velocidade de codificação</h2>
      <p>
        O AVIF é normalmente usado como um formato <strong>com perdas</strong>,
        descartando o detalhe que o olho tem menos probabilidade de sentir
        falta, mas fá-lo de forma muito mais inteligente do que o JPEG, evitando
        os artefactos em blocos que surgem quando se forçam demasiado os
        formatos antigos. Algo que convém saber à partida: os{" "}
        <strong>números de qualidade lêem-se de forma diferente</strong>. Um
        ajuste próximo de <strong>50–60</strong> em AVIF costuma ficar
        excelente, onde o mesmo valor num JPEG ficaria grosseiro. É por isso que
        esta ferramenta usa por predefinição um valor em torno de{" "}
        <strong>55</strong>: é um ponto ótimo, não um compromisso.
      </p>
      <p>
        A contrapartida honesta é a <strong>velocidade</strong>. O AV1 realiza
        uma enorme quantidade de cálculo por píxel para alcançar esses tamanhos
        minúsculos, e executá-lo no navegador através de WebAssembly é mais lento
        do que uma codificação JPEG ou WebP. Uma fotografia típica termina em
        poucos segundos; uma imagem muito grande de mais de 20 megapíxeis pode
        demorar bastante mais, e um lote grande vai somando. Isto é o esperado: é
        o custo da eficiência do AVIF, não uma falha. Redimensionar antes de
        codificar é a maior aceleração possível e ainda reduz mais o resultado.
      </p>

      <h2 id="format">O que é o AVIF e quando deve usá-lo?</h2>
      <p>
        O AVIF (AV1 Image File Format) armazena uma ou mais frames codificadas em
        AV1 dentro de um contentor ISO base media, a mesma família que o MP4.
        Suporta transparência, animação, cor ampla e HDR, o que o torna um sólido
        substituto único do JPEG, do PNG e até do GIF animado em muitos casos.
        Pode ler a análise completa das capacidades e da compatibilidade dos
        navegadores na{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentação da imagem AVIF da MDN
        </a>
        .
      </p>
      <p>
        O AVIF é uma predefinição excelente para fotografias e imagens web ricas
        destinadas a navegadores modernos. É menos ideal quando precisa de
        compatibilidade universal com software antigo, quando os ficheiros têm de
        ser reeditados muitas vezes (cada passagem com perdas perde um pouco) ou
        para gráficos planos simples onde um{" "}
        <Link href="/pt/compress-png">PNG</Link> sem perdas o pode rivalizar. Se
        quiser uma compatibilidade um pouco mais ampla com uma compressão que
        continua a ser ótima, <Link href="/pt/compress-webp">WebP</Link> é o
        meio-termo natural, e o nosso{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link> permite-lhe
        comparar formatos lado a lado. Para reduzir imagens de origem demasiado
        grandes antes de codificar, recorra ao{" "}
        <Link href="/pt/image-resizer">redimensionador de imagens</Link>.
      </p>

      <h2 id="tips">Dicas para os melhores resultados com AVIF</h2>
      <ul>
        <li>
          <strong>Confie nos números mais baixos.</strong> Não defina a
          qualidade do AVIF para 80–90 por hábito do JPEG: comece perto de 55 e
          só a aumente se realmente notar a diferença ao tamanho do seu ecrã.
        </li>
        <li>
          <strong>Redimensione antes de codificar.</strong> Enviar uma imagem de
          6000&nbsp;px que é apresentada a 1200&nbsp;px desperdiça tanto tamanho
          de ficheiro como tempo de codificação. Redimensionar primeiro torna a
          lenta passagem do AV1 muitíssimo mais rápida.
        </li>
        <li>
          <strong>Mantenha uma alternativa em JPEG ou WebP.</strong> Para o
          máximo alcance, sirva o AVIF dentro de um elemento{" "}
          <code>&lt;picture&gt;</code> com uma fonte em{" "}
          <Link href="/pt/compress-jpeg">JPEG</Link> ou{" "}
          <Link href="/pt/compress-webp">WebP</Link> para que os clientes mais
          antigos continuem a receber uma imagem.
        </li>
        <li>
          <strong>Tenha paciência com os lotes grandes.</strong> A poupança do
          AVIF compensa a espera. Coloque os seus ficheiros em fila, deixe o
          codificador processá-los um a um e descarregue tudo num ZIP no final.
        </li>
      </ul>
    </>
  ),
};
