import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-audio-files",
  title: "How to Compress Audio Files Without Wrecking the Sound",
  description:
    "Shrink MP3, AAC, FLAC, and WAV files the smart way: pick the right bitrate for music vs speech, understand sample rate, and keep audio sounding clean.",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  authorId: "team",
  tags: ["Audio", "How-to"],
  readingMinutes: 6,
};

export default function Content() {
  return (
    <>
      <p>
        Audio files have a way of ballooning out of control. A three-minute song
        ripped to <strong>WAV</strong> can easily top 30 MB, a one-hour recorded
        interview can run past a gigabyte, and email and chat apps start
        rejecting attachments long before that. The good news is that audio
        compresses extremely well &mdash; if you understand a few core settings.
        Get them right and you can shrink a file by 80&ndash;90% with no
        difference your ears can detect. Get them wrong and you end up with
        tinny, swirly, underwater-sounding audio. This guide walks through the
        choices that actually matter.
      </p>

      <h2 id="why-wav-is-huge">Why WAV and AIFF files are so big</h2>
      <p>
        WAV (and its Apple cousin AIFF) stores audio as raw,{" "}
        <strong>uncompressed</strong> PCM samples. Nothing is thrown away and
        nothing is packed down, so the size is entirely predictable from three
        numbers: the sample rate, the bit depth, and the number of channels. CD
        quality &mdash; 44,100 samples per second, 16 bits per sample, two
        channels &mdash; works out to about{" "}
        <strong>10 MB per minute</strong>. That is why a full album in WAV can
        fill several hundred megabytes while the same album as MP3 fits on a
        phone with room to spare.
      </p>
      <p>
        Uncompressed audio is the right choice while you are{" "}
        <em>recording and editing</em>, because every edit and effect stays
        pristine. But it is a terrible choice for sharing or storing the finished
        result. The moment you are done editing, it is worth converting to a
        compressed format.
      </p>

      <h2 id="lossy-vs-lossless">Lossy vs lossless: MP3/AAC vs FLAC</h2>
      <p>
        Audio compression comes in two flavors. <strong>Lossless</strong>{" "}
        formats like FLAC and ALAC shrink the file while keeping every original
        sample intact &mdash; decode a FLAC and you get back a byte-perfect copy
        of the source. They typically cut size by 40&ndash;60%, so that 10
        MB-per-minute WAV becomes roughly 5&ndash;6 MB per minute. Use lossless
        when you are archiving masters or care about perfect fidelity.
      </p>
      <p>
        <strong>Lossy</strong> formats like MP3 and AAC go much further by
        permanently discarding sound that the human ear is unlikely to notice
        &mdash; frequencies masked by louder ones, detail above your hearing
        range, and so on. This is how psychoacoustic encoding squeezes a song
        down to a tenth of its original size. The trade-off is that the discarded
        data is gone for good, so re-encoding a lossy file repeatedly slowly
        degrades it. If you want the full mental model, see our guide on{" "}
        <Link href="/blog/lossy-vs-lossless-compression">
          lossy vs lossless compression
        </Link>
        .
      </p>
      <p>
        Between the two modern lossy options, <strong>AAC</strong> generally
        sounds a little better than <strong>MP3</strong> at the same bitrate and
        is the default for Apple Music, YouTube, and most streaming. MP3 still
        wins on universal compatibility &mdash; if you need a file that plays on
        literally any device made in the last 25 years, MP3 is the safe pick.
      </p>

      <h2 id="bitrate">The setting that matters most: bitrate</h2>
      <p>
        For lossy audio, <strong>bitrate</strong> &mdash; measured in kilobits
        per second (kbps) &mdash; is the single biggest lever on both quality and
        size. Higher bitrate means more data kept per second of sound, which
        means better quality and a larger file. The trick is matching the bitrate
        to the content.
      </p>
      <p>For <strong>music</strong>, where you want full-range fidelity:</p>
      <ul>
        <li>
          <strong>128 kbps</strong> &mdash; acceptable for casual listening on
          earbuds; the smallest you should go for music.
        </li>
        <li>
          <strong>192 kbps</strong> &mdash; a great everyday sweet spot; most
          people cannot reliably tell it from the original.
        </li>
        <li>
          <strong>256&ndash;320 kbps</strong> &mdash; near-transparent, the right
          choice if you have good headphones or a critical ear.
        </li>
      </ul>
      <p>
        For <strong>speech</strong> &mdash; podcasts, voice memos, audiobooks,
        interviews &mdash; you can go much lower because the human voice occupies
        a narrow frequency range:
      </p>
      <ul>
        <li>
          <strong>64 kbps</strong> &mdash; perfectly clear for a single voice;
          ideal for spoken-word podcasts.
        </li>
        <li>
          <strong>96 kbps</strong> &mdash; a comfortable margin for speech with
          some background music or two speakers.
        </li>
      </ul>
      <p>
        Encoding a one-hour podcast at 64 kbps instead of 192 kbps takes it from
        about 86 MB down to roughly 29 MB &mdash; a third of the size, with no
        meaningful loss in clarity for voice.
      </p>

      <h2 id="sample-rate-channels">Sample rate, bit depth, and mono vs stereo</h2>
      <p>
        Three more settings can trim size further when used appropriately.{" "}
        <strong>Sample rate</strong> is how many times per second the audio is
        measured. 44.1 kHz (CD) and 48 kHz (video) capture the full range of
        human hearing, so there is rarely a reason to go higher for a final
        export. You can safely downsample a phone voice memo to 22.05 kHz, but
        leave music at 44.1 kHz or 48 kHz.
      </p>
      <p>
        <strong>Channels</strong> matter too. A mono recording is half the size
        of stereo. If your source is a single narrator or a mono voice memo,
        exporting in mono is free savings with zero quality cost. Keep stereo for
        music and anything with a real left/right image.
      </p>
      <p>
        For a thorough, browser-focused reference on which codecs do what and how
        they handle these parameters, the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN guide to web audio codecs
        </a>{" "}
        is the authoritative source.
      </p>

      <h2 id="converting">Converting FLAC or WAV to MP3 or AAC for sharing</h2>
      <p>
        The most common real-world task is taking a big lossless file and turning
        it into something small enough to email, upload, or post. The recipe is
        simple:
      </p>
      <ul>
        <li>Start from your highest-quality source (the WAV or FLAC master).</li>
        <li>Choose AAC for best quality-per-byte, or MP3 for maximum compatibility.</li>
        <li>Pick a bitrate that fits the content: ~192 kbps for music, ~64&ndash;96 kbps for speech.</li>
        <li>Set mono for single-voice recordings; leave stereo for music.</li>
        <li>Keep the sample rate at 44.1 or 48 kHz for music; 22.05 kHz is fine for voice.</li>
      </ul>
      <p>
        Because the conversion from lossless to lossy only happens once, you keep
        all the quality you can while still getting a dramatically smaller file.
        Just remember to hold on to the original master &mdash; never re-compress
        an already-lossy file when you can go back to the source.
      </p>

      <h2 id="try-it">Do it privately in your browser</h2>
      <p>
        You do not need to install anything or upload your recordings to a random
        server to compress them. FileShrinking&rsquo;s{" "}
        <Link href="/audio-compressor">audio compressor</Link> runs entirely in
        your browser, so your files never leave your device &mdash; nothing is
        ever uploaded. Drop in a WAV, FLAC, MP3, or AAC, choose your bitrate, and
        download the result. If your audio is actually part of a clip you are
        sharing, the same privacy-first approach applies to our{" "}
        <Link href="/video-compressor">video compressor</Link>. Experiment with a
        couple of bitrate settings and trust your own ears &mdash; since
        everything stays local, there is no risk in trying.
      </p>
    </>
  );
}
