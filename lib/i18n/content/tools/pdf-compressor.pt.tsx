import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Compressor de PDF — Gratuito, privado, no navegador",
  metaDescription:
    "Comprima ficheiros PDF no seu navegador. Recomprima as imagens incorporadas para reduzir PDF digitalizados e com muitas imagens, sem enviar nada nem registar-se.",
  heading: "Compressor de PDF",
  intro: (
    <>
      Reduza o tamanho dos PDF digitalizados e com muitas imagens diretamente no
      seu navegador. Esta ferramenta recomprime as imagens incorporadas no seu
      documento e elimina os metadados desnecessários, de modo que o ficheiro
      fica mais pequeno enquanto o seu texto se mantém nítido, e nada é enviado.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Como comprimir um PDF",
    description:
      "Reduza um PDF localmente no seu navegador em quatro passos, sem enviar nada.",
    steps: [
      {
        name: "Adicione o seu PDF",
        text: "Arraste e largue o seu PDF na zona de carregamento ou clique para procurá-lo. O ficheiro é lido diretamente no seu navegador: nunca é enviado para lado nenhum.",
      },
      {
        name: "Escolha um nível de compressão",
        text: "Selecione uma predefinição ou ajuste com precisão o controlo de qualidade de imagem. Equilibrado serve para a maioria dos documentos; escolha Mais pequeno para a maior poupança em digitalizações e ficheiros com muitas fotografias.",
      },
      {
        name: "Deixe processar no seu dispositivo",
        text: "As imagens incorporadas são reduzidas de resolução e recodificadas como JPEG, e os metadados são eliminados, tudo localmente. Verá o tamanho original, o novo tamanho e a percentagem poupada.",
      },
      {
        name: "Descarregue o PDF mais pequeno",
        text: "Guarde o seu ficheiro otimizado. Se o resultado for maior do que o seu original, a ferramenta mantém o original para que nunca obtenha um ficheiro maior.",
      },
    ],
  },
  faqs: [
    {
      q: "Os meus ficheiros PDF são enviados para um servidor?",
      a: (
        <>
          Não. Cada PDF é aberto e reescrito por completo no seu navegador
          usando pdf-lib e um codificador de imagens WebAssembly. Nada é
          enviado: não existe nenhum servidor para onde enviar o seu documento.
          Pode até desligar-se da internet depois de a página carregar e
          continuará a funcionar.
        </>
      ),
      text: "Não. Cada PDF é aberto e reescrito por completo no seu navegador usando pdf-lib e um codificador de imagens WebAssembly. Nada é enviado e não existe nenhum servidor para onde enviar o seu documento. Pode desligar-se da internet depois de a página carregar e continuará a funcionar.",
    },
    {
      q: "O compressor de PDF é mesmo gratuito?",
      a: (
        <>
          Sim: é completamente gratuito, sem registo, sem marcas de água
          carimbadas nas suas páginas e sem limites diários de ficheiros ou
          páginas. O único limite prático é a memória do seu dispositivo. O site
          é mantido com anúncios discretos.
        </>
      ),
      text: "Sim. É completamente gratuito, sem registo, sem marcas de água nas suas páginas e sem limites diários de ficheiros ou páginas. O único limite prático é a memória do seu dispositivo. O site é mantido com anúncios discretos.",
    },
    {
      q: "Comprimir vai reduzir a qualidade do meu PDF?",
      a: (
        <>
          Só afeta as imagens incorporadas, que são reduzidas de resolução e
          recodificadas como JPEG; o texto e os gráficos vetoriais mantêm-se
          nítidos e totalmente selecionáveis. As definições de maior qualidade
          de imagem conservam as fotografias nítidas, enquanto as mais baixas
          poupam mais espaço. Os PDF digitalizados (que na realidade são
          imagens) mostrarão o compromisso mais visível.
        </>
      ),
      text: "Só afeta as imagens incorporadas, que são reduzidas de resolução e recodificadas como JPEG; o texto e os gráficos vetoriais mantêm-se nítidos e selecionáveis. As definições de maior qualidade de imagem conservam as fotografias nítidas, enquanto as mais baixas poupam mais espaço. Os PDF digitalizados, que na realidade são imagens, mostram o compromisso mais visível.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: (
        <>
          Não há um limite rígido: depende de quanta memória livre o seu
          dispositivo tem. Os documentos típicos de alguns megabytes são
          instantâneos, e os PDF digitalizados grandes de 50 a 100 MB costumam
          funcionar num portátil moderno. Os ficheiros muito grandes usam mais
          RAM porque todo o PDF é mantido em memória enquanto é reescrito.
        </>
      ),
      text: "Não há um limite rígido; depende de quanta memória livre o seu dispositivo tem. Os documentos típicos de alguns megabytes são instantâneos, e os PDF digitalizados grandes de 50 a 100 MB costumam funcionar num portátil moderno. Os ficheiros muito grandes usam mais RAM porque todo o PDF é mantido em memória enquanto é reescrito.",
    },
    {
      q: "Porque é que o meu PDF não ficou mais pequeno?",
      a: (
        <>
          Esta ferramenta reduz os PDF recomprimindo as imagens incorporadas. Se
          o seu documento for sobretudo texto, tabelas ou gráficos vetoriais, não
          há imagens grandes para otimizar, por isso há pouco a remover. Quando
          um PDF recomprimido acabaria por ficar maior do que o original, a
          ferramenta mantém o seu ficheiro original intacto.
        </>
      ),
      text: "Esta ferramenta reduz os PDF recomprimindo as imagens incorporadas. Se o seu documento for sobretudo texto, tabelas ou gráficos vetoriais, não há imagens grandes para otimizar, por isso há pouco a remover. Quando um PDF recomprimido acabaria por ficar maior do que o original, a ferramenta mantém o seu ficheiro original intacto.",
    },
    {
      q: "Comprimir mantém o texto do meu PDF pesquisável?",
      a: (
        <>
          Sim. A ferramenta nunca rasteriza as suas páginas nem converte o texto
          em imagens, por isso qualquer texto selecionável e pesquisável do
          original continua selecionável e pesquisável depois. Apenas os dados de
          imagem incorporados no ficheiro são recodificados, e o esquema da
          página é preservado.
        </>
      ),
      text: "Sim. A ferramenta nunca rasteriza as suas páginas nem converte o texto em imagens, por isso qualquer texto selecionável e pesquisável do original continua selecionável e pesquisável depois. Apenas os dados de imagem incorporados no ficheiro são recodificados, e o esquema da página é preservado.",
    },
  ],
  content: (
    <>
      <h2 id="why">Porque é que os ficheiros PDF são tão grandes?</h2>
      <p>
        Um PDF pode disparar até dezenas de megabytes por motivos que não são
        óbvios quando se olha para a página. O maior culpado, de longe, são as{" "}
        <strong>imagens incorporadas</strong>: quando digitaliza um documento,
        exporta diapositivos ou larga uma fotografia do telemóvel num relatório,
        a imagem em resolução completa fica guardada dentro do ficheiro, muitas
        vezes a 300 PPP ou mais, muito mais detalhe do que um ecrã ou um
        destinatário de e-mail alguma vez chegarão a ver. Outros fatores comuns
        são as <strong>fontes incorporadas</strong>, os objetos duplicados de
        edições repetidas e os <strong>metadados</strong> remanescentes, como
        miniaturas, anotações e histórico de revisões.
      </p>
      <p>
        Os documentos digitalizados são o caso extremo. Um &laquo;PDF
        digitalizado&raquo; é na realidade uma pilha de fotografias de papel, com
        uma imagem grande por página e pouco ou nenhum texto real. É por isso que
        uma digitalização de 10 páginas pode ser maior do que um relatório de
        texto de 200 páginas. Esses ficheiros com muitas imagens e digitalizados
        são exatamente onde este compressor brilha.
      </p>
      <p>
        Ajuda pensar num PDF como um contentor semelhante a um zip, em vez de
        como uma única imagem plana. Um relatório nascido digital exportado de um
        processador de texto é sobretudo instruções de texto compactas mais
        algumas fontes incorporadas, por isso mantém-se pequeno. No momento em
        que adiciona gráficos de alta resolução, fotografias de produto ou
        capturas de ecrã em página completa, o ficheiro herda todos os respetivos
        dados de píxeis. Editar e voltar a guardar repetidamente em algumas
        aplicações também pode deixar cópias órfãs de imagens substituídas,
        inchando silenciosamente o ficheiro com dados que já nem sequer são
        visíveis na página.
      </p>

      <h2 id="how-it-works">Como funciona este compressor de PDF</h2>
      <p>
        Sejamos precisos sobre o que acontece, porque a honestidade importa mais
        do que uma promessa apelativa de &laquo;90&nbsp;% mais pequeno&raquo;.
        Esta ferramenta abre o seu PDF, encontra as imagens nele incorporadas e{" "}
        <strong>reduz a resolução</strong> das que são maiores do que o
        necessário, e depois{" "}
        <strong>recodifica-as como JPEG</strong> com a qualidade que escolher.
        Também elimina os metadados não essenciais. Em seguida, reconstrói o
        documento com{" "}
        <a
          href="https://pdf-lib.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf-lib
        </a>{" "}
        e um codificador de imagens WebAssembly, tudo dentro do separador do
        navegador.
      </p>
      <p>
        O que <strong>não</strong> faz é igualmente importante. Não achata as
        suas páginas convertendo-as em imagens, por isso o seu{" "}
        <strong>texto continua a ser real, selecionável e pesquisável</strong>, e
        os gráficos vetoriais mantêm-se nítidos a qualquer nível de zoom. O outro
        lado: se o seu PDF for sobretudo texto, tabelas ou arte vetorial, quase
        não há nada que um recompressor de imagens possa cortar, e a poupança
        será pequena. Nesse caso, a ferramenta simplesmente{" "}
        <strong>devolve o seu ficheiro original</strong>: nunca lhe entrega algo
        maior do que aquilo com que começou.
      </p>
      <p>
        As duas definições que controla correspondem diretamente a essas duas
        alavancas. O
        <strong> controlo de qualidade de imagem</strong> define com que
        agressividade cada imagem é recodificada como JPEG: mais alto conserva
        intactos o detalhe fino e os gradientes, mais baixo descarta mais para um
        ficheiro mais pequeno. As predefinições também limitam as dimensões
        máximas em píxeis das imagens incorporadas, de modo que uma fotografia
        sobredimensionada é <strong>reduzida de resolução</strong> para uma
        resolução sensata antes de ser recodificada. A redução de resolução é
        normalmente de onde vêm as maiores poupanças, porque reduzir para metade
        a largura e a altura de uma imagem remove cerca de três quartos dos seus
        píxeis. Tudo é processado um ficheiro de cada vez, de modo que o uso de
        memória se mantém previsível mesmo num telemóvel.
      </p>

      <h2 id="format">O que é realmente um PDF, e o modelo de privacidade</h2>
      <p>
        O PDF (Formato de Documento Portátil) foi criado pela Adobe e é agora uma
        norma ISO aberta (ISO 32000). Um PDF é um contentor de objetos:
        descrições de página, fontes, traçados vetoriais e fluxos de imagem, cada
        um dos quais pode usar a sua própria compressão. Como as imagens são
        armazenadas como fluxos separados, podem ser trocadas por versões mais
        pequenas e recodificadas sem tocar no resto do documento: é esse o
        mecanismo em que esta ferramenta se apoia. Pode ler a própria descrição
        do formato por parte da Adobe na{" "}
        <a
          href="https://www.adobe.com/acrobat/about-adobe-pdf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          página de referência do Adobe PDF
        </a>
        .
      </p>
      <p>
        A privacidade é a razão para fazer isto num navegador em vez de enviar
        para um site. Os PDF são muitas vezes os ficheiros <em>mais</em>{" "}
        sensíveis que as pessoas comprimem: contratos, declarações de impostos,
        registos médicos, digitalizações de documentos de identidade e acordos
        assinados. Com um compressor online típico, tudo isso sai da sua máquina
        e fica no servidor de outra pessoa. Aqui, o seu documento é lido para a
        memória, reescrito no seu dispositivo e devolvido diretamente a si. Nada
        é transmitido, registado nem armazenado: pode desligar-se da internet
        depois de a página carregar e a ferramenta continuará a funcionar.
      </p>
      <p>
        Esta abordagem local-first tem também uma vantagem prática: não há filas,
        nem limites de tamanho por ficheiro impostos por um servidor, nem espera
        a que terminem um carregamento e uma transferência. A velocidade depende
        unicamente do seu próprio hardware. A contrapartida é que os ficheiros
        muito grandes se apoiam na memória do seu dispositivo enquanto são
        reescritos, por isso uma digitalização extremamente grande num telemóvel
        antigo pode ser lenta; dividi-la antes em PDF mais pequenos é uma solução
        fácil.
      </p>

      <h2 id="tips">Dicas para os PDF mais pequenos</h2>
      <ul>
        <li>
          <strong>Digitalize com menos PPP.</strong> 150 a 200 PPP chegam e
          sobram para a leitura no ecrã e o e-mail; 600 PPP quadruplica os dados
          para um detalhe que raramente verá. Defina a resolução antes de
          digitalizar para a vitória mais fácil de todas.
        </li>
        <li>
          <strong>Escolha primeiro Equilibrado, depois Mais pequeno.</strong>{" "}
          Comece com a predefinição Equilibrado, verifique o resultado, depois
          volte a executá-lo em Mais pequeno e compare. Em digitalizações com
          muitas fotografias, a definição mais baixa pode reduzir o tamanho
          aproximadamente para metade de novo com pouca diferença visível.
        </li>
        <li>
          <strong>Comprima as imagens de origem antes de as inserir.</strong>{" "}
          Se está a criar um PDF a partir de fotografias ou capturas de ecrã,
          reduza-as primeiro com o{" "}
          <Link href="/pt/image-compressor">compressor de imagens</Link> ou o{" "}
          <Link href="/pt/compress-jpeg">compressor de JPEG</Link>. Uma entrada
          mais leve significa um PDF mais leve.
        </li>
        <li>
          <strong>Redimensione as imagens sobredimensionadas à
          partida.</strong> Uma fotografia de 6000 píxeis numa página A4 é
          detalhe desperdiçado. Use o{" "}
          <Link href="/pt/image-resizer">redimensionador de imagens</Link> ou
          converta para um formato moderno com o{" "}
          <Link href="/pt/image-converter">conversor de imagens</Link> antes de
          montar o documento.
        </li>
        <li>
          <strong>Não espere milagres dos PDF de texto.</strong> Se um ficheiro
          for quase só texto e mal se reduzir, isso é normal: simplesmente não
          havia imagens pesadas para otimizar.
        </li>
      </ul>
    </>
  ),
};
