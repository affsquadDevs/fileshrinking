import Link from "next/link";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

export const content: LocalizedToolContent = {
  metaTitle: "Zmiana rozmiaru obrazów online za darmo w pikselach lub %",
  metaDescription:
    "Zmieniaj rozmiar JPG, PNG, WebP, AVIF i GIF w pikselach lub procentach w przeglądarce. Prywatnie i bez przesyłania: obrazy nie opuszczają urządzenia.",
  heading: "Zmiana rozmiaru obrazów",
  intro: (
    <>
      Zmieniaj rozmiar obrazów JPG, PNG, WebP, AVIF i GIF według dokładnej
      liczby pikseli lub procentowo, bezpośrednio w przeglądarce. Zmiana wymiarów
      to najskuteczniejszy sposób na zmniejszenie pliku: upuść swoje obrazy,
      ustaw docelowy rozmiar i pobierz je w kilka sekund. Nic nigdy nie jest
      przesyłane.
    </>
  ),
  lastUpdated: "2026-06-27",
  howTo: {
    name: "Jak zmienić rozmiar obrazu",
    description:
      "Zmieniaj rozmiar obrazów w pikselach lub procentach lokalnie w przeglądarce w czterech krokach.",
    steps: [
      {
        name: "Dodaj swoje obrazy",
        text: "Przeciągnij i upuść zdjęcia na pole, kliknij, aby przeglądać, lub wklej ze schowka. Obsługiwane są formaty JPEG, PNG, WebP, AVIF i GIF, a kilka obrazów możesz dodać naraz.",
      },
      {
        name: "Wybierz piksele lub procenty",
        text: "Wybierz „Procent”, aby skalować według proporcji (idealne dla całych partii), lub „Piksele”, aby wpisać dokładną szerokość albo wysokość. Pozostaw zachowanie proporcji włączone, aby uniknąć zniekształceń.",
      },
      {
        name: "Ustaw format i jakość (opcjonalnie)",
        text: "Pozostaw format jako „Ten sam format”, aby zachować oryginalny typ, lub przekonwertuj na WebP albo AVIF, aby uzyskać mniejszy plik. Dostosuj suwak jakości, aby skompresować obraz w tym samym czasie.",
      },
      {
        name: "Pobierz obrazy o zmienionym rozmiarze",
        text: "Każdy obraz jest przeskalowywany na Twoim urządzeniu za pomocą resamplingu Lanczosa. Pobierz je pojedynczo lub wszystkie naraz w pliku ZIP.",
      },
    ],
  },
  faqs: [
    {
      q: "Czy moje obrazy są przesyłane na serwer, gdy zmieniam ich rozmiar?",
      a: (
        <>
          Nie. Zmiana rozmiaru odbywa się w całości w Twojej przeglądarce, przy
          użyciu procesora Twojego własnego urządzenia. Pliki są wczytywane do
          pamięci, przeskalowywane i od razu zwracane: nic nigdy nie jest wysyłane
          na serwer, więc Twoje obrazy pozostają całkowicie prywatne. Po
          załadowaniu strony możesz nawet pracować offline.
        </>
      ),
      text: "Nie. Zmiana rozmiaru odbywa się w całości w Twojej przeglądarce, przy użyciu procesora Twojego urządzenia. Pliki są wczytywane do pamięci, przeskalowywane i od razu zwracane. Nic nie jest wysyłane na serwer, więc Twoje obrazy pozostają prywatne. Po załadowaniu strony możesz nawet pracować offline.",
    },
    {
      q: "Czy narzędzie do zmiany rozmiaru obrazów jest naprawdę darmowe?",
      a: (
        <>
          Tak: jest całkowicie darmowe, bez rejestracji, bez znaków wodnych i bez
          limitów liczby obrazów, których rozmiar możesz zmienić, ani ich
          rozmiaru, poza tym, na co pozwala pamięć Twojego urządzenia. Witryna
          jest utrzymywana z dyskretnych reklam.
        </>
      ),
      text: "Tak. Jest całkowicie darmowe, bez rejestracji, bez znaków wodnych i bez limitów liczby ani rozmiaru obrazów poza tym, na co pozwala pamięć Twojego urządzenia. Witryna jest utrzymywana z dyskretnych reklam.",
    },
    {
      q: "Czy zmiana rozmiaru obniży jakość mojego obrazu?",
      a: (
        <>
          Zmniejszanie obrazu jest łagodne dla jakości, ponieważ piksele są
          inteligentnie uśredniane za pomocą wysokiej jakości resamplingu
          Lanczosa, który zachowuje ostre krawędzie i unika postrzępionego
          wyglądu prostego skalowania. Jakość cierpi tylko wtedy, gdy powiększasz
          (skalujesz w górę) obraz ponad jego oryginalny rozmiar, ponieważ nie ma
          żadnych prawdziwych szczegółów do wymyślenia.
        </>
      ),
      text: "Zmniejszanie obrazu jest łagodne dla jakości, ponieważ piksele są uśredniane za pomocą wysokiej jakości resamplingu Lanczosa, który zachowuje ostre krawędzie. Jakość cierpi tylko wtedy, gdy powiększasz obraz ponad jego oryginalny rozmiar, ponieważ nie ma żadnych prawdziwych szczegółów do wymyślenia.",
    },
    {
      q: "Jaki jest maksymalny rozmiar pliku, którego rozmiar mogę zmienić?",
      a: (
        <>
          Nie ma stałego limitu: zależy on od dostępnej pamięci Twojego
          urządzenia. Typowe zdjęcia o wielkości kilku megabajtów, a nawet bardzo
          duże obrazy 40–80 MP, zmieniają rozmiar bez problemu. Duże partie są
          przetwarzane po jednym pliku naraz, aby utrzymać niskie zużycie pamięci.
        </>
      ),
      text: "Nie ma stałego limitu; zależy on od dostępnej pamięci Twojego urządzenia. Typowe zdjęcia o wielkości kilku megabajtów, a nawet bardzo duże obrazy 40-80 MP, zmieniają rozmiar bez problemu. Duże partie są przetwarzane po jednym pliku naraz, aby utrzymać niskie zużycie pamięci.",
    },
    {
      q: "Czy mogę zachować proporcje, aby mój obraz nie wyglądał na rozciągnięty?",
      a: (
        <>
          Tak. Pozostaw zaznaczone pole „Zachowaj proporcje” i wpisz tylko
          szerokość albo tylko wysokość: druga wartość zostanie obliczona
          automatycznie, aby obraz skalował się proporcjonalnie. Odznacz je tylko
          wtedy, gdy celowo potrzebujesz dokładnych, nieproporcjonalnych wymiarów.
        </>
      ),
      text: "Tak. Pozostaw zaznaczone pole Zachowaj proporcje i wpisz tylko szerokość albo tylko wysokość; druga wartość zostanie obliczona automatycznie, aby obraz skalował się proporcjonalnie. Odznacz je tylko wtedy, gdy celowo potrzebujesz dokładnych, nieproporcjonalnych wymiarów.",
    },
    {
      q: "Czy mogę jednocześnie zmienić rozmiar i skompresować obraz?",
      a: (
        <>
          Tak, i powinieneś to zrobić. Ustaw docelowe wymiary, a następnie wybierz
          format wyjściowy i poziom jakości. Zmiana rozmiaru zmniejsza liczbę
          pikseli, podczas gdy kompresja ściska pozostałe piksele, więc połączenie
          obu daje najmniejszy możliwy plik w jednym przebiegu.
        </>
      ),
      text: "Tak, i powinieneś to zrobić. Ustaw docelowe wymiary, a następnie wybierz format wyjściowy i poziom jakości. Zmiana rozmiaru zmniejsza liczbę pikseli, podczas gdy kompresja ściska pozostałe piksele, więc połączenie obu daje najmniejszy możliwy plik w jednym przebiegu.",
    },
  ],
  content: (
    <>
      <h2 id="why">Dlaczego warto zmieniać rozmiar obrazów?</h2>
      <p>
        Współczesne telefony i aparaty rejestrują ogromne obrazy: pojedyncze
        zdjęcie może mieć 6000 pikseli szerokości i ważyć dziesięć megabajtów lub
        więcej. To znacznie więcej szczegółów, niż kiedykolwiek wyświetli niemal
        dowolny ekran, e-mail czy strona internetowa. Nagłówek bloga może być
        wyświetlany przy 1200 pikselach szerokości; zdjęcie profilowe przy 400;
        podpis w e-mailu przy 150. Wysyłanie pliku o szerokości 6000 pikseli do
        miejsca na 1200 pikseli marnuje przepustowość, spowalnia ładowanie stron
        i powiększa załączniki bez żadnej widocznej korzyści.
      </p>
      <p>
        Zmiana rozmiaru to także{" "}
        <strong>najpotężniejsza dźwignia, jaką masz wobec rozmiaru pliku</strong>.
        Ponieważ dane obrazu skalują się wraz z jego całkowitą liczbą pikseli,
        zmniejszenie o połowę zarówno szerokości, jak i wysokości usuwa około
        trzech czwartych pikseli — a tym samym większość rozmiaru pliku — zanim w
        ogóle dojdzie do jakiejkolwiek kompresji. Obniżenie jakości JPEG może
        zmniejszyć plik o 30–50%; zmiana rozmiaru zbyt dużego zdjęcia do jego
        rzeczywistego rozmiaru wyświetlania regularnie obcina 80–95%. Jeśli plik
        wydaje Ci się zbyt duży, najpierw zmień rozmiar, a potem skompresuj.
      </p>
      <p>
        A ponieważ to narzędzie działa w całości na Twoim urządzeniu, jest to
        prywatny sposób na zrobienie tego. Inne narzędzia online do zmiany
        rozmiaru przesyłają Twoje zdjęcia na zdalny serwer, przetwarzają je tam i
        odsyłają z powrotem. Tutaj Twoje obrazy są wczytywane do pamięci,
        przeskalowywane lokalnie i od razu zwracane: nigdy nie dotykają sieci.
      </p>

      <h2 id="quality">Jak zmiana rozmiaru wpływa na jakość</h2>
      <p>
        Zmniejszanie obrazu jest z natury łagodne dla jakości, ale <em>to, jak</em>{" "}
        piksele są łączone, ma duże znaczenie. Proste skalowanie po prostu
        odrzuca piksele, tworząc postrzępione krawędzie i migotanie na drobnych
        szczegółach. To narzędzie używa zamiast tego wysokiej jakości{" "}
        <strong>resamplingu Lanczosa</strong>, który dla każdego piksela
        wyjściowego waży sąsiedztwo otaczających go pikseli. Rezultat zachowuje
        ostre krawędzie i czytelny tekst, dzięki czemu zmniejszony obraz wygląda
        czysto, a nie rozmyto czy z efektem schodków.
      </p>
      <p>
        Jedyna operacja, która naprawdę szkodzi, to{" "}
        <strong>skalowanie w górę</strong>: powiększanie obrazu ponad jego
        oryginalne wymiary. Żaden resampler nie potrafi wymyślić szczegółów,
        których nigdy nie zarejestrowano, więc powiększone zdjęcie wygląda miękko
        i papkowato. Z zasady zmieniaj rozmiar zawsze tylko w{" "}
        <em>dół</em>: wybierz największy rozmiar, którego naprawdę potrzebujesz, i
        zmień rozmiar do niego, nigdy powyżej wymiarów źródłowych. Gdy dodatkowo
        konwertujesz do formatu stratnego, pamiętaj, że kompresja i zmiana
        rozmiaru się kumulują: obraz o zmienionym rozmiarze ma mniej pikseli do
        skompresowania, co jest dokładnie powodem, dla którego oba razem dają tak
        małe pliki.
      </p>

      <h2 id="sizes">Piksele, procenty i typowe rozmiary docelowe</h2>
      <p>
        Tryb <strong>procentowy</strong> jest idealny dla partii: ustaw 50%, a
        każdy obraz zmniejszy się proporcjonalnie niezależnie od swojego rozmiaru
        wyjściowego. Tryb <strong>pikselowy</strong> jest dla precyzyjnych celów:
        wpisz szerokość (lub wysokość), a przy zablokowanych proporcjach druga
        wartość zostanie obliczona za Ciebie, aby nic się nie rozciągnęło.
        Proporcje to nic innego jak stosunek między szerokością a wysokością
        (16:9, 4:3, 1:1); zachowanie ich w nienaruszonym stanie sprawia, że twarze
        i logotypy nie wyglądają na zgniecione. Więcej o tym, jak działają obrazy
        i ich wymiary, możesz przeczytać w{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodniku po obrazach w sieci od MDN
        </a>
        .
      </p>
      <p>
        Przydatne cele warte zapamiętania: większość treści{" "}
        <strong>internetowych</strong> wygląda świetnie między 1200 a 2000
        pikseli na dłuższym boku (użyj większej wartości dla obrazów hero na całą
        szerokość na ekranach o wysokiej gęstości). Załączniki i podpisy{" "}
        <strong>e-mail</strong> powinny zwykle pozostać na poziomie 800 pikseli
        lub mniej, aby nie zapychać skrzynek odbiorczych. W przypadku{" "}
        <strong>mediów społecznościowych</strong> typowe wymiary to mniej więcej
        1080×1080 dla kwadratowego posta na Instagramie, 1080×1920 dla pionowych
        relacji i rolek, 1200×630 dla podglądu linku na Facebooku lub w Open
        Graph oraz 1500×500 dla nagłówka X/Twitter. W razie wątpliwości zmień
        rozmiar do największego miejsca, w którym pojawi się obraz, i pozwól
        platformie zmniejszyć go stamtąd.
      </p>

      <h2 id="tips">Wskazówki na najlepsze rezultaty</h2>
      <ul>
        <li>
          <strong>Nigdy nie skaluj w górę.</strong> Powiększanie ponad oryginalny
          rozmiar dodaje tylko rozmycie. Wybierz największy wymiar, którego
          naprawdę potrzebujesz, i na tym poprzestań.
        </li>
        <li>
          <strong>Zmień rozmiar przed kompresją.</strong> Mniej pikseli oznacza
          mniejszy plik i mniej pracy dla kodera. Aby uzyskać najmniejsze zdjęcia,
          zmień ich rozmiar tutaj, a następnie przepuść je przez{" "}
          <Link href="/pl/compress-jpeg">kompresję JPEG</Link>.
        </li>
        <li>
          <strong>Zablokuj proporcje.</strong> Wpisz tylko szerokość lub tylko
          wysokość i pozwól, aby druga wartość uzupełniła się automatycznie: to
          najłatwiejszy sposób na uniknięcie rozciągniętych, zniekształconych
          obrazów.
        </li>
        <li>
          <strong>Konwertuj podczas zmiany rozmiaru.</strong> Przejście na WebP
          lub AVIF za pomocą{" "}
          <Link href="/pl/image-converter">konwertera obrazów</Link> może
          zmniejszyć zdjęcie o zmienionym rozmiarze o kolejne 25–50% bez widocznej
          utraty jakości.
        </li>
        <li>
          <strong>Zachowaj oryginały.</strong> Za każdym razem zmieniaj rozmiar z
          pliku wzorcowego w pełnej rozdzielczości, zamiast ponownie zmieniać
          rozmiar już zmniejszonej kopii, co kumuluje utratę jakości.
        </li>
      </ul>
    </>
  ),
};
