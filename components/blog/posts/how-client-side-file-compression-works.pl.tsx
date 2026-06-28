import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-client-side-file-compression-works",
  title:
    "Jak działa kompresja plików po stronie klienta (i dlaczego jest bardziej prywatna)",
  description:
    "Jak FileShrinking kompresuje obrazy, wideo i pliki PDF w całości w Twojej przeglądarce dzięki WebAssembly i Web Workers — i dlaczego dzięki temu Twoje pliki pozostają prywatne.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Prywatność", "Jak to działa"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        Gdy kompresujesz zdjęcie lub zmniejszasz plik PDF na większości stron
        internetowych, Twój plik odbywa podróż w obie strony: zostaje przesłany
        na serwer, przetworzony w jakimś centrum danych, a mniejsza wersja
        wraca do Ciebie. Działa to, ale oznacza, że kopia Twojego prywatnego
        pliku przez chwilę żyje na komputerze, którego nie kontrolujesz.
        FileShrinking podchodzi do tego inaczej — każdy bajt kompresji odbywa
        się <strong>wewnątrz karty Twojej własnej przeglądarki</strong>, a Twoje
        pliki nigdy nie opuszczają Twojego urządzenia. Ten artykuł wyjaśnia
        dokładnie, jak to możliwe, jakie technologie przeglądarki za tym stoją i
        z jakimi uczciwymi kompromisami się to wiąże.
      </p>

      <h2 id="two-models">Dwa sposoby kompresji pliku w sieci</h2>
      <p>
        Tradycyjny model działa po <strong>stronie serwera</strong>. Twoja
        przeglądarka wysyła oryginalny plik przez sieć; backend uruchamiający
        narzędzie takie jak ImageMagick lub FFmpeg wykonuje ciężką pracę; wynik
        jest przesyłany z powrotem. Maszyna użytkownika ledwie się wysila, a
        serwer może być ogromnie wydajny. Kosztem są prywatność i zaufanie:
        Twoje dane są przesyłane, leżą (choćby tymczasowo) na dysku kogoś
        innego, a Ty musisz wierzyć temu komuś na słowo co do tego, co dzieje się
        z nimi później.
      </p>
      <p>
        Nowszy model działa po <strong>stronie klienta</strong>. Te same
        algorytmy kompresji uruchamiają się bezpośrednio na Twoim urządzeniu, w
        przeglądarce, bez żadnego etapu przesyłania. Przez lata było to
        niepraktyczne — sam JavaScript był zbyt wolny, aby uruchomić poważny
        kodek obrazu lub wideo z użyteczną prędkością. Zmieniło się to, gdy
        przeglądarki zyskały zdolność uruchamiania skompilowanego, niemal
        natywnego kodu w sieci. Dziś nowoczesny laptop lub telefon może wykonać
        pracę, która kiedyś wymagała serwera, a FileShrinking jest zbudowany w
        całości na tym modelu.
      </p>

      <h2 id="webassembly">
        WebAssembly: prawdziwe kodeki działające w przeglądarce
      </h2>
      <p>
        Technologią, która sprawia, że kompresja po stronie klienta jest
        wykonalna, jest <strong>WebAssembly</strong> (często skracane do Wasm).
        To kompaktowy, niskopoziomowy format instrukcji binarnych, który
        przeglądarki mogą wykonywać z prędkością zbliżoną do kodu natywnego. Co
        kluczowe, pozwala on programistom wziąć kodeki napisane w C, C++ lub Rust
        (i udoskonalane przez dziesięciolecia) oraz skompilować je tak, aby
        działały w sieci bez przepisywania ich w JavaScript.
      </p>
      <p>
        Tak właśnie te same sprawdzone w boju silniki kompresji, które
        znalazłbyś w profesjonalnym oprogramowaniu desktopowym, trafiają do karty
        przeglądarki:
      </p>
      <ul>
        <li>
          <strong>MozJPEG</strong> do wysokiej jakości kodowania JPEG, które
          wyciska więcej z każdego kilobajta.
        </li>
        <li>
          <strong>OxiPNG</strong> do bezstratnej optymalizacji PNG.
        </li>
        <li>
          <strong>libwebp</strong> oraz kodery AVIF dla nowoczesnych formatów{" "}
          <Link href="/pl/compress-webp">WebP</Link> i{" "}
          <Link href="/pl/compress-avif">AVIF</Link>.
        </li>
        <li>
          <strong>FFmpeg</strong>, skompilowany do WebAssembly, do
          transkodowania i zmniejszania wideo.
        </li>
      </ul>
      <p>
        Aby uzyskać głębszy materiał techniczny,{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/WebAssembly"
          target="_blank"
          rel="noopener noreferrer"
        >
          dokumentacja WebAssembly w MDN
        </a>{" "}
        jest kanonicznym źródłem informacji o tym, jak działa ten format i
        dlaczego jest szybki.
      </p>

      <h2 id="web-workers">
        Web Workers: utrzymywanie responsywności strony
      </h2>
      <p>
        Kompresja jest obliczeniowo wymagająca. Gdybyś uruchomił
        transkodowanie wideo w głównym wątku przeglądarki, cała strona
        zamarłaby — przyciski przestałyby reagować, przewijanie by się zacinało,
        a paski postępu by się blokowały. Aby tego uniknąć, FileShrinking
        wykonuje pracę w osobnym wątku za pomocą <strong>Web Workers</strong>.
      </p>
      <p>
        Web Worker to działający w tle kontekst JavaScript, który uruchamia się
        równolegle z interfejsem użytkownika. Główny wątek przekazuje plik (i
        kodek Wasm) do workera, worker przemiela kompresję i odsyła gotowy wynik,
        gdy skończy. W międzyczasie interfejs pozostaje płynny i może pokazywać
        postęp w czasie rzeczywistym.{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Przewodnik MDN po używaniu Web Workers
        </a>{" "}
        szczegółowo omawia model przekazywania wiadomości. Duże dane binarne można
        efektywnie przenosić między wątkami za pomocą obiektów przekazywalnych,
        więc plik nie musi być kopiowany bajt po bajcie tylko po to, by przekroczyć
        granicę wątku.
      </p>

      <h2 id="decoding">Odczytywanie i dekodowanie plików bez sieci</h2>
      <p>
        Zanim cokolwiek będzie można skompresować, przeglądarka musi wczytać Twój
        plik do pamięci i go zdekodować. Opiera się to na niewielkiej rodzinie
        standardowych interfejsów API sieci, z których żaden nie wymaga serwera:
      </p>
      <ul>
        <li>
          <strong>Interfejsy API File i Blob</strong> reprezentują plik, który
          wybierasz lub przeciągasz. Udostępniają surowe bajty jako{" "}
          <code>ArrayBuffer</code>, na którym kodeki mogą pracować bezpośrednio —
          wszystko w pamięci.
        </li>
        <li>
          <strong>createImageBitmap</strong> efektywnie dekoduje obraz do
          postaci gotowej do przetwarzania i może to robić poza głównym wątkiem.
        </li>
        <li>
          <strong>OffscreenCanvas</strong> pozwala przeglądarce rysować, zmieniać
          rozmiar i ponownie kodować dane obrazu wewnątrz workera, nigdy nie
          dotykając widocznej strony.
        </li>
      </ul>
      <p>
        Razem cały potok wygląda tak: upuszczasz plik, przeglądarka odczytuje
        jego bajty lokalnie, worker go dekoduje, kodek Wasm koduje go ponownie z
        wybraną przez Ciebie jakością, a nowy <code>Blob</code> zostaje zwrócony,
        abyś mógł go pobrać. W żadnym momencie plik nigdzie nie podróżuje. Jeśli
        ciekawią Cię decyzje dotyczące jakości na tym etapie ponownego kodowania,
        nasz przewodnik o{" "}
        <Link href="/pl/blog/lossy-vs-lossless-compression">
          kompresji stratnej a bezstratnej
        </Link>{" "}
        wyjaśnia, co tak naprawdę jest odrzucane i dlaczego.
      </p>

      <h2 id="privacy">Dlaczego jest to naprawdę bardziej prywatne</h2>
      <p>
        Korzyść związana z prywatnością w modelu po stronie klienta nie jest
        marketingowym sloganem — to bezpośrednia konsekwencja architektury.
        Ponieważ Twój plik jest jedynie wczytywany do pamięci lokalnej i ponownie
        kodowany na Twoim urządzeniu:
      </p>
      <ul>
        <li>
          <strong>Nic nie jest przesyłane.</strong> Nie ma przesyłania, więc nie
          ma kopii Twojego pliku w tranzycie, którą można by przechwycić, ani
          kopii spoczywającej na serwerze, którą można by naruszyć, sprzedać lub
          uzyskać na mocy wezwania sądowego.
        </li>
        <li>
          <strong>Działa offline.</strong> Gdy strona i jej kodeki Wasm już się
          załadują, możesz całkowicie odłączyć się od internetu, a narzędzia
          nadal będą działać. To najprostszy dowód na to, że nie zachodzi żadne
          przesyłanie — możesz sam to sprawdzić w karcie sieci swojej
          przeglądarki.
        </li>
        <li>
          <strong>Nie ma czego przechowywać.</strong> Gdy zamykasz kartę, dane
          pliku znikają z pamięci. Nie ma logów serwera łączących Twoje dokumenty
          z Twoją tożsamością.
        </li>
      </ul>
      <p>
        A ponieważ FileShrinking jest{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          w pełni otwartoźródłowy na licencji MIT
        </a>
        , nie musisz przyjmować tych zapewnień na wiarę. Każdy może przeczytać
        kod, potwierdzić, że nie istnieje żadna ścieżka przesyłania, i zweryfikować
        dokładnie, jak zachowuje się potok kompresji. Audytowalna prywatność jest
        najsilniejszym rodzajem prywatności.
      </p>

      <h2 id="tradeoffs">Uczciwe kompromisy</h2>
      <p>
        Kompresja po stronie klienta nie jest magią i warto otwarcie powiedzieć,
        gdzie model serwerowy nadal ma przewagę:
      </p>
      <ul>
        <li>
          <strong>Szybkość przy bardzo dużych zadaniach.</strong> Centrum danych
          może przeznaczyć na długie wideo znacznie więcej rdzeni, niż ma Twój
          laptop. W przypadku większości obrazów i krótkich klipów różnica jest
          niezauważalna, ale pełnometrażowe wideo będzie wolniejsze w
          przeglądarce niż na farmie serwerów.
        </li>
        <li>
          <strong>Ograniczenia pamięci.</strong> Wszystko dzieje się w pamięci
          RAM Twojego urządzenia. Niezwykle duże pliki — powiedzmy
          kilkugigabajtowe wideo na telefonie z małą ilością pamięci — mogą natrafić
          na limity pamięci przeglądarki, których serwer by nie miał.
        </li>
        <li>
          <strong>Koszt pierwszego ładowania.</strong> Kodeki Wasm muszą zostać
          pobrane przy pierwszym użyciu narzędzia. Później są zapisywane w
          pamięci podręcznej, więc kolejne wizyty są błyskawiczne, ale samo
          pierwsze uruchomienie wiąże się z jednorazowym pobraniem.
        </li>
      </ul>
      <p>
        W przypadku przeważającej większości codziennych zadań — optymalizacji
        zdjęć na potrzeby sieci, zmniejszenia pliku PDF do rozmiaru pozwalającego
        wysłać go mailem, zredukowania nagrania ekranu — te kompromisy z łatwością
        są tego warte, a prywatność dostajesz za darmo.
      </p>

      <h2 id="try-it">Przekonaj się sam</h2>
      <p>
        Najlepszym sposobem na zrozumienie kompresji po stronie klienta jest jej
        użycie. Wypróbuj{" "}
        <Link href="/pl/image-compressor">kompresor obrazów</Link>,{" "}
        <Link href="/pl/video-compressor">kompresor wideo</Link> lub{" "}
        <Link href="/pl/pdf-compressor">kompresor PDF</Link> — a następnie otwórz
        narzędzia deweloperskie swojej przeglądarki, obserwuj kartę sieci i
        potwierdź, że nic nie jest przesyłane, gdy Twój plik się zmniejsza.
        Wszystko działa lokalnie, kod jest otwarty, aby każdy mógł go sprawdzić, a
        Twoje pliki pozostają dokładnie tam, gdzie ich miejsce: u Ciebie.
      </p>
    </>
  );
}
