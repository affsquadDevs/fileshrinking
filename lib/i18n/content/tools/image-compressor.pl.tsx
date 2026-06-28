import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresor obrazów — darmowy i prywatny",
  metaDescription:
    "Kompresuj obrazy JPEG, PNG, WebP, AVIF i GIF w przeglądarce. 100% prywatnie, bez przesyłania i rejestracji — zdjęcia nie opuszczają urządzenia.",
  heading: "Kompresor obrazów",
  intro: (
    <>
      Kompresuj i konwertuj obrazy JPEG, PNG, WebP, AVIF i GIF bezpośrednio w
      przeglądarce. Dodaj swoje zdjęcia, wybierz format i jakość, a w kilka
      sekund pobierz mniejsze pliki — wszystko działa na Twoim urządzeniu, więc
      nic nigdy nie jest przesyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak skompresować obraz",
    description:
      "Skompresuj lub przekonwertuj dowolny popularny format obrazu lokalnie w przeglądarce w czterech krokach.",
    steps: [
      {
        name: "Dodaj swoje obrazy",
        text: "Przeciągnij i upuść pliki JPEG, PNG, WebP, AVIF lub GIF na obszar wczytywania, kliknij, aby przeglądać, lub wklej ze schowka. Mieszaj formaty dowolnie — każdy plik jest obsługiwany osobno.",
      },
      {
        name: "Wybierz format wyjściowy",
        text: "Pozostaw opcję Ten sam format, aby ponownie skompresować bez zmiany typu, lub wybierz JPEG, PNG, WebP albo AVIF, aby przekonwertować. WebP i AVIF dają najmniejsze pliki w przypadku zdjęć.",
      },
      {
        name: "Ustaw jakość (i zmień rozmiar w razie potrzeby)",
        text: "Skorzystaj z suwaka jakości — wartość około 75 pasuje do większości zdjęć — lub z poziomu bezstratnego dla PNG. Opcjonalnie zmień rozmiar według procentu lub dokładnej liczby pikseli, aby zaoszczędzić jeszcze więcej.",
      },
      {
        name: "Pobierz wyniki",
        text: "Zapisuj obrazy pojedynczo lub pobierz wszystkie jako plik ZIP. Każdy plik pokazuje swój pierwotny rozmiar, nowy rozmiar i zaoszczędzony procent, dzięki czemu możesz ponownie dostroić ustawienia i spróbować jeszcze raz.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje obrazy są przesyłane na serwer?",
      a: (
        <>
          Nie. Każdy dodany obraz jest dekodowany i ponownie kodowany w całości
          w Twojej własnej przeglądarce za pomocą WebAssembly. Nic nie jest
          nigdzie wysyłane — nie ma kroku przesyłania ani żadnego serwera, który
          kiedykolwiek widziałby Twoje pliki. Możesz nawet wyłączyć połączenie z
          internetem po wczytaniu strony i kontynuować kompresowanie.
        </>
      ),
      text: "Nie. Każdy obraz jest dekodowany i ponownie kodowany w całości w Twojej własnej przeglądarce za pomocą WebAssembly. Nic nie jest nigdzie wysyłane; nie ma kroku przesyłania ani żadnego serwera, który kiedykolwiek widziałby Twoje pliki. Możesz wyłączyć połączenie z internetem po wczytaniu strony i kontynuować kompresowanie.",
    },
    {
      q: "Czy kompresor obrazów jest darmowy?",
      a: (
        <>
          Tak — jest całkowicie darmowy, bez konta, bez znaków wodnych i bez
          dziennych limitów. Możesz przetworzyć tyle obrazów, na ile pozwala
          pamięć Twojego urządzenia. Witryna działa dzięki dyskretnym reklamom
          wyświetlanym obok artykułu, nigdy wewnątrz samego narzędzia.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez konta, bez znaków wodnych i bez dziennych limitów. Możesz przetworzyć tyle obrazów, na ile pozwala pamięć Twojego urządzenia. Witryna działa dzięki dyskretnym reklamom wyświetlanym obok artykułu, nie wewnątrz narzędzia.",
    },
    {
      q: "Czy kompresja obniży jakość moich obrazów?",
      a: (
        <>
          To zależy od formatu i ustawień. Formaty stratne, takie jak JPEG, WebP
          i AVIF, odrzucają drobne szczegóły, aby zmniejszyć plik, ale przy
          jakości około 75 zmiana jest zwykle niezauważalna. Bezstratna
          optymalizacja PNG nie usuwa żadnych szczegółów — jedynie zapisuje plik
          w bardziej wydajny sposób. Użyj suwaka jakości, aby w każdym zadaniu
          zrównoważyć rozmiar i wierność.
        </>
      ),
      text: "To zależy od formatu i ustawień. Formaty stratne, takie jak JPEG, WebP i AVIF, odrzucają drobne szczegóły, aby zmniejszyć plik, ale przy jakości około 75 zmiana jest zwykle niezauważalna. Bezstratna optymalizacja PNG nie usuwa żadnych szczegółów; jedynie zapisuje plik w bardziej wydajny sposób. Użyj suwaka jakości, aby zrównoważyć rozmiar i wierność.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę skompresować?",
      a: (
        <>
          Nie ma stałego limitu — ogranicza go jedynie dostępna pamięć Twojego
          urządzenia. Zwykłe zdjęcia o rozmiarze kilku megabajtów oraz duże
          obrazy 20–50 MP działają wygodnie zarówno na telefonach, jak i
          laptopach. Partie są przetwarzane po jednym obrazie naraz, co utrzymuje
          niskie zużycie pamięci nawet przy wielu dużych plikach.
        </>
      ),
      text: "Nie ma stałego limitu; ogranicza go jedynie dostępna pamięć Twojego urządzenia. Zwykłe zdjęcia o rozmiarze kilku megabajtów oraz duże obrazy 20-50 MP działają wygodnie na telefonach i laptopach. Partie są przetwarzane po jednym obrazie naraz, aby utrzymać niskie zużycie pamięci.",
    },
    {
      q: "Jakie formaty obrazów obsługuje to narzędzie?",
      a: (
        <>
          Możesz wczytać pliki JPEG, PNG, WebP, AVIF i GIF oraz eksportować do
          JPEG, PNG, WebP lub AVIF. Pozostaw wyjście ustawione na &bdquo;Ten sam
          format&rdquo;, aby ponownie skompresować bez zmiany typu, lub wybierz
          inny format, aby przekonwertować. Aby skorzystać z dedykowanego procesu
          dla konkretnego formatu, przejdź do kompresora{" "}
          <Link href="/pl/compress-jpeg">JPEG</Link>,{" "}
          <Link href="/pl/compress-png">PNG</Link>,{" "}
          <Link href="/pl/compress-webp">WebP</Link>,{" "}
          <Link href="/pl/compress-avif">AVIF</Link> lub{" "}
          <Link href="/pl/compress-gif">GIF</Link>.
        </>
      ),
      text: "Możesz wczytać pliki JPEG, PNG, WebP, AVIF i GIF oraz eksportować do JPEG, PNG, WebP lub AVIF. Pozostaw wyjście ustawione na Ten sam format, aby ponownie skompresować bez zmiany typu, lub wybierz inny format, aby przekonwertować. Istnieją dedykowane narzędzia dla JPEG, PNG, WebP, AVIF i GIF.",
    },
    {
      q: "Jaka jest różnica między kompresją a konwersją obrazu?",
      a: (
        <>
          Kompresja zachowuje ten sam format i zmniejsza plik; konwersja zmienia
          sam format, na przykład przekształcając ciężki zrzut ekranu w PNG w
          znacznie mniejszy WebP. To centrum robi obie rzeczy: ustaw format
          wyjściowy, aby przekonwertować, lub pozostaw go bez zmian, aby tylko
          skompresować. Jeśli Twoim głównym celem jest konwersja, dedykowany{" "}
          <Link href="/pl/image-converter">konwerter obrazów</Link>{" "}
          jest bardziej ukierunkowaną opcją, a{" "}
          <Link href="/pl/image-resizer">narzędzie do zmiany rozmiaru obrazów</Link>{" "}
          zajmuje się zmianą wymiarów.
        </>
      ),
      text: "Kompresja zachowuje ten sam format i zmniejsza plik; konwersja zmienia sam format, na przykład przekształcając ciężki PNG w mniejszy WebP. To centrum robi obie rzeczy. Do konwersji dedykowany konwerter obrazów jest bardziej ukierunkowany, a narzędzie do zmiany rozmiaru obrazów zajmuje się zmianą wymiarów.",
    },
  ],
  content: (
    <>
      <h2 id="why">Po co kompresować i konwertować obrazy?</h2>
      <p>
        Obrazy to najcięższa część większości stron internetowych, wiadomości
        e-mail i udostępnianych folderów. Aparat we współczesnym telefonie może
        tworzyć zdjęcia o rozmiarze 4–12 MB, a zrzuty ekranu zapisane jako PNG
        również mogą być zaskakująco duże. Zbyt duże obrazy spowalniają witryny,
        przekraczają limity rozmiaru załączników e-mail, zapełniają pamięć w
        chmurze i pochłaniają dane mobilne. Kompresja zachowuje szczegóły, na
        których naprawdę Ci zależy, jednocześnie drastycznie zmniejszając rozmiar
        pliku — często o 60–90% w zależności od wybranego formatu.
      </p>
      <p>
        Ta strona jest centrum dla każdego formatu obrazu. Ponieważ działa{" "}
        <strong>w całości na Twoim urządzeniu</strong>, jest to także prywatny
        sposób na wykonanie tego zadania. Konwencjonalne kompresory online
        przesyłają Twoje zdjęcia na zdalny serwer, przetwarzają je tam i odsyłają
        z powrotem. Tutaj każdy obraz jest wczytywany do pamięci, ponownie
        kodowany za pomocą kodeka WebAssembly i przekazywany prosto do Ciebie.
        Twoje zdjęcia nigdy nie wędrują przez sieć, co ma znaczenie w przypadku
        zdjęć osobistych, skanów dokumentów tożsamości, umów i wszystkiego
        innego, czego wolisz nie powierzać serwerowi obcej osoby.
      </p>

      <h2 id="lossy">Stratna kontra bezstratna: kluczowy kompromis</h2>
      <p>
        Każdy format obrazu należy do jednej z dwóch grup. Kompresja{" "}
        <strong>stratna</strong> — używana przez JPEG oraz w domyślnych trybach
        WebP i AVIF — trwale odrzuca szczegóły, których ludzkie oko najpewniej
        nie zauważy, i właśnie dzięki temu osiąga tak duże oszczędności. Suwak
        jakości kontroluje, jak agresywne jest to działanie: wyższe wartości
        zachowują więcej szczegółów i tworzą większe pliki, natomiast niższe
        wartości oszczędzają więcej miejsca, ale mogą wprowadzać widoczne
        &bdquo;artefakty&rdquo;, takie jak blokowatość czy aureole wokół
        krawędzi. Kompresja{" "}
        <strong>bezstratna</strong> — używana przez PNG i GIF oraz w
        opcjonalnym trybie WebP — zapisuje plik w bardziej wydajny sposób bez
        odrzucania ani jednego piksela, więc obraz jest po zdekodowaniu
        identyczny bajt po bajcie. Haczyk polega na tym, że oszczędności
        bezstratne są znacznie skromniejsze.
      </p>
      <p>
        Praktyczna zasada: używaj formatów stratnych do fotografii i
        realistycznych obrazów, gdzie jakość 70–80 jest zwykle nie do odróżnienia
        od oryginału, a formatów bezstratnych używaj do grafik, logo, zrzutów
        ekranu i wszystkiego, co ma ostre krawędzie lub tekst, gdzie artefakty
        kompresji stratnej są oczywiste. Pamiętaj, że kompresja stratna jest{" "}
        <strong>kumulatywna</strong> — zawsze pracuj na swoim wzorcu o najwyższej
        jakości, zamiast ponownie zapisywać już skompresowaną kopię.
      </p>

      <h2 id="formats">Wybór odpowiedniego formatu</h2>
      <p>
        Wybór formatu ma takie samo znaczenie jak ustawienie jakości. Krótki
        przewodnik: <strong>JPEG</strong> to uniwersalny wybór do zdjęć bez
        przezroczystości; <strong>PNG</strong> najlepiej sprawdza się w przypadku
        płaskich grafik, zrzutów ekranu i wszystkiego, co wymaga przezroczystego
        tła; <strong>WebP</strong> zwykle tworzy pliki o 25–35% mniejsze niż
        JPEG, obsługując zarówno przezroczystość, jak i animację;{" "}
        <strong>AVIF</strong> jest najnowszy i zazwyczaj najmniejszy ze
        wszystkich w przypadku fotografii, kosztem wolniejszego kodowania; a{" "}
        <strong>GIF</strong> to stary format animacji, który niemal zawsze
        przegrywa z konwersją do WebP lub wideo. Miarodajne omówienie tego, jak
        każdy format zachowuje się w przeglądarkach, znajdziesz w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodniku MDN po typach i formatach plików graficznych
        </a>
        .
      </p>
      <p>
        Jeśli już wiesz, z jakim formatem pracujesz, dedykowane narzędzia
        zapewniają najbardziej odpowiednie elementy sterujące i objaśnienia:{" "}
        <Link href="/pl/compress-jpeg">kompresor JPEG</Link> do zdjęć,{" "}
        <Link href="/pl/compress-png">kompresor PNG</Link> do grafik
        bezstratnych, narzędzia{" "}
        <Link href="/pl/compress-webp">WebP</Link> i{" "}
        <Link href="/pl/compress-avif">AVIF</Link> do najmniejszych nowoczesnych
        plików oraz{" "}
        <Link href="/pl/compress-gif">kompresor GIF</Link> do animacji. Aby
        zmienić format partii plików, użyj{" "}
        <Link href="/pl/image-converter">konwertera obrazów</Link>; aby zmienić
        wymiary w pikselach, sięgnij po{" "}
        <Link href="/pl/image-resizer">narzędzie do zmiany rozmiaru obrazów</Link>.
      </p>

      <h2 id="tips">Praktyczne wskazówki dla najlepszych wyników</h2>
      <ul>
        <li>
          <strong>Zmień rozmiar przed kompresją.</strong> Jeśli obraz będzie
          wyświetlany tylko w szerokości 1200 px, wysyłanie oryginału o
          szerokości 6000 px marnuje większość pliku. Zmniejszenie skali zwykle
          oszczędza więcej, niż kiedykolwiek mógłby suwak jakości.
        </li>
        <li>
          <strong>Dopasuj format do treści.</strong> Zdjęcia należą do JPEG,
          WebP lub AVIF; logo, ikony i zrzuty ekranu pozostają ostrzejsze i
          mniejsze jako PNG. Konwersja zdjęcia w PNG do WebP może je zmniejszyć o
          rząd wielkości.
        </li>
        <li>
          <strong>Zachowaj kopię wzorcową.</strong> Ponieważ stratne kodowanie
          się kumuluje, zawsze kompresuj ze swojego oryginału, a nie z pliku
          wyeksportowanego wcześniej.
        </li>
        <li>
          <strong>Porównaj przed podjęciem decyzji.</strong> Wypróbuj najpierw
          ustawienie &bdquo;Zrównoważone&rdquo;, następnie uruchom ponownie z
          opcją &bdquo;Najmniejszy&rdquo; i sprawdź, czy dostrzegasz różnicę przy
          rozmiarze, w jakim faktycznie będziesz wyświetlać obraz.
        </li>
        <li>
          <strong>Grupuj podobne obrazy razem.</strong> Zdjęcia z tego samego
          aparatu lub zrzuty z tego samego ekranu zwykle świetnie wyglądają przy
          jednym wspólnym ustawieniu, więc możesz je przetworzyć w jednym
          przebiegu.
        </li>
      </ul>
    </>
  ),
};
