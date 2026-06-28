import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Kontakt",
  metaDescription:
    "Kontaktieren Sie FileShrinking: Fragen, Feedback, Fehler oder Ideen. Schreiben Sie an hello@fileshrinking.com — Datenschutz zuerst, keine gespeicherten Daten.",
  title: "Kontaktieren Sie uns",
  intro: (
    <>
      Wir freuen uns, von Ihnen zu hören. Ob Sie eine Frage, ein Feedback, einen
      Fehler zu melden oder eine Idee für eine Funktion haben &ndash; das
      Formular unten ist der schnellste Weg, die Menschen zu erreichen, die
      FileShrinking entwickeln.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="get-in-touch">Nehmen Sie Kontakt auf</h2>
      <p>
        FileShrinking ist ein kostenloses, datenschutzorientiertes Toolkit zum
        Verkleinern von Dateien direkt in Ihrem Browser &mdash; von{" "}
        <Link href="/de/compress-jpeg">JPEG</Link>- und{" "}
        <Link href="/de/compress-png">PNG</Link>-Bildern bis hin zu{" "}
        <Link href="/de/pdf-compressor">PDF-Dokumenten</Link>,{" "}
        <Link href="/de/video-compressor">Video</Link> und{" "}
        <Link href="/de/audio-compressor">Audio</Link>. Da jedes Werkzeug
        vollständig auf Ihrem eigenen Gerät läuft, sehen wir Ihre Dateien nicht
        und können sie weder wiederherstellen noch einsehen. Aber bei allem
        anderen &mdash; wie ein Werkzeug funktioniert, warum ein Ergebnis so
        aussieht, wie es aussieht, oder was wir als Nächstes entwickeln sollten
        &mdash; helfen wir Ihnen wirklich gerne.
      </p>
      <p>Gründe, aus denen man uns normalerweise schreibt:</p>
      <ul>
        <li>
          <strong>Fragen</strong> dazu, wie ein Werkzeug funktioniert, welches
          Format zu wählen ist oder wie man die kleinste Datei ohne
          Qualitätsverlust erhält.
        </li>
        <li>
          <strong>Fehlerberichte</strong> &mdash; eine Datei, die sich nicht
          verarbeiten lässt, eine Schaltfläche, die nicht reagiert, oder
          irgendetwas, das kaputt aussieht. Wenn Sie uns Ihren Browser und Ihr
          Betriebssystem nennen, hilft uns das, den Fehler schnell
          nachzustellen.
        </li>
        <li>
          <strong>Funktionswünsche</strong> &mdash; ein Format, das Sie sich
          wünschen, eine Option, die Ihnen fehlt, oder ein Arbeitsablauf, den
          wir reibungsloser gestalten könnten.
        </li>
        <li>
          <strong>Feedback</strong> jeder Art, einschließlich der Dinge, die Sie
          lieben, und der Dinge, die Sie frustrieren. All das prägt, was wir als
          Nächstes tun.
        </li>
      </ul>

      <h2 id="form">Senden Sie uns eine Nachricht</h2>
      <p>
        Füllen Sie das Formular unten aus und klicken Sie auf &bdquo;Nachricht
        senden&ldquo;. Es gibt etwas Wichtiges, das Sie über die Funktionsweise
        wissen sollten:{" "}
        <strong>
          Das Formular verfasst eine E-Mail in Ihrer eigenen E-Mail-App, anstatt
          uns direkt etwas zu senden.
        </strong>{" "}
        Wenn Sie absenden, öffnet Ihr Gerät Ihr Standard-E-Mail-Programm (wie
        Apple Mail, Outlook oder Gmail) mit der bereits ausgefüllten und an uns
        adressierten Nachricht. Es wird nichts übertragen, bis <em>Sie</em>{" "}
        innerhalb dieser App auf Senden tippen. Dadurch werden über diese Seite
        keine Nachrichtendaten von FileShrinking erfasst, an einen Server
        übertragen oder gespeichert &mdash; dasselbe Datenschutzprinzip, das Ihre
        Dateien auf Ihrem Gerät hält, gilt auch für Ihre Nachrichten.
      </p>

      <ContactForm />

      <h2 id="email">Lieber direkt per E-Mail?</h2>
      <p>
        Sie können uns jederzeit auf die altbewährte Weise erreichen. Schreiben
        Sie an{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> von
        dem Konto, das Sie möchten, und Ihre Nachricht landet direkt in unserem
        Support-Postfach. Das ist praktisch, wenn Ihr Browser die Aktion
        &bdquo;meine E-Mail-App öffnen&ldquo; des Formulars blockiert, wenn Sie
        an einem gemeinsam genutzten Computer ohne eingerichtetes E-Mail-Programm
        sitzen oder wenn Sie einfach einen Screenshot anhängen möchten &mdash;
        was einen Fehlerbericht oft viel verständlicher macht.
      </p>

      <h2 id="response-times">Antwortzeiten</h2>
      <p>
        FileShrinking wird von einem kleinen Team betrieben, daher lesen wir jede
        Nachricht persönlich, anstatt sie über ein Callcenter zu leiten. Wir
        bemühen uns, innerhalb von{" "}
        <strong>zwei bis drei Werktagen</strong> zu antworten. In arbeitsreichen
        Zeiten oder bei kniffligen technischen Fragen, die untersucht werden
        müssen, kann es etwas länger dauern &mdash; vielen Dank im Voraus für Ihre
        Geduld. Wenn Sie innerhalb von etwa einer Woche nichts von uns hören,
        prüfen Sie bitte Ihren Spam- oder Junk-Ordner und schreiben Sie uns dann
        gerne erneut, falls Ihre ursprüngliche Nachricht verloren gegangen sein
        sollte.
      </p>
      <p>
        Bitte beachten Sie, dass wir Support nur auf Englisch anbieten und dass
        wir Ihnen weder bei Dateien helfen können, die Sie anderswo verarbeitet
        haben, noch bei Software von Drittanbietern. Für Fragen dazu, wie wir mit
        Daten umgehen und zu den begrenzten Analyse- und Werbefunktionen auf
        dieser Website &mdash; die alle Ihrer Einwilligung unterliegen &mdash;
        sehen Sie sich unsere{" "}
        <Link href="/de/privacy-policy">Datenschutzerklärung</Link> an. Für die
        Regeln, die die Nutzung der Website regeln, sehen Sie sich unsere{" "}
        <Link href="/de/terms-of-service">Nutzungsbedingungen</Link> an.
      </p>

      <h2 id="before-you-write">Bevor Sie schreiben, ein kurzer Tipp</h2>
      <p>
        Viele häufige Fragen werden bereits auf der Seite jedes Werkzeugs
        beantwortet, wo Sie eine kurze FAQ zu Datenschutz, Größenbeschränkungen,
        Qualität und Stapelverarbeitung finden. Wenn Sie neugierig sind, wer
        FileShrinking entwickelt und warum wir einen vollständig
        clientseitigen Ansatz gewählt haben, erzählt unsere{" "}
        <Link href="/de/about">Über-uns-Seite</Link> die Geschichte. Und wenn Ihre
        Antwort dort nicht zu finden ist, ist genau dafür das Formular oben da
        &mdash; zögern Sie nicht, uns zu kontaktieren.
      </p>
    </>
  ),
};
