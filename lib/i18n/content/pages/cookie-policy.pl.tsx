import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Polityka plików cookie",
  metaDescription:
    "Jak FileShrinking korzysta z plików cookie i pamięci lokalnej: minimalna pamięć własna na zgodę i motyw oraz Google Analytics i AdSense za zgodą.",
  title: "Polityka plików cookie",
  intro: (
    <>
      FileShrinking działa w całości w Twojej przeglądarce i ogranicza pliki
      cookie do absolutnego minimum. Ta strona wyjaśnia dokładnie, co jest
      przechowywane na Twoim urządzeniu, dlaczego, jak długo i jak w każdej
      chwili możesz zmienić swoje wybory.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Przegląd</h2>
      <p>
        &bdquo;Plik cookie&rdquo; to mały plik tekstowy, o którego zapisanie
        witryna prosi Twoją przeglądarkę, aby móc zapamiętać informacje między
        wizytami. Pokrewne technologie, takie jak <strong>localStorage</strong>,
        {" "}działają tak samo: zapisują niewielką ilość danych na Twoim własnym
        urządzeniu. FileShrinking to narzędzie, które stawia prywatność na
        pierwszym miejscu i działa w 100% po stronie klienta. Twoje pliki są
        kompresowane lokalnie w Twojej przeglądarce i{" "}
        <strong>nigdy nie są przesyłane</strong> do nas ani do nikogo innego,
        dlatego nigdy nie ustawiamy pliku cookie, który zawierałby, śledził lub
        przesyłał Twoje pliki bądź ich zawartość.
      </p>
      <p>
        Wykorzystujemy jedynie niewielką ilość pamięci{" "}
        <strong>własnej</strong>, aby zapamiętać Twoje preferencje, a usługi{" "}
        <strong>reklamowe i analityczne firm trzecich</strong> od Google
        ładujemy <strong>dopiero po wyrażeniu przez Ciebie zgody</strong>. Dopóki
        nie zaakceptujesz, te usługi są zablokowane i nie ustawiają żadnych
        plików cookie. Tę politykę należy czytać wraz z naszą{" "}
        <Link href="/pl/privacy-policy">Polityką prywatności</Link>.
      </p>

      <h2 id="first-party">Pamięć własna, którą ustawiamy</h2>
      <p>
        Te elementy są zapisywane przez sam FileShrinking, znajdują się wyłącznie
        na Twoim urządzeniu i są niezbędne, aby witryna mogła zapamiętać
        podstawowe wybory. Są przechowywane w localStorage Twojej przeglądarki, a
        nie jako tradycyjne pliki cookie, nigdy nie są wysyłane na serwer i nie
        identyfikują Cię.
      </p>
      <ul>
        <li>
          <strong>Decyzja o zgodzie.</strong> Gdy akceptujesz lub odrzucasz
          opcjonalne usługi w naszym banerze zgody, zapisujemy tę decyzję, aby
          nie pytać Cię ponownie przy każdym wczytaniu strony i aby móc ją
          uszanować.
        </li>
        <li>
          <strong>Preferencja motywu.</strong> Jeśli przełączasz się między
          trybem jasnym a ciemnym, zapamiętujemy Twój wybór, aby witryna
          wyglądała tak, jak ją zostawiłeś.
        </li>
      </ul>

      <h2 id="consent-gated">Usługi firm trzecich uzależnione od zgody</h2>
      <p>
        Aby FileShrinking pozostał bezpłatny, witryna jest utrzymywana z reklam,
        a analityki używamy, by rozumieć, które narzędzia są przydatne. Usługi te
        są dostarczane przez Google i ładowane za pośrednictwem{" "}
        <strong>Google Tag Manager</strong>. Mogą one ustawiać własne pliki
        cookie, ale uruchamiają się dopiero{" "}
        <strong>po tym, jak wyraźnie zaakceptujesz</strong> je w naszym banerze
        zgody. Dotyczy to następujących usług:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> &mdash; mierzy zbiorcze, anonimowe
          korzystanie z witryny, takie jak wyświetlenia stron i to, które
          kompresory są popularne, co pomaga nam ulepszać witrynę.
        </li>
        <li>
          <strong>Google AdSense</strong> (oraz jego serwowanie reklam
          DoubleClick) &mdash; wyświetla reklamy finansujące projekt i pomaga
          ograniczyć, jak często widzisz tę samą reklamę.
        </li>
      </ul>

      <h2 id="table">Pliki cookie i pamięć, których używamy</h2>
      <p>
        Poniższa tabela wymienia główne elementy. Dokładne nazwy i czasy
        przechowywania ustawiane przez Google mogą się zmieniać; aby poznać
        najbardziej aktualne szczegóły, zapoznaj się z własną dokumentacją
        Google, do której odsyłamy w sekcji{" "}
        <a href="#managing">Zarządzanie swoimi wyborami</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Dostawca</th>
            <th>Cel</th>
            <th>Czas trwania</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Decyzja o zgodzie
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (własny)</td>
            <td>
              Zapamiętuje, czy zaakceptowałeś, czy odrzuciłeś opcjonalne pliki
              cookie.
            </td>
            <td>Trwały, dopóki go nie usuniesz</td>
          </tr>
          <tr>
            <td>
              Motyw
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (własny)</td>
            <td>Zapamiętuje Twoją preferencję trybu jasnego lub ciemnego.</td>
            <td>Trwały, dopóki go nie usuniesz</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics (ustawiany tylko za zgodą)</td>
            <td>
              Rozróżnia anonimowych odwiedzających, aby mierzyć zbiorcze
              korzystanie z witryny.
            </td>
            <td>Do 2 lat</td>
          </tr>
          <tr>
            <td>
              IDE, DSID, test_cookie
              <br />
              i powiązane pliki cookie reklam
            </td>
            <td>Google AdSense / DoubleClick (ustawiany tylko za zgodą)</td>
            <td>
              Serwuje i mierzy reklamy oraz ogranicza wielokrotne wyświetlanie
              tej samej reklamy.
            </td>
            <td>Sesja do 13 miesięcy</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consent-mode">
        Tryb zgody v2: domyślnie odmowa
      </h2>
      <p>
        Korzystamy z <strong>Trybu zgody v2</strong> firmy Google. Mówiąc
        prościej, oznacza to, że każdy sygnał zgody &mdash; dotyczący
        przechowywania danych analitycznych, przechowywania danych reklamowych,
        personalizacji reklam oraz danych użytkownika do reklam &mdash;
        rozpoczyna się w stanie{" "}
        <strong>&bdquo;odmowa&rdquo;</strong> domyślnie w chwili wczytania
        strony. Nic nie zostaje przyznane, dopóki nie dokonasz wyboru.
      </p>
      <p>
        Jeśli <strong>zaakceptujesz</strong>, odpowiednie sygnały przełączają się
        na &bdquo;przyznano&rdquo; i Google Analytics oraz AdSense mogą ustawić
        opisane powyżej pliki cookie. Jeśli <strong>odrzucisz</strong> lub po
        prostu zignorujesz baner, te sygnały pozostają w stanie
        &bdquo;odmowa&rdquo;: skrypty działają w ograniczonym, bezcookiowym
        trybie i nie przechowują identyfikatorów na Twoim urządzeniu. Tak czy
        inaczej, Twoje powyższe preferencje własne nadal działają, ponieważ są
        ściśle niezbędne do funkcjonowania witryny.
      </p>

      <h2 id="managing">Zarządzanie swoimi wyborami</h2>
      <p>
        Zawsze masz kontrolę. Możesz zmienić lub wycofać swoją zgodę w każdej
        chwili za pomocą odnośnika <strong>Ustawienia zgody</strong> w stopce
        każdej strony, który ponownie otwiera baner zgody, abyś mógł
        zaktualizować swoją decyzję. Wycofanie zgody powstrzymuje usługi Google
        od ustawiania nowych plików cookie w przyszłości.
      </p>
      <p>
        Możesz również zarządzać plikami cookie bezpośrednio w swojej
        przeglądarce: większość przeglądarek pozwala wyświetlać, blokować lub
        usuwać pliki cookie oraz czyścić pamięć witryny z poziomu menu
        prywatności lub ustawień. Usunięcie naszych elementów własnych oznacza po
        prostu, że witryna ponownie poprosi Cię o preferencje dotyczące motywu i
        zgody. Aby poznać więcej szczegółów na temat usług firm trzecich,
        zapoznaj się z{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          informacjami o plikach cookie
        </a>{" "}
        firmy Google oraz jej{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          polityką prywatności
        </a>
        .
      </p>

      <h2 id="changes">Zmiany w tej polityce</h2>
      <p>
        Możemy aktualizować niniejszą Politykę plików cookie, jeśli dodamy
        funkcję lub zmienimy usługi, na których polegamy. Gdy to zrobimy,
        zaktualizujemy datę &bdquo;Ostatnia aktualizacja&rdquo; u góry tej
        strony. Istotne zmiany dotyczące plików cookie, które ustawiamy, zostaną
        odzwierciedlone w banerze zgody, abyś mógł ponownie przejrzeć swój wybór.
      </p>

      <h2 id="contact">Skontaktuj się z nami</h2>
      <p>
        Jeśli masz jakiekolwiek pytania dotyczące tego, jak używamy plików cookie
        lub pamięci lokalnej, napisz do nas na adres{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. Aby
        uzyskać pełniejszy obraz tego, jak przetwarzamy dane, przeczytaj naszą{" "}
        <Link href="/pl/privacy-policy">Politykę prywatności</Link>.
      </p>
    </>
  ),
};
