import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Conversor de imagens — JPEG, PNG, WebP e AVIF",
  metaDescription:
    "Converta imagens entre JPEG, PNG, WebP e AVIF de forma privada no seu navegador. Sem envios: os seus ficheiros nunca saem do seu dispositivo.",
  heading: "Conversor de imagens",
  intro: (
    <>
      Converta imagens entre JPEG, PNG, WebP e AVIF diretamente no seu navegador.
      Largue um ficheiro, escolha o formato de que precisa e descarregue o
      resultado em segundos: cada conversão é executada no seu dispositivo, por
      isso nunca é enviado nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como converter uma imagem",
    description:
      "Converta entre JPEG, PNG, WebP e AVIF localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione a sua imagem",
        text: "Arraste e largue um JPEG, PNG, WebP, AVIF ou GIF na zona de carregamento, clique para procurar ou cole a partir da área de transferência. Pode colocar vários em fila ao mesmo tempo.",
      },
      {
        name: "Escolha o formato de saída",
        text: "Selecione JPEG, PNG, WebP ou AVIF. Use WebP ou AVIF para obter os ficheiros mais leves e prontos para a web, PNG quando precisar de transparência sem perdas ou JPEG para máxima compatibilidade.",
      },
      {
        name: "Defina a qualidade",
        text: "Para JPEG, WebP e AVIF, ajuste o controlo deslizante de qualidade: cerca de 80 é um equilíbrio excelente. A saída PNG é sempre sem perdas, por isso não há qualidade a definir.",
      },
      {
        name: "Descarregue os seus ficheiros convertidos",
        text: "Guarde cada imagem convertida separadamente ou descarregue-as todas de uma vez num ZIP. Altere o formato ou a qualidade e volte a converter sempre que quiser.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros são enviados para um servidor quando os converto?",
      a: (
        <>
          Não. A conversão acontece por completo no seu navegador usando códecs
          WebAssembly. A imagem é descodificada e recodificada na memória do seu
          próprio dispositivo, por isso os seus ficheiros nunca tocam num
          servidor: pode até ficar offline depois de a página carregar e
          continua a funcionar.
        </>
      ),
      text: "Não. A conversão acontece por completo no seu navegador usando códecs WebAssembly. A imagem é descodificada e recodificada na memória do seu próprio dispositivo, por isso os seus ficheiros nunca tocam num servidor. Pode ficar offline depois de a página carregar e continua a funcionar.",
    },
    {
      q: "O conversor de imagens é gratuito?",
      a: (
        <>
          Sim: é completamente gratuito, sem registo, sem marcas de água e sem
          limites quanto ao número de ficheiros que converte ou ao seu tamanho,
          para além do que a memória do seu dispositivo permitir. O site é
          financiado por anúncios pouco intrusivos.
        </>
      ),
      text: "Sim. É completamente gratuito, sem registo, sem marcas de água e sem limites quanto ao número de ficheiros que converte ou ao seu tamanho, para além do que a memória do seu dispositivo permitir. O site é financiado por anúncios pouco intrusivos.",
    },
    {
      q: "A conversão afeta a qualidade da imagem?",
      a: (
        <>
          Depende do formato de destino. Converter para PNG é sem perdas, por
          isso não se perde detalhe. Converter para JPEG, WebP ou AVIF é com
          perdas e recodifica a imagem com a qualidade que escolher: entre 75 e
          85 é visualmente indistinguível do original para a maioria das fotos.
          Como a recodificação com perdas se acumula, converta sempre a partir da
          sua origem de máxima qualidade em vez de uma cópia já comprimida.
        </>
      ),
      text: "Depende do formato de destino. Converter para PNG é sem perdas, por isso não se perde detalhe. Converter para JPEG, WebP ou AVIF é com perdas e recodifica a imagem com a qualidade que escolher; entre 75 e 85 é visualmente indistinguível do original para a maioria das fotos. A recodificação com perdas acumula-se, por isso converta sempre a partir da sua origem de máxima qualidade.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso converter?",
      a: (
        <>
          Não há um limite rígido: está limitado apenas pela memória disponível
          do seu dispositivo. As fotos do dia a dia de alguns megabytes e as
          imagens grandes de 20 a 50 MP convertem-se sem problemas, e a
          codificação AVIF é a que mais usa a CPU, por isso as imagens muito
          grandes simplesmente demoram um pouco mais.
        </>
      ),
      text: "Não há um limite rígido; está limitado apenas pela memória disponível do seu dispositivo. As fotos do dia a dia de alguns megabytes e as imagens grandes de 20 a 50 MP convertem-se sem problemas. A codificação AVIF é a que mais usa a CPU, por isso as imagens muito grandes demoram um pouco mais.",
    },
    {
      q: "Para que formato devo converter?",
      a: (
        <>
          Para fotografias com as quais queira ampla compatibilidade, use JPEG ou
          WebP. Para gráficos, logótipos, capturas de ecrã ou qualquer coisa que
          precise de transparência, use PNG ou WebP. Para o ficheiro mais pequeno
          possível com suporte em navegadores modernos, escolha AVIF. O WebP é a
          opção mais segura para tudo porque suporta tanto fotos com perdas como
          transparência sem perdas.
        </>
      ),
      text: "Para fotografias com as quais queira ampla compatibilidade, use JPEG ou WebP. Para gráficos, logótipos, capturas de ecrã ou qualquer coisa que precise de transparência, use PNG ou WebP. Para o ficheiro mais pequeno possível com suporte em navegadores modernos, escolha AVIF. O WebP é a opção mais segura para tudo, pois suporta tanto fotos com perdas como transparência sem perdas.",
    },
    {
      q: "O que acontece à transparência quando converto para JPEG?",
      a: (
        <>
          O JPEG não suporta um canal alfa, por isso qualquer zona transparente é
          achatada sobre um fundo sólido ao converter para JPEG. Se a sua imagem
          depende da transparência (por exemplo, um logótipo pensado para ficar
          sobre diferentes fundos), converta antes para PNG ou WebP, pois ambos
          preservam o canal alfa.
        </>
      ),
      text: "O JPEG não suporta um canal alfa, por isso as zonas transparentes são achatadas sobre um fundo sólido ao converter para JPEG. Se a sua imagem depende da transparência, como um logótipo, converta antes para PNG ou WebP, pois ambos preservam o canal alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê converter entre formatos de imagem?</h2>
      <p>
        Nem todos os formatos de imagem são adequados para cada tarefa. Um
        logótipo guardado como JPEG fica desfocado nos bordos; uma fotografia
        guardada como PNG pode ser várias vezes maior do que o necessário; e um
        GIF de há uma década ocupa muito mais espaço do que um equivalente
        moderno. Converter uma imagem para um formato mais adequado pode torná-la
        muito mais pequena, mais nítida ou mais compatível com aquilo onde estiver
        a publicar, sem ter de voltar a fotografar nem a redesenhar nada.
      </p>
      <p>
        A razão mais comum pela qual as pessoas convertem é reduzir as imagens
        para a web. Passar uma foto de JPEG para{" "}
        <Link href="/pt/compress-webp">WebP</Link> ou{" "}
        <Link href="/pt/compress-avif">AVIF</Link> pode cortar o seu tamanho entre
        um quarto e metade com a mesma qualidade visual, o que significa páginas
        mais rápidas e custos de largura de banda mais baixos. Outros convertem na
        direção contrária: transformam um WebP ou AVIF de volta num JPEG ou PNG
        universalmente suportado para que abra em software mais antigo ou possa ser
        anexado a um e-mail. Como este conversor é executado inteiramente no seu
        dispositivo, pode fazer tudo isso sem entregar as suas imagens a um
        servidor remoto.
      </p>

      <h2 id="lossy">Conversão sem perdas e com perdas: o que muda</h2>
      <p>
        Converter uma imagem implica sempre descodificá-la e recodificá-la num
        formato novo, e o formato que escolher decide se esse passo é{" "}
        <strong>sem perdas</strong> ou <strong>com perdas</strong>. O PNG é sem
        perdas: cada píxel é preservado exatamente, razão pela qual é ideal para
        gráficos e capturas de ecrã, mas produz ficheiros grandes para as fotos. O
        JPEG, o WebP e o AVIF são com perdas por predefinição: descartam o detalhe
        que o seu olho tem menos probabilidade de notar para tornar o ficheiro
        muito mais pequeno, e um controlo deslizante de qualidade determina o quão
        agressivo é esse compromisso.
      </p>
      <p>
        Algo fundamental a compreender é que a conversão com perdas{" "}
        <strong>acumula-se</strong>. Cada vez que recodifica uma imagem que já é
        com perdas, descarta-se um pouco mais de detalhe, por isso deve converter
        sempre a partir da origem de maior qualidade que tiver, em vez de uma cópia
        que já foi comprimida. Converter um JPEG com perdas{" "}
        <em>para</em> PNG também não restaura por magia o detalhe perdido:
        simplesmente armazena os píxeis já degradados sem perdas, normalmente num
        ficheiro maior. Para as fotos, uma qualidade de{" "}
        <strong>75 a 85</strong> em JPEG, WebP ou AVIF é o ponto ideal em que o
        resultado é essencialmente indistinguível do original a tamanhos de
        visualização normais.
      </p>

      <h2 id="formats">Um guia rápido dos quatro formatos</h2>
      <p>
        Cada formato tem uma tarefa que faz melhor. O <strong>JPEG</strong> é o
        formato fotográfico universal: suportado em todo o lado, ótimo para
        imagens de tom contínuo, mas sem transparência. O <strong>PNG</strong>{" "}
        é sem perdas e suporta um canal alfa, o que o torna a escolha certa para
        logótipos, ícones, capturas de ecrã e qualquer gráfico que precise de
        bordos nítidos ou de um fundo transparente. O <strong>WebP</strong>{" "}
        é o todo-o-terreno moderno: gere tanto fotos com perdas como transparência
        sem perdas e é tipicamente entre 25% e 35% mais pequeno que o JPEG. O{" "}
        <strong>AVIF</strong> normalmente produz os ficheiros mais pequenos de
        todos e também suporta transparência, ao custo de uma codificação mais
        lenta e de um suporte de software um pouco mais limitado. Pode ler uma
        análise autorizada de cada um no{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de tipos de ficheiros de imagem da MDN
        </a>
        .
      </p>
      <p>
        Na prática: escolha <strong>JPEG ou WebP</strong> para fotografias,{" "}
        <strong>PNG ou WebP</strong> para gráficos e qualquer coisa com
        transparência, e <strong>AVIF</strong> quando importar o ficheiro
        absolutamente mais pequeno e o seu público usar navegadores atuais.
        Lembre-se de que <strong>o JPEG não tem transparência</strong>, por isso
        converter um PNG ou WebP transparente para JPEG irá achatá-lo sobre um
        fundo sólido. Se apenas quiser tornar um ficheiro mais pequeno sem alterar
        o seu formato, os compressores específicos de{" "}
        <Link href="/pt/compress-jpeg">JPEG</Link>,{" "}
        <Link href="/pt/compress-png">PNG</Link>,{" "}
        <Link href="/pt/compress-webp">WebP</Link> e{" "}
        <Link href="/pt/compress-avif">AVIF</Link> encaixam melhor.
      </p>

      <h2 id="tips">Dicas para conversões limpas</h2>
      <ul>
        <li>
          <strong>Converta a partir do original.</strong> Parta da origem de maior
          qualidade que tiver para não voltar a comprimir detalhe que já se tinha
          perdido.
        </li>
        <li>
          <strong>Tenha atenção à transparência antes de escolher JPEG.</strong>{" "}
          Se a sua imagem tem zonas transparentes que quer conservar, escolha PNG
          ou WebP: o JPEG não consegue armazenar um canal alfa.
        </li>
        <li>
          <strong>Experimente primeiro o WebP para a web.</strong> É o melhor
          equilíbrio entre tamanho reduzido, suporte de transparência e ampla
          compatibilidade com navegadores, o que o torna uma predefinição segura
          para a maioria dos sites.
        </li>
        <li>
          <strong>Redimensione enquanto converte.</strong> Se a imagem vai ser
          mostrada em pequeno, reduzir as suas dimensões poupa muito mais do que a
          escolha de formato por si só: use a opção de redimensionamento integrada
          ou o{" "}
          <Link href="/pt/image-resizer">redimensionador de imagens</Link>{" "}
          específico.
        </li>
        <li>
          <strong>Compare antes de decidir.</strong> Converta a mesma origem para
          WebP e AVIF e verifique os tamanhos de ficheiro e como ficam ao seu
          tamanho de visualização; o vencedor varia de imagem para imagem.
        </li>
      </ul>
    </>
  ),
};
