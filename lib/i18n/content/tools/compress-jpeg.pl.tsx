import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresja JPEG — Darmowy kompresor JPG",
  metaDescription:
    "Kompresuj obrazy JPG i JPEG w przeglądarce dzięki MozJPEG. Regulowana jakość, tryb wsadowy, zero przesyłania — zdjęcia nie opuszczają urządzenia.",
  heading: "Kompresor JPEG",
  intro: (
    <>
      Kompresuj obrazy JPG i JPEG bezpośrednio w przeglądarce dzięki MozJPEG,
      temu samemu koderowi, któremu ufają fotografowie i deweloperzy webowi.
      Wybierz poziom jakości, przeciągnij swoje zdjęcia i pobierz mniejsze pliki
      w kilka sekund — nic nigdy nie jest przesyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak skompresować plik JPEG",
    description:
      "Kompresuj obrazy JPG/JPEG lokalnie w przeglądarce w czterech krokach.",
    steps: [
      {
        name: "Dodaj swoje obrazy",
        text: "Przeciągnij i upuść pliki JPG na pole upuszczania, kliknij, aby przeglądać, lub wklej ze schowka. Możesz dodać kilka naraz.",
      },
      {
        name: "Wybierz poziom jakości",
        text: "Skorzystaj z suwaka jakości lub gotowego ustawienia. Wartość około 75 to świetny kompromis między rozmiarem a jakością wizualną dla większości zdjęć.",
      },
      {
        name: "Pozwól na kompresję na swoim urządzeniu",
        text: "Każdy obraz jest kompresowany lokalnie za pomocą MozJPEG. Zobaczysz oryginalny rozmiar, nowy rozmiar i procent zaoszczędzonego miejsca dla każdego pliku.",
      },
      {
        name: "Pobierz swoje pliki",
        text: "Pobieraj obrazy pojedynczo lub wszystkie naraz jako plik ZIP. Dostosuj jakość i ponownie skompresuj w dowolnym momencie.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje pliki JPEG są przesyłane na serwer?",
      a: (
        <>
          Nie. Każdy obraz jest kompresowany lokalnie w Twojej przeglądarce za
          pomocą WebAssembly. Twoje pliki nigdy nie opuszczają urządzenia i nie
          ma żadnego serwera, na który miałyby trafić — możesz nawet rozłączyć
          się z internetem po załadowaniu strony, a narzędzie nadal będzie
          działać.
        </>
      ),
      text: "Nie. Każdy obraz jest kompresowany lokalnie w Twojej przeglądarce za pomocą WebAssembly. Twoje pliki nigdy nie opuszczają urządzenia i nie ma żadnego serwera, na który miałyby trafić. Możesz rozłączyć się z internetem po załadowaniu strony, a narzędzie nadal będzie działać.",
    },
    {
      q: "Czy kompresor JPEG jest naprawdę darmowy?",
      a: (
        <>
          Tak — jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i
          bez limitów liczby ani rozmiaru plików poza tym, co jest w stanie
          obsłużyć pamięć Twojego urządzenia. Serwis jest utrzymywany z
          nienachalnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez limitów liczby ani rozmiaru plików poza tym, co jest w stanie obsłużyć pamięć Twojego urządzenia. Serwis jest utrzymywany z nienachalnych reklam.",
    },
    {
      q: "Czy kompresja obniży jakość moich zdjęć?",
      a: (
        <>
          Kompresja JPEG jest stratna, więc część danych jest odrzucana. Przy
          jakości 70-80 różnica jest zwykle niewidoczna, a plik jest znacznie
          mniejszy. Obniż suwak jakości, aby uzyskać mniejsze pliki, lub podnieś
          go, aby pozostać bliżej oryginału.
        </>
      ),
      text: "JPEG to format stratny, więc część danych jest odrzucana. Przy jakości 70-80 różnica jest zwykle niewidoczna, a plik jest znacznie mniejszy. Obniż suwak jakości, aby uzyskać mniejsze pliki, lub podnieś go, aby pozostać bliżej oryginału.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę skompresować?",
      a: (
        <>
          Nie ma sztywnego limitu — zależy on od dostępnej pamięci Twojego
          urządzenia. Telefony i laptopy bez problemu radzą sobie z typowymi
          zdjęciami (kilka megabajtów), a nawet z dużymi obrazami 20-50 MP. Bardzo
          duże partie są przetwarzane po jednym pliku naraz, aby utrzymać niskie
          zużycie pamięci.
        </>
      ),
      text: "Nie ma sztywnego limitu; zależy on od dostępnej pamięci Twojego urządzenia. Typowe zdjęcia o rozmiarze kilku megabajtów, a nawet duże obrazy 20-50 MP działają bez problemu. Duże partie są przetwarzane po jednym pliku naraz, aby utrzymać niskie zużycie pamięci.",
    },
    {
      q: "Czy mogę skompresować wiele plików JPEG naraz?",
      a: (
        <>
          Tak. Upuść tyle plików, ile chcesz, a zostaną one ustawione w kolejce i
          skompresowane sekwencyjnie; następnie możesz pobrać je pojedynczo lub
          wszystkie razem jako plik ZIP.
        </>
      ),
      text: "Tak. Dodaj tyle plików, ile chcesz; zostaną one ustawione w kolejce i skompresowane jeden po drugim, a następnie pobrane pojedynczo lub razem jako plik ZIP.",
    },
    {
      q: "Czy narzędzie zachowa mój oryginał, jeśli kompresja powiększyłaby plik?",
      a: (
        <>
          Tak. Jeśli ponownie zakodowany JPEG byłby większy niż Twój oryginał (co
          częste w przypadku już zoptymalizowanych obrazów), narzędzie zachowuje
          oryginalny plik i informuje, że był już dobrze zoptymalizowany.
        </>
      ),
      text: "Tak. Jeśli ponownie zakodowany JPEG byłby większy niż oryginał, narzędzie zachowuje oryginalny plik i informuje, że był już dobrze zoptymalizowany.",
    },
  ],
  content: (
    <>
      <h2 id="why">Po co kompresować obrazy JPEG?</h2>
      <p>
        JPEG (zapisywany też jako JPG) to najpopularniejszy format fotografii w
        sieci, ale obrazy z aparatów i telefonów są często znacznie większe, niż
        to konieczne — nierzadko po kilka megabajtów każdy. Duże obrazy spowalniają
        strony internetowe, zapychają załączniki e-mail, zajmują miejsce w chmurze
        i marnują dane mobilne. Ich kompresja zachowuje jakość wizualną, na której
        Ci zależy, a jednocześnie drastycznie zmniejsza rozmiar pliku, często o 60
        do 80%.
      </p>
      <p>
        Ponieważ to narzędzie działa w całości na Twoim urządzeniu, jest też
        najbardziej prywatnym sposobem na taką operację. Tradycyjne kompresory
        online przesyłają Twoje zdjęcia na zdalny serwer, przetwarzają je tam i
        odsyłają z powrotem. Tutaj Twoje obrazy są wczytywane do pamięci,
        kompresowane wersją MozJPEG w WebAssembly i oddawane Ci prosto do ręki —
        nigdy nie przechodzą przez sieć.
      </p>

      <h2 id="lossy">Kompresja stratna i jakość: czego się spodziewać</h2>
      <p>
        JPEG to format <strong>stratny</strong>: aby zmniejszyć pliki, trwale
        odrzuca te szczegóły obrazu, których ludzkie oko z najmniejszym
        prawdopodobieństwem zauważy. Suwak jakości kontroluje, jak agresywny jest
        ten proces. Wyższe wartości zachowują więcej szczegółów i dają większe
        pliki; niższe wartości oszczędzają więcej miejsca, ale mogą wprowadzać
        widoczne &bdquo;artefakty&rdquo;, takie jak bloki lub aureole wokół
        ostrych krawędzi.
      </p>
      <p>
        Dla większości fotografii jakość <strong>70-80</strong> to złoty środek —
        wynik jest wizualnie nie do odróżnienia od oryginału przy normalnych
        rozmiarach wyświetlania, a przy tym zajmuje ułamek rozmiaru. Zejdź do
        50-60, gdy mały rozmiar liczy się bardziej niż idealna wierność (na
        przykład w miniaturach), a pozostań przy 85-90 dla obrazów z delikatnymi
        gradientami lub tekstem, gdzie artefakty są bardziej widoczne. Kompresja
        jest <strong>kumulatywna</strong>, więc zawsze kompresuj ponownie od
        swojego oryginału o najwyższej jakości, a nie od już skompresowanej kopii.
      </p>

      <h2 id="format">Czym jest JPEG i kiedy warto go używać?</h2>
      <p>
        JPEG został ustandaryzowany przez Joint Photographic Experts Group i
        wykorzystuje dyskretną transformatę kosinusową do wydajnej kompresji
        obrazów o ciągłej tonacji. Świetnie sprawdza się przy fotografiach i
        realistycznych obrazach z płynnymi przejściami kolorów, dlatego niemal
        każdy aparat domyślnie zapisuje pliki JPEG. Szczegóły techniczne znajdziesz
        w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodniku po formatach obrazów na MDN
        </a>
        .
      </p>
      <p>
        JPEG nie zawsze jest jednak właściwym wyborem. Nie obsługuje
        przezroczystości i słabo radzi sobie z płaską grafiką, logotypami,
        zrzutami ekranu i tekstem — te kompresują się lepiej i wyglądają ostrzej
        jako <Link href="/pl/compress-png">PNG</Link>. A dla uzyskania możliwie
        najmniejszych zdjęć z obsługą nowoczesnych przeglądarek wygrywają nowsze
        formaty: plik <Link href="/pl/compress-webp">WebP</Link> jest zwykle o 25
        do 35% mniejszy niż równoważny JPEG, a{" "}
        <Link href="/pl/compress-avif">AVIF</Link> może być jeszcze mniejszy.
        Jeśli optymalizujesz pod kątem sieci, spróbuj konwersji za pomocą naszego{" "}
        <Link href="/pl/image-converter">konwertera obrazów</Link> i porównaj.
      </p>

      <h2 id="tips">Wskazówki dla najlepszych rezultatów</h2>
      <ul>
        <li>
          <strong>Zaczynaj od oryginału.</strong> Wielokrotne zapisywanie pliku
          JPEG pogarsza jego jakość. Zachowaj kopię wzorcową i kompresuj z niej.
        </li>
        <li>
          <strong>Zmień rozmiar przed kompresją.</strong> Jeśli obraz będzie
          wyświetlany przy szerokości 1200 px, nie ma potrzeby dostarczać pliku o
          szerokości 6000 px. Skorzystaj z wbudowanej opcji zmiany rozmiaru, aby
          uzyskać znacznie większą oszczędność niż dzięki samej jakości.
        </li>
        <li>
          <strong>Używaj gotowych ustawień do porównań.</strong> Wypróbuj
          najpierw &bdquo;Zrównoważone&rdquo;, potem skompresuj ponownie w trybie
          &bdquo;Najmniejszy&rdquo; i sprawdź, czy zauważasz różnicę przy swoim
          rozmiarze wyświetlania.
        </li>
        <li>
          <strong>Grupuj podobne obrazy w partie.</strong> Zdjęcia z tego samego
          aparatu zwykle świetnie wyglądają przy tym samym ustawieniu jakości,
          więc możesz przetworzyć je za jednym razem.
        </li>
      </ul>
    </>
  ),
};
