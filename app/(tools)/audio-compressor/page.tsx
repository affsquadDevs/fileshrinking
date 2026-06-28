import type { Metadata } from "next";
import Link from "next/link";
import { AudioTool } from "@/components/tools/audio-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "audio-compressor";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Audio Compressor — Free Online MP3 & AAC Tool",
  description:
    "Compress MP3, WAV, AAC, M4A, OGG and FLAC audio privately in your browser. Pick a bitrate, no upload, no sign-up — files never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my audio files uploaded to a server?",
    a: "No. Every track is re-encoded locally in your browser with a WebAssembly build of FFmpeg. Your audio never leaves your device, and there is no server to receive it — once the page has loaded you can even go offline and it still works.",
    text: "No. Every track is re-encoded locally in your browser with a WebAssembly build of FFmpeg. Your audio never leaves your device and there is no server to receive it. Once the page has loaded you can go offline and it still works.",
  },
  {
    q: "Is the audio compressor really free?",
    a: "Yes — it is completely free with no account, no watermarks, and no file-count limits. The only practical ceiling is your device's memory. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no account, no watermarks, and no file-count limits. The only practical ceiling is your device's memory. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will compressing reduce the audio quality?",
    a: "MP3 and AAC are lossy, so some inaudible detail is discarded to shrink the file. At 128 kbps most listeners can't tell the difference from the original for music, and 96 kbps is plenty for speech or podcasts. Choose a higher bitrate to stay closer to the source.",
    text: "MP3 and AAC are lossy, so some inaudible detail is discarded to shrink the file. At 128 kbps most listeners cannot tell music apart from the original, and 96 kbps is plenty for speech or podcasts. Choose a higher bitrate to stay closer to the source.",
  },
  {
    q: "What is the maximum file size I can compress?",
    a: "There is no fixed limit — it depends on your device's available memory. Typical songs, podcasts and voice memos process in seconds. Very large uncompressed WAV files (hundreds of megabytes) work too, but use more memory and take longer because the encoder runs single-threaded in your browser.",
    text: "There is no fixed limit; it depends on your device's available memory. Typical songs, podcasts and voice memos process in seconds. Very large uncompressed WAV files of hundreds of megabytes work too but use more memory and take longer because the encoder runs single-threaded in your browser.",
  },
  {
    q: "Which formats can I compress, and what do I get back?",
    a: "You can drop in MP3, WAV, AAC, M4A, OGG or FLAC. The tool re-encodes to MP3 (using the LAME encoder) or AAC (.m4a) at the bitrate you pick, so the output is a widely compatible file that plays everywhere.",
    text: "You can drop in MP3, WAV, AAC, M4A, OGG or FLAC. The tool re-encodes to MP3 (using the LAME encoder) or AAC (.m4a) at the bitrate you pick, so the output is a widely compatible file that plays everywhere.",
  },
  {
    q: "Should I choose MP3 or AAC?",
    a: "Both are excellent. MP3 is the most universally supported format and a safe default for sharing. AAC generally sounds slightly better at the same bitrate and is the native format for Apple devices and most streaming. If you're unsure, MP3 at 128 kbps is a reliable all-rounder.",
    text: "Both are excellent. MP3 is the most universally supported format and a safe default for sharing. AAC generally sounds slightly better at the same bitrate and is native to Apple devices and most streaming. If unsure, MP3 at 128 kbps is a reliable all-rounder.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="Audio Compressor"
      intro={
        <>
          Make MP3, WAV, AAC, M4A, OGG and FLAC files smaller right in your
          browser. Re-encode to MP3 or AAC at the bitrate you choose, then
          download a leaner track in seconds — nothing is ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress an audio file",
        description:
          "Compress MP3, WAV, AAC and more locally in your browser in four steps.",
        steps: [
          {
            name: "Add your audio",
            text: "Drag and drop your audio files onto the dropzone or click to browse. MP3, WAV, AAC, M4A, OGG and FLAC are all accepted.",
          },
          {
            name: "Pick an output format",
            text: "Choose MP3 for maximum compatibility or AAC (.m4a) for slightly better quality at the same size.",
          },
          {
            name: "Choose a bitrate",
            text: "Set the bitrate to control size versus quality. 128 kbps suits music; drop to 96 kbps for speech and podcasts to save even more.",
          },
          {
            name: "Download your file",
            text: "Each track is re-encoded on your device with FFmpeg. You'll see the original size, new size and percentage saved, then download the result.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why compress audio files?</h2>
          <p>
            Audio files can be surprisingly heavy. A few minutes of uncompressed
            WAV can run to tens of megabytes, a high-bitrate podcast episode can
            balloon a download, and lossless FLAC albums easily fill a drive.
            Whether you&rsquo;re emailing a voice memo, uploading a podcast,
            attaching a song to a message, or saving space on your phone,
            shrinking the file makes everything faster and cheaper to move and
            store — usually with no audible difference at sensible settings.
          </p>
          <p>
            Because this tool runs entirely on your device, it is also the
            private way to do it. Most online audio compressors upload your
            recording to a remote server, process it there, and send it back —
            which means a copy of your voice or music sits on someone else&rsquo;s
            machine. Here, your file is read into memory, re-encoded with a
            WebAssembly build of FFmpeg, and handed straight back to you. It
            never touches a network.
          </p>
          <p>
            That local-only design has practical benefits beyond privacy. There
            are no upload or download waits for the file to cross the internet,
            no queue behind other people&rsquo;s jobs, and no file-size cap
            imposed by a server you don&rsquo;t control. The first time you use
            the tool it downloads the FFmpeg engine once; after that, the same
            engine is reused for every file, and even repeated compressions stay
            fast because all the work happens on your own processor.
          </p>

          <h2 id="bitrate">Bitrate vs. quality: how to choose</h2>
          <p>
            The single biggest lever on audio file size is the{" "}
            <strong>bitrate</strong> — the number of kilobits used to store each
            second of sound, written as kbps. Halve the bitrate and you roughly
            halve the file. The trade-off is that lower bitrates discard more
            detail, so the goal is to pick the lowest bitrate at which your ears
            still can&rsquo;t tell the difference.
          </p>
          <p>
            Bitrate also interacts with the kind of audio you&rsquo;re encoding.
            Dense, complex music — busy mixes, cymbals, distorted guitars — is
            harder to compress and benefits from a higher bitrate, while a simple
            voice recording stays clear even when squeezed hard. There&rsquo;s no
            single &ldquo;correct&rdquo; number; the best setting is the one that
            sounds clean on the speakers or headphones your listeners will
            actually use. A quick way to decide is to export the same clip at two
            bitrates and compare them back to back. Use these as starting points:
          </p>
          <ul>
            <li>
              <strong>256 kbps</strong> — near-transparent for music; choose this
              when you want the smallest file that still sounds essentially like
              the original.
            </li>
            <li>
              <strong>192 kbps</strong> — excellent quality for music with a
              meaningful size saving over the source.
            </li>
            <li>
              <strong>128 kbps</strong> — the classic all-rounder. For most
              listeners it&rsquo;s indistinguishable from CD-quality music on
              everyday speakers and headphones, at a fraction of the size.
            </li>
            <li>
              <strong>96 kbps</strong> — ideal for spoken-word content such as
              audiobooks, podcasts and voice memos, where there&rsquo;s no music
              to preserve.
            </li>
          </ul>
          <p>
            One important caveat: both MP3 and AAC are <strong>lossy</strong>,
            and re-encoding a lossy file always throws away a little more. Always
            compress from the highest-quality source you have, and never re-encode
            a file you&rsquo;ve already compressed at a low bitrate up to a higher
            one — that only inflates the size without recovering any lost detail.
          </p>
          <p>
            It also helps to know what a target file size implies in practice.
            Bitrate is roughly file size divided by duration, so a one-minute
            clip at 128 kbps lands around one megabyte, and a typical three- to
            four-minute song at the same bitrate comes in near three to four
            megabytes. If you have a hard size limit to hit — an email
            attachment cap, an upload form, or a messaging app — divide that
            limit by the track length to estimate the bitrate you can afford,
            then round down to the nearest preset.
          </p>

          <h2 id="formats">MP3, AAC, WAV and FLAC explained</h2>
          <p>
            Audio formats fall into two camps. <strong>Lossless</strong> formats
            like WAV and FLAC keep every sample of the original recording — WAV
            stores it uncompressed (huge), while FLAC packs it smaller without
            losing anything. <strong>Lossy</strong> formats like MP3, AAC and OGG
            permanently remove sound the human ear is least likely to perceive,
            which is how they achieve dramatic size reductions. You can read a
            clear technical overview of these codecs in{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s guide to web audio codecs
            </a>
            .
          </p>
          <p>
            This is exactly where the biggest savings live. Converting a WAV or
            FLAC file to a 128 kbps MP3 or AAC routinely cuts the size by{" "}
            <strong>80&ndash;90%</strong>, because you&rsquo;re moving from
            storing every sample to storing only what you can hear. If
            you&rsquo;re keeping a master archive, hold on to the lossless
            original — but for sharing, streaming or uploading, a lossy copy is
            almost always the right call. When you need maximum compatibility,
            pick MP3; when you want the best sound at a given bitrate or
            you&rsquo;re in the Apple ecosystem, pick AAC (.m4a).
          </p>
          <p>
            A common point of confusion is the difference between a container and
            a codec. An <strong>.m4a</strong> file is a container that usually
            holds AAC-encoded audio, while <strong>.mp3</strong> is both a
            container and its codec. OGG, meanwhile, is a container that most
            often carries Vorbis or Opus audio. This tool always hands you a
            clean MP3 or AAC result regardless of what you put in, so you
            don&rsquo;t have to worry about mismatched extensions or files that
            won&rsquo;t open — the output is exactly what its name says it is and
            plays in browsers, phones, car stereos and editing software alike.
          </p>

          <h2 id="tips">Tips for the best results</h2>
          <ul>
            <li>
              <strong>Match the bitrate to the content.</strong> Drop spoken-word
              recordings to 96 kbps and reserve 192&ndash;256 kbps for music you
              want to keep close to the source.
            </li>
            <li>
              <strong>Don&rsquo;t up-convert.</strong> Re-encoding a 96 kbps file
              at 256 kbps won&rsquo;t restore quality; it just makes the file
              bigger. Start from the best original you have.
            </li>
            <li>
              <strong>Extracting audio from a clip?</strong> If your sound is
              trapped inside a video, shrink the video first with the{" "}
              <Link href="/video-compressor">video compressor</Link>, which
              re-encodes the audio track as part of the job — then bring the
              exported audio here for finer control over bitrate and format.
            </li>
            <li>
              <strong>Keep a lossless master.</strong> Compress copies for
              sharing, but archive the original WAV or FLAC so you can always
              re-export at a different quality later.
            </li>
            <li>
              <strong>Mind your device on huge files.</strong> Because encoding
              runs in your browser, a several-hundred-megabyte WAV needs a fair
              amount of memory. On a phone, compress one big file at a time and
              close other tabs if you hit a slowdown.
            </li>
          </ul>
        </>
      }
    >
      <AudioTool />
    </ToolPageLayout>
  );
}
