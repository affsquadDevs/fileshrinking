import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-to-compress-video-for-email-and-web",
  title: "How to Compress Video for Email, Web, and Social",
  description:
    "Practical settings to shrink video for 25 MB email limits, fast web embeds, and social uploads — resolution, CRF, H.264, and trimming, all in your browser.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  authorId: "maya",
  tags: ["Video", "How-to"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        Video is the heaviest thing most people try to share. A single minute of
        footage straight off a phone or camera can run hundreds of megabytes —
        far too big to attach to an email, slow to load on a web page, and likely
        to get re-crushed the moment a social platform touches it. The good news
        is that you can shrink almost any clip dramatically without it looking
        bad, as long as you match a few settings to where the video is going.
        This guide walks through the three most common targets — email, web, and
        social — and the exact levers that get you there.
      </p>

      <h2 id="why-video-is-big">Why video files get so large</h2>
      <p>
        A video is just a long sequence of images played quickly, plus audio. The
        size depends on four things: <strong>resolution</strong> (how many pixels
        per frame), <strong>frame rate</strong> (frames per second),{" "}
        <strong>duration</strong> (how many seconds), and <strong>bitrate</strong>{" "}
        (how many bits the encoder spends per second of footage). A 4K, 60 fps
        clip has roughly nine times the pixels of 1080p at 30 fps before you
        change anything else. That is why the single most effective thing you can
        do is reduce resolution and length — you are removing data, not just
        squeezing it.
      </p>
      <p>
        Bitrate is where the actual compression happens. Modern codecs throw away
        detail your eye is least likely to miss, so a lower bitrate means a
        smaller file with some loss of fidelity. The art is finding the bitrate
        that is small enough for your target but high enough that nobody notices.
      </p>

      <h2 id="resolution-and-trimming">Start with resolution and length</h2>
      <p>
        Before touching encoder settings, ask whether you even need every pixel
        and every second. Downscaling is the highest-leverage change you can
        make:
      </p>
      <ul>
        <li>
          <strong>4K to 1080p</strong> cuts the pixel count to a quarter. For
          email and almost all web embedding, 1080p is plenty.
        </li>
        <li>
          <strong>1080p to 720p</strong> roughly halves it again and is fine for
          quick screen recordings, demos, and anything that will play in a small
          window.
        </li>
        <li>
          <strong>Trimming</strong> dead air off the start and end, or cutting to
          just the part that matters, scales the file size linearly. A 30-second
          clip is half the size of a 60-second one at the same quality.
        </li>
      </ul>
      <p>
        If you only remember one thing, remember this: shrinking a 2-minute 4K
        clip down to a 40-second 720p highlight will do more for your file size
        than any amount of bitrate tweaking.
      </p>

      <h2 id="crf-and-bitrate">CRF and bitrate: controlling quality</h2>
      <p>
        Once resolution and length are set, you control quality with either a
        target bitrate or a quality factor called <strong>CRF</strong> (Constant
        Rate Factor). CRF tells the encoder to aim for a consistent visual
        quality and spend whatever bitrate that takes, frame by frame — busy
        scenes get more bits, static ones get fewer. For H.264, CRF runs from
        about 0 (lossless, huge) to 51 (tiny, ugly), and lower numbers mean
        better quality:
      </p>
      <ul>
        <li>
          <strong>CRF 18–20:</strong> visually near-lossless, larger files —
          good for masters or web video where quality is paramount.
        </li>
        <li>
          <strong>CRF 23:</strong> the common default — a strong balance of size
          and quality for most web and social use.
        </li>
        <li>
          <strong>CRF 26–28:</strong> noticeably smaller, with mild softening —
          handy when you must hit a hard size limit like an email cap.
        </li>
      </ul>
      <p>
        When you have a strict ceiling — say a 25 MB email attachment — a target
        bitrate is more predictable than CRF. The rough math: a target file size
        in megabits (multiply MB by 8) divided by the duration in seconds gives
        your total bitrate budget. Reserve roughly 128 kbps for audio and give
        the rest to video. For a 25 MB cap on a 60-second clip, that is about
        3.3 Mbps total, comfortably enough for clean 720p.
      </p>

      <h2 id="codec-h264">Choose H.264 for compatibility</h2>
      <p>
        Codec choice decides whether your video plays everywhere or fails
        silently. <strong>H.264</strong> (also called AVC) is the safest pick by
        far: it plays in every modern browser, email client preview, phone, and
        social platform, and it pairs with AAC audio inside an MP4 container.
        Newer codecs like H.265/HEVC, VP9, and AV1 compress better — sometimes
        30–50% smaller at the same quality — but support is uneven, and an email
        recipient on an older device may see nothing at all. For sharing, stick
        with H.264 in an MP4 unless you control exactly how the file will be
        played.
      </p>
      <p>
        If you want to understand which codecs a given browser actually supports
        and why, MDN keeps a thorough, current reference in its{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs"
          target="_blank"
          rel="noopener noreferrer"
        >
          guide to web video codecs
        </a>
        . It is the best single source for deciding when it is safe to move
        beyond H.264.
      </p>

      <h2 id="targets">Settings by destination</h2>
      <p>
        Here is how the pieces come together for each common target.
      </p>
      <ul>
        <li>
          <strong>Email attachments:</strong> Most providers cap attachments
          around 25 MB (Gmail and Outlook both sit near there). Aim for 720p,
          H.264/MP4, and trim aggressively. If you are still over, drop to CRF
          26–28 or set a target bitrate from the math above. For anything longer
          than a couple of minutes, a link is usually kinder than an attachment.
        </li>
        <li>
          <strong>Web embedding:</strong> Page speed matters, so keep files lean
          — 1080p at CRF 23 is a sweet spot, and 720p for background or
          decorative loops. Use MP4/H.264 as your baseline so the video plays
          without a fallback.
        </li>
        <li>
          <strong>Social platforms:</strong> Instagram, TikTok, X, and others
          re-encode whatever you upload, so there is no point sending a massive
          master — it will be crushed anyway. Upload a clean 1080p H.264 file at
          a reasonable bitrate and let the platform do its pass. Matching the
          platform&rsquo;s aspect ratio (vertical 9:16 for Reels and TikTok)
          matters more than raw size.
        </li>
      </ul>

      <h2 id="in-browser">Compressing privately, in your browser</h2>
      <p>
        You do not need to upload your footage to a stranger&rsquo;s server to
        compress it. FileShrinking&rsquo;s{" "}
        <Link href="/video-compressor">video compressor</Link> runs entirely in
        your browser — your video is processed on your own device and never
        leaves it, which matters for anything personal or confidential. There are
        dedicated tools for the most common formats too:{" "}
        <Link href="/compress-mp4">compress MP4</Link> for the universal H.264
        container and <Link href="/compress-mov">compress MOV</Link> for footage
        straight off an iPhone or camera. If a clip is mostly audio that happens
        to be in a video wrapper, the{" "}
        <Link href="/audio-compressor">audio compressor</Link> can shrink the
        sound track on its own.
      </p>
      <p>
        The one honest trade-off: in-browser encoding uses your computer&rsquo;s
        CPU, so it is <strong>slower than a cloud service</strong> for long or
        high-resolution clips, and a very large file can take a while. For the
        privacy of never uploading your video, most people find that wait well
        worth it. Start from your highest-quality original, downscale and trim
        first, pick H.264, and only then dial in CRF or bitrate — do that and
        you will hit any email, web, or social target with room to spare.
      </p>
    </>
  );
}
