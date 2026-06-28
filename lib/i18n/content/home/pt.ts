import type { HomeContent } from "@/lib/i18n/content/home";

export const content: HomeContent = {
  metaTitle: "FileShrinking — Compressão de ficheiros gratuita e privada",
  metaDescription:
    "Comprima imagens, PDF, vídeo e áudio gratuitamente, inteiramente no seu navegador. Os seus ficheiros nunca saem do dispositivo. Sem envios, sem registo, sem limites.",
  hero: {
    badge: "Sem envios · Os ficheiros ficam no seu dispositivo",
    titleLead: "Reduza qualquer ficheiro,",
    titleHighlight: "diretamente no seu navegador",
    subtitle:
      "Compressão gratuita e centrada na privacidade para imagens, PDF, vídeo e áudio. Os seus ficheiros são processados inteiramente no seu dispositivo — nada é jamais enviado.",
    ctaImages: "Comprimir imagens",
    ctaPdf: "Comprimir um PDF",
    trust: ["Nenhum ficheiro é enviado", "100% gratuito", "Sem registo"],
  },
  popular: "Populares:",
  toolsEyebrow: "Todas as ferramentas de que precisa",
  toolsTitle: "Comprima e converta qualquer ficheiro",
  toolsDescription:
    "Uma ferramenta dedicada para cada formato — cada uma funciona localmente, com indicação clara do tamanho antes e depois.",
  viewAll: "Ver todas",
  whyEyebrow: "Porquê o FileShrinking",
  whyTitle: "Compressão que respeita a sua privacidade",
  whyDescription:
    "A maioria dos compressores online envia os seus ficheiros para os seus servidores. Adotámos uma abordagem diferente — e revela-se melhor em quase todos os aspetos.",
  features: [
    {
      title: "100% privado",
      body: "Os ficheiros são lidos e comprimidos no seu dispositivo. Nada é jamais enviado para um servidor — não há nenhum servidor para onde enviar.",
    },
    {
      title: "Rápido e disponível offline",
      body: "Sem idas e voltas de envio ou transferência. A compressão é executada localmente com WebAssembly, por isso funciona mesmo depois de perder a ligação.",
    },
    {
      title: "Gratuito, sem registo",
      body: "Todas as ferramentas são gratuitas, sem conta, sem marca de água e sem e-mail. Use à vontade, sempre que quiser.",
    },
    {
      title: "Sem limite de ficheiros",
      body: "Processe muitos ficheiros de uma só vez e transfira-os todos num único zip. O único limite é a memória do seu dispositivo.",
    },
  ],
  howEyebrow: "Como funciona",
  howTitle: "Três passos, zero envios",
  howDescription:
    "De um ficheiro a um ficheiro mais pequeno em segundos — sem que os seus dados saiam alguma vez do dispositivo.",
  steps: [
    {
      title: "Adicione os seus ficheiros",
      body: "Arraste e largue, procure ou cole a partir da área de transferência. Coloque em fila os que quiser — ficam no seu dispositivo.",
    },
    {
      title: "Escolha as suas definições",
      body: "Escolha uma predefinição ou ajuste a qualidade ao detalhe. Veja a poupança estimada a atualizar antes de confirmar.",
    },
    {
      title: "Transfira de imediato",
      body: "Obtenha cada ficheiro comprimido ou transfira tudo num zip. Sem esperar por um envio nem por uma fila do servidor.",
    },
  ],
  os: {
    title: "Totalmente de código aberto",
    body: "Não tem de acreditar apenas na nossa palavra. O FileShrinking é 100% de código aberto sob a licença MIT — todo o código é público, por isso qualquer pessoa pode verificar que os seus ficheiros nunca saem do dispositivo.",
    points: [
      {
        title: "Auditável",
        body: "Leia o código que é executado no seu navegador. Sem envios ocultos, sem rastreio dos seus ficheiros.",
      },
      {
        title: "Licença MIT",
        body: "Livre para usar, bifurcar e desenvolver — em projetos pessoais ou comerciais.",
      },
      {
        title: "Auto-hospedável",
        body: "Clone-o e execute a sua própria instância privada onde quiser.",
      },
    ],
    button: "Ver o código no GitHub",
  },
  faqTitle: "Perguntas frequentes",
  faqs: [
    {
      q: "Os meus ficheiros são enviados para um servidor?",
      a: "Não. Todas as ferramentas do FileShrinking são executadas inteiramente no seu navegador com WebAssembly. Os seus ficheiros são lidos para a memória do seu próprio dispositivo, comprimidos localmente e devolvidos para transferência. Nunca circulam pela rede, por isso não há nada que nós — ou qualquer outra pessoa — possamos ver.",
    },
    {
      q: "O FileShrinking é mesmo gratuito?",
      a: "Sim. Todos os nossos compressores e conversores são gratuitos, sem conta, sem marca de água e sem limites ocultos. O site é suportado por publicidade discreta, razão pela qual poderá ver anúncios junto ao conteúdo.",
    },
    {
      q: "A compressão vai reduzir a qualidade do meu ficheiro?",
      a: "Depende do formato e das definições. As opções sem perdas (como o nosso otimizador de PNG) reduzem o tamanho sem qualquer alteração na qualidade. As opções com perdas (JPEG, WebP, AVIF, vídeo) trocam uma quantidade pequena e normalmente impercetível de qualidade por um ficheiro muito mais pequeno — e controla exatamente quanto com o controlo de qualidade.",
    },
    {
      q: "Qual é o tamanho máximo de ficheiro que posso comprimir?",
      a: "Não há um limite fixo porque o processamento acontece no seu dispositivo. O teto prático é a memória disponível do seu dispositivo. As imagens e o áudio grandes são processados com facilidade; para vídeo recomendamos ficheiros com menos de cerca de 150 MB, uma vez que a codificação de vídeo no navegador consome muita memória.",
    },
    {
      q: "Que navegadores e dispositivos são compatíveis?",
      a: "Qualquer navegador moderno — Chrome, Edge, Firefox, Safari — em computador ou telemóvel. As ferramentas usam tecnologia web padrão que funciona em qualquer lado, embora os dispositivos mais rápidos comprimam naturalmente os ficheiros grandes com maior celeridade.",
    },
    {
      q: "Guardam ou rastreiam os meus ficheiros?",
      a: "Não podemos. Os ficheiros nunca saem do seu navegador, por isso não temos qualquer cópia deles nem forma de aceder-lhes. Usamos análises respeitadoras da privacidade apenas depois de dar o seu consentimento, e pode alterar as suas escolhas de consentimento a qualquer momento no rodapé.",
    },
    {
      q: "O FileShrinking é de código aberto?",
      a: "Sim — o FileShrinking é totalmente de código aberto sob a licença MIT. Todo o código é público no GitHub, por isso qualquer pessoa pode inspecionar exatamente como funciona, confirmar que não são enviados ficheiros, bifurcá-lo ou até alojar a sua própria cópia privada.",
    },
  ],
  ctaTitle: "Pronto para reduzir os seus ficheiros?",
  ctaBody: "Sem conta, sem envios, sem truques. Escolha uma ferramenta e experimente agora.",
  ctaStart: "Começar a comprimir",
  ctaTrust: "Porquê confiar em nós",
};
