import Link from "next/link";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

export const content: LocalizedContentPage = {
  metaTitle: "Zastrzeżenie prawne",
  metaDescription:
    "Uczciwe zastrzeżenie FileShrinking: nasze darmowe narzędzia do kompresji w 100% w przeglądarce nie gwarantują wierności ani rozmiaru. Zachowaj oryginały.",
  title: "Zastrzeżenie prawne",
  intro: (
    <>
      FileShrinking udost&eacute;pnia darmowe, dzia&#322;aj&#261;ce w
      przegl&#261;darce narz&#281;dzia do kompresji dla wygody u&#380;ytkownik&oacute;w.
      Ta strona wyja&#347;nia ograniczenia tych narz&#281;dzi, rezultaty,
      kt&oacute;rych mo&#380;esz realistycznie oczekiwa&#263;, oraz
      odpowiedzialno&#347;&#263;, kt&oacute;ra pozostaje po Twojej stronie.
    </>
  ),
  lastUpdated: "2026-06-27",
  body: (
    <>
      <h2 id="general">Wy&#322;&#261;cznie informacje og&oacute;lne</h2>
      <p>
        Informacje, narz&#281;dzia i tre&#347;ci dost&#281;pne w FileShrinking
        (&bdquo;Us&#322;uga&rdquo;) s&#261; udost&#281;pniane wy&#322;&#261;cznie
        w og&oacute;lnych celach informacyjnych i praktycznych. Dok&#322;adamy
        wszelkich stara&#324;, aby wszystko by&#322;o dok&#322;adne i przydatne,
        ale nie udzielamy &#380;adnych gwarancji, wyra&#378;nych ani
        dorozumianych, dotycz&#261;cych kompletno&#347;ci, dok&#322;adno&#347;ci,
        niezawodno&#347;ci, przydatno&#347;ci ani dost&#281;pno&#347;ci
        Us&#322;ugi lub jej rezultat&oacute;w. Korzystasz z Us&#322;ugi
        wy&#322;&#261;cznie na w&#322;asne ryzyko. Niniejsze zastrze&#380;enie
        nale&#380;y czyta&#263; &#322;&#261;cznie z naszym{" "}
        <Link href="/pl/terms-of-service">Regulaminem</Link>, kt&oacute;ry
        reguluje korzystanie z witryny.
      </p>

      <h2 id="how-it-works">Jak naprawd&#281; dzia&#322;aj&#261; nasze narz&#281;dzia</h2>
      <p>
        Ka&#380;dy kompresor w FileShrinking dzia&#322;a{" "}
        <strong>w ca&#322;o&#347;ci wewn&#261;trz Twojej przegl&#261;darki internetowej</strong>.
        Twoje obrazy, pliki PDF, wideo i pliki audio s&#261; wczytywane do
        pami&#281;ci urz&#261;dzenia, przetwarzane lokalnie za pomoc&#261;
        WebAssembly i przekazywane bezpo&#347;rednio z powrotem do Ciebie.{" "}
        <strong>
          Twoje pliki nigdy nie s&#261; przesy&#322;ane do nas, transmitowane
          przez sie&#263; ani przechowywane na &#380;adnym serwerze.
        </strong>{" "}
        Poniewa&#380; ca&#322;a praca odbywa si&#281; na Twoim w&#322;asnym
        sprz&#281;cie, szybko&#347;&#263;, jako&#347;&#263;, a nawet to, czy dany
        plik w og&oacute;le da si&#281; przetworzy&#263;, zale&#380;y od Twojego
        urz&#261;dzenia, przegl&#261;darki, dost&#281;pnej pami&#281;ci oraz pliku,
        kt&oacute;ry udost&#281;pnisz. Aby pozna&#263; szczeg&oacute;&#322;y
        dotycz&#261;ce ograniczonych danych obs&#322;ugiwanych przez sam&#261;
        witryn&#281;, zapoznaj si&#281; z nasz&#261;{" "}
        <Link href="/pl/privacy-policy">Polityk&#261; prywatno&#347;ci</Link> oraz{" "}
        <Link href="/pl/cookie-policy">Polityk&#261; plik&oacute;w cookie</Link>.
      </p>

      <h2 id="no-guarantee">Brak gwarancji rezultat&oacute;w</h2>
      <p>
        Kompresja to nie magia i nie mo&#380;emy obieca&#263; konkretnego
        wyniku. Wi&#281;kszo&#347;&#263; kompresji obraz&oacute;w, wideo i audio
        jest <strong>stratna</strong>, co oznacza, &#380;e trwale odrzuca
        cz&#281;&#347;&#263; danych, aby zmniejszy&#263; pliki. Nie gwarantujemy
        &#380;adnego konkretnego wsp&oacute;&#322;czynnika kompresji, rozmiaru
        pliku, jako&#347;ci wyj&#347;ciowej ani idealnej wierno&#347;ci wobec
        Twojego orygina&#322;u. To, o ile zmniejszy si&#281; plik i jak
        b&#281;dzie wygl&#261;da&#263; lub brzmie&#263; po przetworzeniu,
        zale&#380;y od samej tre&#347;ci, formatu, wybranych ustawie&#324; oraz
        tego, jak dobrze orygina&#322; by&#322; ju&#380; zoptymalizowany.
        Zdj&#281;cie prosto z aparatu mo&#380;e zmniejszy&#263; si&#281;
        drastycznie, podczas gdy ju&#380; zoptymalizowany plik mo&#380;e
        zmieni&#263; si&#281; ledwo zauwa&#380;alnie &mdash; lub, w niekt&oacute;rych
        przypadkach, ponownie zakodowany plik mo&#380;e by&#263; nawet
        wi&#281;kszy ni&#380; orygina&#322;.
      </p>

      <h2 id="limits">Rzeczywiste ograniczenia, o kt&oacute;rych warto wiedzie&#263;</h2>
      <p>
        R&oacute;&#380;ne typy plik&oacute;w zachowuj&#261; si&#281; bardzo
        odmiennie, a niekt&oacute;re maj&#261; twarde ograniczenia praktyczne,
        kt&oacute;rych &#380;adne narz&#281;dzie dzia&#322;aj&#261;ce w
        przegl&#261;darce nie jest w stanie pokona&#263;:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Typ pliku</th>
              <th>Czego oczekiwa&#263;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Obrazy (JPEG, PNG, WebP, AVIF, GIF)</td>
              <td>
                Zwykle dobrze si&#281; kompresuj&#261;, ale oszcz&#281;dno&#347;ci
                bywaj&#261; r&oacute;&#380;ne. Ju&#380; zoptymalizowane obrazy
                mog&#261; zmniejszy&#263; si&#281; nieznacznie lub wcale.
              </td>
            </tr>
            <tr>
              <td>Pliki PDF</td>
              <td>
                Nasze narz&#281;dzie do PDF zmniejsza rozmiar g&#322;&oacute;wnie
                przez ponown&#261; kompresj&#281; osadzonych obraz&oacute;w. Pliki
                PDF z&#322;o&#380;one z tekstu i grafiki wektorowej mog&#261;
                zmniejszy&#263; si&#281; bardzo nieznacznie lub wcale, poniewa&#380;
                nie ma w nich du&#380;ych obraz&oacute;w do zoptymalizowania.
              </td>
            </tr>
            <tr>
              <td>Wideo</td>
              <td>
                Kompresja wideo w przegl&#261;darce jest jednow&#261;tkowa i
                obci&#261;&#380;aj&#261;ca procesor. Mo&#380;e by&#263; powolna, a
                bardzo du&#380;e pliki mog&#261; ca&#322;kowicie zawie&#347;&#263;
                si&#281; na urz&#261;dzeniach z ma&#322;&#261; ilo&#347;ci&#261;
                pami&#281;ci lub w starszych przegl&#261;darkach.
              </td>
            </tr>
            <tr>
              <td>Audio</td>
              <td>
                Stratne ponowne kodowanie mo&#380;e zmniejszy&#263; rozmiar, ale
                ponowna kompresja ju&#380; skompresowanego pliku (takiego jak
                MP3 o niskiej przep&#322;ywno&#347;ci) przynosi niewielk&#261;
                korzy&#347;&#263; i mo&#380;e obni&#380;y&#263;
                jako&#347;&#263;.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Je&#347;li narz&#281;dzie si&#281; zawiesi, zabraknie mu pami&#281;ci lub
        zawiedzie przy du&#380;ym pliku, jest to ograniczenie wynikaj&#261;ce z
        uruchamiania ci&#281;&#380;kiego przetwarzania w karcie przegl&#261;darki
        &mdash; a nie usterka, kt&oacute;rej naprawy dla konkretnego pliku
        powiniene&#347; od nas oczekiwa&#263;. Cz&#281;sto pomaga wypr&oacute;bowanie
        mniejszego pliku, innej przegl&#261;darki, mocniejszego urz&#261;dzenia
        lub zamkni&#281;cie pozosta&#322;ych kart.
      </p>

      <h2 id="keep-originals">Zawsze zachowuj swoje oryginalne pliki</h2>
      <p>
        To najwa&#380;niejszy punkt na tej stronie.{" "}
        <strong>
          Zawsze zachowuj bezpieczn&#261;, niezmienion&#261; kopi&#281;
          ka&#380;dego oryginalnego pliku przed jego skompresowaniem.
        </strong>{" "}
        Kompresja mo&#380;e by&#263; kumulatywna i nieodwracalna: gdy
        szczeg&oacute;&#322;y zostan&#261; odrzucone, nie mo&#380;na ich
        odzyska&#263; ze skompresowanego wyniku. Traktuj skompresowany plik jako
        now&#261;, osobn&#261; kopi&#281; &mdash; nigdy jako jedyn&#261;
        kopi&#281;.
      </p>
      <ul>
        <li>
          Twórz kopie zapasowe master&oacute;w wa&#380;nych zdj&#281;&#263;,
          dokument&oacute;w i nagra&#324; przed ich przetworzeniem.
        </li>
        <li>
          Kompresuj ponownie z najwy&#380;szej jako&#347;ci orygina&#322;u, a nie
          z pliku, kt&oacute;ry zosta&#322; ju&#380; skompresowany.
        </li>
        <li>
          Sprawd&#378;, czy skompresowany plik otwiera si&#281;
          prawid&#322;owo oraz wygl&#261;da lub brzmi akceptowalnie, zanim
          usuniesz orygina&#322;.
        </li>
      </ul>

      <h2 id="no-liability">Brak odpowiedzialno&#347;ci za utrat&#281; danych</h2>
      <p>
        W najszerszym zakresie dozwolonym przez prawo FileShrinking nie ponosi
        odpowiedzialno&#347;ci za jak&#261;kolwiek utrat&#281;,
        uszkodzenie lub zniszczenie Twoich plik&oacute;w lub danych, ani za
        jakiekolwiek inne bezpo&#347;rednie, po&#347;rednie, uboczne lub
        wynikowe straty wynikaj&#261;ce z korzystania (lub niemo&#380;no&#347;ci
        korzystania) z Us&#322;ugi. Obejmuje to awarie przegl&#261;darki,
        b&#322;&#281;dy urz&#261;dzenia, przerwane przetwarzanie, nieoczekiwane
        wyniki lub usuni&#281;cie orygina&#322;u przed potwierdzeniem rezultatu.
        Poniewa&#380; wszystko dzia&#322;a lokalnie na Twoim urz&#261;dzeniu, nie
        mamy dost&#281;pu do Twoich plik&oacute;w ani mo&#380;liwo&#347;ci ich
        odzyskania. Odpowiedzialno&#347;&#263; za tworzenie kopii zapasowych i
        weryfikacj&#281; danych spoczywa wy&#322;&#261;cznie na Tobie.
      </p>

      <h2 id="external-links">Linki zewn&#281;trzne i reklamy</h2>
      <p>
        Us&#322;uga mo&#380;e zawiera&#263; linki do witryn os&oacute;b trzecich i
        wy&#347;wietla reklamy dostarczane przez Google AdSense. Te linki i
        reklamy s&#261; oferowane dla wygody oraz w celu wspierania darmowego
        dzia&#322;ania witryny. Nie kontrolujemy, nie popieramy, nie gwarantujemy
        ani nie ponosimy odpowiedzialno&#347;ci za tre&#347;ci, produkty,
        us&#322;ugi, dok&#322;adno&#347;&#263; ani praktyki jakiejkolwiek witryny
        lub reklamodawcy os&oacute;b trzecich. Link lub reklama{" "}
        <strong>nie stanowi&#261; rekomendacji</strong>. Wszelkie relacje, jakie
        nawi&#261;&#380;esz z osob&#261; trzeci&#261;, dotycz&#261;
        wy&#322;&#261;cznie Ciebie i tej strony. Pliki cookie reklamowe i
        analityczne s&#261; &#322;adowane dopiero po wyra&#380;eniu przez Ciebie
        zgody; o tym, jak to obs&#322;ugujemy, mo&#380;esz przeczyta&#263; w
        naszej <Link href="/pl/cookie-policy">Polityce plik&oacute;w cookie</Link> oraz{" "}
        <Link href="/pl/privacy-policy">Polityce prywatno&#347;ci</Link>.
      </p>

      <h2 id="no-professional-advice">To nie jest porada profesjonalna</h2>
      <p>
        Nic w FileShrinking nie stanowi porady prawnej, technicznej, finansowej
        ani innej porady profesjonalnej. Przewodniki, FAQ oraz wyja&#347;nienia
        dotycz&#261;ce format&oacute;w plik&oacute;w i kompresji to og&oacute;lne
        tre&#347;ci edukacyjne i mog&#261; nie mie&#263; zastosowania do Twojej
        konkretnej sytuacji. Je&#347;li musisz spe&#322;ni&#263; okre&#347;lon&#261;
        specyfikacj&#281; techniczn&#261;, standard archiwizacji albo wym&oacute;g
        prawny lub regulacyjny &mdash; na przyk&#322;ad w przypadku pism
        s&#261;dowych, obrazowania medycznego lub druku profesjonalnego &mdash;
        skonsultuj si&#281; z wykwalifikowanym specjalist&#261;, zamiast
        polega&#263; na tych narz&#281;dziach lub artyku&#322;ach.
      </p>

      <h2 id="availability">Dost&#281;pno&#347;&#263; i zmiany</h2>
      <p>
        &#346;wiadczymy Us&#322;ug&#281; w postaci &bdquo;tak jak jest&rdquo; oraz
        &bdquo;w miar&#281; dost&#281;pno&#347;ci&rdquo;. Mo&#380;emy
        zmieni&#263;, zawiesi&#263; lub zaprzesta&#263; udost&#281;pniania
        dowolnego narz&#281;dzia lub funkcji w dowolnym momencie bez
        uprzedzenia, a tak&#380;e nie gwarantujemy, &#380;e Us&#322;uga
        b&#281;dzie nieprzerwana, wolna od b&#322;&#281;d&oacute;w lub zgodna z
        ka&#380;dym urz&#261;dzeniem lub przegl&#261;dark&#261;. Mo&#380;emy od
        czasu do czasu aktualizowa&#263; niniejsze zastrze&#380;enie; widoczna
        powy&#380;ej data &bdquo;Ostatniej aktualizacji&rdquo; odzwierciedla
        najnowsz&#261; zmian&#281;, a dalsze korzystanie z Us&#322;ugi oznacza,
        &#380;e akceptujesz aktualn&#261; wersj&#281;.
      </p>

      <h2 id="contact">Skontaktuj si&#281; z nami</h2>
      <p>
        Je&#347;li masz jakiekolwiek pytania dotycz&#261;ce niniejszego
        zastrze&#380;enia, zach&#281;camy do napisania do nas na adres{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>
    </>
  ),
};
