import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresja PNG — darmowy optymalizator PNG",
  metaDescription:
    "Optymalizuj obrazy PNG w przeglądarce za pomocą OxiPNG: bezstratnie, prywatnie i bez przesyłania. Albo konwertuj do WebP, by uzyskać znacznie mniejsze pliki.",
  heading: "Kompresor PNG",
  intro: (
    <>
      Optymalizuj obrazy PNG bezpośrednio w przeglądarce za pomocą OxiPNG,
      bezstratnego optymalizatora, który zmniejsza rozmiar plików bez naruszania
      ani jednego piksela. Zachowaj nienaruszoną przezroczystość i ostre
      krawędzie albo konwertuj do WebP, by uzyskać znacznie większą oszczędność.
      Nic nigdy nie jest przesyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak skompresować PNG",
    description:
      "Optymalizuj obrazy PNG bezstratnie w przeglądarce w czterech krokach.",
    steps: [
      {
        name: "Dodaj swoje obrazy PNG",
        text: "Przeciągnij i upuść pliki PNG na pole zrzutu, kliknij, aby przeglądać, lub wklej ze schowka. Możesz dodać kilka naraz.",
      },
      {
        name: "Wybierz poziom optymalizacji",
        text: "Wybierz Szybki, Zrównoważony lub Maksymalny. Wyższe poziomy intensywniej szukają mniejszego, bezstratnego kodowania, więc trwają nieco dłużej, ale wyciskają trochę więcej.",
      },
      {
        name: "Optymalizuj na swoim urządzeniu",
        text: "Każdy PNG jest zapisywany ponownie lokalnie za pomocą OxiPNG. Dla każdego pliku zobaczysz pierwotny rozmiar, nowy rozmiar i procent zaoszczędzonej przestrzeni — przy zachowaniu każdego piksela.",
      },
      {
        name: "Pobierz — albo konwertuj, by zaoszczędzić więcej",
        text: "Pobieraj pliki pojedynczo lub wszystkie naraz w postaci pliku ZIP. Jeśli zdjęcie w PNG nadal jest duże, zmień format wyjściowy na WebP, by uzyskać znacznie mniejszy wynik przyjazny sieci.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje pliki PNG są przesyłane na serwer?",
      a: (
        <>
          Nie. Każdy PNG jest optymalizowany lokalnie w przeglądarce za pomocą
          WebAssembly. Twoje obrazy nigdy nie opuszczają urządzenia i nie ma
          żadnego serwera, na który miałyby być przesyłane — możesz nawet
          odłączyć się od internetu po załadowaniu strony, a wszystko nadal
          będzie działać.
        </>
      ),
      text: "Nie. Każdy PNG jest optymalizowany lokalnie w przeglądarce za pomocą WebAssembly. Twoje obrazy nigdy nie opuszczają urządzenia i nie ma żadnego serwera, na który miałyby być przesyłane. Możesz odłączyć się od internetu po załadowaniu strony, a wszystko nadal będzie działać.",
    },
    {
      q: "Czy kompresor PNG jest naprawdę darmowy?",
      a: (
        <>
          Tak — jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i
          bez limitów liczby ani rozmiaru plików poza tym, co jest w stanie
          udźwignąć pamięć Twojego urządzenia. Serwis utrzymywany jest z
          dyskretnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez limitów liczby ani rozmiaru plików poza tym, co jest w stanie udźwignąć pamięć Twojego urządzenia. Serwis utrzymywany jest z dyskretnych reklam.",
    },
    {
      q: "Czy optymalizacja PNG obniży jego jakość?",
      a: (
        <>
          Nie — optymalizacja PNG za pomocą OxiPNG jest{" "}
          <strong>całkowicie bezstratna</strong>. Każdy piksel zostaje zachowany
          dokładnie, łącznie z przezroczystością; OxiPNG po prostu zapisuje plik
          w bardziej wydajny sposób. Kompromis polega na tym, że oszczędności
          bezstratne są skromne, zwykle 5–30%. Jeśli zamiast tego konwertujesz
          do WebP, ten krok jest stratny i może nieznacznie zmienić obraz, ale
          zmniejsza rozmiar o wiele bardziej.
        </>
      ),
      text: "Nie. Optymalizacja PNG za pomocą OxiPNG jest całkowicie bezstratna. Każdy piksel zostaje zachowany dokładnie, łącznie z przezroczystością; OxiPNG po prostu zapisuje plik w bardziej wydajny sposób. Oszczędności bezstratne są skromne, zwykle 5-30%. Konwersja do WebP jest stratna, ale zmniejsza rozmiar o wiele bardziej.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę zoptymalizować?",
      a: (
        <>
          Nie ma sztywnego limitu — zależy on od dostępnej pamięci Twojego
          urządzenia. Telefony i laptopy bez trudu radzą sobie z typowymi
          zrzutami ekranu i logotypami, a nawet z dużymi plikami PNG w wysokiej
          rozdzielczości. Duże partie są przetwarzane plik po pliku, aby
          utrzymać niskie zużycie pamięci.
        </>
      ),
      text: "Nie ma sztywnego limitu; zależy on od dostępnej pamięci Twojego urządzenia. Typowe zrzuty ekranu, logotypy, a nawet duże pliki PNG w wysokiej rozdzielczości działają bez problemu. Duże partie są przetwarzane plik po pliku, aby utrzymać niskie zużycie pamięci.",
    },
    {
      q: "Dlaczego moje zdjęcie w PNG nadal jest ogromne po optymalizacji?",
      a: (
        <>
          PNG jest bezstratny, więc nie może odrzucać szczegółów
          fotograficznych w taki sposób jak JPEG czy WebP — pełnokolorowe
          zdjęcie po prostu potrzebuje dużo danych jako PNG. Optymalizacja
          przycina nadmiar, ale prawdziwym rozwiązaniem dla zdjęć jest konwersja
          do formatu stratnego. Wypróbuj nasze narzędzia{" "}
          <Link href="/pl/compress-webp">WebP</Link> lub{" "}
          <Link href="/pl/compress-avif">AVIF</Link>, aby pliki zdjęć zajmowały
          ułamek rozmiaru.
        </>
      ),
      text: "PNG jest bezstratny, więc nie może odrzucać szczegółów fotograficznych w taki sposób jak JPEG czy WebP; pełnokolorowe zdjęcie potrzebuje dużo danych jako PNG. Optymalizacja przycina nadmiar, ale prawdziwym rozwiązaniem dla zdjęć jest konwersja do formatu stratnego, takiego jak WebP czy AVIF.",
    },
    {
      q: "Czy optymalizacja zachowuje przezroczystość mojego PNG?",
      a: (
        <>
          Tak. Kanał alfa (przezroczystość) zostaje zachowany dokładnie, więc
          logotypy, ikony i elementy interfejsu z przezroczystym tłem wychodzą
          identyczne piksel w piksel — tylko w mniejszym pliku. Konwersja do
          WebP również zachowuje przezroczystość; konwersja do JPEG nie, ponieważ
          JPEG nie ma kanału alfa.
        </>
      ),
      text: "Tak. Kanał alfa (przezroczystość) zostaje zachowany dokładnie, więc logotypy, ikony i elementy interfejsu z przezroczystym tłem wychodzą identyczne piksel w piksel w mniejszym pliku. WebP również zachowuje przezroczystość; JPEG nie, ponieważ nie ma kanału alfa.",
    },
  ],
  content: (
    <>
      <h2 id="why">Po co kompresować lub konwertować PNG?</h2>
      <p>
        PNG jest wszędzie — to domyślny format zrzutów ekranu, podstawowy wybór
        dla logotypów i ikon oraz standard dla każdej grafiki, która potrzebuje
        przezroczystego tła. Problem w tym, że pliki PNG często są większe, niż
        muszą być. Edytory obrazów i narzędzia do zrzutów ekranu zapisują
        rozbudowane, niezoptymalizowane pliki z dodatkowymi metadanymi,
        nieoptymalnymi ustawieniami kompresji i danymi koloru, których nie
        potrzebują. Optymalizacja usuwa ten balast, dzięki czemu strony ładują
        się szybciej, załączniki wysyłają się sprawniej, a miejsce na dane
        starcza na dłużej.
      </p>
      <p>
        Ponieważ to narzędzie działa w całości na Twoim urządzeniu, jest to
        również prywatny sposób na taką operację. Tradycyjne optymalizatory
        online przesyłają Twoje obrazy na zdalny serwer, przetwarzają je tam i
        odsyłają z powrotem. Tutaj każdy PNG jest wczytywany do pamięci,
        zapisywany ponownie za pomocą kompilacji WebAssembly{" "}
        <strong>OxiPNG</strong> i przekazywany prosto z powrotem do Ciebie —
        Twoje pliki nigdy nie trafiają do sieci, co ma znaczenie, gdy zrzut
        ekranu lub zasób projektowy zawiera poufne informacje.
      </p>

      <h2 id="lossless">Optymalizacja bezstratna a konwersja stratna</h2>
      <p>
        PNG to format <strong>bezstratny</strong>: odtwarza każdy piksel
        dokładnie, bez artefaktów kompresji i z pełną obsługą przezroczystości.
        Ta wierność jest sednem PNG, ale zarazem ogranicza to, jak mały może się
        stać plik PNG. OxiPNG utrzymuje Twój obraz{" "}
        <strong>idealnym piksel w piksel</strong> — znajduje tylko bardziej
        wydajny sposób zapisania tych samych danych, redukując paletę kolorów
        tam, gdzie to możliwe, dobierając lepsze filtry i odrzucając zbędne
        bloki. Bądźmy szczerzy co do rachunków: oszczędności bezstratne są{" "}
        <strong>skromne, zwykle rzędu 5–30%</strong>, a już zoptymalizowany PNG
        może niemal w ogóle się nie zmniejszyć.
      </p>
      <p>
        Gdy potrzebujesz drastycznej redukcji, odpowiedzią nie jest lepszy PNG —
        tylko inny format. Konwersja PNG do{" "}
        <Link href="/pl/compress-webp">WebP</Link> lub{" "}
        <Link href="/pl/compress-avif">AVIF</Link> stosuje kompresję stratną,
        która może zmniejszyć rozmiar pliku o 60–90%, nadal obsługując
        przezroczystość. Kompromis polega na tym, że konwersja stratna może
        wprowadzić subtelne zmiany, więc jest idealna dla fotografii i złożonych
        obrazów, podczas gdy bezstratny PNG pozostaje najlepszy dla grafik o
        ostrych krawędziach, gdzie liczy się każdy piksel. To narzędzie pozwala
        Ci wybrać: zachowaj PNG dla wierności albo zmień format wyjściowy na WebP
        dla rozmiaru.
      </p>

      <h2 id="format">Czym jest PNG i kiedy warto go używać?</h2>
      <p>
        PNG (Portable Network Graphics) powstał jako wolny od patentów,
        bezstratny zamiennik GIF. Wykorzystuje kompresję DEFLATE wraz z filtrami
        predykcji dla poszczególnych wierszy i obsługuje pełny 8-bitowy kanał
        alfa zapewniający płynną przezroczystość. To czyni go znakomitym do{" "}
        <strong>
          logotypów, ikon, zrzutów ekranu, grafiki liniowej, wykresów i każdego
          obrazu z ostrymi krawędziami, płaskim kolorem lub tekstem
        </strong>{" "}
        — treści, które formaty stratne rozmazują lub otaczają aureolami.
        Szczegóły techniczne możesz przeczytać w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics"
          target="_blank"
          rel="noopener noreferrer"
        >
          opisie formatów obrazów w MDN
        </a>
        .
      </p>
      <p>
        PNG to <strong>zły</strong> wybór dla fotografii. Ponieważ nigdy nie
        odrzuca szczegółów, zdjęcie o ciągłej tonacji staje się ogromnym plikiem
        PNG — często wielokrotnie większym niż ten sam obraz jako{" "}
        <Link href="/pl/compress-jpeg">JPEG</Link> lub WebP. Jeśli zapisujesz
        zdjęcia jako PNG, ten jeden nawyk jest prawdopodobnie Twoim największym
        źródłem nadmiarowej wagi. Sięgaj po PNG, gdy potrzebujesz ostrych
        krawędzi lub przezroczystości, a po format stratny, gdy masz zdjęcie. Nie
        wiesz, którego użyć? Nasz{" "}
        <Link href="/pl/image-converter">konwerter obrazów</Link> pozwala
        wypróbować oba i porównać wyniki obok siebie.
      </p>

      <h2 id="tips">Wskazówki dla najlepszych rezultatów</h2>
      <ul>
        <li>
          <strong>Dopasuj poziom optymalizacji do zadania.</strong> Użyj{" "}
          &bdquo;Szybki&rdquo; do szybkiego przejścia przez wiele plików, a{" "}
          &bdquo;Maksymalny&rdquo;, gdy wyciśnięcie ostatniego bajtu z
          pojedynczego kluczowego obrazu jest warte dodatkowego czasu
          przetwarzania.
        </li>
        <li>
          <strong>Zmniejsz rozmiar przed optymalizacją.</strong> Zrzut ekranu w
          4K wyświetlany przy szerokości 800 px to w większości zmarnowane
          piksele. Użyj wbudowanej opcji zmiany rozmiaru, by uzyskać znacznie
          większą oszczędność, niż sama optymalizacja bezstratna kiedykolwiek
          zdoła zapewnić.
        </li>
        <li>
          <strong>Konwertuj zdjęcia, nie walcz z nimi.</strong> Jeśli{" "}
          &bdquo;PNG&rdquo; jest w rzeczywistości zdjęciem, zmień format
          wyjściowy na <Link href="/pl/compress-webp">WebP</Link> zamiast
          oczekiwać, że bezstratna optymalizacja zdziała cuda.
        </li>
        <li>
          <strong>Zachowaj PNG dla przezroczystości.</strong> Gdy potrzebujesz
          przezroczystego tła i szerokiej zgodności, bezstratny PNG to bezpieczny
          wybór — a OxiPNG utrzymuje ten kanał alfa idealnym piksel w piksel.
        </li>
      </ul>
    </>
  ),
};
