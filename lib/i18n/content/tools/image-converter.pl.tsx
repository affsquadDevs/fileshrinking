import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Konwerter obrazów — JPEG, PNG, WebP i AVIF",
  metaDescription:
    "Konwertuj obrazy między JPEG, PNG, WebP i AVIF prywatnie w przeglądarce. Bez wysyłania — pliki nigdy nie opuszczają Twojego urządzenia.",
  heading: "Konwerter obrazów",
  intro: (
    <>
      Konwertuj obrazy między JPEG, PNG, WebP i AVIF bezpośrednio w przeglądarce.
      Upuść plik, wybierz potrzebny format i pobierz wynik w kilka sekund — każda
      konwersja działa na Twoim urządzeniu, więc nic nie jest nigdy wysyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak przekonwertować obraz",
    description:
      "Konwertuj między JPEG, PNG, WebP i AVIF lokalnie w przeglądarce w czterech krokach.",
    steps: [
      {
        name: "Dodaj swój obraz",
        text: "Przeciągnij i upuść plik JPEG, PNG, WebP, AVIF lub GIF na obszar zrzutu, kliknij, aby go wyszukać, albo wklej ze schowka. Możesz dodać kilka plików naraz do kolejki.",
      },
      {
        name: "Wybierz format wyjściowy",
        text: "Wybierz JPEG, PNG, WebP lub AVIF. Użyj WebP lub AVIF, aby uzyskać najlżejsze pliki gotowe do sieci, PNG, gdy potrzebujesz bezstratnej przezroczystości, albo JPEG dla maksymalnej zgodności.",
      },
      {
        name: "Ustaw jakość",
        text: "W przypadku JPEG, WebP i AVIF dostosuj suwak jakości — okolice 80 to świetny kompromis. Wynik PNG jest zawsze bezstratny, więc nie ma jakości do ustawienia.",
      },
      {
        name: "Pobierz przekonwertowane pliki",
        text: "Zapisz każdy przekonwertowany obraz osobno albo pobierz je wszystkie naraz jako ZIP. Zmień format lub jakość i przekonwertuj ponownie, kiedy tylko chcesz.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje pliki są wysyłane na serwer, gdy je konwertuję?",
      a: (
        <>
          Nie. Konwersja odbywa się w całości w Twojej przeglądarce za pomocą
          kodeków WebAssembly. Obraz jest dekodowany i ponownie kodowany w pamięci
          na Twoim własnym urządzeniu, więc Twoje pliki nigdy nie trafiają na
          serwer — możesz nawet odłączyć się od internetu po załadowaniu strony,
          a wszystko nadal będzie działać.
        </>
      ),
      text: "Nie. Konwersja odbywa się w całości w Twojej przeglądarce za pomocą kodeków WebAssembly. Obraz jest dekodowany i ponownie kodowany w pamięci na Twoim własnym urządzeniu, więc Twoje pliki nigdy nie trafiają na serwer. Możesz odłączyć się od internetu po załadowaniu strony, a wszystko nadal będzie działać.",
    },
    {
      q: "Czy konwerter obrazów jest darmowy?",
      a: (
        <>
          Tak — jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez
          limitów co do liczby konwertowanych plików ani ich rozmiaru, poza tym,
          na co pozwala pamięć Twojego urządzenia. Strona jest finansowana z mało
          inwazyjnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez limitów co do liczby konwertowanych plików ani ich rozmiaru, poza tym, na co pozwala pamięć Twojego urządzenia. Strona jest finansowana z mało inwazyjnych reklam.",
    },
    {
      q: "Czy konwersja wpłynie na jakość obrazu?",
      a: (
        <>
          To zależy od formatu docelowego. Konwersja do PNG jest bezstratna, więc
          żaden szczegół nie zostaje utracony. Konwersja do JPEG, WebP lub AVIF
          jest stratna i ponownie koduje obraz z wybraną przez Ciebie jakością —
          wartości od 75 do 85 są wizualnie nie do odróżnienia od oryginału w
          przypadku większości zdjęć. Ponieważ stratne ponowne kodowanie się
          kumuluje, zawsze konwertuj z najwyższej jakości źródła, a nie z już
          skompresowanej kopii.
        </>
      ),
      text: "To zależy od formatu docelowego. Konwersja do PNG jest bezstratna, więc żaden szczegół nie zostaje utracony. Konwersja do JPEG, WebP lub AVIF jest stratna i ponownie koduje obraz z wybraną przez Ciebie jakością; wartości od 75 do 85 są wizualnie nie do odróżnienia od oryginału w przypadku większości zdjęć. Stratne ponowne kodowanie się kumuluje, więc zawsze konwertuj z najwyższej jakości źródła.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę przekonwertować?",
      a: (
        <>
          Nie ma sztywnego limitu — ogranicza go jedynie dostępna pamięć Twojego
          urządzenia. Codzienne zdjęcia o rozmiarze kilku megabajtów oraz duże
          obrazy o rozdzielczości od 20 do 50 MP konwertują się bez problemów, a
          kodowanie AVIF najbardziej obciąża procesor, więc bardzo duże obrazy po
          prostu zajmują nieco więcej czasu.
        </>
      ),
      text: "Nie ma sztywnego limitu; ogranicza go jedynie dostępna pamięć Twojego urządzenia. Codzienne zdjęcia o rozmiarze kilku megabajtów oraz duże obrazy o rozdzielczości od 20 do 50 MP konwertują się bez problemów. Kodowanie AVIF najbardziej obciąża procesor, więc bardzo duże obrazy zajmują nieco więcej czasu.",
    },
    {
      q: "Na jaki format powinienem konwertować?",
      a: (
        <>
          W przypadku zdjęć, dla których chcesz szerokiej zgodności, użyj JPEG lub
          WebP. W przypadku grafik, logotypów, zrzutów ekranu lub czegokolwiek, co
          wymaga przezroczystości, użyj PNG lub WebP. Aby uzyskać najmniejszy
          możliwy plik z obsługą nowoczesnych przeglądarek, wybierz AVIF. WebP to
          najbezpieczniejszy wszechstronny wybór, ponieważ obsługuje zarówno
          stratne zdjęcia, jak i bezstratną przezroczystość.
        </>
      ),
      text: "W przypadku zdjęć, dla których chcesz szerokiej zgodności, użyj JPEG lub WebP. W przypadku grafik, logotypów, zrzutów ekranu lub czegokolwiek, co wymaga przezroczystości, użyj PNG lub WebP. Aby uzyskać najmniejszy możliwy plik z obsługą nowoczesnych przeglądarek, wybierz AVIF. WebP to najbezpieczniejszy wszechstronny wybór, ponieważ obsługuje zarówno stratne zdjęcia, jak i bezstratną przezroczystość.",
    },
    {
      q: "Co dzieje się z przezroczystością, gdy konwertuję do JPEG?",
      a: (
        <>
          JPEG nie obsługuje kanału alfa, więc wszelkie przezroczyste obszary
          zostają spłaszczone na jednolitym tle przy konwersji do JPEG. Jeśli Twój
          obraz opiera się na przezroczystości — na przykład logo, które ma
          znajdować się na różnych tłach — zamiast tego przekonwertuj go do PNG lub
          WebP, które oba zachowują kanał alfa.
        </>
      ),
      text: "JPEG nie obsługuje kanału alfa, więc przezroczyste obszary zostają spłaszczone na jednolitym tle przy konwersji do JPEG. Jeśli Twój obraz opiera się na przezroczystości, na przykład logo, zamiast tego przekonwertuj go do PNG lub WebP, które oba zachowują kanał alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">Dlaczego warto konwertować między formatami obrazów?</h2>
      <p>
        Nie każdy format obrazu jest odpowiedni do każdego zadania. Logo zapisane
        jako JPEG wygląda nieostro na krawędziach; fotografia zapisana jako PNG
        może być kilkukrotnie większa, niż to konieczne; a sprzed dekady GIF
        zajmuje znacznie więcej miejsca niż nowoczesny odpowiednik. Konwersja
        obrazu do bardziej odpowiedniego formatu może sprawić, że stanie się on
        znacznie mniejszy, ostrzejszy lub bardziej zgodny z tym, gdzie go
        publikujesz — bez ponownego fotografowania czy przeprojektowywania
        czegokolwiek.
      </p>
      <p>
        Najczęstszym powodem, dla którego ludzie konwertują, jest zmniejszanie
        obrazów na potrzeby sieci. Przeniesienie zdjęcia z JPEG do{" "}
        <Link href="/pl/compress-webp">WebP</Link> lub{" "}
        <Link href="/pl/compress-avif">AVIF</Link> może zmniejszyć jego rozmiar o
        jedną czwartą do połowy przy tej samej jakości wizualnej, co oznacza
        szybsze strony i niższe rachunki za przepustowość. Inni konwertują w
        przeciwnym kierunku — zamieniają WebP lub AVIF z powrotem na powszechnie
        obsługiwany JPEG lub PNG, aby otwierał się w starszym oprogramowaniu albo
        dał się dołączyć do wiadomości e-mail. Ponieważ ten konwerter działa w
        całości na Twoim urządzeniu, możesz robić to wszystko bez oddawania
        swoich obrazów zdalnemu serwerowi.
      </p>

      <h2 id="lossy">Konwersja bezstratna i stratna: co się zmienia</h2>
      <p>
        Konwersja obrazu zawsze oznacza jego zdekodowanie i ponowne zakodowanie w
        nowym formacie, a wybrany format decyduje, czy ten krok jest{" "}
        <strong>bezstratny</strong> czy <strong>stratny</strong>. PNG jest
        bezstratny: każdy piksel jest zachowany dokładnie, dlatego jest idealny do
        grafik i zrzutów ekranu, ale tworzy duże pliki w przypadku zdjęć. JPEG,
        WebP i AVIF są domyślnie stratne — odrzucają szczegóły, których Twoje oko
        najmniej zauważy, aby uczynić plik znacznie mniejszym, a suwak jakości
        kontroluje, jak agresywny jest ten kompromis.
      </p>
      <p>
        Kluczowe do zrozumienia jest to, że konwersja stratna{" "}
        <strong>się kumuluje</strong>. Za każdym razem, gdy ponownie kodujesz już
        stratny obraz, odrzucanych jest nieco więcej szczegółów, więc zawsze
        powinieneś konwertować z najwyższej jakości źródła, jakie masz, a nie z
        kopii, która została już ściśnięta. Konwersja stratnego JPEG{" "}
        <em>do</em> PNG również nie przywróci magicznie utraconych szczegółów —
        po prostu zapisuje już zdegradowane piksele bezstratnie, zwykle w większym
        pliku. W przypadku zdjęć jakość na poziomie <strong>75–85</strong> w JPEG,
        WebP lub AVIF to złoty środek, w którym wynik jest zasadniczo nie do
        odróżnienia od oryginału przy normalnych rozmiarach wyświetlania.
      </p>

      <h2 id="formats">Krótki przewodnik po czterech formatach</h2>
      <p>
        Każdy format ma zadanie, które wykonuje najlepiej. <strong>JPEG</strong>{" "}
        to uniwersalny format fotograficzny — obsługiwany wszędzie, świetny do
        obrazów o płynnych przejściach tonalnych, ale bez przezroczystości.{" "}
        <strong>PNG</strong> jest bezstratny i obsługuje kanał alfa, co czyni go
        właściwym wyborem do logotypów, ikon, zrzutów ekranu i każdej grafiki, która
        wymaga ostrych krawędzi lub przezroczystego tła. <strong>WebP</strong> to
        nowoczesny wszechstronny format: radzi sobie zarówno ze stratnymi zdjęciami,
        jak i z bezstratną przezroczystością i jest zwykle o 25–35% mniejszy niż
        JPEG. <strong>AVIF</strong> zwykle tworzy najmniejsze pliki ze wszystkich i
        również obsługuje przezroczystość, kosztem wolniejszego kodowania i nieco
        węższego wsparcia oprogramowania. Wiarygodne zestawienie każdego z nich
        możesz przeczytać w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodniku MDN po typach plików obrazów
        </a>
        .
      </p>
      <p>
        W praktyce: wybierz <strong>JPEG lub WebP</strong> do fotografii,{" "}
        <strong>PNG lub WebP</strong> do grafik i wszystkiego z przezroczystością,
        a <strong>AVIF</strong>, gdy liczy się absolutnie najmniejszy plik, a Twoi
        odbiorcy korzystają z aktualnych przeglądarek. Pamiętaj, że{" "}
        <strong>JPEG nie ma przezroczystości</strong>, więc konwersja
        przezroczystego PNG lub WebP do JPEG spłaszczy go na jednolitym tle. Jeśli
        chcesz tylko zmniejszyć plik bez zmiany jego formatu, lepiej pasują
        dedykowane kompresory{" "}
        <Link href="/pl/compress-jpeg">JPEG</Link>,{" "}
        <Link href="/pl/compress-png">PNG</Link>,{" "}
        <Link href="/pl/compress-webp">WebP</Link> i{" "}
        <Link href="/pl/compress-avif">AVIF</Link>.
      </p>

      <h2 id="tips">Wskazówki dotyczące czystych konwersji</h2>
      <ul>
        <li>
          <strong>Konwertuj z oryginału.</strong> Zacznij od najwyższej jakości
          źródła, jakie masz, aby nie kompresować ponownie szczegółów, które już
          zostały utracone.
        </li>
        <li>
          <strong>Pamiętaj o przezroczystości przed wyborem JPEG.</strong> Jeśli
          Twój obraz ma przezroczyste obszary, które chcesz zachować, wybierz PNG
          lub WebP — JPEG nie potrafi przechować kanału alfa.
        </li>
        <li>
          <strong>Spróbuj najpierw WebP do sieci.</strong> To najlepszy
          kompromis między małym rozmiarem, obsługą przezroczystości i szeroką
          zgodnością z przeglądarkami, co czyni go bezpiecznym domyślnym wyborem
          dla większości witryn.
        </li>
        <li>
          <strong>Zmień rozmiar podczas konwersji.</strong> Jeśli obraz będzie
          wyświetlany w małym rozmiarze, zmniejszenie jego wymiarów oszczędza
          znacznie więcej niż sam wybór formatu — użyj wbudowanej opcji zmiany
          rozmiaru lub dedykowanego{" "}
          <Link href="/pl/image-resizer">narzędzia do zmiany rozmiaru obrazów</Link>.
        </li>
        <li>
          <strong>Porównaj przed podjęciem decyzji.</strong> Przekonwertuj to samo
          źródło do WebP i AVIF i sprawdź rozmiary plików oraz to, jak wyglądają w
          Twoim rozmiarze wyświetlania; zwycięzca różni się w zależności od obrazu.
        </li>
      </ul>
    </>
  ),
};
