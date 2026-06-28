/**
 * Homepage content per locale. English is the source; locales fall back to
 * English for any missing entry. Icons and structural layout live in the
 * HomeView component — this is text only, so it's translation-friendly.
 */
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { content as homePt } from "@/lib/i18n/content/home/pt";
import { content as homeIt } from "@/lib/i18n/content/home/it";
import { content as homeDe } from "@/lib/i18n/content/home/de";
import { content as homeFr } from "@/lib/i18n/content/home/fr";
import { content as homePl } from "@/lib/i18n/content/home/pl";
import { content as homeUk } from "@/lib/i18n/content/home/uk";

export interface HomeFeature {
  title: string;
  body: string;
}
export interface HomeFaq {
  q: string;
  a: string;
}

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    subtitle: string;
    ctaImages: string;
    ctaPdf: string;
    trust: [string, string, string];
  };
  popular: string;
  toolsEyebrow: string;
  toolsTitle: string;
  toolsDescription: string;
  viewAll: string;
  whyEyebrow: string;
  whyTitle: string;
  whyDescription: string;
  features: HomeFeature[];
  howEyebrow: string;
  howTitle: string;
  howDescription: string;
  steps: HomeFeature[];
  os: {
    title: string;
    body: string;
    points: HomeFeature[];
    button: string;
  };
  faqTitle: string;
  faqs: HomeFaq[];
  ctaTitle: string;
  ctaBody: string;
  ctaStart: string;
  ctaTrust: string;
}

const EN: HomeContent = {
  metaTitle: "FileShrinking — Free, private file compression in your browser",
  metaDescription:
    "Compress images, PDFs, video and audio for free — entirely in your browser. Your files never leave your device. No uploads, no sign-up, no limits.",
  hero: {
    badge: "No uploads · Files stay on your device",
    titleLead: "Shrink any file,",
    titleHighlight: "right in your browser",
    subtitle:
      "Free, privacy-first compression for images, PDFs, video and audio. Your files are processed entirely on your device — nothing is ever uploaded.",
    ctaImages: "Compress images",
    ctaPdf: "Compress a PDF",
    trust: ["No file ever uploaded", "100% free", "No sign-up"],
  },
  popular: "Popular:",
  toolsEyebrow: "Every tool you need",
  toolsTitle: "Compress and convert any file",
  toolsDescription:
    "A focused tool for each format — each one runs locally, with clear before-and-after size feedback.",
  viewAll: "View all",
  whyEyebrow: "Why FileShrinking",
  whyTitle: "Compression that respects your privacy",
  whyDescription:
    "Most online compressors upload your files to their servers. We took a different approach — and it turns out to be better in almost every way.",
  features: [
    {
      title: "100% private",
      body: "Files are read and compressed on your device. Nothing is ever uploaded to a server — there's no server to upload to.",
    },
    {
      title: "Fast & offline-capable",
      body: "No upload or download round-trip. Compression runs locally with WebAssembly, so it works even after your connection drops.",
    },
    {
      title: "Free, no sign-up",
      body: "Every tool is free with no account, no watermark, and no email required. Use it as much as you like.",
    },
    {
      title: "No file-count limits",
      body: "Batch-process many files at once and download them all in a single zip. Limited only by your device's memory.",
    },
  ],
  howEyebrow: "How it works",
  howTitle: "Three steps, zero uploads",
  howDescription:
    "From file to smaller file in seconds — without your data ever leaving your device.",
  steps: [
    {
      title: "Add your files",
      body: "Drag and drop, browse, or paste from your clipboard. Queue as many as you like — they stay on your device.",
    },
    {
      title: "Choose your settings",
      body: "Pick a preset or fine-tune quality. See the projected savings update before you commit.",
    },
    {
      title: "Download instantly",
      body: "Grab each compressed file, or download everything as a zip. No waiting on an upload or a server queue.",
    },
  ],
  os: {
    title: "Fully open source",
    body: "Don't just take our word for it. FileShrinking is 100% open source under the MIT license — the entire codebase is public, so anyone can verify that your files never leave your device.",
    points: [
      {
        title: "Auditable",
        body: "Read the code that runs in your browser. No hidden uploads, no tracking of your files.",
      },
      {
        title: "MIT licensed",
        body: "Free to use, fork, and build on — for personal or commercial projects.",
      },
      {
        title: "Self-hostable",
        body: "Clone it and run your own private instance anywhere you like.",
      },
    ],
    button: "View the source on GitHub",
  },
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      q: "Are my files uploaded to a server?",
      a: "No. Every tool on FileShrinking runs entirely in your web browser using WebAssembly. Your files are read into memory on your own device, compressed locally, and handed back to you for download. They never travel across the network, so there is nothing for us — or anyone else — to see.",
    },
    {
      q: "Is FileShrinking really free?",
      a: "Yes. All of our compressors and converters are free to use with no account, no watermark, and no hidden limits. The site is supported by unobtrusive advertising, which is why you may see ads alongside the content.",
    },
    {
      q: "Will compressing reduce my file's quality?",
      a: "It depends on the format and settings. Lossless options (like our PNG optimizer) reduce size with no quality change at all. Lossy options (JPEG, WebP, AVIF, video) trade a small, usually invisible amount of quality for a much smaller file — and you control exactly how much with the quality slider.",
    },
    {
      q: "What's the maximum file size I can compress?",
      a: "There's no fixed limit because processing happens on your device. The practical ceiling is your device's available memory. Large images and audio are handled easily; for video we recommend files under roughly 150 MB since browser-based video encoding is memory-intensive.",
    },
    {
      q: "Which browsers and devices are supported?",
      a: "Any modern browser — Chrome, Edge, Firefox, Safari — on desktop or mobile. The tools use standard web technology that works everywhere, though faster devices will naturally compress large files more quickly.",
    },
    {
      q: "Do you store or track my files?",
      a: "We can't. Files never leave your browser, so we have no copy of them and no ability to access them. We use privacy-respecting analytics only after you consent, and you can change your consent choices at any time from the footer.",
    },
    {
      q: "Is FileShrinking open source?",
      a: "Yes — FileShrinking is fully open source under the MIT license. The entire codebase is public on GitHub, so anyone can inspect exactly how it works, confirm that no files are uploaded, fork it, or even self-host their own private copy.",
    },
  ],
  ctaTitle: "Ready to shrink your files?",
  ctaBody: "No account, no upload, no catch. Pick a tool and try it now.",
  ctaStart: "Start compressing",
  ctaTrust: "Why trust us",
};

