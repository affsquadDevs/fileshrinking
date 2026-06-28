import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Polityka prywatności",
  metaDescription:
    "Jak FileShrinking obchodzi się z Twoimi danymi: pliki nigdy nie są wysyłane, kompresja odbywa się w przeglądarce. Analytics i reklamy wymagają zgody.",
  title: "Polityka prywatności",
  intro: (
    <>
      FileShrinking został zaprojektowany z myślą o prywatności na pierwszym
      miejscu. Pliki, które kompresujesz, nigdy nie są wysyłane &mdash; są w
      całości przetwarzane w Twojej przeglądarce, więc nigdy ich nie
      otrzymujemy, nie widzimy ani nie przechowujemy. Niniejsza polityka
      wyjaśnia, jakie nieliczne dane jednak przetwarzamy oraz jakie wybory
      kontrolujesz.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="overview">Przegląd</h2>
      <p>
        Niniejsza Polityka prywatności opisuje, w jaki sposób FileShrinking
        ({" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a>,
        &bdquo;Witryna&rdquo;) gromadzi, wykorzystuje i chroni informacje, gdy
        ją odwiedzasz. Witryna jest prowadzona przez zespół FileShrinking
        (&bdquo;my&rdquo; lub &bdquo;nasz&rdquo;). Korzystając z Witryny,
        akceptujesz opisane tutaj praktyki. Przeczytaj również naszą{" "}
        <Link href="/pl/cookie-policy">Politykę plików cookie</Link> oraz nasz{" "}
        <Link href="/pl/terms-of-service">Regulamin</Link>, które stanowią część
        Twojej umowy z nami.
      </p>

      <h2 id="files-never-uploaded">Twoje pliki nigdy nie są wysyłane</h2>
      <p>
        To najważniejsza rzecz, jaką musisz zrozumieć na temat FileShrinking.
        Wszystkie nasze narzędzia do kompresji &mdash; obrazów, PDF, wideo i
        dźwięku &mdash; działają{" "}
        <strong>w 100% wewnątrz Twojej przeglądarki internetowej</strong> przy
        użyciu WebAssembly. Gdy dodajesz plik, jest on wczytywany do pamięci
        Twojego urządzenia i przetwarzany lokalnie na Twoim własnym sprzęcie.
        Skompresowany wynik jest zwracany bezpośrednio Tobie do pobrania.
      </p>
      <p>
        Dzięki temu rozwiązaniu <strong>nigdy nie otrzymujemy, nie widzimy, nie
        przechowujemy ani nie przesyłamy</strong> plików, które kompresujesz, ani
        żadnej ich zawartości. Nie ma żadnego etapu przesyłania na serwer, nigdzie
        nie jest zachowywana żadna kopia, a Twoje pliki nigdy nie opuszczają
        Twojego urządzenia. W rzeczywistości po załadowaniu strony możesz całkowicie
        odłączyć się od internetu, a narzędzia nadal będą działać.
      </p>

      <h2 id="what-we-do-not-collect">Czego nie gromadzimy</h2>
      <ul>
        <li>
          <strong>Twoich plików ani ich zawartości.</strong> Nie mamy dostępu do
          dokumentów, zdjęć, filmów ani dźwięku, które przetwarzasz.
        </li>
        <li>
          <strong>Danych konta.</strong> FileShrinking nie ma rejestracji,
          logowania ani kont użytkowników, więc nie gromadzimy nazwisk, haseł ani
          profili.
        </li>
        <li>
          <strong>Informacji o płatnościach.</strong> Korzystanie z Witryny jest
          bezpłatne; nie przetwarzamy płatności ani nie przechowujemy żadnych
          danych finansowych.
        </li>
      </ul>

      <h2 id="data-we-use">Informacje, które są wykorzystywane</h2>
      <p>
        FileShrinking celowo wykorzystuje bardzo niewiele danych. Poniższa tabela
        podsumowuje, co jest przechowywane lub przetwarzane, gdzie się znajduje i
        dlaczego.
      </p>
      <table>
        <thead>
          <tr>
            <th>Dane</th>
            <th>Gdzie się znajdują</th>
            <th>Cel</th>
            <th>Czy wymaga zgody?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wybór zgody</td>
            <td>localStorage (Twoja przeglądarka)</td>
            <td>
              Zapamiętanie, czy zaakceptowałeś, czy odrzuciłeś analytics i reklamy
            </td>
            <td>Nie &mdash; ściśle niezbędne</td>
          </tr>
          <tr>
            <td>Preferencja motywu</td>
            <td>localStorage (Twoja przeglądarka)</td>
            <td>
              Zapamiętanie trybu jasnego/ciemnego, aby Witryna wyglądała poprawnie
              po powrocie
            </td>
            <td>Nie &mdash; ściśle niezbędne</td>
          </tr>
          <tr>
            <td>Dane analytics</td>
            <td>Google Analytics (za pośrednictwem Google Tag Manager)</td>
            <td>Zrozumienie zagregowanego użycia w celu ulepszania Witryny</td>
            <td>Tak</td>
          </tr>
          <tr>
            <td>Dane reklamowe</td>
            <td>Google AdSense</td>
            <td>Wyświetlanie reklam, które pomagają utrzymać Witrynę bezpłatną</td>
            <td>Tak</td>
          </tr>
        </tbody>
      </table>
      <p>
        Powyższe wartości <strong>localStorage</strong> to niewielkie ustawienia
        przechowywane wyłącznie w Twojej przeglądarce. Nie są nam przesyłane i nie
        zawierają żadnych informacji osobowych &mdash; jedynie Twoją decyzję o
        zgodzie oraz wybrany motyw. Możesz je w dowolnej chwili usunąć z poziomu
        ustawień przeglądarki.
      </p>

      <h2 id="analytics">Analytics</h2>
      <p>
        Korzystamy z <strong>Google Analytics</strong>, ładowanego za
        pośrednictwem{" "}
        <strong>Google Tag Manager (GTM)</strong>, aby zrozumieć, jak odwiedzający
        korzystają z Witryny w ujęciu zagregowanym &mdash; na przykład które
        narzędzia są popularne i które strony wczytują się wolno. Pomaga nam to
        ustalać priorytety ulepszeń. Analytics{" "}
        <strong>jest ładowany dopiero po wyrażeniu przez Ciebie zgody</strong>.
        Jeśli odmówisz, te skrypty się nie uruchamiają i nie są gromadzone żadne
        dane analityczne. Dane analytics są gromadzone i przetwarzane w sposób
        zagregowany i nie są wykorzystywane do identyfikacji Ciebie osobiście.
      </p>

      <h2 id="advertising">Reklama</h2>
      <p>
        FileShrinking jest bezpłatny, a nasze koszty pokrywamy z reklam
        dostarczanych przez <strong>Google AdSense</strong>. Reklamy{" "}
        <strong>są ładowane dopiero po wyrażeniu przez Ciebie zgody</strong>. Gdy
        wyrazisz zgodę na reklamy, Google i jego partnerzy mogą wykorzystywać
        pliki cookie, identyfikatory urządzeń i podobne technologie do
        wyświetlania i pomiaru reklam, w tym{" "}
        <strong>reklam spersonalizowanych (opartych na zainteresowaniach)</strong>{" "}
        na podstawie Twojej wcześniejszej aktywności. Jeśli odmówisz, AdSense nie
        jest ładowany i nie będziesz otrzymywać od nas reklam spersonalizowanych.
      </p>
      <p>
        Wykorzystywanie przez Google reklamowych plików cookie podlega własnym
        zasadom Google. Więcej informacji oraz możliwość zarządzania ustawieniami
        reklam znajdziesz na{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          stronie Reklam Google
        </a>{" "}
        oraz w{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Polityce prywatności Google
        </a>
        .
      </p>

      <h2 id="consent-mode">Google Consent Mode v2</h2>
      <p>
        Wdrażamy <strong>Google Consent Mode v2</strong>. Zanim dokonasz wyboru,
        tagi analytics i reklam Google domyślnie przyjmują stan odmowy, co
        oznacza, że nie ustawiają identyfikujących plików cookie ani nie gromadzą
        danych osobowych. Dopiero po udzieleniu przez Ciebie zgody odpowiednie
        sygnały są aktualizowane, a powiązane usługi włączane. Daje Ci to
        rzeczywistą kontrolę nad tym, czy analytics i reklamy w ogóle się
        uruchomią.
      </p>

      <h2 id="third-party">Usługi i odnośniki stron trzecich</h2>
      <p>
        Wymienione powyżej usługi stron trzecich są prowadzone przez Google LLC.
        Sposób, w jaki obchodzą się z gromadzonymi przez siebie danymi, podlega
        ich własnym warunkom, a nie naszym:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polityka prywatności Google
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jak Google wykorzystuje pliki cookie w reklamie
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prywatność i bezpieczeństwo danych Google Analytics
          </a>
        </li>
      </ul>
      <p>
        Witryna może również zawierać odnośniki do innych stron internetowych,
        których nie kontrolujemy. Nie ponosimy odpowiedzialności za praktyki
        prywatności tych stron i zachęcamy do zapoznania się z ich politykami.
      </p>

      <h2 id="your-rights">Twoje prawa do prywatności (RODO)</h2>
      <p>
        Jeśli przebywasz w Europejskim Obszarze Gospodarczym lub w Wielkiej
        Brytanii, przysługują Ci prawa wynikające z Ogólnego rozporządzenia o
        ochronie danych, w tym prawo do <strong>dostępu</strong> do danych
        osobowych, które są o Tobie przechowywane, prawo do{" "}
        <strong>usunięcia (wymazania)</strong>, prawo do{" "}
        <strong>sprzeciwu wobec przetwarzania lub jego ograniczenia</strong> oraz
        prawo do <strong>wycofania zgody</strong> w dowolnym momencie. Tam, gdzie
        opieramy się na zgodzie (analytics i reklamy), jej wycofanie jest tak
        proste jak jej udzielenie i nie wpływa na zgodność z prawem przetwarzania
        dokonanego wcześniej.
      </p>
      <p>Aby skorzystać z tych praw, możesz:</p>
      <ul>
        <li>
          <strong>Ponownie otworzyć ustawienia zgody</strong> w dowolnym momencie
          za pomocą odnośnika do zgody lub preferencji plików cookie w stopce
          każdej strony, a następnie zmienić lub wycofać swoje wybory.
        </li>
        <li>
          <strong>Wyczyścić pamięć przeglądarki</strong>, aby usunąć lokalnie
          zapisane wartości zgody i motywu.
        </li>
        <li>
          <strong>Napisać do nas</strong> na adres{" "}
          <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>, a
          odpowiemy w terminie wymaganym przez obowiązujące prawo.
        </li>
      </ul>
      <p>
        Masz również prawo do wniesienia skargi do organu ochrony danych w Twoim
        kraju lub regionie, jeśli uważasz, że Twoje prawa zostały naruszone.
      </p>

      <h2 id="ccpa">Prawa do prywatności w Kalifornii (CCPA/CPRA)</h2>
      <p>
        Jeśli jesteś mieszkańcem Kalifornii, kalifornijska ustawa o ochronie
        prywatności konsumentów (California Consumer Privacy Act), w zmienionym
        brzmieniu, przyznaje Ci prawo do wiedzy, jakie informacje osobowe są
        gromadzone, do żądania ich usunięcia oraz do rezygnacji ze
        &bdquo;sprzedaży&rdquo; lub &bdquo;udostępniania&rdquo; informacji
        osobowych. Nie sprzedajemy Twoich informacji osobowych za pieniądze. Tam,
        gdzie wykorzystanie reklamowych plików cookie może być uznane za
        &bdquo;udostępnianie&rdquo; na potrzeby reklamy behawioralnej w różnych
        kontekstach, możesz zrezygnować, odrzucając zgodę na reklamy w naszych
        ustawieniach zgody lub w ogóle jej nie udzielając. Aby złożyć żądanie,
        napisz na adres{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2 id="retention">Przechowywanie danych</h2>
      <p>
        Ponieważ Twoje pliki są przetwarzane lokalnie i nigdy do nas nie
        docierają, nie ma niczego, co moglibyśmy o nich przechowywać. Wartości
        zgody i motywu przechowywane w Twojej przeglądarce pozostają, dopóki ich
        nie usuniesz lub nie zmienisz swoich wyborów. Dane analytics i reklamowe,
        gdy są włączone za Twoją zgodą, są przechowywane przez Google zgodnie z
        jego własnymi ustawieniami i zasadami przechowywania.
      </p>

      <h2 id="children">Prywatność dzieci</h2>
      <p>
        FileShrinking to narzędzie dla ogółu odbiorców i nie jest skierowane do
        dzieci poniżej 13. roku życia (lub minimalnego wieku w Twojej
        jurysdykcji). Nie gromadzimy świadomie informacji osobowych od dzieci.
        Jeśli uważasz, że dziecko przekazało nam informacje osobowe, skontaktuj
        się z nami, abyśmy mogli podjąć odpowiednie działania.
      </p>

      <h2 id="changes">Zmiany w niniejszej polityce</h2>
      <p>
        Od czasu do czasu możemy aktualizować niniejszą Politykę prywatności, aby
        odzwierciedlić zmiany w naszych praktykach lub z powodów prawnych. Gdy to
        zrobimy, zaktualizujemy datę &bdquo;Ostatnia aktualizacja&rdquo; u góry
        tej strony. Istotne zmiany mogą zostać wyróżnione w Witrynie. Zachęcamy do
        okresowego przeglądania tej strony.
      </p>

      <h2 id="contact">Skontaktuj się z nami</h2>
      <p>
        Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki prywatności
        lub sposobu, w jaki przetwarzane są Twoje dane, napisz do nas na adres{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> lub
        odwiedź naszą <Link href="/pl/contact">stronę kontaktową</Link>, a chętnie
        Ci pomożemy.
      </p>
    </>
  ),
};
