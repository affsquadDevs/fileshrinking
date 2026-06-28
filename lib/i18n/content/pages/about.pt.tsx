import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Acerca do FileShrinking",
  metaDescription:
    "Saiba quem cria o FileShrinking e porque o nosso compressor 100% no navegador mantém as suas imagens, PDF, vídeo e áudio no seu dispositivo.",
  title: "Acerca do FileShrinking",
  intro: (
    <>
      O FileShrinking é um conjunto de ferramentas gratuito e centrado na
      privacidade para comprimir imagens, PDF, vídeo e áudio. Cada ficheiro é
      processado por completo no seu navegador, por isso nada do que abrir aqui é
      alguma vez enviado para um servidor.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2>A nossa missão</h2>
      <p>
        O FileShrinking existe para que a compressão de ficheiros seja realmente
        gratuita, realmente privada e esteja ao alcance de qualquer pessoa que
        tenha um navegador web. Os ficheiros grandes tornam os sites mais lentos,
        saturam as caixas de entrada de e-mail e enchem o armazenamento do
        telemóvel e os planos na nuvem. Reduzi-los não deveria exigir instalar
        software, criar uma conta, pagar uma subscrição nem entregar os seus
        documentos pessoais a uma empresa que nunca conheceu. O nosso objetivo é
        simples: oferecer-lhe uma compressão de nível profissional que corre no
        seu próprio dispositivo, não custa nada e respeita a sua privacidade
        desde a conceção.
      </p>

      <h2>Porque é importante o &laquo;100% no seu navegador&raquo;</h2>
      <p>
        A maioria dos compressores online funciona enviando o seu ficheiro para
        um servidor remoto, processando-o aí e devolvendo-lhe o resultado. Isso
        significa que uma cópia da sua foto, contrato ou vídeo caseiro fica no
        computador de outra pessoa, pelo menos temporariamente. O FileShrinking
        funciona de outra forma. Quando escolhe um ficheiro, este é carregado na
        memória do seu navegador e comprimido localmente usando compilações em
        WebAssembly de codificadores de código aberto e de confiança como o
        MozJPEG, o OxiPNG e o FFmpeg. O ficheiro final é devolvido diretamente a
        si.
      </p>
      <p>
        O resultado prático é que <strong>os seus ficheiros fisicamente nunca
        saem do seu dispositivo</strong>. Não há nada que possamos armazenar,
        nada que possamos divulgar numa violação de dados e nada que possamos
        vender ou partilhar. Pode comprová-lo por si próprio: abra qualquer uma
        das nossas ferramentas, desligue-se da internet e a compressão continuará
        a funcionar, porque todo o trabalho pesado acontece na sua máquina. Esse
        modelo exclusivamente local é a base da confiança que lhe pedimos que
        deposite em nós, e não é um slogan de marketing do qual possamos
        desdizer-nos discretamente mais tarde.
      </p>

      <h2>O que criamos</h2>
      <p>
        O FileShrinking é um conjunto crescente de ferramentas focadas numa única
        tarefa. O nosso{" "}
        <Link href="/pt/image-compressor">compressor de imagens</Link> suporta
        JPEG, PNG, WebP, AVIF e GIF, com ferramentas complementares para
        converter e redimensionar. Juntamente com as ferramentas de imagem
        oferecemos um compressor de PDF que recomprime as imagens incorporadas
        nos documentos, compressão de vídeo no navegador para formatos como MP4,
        MOV, WebM, MKV e AVI, e um compressor de áudio para MP3, WAV e AAC. Todas
        as ferramentas partilham os mesmos princípios: sem envios, sem registo,
        sem marcas de água e sem limites artificiais no número ou tamanho dos
        ficheiros para além do que a memória do seu próprio dispositivo permitir.
      </p>

      <h2>Como investigamos e redigimos os nossos guias</h2>
      <p>
        Para além das ferramentas, publicamos guias práticos e artigos
        explicativos no nosso{" "}
        <Link href="/pt/blog">blog</Link> sobre como funcionam realmente os
        formatos de compressão e como obter o melhor equilíbrio entre qualidade e
        tamanho. Levamos a precisão a sério. O nosso processo editorial parte de
        fontes primárias e autorizadas: as próprias especificações dos formatos,
        a documentação da plataforma web da{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>{" "}
        e do{" "}
        <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
          W3C
        </a>
        , e a documentação dos codificadores de código aberto nos quais as nossas
        ferramentas se baseiam. Confrontamos as afirmações com o comportamento
        real das ferramentas que disponibilizamos, citamos as nossas fontes para
        que as possa verificar e revemos os artigos quando os padrões ou a
        compatibilidade dos navegadores mudam. Quando temos dúvidas, dizemo-lo em
        vez de adivinhar.
      </p>

      <h2>Quem mantém o FileShrinking</h2>
      <p>
        O FileShrinking é criado e mantido por uma pequena equipa independente de
        programadores web a quem importam o desempenho e a privacidade na web
        moderna. Não dispomos de capital de risco nem temos um negócio de dados;
        o site mantém-se gratuito graças a publicidade discreta e claramente
        identificada.
      </p>
      <p>
        Os nossos responsáveis provêm de áreas de desempenho web e processamento
        de média, e passaram anos a ajudar equipas a publicar páginas mais leves
        e rápidas sem sacrificar a qualidade. A equipa orienta a direção técnica
        do projeto, revê cada ferramenta antes do seu lançamento e é responsável
        pelos padrões editoriais descritos acima. Pode contactar-nos diretamente
        em{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2>Publicidade, análises e o seu consentimento</h2>
      <p>
        Para manter o FileShrinking gratuito, exibimos publicidade e usamos
        análises para perceber quais as ferramentas que são úteis. Estes serviços
        de terceiros estão{" "}
        <strong>sujeitos ao seu consentimento</strong>: os scripts de publicidade
        e análises só são carregados depois de o aceitar, e pode recusá-los e
        continuar a usar todas as ferramentas. E, o mais importante: nada disto
        altera a forma como os seus ficheiros são tratados — a publicidade e as
        análises nunca recebem os seus documentos, fotos, vídeo ou áudio, porque
        estes nunca saem do seu dispositivo, à partida. Para conhecer todos os
        detalhes, consulte as nossas políticas de privacidade e de cookies
        publicadas.
      </p>

      <h2>Entre em contacto</h2>
      <p>
        As perguntas, os relatórios de erros ou as ideias sobre a próxima
        ferramenta que devíamos criar são sempre bem-vindos. Visite a nossa{" "}
        <Link href="/pt/contact">página de contacto</Link> ou escreva-nos para{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
        Lemos tudo e usamos os seus comentários para decidir o que melhorar.
      </p>
    </>
  ),
};
