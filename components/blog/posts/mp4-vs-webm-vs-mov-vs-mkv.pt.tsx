import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "mp4-vs-webm-vs-mov-vs-mkv",
  title: "MP4 vs WebM vs MOV vs MKV: contentores e códecs",
  description:
    "Contentor ou códec? Conheça a diferença real entre MP4, WebM, MOV e MKV, que códecs contêm e qual escolher para partilhar, web ou edição.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Vídeo", "Formatos"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Se alguma vez se perguntou porque é que um <strong>.mp4</strong> se
        reproduz na perfeição no seu telemóvel enquanto outro se entrecorta ou
        simplesmente se recusa a abrir, a resposta quase nunca é a extensão do
        ficheiro. Um ficheiro de vídeo são na verdade duas coisas empilhadas: um{" "}
        <strong>contentor</strong> que envolve tudo e um ou vários{" "}
        <strong>códecs</strong> que fazem a compressão real no seu interior.
        Confundir os dois é a causa mais habitual da frustração de
        &laquo;mas se é um MP4, porque é que não se reproduz?&raquo;. Vamos
        desembaraçá-los de uma vez por todas.
      </p>

      <h2 id="container-vs-codec">
        Contentor vs códec: a caixa e o que está lá dentro
      </h2>
      <p>
        Um <strong>contentor</strong> (também chamado invólucro ou formato) é a
        estrutura organizativa do ficheiro. A sua função é albergar o fluxo de
        vídeo, um ou vários fluxos de áudio, legendas, marcadores de capítulos e
        metadados, e mantê-los todos sincronizados. MP4, WebM, MOV, MKV e AVI são
        todos contentores. A extensão do ficheiro que vê indica-lhe o contentor,
        não como o vídeo foi realmente codificado.
      </p>
      <p>
        Um <strong>códec</strong> (codificador-descodificador) é o algoritmo que
        comprime realmente os píxeis e o som em bruto até ficarem suficientemente
        pequenos para os armazenar e transmitir. Os códecs de vídeo mais comuns
        são <strong>H.264 (AVC)</strong>,{" "}
        <strong>H.265 (HEVC)</strong>, <strong>VP9</strong> e{" "}
        <strong>AV1</strong>. Os códecs de áudio mais comuns são{" "}
        <strong>AAC</strong>, <strong>Opus</strong> e <strong>MP3</strong>. O
        mesmo códec pode viver dentro de contentores diferentes, e um único
        contentor pode albergar muitos códecs diferentes. Como diz a referência
        da Mozilla, o formato do contentor é independente dos códecs usados para
        o conteúdo que transporta, que é precisamente por isso que ambos se
        confundem tantas vezes.
      </p>
      <p>
        Dois ficheiros podem terminar ambos em <strong>.mp4</strong> e, no
        entanto, comportar-se de forma completamente distinta porque um usa H.264
        (que se reproduz praticamente em todo o lado) e o outro usa H.265 (que
        não). Tenha presente esta distinção e tudo o resto encaixa.
      </p>

      <h2 id="mp4">MP4 &mdash; o padrão universal</h2>
      <p>
        <strong>MP4</strong> (MPEG-4 Part 14) foi padronizado pelo Moving
        Picture Experts Group (MPEG/ISO) e é o mais parecido com um formato de
        vídeo universal. O mais habitual é transportar vídeo{" "}
        <strong>H.264</strong> com áudio <strong>AAC</strong>, uma combinação
        compatível com praticamente todos os telemóveis, navegadores,
        televisores, editores e plataformas sociais lançados na última década e
        meia. Também pode conter H.265 ou AV1, mas esses são menos
        universalmente descodificáveis.
      </p>
      <p>
        <strong>Melhor caso de uso:</strong> partilhar, carregar e reproduzir de
        forma geral quando a compatibilidade importa mais do que espremer o
        último ponto percentual de tamanho de ficheiro. Se não tem a certeza de
        que formato usar, a resposta honesta por omissão é &laquo;MP4 com H.264 e
        AAC&raquo;. É precisamente por isso que o nosso{" "}
        <Link href="/pt/video-compressor">compressor de vídeo</Link> e o nosso{" "}
        <Link href="/pt/compress-mp4">compressor de MP4</Link> produzem MP4 com
        H.264: é o formato com menos probabilidades de surpreender a pessoa a
        quem o envia.
      </p>

      <h2 id="webm">WebM &mdash; criado para a web</h2>
      <p>
        <strong>WebM</strong> é um contentor aberto e isento de royalties
        apoiado pela Google e concebido especificamente para a web. Combina vídeo{" "}
        <strong>VP9</strong> (ou cada vez mais <strong>AV1</strong>) com áudio{" "}
        <strong>Opus</strong> ou Vorbis. Por não estar onerado por taxas de
        licenciamento, o WebM encaixou-se de forma natural nos elementos{" "}
        <code>&lt;video&gt;</code> do HTML5 e goza de bom suporte em navegadores
        modernos como o Chrome, o Firefox e o Edge.
      </p>
      <p>
        O VP9 e o AV1 costumam oferecer uma compressão notavelmente melhor do que
        o H.264 com a mesma qualidade visual, pelo que um ficheiro WebM pode ser
        significativamente mais pequeno do que um MP4 H.264 equivalente. A
        contrapartida é o alcance: o suporte fora dos navegadores é mais
        irregular; alguns televisores inteligentes antigos, certos reprodutores
        de hardware e algumas suites de edição talvez não abram o WebM sem
        problemas.
      </p>
      <p>
        <strong>Melhor caso de uso:</strong> vídeo servido diretamente num site
        ou aplicação web, onde controla o ambiente de reprodução e quer o
        download mais pequeno possível.
      </p>

      <h2 id="mov">MOV &mdash; o nativo da Apple</h2>
      <p>
        <strong>MOV</strong> é o contentor QuickTime criado pela Apple, e é o que
        obtém quando grava vídeo num iPhone, iPad ou Mac. Os dispositivos Apple
        modernos costumam gravar vídeo H.264 ou{" "}
        <strong>H.265 (HEVC)</strong> dentro de um invólucro MOV (ou às vezes um
        HEVC dentro de MP4). MOV e MP4 são, de facto, primos próximos: ambos
        descendem do formato de ficheiro QuickTime original da Apple, motivo pelo
        qual as suas estruturas internas são tão parecidas.
      </p>
      <p>
        O MOV reproduz-se sem falhas em todo o ecossistema Apple e nos editores
        profissionais, mas pode revelar-se menos cómodo noutros ambientes: uma
        máquina Windows sem o códec adequado, ou um formulário de carregamento web
        que espera um MP4, podem tropeçar. Se tem um MOV com HEVC acabado de sair
        de um iPhone e precisa de algo mais portável, reembrulhá-lo ou
        recodificá-lo para MP4 H.264 resolve a maioria das dores de cabeça de
        compatibilidade.
      </p>
      <p>
        <strong>Melhor caso de uso:</strong> capturar e editar em hardware Apple.
        Para partilhar para além desse mundo, converter costuma valer a pena: o
        nosso{" "}
        <Link href="/pt/compress-mov">compressor de MOV</Link> reduz o ficheiro e
        produz um MP4 que os seus destinatários conseguirão mesmo abrir.
      </p>

      <h2 id="mkv-avi">MKV e AVI &mdash; flexível e herdado</h2>
      <p>
        <strong>MKV</strong> (Matroska) é um contentor aberto famoso pela sua
        flexibilidade. Pode albergar praticamente qualquer códec, um número
        ilimitado de faixas de áudio e legendas, capítulos e metadados ricos num
        único ficheiro, o que o torna o favorito para filmes arquivados e
        conteúdo multilíngue. O senão é a compatibilidade: o MKV raramente tem
        suporte nativo em navegadores ou em muitos telemóveis e televisores sem um
        reprodutor dedicado como o VLC.
      </p>
      <p>
        <strong>AVI</strong> é o contentor muito mais antigo da Microsoft,
        proveniente dos anos noventa. Ainda o vai encontrar, mas carece de
        funcionalidades modernas (gere mal os códecs novos e a transmissão) e o
        melhor é convertê-lo para MP4 quando se deparar com um por aí.
      </p>
      <p>
        <strong>Melhor caso de uso para MKV:</strong> bibliotecas pessoais e
        arquivo em que quer agrupar muitas faixas sem nunca perder qualidade.
        Para partilhar no dia a dia, converta-o.
      </p>

      <h2 id="converting">O que significa realmente &laquo;converter&raquo;</h2>
      <p>
        Quando as pessoas dizem que querem &laquo;converter&raquo; um vídeo,
        costumam referir-se a uma de duas operações distintas, e a diferença
        importa enormemente para a velocidade e a qualidade:
      </p>
      <ul>
        <li>
          <strong>Remuxagem</strong> (remultiplexagem): mover os fluxos de áudio
          e vídeo existentes para um contentor diferente <em>sem</em> os
          recodificar. Se um MOV já contém vídeo H.264, remuxá-lo para um MP4 é
          rápido e <strong>sem perdas</strong>: os píxeis ficam intactos, só muda
          o invólucro.
        </li>
        <li>
          <strong>Recodificação</strong> (transcodificação): descodificar o vídeo
          e comprimi-lo de novo, muitas vezes com um códec diferente. Isto é mais
          lento, consome mais CPU e tem <strong>perdas</strong>: descarta um
          pouco de qualidade de cada vez. É necessário quando o códec de origem
          não é compatível com o seu destino (por exemplo, HEVC para H.264) ou
          quando quer tornar o ficheiro substancialmente mais pequeno.
        </li>
      </ul>
      <p>
        Como a recodificação tem perdas, aplica-se a mesma regra da{" "}
        <Link href="/pt/blog/lossy-vs-lossless-compression">
          compressão com perdas vs sem perdas
        </Link>
        : parta da sua fonte de máxima qualidade e codifique uma só vez. Evite
        recomprimir repetidamente um vídeo já comprimido, pois cada passagem
        agrava a perda.
      </p>

      <h2 id="why-mp4">Porque é que as nossas ferramentas produzem MP4 / H.264</h2>
      <p>
        As ferramentas de vídeo da FileShrinking padronizam-se em{" "}
        <strong>H.264 num contentor MP4 com áudio AAC</strong>. É uma escolha
        deliberada: é a combinação com mais probabilidades de se reproduzir em
        qualquer dispositivo, navegador ou plataforma onde o seu ficheiro venha a
        parar, e é a resposta mais segura quando não consegue prever o
        destinatário. Além disso, codifica com eficiência suficiente para se
        executar por completo dentro do seu navegador. Só precisa de tratar a
        banda sonora? O nosso{" "}
        <Link href="/pt/audio-compressor">compressor de áudio</Link> cobre AAC,
        MP3 e companhia em separado.
      </p>
      <p>
        E o fundamental: cada conversão acontece{" "}
        <strong>a 100% no seu dispositivo</strong>. O seu vídeo nunca é carregado
        para um servidor; a codificação executa-se no separador do navegador,
        pelo que mesmo as gravações grandes ou privadas ficam consigo. Todo o
        projeto é de código aberto sob a licença MIT, de modo que pode ler
        exatamente como funciona o processo em{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/affsquadDevs/fileshrinking
        </a>
        .
      </p>

      <h2 id="takeaway">A conclusão prática</h2>
      <p>
        Lembre-se do modelo da caixa e do seu conteúdo: a extensão dá nome ao{" "}
        <strong>contentor</strong>, mas o sucesso da reprodução costuma depender
        do <strong>códec</strong> que está lá dentro. Para partilhar com a
        audiência mais ampla possível, escolha <strong>MP4 com H.264 + AAC</strong>.
        Para vídeo que serve no seu próprio site,{" "}
        <strong>WebM (VP9/AV1)</strong> pode ser mais pequeno.{" "}
        <strong>MOV</strong> é o que os seus dispositivos Apple produzem, e{" "}
        <strong>MKV</strong> é a opção flexível de arquivo que muitas vezes
        precisa de ser convertida antes de viajar. Em caso de dúvida, converta
        para MP4 H.264, e faça-o uma só vez, a partir da melhor fonte que tiver.
      </p>
      <p>
        Para uma referência técnica mais aprofundada sobre como os navegadores
        gerem cada invólucro, o{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Containers"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia da MDN sobre formatos de contentor multimédia
        </a>{" "}
        é um ponto de partida fiável. Quando estiver pronto, largue um ficheiro no
        nosso{" "}
        <Link href="/pt/video-compressor">compressor de vídeo</Link> e veja-o
        encolher, mesmo no seu navegador e sem que nada saia do seu dispositivo.
      </p>
    </>
  );
}
