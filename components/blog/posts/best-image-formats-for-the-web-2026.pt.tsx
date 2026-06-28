import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "best-image-formats-for-the-web-2026",
  title: "Os melhores formatos de imagem para a web em 2026",
  description:
    "AVIF e WebP com JPEG como recurso, quando o PNG ainda ganha, o elemento <picture> e como o peso das imagens afeta os Core Web Vitals em 2026.",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  authorId: "maya",
  tags: ["Formatos", "Desempenho web"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        As imagens continuam a ser o elemento mais pesado na maioria das páginas
        web: normalmente ocupam mais bytes do que os teus scripts, tipos de
        letra e folhas de estilo juntos. Escolher o formato certo é a decisão de
        desempenho com maior impacto que podes tomar e, em 2026, a resposta
        finalmente estabilizou. A versão curta: recorre primeiro a{" "}
        <strong>AVIF</strong>, usa <strong>WebP</strong> como alternativa e
        mantém <strong>JPEG</strong> como rede de segurança universal. O PNG
        ainda tem o seu papel, mas mais reduzido do que a maioria supõe. Eis
        como convém pensar nisto.
      </p>

      <h2 id="the-modern-stack">A stack de imagem moderna num relance</h2>
      <p>
        Três formatos com perdas dominam agora o conteúdo fotográfico na web,
        por ordem decrescente de eficiência de compressão:
      </p>
      <ul>
        <li>
          <strong>AVIF</strong>: derivado do codec de vídeo AV1, costuma
          produzir os ficheiros mais pequenos para uma dada qualidade visual,
          muitas vezes entre 30 e 50&nbsp;% menores do que o JPEG e
          sensivelmente menores do que o WebP. Suporta ainda gama de cor ampla,
          HDR, transparência e modos com e sem perdas.
        </li>
        <li>
          <strong>WebP</strong>: um formato da Google um pouco mais antigo que
          continua excelente: cerca de 25 a 35&nbsp;% mais pequeno do que o
          JPEG, com suporte de transparência e animação. A sua maior vantagem
          hoje é a velocidade de codificação e um suporte de navegador sólido
          como uma rocha.
        </li>
        <li>
          <strong>JPEG</strong>: tem quase 35 anos e suporte universal. É o teu
          recurso, não a tua primeira opção, mas será apresentado literalmente
          em todo o lado.
        </li>
      </ul>
      <p>
        A boa notícia para 2026 é que isto já não é uma aposta. O AVIF é
        compatível com as versões atuais do Chrome, Edge, Firefox e Safari, e o
        WebP funciona há anos em todos os principais navegadores. Podes
        consultar a matriz de suporte em tempo real na{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          referência de tipos de imagem da MDN
        </a>
        , que regista a disponibilidade por navegador de cada formato.
      </p>

      <h2 id="avif-vs-webp">AVIF ou WebP: qual deves escolher?</h2>
      <p>
        Se só puderes servir um formato moderno, a decisão costuma resumir-se a
        um equilíbrio entre o tamanho do ficheiro e o custo de codificação:
      </p>
      <ul>
        <li>
          <strong>Escolhe AVIF</strong> quando os bytes são o mais importante:
          imagens hero grandes, portefólios de fotografia, tudo onde cada
          kilobyte conta para as tuas métricas de carregamento. Além disso, lida
          com gradientes suaves e céus com muito menos artefactos de bandas do
          que o JPEG.
        </li>
        <li>
          <strong>Escolhe WebP</strong> quando precisares de uma codificação
          rápida e barata em grande escala, ou quando quiseres um único formato
          moderno com o maior alcance possível e um comportamento previsível. O
          WebP codifica muito mais depressa do que o AVIF, o que importa se
          estiveres a converter milhares de imagens.
        </li>
      </ul>
      <p>
        Na verdade, não tens de escolher. A resposta certa para um site em
        produção é oferecer ambos e deixar o navegador escolher, que é
        precisamente para isso que serve o elemento{" "}
        <code>&lt;picture&gt;</code>. Podes experimentar ambos agora mesmo com o{" "}
        <Link href="/pt/compress-avif">compressor de AVIF</Link> e o{" "}
        <Link href="/pt/compress-webp">compressor de WebP</Link> da
        FileShrinking, comparar os tamanhos de saída lado a lado e decidir o que
        funciona melhor para o teu conteúdo. Tudo corre no teu navegador, por
        isso nada é enviado.
      </p>

      <h2 id="picture-element">Servir o formato certo com &lt;picture&gt;</h2>
      <p>
        A forma mais limpa de entregar formatos modernos com um recurso é a
        negociação de conteúdo em HTML. O elemento{" "}
        <code>&lt;picture&gt;</code> permite-te listar fontes candidatas por
        ordem de prioridade; o navegador usa a primeira que entende e ignora as
        restantes:
      </p>
      <ul>
        <li>
          Lista primeiro a tua fonte <strong>AVIF</strong>, já que o formato
          mais eficiente deve vencer quando estiver disponível.
        </li>
        <li>
          Lista o <strong>WebP</strong> em segundo lugar, para apanhar qualquer
          navegador que não tenha AVIF mas suporte WebP.
        </li>
        <li>
          Coloca um <strong>JPEG</strong> (ou PNG) simples na etiqueta{" "}
          <code>&lt;img&gt;</code> de fecho como recurso garantido, e para
          levar o teu texto <code>alt</code>, o <code>width</code> e o{" "}
          <code>height</code>.
        </li>
      </ul>
      <p>
        Como o navegador só descarrega a única fonte que escolhe, isto dá-te o
        formato mais pequeno que cada visitante consegue apresentar sem nada de
        JavaScript nem deteção no servidor. Para o padrão de marcação completo, o{" "}
        <a
          href="https://web.dev/articles/serve-responsive-images"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de imagens adaptáveis da web.dev
        </a>{" "}
        explica como combinar <code>&lt;picture&gt;</code> com{" "}
        <code>srcset</code> também para a troca de resolução.
      </p>

      <h2 id="png-still-matters">Quando o PNG (e o SVG) ainda importam</h2>
      <p>
        Os formatos modernos com perdas foram concebidos para fotografias. São a
        ferramenta errada para gráficos planos, e o PNG ainda merece o seu lugar
        em alguns casos específicos:
      </p>
      <ul>
        <li>
          <strong>Gráficos de contornos nítidos com poucas cores</strong>:
          logótipos, ícones, capturas de interface e diagramas. O PNG sem perdas
          mantém o texto e os contornos definidos, onde a compressão com perdas
          os esborrataria.
        </li>
        <li>
          <strong>Capturas de ecrã com precisão de píxel</strong> que queiras
          reproduzir exatamente, byte a byte.
        </li>
        <li>
          <strong>Masters de origem</strong> que vais voltar a editar mais
          tarde, já que o PNG é sem perdas e não acumula perda de geração.
        </li>
      </ul>
      <p>
        Dito isto, para muitos destes trabalhos o <strong>SVG</strong> é ainda
        melhor: logótipos e ícones simples desenhados como vetores mantêm-se
        bem nítidos em qualquer tamanho e muitas vezes pesam menos do que um
        equivalente rasterizado. E quando precisares mesmo de um gráfico
        rasterizado com transparência na web, tanto o AVIF como o WebP suportam
        também um canal alfa, pelo que um WebP sem perdas pode muitas vezes
        superar o PNG no tamanho. Se tens um recurso no formato errado, o{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link> pode
        trocá-lo sem voltar a enviar nada.
      </p>

      <h2 id="core-web-vitals">O peso das imagens e os Core Web Vitals</h2>
      <p>
        A escolha do formato não tem só a ver com faturas de largura de banda:
        afeta diretamente os Core Web Vitals da Google, que influenciam tanto a
        experiência do utilizador como o posicionamento nas pesquisas. A métrica
        mais ligada às imagens é o{" "}
        <strong>Largest Contentful Paint (LCP)</strong>: numa página típica, o
        maior elemento é a imagem hero, por isso a rapidez com que essa imagem
        chega determina em grande medida a tua pontuação de LCP. O objetivo
        recomendado é um LCP abaixo de{" "}
        <strong>2,5 segundos</strong> para a maioria das tuas visitas.
      </p>
      <p>Algumas alavancas práticas, por ordem aproximada de impacto:</p>
      <ul>
        <li>
          <strong>Reduz os bytes</strong> servindo AVIF ou WebP em vez de JPEG.
          Uma imagem LCP mais pequena chega mais cedo: esta é a maior melhoria
          individual.
        </li>
        <li>
          <strong>Ajusta as imagens às suas dimensões de exibição.</strong>{" "}
          Enviar uma foto de 4000&nbsp;px para um espaço de 800&nbsp;px
          desperdiça a maior parte da transferência. Usa <code>srcset</code>{" "}
          para servir variantes de tamanho adequado.
        </li>
        <li>
          <strong>Define sempre <code>width</code> e <code>height</code></strong>{" "}
          (ou usa <code>aspect-ratio</code> em CSS) para que o navegador reserve
          espaço e evites o deslocamento da maquetação, o que protege a tua
          pontuação de CLS.
        </li>
        <li>
          <strong>Evita o carregamento diferido da imagem LCP.</strong> Difere o
          carregamento das imagens abaixo da dobra, mas deixa a imagem hero
          carregar de imediato para que não seja atrasada.
        </li>
      </ul>

      <h2 id="takeaway">A conclusão para 2026</h2>
      <p>
        Para o conteúdo fotográfico, usa <strong>AVIF</strong> por predefinição
        para obter os ficheiros mais pequenos, oferece <strong>WebP</strong>{" "}
        como alternativa rápida e amplamente compatível, e conserva um recurso
        em <strong>JPEG</strong> dentro de um elemento{" "}
        <code>&lt;picture&gt;</code> para que todos os navegadores recebam algo.
        Reserva o <strong> PNG</strong> para gráficos nítidos, capturas de ecrã
        e masters sem perdas, e usa <strong>SVG</strong> para logótipos e ícones
        sempre que puderes. Comprime antes de publicar, ajusta cada imagem ao
        seu espaço e os teus Core Web Vitals vão recompensar-te.
      </p>
      <p>
        Queres pô-lo em prática? Converte e comprime as tuas imagens
        diretamente no teu navegador com as ferramentas de{" "}
        <Link href="/pt/compress-avif">AVIF</Link> e{" "}
        <Link href="/pt/compress-webp">WebP</Link>, ou muda de formato com o{" "}
        <Link href="/pt/image-converter">conversor de imagens</Link>: sem
        envios, sem contas e os teus ficheiros nunca saem do teu dispositivo.
      </p>
    </>
  );
}
