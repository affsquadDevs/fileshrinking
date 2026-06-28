import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Redimensionar imagens online grátis por píxeis ou %",
  metaDescription:
    "Redimensione JPG, PNG, WebP, AVIF e GIF por píxeis ou percentagem no seu navegador. Privado e sem enviar nada: as imagens nunca saem do seu dispositivo.",
  heading: "Redimensionar imagens",
  intro: (
    <>
      Redimensione imagens JPG, PNG, WebP, AVIF e GIF por píxeis exatos ou por
      percentagem, diretamente no seu navegador. Alterar as dimensões é a forma
      mais eficaz de reduzir um ficheiro: largue as suas imagens, escolha um
      tamanho pretendido e descarregue-as em segundos. Nunca se envia nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como redimensionar uma imagem",
    description:
      "Redimensione imagens por píxeis ou percentagem localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione as suas imagens",
        text: "Arraste e largue as suas fotografias na zona de carregamento, clique para procurar ou cole a partir da área de transferência. São suportados JPEG, PNG, WebP, AVIF e GIF, e pode adicionar várias de uma só vez.",
      },
      {
        name: "Escolha píxeis ou percentagem",
        text: "Selecione «Percentagem» para escalar por uma proporção (ideal para lotes inteiros) ou «Píxeis» para escrever uma largura ou uma altura exatas. Mantenha ativada a proporção para evitar deformações.",
      },
      {
        name: "Defina o formato e a qualidade (opcional)",
        text: "Deixe o formato em «Mesmo formato» para conservar o tipo original, ou converta para WebP ou AVIF para obter um ficheiro mais pequeno. Ajuste o controlo de qualidade para comprimir ao mesmo tempo.",
      },
      {
        name: "Descarregue as suas imagens redimensionadas",
        text: "Cada imagem é redimensionada no seu dispositivo com reamostragem Lanczos. Descarregue-as uma a uma ou todas de uma vez num ZIP.",
      },
    ],
  },
  faqs: [
    {
      q: "As minhas imagens são enviadas para um servidor quando as redimensiono?",
      a: (
        <>
          Não. O redimensionamento acontece por completo no seu navegador
          usando o processador do seu próprio dispositivo. Os ficheiros são
          lidos para a memória, redimensionados e devolvidos-lhe de imediato:
          nunca se envia nada para um servidor, por isso as suas imagens
          mantêm-se totalmente privadas. Pode até desligar-se da internet depois
          de a página carregar.
        </>
      ),
      text: "Não. O redimensionamento acontece por completo no seu navegador usando o processador do seu dispositivo. Os ficheiros são lidos para a memória, redimensionados e devolvidos-lhe de imediato. Nunca se envia nada para um servidor, por isso as suas imagens mantêm-se privadas. Pode até desligar-se da internet depois de a página carregar.",
    },
    {
      q: "O redimensionador de imagens é mesmo grátis?",
      a: (
        <>
          Sim: é totalmente grátis, sem registo, sem marcas de água e sem
          limites na quantidade de imagens que pode redimensionar nem no seu
          tamanho, para além do que a memória do seu dispositivo permitir. O
          site é mantido com anúncios discretos.
        </>
      ),
      text: "Sim. É totalmente grátis, sem registo, sem marcas de água e sem limites na quantidade nem no tamanho das imagens para além do que a memória do seu dispositivo permitir. O site é mantido com anúncios discretos.",
    },
    {
      q: "Redimensionar vai reduzir a qualidade da minha imagem?",
      a: (
        <>
          Tornar uma imagem mais pequena é suave para a qualidade porque os
          píxeis são calculados por média de forma inteligente através de
          reamostragem Lanczos de alta qualidade, que mantém os contornos
          nítidos e evita o aspeto serrilhado do escalonamento simples. A
          qualidade só se ressente se ampliar (escalar para cima) uma imagem
          para além do seu tamanho original, já que não há detalhe real a
          inventar.
        </>
      ),
      text: "Tornar uma imagem mais pequena é suave para a qualidade porque os píxeis são calculados por média através de reamostragem Lanczos de alta qualidade, que mantém os contornos nítidos. A qualidade só se ressente se ampliar uma imagem para além do seu tamanho original, porque não há detalhe real a inventar.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso redimensionar?",
      a: (
        <>
          Não há um limite fixo: depende da memória disponível no seu
          dispositivo. As fotografias habituais de alguns megabytes e até
          imagens muito grandes de 40-80 MP redimensionam-se sem problemas. Os
          lotes grandes são processados um ficheiro de cada vez para manter
          baixo o uso de memória.
        </>
      ),
      text: "Não há um limite fixo; depende da memória disponível no seu dispositivo. As fotografias habituais de alguns megabytes e até imagens muito grandes de 40-80 MP redimensionam-se sem problemas. Os lotes grandes são processados um ficheiro de cada vez para manter baixo o uso de memória.",
    },
    {
      q: "Posso manter a proporção para que a minha imagem não fique esticada?",
      a: (
        <>
          Sim. Mantenha assinalada a caixa «Manter proporção» e introduza apenas
          uma largura ou apenas uma altura: a outra dimensão é calculada
          automaticamente para que a imagem seja escalada de forma proporcional.
          Desmarque-a apenas quando precisar deliberadamente de dimensões exatas
          e não proporcionais.
        </>
      ),
      text: "Sim. Mantenha assinalada a caixa Manter proporção e introduza apenas uma largura ou apenas uma altura; a outra dimensão é calculada automaticamente para que a imagem seja escalada de forma proporcional. Desmarque-a apenas quando precisar deliberadamente de dimensões exatas e não proporcionais.",
    },
    {
      q: "Posso redimensionar e comprimir ao mesmo tempo?",
      a: (
        <>
          Sim, e deve fazê-lo. Defina as dimensões pretendidas e depois escolha
          um formato de saída e um nível de qualidade. O redimensionamento
          reduz o número de píxeis enquanto a compressão espreme os píxeis
          restantes, por isso combinar ambos dá o ficheiro mais pequeno possível
          numa única passagem.
        </>
      ),
      text: "Sim, e deve fazê-lo. Defina as dimensões pretendidas e depois escolha um formato de saída e um nível de qualidade. O redimensionamento reduz o número de píxeis enquanto a compressão espreme os píxeis restantes, por isso combinar ambos dá o ficheiro mais pequeno possível numa única passagem.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê redimensionar as suas imagens?</h2>
      <p>
        Os telemóveis e as câmaras modernas captam imagens enormes: uma única
        fotografia pode ter 6000 píxeis de largura e pesar dez megabytes ou
        mais. É muito mais detalhe do que quase qualquer ecrã, e-mail ou página
        web alguma vez mostrará. O cabeçalho de um blogue pode aparecer a 1200
        píxeis de largura; uma fotografia de perfil a 400; a assinatura de um
        e-mail a 150. Enviar um ficheiro de 6000 píxeis para um espaço de 1200
        píxeis desperdiça largura de banda, torna o carregamento das páginas
        mais lento e inflaciona os anexos sem qualquer benefício visível.
      </p>
      <p>
        Redimensionar é também a{" "}
        <strong>alavanca mais poderosa que tem sobre o tamanho do ficheiro</strong>.
        Como os dados de uma imagem escalam com o seu número total de píxeis,
        reduzir para metade tanto a largura como a altura elimina cerca de três
        quartos dos píxeis —e, por conseguinte, a maior parte do tamanho do
        ficheiro— antes mesmo de qualquer compressão. Baixar a qualidade JPEG
        pode cortar entre 30 e 50 %; redimensionar uma fotografia demasiado
        grande para o seu tamanho real de exibição corta habitualmente entre 80
        e 95 %. Se um ficheiro lhe parecer demasiado grande, redimensione
        primeiro e comprima depois.
      </p>
      <p>
        E como esta ferramenta funciona por completo no seu dispositivo, é a
        forma privada de o fazer. Outros redimensionadores online enviam as suas
        fotografias para um servidor remoto, processam-nas lá e devolvem-nas.
        Aqui as suas imagens são lidas para a memória, redimensionadas
        localmente e devolvidas-lhe de imediato: nunca tocam numa rede.
      </p>

      <h2 id="quality">Como o redimensionamento afeta a qualidade</h2>
      <p>
        Reduzir o tamanho de uma imagem é, por natureza, suave para a qualidade,
        mas <em>como</em> os píxeis são combinados importa muito. O
        escalonamento simples limita-se a descartar píxeis, o que produz
        contornos serrilhados e cintilação nos detalhes finos. Esta ferramenta
        usa, em vez disso, a <strong>reamostragem Lanczos</strong> de alta
        qualidade, que pondera uma vizinhança de píxeis circundantes para cada
        píxel de saída. O resultado mantém os contornos nítidos e o texto
        legível, de modo que uma imagem reduzida fica limpa em vez de
        desfocada ou serrilhada.
      </p>
      <p>
        A única operação que realmente prejudica é o{" "}
        <strong>escalonamento para cima</strong>: ampliar uma imagem para além
        das suas dimensões originais. Nenhum reamostrador consegue inventar
        detalhe que nunca foi captado, por isso uma fotografia ampliada fica
        mole e esborratada. Por regra, redimensione sempre apenas para{" "}
        <em>baixo</em>: escolha o maior tamanho de que realmente precisa e
        redimensione para esse, nunca acima das dimensões de origem. Quando além
        disso converte para um formato com perdas, lembre-se de que a compressão
        e o redimensionamento se acumulam: uma imagem redimensionada tem menos
        píxeis para comprimir, que é exatamente a razão pela qual ambos juntos
        produzem ficheiros tão pequenos.
      </p>

      <h2 id="sizes">Píxeis, percentagem e tamanhos pretendidos habituais</h2>
      <p>
        O modo <strong>percentagem</strong> é ideal para lotes: defina 50 % e
        cada imagem reduz-se de forma proporcional independentemente do seu
        tamanho de partida. O modo <strong>píxeis</strong> é para alvos
        precisos: escreva uma largura (ou uma altura) e, com a proporção
        bloqueada, a outra dimensão é calculada por si para que nada fique
        esticado. A proporção não é mais do que a relação entre a largura e a
        altura (16:9, 4:3, 1:1); mantê-la intacta é o que evita que rostos e
        logótipos fiquem achatados. Pode ler mais sobre como as imagens e as
        suas dimensões funcionam no{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de imagens na web da MDN
        </a>
        .
      </p>
      <p>
        Alvos úteis a ter presentes: a maior parte do conteúdo{" "}
        <strong>web</strong> fica ótima entre 1200 e 2000 píxeis no lado mais
        comprido (use o extremo maior para imagens hero a toda a largura em ecrãs
        de alta densidade). Os anexos e assinaturas de <strong>e-mail</strong>{" "}
        devem normalmente manter-se em 800 píxeis ou menos para não sobrecarregar
        as caixas de entrada. Para as <strong>redes sociais</strong>, as
        dimensões habituais são aproximadamente 1080×1080 para uma publicação
        quadrada de Instagram, 1080×1920 para stories e reels verticais, 1200×630
        para uma pré-visualização de ligação do Facebook ou Open Graph, e
        1500×500 para um cabeçalho do X/Twitter. Em caso de dúvida, redimensione
        para o maior local onde a imagem vai aparecer e deixe a plataforma
        reduzi-la a partir daí.
      </p>

      <h2 id="tips">Dicas para obter os melhores resultados</h2>
      <ul>
        <li>
          <strong>Nunca escale para cima.</strong> Ampliar para além do tamanho
          original só acrescenta desfoque. Escolha a maior dimensão de que
          realmente precisa e pare aí.
        </li>
        <li>
          <strong>Redimensione antes de comprimir.</strong> Menos píxeis
          significam um ficheiro mais pequeno e menos trabalho para o
          codificador. Para obter as fotografias mais pequenas, redimensione-as
          aqui e depois passe-as pela{" "}
          <Link href="/pt/compress-jpeg">compressão JPEG</Link>.
        </li>
        <li>
          <strong>Bloqueie a proporção.</strong> Introduza apenas a largura ou
          apenas a altura e deixe a outra dimensão preencher-se
          automaticamente: é a forma mais fácil de evitar imagens esticadas e
          deformadas.
        </li>
        <li>
          <strong>Converta enquanto redimensiona.</strong> Mudar para WebP ou
          AVIF com o{" "}
          <Link href="/pt/image-converter">conversor de imagens</Link> pode
          reduzir uma fotografia redimensionada mais 25-50 % sem perda de
          qualidade visível.
        </li>
        <li>
          <strong>Conserve os seus originais.</strong> Redimensione de cada vez
          a partir de um original em resolução completa em vez de voltar a
          redimensionar uma cópia já reduzida, o que acumula perda de qualidade.
        </li>
      </ul>
    </>
  ),
};
