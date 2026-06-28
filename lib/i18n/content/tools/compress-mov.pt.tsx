import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Comprimir vídeo MOV, WebM, MKV e AVI grátis",
  metaDescription:
    "Comprima vídeos MOV, WebM, MKV e AVI de forma privada no seu navegador. Converta para MP4 H.264 eficiente sem envios: nada sai do seu dispositivo.",
  heading: "Compressor de MOV, WebM, MKV e AVI",
  intro: (
    <>
      Comprima vídeos MOV, WebM, MKV e AVI diretamente no seu navegador. Cada
      clipe é recodificado com o eficiente H.264 e guardado como um MP4 compacto
      e universalmente compatível, tudo no seu próprio dispositivo e sem que nada
      seja alguma vez enviado.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir MOV, WebM, MKV e AVI",
    description:
      "Comprima vídeo MOV, WebM, MKV e AVI para MP4 H.264 localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione o seu vídeo",
        text: "Arraste e largue um ficheiro MOV, WebM, MKV ou AVI na zona de carregamento, ou clique para o procurar. Os clipes curtos e as gravações de ecrã processam-se mais depressa.",
      },
      {
        name: "Escolha uma predefinição de qualidade",
        text: "Escolha uma predefinição, ou ajuste o cursor do CRF e a resolução pretendida. Por volta de um CRF de 23-28 os clipes ficam com ótimo aspeto enquanto são bastante reduzidos.",
      },
      {
        name: "Deixe o ffmpeg transcodificá-lo no seu dispositivo",
        text: "O vídeo é recodificado para MP4 H.264 com uma versão em WebAssembly do ffmpeg. Uma barra de progresso mostra o trabalho a acontecer localmente: nada é enviado para lado nenhum.",
      },
      {
        name: "Descarregue o seu MP4",
        text: "Guarde o MP4 mais pequeno quando estiver pronto. Se o resultado não for mais pequeno, a ferramenta avisa-o para que possa baixar a qualidade ou a resolução e tentar de novo.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros MOV, WebM, MKV ou AVI são enviados para um servidor?",
      a: (
        <>
          Não. Cada vídeo é processado localmente no seu navegador com uma
          versão em WebAssembly do ffmpeg. Os seus ficheiros nunca saem do seu
          dispositivo e não existe nenhum servidor para onde os enviar: depois de
          a página carregar, pode até ficar sem ligação à internet e continua a
          funcionar.
        </>
      ),
      text: "Não. Cada vídeo é processado localmente no seu navegador com uma versão em WebAssembly do ffmpeg. Os seus ficheiros nunca saem do seu dispositivo e não existe nenhum servidor para onde os enviar. Depois de a página carregar, pode ficar sem ligação à internet e continua a funcionar.",
    },
    {
      q: "Este compressor de vídeo é mesmo gratuito?",
      a: (
        <>
          Sim, é completamente gratuito, sem registo, sem marcas de água e sem
          encargos por ficheiro. Os únicos limites práticos vêm da memória e da
          paciência do seu dispositivo, já que tudo é executado no seu próprio
          hardware. O site sustenta-se com anúncios discretos.
        </>
      ),
      text: "Sim. É completamente gratuito, sem registo, sem marcas de água e sem encargos por ficheiro. Os únicos limites práticos vêm da memória e da paciência do seu dispositivo, já que tudo é executado no seu próprio hardware. O site sustenta-se com anúncios discretos.",
    },
    {
      q: "Comprimir vai reduzir a qualidade do meu vídeo?",
      a: (
        <>
          A compressão de vídeo tem perdas, por isso descarta-se algum detalhe
          para poupar espaço. Com o controlo de qualidade (CRF) no intervalo de
          23-28, a maioria dos clipes fica praticamente idêntica ao original em
          tamanhos de visualização normais. Baixe o CRF para mais fidelidade e
          ficheiros maiores, ou suba-o para ficheiros mais pequenos.
        </>
      ),
      text: "A compressão de vídeo tem perdas, por isso descarta-se algum detalhe para poupar espaço. Com o controlo de qualidade (CRF) no intervalo de 23-28, a maioria dos clipes fica praticamente idêntica ao original. Baixe o CRF para mais fidelidade e ficheiros maiores, ou suba-o para ficheiros mais pequenos.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: (
        <>
          Não há um limite fixo, mas como o ffmpeg é executado num único thread
          no seu navegador, os vídeos muito grandes ou longos (mais de cerca de
          150 MB) podem ser lentos e falhar em telemóveis com pouca memória. Os
          clipes curtos e as gravações de ecrã funcionam melhor; para ficheiros
          enormes, corte-os primeiro ou use uma ferramenta de computador.
        </>
      ),
      text: "Não há um limite fixo, mas como o ffmpeg é executado num único thread no seu navegador, os vídeos muito grandes ou longos de mais de cerca de 150 MB podem ser lentos e falhar em telemóveis com pouca memória. Os clipes curtos e as gravações de ecrã funcionam melhor; para ficheiros enormes, corte-os primeiro ou use uma ferramenta de computador.",
    },
    {
      q: "Porque é que o meu MOV ou AVI volta como um MP4?",
      a: (
        <>
          Para reduzir o seu ficheiro, a ferramenta recodifica o vídeo com H.264
          e envolve-o num contentor MP4, que é muito mais eficiente em espaço e
          muito mais compatível do que o MOV do QuickTime ou o AVI antigo. O
          resultado reproduz-se em praticamente todos os telemóveis, navegadores
          e leitores, normalmente com um tamanho muito menor.
        </>
      ),
      text: "Para reduzir o seu ficheiro, a ferramenta recodifica o vídeo com H.264 e envolve-o num contentor MP4, que é muito mais eficiente em espaço e compatível do que o MOV do QuickTime ou o AVI antigo. O resultado reproduz-se em praticamente todos os telemóveis, navegadores e leitores, normalmente com um tamanho muito menor.",
    },
    {
      q: "Também posso comprimir ficheiros WebM e MKV?",
      a: (
        <>
          Sim. Esta ferramenta aceita MOV, WebM, MKV e AVI e transcodifica-os
          todos para MP4 H.264. WebM e MKV são contentores flexíveis que podem
          albergar muitos codecs; converter para MP4 dá-lhe um formato único e
          previsível que se reproduz em todo o lado, incluindo dispositivos
          antigos e software de edição.
        </>
      ),
      text: "Sim. Esta ferramenta aceita MOV, WebM, MKV e AVI e transcodifica-os todos para MP4 H.264. WebM e MKV são contentores flexíveis que podem albergar muitos codecs; converter para MP4 dá-lhe um formato único e previsível que se reproduz em todo o lado, incluindo dispositivos antigos e software de edição.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porque é que os ficheiros MOV, WebM, MKV e AVI são tão grandes</h2>
      <p>
        Se grava vídeo num iPhone, numa reflex, numa GoPro ou num gravador de
        ecrã, muitas vezes acaba com ficheiros enormes: uns poucos minutos de
        filmagem podem alcançar facilmente as centenas de megabytes. Há boas
        razões para isso. Os telemóveis e as câmaras dão prioridade à velocidade
        de captura e à qualidade em detrimento do tamanho do ficheiro, por isso
        gravam com taxas de bits elevadas, resoluções elevadas e frequências de
        fotogramas elevadas. Os dispositivos da Apple guardam ficheiros{" "}
        <strong>.mov</strong> (QuickTime), os gravadores de ecrã produzem com
        frequência <strong>.mkv</strong> ou <strong>.webm</strong>, e as câmaras
        e ferramentas de Windows mais antigas ainda geram{" "}
        <strong>.avi</strong>. Cada um destes pode ser muitas vezes maior do que
        o necessário para partilhar ou arquivar.
      </p>
      <p>
        Os vídeos grandes são incómodos de gerir: ultrapassam os limites de
        anexos de e-mail e de chat, demoram uma eternidade a enviar, enchem o
        armazenamento do telemóvel e da nuvem, e consomem os dados móveis.
        Recodificá-los com um codec moderno e eficiente pode reduzir o tamanho
        drasticamente —muitas vezes para metade ou menos— enquanto a filmagem
        continua a ter um aspeto essencialmente igual. Como esta ferramenta é
        executada inteiramente no seu dispositivo, obtém essa poupança sem nunca
        entregar as suas gravações pessoais a um servidor de terceiros.
      </p>
      <p>
        A privacidade é a razão por que esse último ponto importa tanto. Vídeos
        caseiros, gravações de ecrã confidenciais, imagens dos seus filhos, demos
        de produto que ainda não anunciou: estas não são coisas que queira ter
        nos servidores de uma empresa desconhecida, nem sequer temporariamente.
        Os compressores de vídeo online convencionais enviam o seu ficheiro
        inteiro, processam-no remotamente e confiam em que acredite que foi
        apagado depois. Aqui, o seu vídeo é carregado para a memória do seu
        navegador, transcodificado com WebAssembly e devolvido diretamente a si.
        Nenhum pedido de rede transporta a filmagem, por isso não há nada para
        divulgar, registar ou reter.
      </p>

      <h2 id="container-vs-codec">
        Contentor versus codec: o que realmente determina o tamanho
      </h2>
      <p>
        Um ponto de confusão habitual é a diferença entre um{" "}
        <strong>contentor</strong> e um <strong>codec</strong>. A extensão do
        ficheiro —.mov, .mkv, .webm, .avi, .mp4— nomeia o contentor: um invólucro
        que agrupa a faixa de vídeo, a faixa de áudio, as legendas e os metadados
        num único ficheiro. O codec é o algoritmo que realmente codifica a imagem
        e o som dentro desse invólucro. O mesmo contentor pode albergar muitos
        codecs distintos, que é exatamente a razão por que dois ficheiros .mkv
        podem ter tamanhos e compatibilidades enormemente diferentes.
      </p>
      <p>
        Essa separação importa porque é o codec, e não o contentor, que determina
        a maior parte do tamanho do ficheiro. Um MOV de um iPhone pode usar o
        eficiente codec HEVC, ao passo que um AVI de uma câmara de vídeo antiga
        pode usar um antiquado e pesado. Os contentores também diferem na
        compatibilidade: MKV e WebM são flexíveis e abertos, mas não se reproduzem
        de forma nativa em todo o lado, e o AVI é em grande medida um formato
        antigo. Pode ler uma explicação clara de como os contentores web comuns
        se relacionam com os seus codecs no{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de formatos de contentor multimédia da MDN
        </a>
        .
      </p>
      <p>
        Em termos práticos, é por isso que simplesmente mudar o nome da extensão
        de um ficheiro nunca o torna mais pequeno e normalmente estraga a
        reprodução: estaria a reetiquetar o invólucro sem tocar nos dados do seu
        interior. A compressão real significa descodificar a faixa de vídeo
        original e recodificá-la com um codec mais eficiente a um nível de
        qualidade escolhido. É exatamente isto que acontece aqui: o seu MOV,
        WebM, MKV ou AVI é totalmente descodificado e depois reconstruído como um
        MP4 H.264 novo, em vez de ser apenas reembalado.
      </p>

      <h2 id="mp4-h264">Porque é que converter para MP4 H.264 ajuda</h2>
      <p>
        Esta ferramenta transcodifica o que lhe der para vídeo{" "}
        <strong>H.264</strong> dentro de um contentor <strong>MP4</strong>. Aqui
        há duas grandes vantagens. Primeira, o <strong>tamanho</strong>:
        recodificar com H.264 a um nível de qualidade sensato permite-lhe
        eliminar o excesso de taxa de bits que as câmaras e os gravadores
        incorporam, e pode opcionalmente limitar a resolução para reduzir ainda
        mais. Segunda, e igualmente importante, a{" "}
        <strong>compatibilidade</strong>: o MP4 H.264 é o mais próximo que há de
        um formato de vídeo universal. Reproduz-se em todos os navegadores
        modernos, em telemóveis e tablets, em televisores inteligentes e em
        software de edição, sem necessidade de pacotes de codecs nem conversões
        do outro lado.
      </p>
      <p>
        A qualidade é controlada com um valor CRF (Constant Rate Factor, fator de
        taxa constante). Os números mais baixos significam mais qualidade e
        ficheiros maiores; os números mais altos significam ficheiros mais
        pequenos com uma compressão mais visível. Para a maioria dos clipes, um
        CRF por volta de <strong>23-28</strong> é o ponto ideal, ficando quase
        idêntico ao original a uma fração do tamanho. Se o seu vídeo já for um MP4
        codificado de forma eficiente, pode não ganhar muito ao recomprimi-lo:
        nesse caso, o nosso{" "}
        <Link href="/pt/compress-mp4">compressor de MP4</Link> com um CRF mais
        alto ou uma resolução pretendida mais baixa é a melhor alavanca a usar.
      </p>

      <h2 id="tips">Dicas, limites e o que esperar</h2>
      <p>
        Tudo acontece no seu navegador usando uma versão em WebAssembly do
        ffmpeg, o que é genuinamente privado mas implica uma ressalva honesta:
        é executado num <strong>único thread</strong>. Isso significa que não
        consegue usar todos os núcleos do seu CPU como um codificador de
        computador nativo consegue, por isso os vídeos longos ou de alta
        resolução demoram bastante mais e podem forçar os dispositivos com pouca
        memória. Tenha presentes estas indicações para obter os melhores
        resultados:
      </p>
      <ul>
        <li>
          <strong>Dê prioridade aos clipes mais curtos.</strong> Um minuto ou
          dois de filmagem comprime-se depressa. Para gravações muito longas,
          corte a parte de que realmente precisa antes de comprimir.
        </li>
        <li>
          <strong>Baixe a resolução para a maior poupança.</strong> Uma gravação
          de ecrã em 4K reduzida para 1080p encolhe muito mais do que os ajustes
          de qualidade por si só, sem perda visível na maioria dos ecrãs.
        </li>
        <li>
          <strong>Use um computador de secretária para trabalhos pesados.</strong>{" "}
          Os ficheiros grandes (mais de cerca de 150&nbsp;MB) são mais lentos nos
          telemóveis; um portátil ou um computador de secretária com mais memória
          lida com eles com maior folga.
        </li>
        <li>
          <strong>Escolha a ferramenta certa para cada tarefa.</strong>{" "}
          Precisa de uma vista rápida de todos os formatos num só lugar? Use o{" "}
          <Link href="/pt/video-compressor">compressor de vídeo</Link>. Trabalha
          antes com ficheiros de áudio? Experimente o{" "}
          <Link href="/pt/audio-compressor">compressor de áudio</Link>.
        </li>
        <li>
          <strong>Volte a verificar o resultado.</strong> Se a saída alguma vez
          voltar com o mesmo tamanho ou maior, o seu original já estava codificado
          de forma eficiente: suba o CRF ou baixe a resolução e execute-o de novo
          em vez de aceitar um ficheiro que não foi reduzido.
        </li>
      </ul>
    </>
  ),
};
