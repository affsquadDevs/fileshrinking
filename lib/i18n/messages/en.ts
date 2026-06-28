/**
 * English UI-string dictionary — the typed source of truth for all chrome
 * strings. Other locales implement the `Messages` type derived from this.
 * Values here MUST match the current hardcoded English so there is no visual
 * regression when components switch to t().
 *
 * Long-form page content (tool intros/body, blog posts, legal text) is NOT
 * here — it lives in per-locale content modules.
 */
export const en = {
  common: {
    skipToContent: "Skip to content",
    allTools: "All tools",
    openTool: "Open tool",
    home: "Home",
    breadcrumb: "Breadcrumb",
    privacyBadge: "Files are processed on your device — never uploaded.",
    privacyBadgeShort: "No uploads · Files stay on your device",
    openSource: "Open source",
    lastUpdated: "Last updated {date}",
    faqHeading: "Frequently asked questions",
    relatedHeading: "Related tools",
    advertisement: "Advertisement",
  },
  nav: {
    image: "Image",
    pdf: "PDF",
    video: "Video",
    audio: "Audio",
    blog: "Blog",
    about: "About",
    openMenu: "Open menu",
    menu: "Menu",
    allIn: "All {category}",
  },
  categories: {
    image: "Image tools",
    pdf: "PDF tools",
    video: "Video tools",
    audio: "Audio tools",
  },
  footer: {
    tagline:
      "Free, private file compression in your browser. Compress images, PDFs, video and audio without ever uploading a file.",
    company: "Company",
    legal: "Legal",
    howItWorks: "How it works",
    howItWorksBody:
      "Every tool runs entirely in your browser using WebAssembly and modern web APIs. Your files are read into memory on your device, compressed locally, and offered back to you for download. Nothing is sent to a server — which is faster, more private, and works even offline once loaded.",
    consentSettings: "Consent settings",
    rightsReserved: "© {year}–present {publisher}. All rights reserved.",
    madeFor: "Made for people who value their privacy. No uploads, ever.",
    language: "Language",
  },
  consent: {
    title: "We value your privacy",
    body: "Your files are always processed locally and never uploaded. We use cookies only for anonymous analytics and, with your consent, advertising that keeps these tools free. You can change your choice anytime.",
    cookiePolicy: "Cookie Policy",
    manage: "Manage",
    rejectAll: "Reject all",
    acceptAll: "Accept all",
    save: "Save preferences",
    alwaysOn: "Always on",
    necessaryTitle: "Strictly necessary",
    necessaryBody:
      "Required for the site and tools to function. Cannot be turned off.",
    analyticsTitle: "Analytics",
    analyticsBody:
      "Anonymous usage statistics (Google Analytics via Tag Manager) to help us improve.",
    adsTitle: "Advertising",
    adsBody:
      "Personalised ads (Google AdSense) that fund free, unlimited tools.",
  },
  tool: {
    dropTitle: "Drag & drop, click, or paste files",
    dropActive: "Drop to add files",
    dropHintDefault: "Your files stay on your device.",
    dropAria: "Add files — drag and drop, click to browse, or paste",
    preparing: "Preparing…",
    compressing: "Compressing…",
    download: "Download",
    remove: "Remove",
    downloadAll: "Download all (.zip)",
    reCompress: "Re-compress",
    clear: "Clear",
    noGain: "no gain",
    queued: "queued",
    failed: "Compression failed.",
    emptyState:
      "Add files above to start. Everything runs locally — your files never leave this device.",
    doneSummary: "{done} of {total} done",
    queuedSummary: "{count} file(s) queued",
    skipped:
      "Skipped {count} unsupported file(s): {names}. This tool accepts {accept}.",
    noteKeptOriginal:
      "Already well-optimized — kept your original (it was smaller).",
    noteLarger: "The {format} version is larger than your original.",
  },
  controls: {
    outputFormat: "Output format",
    sameFormat: "Same format",
    quality: "Quality",
    presetSmallest: "Smallest",
    presetBalanced: "Balanced",
    presetHigh: "High quality",
    qualityHint:
      "Lower quality = smaller file. 70–80 is usually indistinguishable from the original for photos.",
    pngLevel: "Optimization level (lossless)",
    levelFast: "Fast",
    levelBalanced: "Balanced",
    levelMax: "Max",
    pngHint:
      "PNG optimization is lossless, so savings are modest. For big cuts on photos, convert to WebP or AVIF instead.",
    resize: "Resize",
    resizeOff: "Off",
    resizePercent: "Percent",
    resizePixels: "Pixels",
    scale: "Scale",
    widthPx: "Width (px)",
    heightPx: "Height (px)",
    keepAspect: "Keep aspect ratio",
    imageDropHint: "JPEG, PNG, WebP, AVIF and GIF supported.",
    heicDropHint: "HEIC & HEIF photos (.heic, .heif) — convert to JPG, WebP or AVIF.",
  },
  pages: {
    about: "About",
    contact: "Contact",
    blog: "Blog",
    "privacy-policy": "Privacy Policy",
    "terms-of-service": "Terms of Service",
    "cookie-policy": "Cookie Policy",
    disclaimer: "Disclaimer",
  },
  blog: {
    indexTitle: "The FileShrinking Blog",
    indexSubtitle:
      "Practical guides to compressing and converting files — formats, quality trade-offs, and how to make things smaller without losing what matters. Every tool we mention runs privately in your browser.",
    indexMetaTitle: "Blog — Compression Guides & Tips",
    indexMetaDescription:
      "Practical, no-nonsense guides to compressing images, PDFs, video and audio: formats, quality trade-offs, and how to shrink files without losing quality.",
    comingSoon: "Articles are coming soon.",
    minRead: "{n} min read",
    updatedOn: "updated {date}",
    aboutAuthor: "About the author",
    backToAll: "Back to all articles",
  },
  contactForm: {
    name: "Name",
    email: "Email",
    message: "Message",
    errName: "Please enter your name.",
    errEmail: "Please enter your email.",
    errEmailInvalid: "Please enter a valid email address.",
    errMessage: "Please enter a message of at least 10 characters.",
    placeholder: "How can we help?",
    send: "Send message",
    opened:
      "Your email app should have opened with the message ready to send. If it didn't, email us directly at the address below.",
    copy: "Copy",
    copied: "Copied",
    subject: "Contact from {name} — {site}",
  },
  langSwitcher: {
    label: "Change language",
  },
  notFound: {
    code: "404",
    title: "We couldn't find that page",
    body: "The page may have moved or never existed. Try one of our compression tools below, or head back home.",
    goHome: "Go home",
    browseTools: "Browse all tools",
  },
} as const;

/** Same shape as `en`, but leaf values widened to `string` so other locales
 *  can implement it. Enforces that every locale has the same keys. */
export type Messages = {
  [Section in keyof typeof en]: {
    [Key in keyof (typeof en)[Section]]: string;
  };
};

