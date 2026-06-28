import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresja HEIC — Darmowy konwerter HEIC na JPG",
  metaDescription:
    "Konwertuj zdjęcia HEIC i HEIF z iPhone’a na JPG, WebP lub AVIF w przeglądarce, z regulacją jakości i rozmiaru. Zero przesyłania — pliki zostają u Ciebie.",
  heading: "Kompresor i konwerter HEIC",
  intro: (
    <>
      Zamień zdjęcia HEIC i HEIF z iPhone’a na uniwersalnie zgodne pliki JPG,
      WebP lub AVIF &mdash; i zmniejsz je dzięki regulacji jakości i rozmiaru.
      Wszystko działa w Twojej przeglądarce, więc zdjęcia nigdy nie są przesyłane.
    </>
  ),
  lastUpdated: "2026-06-28",
  howTo: {
    name: "Jak konwertować i kompresować zdjęcia HEIC",
    description:
      "Konwertuj obrazy HEIC/HEIF z iPhone’a na JPG, WebP lub AVIF lokalnie w przeglądarce.",
    steps: [
      {
        name: "Dodaj swoje zdjęcia HEIC",
        text: "Przeciągnij i upuść pliki .heic lub .heif na pole, kliknij, aby przeglądać, lub wklej je. Możesz dodać całą partię naraz.",
      },
      {
        name: "Wybierz format wyjściowy",
        text: "Wybierz JPG dla maksymalnej zgodności lub WebP/AVIF dla najmniejszych plików. Ustaw poziom jakości: około 80 jest świetne dla zdjęć.",
      },
      {
        name: "Konwertuj na swoim urządzeniu",
        text: "Każde zdjęcie jest dekodowane wersją libheif w WebAssembly i ponownie kodowane lokalnie. Zobaczysz oryginalny i nowy rozmiar każdego pliku.",
      },
      {
        name: "Pobierz swoje zdjęcia",
        text: "Pobieraj obrazy pojedynczo lub weź wszystko w jednym pliku ZIP. Zmień format, jakość lub rozmiar i przetwórz ponownie, kiedy chcesz.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje zdjęcia HEIC są przesyłane na serwer?",
      a: (
        <>
          Nie. Twoje pliki HEIC są dekodowane i ponownie kodowane w całości w
          Twojej przeglądarce za pomocą WebAssembly &mdash; nigdy nie opuszczają
          urządzenia. Większość innych witryn typu &ldquo;konwerter HEIC&rdquo;
          przesyła Twoje osobiste zdjęcia na swoje serwery; ta nie ma żadnego
          serwera, na który mogłaby je wysłać, a po wczytaniu strony możesz
          odłączyć się od internetu, a narzędzie i tak będzie działać.
        </>
      ),
      text: "Nie. Pliki HEIC są dekodowane i ponownie kodowane w całości w Twojej przeglądarce za pomocą WebAssembly i nigdy nie opuszczają urządzenia. Większość innych witryn z konwerterem HEIC przesyła Twoje osobiste zdjęcia na serwer; ta nie. Po wczytaniu strony możesz odłączyć się od internetu, a narzędzie i tak będzie działać.",
    },
    {
      q: "Po co miałbym konwertować HEIC na JPG?",
      a: (
        <>
          HEIC to domyślny format zdjęć Apple, ale wiele komputerów z systemem
          Windows, witryn, aplikacji i starszych urządzeń nie potrafi go otworzyć.
          Konwersja na JPG (albo WebP/AVIF) sprawia, że zdjęcia otwierają się
          wszędzie, więc możesz je udostępniać, przesyłać i edytować bez błędów
          zgodności.
        </>
      ),
      text: "HEIC to domyślny format zdjęć Apple, ale wiele komputerów z systemem Windows, witryn, aplikacji i starszych urządzeń nie potrafi go otworzyć. Konwersja na JPG, WebP lub AVIF sprawia, że zdjęcia otwierają się wszędzie, więc możesz je udostępniać, przesyłać i edytować.",
    },
    {
      q: "Czy konwersja obniży jakość mojego zdjęcia?",
      a: (
        <>
          Konwersja na JPEG, WebP lub AVIF jest stratna, więc część szczegółów
          jest ponownie kodowana. Przy jakości 75&ndash;85 różnica jest zwykle
          niewidoczna przy standardowych rozmiarach wyświetlania. Utrzymuj wysoką
          jakość, aby pozostać wiernym oryginałowi, albo obniż ją (i zmień
          rozmiar), gdy mniejszy plik liczy się bardziej.
        </>
      ),
      text: "Konwersja na JPEG, WebP lub AVIF jest stratna, więc część szczegółów jest ponownie kodowana. Przy jakości 75-85 różnica jest zwykle niewidoczna. Utrzymuj wysoką jakość, aby pozostać wiernym oryginałowi, albo obniż ją i zmień rozmiar, gdy mniejszy plik liczy się bardziej.",
    },
    {
      q: "Dlaczego przekonwertowany JPG bywa większy niż HEIC?",
      a: (
        <>
          HEIC to wyjątkowo wydajny format &mdash; często przechowuje zdjęcie w
          mniej więcej połowie rozmiaru odpowiadającego mu JPEG. Dlatego prosta
          konwersja HEIC&rarr;JPEG może czasami dać większy plik. Aby naprawdę
          zmniejszyć zdjęcie, wybierz WebP lub AVIF (które dorównują wydajności
          HEIC), obniż suwak jakości lub zmień rozmiar obrazu.
        </>
      ),
      text: "HEIC jest bardzo wydajny i często przechowuje zdjęcie w mniej więcej połowie rozmiaru odpowiadającego mu JPEG, więc prosta konwersja HEIC na JPEG może dać większy plik. Aby zmniejszyć zdjęcie, wybierz WebP lub AVIF, obniż suwak jakości lub zmień rozmiar obrazu.",
    },
    {
      q: "Jaka jest różnica między HEIC a HEIF?",
      a: (
        <>
          HEIF (High Efficiency Image File Format) to kontener; HEIC to popularny
          wariant używany przez Apple, w którym znajdujący się w środku obraz jest
          kodowany za pomocą HEVC (H.265). W codziennym użyciu
          nazwy są wymienne &mdash; to narzędzie przyjmuje zarówno pliki .heic,
          jak i .heif.
        </>
      ),
      text: "HEIF (High Efficiency Image File Format) to kontener, a HEIC to popularny wariant Apple, w którym obraz jest kodowany za pomocą HEVC (H.265). Nazwy są używane wymiennie; to narzędzie przyjmuje zarówno pliki .heic, jak i .heif.",
    },
    {
      q: "Czy mogę przekonwertować kilka zdjęć HEIC naraz?",
      a: (
        <>
          Tak. Upuść całą partię &mdash; na przykład folder zdjęć przesłanych
          przez AirDrop z iPhone’a &mdash; a zostaną przekonwertowane jedno po
          drugim; potem możesz pobrać je pojedynczo albo wszystkie razem jako ZIP.
        </>
      ),
      text: "Tak. Dodaj całą partię zdjęć HEIC, a zostaną przekonwertowane jedno po drugim, po czym pobierzesz je pojedynczo lub wszystkie razem jako ZIP.",
    },
    {
      q: "Czy konwerter HEIC jest darmowy?",
      a: (
        <>
          Całkowicie za darmo: bez rejestracji, bez znaków wodnych i bez
          ograniczeń liczby czy rozmiaru plików poza pamięcią Twojego urządzenia.
          Witryna utrzymuje się z dyskretnych reklam, a kod jest otwarty, więc
          możesz sprawdzić dokładnie, co robi.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez rejestracji, znaków wodnych ani ograniczeń plików poza pamięcią Twojego urządzenia. Witryna utrzymuje się z dyskretnych reklam, a kod jest otwarty.",
    },
  ],
  content: (
    <>
      <h2 id="why-convert">Po co konwertować pliki HEIC?</h2>
      <p>
        Od iOS 11 iPhone’y i iPady domyślnie zapisują zdjęcia jako{" "}
        <strong>HEIC</strong>. To znakomity format do oszczędzania miejsca na
        urządzeniu, ale ma jedną dużą wadę: <strong>zgodność</strong>. Mnóstwo
        komputerów z systemem Windows, aplikacji internetowych, systemów
        zarządzania treścią, drukarek fotograficznych i starszych telefonów wciąż
        nie potrafi otworzyć pliku .heic, co prowadzi do aż nazbyt znajomego
        błędu &ldquo;nieobsługiwany format&rdquo; przy próbie udostępnienia lub
        przesłania zdjęcia.
      </p>
      <p>
        Konwersja zdjęć HEIC na powszechnie obsługiwany format, taki jak{" "}
        <strong>JPG</strong>, <strong>WebP</strong> czy <strong>AVIF</strong>,
        rozwiązuje to natychmiast &mdash; obraz otwiera się wszędzie, a Ty
        zachowujesz kontrolę nad jakością i rozmiarem pliku. A ponieważ to
        narzędzie działa w całości na Twoim urządzeniu, Twoje osobiste zdjęcia
        nigdy nie są przesyłane na czyjkolwiek serwer.
      </p>

      <h2 id="what-is-heic">Czym jest HEIC (oraz HEIF)?</h2>
      <p>
        HEIC oznacza <em>High Efficiency Image Container</em>. To wdrożenie przez
        Apple standardu <strong>HEIF</strong> (High Efficiency Image File
        Format), w którym właściwy obraz jest kompresowany za pomocą{" "}
        <strong>HEVC (H.265)</strong> &mdash; tego samego nowoczesnego kodeka
        wideo używanego do wydajnego wideo. Ta zaawansowana kompresja sprawia, że
        zdjęcie HEIC zajmuje zwykle około <strong>połowy rozmiaru</strong>{" "}
        odpowiadającego mu JPEG przy tej samej jakości wizualnej, a także pozwala
        przechowywać dodatki, takie jak mapy głębi, zdjęcia Live Photos i
        szerszą paletę barw. Więcej o tym, jak przeglądarki obsługują formaty
        obrazów, przeczytasz w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          dokumentacji formatów obrazów MDN
        </a>
        . Dekodowanie napędza tutaj{" "}
        <a
          href="https://github.com/strukturag/libheif"
          target="_blank"
          rel="noopener noreferrer"
        >
          libheif
        </a>
        , otwartoźródłowa biblioteka HEIF/HEIC skompilowana do WebAssembly.
      </p>

      <h2 id="compress-vs-convert">
        Kompresja kontra konwersja: czego się spodziewać
      </h2>
      <p>
        Oto szczera uwaga, której większość konwerterów Ci nie powie: ponieważ
        HEIC jest już tak wydajny, prosta konwersja HEIC&nbsp;&rarr;&nbsp;JPEG{" "}
        <strong>nie zawsze zmniejszy plik</strong> &mdash; a czasem może go nieco
        powiększyć. To nie błąd; to cena przejścia na starszą, bardziej zgodną
        kompresję JPEG.
      </p>
      <p>
        Jeśli Twoim celem jest naprawdę mniejszy plik, masz trzy dźwignie i
        możesz je łączyć:
      </p>
      <ul>
        <li>
          <strong>Wybierz WebP lub AVIF zamiast JPEG.</strong> Te nowoczesne
          formaty rywalizują z wydajnością HEIC, więc zachowujesz mały rozmiar{" "}
          <em>i</em> zyskujesz szeroką zgodność. AVIF, podobnie jak HEIC, opiera
          się na nowoczesnej technologii kodeków i zwykle daje najmniejszy wynik.
        </li>
        <li>
          <strong>Obniż suwak jakości.</strong> Zejście z 90 do 70&ndash;75
          znacznie zmniejsza plik przy niewielkiej widocznej zmianie.
        </li>
        <li>
          <strong>Zmień rozmiar obrazu.</strong> Zdjęcie z telefonu o wymiarach
          4032&times;3024 jest znacznie większe, niż potrzebuje jakikolwiek
          ekran. Zmniejszenie go to największa pojedyncza oszczędność przy
          udostępnianiu lub na potrzeby sieci.
        </li>
      </ul>

      <h2 id="choosing-format">JPEG, WebP czy AVIF: który wybrać</h2>
      <p>
        <strong>JPEG</strong> to bezpieczny domyślny wybór: każde urządzenie,
        aplikacja i witryna na świecie potrafi go otworzyć, co czyni go idealnym
        do wysyłania zdjęć e-mailem, przesyłania na stronę odrzucającą HEIC lub
        wysyłania komuś korzystającemu z Windows.{" "}
        <Link href="/pl/compress-jpeg">Kompresuj JPEG</Link> jeszcze bardziej,
        kiedy chcesz.
      </p>
      <p>
        <strong>WebP</strong> jest szeroko obsługiwany w nowoczesnych
        przeglądarkach i aplikacjach oraz jest mniej więcej o 25&ndash;35%
        mniejszy niż JPEG &mdash; świetny wybór do sieci. <strong>AVIF</strong>{" "}
        jest najbardziej oszczędny pod względem miejsca z całej trójki i najbliżej
        spokrewniony z HEIC, idealny, gdy mały rozmiar liczy się najbardziej, a
        Twój cel go obsługuje. Nie masz pewności? Przekonwertuj próbkę na oba
        sposoby naszym{" "}
        <Link href="/pl/image-converter">konwerterem obrazów</Link> i porównaj
        albo przeczytaj{" "}
        <Link href="/pl/blog/jpeg-vs-png-vs-webp-vs-avif">
          nasze porównanie formatów
        </Link>
        .
      </p>

      <h2 id="privacy">Prywatność z założenia i otwarty kod</h2>
      <p>
        Twoja galeria jest osobista. Przesłanie jej na przypadkową stronę
        konwertującą oznacza wręczenie nieznajomym kopii Twoich zdjęć &mdash;
        wraz ze wszystkim, co znajduje się w tle. FileShrinking podchodzi do tego
        inaczej: Twoje pliki HEIC są dekodowane i ponownie kodowane{" "}
        <strong>lokalnie w Twojej przeglądarce</strong> i nigdy nigdzie nie są
        przesyłane. Nie musisz nam wierzyć na słowo &mdash; cały projekt ma{" "}
        <Link href="/pl/about">otwarty kod</Link>, więc obietnicę braku
        przesyłania może zweryfikować w kodzie każdy. Dowiedz się więcej o tym,
        jak to działa, z{" "}
        <Link href="/pl/blog/how-client-side-file-compression-works">
          naszego wyjaśnienia kompresji po stronie klienta
        </Link>
        .
      </p>

      <h2 id="tips">Wskazówki dla najlepszych rezultatów</h2>
      <ul>
        <li>
          <strong>Wysyłasz komuś lub gdzieś przesyłasz?</strong> Wybierz JPG
          &mdash; masz gwarancję, że się otworzy.
        </li>
        <li>
          <strong>Optymalizujesz pod sieć lub pamięć?</strong> Wybierz AVIF lub
          WebP dla najmniejszych plików przy tej samej jakości.
        </li>
        <li>
          <strong>Zmień rozmiar przed konwersją.</strong> Jeśli zdjęcie będzie
          oglądane na telefonie lub w dokumencie, zmniejszenie go oszczędza
          znacznie więcej niż sama jakość.
        </li>
        <li>
          <strong>Przetwórz w partii cały AirDrop.</strong> Upuść wszystkie
          zdjęcia naraz i pobierz je razem jako ZIP.
        </li>
      </ul>
    </>
  ),
};
