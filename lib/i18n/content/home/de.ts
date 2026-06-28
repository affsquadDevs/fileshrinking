import type { HomeContent } from "@/lib/i18n/content/home";

export const content: HomeContent = {
  metaTitle: "FileShrinking — Gratis Dateien komprimieren im Browser",
  metaDescription:
    "Komprimiere Bilder, PDFs, Video und Audio kostenlos — komplett im Browser. Deine Dateien verlassen nie dein Gerät. Kein Upload, keine Anmeldung, keine Limits.",
  hero: {
    badge: "Kein Upload · Dateien bleiben auf deinem Gerät",
    titleLead: "Verkleinere jede Datei,",
    titleHighlight: "direkt in deinem Browser",
    subtitle:
      "Kostenlose, datenschutzorientierte Komprimierung für Bilder, PDFs, Video und Audio. Deine Dateien werden komplett auf deinem Gerät verarbeitet — nichts wird jemals hochgeladen.",
    ctaImages: "Bilder komprimieren",
    ctaPdf: "PDF komprimieren",
    trust: ["Keine Datei wird hochgeladen", "100 % kostenlos", "Keine Anmeldung"],
  },
  popular: "Beliebt:",
  toolsEyebrow: "Jedes Werkzeug, das du brauchst",
  toolsTitle: "Jede Datei komprimieren und konvertieren",
  toolsDescription:
    "Ein spezialisiertes Werkzeug für jedes Format — jedes läuft lokal und zeigt klar die Größe vorher und nachher an.",
  viewAll: "Alle ansehen",
  whyEyebrow: "Warum FileShrinking",
  whyTitle: "Komprimierung, die deine Privatsphäre achtet",
  whyDescription:
    "Die meisten Online-Kompressoren laden deine Dateien auf ihre Server hoch. Wir gehen einen anderen Weg — und der erweist sich in fast jeder Hinsicht als besser.",
  features: [
    {
      title: "100 % privat",
      body: "Dateien werden auf deinem Gerät gelesen und komprimiert. Nichts wird jemals auf einen Server hochgeladen — es gibt gar keinen Server, auf den man hochladen könnte.",
    },
    {
      title: "Schnell & offlinefähig",
      body: "Kein Hin und Her durch Up- und Download. Die Komprimierung läuft lokal mit WebAssembly und funktioniert sogar dann, wenn deine Verbindung abbricht.",
    },
    {
      title: "Kostenlos, keine Anmeldung",
      body: "Jedes Werkzeug ist kostenlos — ohne Konto, ohne Wasserzeichen und ohne E-Mail-Pflicht. Nutze es, so viel du möchtest.",
    },
    {
      title: "Keine Begrenzung der Dateianzahl",
      body: "Verarbeite viele Dateien auf einmal im Stapel und lade sie alle in einer einzigen ZIP-Datei herunter. Begrenzt nur durch den Speicher deines Geräts.",
    },
  ],
  howEyebrow: "So funktioniert es",
  howTitle: "Drei Schritte, null Uploads",
  howDescription:
    "Von der Datei zur kleineren Datei in Sekunden — ohne dass deine Daten je dein Gerät verlassen.",
  steps: [
    {
      title: "Dateien hinzufügen",
      body: "Per Drag-and-drop, über die Dateiauswahl oder aus der Zwischenablage einfügen. Stelle so viele in die Warteschlange, wie du möchtest — sie bleiben auf deinem Gerät.",
    },
    {
      title: "Einstellungen wählen",
      body: "Wähle eine Voreinstellung oder stelle die Qualität fein ein. Sieh die voraussichtliche Ersparnis, bevor du dich festlegst.",
    },
    {
      title: "Sofort herunterladen",
      body: "Hol dir jede komprimierte Datei einzeln oder lade alles als ZIP herunter. Kein Warten auf einen Upload oder eine Server-Warteschlange.",
    },
  ],
  os: {
    title: "Vollständig quelloffen",
    body: "Verlass dich nicht nur auf unser Wort. FileShrinking ist zu 100 % quelloffen unter der MIT-Lizenz — der gesamte Code ist öffentlich, sodass jeder überprüfen kann, dass deine Dateien nie dein Gerät verlassen.",
    points: [
      {
        title: "Überprüfbar",
        body: "Lies den Code, der in deinem Browser läuft. Keine versteckten Uploads, kein Tracking deiner Dateien.",
      },
      {
        title: "MIT-lizenziert",
        body: "Frei nutzbar, forkbar und erweiterbar — für private oder kommerzielle Projekte.",
      },
      {
        title: "Selbst hostbar",
        body: "Klone es und betreibe deine eigene private Instanz, wo immer du möchtest.",
      },
    ],
    button: "Quellcode auf GitHub ansehen",
  },
  faqTitle: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Werden meine Dateien auf einen Server hochgeladen?",
      a: "Nein. Jedes Werkzeug auf FileShrinking läuft vollständig in deinem Webbrowser mithilfe von WebAssembly. Deine Dateien werden auf deinem eigenen Gerät in den Speicher geladen, lokal komprimiert und dir zum Herunterladen zurückgegeben. Sie wandern nie durch das Netzwerk, sodass es für uns — oder sonst jemanden — nichts zu sehen gibt.",
    },
    {
      q: "Ist FileShrinking wirklich kostenlos?",
      a: "Ja. Alle unsere Kompressoren und Konverter sind kostenlos nutzbar — ohne Konto, ohne Wasserzeichen und ohne versteckte Limits. Die Website finanziert sich über unaufdringliche Werbung, weshalb dir neben den Inhalten Anzeigen begegnen können.",
    },
    {
      q: "Verringert das Komprimieren die Qualität meiner Datei?",
      a: "Das hängt vom Format und den Einstellungen ab. Verlustfreie Optionen (wie unser PNG-Optimierer) verringern die Größe ganz ohne Qualitätsverlust. Verlustbehaftete Optionen (JPEG, WebP, AVIF, Video) tauschen ein geringes, meist unsichtbares Maß an Qualität gegen eine deutlich kleinere Datei — und mit dem Qualitätsregler bestimmst du genau, wie viel.",
    },
    {
      q: "Wie groß darf eine Datei höchstens sein, die ich komprimiere?",
      a: "Es gibt kein festes Limit, da die Verarbeitung auf deinem Gerät stattfindet. Die praktische Obergrenze ist der verfügbare Speicher deines Geräts. Große Bilder und Audiodateien werden mühelos bewältigt; bei Video empfehlen wir Dateien unter etwa 150 MB, da die browserbasierte Videocodierung speicherintensiv ist.",
    },
    {
      q: "Welche Browser und Geräte werden unterstützt?",
      a: "Jeder moderne Browser — Chrome, Edge, Firefox, Safari — auf Desktop oder Mobilgerät. Die Werkzeuge nutzen standardisierte Webtechnologie, die überall funktioniert, wobei schnellere Geräte große Dateien naturgemäß zügiger komprimieren.",
    },
    {
      q: "Speichert oder verfolgt ihr meine Dateien?",
      a: "Das können wir gar nicht. Dateien verlassen nie deinen Browser, daher haben wir keine Kopie davon und keine Möglichkeit, darauf zuzugreifen. Wir nutzen datenschutzfreundliche Analyse erst, nachdem du zugestimmt hast, und du kannst deine Einwilligung jederzeit über die Fußzeile ändern.",
    },
    {
      q: "Ist FileShrinking quelloffen?",
      a: "Ja — FileShrinking ist vollständig quelloffen unter der MIT-Lizenz. Der gesamte Code ist öffentlich auf GitHub, sodass jeder genau nachvollziehen kann, wie es funktioniert, bestätigen kann, dass keine Dateien hochgeladen werden, es forken oder sogar eine eigene private Kopie selbst hosten kann.",
    },
  ],
  ctaTitle: "Bereit, deine Dateien zu verkleinern?",
  ctaBody: "Kein Konto, kein Upload, kein Haken. Wähle ein Werkzeug und probiere es jetzt aus.",
  ctaStart: "Komprimieren starten",
  ctaTrust: "Warum du uns vertrauen kannst",
};
