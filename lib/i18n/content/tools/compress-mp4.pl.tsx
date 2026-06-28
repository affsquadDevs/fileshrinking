import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresja MP4 — Darmowy kompresor wideo MP4",
  metaDescription:
    "Kompresuj wideo MP4 w przeglądarce dzięki H.264. Ustawienia jakości, skalowanie rozdzielczości i bez wysyłania — Twoje pliki pozostają prywatne.",
  heading: "Kompresor MP4",
  intro: (
    <>
      Kompresuj wideo MP4 bezpośrednio w przeglądarce dzięki H.264. Wybierz
      ustawienie jakości, upuść swój klip i pobierz mniejszy plik w kilka minut —
      nic nigdy nie jest wysyłane, więc Twoje nagrania pozostają całkowicie
      prywatne.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak skompresować MP4",
    description:
      "Skompresuj wideo MP4 lokalnie w przeglądarce w czterech krokach.",
    steps: [
      {
        name: "Dodaj swój plik MP4",
        text: "Przeciągnij i upuść plik .mp4 w obszarze zrzutu lub kliknij, aby go wyszukać. Wideo jest wczytywane do pamięci Twojego urządzenia, a nie wysyłane gdziekolwiek.",
      },
      {
        name: "Wybierz ustawienie jakości",
        text: "Zacznij od trybu Zrównoważony. Ustawia on rozsądny CRF i ogranicza rozdzielczość; przełącz na mniejsze ustawienie, aby uzyskać bardziej skompresowane pliki, lub na większe, aby pozostać bliżej oryginału.",
      },
      {
        name: "Dostrój CRF",
        text: "Przesuń suwak CRF, jeśli chcesz mieć większą kontrolę. Niższa wartość zachowuje więcej szczegółów i daje większy plik; zakres od 23 do 28 to praktyczny złoty środek dla większości klipów.",
      },
      {
        name: "Skompresuj i pobierz",
        text: "Ponowne kodowanie odbywa się na Twoim urządzeniu za pomocą ffmpeg. Po zakończeniu zobaczysz zaoszczędzony rozmiar, a następnie pobierzesz mniejszy plik MP4.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje pliki MP4 są wysyłane na serwer?",
      a: (
        <>
          Nie. Twoje wideo jest kompresowane lokalnie w przeglądarce za pomocą
          wersji ffmpeg w WebAssembly. Plik jest wczytywany do pamięci, ponownie
          kodowany na Twoim własnym urządzeniu i zwracany bezpośrednio: nie ma
          żadnego serwera, na który miałby zostać wysłany, i nic nigdy nie jest
          przesyłane.
        </>
      ),
      text: "Nie. Twoje wideo jest kompresowane lokalnie w przeglądarce za pomocą wersji ffmpeg w WebAssembly. Plik jest wczytywany do pamięci, ponownie kodowany na Twoim własnym urządzeniu i zwracany bezpośrednio. Nie ma żadnego serwera, na który miałby zostać wysłany, i nic nigdy nie jest przesyłane.",
    },
    {
      q: "Czy kompresor MP4 jest naprawdę darmowy?",
      a: (
        <>
          Tak: jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez
          limitów na plik czy na dzień. Ponieważ cała praca odbywa się na Twoim
          urządzeniu, nie ma kosztów serwerowych do pokrycia. Witryna utrzymuje
          się z dyskretnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez rejestracji, bez znaków wodnych i bez limitów na plik czy na dzień. Ponieważ cała praca odbywa się na Twoim urządzeniu, nie ma kosztów serwerowych do pokrycia. Witryna utrzymuje się z dyskretnych reklam.",
    },
    {
      q: "Czy kompresja obniży jakość mojego wideo?",
      a: (
        <>
          H.264 to kodek stratny, więc ponowne kodowanie zawsze odrzuca część
          szczegółów. Przy ustawieniu Zrównoważony (w okolicach CRF 23-28) strata
          jest trudna do zauważenia przy normalnych rozmiarach wyświetlania,
          podczas gdy plik znacznie się zmniejsza. Wybierz niższy CRF, aby
          pozostać bliżej oryginału, lub wyższy, aby uzyskać mniejszy plik.
        </>
      ),
      text: "H.264 to kodek stratny, więc ponowne kodowanie zawsze odrzuca część szczegółów. Przy ustawieniu Zrównoważony (w okolicach CRF 23-28) strata jest trudna do zauważenia przy normalnych rozmiarach wyświetlania, podczas gdy plik znacznie się zmniejsza. Wybierz niższy CRF, aby pozostać bliżej oryginału, lub wyższy, aby uzyskać mniejszy plik.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku MP4, który mogę skompresować?",
      a: (
        <>
          Nie ma sztywnego limitu, ale ponowne kodowanie wideo mocno obciąża
          pamięć i procesor oraz działa jednowątkowo w przeglądarce. Klipy do
          około 150&nbsp;MB kompresują się bez problemu na większości urządzeń;
          większe lub dłuższe filmy również działają, ale mogą być wolne i mogą
          się nie powieść na telefonach z małą ilością pamięci. Krótkie klipy
          kończą się najszybciej.
        </>
      ),
      text: "Nie ma sztywnego limitu, ale ponowne kodowanie wideo mocno obciąża pamięć i procesor oraz działa jednowątkowo w przeglądarce. Klipy do około 150 MB kompresują się bez problemu na większości urządzeń; większe lub dłuższe filmy również działają, ale mogą być wolne i mogą się nie powieść na telefonach z małą ilością pamięci. Krótkie klipy kończą się najszybciej.",
    },
    {
      q: "Dlaczego kompresja MP4 jest wolniejsza niż kompresja obrazu?",
      a: (
        <>
          Wideo to tysiące klatek, a każda z nich jest dekodowana, opcjonalnie
          zmieniana rozmiarowo i ponownie kodowana za pomocą H.264. Wersja ffmpeg
          działająca w przeglądarce pracuje na jednym wątku ze względów
          zgodności i bezpieczeństwa, więc nie może wykorzystać wszystkich rdzeni
          procesora tak, jak zrobiłaby to aplikacja desktopowa. Spodziewaj się
          szybkości od mniej więcej czasu rzeczywistego do kilku razy szybciej
          niż czas rzeczywisty, w zależności od rozdzielczości i Twojego sprzętu.
        </>
      ),
      text: "Wideo to tysiące klatek, a każda z nich jest dekodowana, opcjonalnie zmieniana rozmiarowo i ponownie kodowana za pomocą H.264. Wersja ffmpeg działająca w przeglądarce pracuje na jednym wątku ze względów zgodności i bezpieczeństwa, więc nie może wykorzystać wszystkich rdzeni procesora tak, jak zrobiłaby to aplikacja desktopowa. Spodziewaj się szybkości od mniej więcej czasu rzeczywistego do kilku razy szybciej niż czas rzeczywisty, w zależności od rozdzielczości i sprzętu.",
    },
    {
      q: "Czy warto ponownie kodować MP4, które już jest w H.264?",
      a: (
        <>
          Czasami. Jeśli oryginał wyeksportowano z wysokim bitrate lub dużą
          rozdzielczością, ponowne kodowanie z wyższym CRF lub mniejszą wysokością
          może zaoszczędzić sporo miejsca. Ale plik, który był już efektywnie
          skompresowany, może zmniejszyć się ledwie zauważalnie, a nawet urosnąć.
          Jeśli wynik nie jest mniejszy, narzędzie informuje Cię, że plik jest już
          efektywny i możesz zachować oryginał.
        </>
      ),
      text: "Czasami. Jeśli oryginał wyeksportowano z wysokim bitrate lub dużą rozdzielczością, ponowne kodowanie z wyższym CRF lub mniejszą wysokością może zaoszczędzić sporo miejsca. Ale plik, który był już efektywnie skompresowany, może zmniejszyć się ledwie zauważalnie, a nawet urosnąć. Jeśli wynik nie jest mniejszy, narzędzie informuje Cię, że plik jest już efektywny i możesz zachować oryginał.",
    },
  ],
  content: (
    <>
      <h2 id="why">Dlaczego pliki MP4 są tak duże?</h2>
      <p>
        MP4 to kontener, a nie kodek: opakowuje strumień wideo, strumień audio i
        metadane w jeden plik. Rozmiar tego pliku jest niemal w całości
        determinowany przez <strong>bitrate</strong> strumienia wideo: ile bitów
        na sekundę koder przeznacza na opisanie obrazu. Bitrate z kolei skaluje
        się z trzema rzeczami, które kontrolujesz: z{" "}
        <strong>rozdzielczością</strong> (klatka 4K ma cztery razy więcej pikseli
        niż 1080p), z <strong>długością</strong> klipu oraz z{" "}
        <strong>docelową jakością</strong>, z jaką wyeksportowano oryginał.
      </p>
      <p>
        Telefony, rejestratory ekranu i aplikacje do montażu zwykle stawiają na
        jakość, eksportując z wysokimi wartościami bitrate, aby nic nie wyglądało
        rozmyto. To świetne do archiwizacji, ale rozrzutne przy udostępnianiu:
        minutowy klip z telefonu w 4K może z łatwością przekroczyć 150&nbsp;MB,
        znacznie więcej, niż potrzebujesz, by wysłać go przez komunikatory czy
        e-mail. Ponowne kodowanie z rozsądną docelową jakością, a często z mniejszą
        rozdzielczością, to właśnie miejsce, z którego pochodzą największe
        oszczędności.
      </p>

      <h2 id="crf">Jak CRF i rozdzielczość zmniejszają plik</h2>
      <p>
        To narzędzie ponownie koduje Twoje wideo za pomocą <strong>H.264</strong>{" "}
        przy użyciu <strong>stałego współczynnika jakości (CRF)</strong>. Zamiast
        wymuszać stały bitrate, CRF dąży do stałej <em>postrzeganej</em> jakości i
        pozwala koderowi przeznaczyć więcej bitów na złożone sceny, a mniej na
        proste. Skala tutaj sięga od 18 (bardzo wysoka jakość, większy plik) do 36
        (mniejszy plik, bardziej widoczne artefakty). Każdy krok o około
        &plusmn;6 odpowiada mniej więcej połowie lub podwojeniu rozmiaru pliku,
        więc niewielkie zmiany suwaka mają duży efekt.
      </p>
      <p>
        Drugą dźwignią jest <strong>rozdzielczość</strong>. Obniżenie maksymalnej
        wysokości — powiedzmy z 2160p do 1080p lub 720p — drastycznie zmniejsza
        liczbę pikseli, a mniej pikseli potrzebuje mniej bitów przy tej samej
        jakości. W przypadku nagrań, które będą oglądane na telefonie lub osadzone
        w dokumencie, ponowne kodowanie do 720p lub 1080p często wygląda w
        praktyce identycznie, będąc ułamkiem rozmiaru. Ustawienia łączą CRF z
        limitem wysokości, abyś mógł uzyskać dobry wynik bez żadnego dostrajania;
        suwak CRF jest dostępny, gdy chcesz mieć dokładniejszą kontrolę.
      </p>
      <p>
        Dwie rzeczy znaczą mniej, niż ludzie się spodziewają. Po pierwsze, liczba
        klatek na sekundę: większość klipów nie potrzebuje więcej, niż ma już
        oryginał, a jej obniżenie oszczędza tylko niewielką ilość miejsca w
        porównaniu z CRF i rozdzielczością. Po drugie, ścieżka audio. Mowa i
        muzyka dodają nieco wagi, ale typowa ścieżka dźwiękowa AAC to mała część
        pliku wideo, więc to niemal zawsze obraz jest miejscem, w którym leżą
        oszczędności. Dlatego to narzędzie skupia Twoje wybory na jakości i
        rozdzielczości — dwóch ustawieniach, które robią różnicę — i automatycznie
        koduje audio do rozsądnego bitrate.
      </p>

      <h2 id="format">
        MP4, H.264 i kiedy ponowne kodowanie naprawdę pomaga
      </h2>
      <p>
        Zdecydowana większość plików MP4 już zawiera strumień wideo H.264 (zwany
        też AVC), co jest powodem, dla którego MP4 odtwarza się praktycznie
        wszędzie: od starych telefonów po telewizory smart. Możesz przeczytać, jak
        przeglądarki opisują kontener MP4 i kodek H.264, w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodniku po kontenerach multimedialnych MDN
        </a>{" "}
        oraz w jego{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264"
          target="_blank"
          rel="noopener noreferrer"
        >
          opisie kodeka AVC / H.264
        </a>
        . Generowanie H.264 w MP4 zachowuje nienaruszoną tę uniwersalną
        zgodność.
      </p>
      <p>
        Ponowne kodowanie MP4, które <em>już</em> jest w H.264, pomaga, gdy
        oryginał wyeksportowano hojnie — z wysokim bitrate, dużą rozdzielczością
        lub jednym i drugim — bo jest zapas do usunięcia. Pomaga znacznie mniej, a
        nawet może dać <strong>większy</strong> plik, gdy wideo było już mocno
        skompresowane: ponowne kodowanie strumienia stratnego oznacza jego
        zdekodowanie i ponowną stratną kompresję, więc zyskujesz tylko wtedy, gdy
        Twój nowy cel jest naprawdę niższy niż oryginał. Jeśli wynik nie byłby
        mniejszy, to narzędzie informuje Cię o tym, abyś mógł po prostu zachować
        swój oryginał. Aby wycisnąć więcej, podnieś CRF lub obniż rozdzielczość,
        zamiast oczekiwać cudów po jednym przebiegu.
      </p>

      <h2 id="tips">Wskazówki i kompromis szybkości w przeglądarce</h2>
      <p>
        Wszystko dzieje się na Twoim urządzeniu za pomocą wersji ffmpeg w{" "}
        WebAssembly, co sprawia, że jest to prywatne, ale jest to także{" "}
        <strong>jednowątkowe</strong>. Natywny koder desktopowy rozdziela pracę
        między wszystkie rdzenie procesora; wersja przeglądarkowa, ze względów
        zgodności i bezpieczeństwa, używa jednego. Oznacza to, że długie lub
        wysokorozdzielcze filmy mogą trochę zająć i mogą obciążyć telefony z małą
        ilością pamięci. Kilka nawyków utrzyma płynność:
      </p>
      <ul>
        <li>
          <strong>Przytnij najpierw, kiedy możesz.</strong> Długość jest
          bezpośrednim mnożnikiem zarówno rozmiaru pliku, jak i czasu kodowania,
          więc wycięcie martwych fragmentów przed kompresją to najłatwiejsze
          zwycięstwo.
        </li>
        <li>
          <strong>Obniż rozdzielczość do udostępniania.</strong> 720p lub 1080p w
          zupełności wystarcza do komunikatorów, slajdów i większości osadzeń w
          sieci; zarezerwuj 4K dla nagrań, które naprawdę oglądasz na dużym
          ekranie.
        </li>
        <li>
          <strong>Zacznij od Zrównoważony, a potem porównaj.</strong> Uruchom
          ponownie z mniejszym ustawieniem i sprawdź, czy potrafisz dostrzec
          różnicę przy swoim rzeczywistym rozmiarze wyświetlania, zanim się
          zdecydujesz.
        </li>
        <li>
          <strong>Duże zadania wykonuj na jednym urządzeniu naraz.</strong>{" "}
          Zamknij inne obciążające karty, aby koder miał pamięć i procesor do
          pracy; krótkie klipy kończą się najszybciej.
        </li>
      </ul>
      <p>
        Pracujesz z innymi formatami? Użyj bardziej ogólnego{" "}
        <Link href="/pl/video-compressor">kompresora wideo</Link> dla MP4 i
        wszystkiego innego, dedykowanego{" "}
        <Link href="/pl/compress-mov">kompresora MOV, WebM, MKV i AVI</Link>{" "}
        dla nagrań innych niż MP4 lub{" "}
        <Link href="/pl/audio-compressor">kompresora audio</Link>, gdy
        potrzebujesz tylko zmniejszyć ścieżkę dźwiękową lub nagranie głosu.
      </p>
    </>
  ),
};
