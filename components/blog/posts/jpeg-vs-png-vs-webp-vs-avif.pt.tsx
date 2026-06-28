import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "jpeg-vs-png-vs-webp-vs-avif",
  title: "JPEG vs PNG vs WebP vs AVIF: que formato de imagem usar",
  description:
    "Uma comparação definitiva de JPEG, PNG, WebP e AVIF: como cada um comprime, suporte de transparência e animação, compatibilidade e quando usar qual.",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  authorId: "maya",
  tags: ["Formatos", "Imagens"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Escolher um formato de imagem costumava ser simples: JPEG para fotos, PNG
        para todo o resto. Hoje existem quatro candidatos sérios &mdash;{" "}
        <strong>JPEG</strong>, <strong>PNG</strong>, <strong>WebP</strong> e{" "}
        <strong>AVIF</strong> &mdash; e escolher o correto pode reduzir o tamanho
        dos seus ficheiros para metade (ou mais) sem que ninguém repare numa perda
        de qualidade. Este guia explica em pormenor como cada formato comprime, o
        que pode e o que não pode fazer, e como escolher com segurança.
      </p>

      <h2 id="jpeg">JPEG: o cavalo de batalha fotográfico</h2>
      <p>
        O JPEG (ou JPG) tem sido o formato predefinido para as fotografias desde
        os anos 90, e com razão. Usa compressão <strong>com perdas</strong>{" "}
        baseada na transformada discreta de cosseno, que divide a imagem em blocos
        de 8&times;8 e descarta o detalhe de alta frequência que o seu olho mal
        perceciona. Numa foto típica pode oferecer um décimo do tamanho de um
        original sem compressão, sem perda percetível em tamanhos de visualização
        normais.
      </p>
      <p>
        As suas fraquezas são bem conhecidas. O JPEG{" "}
        <strong>não tem transparência</strong> (não há canal alfa), não tem
        animação e só admite 8 bits por canal de cor. Também tem dificuldades com
        os contornos nítidos e a cor plana &mdash; o texto, os logótipos e o
        desenho de linhas adquirem artefactos visíveis de
        &ldquo;ringing&rdquo; em torno dos contornos. Voltar a guardar um JPEG
        repetidamente agrava o dano, porque a perda é permanente e cumulativa.
      </p>
      <ul>
        <li>
          <strong>Compressão:</strong> apenas com perdas.
        </li>
        <li>
          <strong>Transparência / animação:</strong> nenhuma.
        </li>
        <li>
          <strong>Compatibilidade:</strong> universal &mdash; todos os
          navegadores e dispositivos fabricados.
        </li>
        <li>
          <strong>Ideal para:</strong> fotografias e imagens realistas complexas
          onde importa a máxima compatibilidade.
        </li>
      </ul>
      <p>
        Quando um JPEG é a sua única opção, o objetivo é comprimi-lo uma só vez e
        bem. O nosso <Link href="/pt/compress-jpeg">compressor de JPEG</Link>{" "}
        permite-lhe ajustar o nível de qualidade e ver instantaneamente o
        equilíbrio de tamanho &mdash; inteiramente no seu navegador.
      </p>

      <h2 id="png">PNG: gráficos perfeitos ao pixel e transparência</h2>
      <p>
        O PNG é a contraparte sem perdas do JPEG. Comprime com o mesmo algoritmo
        DEFLATE que se encontra nos ficheiros ZIP, pelo que preserva{" "}
        <strong>cada pixel com exatidão</strong> e descomprime numa cópia idêntica
        byte a byte. Isso torna-o ideal para qualquer coisa com contornos nítidos
        ou áreas de cor plana: logótipos, ícones, capturas de ecrã, gráficos e
        elementos de interface.
      </p>
      <p>
        O PNG também acrescentou a funcionalidade que o JPEG nunca teve: um{" "}
        <strong>canal alfa</strong> completo para uma transparência suave, razão
        pela qual se tornou o padrão da web para gráficos colocados sobre fundos
        variados. A desvantagem é o tamanho. Numa fotografia a todas as cores, um
        PNG pode facilmente ser cinco a dez vezes maior do que o JPEG equivalente,
        porque a compressão sem perdas simplesmente não consegue descartar o
        detalhe fotográfico que torna o JPEG tão pequeno.
      </p>
      <ul>
        <li>
          <strong>Compressão:</strong> sem perdas.
        </li>
        <li>
          <strong>Transparência:</strong> sim, canal alfa completo de 8 bits.
          Animação: não (isso é APNG, raramente usado).
        </li>
        <li>
          <strong>Compatibilidade:</strong> universal.
        </li>
        <li>
          <strong>Ideal para:</strong> logótipos, ícones, desenho de linhas,
          capturas de ecrã e qualquer imagem que precise de transparência ou
          contornos perfeitos ao pixel.
        </li>
      </ul>
      <p>
        Os PNG costumam arrastar metadados redundantes e uma codificação pouco
        ótima. Uma passagem sem perdas pelo nosso{" "}
        <Link href="/pt/compress-png">compressor de PNG</Link> pode cortar uma
        parte significativa do ficheiro sem alterar um único pixel visível.
      </p>

      <h2 id="webp">WebP: o todo-o-terreno moderno</h2>
      <p>
        O WebP, desenvolvido pela Google, foi o primeiro formato amplamente
        adotado a fazer tudo num único contentor. Oferece modos{" "}
        <strong>com perdas</strong> e <strong>sem perdas</strong>, admite
        transparência em ambos e pode até conter animação como uma substituição
        mais pequena e de maior qualidade do GIF.
      </p>
      <p>
        Na prática, o WebP com perdas costuma ser{" "}
        <strong>entre 25 e 35% mais pequeno do que um JPEG</strong> a qualidade
        comparável, e o WebP sem perdas tende a superar o PNG em cerca de
        20&ndash;26%. É compatível com todos os principais navegadores atuais
        &mdash; Chrome, Firefox, Safari e Edge &mdash; o que o torna uma
        atualização segura e de baixo risco face aos formatos antigos para quase
        qualquer site.
      </p>
      <ul>
        <li>
          <strong>Compressão:</strong> com perdas e sem perdas.
        </li>
        <li>
          <strong>Transparência / animação:</strong> ambas admitidas.
        </li>
        <li>
          <strong>Compatibilidade:</strong> excelente em todos os navegadores
          modernos.
        </li>
        <li>
          <strong>Ideal para:</strong> imagens web de uso geral em que pretende
          ficheiros mais pequenos do que JPEG ou PNG praticamente sem risco de
          compatibilidade.
        </li>
      </ul>
      <p>
        Pode converter recursos existentes para WebP ou recomprimir ficheiros
        WebP com o nosso{" "}
        <Link href="/pt/compress-webp">compressor de WebP</Link>.
      </p>

      <h2 id="avif">AVIF: os ficheiros mais pequenos disponíveis</h2>
      <p>
        O AVIF é o mais recente dos quatro, derivado do codec de vídeo AV1. É o{" "}
        <strong>campeão da compressão</strong>: na maioria das imagens produz o
        ficheiro mais pequeno a uma dada qualidade, muitas vezes{" "}
        <strong>50% mais pequeno do que o JPEG</strong> e notavelmente mais
        pequeno do que o WebP. Admite modos com perdas e sem perdas,
        transparência, animação, ampla gama de cores e{" "}
        <strong>HDR com profundidade de 10 e 12 bits</strong> &mdash; útil para os
        ecrãs modernos.
      </p>
      <p>
        As contrapartidas são a velocidade de codificação e um suporte
        ligeiramente mais recente. O AVIF pode ser mais lento a codificar do que o
        JPEG ou o WebP e, embora todos os principais navegadores atuais já o
        descodifiquem, as versões de navegador muito antigas podem não o fazer.
        Para um alcance máximo, os sites costumam servir AVIF com uma alternativa
        em WebP ou JPEG usando o elemento HTML <code>&lt;picture&gt;</code>.
      </p>
      <ul>
        <li>
          <strong>Compressão:</strong> com perdas e sem perdas, com as melhores
          taxas dos quatro.
        </li>
        <li>
          <strong>Transparência / animação:</strong> ambas, além de HDR e ampla
          gama de cores.
        </li>
        <li>
          <strong>Compatibilidade:</strong> todos os principais navegadores
          atuais; forneça uma alternativa para os clientes muito antigos.
        </li>
        <li>
          <strong>Ideal para:</strong> sites onde o desempenho é crítico e o que
          mais importa é conseguir os ficheiros mais pequenos possíveis.
        </li>
      </ul>
      <p>
        Experimente comprimir uma foto com o nosso{" "}
        <Link href="/pt/compress-avif">compressor de AVIF</Link> e compare o
        resultado com a mesma imagem em JPEG ou WebP &mdash; a diferença costuma
        ser impressionante.
      </p>

      <h2 id="decision-guide">O guia rápido de decisão</h2>
      <p>Quando não tiver a certeza de qual escolher, comece por aqui:</p>
      <ul>
        <li>
          <strong>Fotos, máxima compatibilidade &rarr; JPEG.</strong> A opção
          universal quando o ficheiro pode ser aberto em qualquer lado, por
          qualquer coisa.
        </li>
        <li>
          <strong>
            Logótipos, ícones, capturas, transparência &rarr; PNG.
          </strong>{" "}
          Contornos sem perdas e um canal alfa completo.
        </li>
        <li>
          <strong>
            Imagens web gerais, mais pequenas e sem risco &rarr; WebP.
          </strong>{" "}
          Uma atualização direta que funciona em tudo o que é moderno.
        </li>
        <li>
          <strong>
            Os ficheiros mais pequenos possíveis para o desempenho &rarr; AVIF
          </strong>{" "}
          (com uma alternativa). A melhor compressão que pode conseguir hoje.
        </li>
      </ul>
      <p>
        Para uma referência autorizada sobre como os navegadores gerem cada
        formato, o{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia da MDN sobre os tipos de ficheiro de imagem
        </a>{" "}
        é o melhor lugar para aprofundar.
      </p>

      <h2 id="converting">Converter entre formatos</h2>
      <p>
        A forma mais rápida de encontrar o formato adequado é experimentar alguns
        e comparar. Se tiver uma pasta de JPEG antigos ou PNG sobredimensionados,
        o nosso <Link href="/pt/image-converter">conversor de imagens</Link>{" "}
        permite-lhe alternar entre JPEG, PNG, WebP e AVIF e ver como os tamanhos
        dos ficheiros mudam lado a lado. Como todas as ferramentas do
        FileShrinking são executadas <strong>100% no seu navegador</strong>, as
        suas imagens nunca são enviadas para lado nenhum &mdash; pode experimentar
        com ficheiros sensíveis ou pessoais sem qualquer risco para a privacidade.
      </p>
      <p>
        Em resumo: conserve um master de alta qualidade, escolha o formato que se
        ajusta à tarefa e comprima uma só vez. Faça-o assim e publicará imagens
        que são ao mesmo tempo pequenas e nítidas &mdash; sem nunca as enviar para
        fora do seu dispositivo.
      </p>
    </>
  );
}
