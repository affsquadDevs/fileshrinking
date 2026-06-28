import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Kompresor PDF — darmowy, prywatny, w przeglądarce",
  metaDescription:
    "Kompresuj pliki PDF w przeglądarce. Rekompresuj osadzone obrazy, aby zmniejszyć zeskanowane i bogate w obrazy PDF-y, bez wysyłania i rejestracji.",
  heading: "Kompresor PDF",
  intro: (
    <>
      Zmniejsz rozmiar zeskanowanych i bogatych w obrazy plików PDF
      bezpośrednio w przeglądarce. To narzędzie rekompresuje obrazy osadzone w
      Twoim dokumencie i usuwa zbędne metadane, dzięki czemu plik staje się
      mniejszy, a Twój tekst pozostaje ostry — i nic nigdy nie jest wysyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak skompresować plik PDF",
    description:
      "Zmniejsz plik PDF lokalnie w przeglądarce w czterech krokach, bez wysyłania.",
    steps: [
      {
        name: "Dodaj swój plik PDF",
        text: "Przeciągnij i upuść plik PDF na obszar zrzucania lub kliknij, aby go wybrać. Plik jest wczytywany bezpośrednio do Twojej przeglądarki — nigdy nie jest nigdzie wysyłany.",
      },
      {
        name: "Wybierz poziom kompresji",
        text: "Wybierz gotowe ustawienie lub precyzyjnie dostrój suwak jakości obrazu. Zrównoważone pasuje do większości dokumentów; wybierz Najmniejszy, aby uzyskać największą oszczędność przy skanach i plikach bogatych w zdjęcia.",
      },
      {
        name: "Pozwól na przetwarzanie na Twoim urządzeniu",
        text: "Osadzone obrazy są zmniejszane i ponownie kodowane jako JPEG, a metadane są usuwane — wszystko lokalnie. Zobaczysz oryginalny rozmiar, nowy rozmiar oraz procent zaoszczędzonego miejsca.",
      },
      {
        name: "Pobierz mniejszy plik PDF",
        text: "Zapisz zoptymalizowany plik. Jeśli wynik miałby być większy niż oryginał, narzędzie zachowuje oryginał, więc nigdy nie otrzymasz większego pliku.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje pliki PDF są wysyłane na serwer?",
      a: (
        <>
          Nie. Każdy plik PDF jest otwierany i przepisywany w całości w Twojej
          przeglądarce za pomocą pdf-lib oraz kodera obrazów WebAssembly. Nic
          nie jest wysyłane — nie ma żadnego serwera, na który można by przesłać
          Twój dokument. Możesz nawet rozłączyć się z internetem po załadowaniu
          strony, a narzędzie nadal będzie działać.
        </>
      ),
      text: "Nie. Każdy plik PDF jest otwierany i przepisywany w całości w Twojej przeglądarce za pomocą pdf-lib oraz kodera obrazów WebAssembly. Nic nie jest wysyłane i nie ma żadnego serwera, na który można by przesłać Twój dokument. Możesz rozłączyć się z internetem po załadowaniu strony, a narzędzie nadal będzie działać.",
    },
    {
      q: "Czy kompresor PDF jest naprawdę darmowy?",
      a: (
        <>
          Tak — jest całkowicie darmowy, bez rejestracji, bez znaków wodnych
          stemplowanych na Twoich stronach i bez dziennych limitów plików czy
          stron. Jedynym praktycznym ograniczeniem jest pamięć Twojego
          urządzenia. Strona jest utrzymywana z nienachalnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowy, bez rejestracji, bez znaków wodnych na Twoich stronach i bez dziennych limitów plików czy stron. Jedynym praktycznym ograniczeniem jest pamięć Twojego urządzenia. Strona jest utrzymywana z nienachalnych reklam.",
    },
    {
      q: "Czy kompresja obniży jakość mojego PDF-a?",
      a: (
        <>
          Wpływa wyłącznie na osadzone obrazy, które są zmniejszane i ponownie
          kodowane jako JPEG; tekst i grafika wektorowa pozostają ostre i w
          pełni zaznaczalne. Wyższe ustawienia jakości obrazu zachowują ostrość
          zdjęć, a niższe oszczędzają więcej miejsca. Zeskanowane PDF-y (które w
          rzeczywistości są obrazami) pokażą najbardziej widoczny kompromis.
        </>
      ),
      text: "Wpływa wyłącznie na osadzone obrazy, które są zmniejszane i ponownie kodowane jako JPEG; tekst i grafika wektorowa pozostają ostre i zaznaczalne. Wyższe ustawienia jakości obrazu zachowują ostrość zdjęć, a niższe oszczędzają więcej miejsca. Zeskanowane PDF-y, które w rzeczywistości są obrazami, pokazują najbardziej widoczny kompromis.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, który mogę skompresować?",
      a: (
        <>
          Nie ma sztywnego limitu — zależy on od tego, ile wolnej pamięci ma
          Twoje urządzenie. Typowe dokumenty o wielkości kilku megabajtów są
          błyskawiczne, a duże zeskanowane PDF-y o rozmiarze 50–100 MB zwykle
          działają na nowoczesnym laptopie. Bardzo duże pliki zużywają więcej
          pamięci RAM, ponieważ cały PDF jest przechowywany w pamięci podczas
          przepisywania.
        </>
      ),
      text: "Nie ma sztywnego limitu; zależy on od tego, ile wolnej pamięci ma Twoje urządzenie. Typowe dokumenty o wielkości kilku megabajtów są błyskawiczne, a duże zeskanowane PDF-y o rozmiarze 50-100 MB zwykle działają na nowoczesnym laptopie. Bardzo duże pliki zużywają więcej pamięci RAM, ponieważ cały PDF jest przechowywany w pamięci podczas przepisywania.",
    },
    {
      q: "Dlaczego mój PDF wcale się nie zmniejszył?",
      a: (
        <>
          To narzędzie zmniejsza PDF-y, rekompresując osadzone obrazy. Jeśli
          Twój dokument składa się głównie z tekstu, tabel lub grafiki
          wektorowej, nie ma dużych obrazów do zoptymalizowania, więc niewiele
          można usunąć. Gdy zrekompresowany PDF byłby ostatecznie większy niż
          oryginał, narzędzie zachowuje Twój oryginalny plik nienaruszony.
        </>
      ),
      text: "To narzędzie zmniejsza PDF-y, rekompresując osadzone obrazy. Jeśli Twój dokument składa się głównie z tekstu, tabel lub grafiki wektorowej, nie ma dużych obrazów do zoptymalizowania, więc niewiele można usunąć. Gdy zrekompresowany PDF byłby ostatecznie większy niż oryginał, narzędzie zachowuje Twój oryginalny plik nienaruszony.",
    },
    {
      q: "Czy kompresja zachowuje przeszukiwalność tekstu w moim PDF-ie?",
      a: (
        <>
          Tak. Narzędzie nigdy nie rasteryzuje Twoich stron ani nie zamienia
          tekstu w obrazy, więc każdy zaznaczalny i przeszukiwalny tekst z
          oryginału pozostaje później zaznaczalny i przeszukiwalny. Ponownie
          kodowane są jedynie dane obrazów osadzone w pliku, a układ strony jest
          zachowywany.
        </>
      ),
      text: "Tak. Narzędzie nigdy nie rasteryzuje Twoich stron ani nie zamienia tekstu w obrazy, więc każdy zaznaczalny i przeszukiwalny tekst z oryginału pozostaje później zaznaczalny i przeszukiwalny. Ponownie kodowane są jedynie dane obrazów osadzone w pliku, a układ strony jest zachowywany.",
    },
  ],
  content: (
    <>
      <h2 id="why">Dlaczego pliki PDF są tak duże?</h2>
      <p>
        PDF może rozrosnąć się do dziesiątek megabajtów z powodów, które nie są
        oczywiste, gdy patrzysz na stronę. Zdecydowanie największym winowajcą są{" "}
        <strong>osadzone obrazy</strong>: gdy skanujesz dokument, eksportujesz
        slajdy lub wrzucasz zdjęcie z telefonu do raportu, obraz w pełnej
        rozdzielczości zostaje zapisany wewnątrz pliku — często przy 300 DPI lub
        więcej, znacznie więcej szczegółów, niż ekran czy odbiorca wiadomości
        e-mail kiedykolwiek zobaczy. Inne częste czynniki to{" "}
        <strong>osadzone czcionki</strong>, zduplikowane obiekty z
        powtarzających się edycji oraz pozostałe{" "}
        <strong>metadane</strong>, takie jak miniatury, adnotacje i historia
        wersji.
      </p>
      <p>
        Zeskanowane dokumenty to skrajny przypadek. &bdquo;Zeskanowany
        PDF&rdquo; to w rzeczywistości stos fotografii papieru, z jednym dużym
        obrazem na stronę i niewielką ilością prawdziwego tekstu lub jego
        całkowitym brakiem. Dlatego 10-stronicowy skan może być większy niż
        200-stronicowy raport tekstowy. Te bogate w obrazy i zeskanowane pliki
        to dokładnie te, w których ten kompresor sprawdza się najlepiej.
      </p>
      <p>
        Pomaga myślenie o PDF-ie jako o kontenerze podobnym do zipa, a nie jako
        o pojedynczym płaskim obrazie. Raport z natury cyfrowy, wyeksportowany z
        edytora tekstu, to głównie zwarte instrukcje tekstowe plus kilka
        osadzonych czcionek, więc pozostaje mały. W chwili, gdy dodasz wykresy w
        wysokiej rozdzielczości, zdjęcia produktów lub pełnoekranowe zrzuty
        ekranu, plik dziedziczy wszystkie ich dane pikselowe. Wielokrotne
        edytowanie i ponowne zapisywanie w niektórych aplikacjach może również
        pozostawiać osierocone kopie zastąpionych obrazów, po cichu zwiększając
        rozmiar pliku danymi, które nie są już nawet widoczne na stronie.
      </p>

      <h2 id="how-it-works">Jak działa ten kompresor PDF</h2>
      <p>
        Bądźmy precyzyjni co do tego, co się dzieje, ponieważ uczciwość liczy
        się bardziej niż efektowna obietnica &bdquo;90&nbsp;% mniejszy&rdquo;.
        To narzędzie otwiera Twój PDF, znajduje osadzone w nim obrazy i{" "}
        <strong>zmniejsza rozdzielczość</strong> tych, które są większe niż
        potrzeba, a następnie{" "}
        <strong>ponownie koduje je jako JPEG</strong> w wybranej przez Ciebie
        jakości. Usuwa również nieistotne metadane. Następnie odbudowuje
        dokument za pomocą{" "}
        <a
          href="https://pdf-lib.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdf-lib
        </a>{" "}
        oraz kodera obrazów WebAssembly — wszystko wewnątrz karty przeglądarki.
      </p>
      <p>
        To, czego <strong>nie</strong> robi, jest równie ważne. Nie spłaszcza
        Twoich stron do obrazów, więc Twój{" "}
        <strong>tekst pozostaje prawdziwy, zaznaczalny i przeszukiwalny</strong>,
        a grafika wektorowa pozostaje ostra przy każdym powiększeniu. Druga
        strona medalu: jeśli Twój PDF składa się głównie z tekstu, tabel lub
        grafiki wektorowej, kompresor obrazów nie ma prawie nic do zredukowania,
        a oszczędność będzie niewielka. W takim przypadku narzędzie po prostu{" "}
        <strong>zwraca Twój oryginalny plik</strong> — nigdy nie oddaje czegoś
        większego, niż to, od czego zacząłeś.
      </p>
      <p>
        Dwa ustawienia, które kontrolujesz, odpowiadają bezpośrednio tym dwóm
        dźwigniom. <strong>Suwak jakości obrazu</strong> określa, jak agresywnie
        każdy obraz jest ponownie kodowany jako JPEG: wyższe ustawienie zachowuje
        nienaruszone drobne szczegóły i gradienty, niższe odrzuca więcej, aby
        uzyskać mniejszy plik. Gotowe ustawienia ograniczają również maksymalne
        wymiary pikselowe osadzonych obrazów, dzięki czemu zbyt duże zdjęcie
        zostaje <strong>zmniejszone</strong> do rozsądnej rozdzielczości, zanim
        zostanie ponownie zakodowane. Zmniejszanie rozdzielczości jest zwykle
        źródłem największych oszczędności, ponieważ zmniejszenie o połowę
        szerokości i wysokości obrazu usuwa około trzech czwartych jego pikseli.
        Wszystko jest przetwarzane po jednym pliku naraz, dzięki czemu zużycie
        pamięci pozostaje przewidywalne nawet na telefonie.
      </p>

      <h2 id="format">Czym tak naprawdę jest PDF i jaki jest model prywatności</h2>
      <p>
        PDF (Portable Document Format) został stworzony przez Adobe i jest
        obecnie otwartym standardem ISO (ISO 32000). PDF to kontener obiektów:
        opisów stron, czcionek, ścieżek wektorowych i strumieni obrazów, z
        których każdy może używać własnej kompresji. Ponieważ obrazy są
        przechowywane jako oddzielne strumienie, można je zamienić na mniejsze,
        ponownie zakodowane wersje bez naruszania reszty dokumentu — to właśnie
        mechanizm, na którym opiera się to narzędzie. Możesz przeczytać własny
        opis formatu autorstwa Adobe na{" "}
        <a
          href="https://www.adobe.com/acrobat/about-adobe-pdf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          stronie referencyjnej Adobe PDF
        </a>
        .
      </p>
      <p>
        Prywatność to powód, by robić to w przeglądarce, zamiast wysyłać plik na
        stronę internetową. PDF-y to często <em>najbardziej</em> wrażliwe pliki,
        jakie ludzie kompresują: umowy, zeznania podatkowe, dokumentacja
        medyczna, skany dowodów tożsamości i podpisane porozumienia. W przypadku
        typowego kompresora online wszystko to opuszcza Twoje urządzenie i ląduje
        na cudzym serwerze. Tutaj Twój dokument jest wczytywany do pamięci,
        przepisywany na Twoim urządzeniu i zwracany Ci bezpośrednio. Nic nie jest
        przesyłane, rejestrowane ani przechowywane — możesz rozłączyć się z
        internetem po załadowaniu strony, a narzędzie nadal będzie działać.
      </p>
      <p>
        To podejście local-first ma też praktyczną zaletę: nie ma kolejek, ani
        narzucanych przez serwer limitów rozmiaru pojedynczego pliku, ani
        czekania na zakończenie wysyłania i pobierania. Szybkość zależy wyłącznie
        od Twojego własnego sprzętu. Kompromis polega na tym, że bardzo duże
        pliki opierają się na pamięci Twojego urządzenia podczas przepisywania,
        więc niezwykle duży skan na starszym telefonie może działać wolno —
        podzielenie go najpierw na mniejsze PDF-y to łatwe obejście.
      </p>

      <h2 id="tips">Wskazówki na najmniejsze PDF-y</h2>
      <ul>
        <li>
          <strong>Skanuj w niższej rozdzielczości DPI.</strong> 150–200 DPI w
          zupełności wystarcza do czytania na ekranie i wysyłania e-mailem; 600
          DPI czterokrotnie zwiększa ilość danych dla szczegółów, których rzadko
          będziesz oglądać. Ustaw rozdzielczość przed skanowaniem, by uzyskać
          najłatwiejszą oszczędność ze wszystkich.
        </li>
        <li>
          <strong>Najpierw wybierz Zrównoważone, potem Najmniejszy.</strong>{" "}
          Zacznij od ustawienia Zrównoważone, sprawdź wynik, następnie uruchom
          ponownie z ustawieniem Najmniejszy i porównaj. Przy skanach bogatych w
          zdjęcia niższe ustawienie może ponownie zmniejszyć rozmiar mniej
          więcej o połowę przy niewielkiej widocznej różnicy.
        </li>
        <li>
          <strong>Skompresuj obrazy źródłowe, zanim trafią do pliku.</strong>{" "}
          Jeśli tworzysz PDF ze zdjęć lub zrzutów ekranu, zmniejsz je najpierw za
          pomocą{" "}
          <Link href="/pl/image-compressor">kompresora obrazów</Link> lub{" "}
          <Link href="/pl/compress-jpeg">kompresora JPEG</Link>. Lżejsze dane
          wejściowe oznaczają lżejszy PDF.
        </li>
        <li>
          <strong>Zmniejsz zbyt duże obrazy z wyprzedzeniem.</strong> Zdjęcie o
          szerokości 6000 pikseli na stronie A4 to zmarnowane szczegóły. Użyj{" "}
          <Link href="/pl/image-resizer">narzędzia do zmiany rozmiaru obrazów</Link>{" "}
          lub przekonwertuj do nowoczesnego formatu za pomocą{" "}
          <Link href="/pl/image-converter">konwertera obrazów</Link> przed
          złożeniem dokumentu.
        </li>
        <li>
          <strong>Nie oczekuj cudów od tekstowych PDF-ów.</strong> Jeśli plik
          składa się niemal wyłącznie z tekstu i ledwie się zmniejsza, to
          normalne — po prostu nie było ciężkich obrazów do zoptymalizowania.
        </li>
      </ul>
    </>
  ),
};
