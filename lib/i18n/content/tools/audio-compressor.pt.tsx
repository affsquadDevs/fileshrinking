import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressor de áudio — MP3 e AAC grátis online",
  metaDescription:
    "Comprima áudio MP3, WAV, AAC, M4A, OGG e FLAC no seu navegador. Escolha o bitrate, sem envios nem registo: os ficheiros nunca saem do seu equipamento.",
  heading: "Compressor de áudio",
  intro: (
    <>
      Reduza o tamanho de ficheiros MP3, WAV, AAC, M4A, OGG e FLAC diretamente no
      seu navegador. Recodifique para MP3 ou AAC com o bitrate que escolher e
      descarregue uma faixa mais leve em segundos: nunca é enviado nada.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir um ficheiro de áudio",
    description:
      "Comprima MP3, WAV, AAC e mais localmente no seu navegador em quatro passos.",
    steps: [
      {
        name: "Adicione o seu áudio",
        text: "Arraste e largue os seus ficheiros de áudio na zona de carregamento ou clique para os procurar. São aceites MP3, WAV, AAC, M4A, OGG e FLAC.",
      },
      {
        name: "Escolha um formato de saída",
        text: "Escolha MP3 para a máxima compatibilidade ou AAC (.m4a) para uma qualidade ligeiramente melhor com o mesmo tamanho.",
      },
      {
        name: "Escolha um bitrate",
        text: "Ajuste o bitrate para controlar o equilíbrio entre tamanho e qualidade. 128 kbps fica bem para música; baixe para 96 kbps para voz e podcasts e poupe ainda mais.",
      },
      {
        name: "Descarregue o seu ficheiro",
        text: "Cada faixa é recodificada no seu dispositivo com FFmpeg. Verá o tamanho original, o novo tamanho e a percentagem poupada, e depois descarrega o resultado.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros de áudio são enviados para um servidor?",
      a: (
        <>
          Não. Cada faixa é recodificada localmente no seu navegador com uma
          versão de FFmpeg compilada em WebAssembly. O seu áudio nunca sai do seu
          dispositivo e não existe nenhum servidor que o receba: depois de a
          página estar carregada, pode até desligar-se da internet e continuará a
          funcionar.
        </>
      ),
      text: "Não. Cada faixa é recodificada localmente no seu navegador com uma versão de FFmpeg compilada em WebAssembly. O seu áudio nunca sai do seu dispositivo e não existe nenhum servidor que o receba. Depois de a página estar carregada, pode desligar-se da internet e continuará a funcionar.",
    },
    {
      q: "O compressor de áudio é mesmo gratuito?",
      a: (
        <>
          Sim: é totalmente gratuito, sem conta, sem marcas de água e sem limites
          no número de ficheiros. O único limite prático é a memória do seu
          dispositivo. O site é suportado por anúncios discretos.
        </>
      ),
      text: "Sim. É totalmente gratuito, sem conta, sem marcas de água e sem limites no número de ficheiros. O único limite prático é a memória do seu dispositivo. O site é suportado por anúncios discretos.",
    },
    {
      q: "Comprimir vai reduzir a qualidade do áudio?",
      a: (
        <>
          MP3 e AAC são formatos com perdas, por isso algum detalhe inaudível é
          descartado para reduzir o ficheiro. A 128 kbps a maioria dos ouvintes
          não distingue a música do original, e 96 kbps é mais do que suficiente
          para voz ou podcasts. Escolha um bitrate mais alto para se manter mais
          perto da fonte.
        </>
      ),
      text: "MP3 e AAC são formatos com perdas, por isso algum detalhe inaudível é descartado para reduzir o ficheiro. A 128 kbps a maioria dos ouvintes não distingue a música do original, e 96 kbps é mais do que suficiente para voz ou podcasts. Escolha um bitrate mais alto para se manter mais perto da fonte.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: (
        <>
          Não há um limite fixo: depende da memória disponível no seu
          dispositivo. As músicas, podcasts e notas de voz habituais são
          processados em segundos. Os ficheiros WAV sem compressão muito grandes
          (de centenas de megabytes) também funcionam, mas usam mais memória e
          demoram mais porque o codificador é executado num único fio de execução
          no seu navegador.
        </>
      ),
      text: "Não há um limite fixo; depende da memória disponível no seu dispositivo. As músicas, podcasts e notas de voz habituais são processados em segundos. Os ficheiros WAV sem compressão muito grandes de centenas de megabytes também funcionam, mas usam mais memória e demoram mais porque o codificador é executado num único fio de execução no seu navegador.",
    },
    {
      q: "Que formatos posso comprimir e o que recebo em troca?",
      a: (
        <>
          Pode largar MP3, WAV, AAC, M4A, OGG ou FLAC. A ferramenta recodifica
          para MP3 (com o codificador LAME) ou AAC (.m4a) ao bitrate que
          escolher, de modo que a saída é um ficheiro amplamente compatível que
          se reproduz em todo o lado.
        </>
      ),
      text: "Pode largar MP3, WAV, AAC, M4A, OGG ou FLAC. A ferramenta recodifica para MP3 (com o codificador LAME) ou AAC (.m4a) ao bitrate que escolher, de modo que a saída é um ficheiro amplamente compatível que se reproduz em todo o lado.",
    },
    {
      q: "Devo escolher MP3 ou AAC?",
      a: (
        <>
          Ambos são excelentes. O MP3 é o formato com maior compatibilidade
          universal e uma opção segura para partilhar. O AAC costuma soar um pouco
          melhor ao mesmo bitrate e é o formato nativo dos dispositivos Apple e da
          maioria do streaming. Se tiver dúvidas, MP3 a 128 kbps é uma opção
          fiável para tudo.
        </>
      ),
      text: "Ambos são excelentes. O MP3 é o formato com maior compatibilidade universal e uma opção segura para partilhar. O AAC costuma soar um pouco melhor ao mesmo bitrate e é nativo dos dispositivos Apple e da maioria do streaming. Se tiver dúvidas, MP3 a 128 kbps é uma opção fiável para tudo.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê comprimir ficheiros de áudio?</h2>
      <p>
        Os ficheiros de áudio podem ser surpreendentemente pesados. Alguns
        minutos de WAV sem compressão podem chegar a dezenas de megabytes, um
        episódio de podcast com bitrate alto pode inflar uma transferência, e os
        álbuns FLAC sem perdas enchem um disco com facilidade. Quer vá enviar uma
        nota de voz por email, publicar um podcast, anexar uma música a uma
        mensagem ou poupar espaço no telemóvel, reduzir o ficheiro torna tudo
        mais rápido e barato de mover e armazenar, normalmente sem diferença
        audível com definições sensatas.
      </p>
      <p>
        Como esta ferramenta é executada inteiramente no seu dispositivo, é
        também a forma privada de o fazer. A maioria dos compressores de áudio
        online envia a sua gravação para um servidor remoto, processa-a aí e
        devolve-lha, o que significa que uma cópia da sua voz ou da sua música
        fica na máquina de outra pessoa. Aqui, o seu ficheiro é carregado para a
        memória, recodificado com uma versão de FFmpeg compilada em WebAssembly e
        devolvido diretamente a si. Nunca toca na rede.
      </p>
      <p>
        Esse design exclusivamente local tem vantagens práticas para além da
        privacidade. Não há esperas de envio ou transferência enquanto o ficheiro
        atravessa a internet, nem fila atrás dos trabalhos de outras pessoas, nem
        um limite de tamanho imposto por um servidor que não controla. A primeira
        vez que usa a ferramenta, esta descarrega o motor FFmpeg uma única vez;
        depois, o mesmo motor é reutilizado em cada ficheiro, e até as compressões
        repetidas se mantêm rápidas porque todo o trabalho acontece no seu próprio
        processador.
      </p>

      <h2 id="bitrate">Bitrate versus qualidade: como escolher</h2>
      <p>
        A maior alavanca sobre o tamanho de um ficheiro de áudio é o{" "}
        <strong>bitrate</strong>: o número de kilobits usados para armazenar cada
        segundo de som, escrito como kbps. Reduza o bitrate para metade e
        reduzirá o ficheiro aproximadamente para metade. A contrapartida é que os
        bitrates mais baixos descartam mais detalhe, por isso o objetivo é
        escolher o bitrate mais baixo no qual os seus ouvidos ainda não notam a
        diferença.
      </p>
      <p>
        O bitrate também interage com o tipo de áudio que está a codificar. A
        música densa e complexa &mdash; misturas carregadas, pratos, guitarras
        distorcidas &mdash; é mais difícil de comprimir e beneficia de um bitrate
        mais alto, enquanto uma simples gravação de voz se mantém nítida mesmo
        comprimida com força. Não há um único número &laquo;correto&raquo;; a
        melhor definição é a que soa limpa nos altifalantes ou auscultadores que
        os seus ouvintes vão realmente usar. Uma forma rápida de decidir é
        exportar o mesmo clipe a dois bitrates e compará-los seguidos. Use estes
        como pontos de partida:
      </p>
      <ul>
        <li>
          <strong>256 kbps</strong>: quase transparente para música; escolha este
          quando quiser o ficheiro mais pequeno que ainda soe essencialmente como
          o original.
        </li>
        <li>
          <strong>192 kbps</strong>: excelente qualidade para música com uma
          poupança de tamanho significativa face à fonte.
        </li>
        <li>
          <strong>128 kbps</strong>: o clássico todo-o-terreno. Para a maioria
          dos ouvintes é indistinguível da música com qualidade de CD em
          altifalantes e auscultadores de uso diário, com uma fração do tamanho.
        </li>
        <li>
          <strong>96 kbps</strong>: ideal para conteúdo falado como audiolivros,
          podcasts e notas de voz, onde não há música a preservar.
        </li>
      </ul>
      <p>
        Uma ressalva importante: tanto o MP3 como o AAC são formatos{" "}
        <strong>com perdas</strong>, e recodificar um ficheiro com perdas
        descarta sempre mais um pouco. Comprima sempre a partir da fonte de maior
        qualidade que tiver, e nunca recodifique um ficheiro que já tenha
        comprimido a um bitrate baixo aumentando-o para um mais alto: isso apenas
        infla o tamanho sem recuperar nada do detalhe perdido.
      </p>
      <p>
        Também ajuda saber o que implica na prática um tamanho de ficheiro
        pretendido. O bitrate é aproximadamente o tamanho do ficheiro dividido
        pela duração, por isso um clipe de um minuto a 128 kbps ronda um
        megabyte, e uma música típica de três a quatro minutos ao mesmo bitrate
        fica em cerca de três ou quatro megabytes. Se tiver um limite de tamanho
        rígido a cumprir &mdash; um limite de anexo de email, um formulário de
        envio ou uma aplicação de mensagens &mdash;, divida esse limite pela
        duração da faixa para estimar o bitrate que pode permitir-se e depois
        arredonde para baixo para o preset mais próximo.
      </p>

      <h2 id="formats">MP3, AAC, WAV e FLAC explicados</h2>
      <p>
        Os formatos de áudio dividem-se em dois grupos. Os formatos{" "}
        <strong>sem perdas</strong> como WAV e FLAC conservam cada amostra da
        gravação original: o WAV armazena-a sem compressão (enorme), enquanto o
        FLAC a empacota mais pequena sem perder nada. Os formatos{" "}
        <strong>com perdas</strong> como MP3, AAC e OGG eliminam de forma
        permanente o som que o ouvido humano é menos capaz de percecionar, que é
        como conseguem reduções de tamanho drásticas. Pode ler uma descrição
        técnica clara destes codecs no{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de codecs de áudio web da MDN
        </a>
        .
      </p>
      <p>
        É exatamente aqui que estão as maiores poupanças. Converter um ficheiro
        WAV ou FLAC para um MP3 ou AAC de 128 kbps reduz habitualmente o tamanho
        em <strong>80&ndash;90 %</strong>, porque passa de armazenar cada amostra
        para armazenar apenas o que consegue ouvir. Se vai conservar um arquivo
        principal, guarde o original sem perdas; mas para partilhar, fazer
        streaming ou enviar, uma cópia com perdas é quase sempre a opção certa.
        Quando precisar da máxima compatibilidade, escolha MP3; quando quiser o
        melhor som a um dado bitrate ou estiver no ecossistema Apple, escolha AAC
        (.m4a).
      </p>
      <p>
        Um ponto de confusão habitual é a diferença entre um contentor e um
        codec. Um ficheiro <strong>.m4a</strong> é um contentor que costuma
        alojar áudio codificado em AAC, enquanto <strong>.mp3</strong> é tanto um
        contentor como o seu codec. O OGG, por seu lado, é um contentor que com
        mais frequência transporta áudio Vorbis ou Opus. Esta ferramenta
        entrega-lhe sempre um resultado limpo em MP3 ou AAC seja o que for que
        introduzir, por isso não tem de se preocupar com extensões desajustadas
        nem com ficheiros que não abrem: a saída é exatamente o que o seu nome
        indica e reproduz-se igualmente em navegadores, telemóveis, sistemas de
        som de automóvel e software de edição.
      </p>

      <h2 id="tips">Dicas para obter os melhores resultados</h2>
      <ul>
        <li>
          <strong>Ajuste o bitrate ao conteúdo.</strong> Baixe as gravações de
          voz para 96 kbps e reserve 192&ndash;256 kbps para a música que quer
          manter perto da fonte.
        </li>
        <li>
          <strong>Não aumente a qualidade artificialmente.</strong> Recodificar
          um ficheiro de 96 kbps para 256 kbps não restaura a qualidade; apenas
          torna o ficheiro maior. Parta do melhor original que tiver.
        </li>
        <li>
          <strong>Vai extrair o áudio de um clipe?</strong> Se o seu som está
          preso dentro de um vídeo, reduza primeiro o vídeo com o{" "}
          <Link href="/pt/video-compressor">compressor de vídeo</Link>, que
          recodifica a faixa de áudio como parte do trabalho, e depois traga o
          áudio exportado para aqui para um controlo mais fino sobre o bitrate e o
          formato.
        </li>
        <li>
          <strong>Conserve um master sem perdas.</strong> Comprima cópias para
          partilhar, mas arquive o WAV ou FLAC original para poder reexportar
          sempre com outra qualidade mais tarde.
        </li>
        <li>
          <strong>Cuide do seu dispositivo com ficheiros enormes.</strong> Como a
          codificação é executada no seu navegador, um WAV de várias centenas de
          megabytes precisa de bastante memória. Num telemóvel, comprima um único
          ficheiro grande de cada vez e feche outros separadores se notar
          lentidão.
        </li>
      </ul>
    </>
  ),
};
