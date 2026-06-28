import type { HomeContent } from "@/lib/i18n/content/home";

export const content: HomeContent = {
  metaTitle: "FileShrinking — Darmowa, prywatna kompresja w przeglądarce",
  metaDescription:
    "Kompresuj obrazy, pliki PDF, wideo i audio za darmo — w całości w przeglądarce. Twoje pliki nie opuszczają urządzenia. Bez wysyłania, rejestracji i limitów.",
  hero: {
    badge: "Bez wysyłania · Pliki zostają na Twoim urządzeniu",
    titleLead: "Zmniejsz dowolny plik,",
    titleHighlight: "prosto w przeglądarce",
    subtitle:
      "Darmowa kompresja stawiająca prywatność na pierwszym miejscu — dla obrazów, plików PDF, wideo i audio. Twoje pliki są przetwarzane w całości na Twoim urządzeniu — nic nie jest nigdy wysyłane.",
    ctaImages: "Kompresuj obrazy",
    ctaPdf: "Kompresuj plik PDF",
    trust: ["Żaden plik nie jest wysyłany", "100% za darmo", "Bez rejestracji"],
  },
  popular: "Popularne:",
  toolsEyebrow: "Każde narzędzie, którego potrzebujesz",
  toolsTitle: "Kompresuj i konwertuj dowolny plik",
  toolsDescription:
    "Dedykowane narzędzie do każdego formatu — każde działa lokalnie, z czytelną informacją o rozmiarze przed i po.",
  viewAll: "Zobacz wszystkie",
  whyEyebrow: "Dlaczego FileShrinking",
  whyTitle: "Kompresja, która szanuje Twoją prywatność",
  whyDescription:
    "Większość kompresorów online wysyła Twoje pliki na swoje serwery. My podeszliśmy do tego inaczej — i okazuje się, że jest to lepsze pod niemal każdym względem.",
  features: [
    {
      title: "100% prywatnie",
      body: "Pliki są odczytywane i kompresowane na Twoim urządzeniu. Nic nie jest nigdy wysyłane na serwer — bo nie ma serwera, na który można by je wysłać.",
    },
    {
      title: "Szybko i bez połączenia",
      body: "Bez wysyłania i pobierania w obie strony. Kompresja działa lokalnie dzięki WebAssembly, więc funkcjonuje nawet po utracie połączenia.",
    },
    {
      title: "Za darmo, bez rejestracji",
      body: "Każde narzędzie jest darmowe — bez konta, bez znaku wodnego i bez podawania adresu e-mail. Korzystaj, ile tylko chcesz.",
    },
    {
      title: "Bez limitu liczby plików",
      body: "Przetwarzaj wsadowo wiele plików naraz i pobierz wszystkie w jednym pliku zip. Ogranicza Cię tylko pamięć Twojego urządzenia.",
    },
  ],
  howEyebrow: "Jak to działa",
  howTitle: "Trzy kroki, zero wysyłania",
  howDescription:
    "Od pliku do mniejszego pliku w kilka sekund — bez tego, by Twoje dane kiedykolwiek opuściły urządzenie.",
  steps: [
    {
      title: "Dodaj swoje pliki",
      body: "Przeciągnij i upuść, przeglądaj lub wklej ze schowka. Dodaj do kolejki tyle, ile chcesz — pozostaną na Twoim urządzeniu.",
    },
    {
      title: "Wybierz ustawienia",
      body: "Wybierz gotowy zestaw ustawień lub dostosuj jakość. Zobacz przewidywaną oszczędność, zanim zatwierdzisz.",
    },
    {
      title: "Pobierz natychmiast",
      body: "Pobierz każdy skompresowany plik lub wszystko jako zip. Bez czekania na wysyłanie czy na kolejkę serwera.",
    },
  ],
  os: {
    title: "W pełni otwarty kod źródłowy",
    body: "Nie musisz wierzyć nam na słowo. FileShrinking ma w 100% otwarty kod źródłowy na licencji MIT — cała baza kodu jest publiczna, więc każdy może sprawdzić, że Twoje pliki nigdy nie opuszczają urządzenia.",
    points: [
      {
        title: "Możliwy do audytu",
        body: "Przeczytaj kod, który działa w Twojej przeglądarce. Bez ukrytego wysyłania i bez śledzenia Twoich plików.",
      },
      {
        title: "Licencja MIT",
        body: "Możesz go swobodnie używać, rozwidlać i rozwijać — w projektach osobistych i komercyjnych.",
      },
      {
        title: "Możliwy do samodzielnego hostowania",
        body: "Sklonuj go i uruchom własną, prywatną instancję, gdzie tylko chcesz.",
      },
    ],
    button: "Zobacz kod źródłowy na GitHub",
  },
  faqTitle: "Najczęściej zadawane pytania",
  faqs: [
    {
      q: "Czy moje pliki są wysyłane na serwer?",
      a: "Nie. Każde narzędzie w FileShrinking działa w całości w Twojej przeglądarce dzięki WebAssembly. Twoje pliki są wczytywane do pamięci na Twoim własnym urządzeniu, kompresowane lokalnie i zwracane Ci do pobrania. Nigdy nie wędrują przez sieć, więc nie ma niczego, co moglibyśmy — albo ktokolwiek inny — zobaczyć.",
    },
    {
      q: "Czy FileShrinking jest naprawdę darmowy?",
      a: "Tak. Wszystkie nasze kompresory i konwertery są darmowe — bez konta, bez znaku wodnego i bez ukrytych limitów. Serwis jest utrzymywany z nienachalnych reklam, dlatego obok treści mogą pojawiać się reklamy.",
    },
    {
      q: "Czy kompresja obniży jakość mojego pliku?",
      a: "To zależy od formatu i ustawień. Opcje bezstratne (jak nasz optymalizator PNG) zmniejszają rozmiar bez żadnej zmiany jakości. Opcje stratne (JPEG, WebP, AVIF, wideo) wymieniają niewielką, zwykle niewidoczną część jakości na znacznie mniejszy plik — a Ty dokładnie decydujesz, ile, za pomocą suwaka jakości.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę skompresować?",
      a: "Nie ma stałego limitu, ponieważ przetwarzanie odbywa się na Twoim urządzeniu. Praktyczną granicą jest dostępna pamięć Twojego urządzenia. Duże obrazy i pliki audio obsługiwane są bez trudu; w przypadku wideo zalecamy pliki poniżej około 150 MB, ponieważ kodowanie wideo w przeglądarce mocno obciąża pamięć.",
    },
    {
      q: "Które przeglądarki i urządzenia są obsługiwane?",
      a: "Każda nowoczesna przeglądarka — Chrome, Edge, Firefox, Safari — na komputerze lub urządzeniu mobilnym. Narzędzia korzystają ze standardowych technologii internetowych, które działają wszędzie, choć szybsze urządzenia naturalnie skompresują duże pliki szybciej.",
    },
    {
      q: "Czy przechowujecie lub śledzicie moje pliki?",
      a: "Nie możemy. Pliki nigdy nie opuszczają Twojej przeglądarki, więc nie mamy ich kopii ani możliwości dostępu do nich. Korzystamy z analityki szanującej prywatność dopiero po wyrażeniu przez Ciebie zgody, a swoje wybory dotyczące zgody możesz w każdej chwili zmienić w stopce.",
    },
    {
      q: "Czy FileShrinking ma otwarty kod źródłowy?",
      a: "Tak — FileShrinking ma w pełni otwarty kod źródłowy na licencji MIT. Cała baza kodu jest publiczna na GitHub, więc każdy może dokładnie sprawdzić, jak działa, potwierdzić, że żadne pliki nie są wysyłane, rozwidlić go, a nawet samodzielnie hostować własną, prywatną kopię.",
    },
  ],
  ctaTitle: "Gotowy, by zmniejszyć swoje pliki?",
  ctaBody: "Bez konta, bez wysyłania, bez haczyków. Wybierz narzędzie i wypróbuj je już teraz.",
  ctaStart: "Zacznij kompresować",
  ctaTrust: "Dlaczego warto nam zaufać",
};
