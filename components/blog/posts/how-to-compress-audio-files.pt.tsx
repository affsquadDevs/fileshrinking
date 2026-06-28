import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-audio-files",
  title: "Como comprimir ficheiros de áudio sem destruir o som",
  description:
    "Reduza ficheiros MP3, AAC, FLAC e WAV de forma inteligente: escolha o bitrate certo para música ou voz, perceba a frequência de amostragem e mantenha o áudio limpo.",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  authorId: "team",
  tags: ["Áudio", "Tutorial"],
  readingMinutes: 6,
};

export default function Content() {
  return (
    <>
      <p>
        Os ficheiros de áudio têm tendência a crescer descontroladamente. Uma
        música de três minutos extraída para <strong>WAV</strong> pode
        facilmente ultrapassar os 30 MB, uma entrevista gravada de uma hora pode
        passar do gigabyte, e as aplicações de correio e mensagens começam a
        rejeitar os anexos muito antes disso. A boa notícia é que o áudio
        comprime-se extremamente bem &mdash; se perceber alguns ajustes
        fundamentais. Acerte neles e poderá reduzir um ficheiro entre
        80&ndash;90% sem que os seus ouvidos notem qualquer diferença. Falhe e
        acabará com um áudio metálico, com remoinhos e que soa como se estivesse
        debaixo de água. Este guia percorre as decisões que realmente importam.
      </p>

      <h2 id="why-wav-is-huge">Porque é que os ficheiros WAV e AIFF são tão grandes</h2>
      <p>
        O WAV (e o seu primo da Apple, o AIFF) armazena o áudio como amostras PCM
        em bruto e <strong>sem compressão</strong>. Nada é descartado e nada é
        compactado, por isso o tamanho é totalmente previsível a partir de três
        números: a frequência de amostragem, a profundidade de bits e o número de
        canais. A qualidade CD &mdash; 44 100 amostras por segundo, 16 bits por
        amostra, dois canais &mdash; equivale a cerca de{" "}
        <strong>10 MB por minuto</strong>. É por isso que um álbum completo em
        WAV pode ocupar várias centenas de megabytes, enquanto o mesmo álbum em
        MP3 cabe num telemóvel com espaço de sobra.
      </p>
      <p>
        O áudio sem compressão é a opção correta enquanto está a{" "}
        <em>gravar e a editar</em>, porque cada edição e cada efeito se mantêm
        impecáveis. Mas é uma péssima opção para partilhar ou armazenar o
        resultado final. No momento em que termina a edição, vale a pena
        convertê-lo para um formato comprimido.
      </p>

      <h2 id="lossy-vs-lossless">Com perda vs sem perda: MP3/AAC vs FLAC</h2>
      <p>
        A compressão de áudio existe em dois tipos. Os formatos{" "}
        <strong>sem perda</strong> como o FLAC e o ALAC reduzem o ficheiro
        mantendo intacta cada amostra original &mdash; descodifique um FLAC e
        recupera uma cópia idêntica byte a byte do original. Costumam cortar o
        tamanho entre 40&ndash;60%, de modo que esse WAV de 10 MB por minuto
        passa para cerca de 5&ndash;6 MB por minuto. Use formatos sem perda
        quando arquivar masters ou quando lhe importar uma fidelidade perfeita.
      </p>
      <p>
        Os formatos <strong>com perda</strong> como o MP3 e o AAC vão muito mais
        longe, descartando permanentemente o som que é pouco provável que o
        ouvido humano percecione &mdash; frequências mascaradas por outras mais
        fortes, detalhe acima do seu alcance auditivo, e assim por diante. É
        assim que a codificação psicoacústica reduz uma música a um décimo do seu
        tamanho original. A contrapartida é que os dados descartados
        desaparecem para sempre, por isso voltar a codificar repetidamente um
        ficheiro com perda degrada-o lentamente. Se quiser o modelo mental
        completo, consulte o nosso guia sobre{" "}
        <Link href="/pt/blog/lossy-vs-lossless-compression">
          compressão com perda vs sem perda
        </Link>
        .
      </p>
      <p>
        Entre as duas opções modernas com perda, o <strong>AAC</strong>{" "}
        geralmente soa um pouco melhor do que o <strong>MP3</strong> ao mesmo
        bitrate e é a opção predefinida no Apple Music, no YouTube e na maioria
        do streaming. O MP3 continua a ganhar em compatibilidade universal
        &mdash; se precisar de um ficheiro que reproduza literalmente em qualquer
        dispositivo fabricado nos últimos 25 anos, o MP3 é a aposta segura.
      </p>

      <h2 id="bitrate">O ajuste que mais importa: o bitrate</h2>
      <p>
        Para o áudio com perda, o <strong>bitrate</strong> &mdash; medido em
        kilobits por segundo (kbps) &mdash; é a maior alavanca de controlo tanto
        da qualidade como do tamanho. Um bitrate mais alto significa mais dados
        conservados por cada segundo de som, o que se traduz em melhor qualidade
        e num ficheiro maior. O truque está em ajustar o bitrate ao conteúdo.
      </p>
      <p>
        Para a <strong>música</strong>, onde quer fidelidade de gama completa:
      </p>
      <ul>
        <li>
          <strong>128 kbps</strong> &mdash; aceitável para ouvir de forma casual
          com auriculares; o mais baixo a que deve descer com música.
        </li>
        <li>
          <strong>192 kbps</strong> &mdash; um ponto ideal para o dia a dia; a
          maioria das pessoas não consegue distingui-lo do original de forma
          fiável.
        </li>
        <li>
          <strong>256&ndash;320 kbps</strong> &mdash; praticamente transparente,
          a opção certa se tiver bons auscultadores ou um ouvido exigente.
        </li>
      </ul>
      <p>
        Para a <strong>voz</strong> &mdash; podcasts, notas de voz, audiolivros,
        entrevistas &mdash; pode descer muito mais, porque a voz humana ocupa uma
        gama de frequências estreita:
      </p>
      <ul>
        <li>
          <strong>64 kbps</strong> &mdash; perfeitamente claro para uma única
          voz; ideal para podcasts falados.
        </li>
        <li>
          <strong>96 kbps</strong> &mdash; uma margem confortável para voz com
          alguma música de fundo ou dois interlocutores.
        </li>
      </ul>
      <p>
        Codificar um podcast de uma hora a 64 kbps em vez de 192 kbps leva-o de
        cerca de 86 MB para aproximadamente 29 MB &mdash; um terço do tamanho,
        sem qualquer perda significativa de clareza para a voz.
      </p>

      <h2 id="sample-rate-channels">Frequência de amostragem, profundidade de bits e mono vs estéreo</h2>
      <p>
        Outros três ajustes podem reduzir ainda mais o tamanho quando usados de
        forma adequada. A <strong>frequência de amostragem</strong> é quantas
        vezes por segundo o áudio é medido. Os 44,1 kHz (CD) e os 48 kHz (vídeo)
        captam toda a gama da audição humana, por isso raramente há motivo para
        subir mais numa exportação final. Pode reduzir sem problemas uma nota de
        voz do telemóvel para 22,05 kHz, mas deixe a música em 44,1 kHz ou 48
        kHz.
      </p>
      <p>
        Os <strong>canais</strong> também importam. Uma gravação em mono ocupa
        metade de uma em estéreo. Se a sua fonte for um único narrador ou uma
        nota de voz em mono, exportar em mono é uma poupança gratuita sem
        qualquer custo de qualidade. Reserve o estéreo para a música e para tudo
        o que tenha uma imagem esquerda/direita real.
      </p>
      <p>
        Para uma referência exaustiva e orientada para o navegador sobre o que
        faz cada codec e como gerem estes parâmetros, o{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia da MDN sobre codecs de áudio web
        </a>{" "}
        é a fonte de referência.
      </p>

      <h2 id="converting">Converter FLAC ou WAV para MP3 ou AAC para partilhar</h2>
      <p>
        A tarefa mais comum no mundo real é pegar num ficheiro grande sem perda e
        transformá-lo em algo suficientemente pequeno para enviar por correio,
        carregar ou publicar. A receita é simples:
      </p>
      <ul>
        <li>Comece pela sua fonte de máxima qualidade (o master em WAV ou FLAC).</li>
        <li>Escolha AAC para a melhor qualidade por byte, ou MP3 para a máxima compatibilidade.</li>
        <li>Escolha um bitrate que se ajuste ao conteúdo: ~192 kbps para música, ~64&ndash;96 kbps para voz.</li>
        <li>Defina mono para gravações de uma única voz; deixe estéreo para a música.</li>
        <li>Mantenha a frequência de amostragem em 44,1 ou 48 kHz para música; 22,05 kHz é suficiente para voz.</li>
      </ul>
      <p>
        Como a conversão de sem perda para com perda só acontece uma vez,
        conserva toda a qualidade possível e mesmo assim obtém um ficheiro
        drasticamente mais pequeno. Mas lembre-se de guardar o master original
        &mdash; nunca volte a comprimir um ficheiro que já tem perda quando pode
        partir da fonte.
      </p>

      <h2 id="try-it">Faça-o de forma privada no seu navegador</h2>
      <p>
        Não precisa de instalar nada nem de carregar as suas gravações para um
        servidor qualquer para as comprimir. O{" "}
        <Link href="/pt/audio-compressor">compressor de áudio</Link> da
        FileShrinking executa-se inteiramente no seu navegador, por isso os seus
        ficheiros nunca saem do seu dispositivo &mdash; nunca é carregado nada.
        Solte um WAV, FLAC, MP3 ou AAC, escolha o seu bitrate e descarregue o
        resultado. Se o seu áudio for, na verdade, parte de um clipe que vai
        partilhar, a mesma abordagem centrada na privacidade aplica-se ao nosso{" "}
        <Link href="/pt/video-compressor">compressor de vídeo</Link>. Experimente
        com um par de ajustes de bitrate e confie nos seus próprios ouvidos
        &mdash; como tudo fica local, não há qualquer risco em experimentar.
      </p>
    </>
  );
}
