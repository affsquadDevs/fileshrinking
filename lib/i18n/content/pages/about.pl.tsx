import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "O FileShrinking",
  metaDescription:
    "Poznaj twórców FileShrinking i dowiedz się, dlaczego nasz kompresor działający w 100% w przeglądarce zatrzymuje obrazy, PDF, wideo i audio na Twoim urządzeniu.",
  title: "O FileShrinking",
  intro: (
    <>
      FileShrinking to bezpłatny, stawiający prywatność na pierwszym miejscu
      zestaw narzędzi do kompresji obrazów, plików PDF, wideo i audio. Każdy plik
      jest przetwarzany w całości w Twojej przeglądarce, więc nic, co tu
      otworzysz, nigdy nie jest wysyłane na serwer.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2>Nasza misja</h2>
      <p>
        FileShrinking istnieje po to, aby kompresja plików była naprawdę
        bezpłatna, naprawdę prywatna i dostępna dla każdego, kto ma przeglądarkę
        internetową. Duże pliki spowalniają strony, zapychają skrzynki e-mail
        oraz zajmują pamięć telefonu i plany w chmurze. Ich zmniejszanie nie
        powinno wymagać instalowania oprogramowania, zakładania konta, opłacania
        subskrypcji ani przekazywania osobistych dokumentów firmie, której nigdy
        nie poznałeś. Nasz cel jest prosty: dać Ci kompresję na profesjonalnym
        poziomie, która działa na Twoim własnym urządzeniu, nic nie kosztuje i
        szanuje Twoją prywatność już na etapie projektowania.
      </p>

      <h2>Dlaczego &bdquo;100% w Twojej przeglądarce&rdquo; ma znaczenie</h2>
      <p>
        Większość kompresorów online działa, wysyłając Twój plik na zdalny
        serwer, przetwarzając go tam i odsyłając wynik z powrotem. Oznacza to, że
        kopia Twojego zdjęcia, umowy lub domowego nagrania trafia na komputer
        kogoś innego, przynajmniej tymczasowo. FileShrinking działa inaczej. Gdy
        wybierasz plik, jest on wczytywany do pamięci Twojej przeglądarki i
        kompresowany lokalnie przy użyciu kompilacji WebAssembly zaufanych
        koderów o otwartym kodzie źródłowym, takich jak MozJPEG, OxiPNG i FFmpeg.
        Gotowy plik jest przekazywany prosto do Ciebie.
      </p>
      <p>
        Praktyczny efekt jest taki, że <strong>Twoje pliki fizycznie nigdy nie
        opuszczają Twojego urządzenia</strong>. Nie ma niczego, co moglibyśmy
        przechować, niczego, co moglibyśmy ujawnić w razie wycieku danych, i
        niczego, co moglibyśmy sprzedać lub udostępnić. Możesz się o tym przekonać
        sam: otwórz dowolne z naszych narzędzi, odłącz się od internetu, a
        kompresja nadal będzie działać, ponieważ cała ciężka praca odbywa się na
        Twoim komputerze. Ten model wyłącznie lokalny jest podstawą zaufania, o
        które Cię prosimy, i nie jest to marketingowy slogan, z którego moglibyśmy
        się później po cichu wycofać.
      </p>

      <h2>Co tworzymy</h2>
      <p>
        FileShrinking to rozwijający się zestaw skoncentrowanych, jednozadaniowych
        narzędzi. Nasz{" "}
        <Link href="/pl/image-compressor">kompresor obrazów</Link> obsługuje
        JPEG, PNG, WebP, AVIF i GIF, wraz z towarzyszącymi narzędziami do
        konwersji i zmiany rozmiaru. Obok narzędzi do obrazów oferujemy kompresor
        PDF, który ponownie kompresuje obrazy osadzone wewnątrz dokumentów,
        kompresję wideo w przeglądarce dla formatów takich jak MP4, MOV, WebM, MKV
        i AVI oraz kompresor audio dla MP3, WAV i AAC. Wszystkie narzędzia opierają
        się na tych samych zasadach: bez przesyłania na serwer, bez rejestracji,
        bez znaków wodnych i bez sztucznych ograniczeń liczby czy rozmiaru plików
        poza tym, na co pozwala pamięć Twojego własnego urządzenia.
      </p>

      <h2>Jak prowadzimy badania i piszemy nasze przewodniki</h2>
      <p>
        Poza narzędziami publikujemy praktyczne przewodniki i artykuły
        wyjaśniające na naszym{" "}
        <Link href="/pl/blog">blogu</Link>, opisujące, jak naprawdę działają
        formaty kompresji i jak uzyskać najlepszy kompromis między jakością a
        rozmiarem. Traktujemy dokładność poważnie. Nasz proces redakcyjny
        zaczyna się od pierwotnych, autorytatywnych źródeł: samych specyfikacji
        formatów, dokumentacji platformy webowej z{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>{" "}
        oraz{" "}
        <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
          W3C
        </a>
        , a także dokumentacji koderów o otwartym kodzie źródłowym, na których
        opierają się nasze narzędzia. Sprawdzamy twierdzenia z rzeczywistym
        zachowaniem narzędzi, które udostępniamy, podajemy nasze źródła, abyś mógł
        je zweryfikować, i poprawiamy artykuły, gdy zmieniają się standardy lub
        wsparcie przeglądarek. Gdy nie mamy pewności, mówimy o tym, zamiast
        zgadywać.
      </p>

      <h2>Kto utrzymuje FileShrinking</h2>
      <p>
        FileShrinking jest tworzony i utrzymywany przez mały, niezależny zespół
        deweloperów webowych, którym zależy na wydajności i prywatności w
        nowoczesnym internecie. Nie mamy finansowania venture i nie prowadzimy
        biznesu opartego na danych; serwis pozostaje bezpłatny dzięki dyskretnym,
        wyraźnie oznaczonym reklamom.
      </p>
      <p>
        Nasi opiekunowie projektu wywodzą się ze środowisk związanych z
        wydajnością webową i przetwarzaniem mediów oraz przez lata pomagali
        zespołom wdrażać lżejsze i szybsze strony bez utraty jakości. Zespół
        wyznacza kierunek techniczny projektu, sprawdza każde narzędzie przed
        wydaniem i odpowiada za opisane powyżej standardy redakcyjne. Możesz
        skontaktować się z nami bezpośrednio pod adresem{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2>Reklamy, analityka i Twoja zgoda</h2>
      <p>
        Aby utrzymać FileShrinking bezpłatnym, wyświetlamy reklamy i korzystamy z
        analityki, aby zrozumieć, które narzędzia są przydatne. Te usługi
        zewnętrzne są{" "}
        <strong>uzależnione od Twojej zgody</strong>: skrypty reklamowe i
        analityczne wczytują się dopiero po jej wyrażeniu, a możesz je odrzucić i
        nadal korzystać z każdego narzędzia. Co najważniejsze, nic z tego nie
        zmienia sposobu, w jaki traktowane są Twoje pliki — reklamy i analityka
        nigdy nie otrzymują Twoich dokumentów, zdjęć, wideo ani audio, ponieważ
        te w ogóle nie są przesyłane poza Twoje urządzenie. Po pełne informacje
        sięgnij do naszych opublikowanych polityk prywatności i plików cookie.
      </p>

      <h2>Skontaktuj się z nami</h2>
      <p>
        Pytania, zgłoszenia błędów lub pomysły na kolejne narzędzie, które
        powinniśmy stworzyć, są zawsze mile widziane. Odwiedź naszą{" "}
        <Link href="/pl/contact">stronę kontaktową</Link> lub napisz do nas na{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
        Czytamy wszystko i wykorzystujemy Twoje opinie, aby decydować, co
        ulepszyć.
      </p>
    </>
  ),
};
