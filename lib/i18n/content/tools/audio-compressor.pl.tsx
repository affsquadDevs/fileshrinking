import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresor audio — darmowe MP3 i AAC online",
  metaDescription:
    "Kompresuj audio MP3, WAV, AAC, M4A, OGG i FLAC w przeglądarce. Wybierz bitrate, bez przesyłania i rejestracji — pliki nie opuszczają Twojego urządzenia.",
  heading: "Kompresor audio",
  intro: (
    <>
      Zmniejsz rozmiar plików MP3, WAV, AAC, M4A, OGG i FLAC bezpośrednio w
      przeglądarce. Recoduj do MP3 lub AAC z wybranym przez siebie bitrate i
      pobierz lżejszy utwór w kilka sekund — nic nigdy nie jest przesyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak skompresować plik audio",
    description:
      "Kompresuj MP3, WAV, AAC i inne lokalnie w przeglądarce w czterech krokach.",
    steps: [
      {
        name: "Dodaj swoje audio",
        text: "Przeciągnij i upuść pliki audio na pole zrzutu lub kliknij, aby je wybrać. Akceptowane są MP3, WAV, AAC, M4A, OGG i FLAC.",
      },
      {
        name: "Wybierz format wyjściowy",
        text: "Wybierz MP3 dla maksymalnej zgodności lub AAC (.m4a) dla nieco lepszej jakości przy tym samym rozmiarze.",
      },
      {
        name: "Wybierz bitrate",
        text: "Ustaw bitrate, aby kontrolować równowagę między rozmiarem a jakością. 128 kbps dobrze sprawdza się przy muzyce; zejdź do 96 kbps przy mowie i podcastach, aby zaoszczędzić jeszcze więcej.",
      },
      {
        name: "Pobierz swój plik",
        text: "Każdy utwór jest recodowany na Twoim urządzeniu za pomocą FFmpeg. Zobaczysz oryginalny rozmiar, nowy rozmiar i zaoszczędzony procent, a następnie pobierzesz wynik.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje pliki audio są przesyłane na serwer?",
      a: (
        <>
          Nie. Każdy utwór jest recodowany lokalnie w Twojej przeglądarce za
          pomocą wersji FFmpeg skompilowanej w WebAssembly. Twoje audio nigdy nie
          opuszcza Twojego urządzenia i nie ma żadnego serwera, który by je
          odebrał: po wczytaniu strony możesz nawet odłączyć się od internetu, a
          narzędzie nadal będzie działać.
        </>
      ),
      text: "Nie. Każdy utwór jest recodowany lokalnie w Twojej przeglądarce za pomocą wersji FFmpeg skompilowanej w WebAssembly. Twoje audio nigdy nie opuszcza Twojego urządzenia i nie ma żadnego serwera, który by je odebrał. Po wczytaniu strony możesz odłączyć się od internetu, a narzędzie nadal będzie działać.",
    },
    {
      q: "Czy kompresor audio jest naprawdę darmowy?",
      a: (
        <>
          Tak: jest całkowicie darmowy, bez konta, bez znaków wodnych i bez
          limitu liczby plików. Jedynym praktycznym ograniczeniem jest pamięć
          Twojego urządzenia. Witryna utrzymuje się z dyskretnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez konta, bez znaków wodnych i bez limitu liczby plików. Jedynym praktycznym ograniczeniem jest pamięć Twojego urządzenia. Witryna utrzymuje się z dyskretnych reklam.",
    },
    {
      q: "Czy kompresja obniży jakość audio?",
      a: (
        <>
          MP3 i AAC to formaty stratne, więc część niesłyszalnych detali zostaje
          odrzucona, aby zmniejszyć plik. Przy 128 kbps większość słuchaczy nie
          odróżni muzyki od oryginału, a 96 kbps z nadwyżką wystarcza do mowy lub
          podcastów. Wybierz wyższy bitrate, aby pozostać bliżej źródła.
        </>
      ),
      text: "MP3 i AAC to formaty stratne, więc część niesłyszalnych detali zostaje odrzucona, aby zmniejszyć plik. Przy 128 kbps większość słuchaczy nie odróżni muzyki od oryginału, a 96 kbps z nadwyżką wystarcza do mowy lub podcastów. Wybierz wyższy bitrate, aby pozostać bliżej źródła.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę skompresować?",
      a: (
        <>
          Nie ma stałego limitu: zależy on od pamięci dostępnej na Twoim
          urządzeniu. Typowe utwory, podcasty i notatki głosowe przetwarzane są w
          kilka sekund. Bardzo duże, nieskompresowane pliki WAV (o rozmiarze setek
          megabajtów) również działają, ale zużywają więcej pamięci i trwają
          dłużej, ponieważ koder działa jednowątkowo w Twojej przeglądarce.
        </>
      ),
      text: "Nie ma stałego limitu; zależy on od pamięci dostępnej na Twoim urządzeniu. Typowe utwory, podcasty i notatki głosowe przetwarzane są w kilka sekund. Bardzo duże, nieskompresowane pliki WAV o rozmiarze setek megabajtów również działają, ale zużywają więcej pamięci i trwają dłużej, ponieważ koder działa jednowątkowo w Twojej przeglądarce.",
    },
    {
      q: "Jakie formaty mogę kompresować i co otrzymam w zamian?",
      a: (
        <>
          Możesz upuścić MP3, WAV, AAC, M4A, OGG lub FLAC. Narzędzie recoduje do
          MP3 (za pomocą kodera LAME) lub AAC (.m4a) z wybranym przez Ciebie
          bitrate, więc wynik to plik o szerokiej zgodności, który odtwarza się
          wszędzie.
        </>
      ),
      text: "Możesz upuścić MP3, WAV, AAC, M4A, OGG lub FLAC. Narzędzie recoduje do MP3 (za pomocą kodera LAME) lub AAC (.m4a) z wybranym przez Ciebie bitrate, więc wynik to plik o szerokiej zgodności, który odtwarza się wszędzie.",
    },
    {
      q: "Czy powinienem wybrać MP3 czy AAC?",
      a: (
        <>
          Oba są znakomite. MP3 to format o najszerszej powszechnej zgodności i
          bezpieczny wybór do udostępniania. AAC zwykle brzmi nieco lepiej przy
          tym samym bitrate i jest natywnym formatem urządzeń Apple oraz
          większości streamingu. Jeśli masz wątpliwości, MP3 przy 128 kbps to
          niezawodny wybór do wszystkiego.
        </>
      ),
      text: "Oba są znakomite. MP3 to format o najszerszej powszechnej zgodności i bezpieczny wybór do udostępniania. AAC zwykle brzmi nieco lepiej przy tym samym bitrate i jest natywny dla urządzeń Apple oraz większości streamingu. Jeśli masz wątpliwości, MP3 przy 128 kbps to niezawodny wybór do wszystkiego.",
    },
  ],
  content: (
    <>
      <h2 id="why">Po co kompresować pliki audio?</h2>
      <p>
        Pliki audio potrafią być zaskakująco ciężkie. Kilka minut
        nieskompresowanego WAV może osiągnąć dziesiątki megabajtów, odcinek
        podcastu o wysokim bitrate może rozdąć pobieranie, a bezstratne albumy
        FLAC z łatwością zapełniają dysk. Niezależnie od tego, czy wysyłasz
        notatkę głosową e-mailem, wgrywasz podcast, dołączasz utwór do wiadomości,
        czy oszczędzasz miejsce w telefonie, zmniejszenie pliku sprawia, że
        wszystko jest szybsze i tańsze w przenoszeniu oraz przechowywaniu —
        zwykle bez słyszalnej różnicy przy rozsądnych ustawieniach.
      </p>
      <p>
        Ponieważ to narzędzie działa w całości na Twoim urządzeniu, jest to też
        prywatny sposób na zrobienie tego. Większość kompresorów audio online
        przesyła Twoje nagranie na zdalny serwer, przetwarza je tam i odsyła z
        powrotem — co oznacza, że kopia Twojego głosu lub muzyki ląduje na maszynie
        kogoś innego. Tutaj Twój plik jest wczytywany do pamięci, recodowany za
        pomocą wersji FFmpeg skompilowanej w WebAssembly i przekazywany prosto z
        powrotem do Ciebie. Nigdy nie dotyka sieci.
      </p>
      <p>
        Ten wyłącznie lokalny projekt ma praktyczne zalety wykraczające poza
        prywatność. Nie ma oczekiwania na przesłanie ani pobranie, gdy plik
        przemierza internet, nie ma kolejki za zadaniami innych osób ani limitu
        rozmiaru narzuconego przez serwer, którego nie kontrolujesz. Przy
        pierwszym użyciu narzędzie pobiera silnik FFmpeg jeden raz; potem ten sam
        silnik jest ponownie wykorzystywany dla każdego pliku, a nawet powtarzane
        kompresje pozostają szybkie, ponieważ cała praca odbywa się na Twoim
        własnym procesorze.
      </p>

      <h2 id="bitrate">Bitrate kontra jakość: jak wybrać</h2>
      <p>
        Największą dźwignią wpływającą na rozmiar pliku audio jest{" "}
        <strong>bitrate</strong> — liczba kilobitów używanych do przechowania
        każdej sekundy dźwięku, zapisywana jako kbps. Zmniejsz bitrate o połowę, a
        zmniejszysz plik mniej więcej o połowę. Kompromis polega na tym, że niższe
        bitrate odrzucają więcej detali, więc celem jest wybranie najniższego
        bitrate, przy którym Twoje uszy wciąż nie wychwytują różnicy.
      </p>
      <p>
        Bitrate wchodzi też w interakcję z rodzajem audio, które kodujesz. Gęsta,
        złożona muzyka — naładowane miksy, talerze, przesterowane gitary — jest
        trudniejsza do skompresowania i korzysta z wyższego bitrate, podczas gdy
        proste nagranie głosu pozostaje wyraźne nawet mocno ściśnięte. Nie ma
        jednego &laquo;poprawnego&raquo; numeru; najlepsze ustawienie to takie,
        które brzmi czysto na głośnikach lub słuchawkach, których naprawdę będą
        używać Twoi słuchacze. Szybki sposób na decyzję to wyeksportowanie tego
        samego klipu w dwóch bitrate i porównanie ich jeden po drugim. Użyj tych
        wartości jako punktów wyjścia:
      </p>
      <ul>
        <li>
          <strong>256 kbps</strong> — niemal przezroczyste dla muzyki; wybierz
          to, gdy chcesz najmniejszy plik, który wciąż brzmi w istocie jak
          oryginał.
        </li>
        <li>
          <strong>192 kbps</strong> — znakomita jakość dla muzyki z istotną
          oszczędnością rozmiaru względem źródła.
        </li>
        <li>
          <strong>128 kbps</strong> — klasyczny uniwersalny wybór. Dla większości
          słuchaczy jest nieodróżnialny od muzyki w jakości CD na codziennych
          głośnikach i słuchawkach, przy ułamku rozmiaru.
        </li>
        <li>
          <strong>96 kbps</strong> — idealny do treści mówionych, takich jak
          audiobooki, podcasty i notatki głosowe, gdzie nie ma muzyki do
          zachowania.
        </li>
      </ul>
      <p>
        Jedno ważne zastrzeżenie: zarówno MP3, jak i AAC to formaty{" "}
        <strong>stratne</strong>, a recodowanie pliku stratnego zawsze odrzuca
        trochę więcej. Zawsze kompresuj ze źródła o najwyższej jakości, jakie
        posiadasz, i nigdy nie recoduj pliku, który już skompresowałeś do niskiego
        bitrate, podnosząc go do wyższego — to tylko zwiększa rozmiar, nie
        odzyskując żadnego utraconego detalu.
      </p>
      <p>
        Pomaga też wiedzieć, co w praktyce oznacza docelowy rozmiar pliku. Bitrate
        to z grubsza rozmiar pliku podzielony przez czas trwania, więc
        jednominutowy klip przy 128 kbps zajmuje około jednego megabajta, a typowy
        utwór trwający trzy do czterech minut przy tym samym bitrate mieści się w
        okolicach trzech lub czterech megabajtów. Jeśli masz do osiągnięcia
        sztywny limit rozmiaru — limit załącznika e-mail, formularz przesyłania
        lub aplikację do wiadomości — podziel ten limit przez długość utworu, aby
        oszacować bitrate, na który możesz sobie pozwolić, a następnie zaokrąglij w
        dół do najbliższego presetu.
      </p>

      <h2 id="formats">MP3, AAC, WAV i FLAC wyjaśnione</h2>
      <p>
        Formaty audio dzielą się na dwa obozy. Formaty{" "}
        <strong>bezstratne</strong>, takie jak WAV i FLAC, zachowują każdą próbkę
        oryginalnego nagrania — WAV przechowuje ją nieskompresowaną (ogromny
        rozmiar), podczas gdy FLAC pakuje ją mniejszą bez utraty czegokolwiek.
        Formaty <strong>stratne</strong>, takie jak MP3, AAC i OGG, trwale usuwają
        dźwięk, który ludzkie ucho jest najmniej skłonne dostrzec, i właśnie tak
        osiągają drastyczne redukcje rozmiaru. Przejrzysty techniczny przegląd
        tych kodeków możesz przeczytać w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodniku MDN po kodekach audio dla sieci
        </a>
        .
      </p>
      <p>
        Właśnie tutaj kryją się największe oszczędności. Konwersja pliku WAV lub
        FLAC do MP3 lub AAC w 128 kbps rutynowo zmniejsza rozmiar o{" "}
        <strong>80&ndash;90%</strong>, ponieważ przechodzisz od przechowywania
        każdej próbki do przechowywania tylko tego, co możesz usłyszeć. Jeśli
        zachowujesz archiwum wzorcowe, zatrzymaj bezstratny oryginał — ale do
        udostępniania, streamingu lub wgrywania kopia stratna jest niemal zawsze
        właściwym wyborem. Gdy potrzebujesz maksymalnej zgodności, wybierz MP3;
        gdy chcesz najlepszego brzmienia przy danym bitrate lub jesteś w
        ekosystemie Apple, wybierz AAC (.m4a).
      </p>
      <p>
        Częstym punktem nieporozumień jest różnica między kontenerem a kodekiem.
        Plik <strong>.m4a</strong> to kontener, który zwykle przechowuje audio
        zakodowane w AAC, podczas gdy <strong>.mp3</strong> jest zarówno
        kontenerem, jak i swoim kodekiem. OGG z kolei to kontener, który
        najczęściej przenosi audio Vorbis lub Opus. To narzędzie zawsze przekazuje
        Ci czysty wynik w MP3 lub AAC, niezależnie od tego, co wprowadzisz, więc
        nie musisz martwić się o niedopasowane rozszerzenia ani o pliki, które się
        nie otwierają — wynik jest dokładnie tym, co mówi jego nazwa, i odtwarza
        się tak samo w przeglądarkach, telefonach, zestawach samochodowych i
        oprogramowaniu do edycji.
      </p>

      <h2 id="tips">Wskazówki dla najlepszych rezultatów</h2>
      <ul>
        <li>
          <strong>Dopasuj bitrate do treści.</strong> Zejdź z nagraniami mowy do
          96 kbps i zarezerwuj 192&ndash;256 kbps dla muzyki, którą chcesz utrzymać
          blisko źródła.
        </li>
        <li>
          <strong>Nie podnoś jakości sztucznie.</strong> Recodowanie pliku 96
          kbps do 256 kbps nie przywróci jakości; tylko powiększa plik. Zacznij od
          najlepszego oryginału, jaki masz.
        </li>
        <li>
          <strong>Chcesz wyodrębnić audio z klipu?</strong> Jeśli Twój dźwięk
          jest uwięziony wewnątrz wideo, najpierw zmniejsz wideo za pomocą{" "}
          <Link href="/pl/video-compressor">kompresora wideo</Link>, który
          recoduje ścieżkę audio jako część zadania, a następnie przynieś
          wyeksportowane audio tutaj, aby uzyskać dokładniejszą kontrolę nad
          bitrate i formatem.
        </li>
        <li>
          <strong>Zachowaj bezstratny wzorzec.</strong> Kompresuj kopie do
          udostępniania, ale zarchiwizuj oryginalny WAV lub FLAC, abyś zawsze mógł
          później ponownie wyeksportować w innej jakości.
        </li>
        <li>
          <strong>Uważaj na urządzenie przy ogromnych plikach.</strong> Ponieważ
          kodowanie działa w Twojej przeglądarce, WAV o rozmiarze kilkuset
          megabajtów potrzebuje sporo pamięci. Na telefonie kompresuj jeden duży
          plik naraz i zamknij inne karty, jeśli napotkasz spowolnienie.
        </li>
      </ul>
    </>
  ),
};
