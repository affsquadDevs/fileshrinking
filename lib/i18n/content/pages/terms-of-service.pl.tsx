import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Warunki korzystania z usługi",
  metaDescription:
    "Warunki korzystania z FileShrinking — darmowego kompresora plików działającego po stronie klienta. Usługa działa lokalnie i nigdy nie wysyła plików.",
  title: "Warunki korzystania z usługi",
  intro: (
    <>
      Niniejsze warunki regulują korzystanie z FileShrinking. Korzystając z
      witryny, akceptujesz je. Zostały napisane tak, aby były zrozumiałe
      &mdash; a ponieważ każde narzędzie działa w całości w Twojej
      przeglądarce, są one miłosiernie krótkie.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="acceptance">1. Akceptacja niniejszych warunków</h2>
      <p>
        FileShrinking (&ldquo;FileShrinking,&rdquo; &ldquo;my,&rdquo;
        &ldquo;nas&rdquo; lub &ldquo;usługa&rdquo;) udostępnia darmowe
        narzędzia działające w przeglądarce, które kompresują i konwertują
        obrazy, pliki PDF, wideo oraz audio. Uzyskując dostęp do witryny{" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a> lub
        korzystając z niej, zgadzasz się przestrzegać niniejszych Warunków
        korzystania z usługi. Jeśli nie zgadzasz się z którąkolwiek częścią
        tych warunków, prosimy o niekorzystanie z witryny.
      </p>
      <p>
        Niniejsze warunki obowiązują razem z naszą{" "}
        <Link href="/pl/privacy-policy">Polityką prywatności</Link> oraz{" "}
        <Link href="/pl/disclaimer">Zastrzeżeniem prawnym</Link>, które są
        włączone tutaj przez odniesienie. Razem opisują one, jak działa usługa
        oraz granice tego, co możemy obiecać.
      </p>

      <h2 id="how-it-works">2. Jak działa usługa</h2>
      <p>
        FileShrinking to narzędzie działające{" "}
        <strong>w 100% po stronie klienta</strong>. Gdy dodajesz plik, jest on
        wczytywany do pamięci Twojej przeglądarki i tam przetwarzany za pomocą
        WebAssembly oraz standardowych interfejsów API sieci Web. Twoje pliki{" "}
        <strong>nigdy nie są wysyłane na serwer</strong>, nigdy nie są
        przesyłane przez sieć i nigdy nie są przez nas przechowywane. Ponieważ
        praca odbywa się na Twoim własnym urządzeniu, nie możemy zobaczyć, uzyskać
        dostępu, skopiować ani przejąć na własność żadnego przetwarzanego przez
        Ciebie pliku &mdash; po prostu nie istnieje kopia po stronie serwera,
        którą moglibyśmy przechowywać.
      </p>
      <p>
        Praktyczną konsekwencją tej konstrukcji jest to, że wyniki zależą od
        Twojego własnego sprzętu i oprogramowania. Szybkość przetwarzania,
        maksymalny rozmiar pliku, który możesz obsłużyć, formaty obsługiwane
        przez Twoją przeglądarkę oraz dokładny wynik &mdash; wszystko to różni
        się w zależności od urządzenia, przeglądarki, dostępnej pamięci i systemu
        operacyjnego. Nie gwarantujemy, że konkretny plik skompresuje się,
        przekonwertuje lub otworzy prawidłowo w Twojej konfiguracji.
      </p>

      <h2 id="free">3. Usługa jest darmowa</h2>
      <p>
        Narzędzia są bezpłatne, bez rejestracji, bez subskrypcji i bez znaków
        wodnych. Utrzymujemy to dzięki reklamom, zamiast pobierać od Ciebie
        opłaty. Możemy dodawać, zmieniać lub usuwać narzędzia i funkcje w
        dowolnym momencie, a także możemy ograniczyć lub zaprzestać świadczenia
        usługi w całości lub w części bez powiadomienia. Nie mamy żadnego
        obowiązku utrzymywania dostępności jakiegokolwiek konkretnego narzędzia.
      </p>

      <h2 id="acceptable-use">4. Dopuszczalne korzystanie</h2>
      <p>Zgadzasz się, że nie będziesz używać FileShrinking do:</p>
      <ul>
        <li>
          przetwarzania, tworzenia lub rozpowszechniania treści, które są
          nielegalne, naruszające prawa, zniesławiające lub które naruszają
          prawa jakiejkolwiek strony trzeciej;
        </li>
        <li>
          obsługi plików, które nie należą do Ciebie lub do których nie posiadasz
          praw i pozwoleń niezbędnych do ich wykorzystania;
        </li>
        <li>
          naruszania jakiegokolwiek obowiązującego prawa lub przepisu w Twojej
          jurysdykcji, w tym przepisów dotyczących eksportu, prywatności i
          własności intelektualnej;
        </li>
        <li>
          prób zakłócania, przeciążania, stosowania inżynierii wstecznej w celach
          szkodliwych lub ingerowania w działanie, bezpieczeństwo bądź
          integralność witryny lub jej kodu źródłowego; lub
        </li>
        <li>
          wprowadzania w błąd co do usługi, na przykład poprzez ponowne jej
          hostowanie w sposób sugerujący, że jest Twoja własna lub że wysyła
          pliki, podczas gdy tego nie robi.
        </li>
      </ul>
      <p>
        <strong>Ponosisz wyłączną odpowiedzialność za swoje pliki</strong> oraz
        za potwierdzenie, że masz prawo do ich używania. Ponieważ przetwarzanie
        odbywa się na Twoim urządzeniu, tylko Ty kontrolujesz to, co wprowadzasz
        do narzędzi i co robisz z wynikami.
      </p>

      <h2 id="no-warranty">
        5. Brak gwarancji &mdash; usługa świadczona &ldquo;tak jak jest&rdquo;
      </h2>
      <p>
        Usługa jest świadczona <strong>&ldquo;tak jak jest&rdquo;</strong> oraz{" "}
        <strong>&ldquo;w miarę dostępności,&rdquo;</strong> bez gwarancji
        jakiegokolwiek rodzaju, wyraźnych ani dorozumianych. W najszerszym
        zakresie dozwolonym przez prawo zrzekamy się wszelkich gwarancji, w tym
        dorozumianych gwarancji przydatności handlowej, przydatności do
        określonego celu, dokładności i nienaruszania praw. Nie gwarantujemy, że
        usługa będzie nieprzerwana, wolna od błędów, bezpieczna ani że
        jakikolwiek wynik spełni Twoje oczekiwania.
      </p>
      <p>
        Kompresja jest często <strong>stratna</strong>: aby zmniejszyć pliki,
        narzędzia mogą odrzucać dane, których nie można odzyskać. Jesteś
        odpowiedzialny za sprawdzenie każdego wyniku, zanim na nim polegniesz.
      </p>

      <h2 id="liability">
        6. Ograniczenie odpowiedzialności i utrata danych
      </h2>
      <p>
        W maksymalnym zakresie dozwolonym przez prawo FileShrinking oraz jego
        operatorzy nie ponoszą odpowiedzialności za jakiekolwiek pośrednie,
        przypadkowe, szczególne, wynikowe lub karne szkody, ani za jakąkolwiek
        utratę danych, plików, zysków lub renomy, wynikającą z korzystania (lub
        niemożności korzystania) z usługi bądź z nią związaną &mdash; nawet
        jeśli zostaliśmy poinformowani o możliwości wystąpienia takich szkód.
      </p>
      <p>
        Co najważniejsze:{" "}
        <strong>zawsze zachowuj kopię swoich oryginalnych plików.</strong>{" "}
        Przetwarzanie w przeglądarce może się nie powieść, karta może ulec
        awarii, a wynik może być niezadowalający, a ponieważ nigdy nie
        otrzymujemy Twoich plików, nie możemy niczego dla Ciebie odzyskać.
        Traktuj wynik jako nową kopię i sprawdź go przed usunięciem oryginałów.
      </p>

      <h2 id="ip">7. Własność intelektualna</h2>
      <p>
        Nazwa, logo, projekt witryny, teksty oraz oryginalny kod FileShrinking
        stanowią własność naszą lub naszych licencjodawców i są chronione
        prawami własności intelektualnej. Możesz korzystać z witryny zgodnie z
        jej przeznaczeniem, ale nie możesz kopiować, zmieniać marki ani
        rozpowszechniać samej witryny bez zezwolenia. Bazowe silniki kompresji
        są dostarczane przez ich odpowiednie projekty open source na podstawie
        ich własnych licencji.
      </p>
      <p>
        <strong>Twoje pliki pozostają Twoje.</strong> Nie roszczymy sobie
        żadnej własności do jakiegokolwiek przetwarzanego przez Ciebie pliku ani
        nie nabywamy do niego żadnych praw &mdash; a jak wspomniano powyżej,
        nawet go nie otrzymujemy.
      </p>

      <h2 id="third-party">8. Usługi stron trzecich</h2>
      <p>
        Korzystamy z niewielkiej liczby usług stron trzecich, aby obsługiwać
        witrynę i utrzymywać jej bezpłatność. Są one ładowane wyłącznie tak, jak
        opisano w naszej{" "}
        <Link href="/pl/privacy-policy">Polityce prywatności</Link>, a tam,
        gdzie jest to wymagane, są uzależnione od Twojej zgody:
      </p>
      <table>
        <thead>
          <tr>
            <th>Usługa</th>
            <th>Cel</th>
            <th>Kiedy się ładuje</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google AdSense</td>
            <td>Reklamy finansujące darmowe narzędzia</td>
            <td>Dopiero po wyrażeniu przez Ciebie zgody</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Zbiorcze, anonimowe statystyki użytkowania</td>
            <td>Dopiero po wyrażeniu przez Ciebie zgody</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ci dostawcy działają na podstawie własnych warunków i polityk
        prywatności, których nie kontrolujemy. Co ważne, żaden z nich nigdy nie
        otrzymuje Twoich plików &mdash; obsługują wyłącznie standardowe dane
        analityki internetowej i reklamowe, i to tylko za Twoją zgodą.
      </p>

      <h2 id="changes">9. Zmiany niniejszych warunków</h2>
      <p>
        Możemy od czasu do czasu aktualizować niniejsze warunki w miarę rozwoju
        usługi lub zmian prawa. Gdy to zrobimy, zaktualizujemy datę
        &ldquo;Ostatniej aktualizacji&rdquo; u góry tej strony. Istotne zmiany
        mogą zostać wyróżnione w witrynie. Dalsze korzystanie z FileShrinking po
        aktualizacji oznacza, że akceptujesz zmienione warunki.
      </p>

      <h2 id="governing-law">10. Prawo właściwe</h2>
      <p>
        Niniejsze warunki podlegają prawu obowiązującemu w miejscu, w którym ma
        siedzibę operator Witryny, bez względu na normy kolizyjne. Tam, gdzie
        zastosowanie mają bezwzględnie obowiązujące przepisy o ochronie
        konsumentów, zachowujesz prawo do wszczęcia postępowania we własnym
        kraju zamieszkania, a nic w niniejszych warunkach nie ogranicza praw,
        których nie można się zrzec na mocy prawa, które ma do Ciebie
        zastosowanie. Jeśli którekolwiek postanowienie niniejszych warunków
        zostanie uznane za niewykonalne, pozostałe postanowienia pozostają w
        pełnej mocy.
      </p>

      <h2 id="contact">11. Kontakt</h2>
      <p>
        Masz pytania dotyczące tych warunków? Napisz do nas na adres{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> lub
        odwiedź naszą <Link href="/pl/contact">stronę kontaktową</Link>. Chętnie
        pomożemy wyjaśnić wszystko, co tutaj zawarto.
      </p>
    </>
  ),
};
