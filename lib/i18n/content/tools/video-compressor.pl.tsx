import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresor wideo — darmowy, w przeglądarce",
  metaDescription:
    "Kompresuj wideo MP4, MOV, WebM, MKV i AVI w przeglądarce za pomocą ffmpeg. Prywatnie i w przeglądarce — bez przesyłania, Twoje wideo nie opuszcza urządzenia.",
  heading: "Kompresor wideo",
  intro: (
    <>
      Kompresuj wideo MP4, MOV, WebM, MKV i AVI bezpośrednio w przeglądarce za
      pomocą wersji ffmpeg w WebAssembly. Wybierz gotowe ustawienie jakości,
      upuść swój klip i pobierz mniejszy plik MP4 w formacie H.264 — Twoje
      nagranie nigdy nie jest nigdzie przesyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak skompresować wideo",
    description:
      "Skompresuj wideo lokalnie w przeglądarce za pomocą ffmpeg w czterech krokach.",
    steps: [
      {
        name: "Dodaj swoje wideo",
        text: "Przeciągnij i upuść plik wideo na pole zrzutu albo kliknij, aby go wyszukać. Dla najpłynniejszego działania trzymaj się plików poniżej około 150 MB.",
      },
      {
        name: "Wybierz ustawienie jakości",
        text: "Wybierz gotowe ustawienie lub dostrój suwak CRF. Niższe ustawienia zmniejszają rozdzielczość i bitrate, dając znacznie mniejsze pliki.",
      },
      {
        name: "Pozwól na kodowanie na Twoim urządzeniu",
        text: "ffmpeg ponownie koduje wideo do H.264/MP4 lokalnie. Pasek postępu pokazuje, na jakim jest etapie — większe lub dłuższe klipy zajmują więcej czasu.",
      },
      {
        name: "Pobierz wynik",
        text: "Zapisz mniejszy plik MP4. Jeśli wynik nie jest mniejszy, Twój plik był już wydajny — spróbuj niższej jakości lub rozdzielczości i uruchom ponownie.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje filmy są przesyłane na serwer?",
      a: (
        <>
          Nie. Cała kompresja odbywa się wewnątrz Twojej przeglądarki przy użyciu
          wersji ffmpeg w WebAssembly. Twoje wideo jest wczytywane do pamięci,
          ponownie kodowane na Twoim własnym komputerze i przekazywane Ci
          bezpośrednio z powrotem. Nic nigdy nie jest przesyłane i nie ma żadnego
          serwera, który mógłby przechowywać Twoje nagrania.
        </>
      ),
      text: "Nie. Cała kompresja odbywa się wewnątrz Twojej przeglądarki przy użyciu wersji ffmpeg w WebAssembly. Twoje wideo jest wczytywane do pamięci, ponownie kodowane na Twoim własnym komputerze i przekazywane Ci z powrotem. Nic nie jest przesyłane i nie ma żadnego serwera, który mógłby przechowywać Twoje nagrania.",
    },
    {
      q: "Czy kompresor wideo jest naprawdę darmowy?",
      a: (
        <>
          Tak — jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez
          opłat za poszczególne pliki. Ponieważ cała praca odbywa się na Twoim
          urządzeniu, nie ma kosztów serwerowych, które trzeba by przerzucać na
          użytkownika. Strona utrzymuje się z nienachalnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez opłat za poszczególne pliki. Ponieważ cała praca odbywa się na Twoim urządzeniu, nie ma kosztów serwerowych, które trzeba by przerzucać na użytkownika. Strona utrzymuje się z nienachalnych reklam.",
    },
    {
      q: "Czy kompresja obniży jakość mojego wideo?",
      a: (
        <>
          Kompresja wideo jest stratna, więc część szczegółów zostaje odrzucona.
          Suwak CRF decyduje, jak agresywne jest to działanie — wartości w okolicy
          23–28 wyglądają bardzo podobnie do oryginału w przypadku większości
          nagrań. Zmniejszenie rozdzielczości (na przykład z 4K do 1080p) pozwala
          zaoszczędzić najwięcej miejsca, zachowując ostry obraz przy normalnych
          rozmiarach oglądania.
        </>
      ),
      text: "Kompresja wideo jest stratna, więc część szczegółów zostaje odrzucona. Suwak CRF decyduje, jak agresywne jest to działanie; wartości w okolicy 23–28 wyglądają bardzo podobnie do oryginału w przypadku większości nagrań. Zmniejszenie rozdzielczości (na przykład z 4K do 1080p) pozwala zaoszczędzić najwięcej miejsca, zachowując ostry obraz przy normalnych rozmiarach.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę skompresować?",
      a: (
        <>
          Nie ma sztywnego limitu, ale ponieważ wszystko działa w Twojej
          przeglądarce na jednowątkowym ffmpeg, zalecamy pliki poniżej około{" "}
          <strong>150&nbsp;MB</strong>. Duże lub długie filmy zużywają dużo
          pamięci i mogą działać wolno, a na telefonach lub starszych laptopach z
          ograniczoną ilością RAM mogą się nie powieść. W przypadku dużych klipów
          najpierw je przytnij albo skompresuj w przeglądarce na komputerze
          stacjonarnym.
        </>
      ),
      text: "Nie ma sztywnego limitu, ale ponieważ wszystko działa w Twojej przeglądarce na jednowątkowym ffmpeg, zalecamy pliki poniżej około 150 MB. Duże lub długie filmy zużywają dużo pamięci, mogą działać wolno i na telefonach lub starszych laptopach z ograniczoną ilością RAM mogą się nie powieść. W przypadku dużych klipów najpierw je przytnij albo użyj przeglądarki na komputerze stacjonarnym.",
    },
    {
      q: "Dlaczego kompresja wideo w przeglądarce jest wolniejsza niż na innych stronach?",
      a: (
        <>
          Większość kompresorów online przesyła Twój plik na potężny,
          wielordzeniowy serwer, który wykonuje kodowanie za Ciebie. To narzędzie
          celowo tego nie robi — uruchamia ffmpeg lokalnie, aby Twoje wideo
          pozostało prywatne. Pojedynczy wątek przeglądarki jest wolniejszy niż
          farma serwerów, więc kilka minut materiału może chwilę potrwać. Ten
          kompromis zapewnia Ci pełną prywatność.
        </>
      ),
      text: "Większość kompresorów online przesyła Twój plik na potężny, wielordzeniowy serwer, który koduje go za Ciebie. To narzędzie celowo tego nie robi; uruchamia ffmpeg lokalnie, aby Twoje wideo pozostało prywatne. Pojedynczy wątek przeglądarki jest wolniejszy niż farma serwerów, więc kilka minut materiału może chwilę potrwać. Ten kompromis zapewnia Ci pełną prywatność.",
    },
    {
      q: "W jakim formacie wychodzi skompresowane wideo?",
      a: (
        <>
          Wynikiem jest <strong>wideo H.264 w kontenerze MP4</strong>, niezależnie
          od tego, czy plik wejściowy był w formacie MOV, WebM, MKV czy AVI.
          H.264/MP4 odtwarza się praktycznie na każdym telefonie, w każdej
          przeglądarce, telewizorze i aplikacji do edycji, więc taki wynik jest
          najbezpieczniejszym wyborem do udostępniania i przesyłania.
        </>
      ),
      text: "Wynikiem jest wideo H.264 w kontenerze MP4, niezależnie od tego, czy plik wejściowy był w formacie MOV, WebM, MKV czy AVI. H.264/MP4 odtwarza się praktycznie na każdym telefonie, w każdej przeglądarce, telewizorze i aplikacji do edycji, więc taki wynik jest najbezpieczniejszym wyborem do udostępniania i przesyłania.",
    },
  ],
  content: (
    <>
      <h2 id="why">Dlaczego warto kompresować wideo w przeglądarce?</h2>
      <p>
        Wideo jest zdecydowanie najcięższym rodzajem mediów, z jakim ma do
        czynienia większość ludzi. Minuta nagrania 4K z telefonu może zajmować
        setki megabajtów, co jest zbyt dużym rozmiarem, by wysłać go mailem,
        niewygodnym do przesłania i szybko zapełnia magazyn w chmurze oraz galerię
        zdjęć w telefonie. Kompresja klipu może zmniejszyć jego rozmiar o połowę
        lub więcej, zachowując pełną oglądalność, co ułatwia udostępnianie go w
        aplikacjach do czatu, dołączanie do wiadomości lub publikowanie na stronie
        z limitem przesyłania.
      </p>
      <p>
        Tym, co wyróżnia to narzędzie, jest <strong>to, gdzie</strong> odbywa się
        praca. Twoje surowe nagrania często zawierają prywatne chwile — rodzinę,
        Twój dom, miejsce pracy, dokumenty na ekranie. Typowy kompresor online
        przesyła to wszystko na zdalny serwer. Tutaj wideo jest dekodowane,
        ponownie kodowane i zapisywane na nowo w całości wewnątrz karty Twojej
        przeglądarki, więc nigdy nie wędruje przez internet. Po wczytaniu strony
        możesz nawet wyłączyć połączenie, a kompresja i tak będzie działać.
      </p>
      <p>
        Jest mnóstwo codziennych powodów, by sięgnąć po mniejszy plik. Aplikacje
        do wiadomości i dostawcy poczty ograniczają załączniki — często do
        25&nbsp;MB lub mniej — więc szybkie ponowne zakodowanie decyduje o tym,
        czy wiadomość się wyśle, czy zostanie odrzucona. Platformy kursów, portale
        rekrutacyjne i formularze kontaktowe często odrzucają cokolwiek powyżej
        kilku megabajtów. A jeśli archiwizujesz lata rodzinnych klipów,
        zmniejszenie każdego pliku o połowę zwraca się wielokrotnie w postaci
        miejsca, którego nie musisz kupować.
      </p>

      <h2 id="how-it-works">
        Jak działa enkoder w przeglądarce (i jakie ma ograniczenia)
      </h2>
      <p>
        Pod maską to narzędzie uruchamia <strong>ffmpeg</strong>, branżowy
        standard wśród silników multimedialnych, skompilowany do WebAssembly, aby
        działał natywnie w Twojej przeglądarce. To naprawdę potężne rozwiązanie,
        ale wiąże się z uczciwymi kompromisami, o których warto wiedzieć. Ta
        wersja jest <strong>jednowątkowa</strong>, więc nie może rozłożyć
        kodowania na wszystkie rdzenie Twojego procesora, jak robi to aplikacja
        desktopowa lub serwer w chmurze. W efekcie kompresja tutaj jest{" "}
        <strong>wolniejsza</strong> niż w usłudze opartej na przesyłaniu, która
        działa na maszynie wielordzeniowej, a kilka minut wideo może wymagać
        odrobiny cierpliwości.
      </p>
      <p>
        Jest też <strong>ograniczona pamięcią</strong>. Cały plik musi zmieścić
        się w dostępnej pamięci przeglądarki podczas przetwarzania, dlatego
        zalecamy trzymanie się danych wejściowych poniżej mniej więcej{" "}
        <strong>150&nbsp;MB</strong>. Bardzo duże lub bardzo długie filmy mogą
        działać wolno i całkowicie zawieść na telefonach lub starszych laptopach z
        ograniczoną ilością RAM. Jeśli natrafisz na ścianę, przytnij klip do
        potrzebnego fragmentu, obniż rozdzielczość lub uruchom go w przeglądarce
        na komputerze stacjonarnym z większą ilością pamięci. To realne
        ograniczenia robienia wszystkiego lokalnie — zaletą jest to, że Twoje
        wideo pozostaje Twoje.
      </p>
      <p>
        Kilka nawyków sprawia, że kodowanie lokalne staje się znacznie
        przyjemniejsze. Zamknij inne ciężkie karty i aplikacje przed startem, aby
        przeglądarka miała przestrzeń do pracy. Trzymaj kartę na pierwszym planie —
        niektóre przeglądarki spowalniają karty w tle, co może zablokować długie
        kodowanie. I daj mu czas bez odświeżania: pasek postępu jest prawdziwy, a
        przeładowanie w trakcie kodowania wyrzuca do kosza wykonaną do tej pory
        pracę.
      </p>

      <h2 id="settings">CRF, rozdzielczość i dźwięk: trzy dźwignie</h2>
      <p>
        Trzy ustawienia decydują o ostatecznym rozmiarze Twojego pliku.
        Największą pojedynczą dźwignią jest <strong>rozdzielczość</strong>.
        Zmniejszenie z 4K do 1080p lub z 1080p do 720p usuwa ogromną liczbę pikseli
        z każdej klatki i zazwyczaj jest niewidoczne, chyba że oglądasz na dużym
        ekranie z bliska. Jeśli potrzebujesz klipu tylko na telefon lub do
        osadzenia na stronie, zmniejszenie rozdzielczości skurczy go znacznie
        bardziej niż samo dostrajanie jakości.
      </p>
      <p>
        Drugą dźwignią jest <strong>CRF</strong> (Constant Rate Factor),
        kontrola jakości dla H.264. Niższe liczby oznaczają wyższą jakość i większe
        pliki; wyższe liczby oznaczają mniejsze pliki z bardziej widoczną
        kompresją. CRF w zakresie <strong>23–28</strong> to praktyczny złoty
        środek dla większości nagrań. Trzecią dźwignią jest{" "}
        <strong>bitrate dźwięku</strong>: mowa brzmi dobrze przy niskim bitrate, a
        muzyka zyskuje na większym. Jeśli Twoje wideo to głównie mówienie,
        obniżenie bitrate dźwięku oszczędza miejsce bez zauważalnej straty.
        Domyślnym wynikiem jest <strong>H.264 w kontenerze MP4</strong> właśnie
        dlatego, że odtwarza się niemal wszędzie.
      </p>
      <ul>
        <li>
          <strong>Dopasuj rozdzielczość do miejsca, gdzie będzie oglądana.</strong>{" "}
          Klip przeznaczony na telefon lub do małego odtwarzacza internetowego nic
          nie zyskuje na 4K; 720p lub 1080p będą wyglądać identycznie i ważyć
          ułamek tego.
        </li>
        <li>
          <strong>Najpierw poruszaj CRF, zanim zmienisz cokolwiek innego.</strong>{" "}
          Przejście z 23 na 26 często zmniejsza rozmiar o połowę, ze stratą
          szczegółów, której większość widzów nigdy nie zauważy. Porównaj wynik,
          zanim pójdziesz bardziej agresywnie.
        </li>
        <li>
          <strong>Nie kompresuj ponownie już skompresowanego klipu.</strong> Każde
          stratne przejście odrzuca więcej szczegółów. Jeśli narzędzie zgłosi, że
          wynik nie jest mniejszy, Twój plik jest już wydajnie zakodowany —
          zostaw go takim, jaki jest, zamiast pogarszać go jeszcze bardziej.
        </li>
        <li>
          <strong>Najpierw przytnij dla dużych oszczędności.</strong> Wycięcie
          martwej ciszy z początku i końca klipu usuwa całe klatki, co bije każde
          ustawienie jakości pod względem zmniejszania pliku.
        </li>
      </ul>

      <h2 id="codecs">Kilka słów o kodekach wideo</h2>
      <p>
        &bdquo;Plik wideo&rdquo; to tak naprawdę dwie rzeczy:{" "}
        <strong>kodek</strong>, który koduje piksele (taki jak H.264, VP9 lub
        AV1), oraz format <strong>kontenera</strong>, który go opakowuje (MP4,
        WebM, MOV, MKV). Dlatego to samo wideo H.264 może znajdować się wewnątrz
        pliku MP4 lub MOV. Generujemy H.264/MP4, ponieważ ma najszerszą obsługę
        sprzętową i programową ze wszystkich nowoczesnych kodeków — niemal każde
        urządzenie wyprodukowane w ostatniej dekadzie potrafi je płynnie
        dekodować. Więcej o tym, jak kodeki i kontenery do siebie pasują, możesz
        przeczytać w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodniku MDN po kodekach wideo dla sieci
        </a>
        .
      </p>
      <p>
        Ta strona jest centrum wszystkich naszych narzędzi do wideo. Jeśli znasz
        format swojego pliku, dedykowane strony mają wskazówki dopasowane do niego:
        skorzystaj z{" "}
        <Link href="/pl/compress-mp4">kompresora MP4</Link> do materiału już w
        formacie MP4 lub z{" "}
        <Link href="/pl/compress-mov">kompresora MOV, WebM, MKV i AVI</Link>{" "}
        do klipów z kamer, rejestratorów ekranu i innych aplikacji. Jeśli musisz
        zmniejszyć tylko dźwięk — podcast, notatkę głosową lub plik muzyczny —{" "}
        <Link href="/pl/audio-compressor">kompresor audio</Link> zajmie się tym
        bez ponownego kodowania jakiegokolwiek wideo.
      </p>
    </>
  ),
};
