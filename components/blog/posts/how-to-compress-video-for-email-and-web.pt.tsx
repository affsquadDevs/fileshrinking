import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-video-for-email-and-web",
  title: "Como comprimir vídeo para email, web e redes sociais",
  description:
    "Definições práticas para reduzir vídeo ao limite de 25 MB do email, incorporações web rápidas e envios para redes: resolução, CRF, H.264 e corte, no seu navegador.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  authorId: "maya",
  tags: ["Vídeo", "Tutorial"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        O vídeo é a coisa mais pesada que a maioria das pessoas tenta partilhar.
        Um único minuto de gravação acabado de sair de um telemóvel ou de uma
        câmara pode ocupar centenas de megabytes: demasiado grande para anexar a
        um email, lento a carregar numa página web e com grande probabilidade de
        voltar a ser comprimido assim que uma plataforma social lhe toca. A boa
        notícia é que pode reduzir quase qualquer clip de forma drástica sem que
        fique com mau aspeto, desde que ajuste algumas definições ao destino do
        vídeo. Este guia percorre os três destinos mais comuns &mdash;email, web e
        redes sociais&mdash; e as alavancas exatas que o levam até lá.
      </p>

      <h2 id="why-video-is-big">Porque é que os ficheiros de vídeo ficam tão grandes</h2>
      <p>
        Um vídeo não passa de uma longa sequência de imagens reproduzidas
        rapidamente, mais o áudio. O tamanho depende de quatro coisas:{" "}
        <strong>resolução</strong> (quantos píxeis por fotograma),{" "}
        <strong>taxa de fotogramas</strong> (fotogramas por segundo),{" "}
        <strong>duração</strong> (quantos segundos) e <strong>bitrate</strong>{" "}
        (quantos bits o codificador gasta por segundo de gravação). Um clip em 4K
        a 60 fps tem cerca de nove vezes mais píxeis do que um em 1080p a 30 fps
        antes de mudar fosse o que fosse. É por isso que a coisa mais eficaz que
        pode fazer é reduzir a resolução e a duração: está a eliminar dados, não
        apenas a comprimi-los.
      </p>
      <p>
        O bitrate é onde acontece a compressão real. Os codecs modernos
        descartam o detalhe que o seu olho tem menos probabilidades de sentir
        falta, por isso um bitrate mais baixo significa um ficheiro mais pequeno
        com alguma perda de fidelidade. A arte está em encontrar o bitrate que
        seja suficientemente pequeno para o seu destino, mas suficientemente alto
        para que ninguém repare.
      </p>

      <h2 id="resolution-and-trimming">Comece pela resolução e pela duração</h2>
      <p>
        Antes de mexer nas definições do codificador, pergunte a si próprio se
        precisa mesmo de cada píxel e de cada segundo. Reduzir a resolução é a
        alteração de maior impacto que pode fazer:
      </p>
      <ul>
        <li>
          <strong>De 4K para 1080p</strong> reduz o número de píxeis para um
          quarto. Para o email e para quase todas as incorporações web, 1080p é
          mais do que suficiente.
        </li>
        <li>
          <strong>De 1080p para 720p</strong> volta a reduzi-lo grosso modo para
          metade e é perfeito para gravações de ecrã rápidas, demonstrações e
          qualquer coisa que vá ser reproduzida numa janela pequena.
        </li>
        <li>
          <strong>Cortar</strong> o silêncio do início e do fim, ou ficar apenas
          com a parte que interessa, reduz o tamanho do ficheiro de forma linear.
          Um clip de 30 segundos pesa metade de um de 60 com a mesma qualidade.
        </li>
      </ul>
      <p>
        Se só se lembrar de uma coisa, que seja esta: reduzir um clip de 4K de 2
        minutos para um resumo de 720p de 40 segundos fará mais pelo tamanho do
        seu ficheiro do que qualquer ajuste de bitrate.
      </p>

      <h2 id="crf-and-bitrate">CRF e bitrate: controlar a qualidade</h2>
      <p>
        Depois de fixadas a resolução e a duração, controla a qualidade com um
        bitrate-alvo ou com um fator de qualidade chamado <strong>CRF</strong>{" "}
        (Constant Rate Factor, fator de taxa constante). O CRF indica ao
        codificador que aponte para uma qualidade visual constante e gaste o
        bitrate que for preciso, fotograma a fotograma: as cenas com muito
        movimento recebem mais bits e as estáticas menos. Para H.264, o CRF vai
        de cerca de 0 (sem perdas, enorme) a 51 (minúsculo, feio), e os números
        mais baixos significam melhor qualidade:
      </p>
      <ul>
        <li>
          <strong>CRF 18&ndash;20:</strong> visualmente quase sem perdas,
          ficheiros maiores; ideal para masters ou vídeo web onde a qualidade é
          primordial.
        </li>
        <li>
          <strong>CRF 23:</strong> o valor predefinido habitual; um equilíbrio
          sólido entre tamanho e qualidade para a maioria dos usos em web e
          redes.
        </li>
        <li>
          <strong>CRF 26&ndash;28:</strong> notavelmente mais pequeno, com uma
          ligeira suavização; útil quando tem de respeitar um limite de tamanho
          rigoroso como o teto de um email.
        </li>
      </ul>
      <p>
        Quando tem um teto rigoroso &mdash;por exemplo, um anexo de email de 25
        MB&mdash; um bitrate-alvo é mais previsível do que o CRF. O cálculo
        aproximado: um tamanho de ficheiro-alvo em megabits (multiplique os MB por
        8) dividido pela duração em segundos dá-lhe o seu orçamento total de
        bitrate. Reserve cerca de 128 kbps para o áudio e dê o resto ao vídeo.
        Para um teto de 25 MB num clip de 60 segundos, isso são cerca de 3,3 Mbps
        no total, de sobra para um 720p limpo.
      </p>

      <h2 id="codec-h264">Escolha H.264 por compatibilidade</h2>
      <p>
        A escolha do codec decide se o seu vídeo se reproduz em todo o lado ou
        falha em silêncio. <strong>H.264</strong> (também chamado AVC) é, de
        longe, a opção mais segura: reproduz-se em todos os navegadores modernos,
        nas pré-visualizações dos clientes de correio, em telemóveis e nas
        plataformas sociais, e combina-se com áudio AAC dentro de um contentor
        MP4. Os codecs mais recentes como H.265/HEVC, VP9 e AV1 comprimem melhor
        &mdash;por vezes de 30 a 50&nbsp;% mais pequenos com a mesma
        qualidade&mdash; mas o suporte é irregular, e quem receber o email num
        dispositivo antigo pode não ver absolutamente nada. Para partilhar,
        fique-se pelo H.264 num MP4, a menos que controle exatamente como o
        ficheiro vai ser reproduzido.
      </p>
      <p>
        Se quiser perceber que codecs um determinado navegador suporta realmente e
        porquê, a MDN mantém uma referência exaustiva e atualizada no seu{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guia de codecs de vídeo para a web
        </a>
        . É a melhor fonte única para decidir quando é seguro ir além do H.264.
      </p>

      <h2 id="targets">Definições consoante o destino</h2>
      <p>
        É assim que as peças se encaixam para cada destino habitual.
      </p>
      <ul>
        <li>
          <strong>Anexos de email:</strong> a maioria dos fornecedores limita os
          anexos a cerca de 25 MB (tanto o Gmail como o Outlook andam perto desse
          valor). Aponte para 720p, H.264/MP4 e corte sem dó. Se ainda assim
          ultrapassar, baixe para CRF 26&ndash;28 ou fixe um bitrate-alvo com o
          cálculo acima. Para qualquer coisa com mais de uns minutos, uma
          ligação costuma ser mais simpática do que um anexo.
        </li>
        <li>
          <strong>Incorporação web:</strong> a velocidade de carregamento da
          página importa, por isso mantenha os ficheiros leves: 1080p a CRF 23 é
          um ponto ideal, e 720p para fundos ou ciclos decorativos. Use MP4/H.264
          como base para que o vídeo se reproduza sem necessidade de um formato
          alternativo.
        </li>
        <li>
          <strong>Plataformas sociais:</strong> o Instagram, o TikTok, o X e
          outras recodificam tudo o que enviar, por isso não faz sentido enviar
          um master enorme: vai ser comprimido na mesma. Envie um ficheiro H.264
          em 1080p limpo com um bitrate razoável e deixe a plataforma fazer a sua
          passagem. Ajustar-se à proporção de imagem da plataforma (vertical 9:16
          para Reels e TikTok) importa mais do que o tamanho em bruto.
        </li>
      </ul>

      <h2 id="in-browser">Comprimir de forma privada, no seu navegador</h2>
      <p>
        Não precisa de carregar a sua gravação para o servidor de um
        desconhecido para a comprimir. O{" "}
        <Link href="/pt/video-compressor">compressor de vídeo</Link> da
        FileShrinking corre inteiramente no seu navegador: o seu vídeo é
        processado no seu próprio dispositivo e nunca sai dele, o que importa para
        tudo o que seja pessoal ou confidencial. Há também ferramentas dedicadas
        para os formatos mais comuns:{" "}
        <Link href="/pt/compress-mp4">comprimir MP4</Link> para o contentor H.264
        universal e <Link href="/pt/compress-mov">comprimir MOV</Link> para
        gravações acabadas de sair de um iPhone ou de uma câmara. Se um clip for
        sobretudo áudio que por acaso vem num invólucro de vídeo, o{" "}
        <Link href="/pt/audio-compressor">compressor de áudio</Link> pode reduzir
        a faixa de som por si só.
      </p>
      <p>
        A única contrapartida honesta: a codificação no navegador usa a CPU do seu
        computador, por isso é <strong>mais lenta do que um serviço na
        nuvem</strong> para clips longos ou de alta resolução, e um ficheiro muito
        grande pode demorar um pouco. Em troca da privacidade de nunca carregar o
        seu vídeo, a maioria das pessoas considera que essa espera vale bem a
        pena. Parta do seu original com a máxima qualidade, reduza a resolução e
        corte primeiro, escolha H.264 e só então afine o CRF ou o bitrate: faça
        isso e atingirá qualquer objetivo de email, web ou redes com margem de
        sobra.
      </p>
    </>
  );
}
