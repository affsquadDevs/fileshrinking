import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Kontakt",
  metaDescription:
    "Skontaktuj się z FileShrinking: pytania, opinie, błędy lub pomysły. Napisz na hello@fileshrinking.com — prywatność przede wszystkim, bez zapisu danych.",
  title: "Kontakt",
  intro: (
    <>
      Chętnie poznamy Twoją opinię. Niezależnie od tego, czy masz pytanie,
      uwagę, błąd do zgłoszenia czy pomysł na nową funkcję, formularz poniżej to
      najszybszy sposób, by dotrzeć do osób, które tworzą FileShrinking.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="get-in-touch">Skontaktuj się z nami</h2>
      <p>
        FileShrinking to bezpłatny zestaw narzędzi stawiający prywatność na
        pierwszym miejscu, służący do zmniejszania plików bezpośrednio w Twojej
        przeglądarce &mdash; od obrazów{" "}
        <Link href="/pl/compress-jpeg">JPEG</Link> i{" "}
        <Link href="/pl/compress-png">PNG</Link> po{" "}
        <Link href="/pl/pdf-compressor">dokumenty PDF</Link>,{" "}
        <Link href="/pl/video-compressor">wideo</Link> oraz{" "}
        <Link href="/pl/audio-compressor">audio</Link>. Ponieważ każde narzędzie
        działa w całości na Twoim urządzeniu, nie widzimy Twoich plików i nie
        możemy ich odzyskać ani sprawdzić. Ale w każdej innej sprawie &mdash;
        jak działa dane narzędzie, dlaczego wynik wygląda tak, jak wygląda, albo
        co powinniśmy zbudować w następnej kolejności &mdash; naprawdę chętnie
        pomożemy.
      </p>
      <p>Powody, dla których ludzie zwykle do nas piszą:</p>
      <ul>
        <li>
          <strong>Pytania</strong> o to, jak działa dane narzędzie, jaki format
          wybrać albo jak uzyskać najmniejszy plik bez utraty jakości.
        </li>
        <li>
          <strong>Zgłoszenia błędów</strong> &mdash; plik, który się nie
          przetwarza, przycisk, który nie reaguje, albo cokolwiek, co wygląda na
          uszkodzone. Podanie nam swojej przeglądarki i systemu operacyjnego
          pomaga nam szybko odtworzyć problem.
        </li>
        <li>
          <strong>Prośby o nowe funkcje</strong> &mdash; format, który chciałbyś,
          abyśmy obsługiwali, opcja, której Ci brakuje, albo proces, który
          moglibyśmy usprawnić.
        </li>
        <li>
          <strong>Opinie</strong> wszelkiego rodzaju, w tym o tym, co kochasz, i
          o tym, co Cię frustruje. Wszystko to kształtuje nasze kolejne kroki.
        </li>
      </ul>

      <h2 id="form">Wyślij nam wiadomość</h2>
      <p>
        Wypełnij formularz poniżej i kliknij &bdquo;Wyślij wiadomość&rdquo;. Oto
        coś ważnego, co warto wiedzieć o tym, jak to działa:{" "}
        <strong>
          formularz tworzy wiadomość e-mail w Twojej własnej aplikacji
          pocztowej, zamiast wysyłać nam cokolwiek bezpośrednio.
        </strong>{" "}
        Gdy klikniesz wyślij, Twoje urządzenie otworzy domyślny klient poczty
        (np. Apple Mail, Outlook lub Gmail) z wcześniej wypełnioną wiadomością
        zaadresowaną do nas. Nic nie zostaje przesłane, dopóki <em>Ty</em> nie
        klikniesz wyślij w tej aplikacji. W rezultacie żadne dane wiadomości nie
        są zbierane, przesyłane na serwer ani przechowywane przez FileShrinking
        za pośrednictwem tej strony &mdash; ta sama zasada prywatności, która
        utrzymuje Twoje pliki na Twoim urządzeniu, dotyczy również Twoich
        wiadomości.
      </p>

      <ContactForm />

      <h2 id="email">Wolisz napisać bezpośrednio e-mailem?</h2>
      <p>
        Zawsze możesz skontaktować się z nami w tradycyjny sposób. Napisz na{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> z
        dowolnego konta, a Twoja wiadomość trafi prosto do naszej skrzynki
        wsparcia. To przydatne, jeśli Twoja przeglądarka blokuje działanie
        &bdquo;otwórz moją aplikację pocztową&rdquo; w formularzu, jeśli
        korzystasz ze współdzielonego komputera bez skonfigurowanego klienta
        poczty albo jeśli po prostu chcesz dołączyć zrzut ekranu &mdash; co
        często sprawia, że zgłoszenie błędu jest dużo łatwiejsze do zrozumienia.
      </p>

      <h2 id="response-times">Czas odpowiedzi</h2>
      <p>
        FileShrinking prowadzi mały zespół, więc czytamy każdą wiadomość osobiście,
        zamiast kierować ją do call center. Staramy się odpowiadać w ciągu{" "}
        <strong>dwóch do trzech dni roboczych</strong>. W okresach wzmożonego
        ruchu lub w przypadku trudnych pytań technicznych wymagających analizy
        może to potrwać nieco dłużej &mdash; z góry dziękujemy za cierpliwość.
        Jeśli nie otrzymasz odpowiedzi w ciągu mniej więcej tygodnia, sprawdź
        folder ze spamem lub niechcianą pocztą, a następnie śmiało napisz do nas
        ponownie, na wypadek gdyby Twoja pierwotna wiadomość gdzieś zaginęła.
      </p>
      <p>
        Pamiętaj, że zapewniamy wsparcie wyłącznie w języku angielskim i nie
        możemy pomóc w przypadku plików przetworzonych gdzie indziej ani
        oprogramowania innych firm. W przypadku pytań o to, jak postępujemy z
        danymi oraz o ograniczone statystyki i reklamy na tej stronie &mdash;
        które w całości zależą od Twojej zgody &mdash; zobacz naszą{" "}
        <Link href="/pl/privacy-policy">Politykę prywatności</Link>. Aby poznać
        zasady regulujące korzystanie z witryny, zobacz nasz{" "}
        <Link href="/pl/terms-of-service">Regulamin</Link>.
      </p>

      <h2 id="before-you-write">Zanim napiszesz, krótka wskazówka</h2>
      <p>
        Wiele typowych pytań ma już odpowiedzi na stronie każdego narzędzia,
        gdzie znajdziesz krótkie FAQ obejmujące prywatność, limity rozmiaru
        plików, jakość i przetwarzanie wsadowe. Jeśli ciekawi Cię, kto tworzy
        FileShrinking i dlaczego wybraliśmy podejście w pełni po stronie klienta,
        nasza{" "}
        <Link href="/pl/about">strona O nas</Link> opowiada tę historię. A jeśli
        Twojej odpowiedzi tam nie ma, to właśnie do tego służy formularz powyżej
        &mdash; nie wahaj się napisać.
      </p>
    </>
  ),
};
