import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Über FileShrinking",
  metaDescription:
    "Erfahre, wer FileShrinking entwickelt und warum unser Kompressor zu 100 % im Browser deine Bilder, PDFs, Videos und Audios auf deinem Gerät behält.",
  title: "Über FileShrinking",
  intro: (
    <>
      FileShrinking ist ein kostenloses, auf Datenschutz ausgerichtetes Toolkit
      zum Komprimieren von Bildern, PDFs, Videos und Audios. Jede Datei wird
      vollständig in deinem Browser verarbeitet, sodass nichts, was du hier
      öffnest, jemals auf einen Server hochgeladen wird.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2>Unsere Mission</h2>
      <p>
        FileShrinking gibt es, damit die Komprimierung von Dateien wirklich
        kostenlos, wirklich privat und für jeden mit einem Webbrowser verfügbar
        ist. Große Dateien verlangsamen Websites, verstopfen E-Mail-Postfächer
        und füllen den Speicher von Smartphones sowie Cloud-Tarife. Sie zu
        verkleinern, sollte nicht erfordern, Software zu installieren, ein Konto
        anzulegen, ein Abonnement zu bezahlen oder deine persönlichen Dokumente
        einem Unternehmen anzuvertrauen, das du nie kennengelernt hast. Unser
        Ziel ist einfach: dir eine Komprimierung auf professionellem Niveau zu
        bieten, die auf deinem eigenen Gerät läuft, nichts kostet und deine
        Privatsphäre von Grund auf respektiert.
      </p>

      <h2>Warum &bdquo;100 % in deinem Browser&ldquo; wichtig ist</h2>
      <p>
        Die meisten Online-Kompressoren funktionieren so, dass sie deine Datei
        auf einen entfernten Server hochladen, sie dort verarbeiten und dir das
        Ergebnis zurücksenden. Das bedeutet, dass eine Kopie deines Fotos,
        Vertrags oder Heimvideos zumindest vorübergehend auf dem Computer einer
        anderen Person liegt. FileShrinking arbeitet anders. Wenn du eine Datei
        auswählst, wird sie in den Arbeitsspeicher deines Browsers geladen und
        lokal komprimiert – mithilfe von WebAssembly-Builds vertrauenswürdiger,
        quelloffener Encoder wie MozJPEG, OxiPNG und FFmpeg. Die fertige Datei
        wird dir direkt zurückgegeben.
      </p>
      <p>
        Das praktische Ergebnis ist, dass <strong>deine Dateien dein Gerät
        physisch niemals verlassen</strong>. Es gibt nichts, was wir speichern,
        nichts, was wir bei einem Datenleck preisgeben, und nichts, was wir
        verkaufen oder weitergeben könnten. Du kannst es selbst überprüfen: Öffne
        eines unserer Tools, trenne die Internetverbindung, und die Komprimierung
        funktioniert weiterhin, weil die gesamte schwere Arbeit auf deinem Rechner
        stattfindet. Dieses ausschließlich lokale Modell ist die Grundlage des
        Vertrauens, um das wir dich bitten, und es ist kein Marketing-Slogan, von
        dem wir uns später klammheimlich zurückziehen können.
      </p>

      <h2>Was wir entwickeln</h2>
      <p>
        FileShrinking ist eine wachsende Sammlung fokussierter Tools mit jeweils
        einem einzigen Zweck. Unser{" "}
        <Link href="/de/image-compressor">Bildkompressor</Link> unterstützt JPEG,
        PNG, WebP, AVIF und GIF, mit ergänzenden Tools zum Konvertieren und
        Skalieren. Neben den Bildtools bieten wir einen PDF-Kompressor, der die in
        Dokumenten eingebetteten Bilder neu komprimiert, eine Videokomprimierung
        im Browser für Formate wie MP4, MOV, WebM, MKV und AVI sowie einen
        Audiokompressor für MP3, WAV und AAC. Alle Tools teilen dieselben
        Grundsätze: keine Uploads, keine Anmeldung, keine Wasserzeichen und keine
        künstlichen Beschränkungen bei Anzahl oder Größe der Dateien, abgesehen
        von dem, was der Arbeitsspeicher deines eigenen Geräts zulässt.
      </p>

      <h2>Wie wir recherchieren und unsere Leitfäden schreiben</h2>
      <p>
        Über die Tools hinaus veröffentlichen wir praktische Leitfäden und
        Erklärartikel in unserem{" "}
        <Link href="/de/blog">Blog</Link> darüber, wie Komprimierungsformate
        tatsächlich funktionieren und wie du das beste Verhältnis von Qualität zu
        Größe erzielst. Wir nehmen Genauigkeit ernst. Unser Redaktionsprozess
        beginnt mit primären, maßgeblichen Quellen: den Formatspezifikationen
        selbst, der Webplattform-Dokumentation der{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>{" "}
        und des{" "}
        <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
          W3C
        </a>
        sowie der Dokumentation der quelloffenen Encoder, auf denen unsere Tools
        beruhen. Wir gleichen Aussagen mit dem realen Verhalten der Tools ab, die
        wir ausliefern, nennen unsere Quellen, damit du sie überprüfen kannst, und
        überarbeiten Artikel, wenn sich Standards oder die Browserunterstützung
        ändern. Wenn wir unsicher sind, sagen wir das, anstatt zu raten.
      </p>

      <h2>Wer FileShrinking betreut</h2>
      <p>
        FileShrinking wird von einem kleinen, unabhängigen Team von
        Webentwicklern erstellt und betreut, denen Leistung und Datenschutz im
        modernen Web am Herzen liegen. Wir sind nicht risikokapitalfinanziert und
        betreiben kein Datengeschäft; die Website bleibt durch unaufdringliche,
        klar gekennzeichnete Werbung kostenlos.
      </p>
      <p>
        Unsere Betreuer kommen aus den Bereichen Web-Performance und
        Medienverarbeitung und haben jahrelang Teams dabei geholfen, leichtere,
        schnellere Seiten auszuliefern, ohne dabei Qualität zu opfern. Das Team
        leitet die technische Ausrichtung des Projekts, prüft jedes Tool vor der
        Veröffentlichung und ist für die oben beschriebenen redaktionellen
        Standards verantwortlich. Du kannst uns direkt unter{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>{" "}
        erreichen.
      </p>

      <h2>Werbung, Analyse und deine Einwilligung</h2>
      <p>
        Um FileShrinking kostenlos zu halten, zeigen wir Werbung an und nutzen
        Analysen, um zu verstehen, welche Tools nützlich sind. Diese
        Drittanbieterdienste sind{" "}
        <strong>einwilligungspflichtig</strong>: Werbe- und Analyseskripte werden
        erst geladen, nachdem du zugestimmt hast, und du kannst sie ablehnen und
        trotzdem alle Tools nutzen. Entscheidend ist: Nichts davon ändert die Art
        und Weise, wie deine Dateien behandelt werden – Werbung und Analyse
        erhalten niemals deine Dokumente, Fotos, Videos oder Audios, weil diese
        ohnehin niemals von deinem Gerät übertragen werden. Alle Einzelheiten
        findest du in unseren veröffentlichten Datenschutz- und
        Cookie-Richtlinien.
      </p>

      <h2>Kontakt aufnehmen</h2>
      <p>
        Fragen, Fehlerberichte oder Ideen für ein Tool, das wir als Nächstes
        entwickeln sollten, sind immer willkommen. Besuche unsere{" "}
        <Link href="/de/contact">Kontaktseite</Link> oder schreib uns an{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Wir
        lesen alles und nutzen dein Feedback, um zu entscheiden, was wir
        verbessern.
      </p>
    </>
  ),
};
