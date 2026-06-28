import type { HomeContent } from "@/lib/i18n/content/home";

export const content: HomeContent = {
  metaTitle: "FileShrinking — Compressione file privata nel browser",
  metaDescription:
    "Comprimi immagini, PDF, video e audio gratis nel tuo browser. I file non lasciano mai il dispositivo. Nessun caricamento, registrazione o limite.",
  hero: {
    badge: "Nessun caricamento · I file restano sul tuo dispositivo",
    titleLead: "Riduci qualsiasi file,",
    titleHighlight: "direttamente nel tuo browser",
    subtitle:
      "Compressione gratuita e attenta alla privacy per immagini, PDF, video e audio. I tuoi file vengono elaborati interamente sul tuo dispositivo: nulla viene mai caricato.",
    ctaImages: "Comprimi immagini",
    ctaPdf: "Comprimi un PDF",
    trust: ["Nessun file viene mai caricato", "100% gratis", "Senza registrazione"],
  },
  popular: "Popolari:",
  toolsEyebrow: "Tutti gli strumenti che ti servono",
  toolsTitle: "Comprimi e converti qualsiasi file",
  toolsDescription:
    "Uno strumento dedicato per ogni formato: ognuno funziona in locale e mostra con chiarezza le dimensioni prima e dopo.",
  viewAll: "Vedi tutti",
  whyEyebrow: "Perché FileShrinking",
  whyTitle: "Una compressione che rispetta la tua privacy",
  whyDescription:
    "La maggior parte dei compressori online carica i tuoi file sui propri server. Noi abbiamo adottato un approccio diverso, che si rivela migliore sotto quasi tutti gli aspetti.",
  features: [
    {
      title: "100% privato",
      body: "I file vengono letti e compressi sul tuo dispositivo. Nulla viene mai caricato su un server: non c'è alcun server su cui caricarli.",
    },
    {
      title: "Veloce e utilizzabile offline",
      body: "Nessun ciclo di caricamento e download. La compressione viene eseguita in locale con WebAssembly, quindi funziona anche se la connessione si interrompe.",
    },
    {
      title: "Gratis, senza registrazione",
      body: "Ogni strumento è gratuito, senza account, senza filigrana e senza email richiesta. Usalo quanto vuoi.",
    },
    {
      title: "Nessun limite al numero di file",
      body: "Elabora in blocco molti file contemporaneamente e scaricali tutti in un unico zip. L'unico limite è la memoria del tuo dispositivo.",
    },
  ],
  howEyebrow: "Come funziona",
  howTitle: "Tre passaggi, zero caricamenti",
  howDescription:
    "Da un file a uno più piccolo in pochi secondi, senza che i tuoi dati lascino mai il dispositivo.",
  steps: [
    {
      title: "Aggiungi i tuoi file",
      body: "Trascina e rilascia, sfoglia o incolla dagli appunti. Mettine in coda quanti vuoi: restano sul tuo dispositivo.",
    },
    {
      title: "Scegli le impostazioni",
      body: "Scegli un preset oppure regola la qualità con precisione. Vedrai aggiornarsi il risparmio stimato prima di confermare.",
    },
    {
      title: "Scarica all'istante",
      body: "Scarica ogni file compresso, oppure scarica tutto in un unico zip. Senza attendere un caricamento o una coda sul server.",
    },
  ],
  os: {
    title: "Completamente open source",
    body: "Non devi fidarti solo della nostra parola. FileShrinking è 100% open source con licenza MIT: l'intero codice è pubblico, così chiunque può verificare che i tuoi file non lasciano mai il dispositivo.",
    points: [
      {
        title: "Verificabile",
        body: "Leggi il codice che viene eseguito nel tuo browser. Nessun caricamento nascosto, nessun tracciamento dei tuoi file.",
      },
      {
        title: "Licenza MIT",
        body: "Libero di usare, modificare e sviluppare, per progetti personali o commerciali.",
      },
      {
        title: "Self-hostabile",
        body: "Clonalo ed esegui la tua istanza privata dove preferisci.",
      },
    ],
    button: "Vedi il codice su GitHub",
  },
  faqTitle: "Domande frequenti",
  faqs: [
    {
      q: "I miei file vengono caricati su un server?",
      a: "No. Ogni strumento di FileShrinking viene eseguito interamente nel tuo browser tramite WebAssembly. I tuoi file vengono letti in memoria sul tuo dispositivo, compressi in locale e restituiti per il download. Non viaggiano mai sulla rete, quindi non c'è nulla che noi, o chiunque altro, possa vedere.",
    },
    {
      q: "FileShrinking è davvero gratis?",
      a: "Sì. Tutti i nostri compressori e convertitori sono gratuiti, senza account, senza filigrana e senza limiti nascosti. Il sito è sostenuto da pubblicità poco invasiva, ed è per questo che potresti vedere annunci accanto ai contenuti.",
    },
    {
      q: "La compressione riduce la qualità del mio file?",
      a: "Dipende dal formato e dalle impostazioni. Le opzioni senza perdita (come il nostro ottimizzatore PNG) riducono le dimensioni senza alcuna variazione di qualità. Le opzioni con perdita (JPEG, WebP, AVIF, video) sacrificano una quantità di qualità piccola e di solito impercettibile in cambio di un file molto più piccolo, e sei tu a controllare esattamente quanta con il cursore della qualità.",
    },
    {
      q: "Qual è la dimensione massima del file che posso comprimere?",
      a: "Non c'è un limite fisso perché l'elaborazione avviene sul tuo dispositivo. Il tetto pratico è la memoria disponibile del dispositivo. Immagini e audio di grandi dimensioni vengono gestiti senza problemi; per i video consigliamo file inferiori a circa 150 MB, poiché la codifica video nel browser richiede molta memoria.",
    },
    {
      q: "Quali browser e dispositivi sono supportati?",
      a: "Qualsiasi browser moderno: Chrome, Edge, Firefox, Safari, su computer o dispositivo mobile. Gli strumenti usano tecnologia web standard che funziona ovunque, anche se i dispositivi più veloci comprimeranno naturalmente i file di grandi dimensioni più rapidamente.",
    },
    {
      q: "Conservate o tracciate i miei file?",
      a: "Non possiamo farlo. I file non lasciano mai il tuo browser, quindi non ne abbiamo alcuna copia né la possibilità di accedervi. Usiamo strumenti di analisi rispettosi della privacy solo dopo il tuo consenso, che puoi modificare in qualsiasi momento dal piè di pagina.",
    },
    {
      q: "FileShrinking è open source?",
      a: "Sì: FileShrinking è completamente open source con licenza MIT. L'intero codice è pubblico su GitHub, così chiunque può controllare esattamente come funziona, verificare che nessun file venga caricato, modificarlo o persino ospitare la propria copia privata.",
    },
  ],
  ctaTitle: "Pronto a ridurre i tuoi file?",
  ctaBody: "Nessun account, nessun caricamento, nessun trucco. Scegli uno strumento e provalo subito.",
  ctaStart: "Inizia a comprimere",
  ctaTrust: "Perché fidarti di noi",
};
