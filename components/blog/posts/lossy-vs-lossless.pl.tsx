import type { BlogPostMeta } from "@/lib/blog/types";
import Link from "next/link";

export const meta: BlogPostMeta = {
  slug: "lossy-vs-lossless-compression",
  title: "Kompresja stratna a bezstratna &mdash; wyja&#347;nienie",
  description:
    "Jaka jest prawdziwa r&oacute;&#380;nica mi&#281;dzy kompresj&#261; stratn&#261; a bezstratn&#261;? Kiedy stosowa&#263; ka&#380;d&#261; z nich, jak wypada bilans jako&#347;ci i rozmiaru oraz kt&oacute;re formaty kt&oacute;rej u&#380;ywaj&#261;.",
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  authorId: "maya",
  tags: ["Podstawy", "Kompresja"],
  readingMinutes: 6,
};

export default function Content() {
  return (
    <>
      <p>
        Niemal ka&#380;dy plik, kt&oacute;ry wysy&#322;asz, przesy&#322;asz czy
        przechowujesz, zosta&#322; w jaki&#347; spos&oacute;b skompresowany.
        Kompresja sprawia, &#380;e dwugodzinny film mie&#347;ci si&#281; na
        p&#322;ycie, a zdj&#281;cie w wysokiej rozdzielczo&#347;ci mo&#380;e
        podr&oacute;&#380;owa&#263; przez wolne &#322;&#261;cze. Ale nie ka&#380;da
        kompresja jest taka sama. Najwa&#380;niejsze ze wszystkich rozr&oacute;&#380;nie&#324;
        to to, czy jest ona <strong>stratna</strong>, czy{" "}
        <strong>bezstratna</strong> &mdash; a zrozumienie tej r&oacute;&#380;nicy
        pomo&#380;e Ci za ka&#380;dym razem dobra&#263; w&#322;a&#347;ciwy format i
        odpowiednie ustawienia.
      </p>

      <h2 id="lossless">Czym jest kompresja bezstratna?</h2>
      <p>
        Kompresja bezstratna zmniejsza rozmiar pliku, zachowuj&#261;c{" "}
        <strong>ka&#380;dy pojedynczy bit</strong> oryginalnych danych. Gdy go
        rozpakujesz, otrzymujesz idealn&#261;, identyczn&#261; bit po bicie
        kopi&#281;. Dzia&#322;a poprzez znajdowanie i usuwanie statystycznej
        nadmiarowo&#347;ci &mdash; powtarzaj&#261;cych si&#281; wzorc&oacute;w,
        przewidywalnych sekwencji, ci&#261;g&oacute;w identycznych warto&#347;ci
        &mdash; i kodowanie ich w bardziej wydajny spos&oacute;b.
      </p>
      <p>
        Klasycznym przyk&#322;adem jest archiwum ZIP: rozpakowujesz je, a Twoje
        dokumenty s&#261; dok&#322;adnie takie, jakie by&#322;y. Formaty obraz&oacute;w
        takie jak <Link href="/pl/compress-png">PNG</Link> i formaty audio takie
        jak FLAC s&#261; r&oacute;wnie&#380; bezstratne. Kompromis polega na tym,
        &#380;e kompresja bezstratna mo&#380;e zmniejszy&#263; pliki tylko do
        pewnego stopnia &mdash; zwykle do rozmiaru mi&#281;dzy 50&nbsp;% a
        90&nbsp;% orygina&#322;u, w zale&#380;no&#347;ci od zawarto&#347;ci. Dane,
        kt&oacute;re s&#261; ju&#380; losowe lub ju&#380; skompresowane, niemal
        wcale si&#281; nie kurcz&#261;.
      </p>

      <h2 id="lossy">Czym jest kompresja stratna?</h2>
      <p>
        Kompresja stratna idzie dalej, poniewa&#380;{" "}
        <strong>trwale usuwa informacje</strong> &mdash; konkretnie te
        informacje, kt&oacute;rych brak ludzie najprawdopodobniej nie zauwa&#380;&#261;.
        Zdj&#281;cie <Link href="/pl/compress-jpeg">JPEG</Link> odrzuca subtelne
        barwy i szczeg&oacute;&#322;y, kt&oacute;re Twoje oko sk&#322;onne jest
        przeoczy&#263;; MP3 usuwa d&#378;wi&#281;ki maskowane przez g&#322;o&#347;niejsze
        od nich. Efektem s&#261; znacznie mniejsze pliki: JPEG mo&#380;e
        zajmowa&#263; jedn&#261; dziesi&#261;t&#261; rozmiaru r&oacute;wnowa&#380;nego
        obrazu bezstratnego, bez widocznej r&oacute;&#380;nicy przy normalnych
        rozmiarach wy&#347;wietlania.
      </p>
      <p>
        Haczyk tkwi w nazwie: usuni&#281;te dane przepadaj&#261; na dobre.
        Je&#347;li za bardzo obni&#380;ysz jako&#347;&#263;, zaczynasz dostrzega&#263;
        koszt &mdash; blokowe artefakty na obrazach, m&#281;tne lub metaliczne
        audio, rozmazane wideo. A poniewa&#380; strata jest trwa&#322;a, jest
        tak&#380;e <strong>kumulatywna</strong>: za ka&#380;dym razem, gdy
        ponownie zapisujesz plik stratny w ustawieniu stratnym, degraduje si&#281;
        on troch&#281; bardziej.
      </p>

      <h2 id="which">Kiedy stosowa&#263; ka&#380;d&#261; z nich?</h2>
      <p>U&#380;ywaj kompresji <strong>bezstratnej</strong>, gdy wierno&#347;&#263; jest nienegocjowalna:</p>
      <ul>
        <li>Logo, ikony, grafika liniowa i zrzuty ekranu (PNG zachowuje ostre kraw&#281;dzie).</li>
        <li>Obrazy z przezroczysto&#347;ci&#261;.</li>
        <li>Kopie wzorcowe, kt&oacute;re b&#281;dziesz jeszcze p&oacute;&#378;niej edytowa&#263;.</li>
        <li>Tekst, kod, arkusze kalkulacyjne i wszelkie dane dokument&oacute;w.</li>
      </ul>
      <p>U&#380;ywaj kompresji <strong>stratnej</strong>, gdy liczy si&#281; ma&#322;y rozmiar, a niewielka, zwykle niewidoczna strata jest do przyj&#281;cia:</p>
      <ul>
        <li>Fotografie i realistyczne obrazy w sieci (JPEG, WebP, AVIF).</li>
        <li>Muzyka i podcasty do s&#322;uchania (MP3, AAC).</li>
        <li>Wideo do streamingu, medi&oacute;w spo&#322;eczno&#347;ciowych lub poczty (H.264 i pokrewne).</li>
      </ul>

      <h2 id="formats">Szybka &#347;ci&#261;ga formatowa</h2>
      <p>
        Wiele nowoczesnych format&oacute;w obs&#322;uguje w rzeczywisto&#347;ci{" "}
        <em>oba</em> tryby. <Link href="/pl/compress-webp">WebP</Link> i{" "}
        <Link href="/pl/compress-avif">AVIF</Link> maj&#261; na przyk&#322;ad
        warianty stratne i bezstratne. Oto wersja skr&oacute;cona:
      </p>
      <ul>
        <li>
          <strong>Bezstratne:</strong> PNG, GIF, FLAC, WAV (nieskompresowany),
          ZIP, bezstratne WebP/AVIF.
        </li>
        <li>
          <strong>Stratne:</strong> JPEG, MP3, AAC, H.264/H.265, VP9, stratne
          WebP/AVIF.
        </li>
      </ul>
      <p>
        Aby g&#322;&#281;biej zapozna&#263; si&#281; z tym, jak przegl&#261;darki
        obs&#322;uguj&#261; te formaty, doskona&#322;ym &#378;r&oacute;d&#322;em
        jest{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
          target="_blank"
          rel="noopener noreferrer"
        >
          przewodnik MDN po typach plik&oacute;w obraz&oacute;w
        </a>
        .
      </p>

      <h2 id="practical">Praktyczny wniosek</h2>
      <p>
        Wychod&#378; od orygina&#322;u o najwy&#380;szej jako&#347;ci i kompresuj
        tylko raz, do formatu pasuj&#261;cego do zadania. W przypadku zdj&#281;&#263;
        przeznaczonych do sieci stratny JPEG, WebP lub AVIF przy jako&#347;ci
        70&ndash;80 jest niemal zawsze w&#322;a&#347;ciwym wyborem. W przypadku
        grafiki oraz wszystkiego z tekstem lub przezroczysto&#347;ci&#261;
        si&#281;gnij po bezstratny PNG. I cokolwiek robisz, zachowaj nieskaziteln&#261;
        kopi&#281; wzorcow&#261;, aby nigdy nie musie&#263; ponownie kompresowa&#263;
        ju&#380; skompresowanego pliku.
      </p>
      <p>
        Wszystkie narz&#281;dzia FileShrinking dzia&#322;aj&#261; w ca&#322;o&#347;ci
        w Twojej przegl&#261;darce, wi&#281;c mo&#380;esz eksperymentowa&#263; do
        woli &mdash; spr&oacute;buj{" "}
        <Link href="/pl/image-compressor">skompresowa&#263; obraz</Link> przy
        kilku r&oacute;&#380;nych poziomach jako&#347;ci i por&oacute;wnaj. Twoje
        pliki nigdy nie opuszczaj&#261; Twojego urz&#261;dzenia, wi&#281;c
        testowanie nie wi&#261;&#380;e si&#281; z &#380;adnym ryzykiem.
      </p>
    </>
  );
}
