import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir MP4 — Compressor de vídeo MP4 grátis",
  metaDescription:
    "Comprime vídeos MP4 no teu navegador com H.264. Predefinições de qualidade, escala de resolução e sem envios: os teus ficheiros continuam privados.",
  heading: "Compressor de MP4",
  intro: (
    <>
      Comprime vídeos MP4 diretamente no teu navegador com H.264. Escolhe uma
      predefinição de qualidade, larga o teu clipe e descarrega um ficheiro mais
      pequeno em minutos: nada é alguma vez enviado, por isso as tuas gravações
      continuam totalmente privadas.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir um MP4",
    description:
      "Comprime um vídeo MP4 localmente no teu navegador em quatro passos.",
    steps: [
      {
        name: "Adiciona o teu MP4",
        text: "Arrasta e larga o teu ficheiro .mp4 na zona de carregamento, ou clica para procurar. O vídeo é carregado na memória do teu dispositivo, não é enviado para lado nenhum.",
      },
      {
        name: "Escolhe uma predefinição de qualidade",
        text: "Começa com Equilibrado. Define um CRF sensato e limita a resolução; muda para uma predefinição mais pequena para ficheiros mais comprimidos ou para uma maior para te manteres perto do original.",
      },
      {
        name: "Afina o CRF",
        text: "Move o controlo deslizante do CRF se quiseres mais controlo. Um valor mais baixo conserva mais detalhe e um ficheiro maior; entre 23 e 28 está o ponto ideal prático para a maioria dos clipes.",
      },
      {
        name: "Comprime e descarrega",
        text: "A recodificação corre no teu dispositivo com ffmpeg. Quando terminar verás o tamanho poupado e poderás descarregar o teu MP4 mais pequeno.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros MP4 são enviados para um servidor?",
      a: (
        <>
          Não. O teu vídeo é comprimido localmente no teu navegador com uma
          versão em WebAssembly do ffmpeg. O ficheiro é lido para a memória,
          recodificado no teu próprio dispositivo e devolvido diretamente: não
          há nenhum servidor para onde o enviar e nunca é transmitido nada.
        </>
      ),
      text: "Não. O teu vídeo é comprimido localmente no teu navegador com uma versão em WebAssembly do ffmpeg. O ficheiro é lido para a memória, recodificado no teu próprio dispositivo e devolvido diretamente. Não há nenhum servidor para onde o enviar e nunca é transmitido nada.",
    },
    {
      q: "O compressor de MP4 é mesmo gratuito?",
      a: (
        <>
          Sim: é completamente gratuito, sem registo, sem marcas de água e sem
          limites por ficheiro ou por dia. Como todo o trabalho acontece na tua
          máquina, não há custos de servidor a recuperar. O site é sustentado
          por anúncios discretos.
        </>
      ),
      text: "Sim. É completamente gratuito, sem registo, sem marcas de água e sem limites por ficheiro ou por dia. Como todo o trabalho acontece na tua máquina, não há custos de servidor a recuperar. O site é sustentado por anúncios discretos.",
    },
    {
      q: "Comprimir vai reduzir a qualidade do meu vídeo?",
      a: (
        <>
          H.264 é um codec com perdas, por isso recodificar descarta sempre
          algum detalhe. Com a predefinição Equilibrado (em torno de CRF 23-28)
          a perda é difícil de notar a tamanhos de visualização normais,
          enquanto o ficheiro encolhe consideravelmente. Escolhe um CRF mais
          baixo para te manteres mais perto do original, ou um mais alto para um
          ficheiro mais pequeno.
        </>
      ),
      text: "H.264 é um codec com perdas, por isso recodificar descarta sempre algum detalhe. Com a predefinição Equilibrado (em torno de CRF 23-28) a perda é difícil de notar a tamanhos de visualização normais, enquanto o ficheiro encolhe consideravelmente. Escolhe um CRF mais baixo para te manteres mais perto do original ou um mais alto para um ficheiro mais pequeno.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro MP4 que posso comprimir?",
      a: (
        <>
          Não há um limite rígido, mas a recodificação de vídeo consome muita
          memória e CPU e corre num único thread no navegador. Os clipes até
          cerca de 150&nbsp;MB comprimem-se sem problemas na maioria dos
          dispositivos; os vídeos maiores ou mais longos também funcionam, mas
          podem ser lentos e podem falhar em telemóveis com pouca memória. Os
          clipes curtos terminam mais depressa.
        </>
      ),
      text: "Não há um limite rígido, mas a recodificação de vídeo consome muita memória e CPU e corre num único thread no navegador. Os clipes até cerca de 150 MB comprimem-se sem problemas na maioria dos dispositivos; os vídeos maiores ou mais longos também funcionam, mas podem ser lentos e podem falhar em telemóveis com pouca memória. Os clipes curtos terminam mais depressa.",
    },
    {
      q: "Porque é que comprimir o meu MP4 é mais lento do que comprimir uma imagem?",
      a: (
        <>
          Um vídeo são milhares de fotogramas, e cada um é descodificado,
          opcionalmente redimensionado e recodificado com H.264. A versão do
          ffmpeg que corre no navegador funciona num único thread por
          compatibilidade e segurança, por isso não consegue usar todos os
          núcleos da CPU como uma aplicação de ambiente de trabalho faria. Espera
          uma velocidade de aproximadamente tempo real a algumas vezes o tempo
          real, consoante a resolução e o teu hardware.
        </>
      ),
      text: "Um vídeo são milhares de fotogramas, e cada um é descodificado, opcionalmente redimensionado e recodificado com H.264. A versão do ffmpeg que corre no navegador funciona num único thread por compatibilidade e segurança, por isso não consegue usar todos os núcleos da CPU como uma aplicação de ambiente de trabalho faria. Espera uma velocidade de aproximadamente tempo real a algumas vezes o tempo real, consoante a resolução e o hardware.",
    },
    {
      q: "Vale a pena recodificar um MP4 que já é H.264?",
      a: (
        <>
          Às vezes. Se o original foi exportado com um bitrate alto ou uma
          resolução grande, recodificar com um CRF mais alto ou uma altura menor
          pode poupar muito. Mas um ficheiro que já estava comprimido de forma
          eficiente pode encolher muito pouco, ou até crescer. Se o resultado não
          for mais pequeno, a ferramenta avisa-te de que o ficheiro já é
          eficiente e podes manter o original.
        </>
      ),
      text: "Às vezes. Se o original foi exportado com um bitrate alto ou uma resolução grande, recodificar com um CRF mais alto ou uma altura menor pode poupar muito. Mas um ficheiro que já estava comprimido de forma eficiente pode encolher muito pouco ou até crescer. Se o resultado não for mais pequeno, a ferramenta avisa-te de que o ficheiro já é eficiente e podes manter o original.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porque é que os ficheiros MP4 são tão grandes?</h2>
      <p>
        MP4 é um contentor, não um codec: envolve um fluxo de vídeo, um fluxo de
        áudio e metadados num só ficheiro. O tamanho desse ficheiro é
        determinado quase por completo pelo <strong>bitrate</strong> do fluxo de
        vídeo: quantos bits por segundo o codificador gasta a descrever a imagem.
        O bitrate, por sua vez, escala com três coisas que tu controlas: a{" "}
        <strong>resolução</strong> (um fotograma 4K tem quatro vezes os píxeis de
        1080p), a <strong>duração</strong> do clipe e o{" "}
        <strong>objetivo de qualidade</strong> com que o original foi exportado.
      </p>
      <p>
        Os telemóveis, os gravadores de ecrã e as aplicações de edição costumam
        pender para o lado da qualidade, exportando com bitrates altos para que
        nada fique desfocado. Isso é ótimo para arquivo, mas um desperdício para
        partilhar: um clipe de telemóvel de um minuto em 4K pode superar
        facilmente os 150&nbsp;MB, muito mais do que precisas para enviar por
        apps de mensagens ou e-mail. Recodificar com um objetivo de qualidade
        sensato, e muitas vezes com uma resolução menor, é de onde vêm as
        grandes poupanças.
      </p>

      <h2 id="crf">Como o CRF e a resolução reduzem o ficheiro</h2>
      <p>
        Esta ferramenta recodifica o teu vídeo com <strong>H.264</strong> usando
        um <strong>fator de taxa constante (CRF)</strong>. Em vez de forçar um
        bitrate fixo, o CRF aponta para uma qualidade <em>percecionada</em>{" "}
        constante e deixa o codificador gastar mais bits nas cenas complexas e
        menos nas simples. Aqui a escala vai de 18 (qualidade muito alta,
        ficheiro maior) a 36 (ficheiro mais pequeno, artefactos mais visíveis).
        Cada passo de aproximadamente &plusmn;6 corresponde a cerca de metade ou
        ao dobro do tamanho do ficheiro, por isso pequenas alterações no controlo
        deslizante têm um grande efeito.
      </p>
      <p>
        A segunda alavanca é a <strong>resolução</strong>. Reduzir a altura
        máxima —por exemplo de 2160p para 1080p ou 720p— corta drasticamente o
        número de píxeis, e menos píxeis precisam de menos bits com a mesma
        qualidade. Para gravações que vão ser vistas num telemóvel ou inseridas
        num documento, uma recodificação a 720p ou 1080p muitas vezes parece
        idêntica na prática, sendo uma fração do tamanho. As predefinições
        combinam um CRF e um limite de altura para que obtenhas um bom resultado
        sem afinar nada; o controlo deslizante do CRF está lá para quando
        quiseres um controlo mais fino.
      </p>
      <p>
        Duas coisas importam menos do que as pessoas esperam. Primeiro, a taxa de
        fotogramas: a maioria dos clipes não precisa de mais do que o original já
        tem, e reduzi-la poupa apenas um espaço modesto em comparação com o CRF e
        a resolução. Segundo, a faixa de áudio. A fala e a música acrescentam
        algum peso, mas uma banda sonora AAC típica é uma pequena fatia de um
        ficheiro de vídeo, por isso a imagem é quase sempre onde estão as
        poupanças. É por isso que esta ferramenta foca as tuas escolhas na
        qualidade e na resolução —os dois ajustes que fazem a diferença— e
        recodifica o áudio para um bitrate sensato automaticamente.
      </p>

      <h2 id="format">
        MP4, H.264 e quando recodificar ajuda mesmo
      </h2>
      <p>
        A grande maioria dos ficheiros MP4 já contém um fluxo de vídeo H.264
        (também chamado AVC), que é a razão pela qual MP4 se reproduz
        praticamente em todo o lado: desde telemóveis antigos a televisores
        inteligentes. Podes ler como os navegadores descrevem o contentor MP4 e o
        codec H.264 no{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de contentores multimédia da MDN
        </a>{" "}
        e na sua{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264"
          target="_blank"
          rel="noopener noreferrer"
        >
          referência do codec AVC / H.264
        </a>
        . Gerar H.264 em MP4 mantém essa compatibilidade universal intacta.
      </p>
      <p>
        Recodificar um MP4 que <em>já</em> é H.264 ajuda quando o original foi
        exportado com generosidade —bitrate alto, resolução grande, ou ambos—
        porque há margem a recortar. Ajuda muito menos, e pode até produzir um
        ficheiro <strong>maior</strong>, quando o vídeo já estava comprimido ao
        máximo: recodificar um fluxo com perdas implica descodificá-lo e voltar a
        comprimi-lo com perdas, por isso só sais a ganhar se o teu novo objetivo
        for realmente mais baixo do que o original. Se a saída não fosse ser mais
        pequena, esta ferramenta mantém-te informado para que possas
        simplesmente manter o teu original. Para espremer mais, sobe o CRF ou
        baixa a resolução em vez de esperar magia de uma única passagem.
      </p>

      <h2 id="tips">Dicas e o compromisso de velocidade no navegador</h2>
      <p>
        Tudo acontece no teu dispositivo usando uma versão em WebAssembly do{" "}
        ffmpeg, que é o que torna isto privado, mas também é de{" "}
        <strong>um único thread</strong>. Um codificador de ambiente de trabalho
        nativo reparte o trabalho por todos os núcleos da CPU; a versão do
        navegador, por compatibilidade e segurança, usa um. Isso significa que os
        vídeos longos ou de alta resolução podem demorar um pouco e podem forçar
        os telemóveis com pouca memória. Alguns hábitos mantêm tudo fluido:
      </p>
      <ul>
        <li>
          <strong>Recorta primeiro quando puderes.</strong> A duração é um
          multiplicador direto tanto do tamanho do ficheiro como do tempo de
          codificação, por isso cortar os trechos mortos antes de comprimir é a
          vitória mais fácil.
        </li>
        <li>
          <strong>Baixa a resolução para partilhar.</strong> 720p ou 1080p chega
          e sobra para mensagens, diapositivos e a maioria das inserções web;
          reserva o 4K para os ficheiros que vês mesmo num ecrã grande.
        </li>
        <li>
          <strong>Começa com Equilibrado e depois compara.</strong> Volta a
          executar com uma predefinição mais pequena e verifica se consegues
          detetar a diferença no teu tamanho de visualização real antes de
          decidires.
        </li>
        <li>
          <strong>Faz os trabalhos grandes num dispositivo de cada vez.</strong>{" "}
          Fecha outros separadores pesados para que o codificador tenha memória e
          CPU com que trabalhar; os clipes curtos terminam mais depressa.
        </li>
      </ul>
      <p>
        Trabalhas com outros formatos? Usa o{" "}
        <Link href="/pt/video-compressor">compressor de vídeo</Link> mais geral
        para MP4 e tudo o resto, o{" "}
        <Link href="/pt/compress-mov">compressor de MOV, WebM, MKV e AVI</Link>{" "}
        para gravações que não sejam MP4, ou o{" "}
        <Link href="/pt/audio-compressor">compressor de áudio</Link> quando só
        precisares de reduzir uma banda sonora ou uma gravação de voz.
      </p>
    </>
  ),
};
