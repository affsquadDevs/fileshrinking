import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressor de vídeo — grátis e no navegador",
  metaDescription:
    "Comprima vídeo MP4, MOV, WebM, MKV e AVI no seu navegador com ffmpeg. Privado e no navegador: sem carregamentos, o seu vídeo nunca sai do seu dispositivo.",
  heading: "Compressor de vídeo",
  intro: (
    <>
      Comprima vídeo MP4, MOV, WebM, MKV e AVI diretamente no seu navegador com
      uma versão em WebAssembly do ffmpeg. Escolha uma predefinição de qualidade,
      largue o seu clipe e transfira um MP4 H.264 mais pequeno: o seu material
      nunca é carregado para parte alguma.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir um vídeo",
    description:
      "Comprima vídeo localmente no seu navegador com ffmpeg em quatro passos.",
    steps: [
      {
        name: "Adicione o seu vídeo",
        text: "Arraste e largue um ficheiro de vídeo na zona de carregamento ou clique para procurá-lo. Para uma experiência mais fluida, mantenha os ficheiros abaixo de cerca de 150 MB.",
      },
      {
        name: "Escolha uma predefinição de qualidade",
        text: "Escolha uma predefinição ou ajuste o controlo deslizante CRF. As predefinições mais baixas reduzem a resolução e o bitrate para obter ficheiros muito mais pequenos.",
      },
      {
        name: "Deixe-o codificar no seu dispositivo",
        text: "O ffmpeg volta a codificar o vídeo para H.264/MP4 localmente. Uma barra de progresso mostra o avanço: os clipes maiores ou mais longos demoram mais.",
      },
      {
        name: "Transfira o resultado",
        text: "Guarde o MP4 mais pequeno. Se o resultado não for mais pequeno, o seu ficheiro já era eficiente: experimente uma qualidade ou resolução mais baixa e volte a executá-lo.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus vídeos são carregados para um servidor?",
      a: (
        <>
          Não. Toda a compressão é executada dentro do seu navegador usando uma
          versão em WebAssembly do ffmpeg. O seu vídeo é carregado para a
          memória, volta a ser codificado na sua própria máquina e é-lhe
          devolvido diretamente. Nunca é carregado nada e não existe qualquer
          servidor que pudesse armazenar o seu material.
        </>
      ),
      text: "Não. Toda a compressão é executada dentro do seu navegador usando uma versão em WebAssembly do ffmpeg. O seu vídeo é carregado para a memória, volta a ser codificado na sua própria máquina e é-lhe devolvido. Não é carregado nada e não existe qualquer servidor que pudesse armazenar o seu material.",
    },
    {
      q: "O compressor de vídeo é mesmo grátis?",
      a: (
        <>
          Sim: é completamente grátis, sem registo, sem marcas de água e sem
          encargos por ficheiro. Como todo o trabalho acontece no seu
          dispositivo, não há custos de servidor a repercutir. O site é mantido
          com anúncios discretos.
        </>
      ),
      text: "Sim. É completamente grátis, sem registo, sem marcas de água e sem encargos por ficheiro. Como todo o trabalho acontece no seu dispositivo, não há custos de servidor a repercutir. O site é mantido com anúncios discretos.",
    },
    {
      q: "Comprimir vai reduzir a qualidade do meu vídeo?",
      a: (
        <>
          A compressão de vídeo tem perdas, por isso descarta-se algum detalhe.
          O controlo deslizante CRF determina o quão agressiva é: por volta de
          23-28 fica muito parecido com o original na maioria do material.
          Reduzir a resolução (por exemplo, de 4K para 1080p) poupa o máximo de
          espaço e mantém a imagem nítida a tamanhos de visualização normais.
        </>
      ),
      text: "A compressão de vídeo tem perdas, por isso descarta-se algum detalhe. O controlo deslizante CRF determina o quão agressiva é; por volta de 23-28 fica muito parecido com o original na maioria do material. Reduzir a resolução (por exemplo, de 4K para 1080p) poupa o máximo de espaço e mantém a imagem nítida a tamanhos normais.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: (
        <>
          Não há um limite rígido, mas como tudo é executado no seu navegador
          com ffmpeg de um único thread, recomendamos ficheiros abaixo de cerca
          de <strong>150&nbsp;MB</strong>. Os vídeos grandes ou longos consomem
          muita memória e podem ficar lentos, e podem falhar em telemóveis ou
          portáteis mais antigos com pouca RAM. Para clipes grandes, recorte-os
          primeiro ou comprima-os no navegador de um computador de secretária.
        </>
      ),
      text: "Não há um limite rígido, mas como tudo é executado no seu navegador com ffmpeg de um único thread recomendamos ficheiros abaixo de cerca de 150 MB. Os vídeos grandes ou longos consomem muita memória, podem ficar lentos e podem falhar em telemóveis ou portáteis mais antigos com pouca RAM. Para clipes grandes, recorte-os primeiro ou use o navegador de um computador de secretária.",
    },
    {
      q: "Porque é que a compressão de vídeo no navegador é mais lenta do que noutros sites?",
      a: (
        <>
          A maioria dos compressores online carrega o seu ficheiro para um
          potente servidor multinúcleo que faz a codificação por si. Esta
          ferramenta deliberadamente não faz isso: executa o ffmpeg localmente
          para que o seu vídeo continue privado. Um único thread do navegador é
          mais lento do que uma quinta de servidores, por isso uns minutos de
          material podem demorar um pouco. Essa contrapartida garante-lhe uma
          privacidade total.
        </>
      ),
      text: "A maioria dos compressores online carrega o seu ficheiro para um potente servidor multinúcleo que o codifica por si. Esta ferramenta deliberadamente não faz isso; executa o ffmpeg localmente para que o seu vídeo continue privado. Um único thread do navegador é mais lento do que uma quinta de servidores, por isso uns minutos de material podem demorar um pouco. Essa contrapartida garante-lhe uma privacidade total.",
    },
    {
      q: "Em que formato sai o vídeo comprimido?",
      a: (
        <>
          O resultado é <strong>vídeo H.264 num contentor MP4</strong>,
          independentemente de o seu ficheiro de entrada ser MOV, WebM, MKV ou
          AVI. O H.264/MP4 reproduz-se praticamente em qualquer telemóvel,
          navegador, televisor e aplicação de edição, por isso o resultado é a
          opção mais segura para partilhar e carregar.
        </>
      ),
      text: "O resultado é vídeo H.264 num contentor MP4, independentemente de o seu ficheiro de entrada ser MOV, WebM, MKV ou AVI. O H.264/MP4 reproduz-se praticamente em qualquer telemóvel, navegador, televisor e aplicação de edição, por isso o resultado é a opção mais segura para partilhar e carregar.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porquê comprimir vídeo no seu navegador?</h2>
      <p>
        O vídeo é, de longe, o tipo de média mais pesado com que a maioria das
        pessoas lida. Um minuto de material 4K gravado com o telemóvel pode
        ocupar centenas de megabytes, demasiado grande para enviar por email,
        incómodo de carregar e rápido a encher o armazenamento na nuvem e o rolo
        da câmara do telemóvel. Comprimir um clipe pode reduzir o seu tamanho
        para metade ou mais mantendo-o perfeitamente visualizável, o que
        facilita partilhá-lo em apps de conversação, anexá-lo a uma mensagem ou
        publicá-lo num site com limite de carregamento.
      </p>
      <p>
        O que distingue esta ferramenta é <strong>onde</strong> o trabalho
        acontece. O seu material em bruto contém muitas vezes momentos privados:
        família, a sua casa, o seu local de trabalho, documentos no ecrã. Um
        compressor online típico carrega tudo isso para um servidor remoto. Aqui,
        o vídeo é descodificado, volta a ser codificado e volta a ser guardado
        inteiramente dentro do separador do seu navegador, por isso nunca viaja
        pela internet. Depois de a página carregar, pode até desligar a sua
        ligação e continuará a comprimir.
      </p>
      <p>
        Há muitas razões do dia a dia para recorrer a um ficheiro mais pequeno.
        As apps de mensagens e os fornecedores de email limitam os anexos, muitas
        vezes a 25&nbsp;MB ou menos, por isso uma recodificação rápida faz a
        diferença entre uma mensagem que é enviada e outra que é rejeitada. As
        plataformas de cursos, os portais de candidatura a emprego e os
        formulários de contacto costumam rejeitar tudo o que ultrapasse alguns
        megabytes. E se está a arquivar anos de clipes de família, reduzir cada
        ficheiro para metade compensa muitas vezes em armazenamento que não terá
        de comprar.
      </p>

      <h2 id="how-it-works">
        Como funciona o codificador no navegador (e os seus limites)
      </h2>
      <p>
        Internamente, esta ferramenta executa o <strong>ffmpeg</strong>, o motor
        multimédia padrão da indústria, compilado para WebAssembly para que seja
        executado de forma nativa no seu navegador. Isso é realmente poderoso,
        mas traz consigo contrapartidas honestas que convém conhecer. A versão é{" "}
        <strong>de um único thread</strong>, por isso não consegue distribuir a
        codificação por todos os núcleos da sua CPU como fazem uma aplicação de
        secretária ou um servidor na nuvem. Como resultado, a compressão aqui é{" "}
        <strong>mais lenta</strong> do que um serviço baseado em carregamentos
        que corre numa máquina multinúcleo, e uns minutos de vídeo podem exigir
        alguma paciência.
      </p>
      <p>
        Está também <strong>limitada pela memória</strong>. Todo o ficheiro tem
        de caber na memória disponível do navegador enquanto é processado, por
        isso recomendamos manter as entradas abaixo de cerca de{" "}
        <strong>150&nbsp;MB</strong>. Os vídeos muito grandes ou muito longos
        podem ficar lentos e falhar por completo em telemóveis ou portáteis mais
        antigos com pouca RAM. Se chegar a um impasse, recorte o clipe à parte de
        que precisa, baixe a resolução ou execute-o no navegador de um computador
        de secretária com mais memória. Estas são limitações reais de fazer tudo
        localmente: a vantagem é que o seu vídeo continua a ser seu.
      </p>
      <p>
        Alguns hábitos tornam a codificação local muito mais agradável. Feche
        outros separadores e aplicações pesadas antes de começar para que o
        navegador tenha espaço para trabalhar. Mantenha o separador em primeiro
        plano: alguns navegadores abrandam os separadores em segundo plano, o que
        pode bloquear uma codificação longa. E dê-lhe tempo sem recarregar: a
        barra de progresso é real, e recarregar a meio da codificação deita fora
        o trabalho feito até esse momento.
      </p>

      <h2 id="settings">CRF, resolução e áudio: as três alavancas</h2>
      <p>
        Três definições determinam o tamanho final do seu ficheiro. A maior
        alavanca individual é a <strong>resolução</strong>. Reduzir de 4K para
        1080p, ou de 1080p para 720p, elimina um número enorme de píxeis de cada
        fotograma e costuma ser invisível, exceto se o vir num ecrã grande e de
        perto. Se só precisa de um clipe para um telemóvel ou para incorporar
        numa página web, reduzir a resolução vai encolhê-lo muito mais do que
        ajustar apenas a qualidade.
      </p>
      <p>
        A segunda alavanca é o <strong>CRF</strong> (Constant Rate Factor), o
        controlo de qualidade do H.264. Os números mais baixos significam mais
        qualidade e ficheiros maiores; os mais altos, ficheiros mais pequenos com
        uma compressão mais visível. Um CRF de <strong>23-28</strong> é o ponto
        ideal prático para a maioria do material. A terceira alavanca é o{" "}
        <strong>bitrate de áudio</strong>: a voz soa bem com um bitrate baixo,
        enquanto a música beneficia de mais. Se o seu vídeo for sobretudo pessoas
        a falar, reduzir o bitrate de áudio poupa espaço sem perda percetível. A
        saída predefinida é <strong>H.264 num contentor MP4</strong> precisamente
        porque se reproduz quase em todo o lado.
      </p>
      <ul>
        <li>
          <strong>Ajuste a resolução ao local onde será visto.</strong> Um clipe
          destinado a um telemóvel ou a um leitor web pequeno não ganha nada com
          4K; 720p ou 1080p ficam idênticos e pesam uma fração.
        </li>
        <li>
          <strong>Ajuste o CRF antes de qualquer outra coisa.</strong> Passar de
          23 para 26 muitas vezes reduz o tamanho para metade com uma perda de
          detalhe que a maioria dos espectadores nunca vai notar. Compare o
          resultado antes de ser mais agressivo.
        </li>
        <li>
          <strong>Não volte a comprimir um clipe já comprimido.</strong> Cada
          passagem com perdas descarta mais detalhe. Se a ferramenta informar que
          o resultado não é mais pequeno, o seu ficheiro já está codificado de
          forma eficiente: deixe-o como está em vez de o degradar mais.
        </li>
        <li>
          <strong>Recorte primeiro para grandes poupanças.</strong> Retirar os
          silêncios do início e do fim de um clipe elimina fotogramas inteiros, o
          que supera qualquer definição de qualidade para encolher o ficheiro.
        </li>
      </ul>

      <h2 id="codecs">Umas palavras rápidas sobre os codecs de vídeo</h2>
      <p>
        Um &laquo;ficheiro de vídeo&raquo; são, na verdade, duas coisas: um{" "}
        <strong>codec</strong> que codifica os píxeis (como H.264, VP9 ou AV1) e
        um formato <strong>contentor</strong> que o envolve (MP4, WebM, MOV,
        MKV). É por isso que o mesmo vídeo H.264 pode viver dentro de um MP4 ou de
        um MOV. Geramos H.264/MP4 porque tem a compatibilidade de hardware e
        software mais ampla de qualquer codec moderno: quase todos os
        dispositivos fabricados na última década o conseguem descodificar sem
        problemas. Pode ler mais sobre como os codecs e os contentores se
        encaixam n{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          o guia de codecs de vídeo web da MDN
        </a>
        .
      </p>
      <p>
        Esta página é o centro de todas as nossas ferramentas de vídeo. Se
        conhece o formato do seu ficheiro, as páginas dedicadas têm conselhos
        adaptados a ele: use o{" "}
        <Link href="/pt/compress-mp4">compressor de MP4</Link> para material que
        já esteja em MP4, ou o{" "}
        <Link href="/pt/compress-mov">compressor de MOV, WebM, MKV e AVI</Link>{" "}
        para clipes de câmaras, gravadores de ecrã e outras apps. Se só precisa
        de reduzir o som (um podcast, uma nota de voz ou um ficheiro de música),
        o <Link href="/pt/audio-compressor">compressor de áudio</Link> trata
        disso sem voltar a codificar nada de vídeo.
      </p>
    </>
  ),
};