const ES: HomeContent = {
  metaTitle: "FileShrinking — Compresión de archivos gratuita y privada",
  metaDescription:
    "Comprime imágenes, PDF, vídeo y audio gratis, totalmente en tu navegador. Tus archivos nunca salen de tu dispositivo. Sin subidas, sin registro, sin límites.",
  hero: {
    badge: "Sin subidas · Los archivos permanecen en tu dispositivo",
    titleLead: "Reduce cualquier archivo,",
    titleHighlight: "directamente en tu navegador",
    subtitle:
      "Compresión gratuita y centrada en la privacidad para imágenes, PDF, vídeo y audio. Tus archivos se procesan por completo en tu dispositivo: nada se sube jamás.",
    ctaImages: "Comprimir imágenes",
    ctaPdf: "Comprimir un PDF",
    trust: ["Ningún archivo se sube", "100% gratis", "Sin registro"],
  },
  popular: "Populares:",
  toolsEyebrow: "Todas las herramientas que necesitas",
  toolsTitle: "Comprime y convierte cualquier archivo",
  toolsDescription:
    "Una herramienta específica para cada formato, cada una funciona localmente y muestra el tamaño antes y después con claridad.",
  viewAll: "Ver todas",
  whyEyebrow: "Por qué FileShrinking",
  whyTitle: "Compresión que respeta tu privacidad",
  whyDescription:
    "La mayoría de los compresores en línea suben tus archivos a sus servidores. Nosotros adoptamos un enfoque diferente, y resulta ser mejor en casi todos los aspectos.",
  features: [
    {
      title: "100% privado",
      body: "Los archivos se leen y se comprimen en tu dispositivo. Nada se sube nunca a un servidor: no hay ningún servidor al que subirlos.",
    },
    {
      title: "Rápido y disponible sin conexión",
      body: "Sin idas y vueltas de subida o descarga. La compresión se ejecuta localmente con WebAssembly, así que funciona incluso si pierdes la conexión.",
    },
    {
      title: "Gratis, sin registro",
      body: "Todas las herramientas son gratuitas, sin cuenta, sin marca de agua y sin correo electrónico. Úsalas tanto como quieras.",
    },
    {
      title: "Sin límite de archivos",
      body: "Procesa muchos archivos a la vez y descárgalos todos en un solo zip. El único límite es la memoria de tu dispositivo.",
    },
  ],
  howEyebrow: "Cómo funciona",
  howTitle: "Tres pasos, cero subidas",
  howDescription:
    "De un archivo a uno más pequeño en segundos, sin que tus datos salgan jamás de tu dispositivo.",
  steps: [
    {
      title: "Añade tus archivos",
      body: "Arrastra y suelta, explora o pega desde el portapapeles. Pon en cola los que quieras: permanecen en tu dispositivo.",
    },
    {
      title: "Elige tus ajustes",
      body: "Elige un preajuste o ajusta la calidad con precisión. Verás el ahorro estimado antes de confirmar.",
    },
    {
      title: "Descarga al instante",
      body: "Descarga cada archivo comprimido o todos a la vez en un zip. Sin esperar a una subida ni a una cola del servidor.",
    },
  ],
  os: {
    title: "Totalmente de código abierto",
    body: "No tienes que fiarte solo de nuestra palabra. FileShrinking es 100% de código abierto bajo la licencia MIT: todo el código es público, así que cualquiera puede verificar que tus archivos nunca salen de tu dispositivo.",
    points: [
      {
        title: "Auditable",
        body: "Lee el código que se ejecuta en tu navegador. Sin subidas ocultas ni seguimiento de tus archivos.",
      },
      {
        title: "Licencia MIT",
        body: "Libre para usar, bifurcar y desarrollar, en proyectos personales o comerciales.",
      },
      {
        title: "Autoalojable",
        body: "Clónalo y ejecuta tu propia instancia privada donde quieras.",
      },
    ],
    button: "Ver el código en GitHub",
  },
  faqTitle: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Se suben mis archivos a un servidor?",
      a: "No. Todas las herramientas de FileShrinking se ejecutan por completo en tu navegador con WebAssembly. Tus archivos se leen en la memoria de tu propio dispositivo, se comprimen localmente y se te devuelven para descargar. Nunca viajan por la red, así que no hay nada que nosotros, ni nadie, pueda ver.",
    },
    {
      q: "¿FileShrinking es realmente gratis?",
      a: "Sí. Todos nuestros compresores y conversores son gratuitos, sin cuenta, sin marca de agua y sin límites ocultos. El sitio se mantiene con publicidad discreta, por lo que puede que veas anuncios junto al contenido.",
    },
    {
      q: "¿La compresión reducirá la calidad de mi archivo?",
      a: "Depende del formato y los ajustes. Las opciones sin pérdida (como nuestro optimizador de PNG) reducen el tamaño sin ningún cambio de calidad. Las opciones con pérdida (JPEG, WebP, AVIF, vídeo) sacrifican una cantidad pequeña, normalmente imperceptible, de calidad por un archivo mucho más pequeño, y tú controlas exactamente cuánto con el control de calidad.",
    },
    {
      q: "¿Cuál es el tamaño máximo de archivo que puedo comprimir?",
      a: "No hay un límite fijo porque el procesamiento ocurre en tu dispositivo. El tope práctico es la memoria disponible de tu dispositivo. Las imágenes y el audio grandes se manejan con facilidad; para el vídeo recomendamos archivos de menos de unos 150 MB, ya que la codificación de vídeo en el navegador consume mucha memoria.",
    },
    {
      q: "¿Qué navegadores y dispositivos son compatibles?",
      a: "Cualquier navegador moderno: Chrome, Edge, Firefox, Safari, en ordenador o móvil. Las herramientas usan tecnología web estándar que funciona en todas partes, aunque los dispositivos más rápidos comprimirán los archivos grandes con mayor rapidez.",
    },
    {
      q: "¿Guardáis o rastreáis mis archivos?",
      a: "No podemos. Los archivos nunca salen de tu navegador, así que no tenemos ninguna copia ni forma de acceder a ellos. Usamos analíticas respetuosas con la privacidad solo después de que des tu consentimiento, y puedes cambiar tus preferencias en cualquier momento desde el pie de página.",
    },
    {
      q: "¿FileShrinking es de código abierto?",
      a: "Sí: FileShrinking es totalmente de código abierto bajo la licencia MIT. Todo el código es público en GitHub, así que cualquiera puede inspeccionar exactamente cómo funciona, confirmar que no se suben archivos, bifurcarlo o incluso alojar su propia copia privada.",
    },
  ],
  ctaTitle: "¿Listo para reducir tus archivos?",
  ctaBody: "Sin cuenta, sin subidas, sin trampas. Elige una herramienta y pruébala ahora.",
  ctaStart: "Empezar a comprimir",
  ctaTrust: "Por qué confiar en nosotros",
};

const HOME_CONTENT: Partial<Record<Locale, HomeContent>> = {
  en: EN,
  es: ES,
  pt: homePt,
  it: homeIt,
  de: homeDe,
  fr: homeFr,
  pl: homePl,
  uk: homeUk,
};

export function getHomeContent(locale: Locale): HomeContent {
  return HOME_CONTENT[locale] ?? HOME_CONTENT[DEFAULT_LOCALE]!;
}

/** Locales with a genuine home translation (not the English fallback). */
export function homeTranslatedLocales(): Locale[] {
  return Object.keys(HOME_CONTENT) as Locale[];
}
