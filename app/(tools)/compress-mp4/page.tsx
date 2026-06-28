import type { Metadata } from "next";
import Link from "next/link";
import { VideoTool } from "@/components/tools/video-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-mp4";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Compress MP4 — Free Online MP4 Video Compressor",
  description:
    "Compress MP4 videos in your browser with H.264. Quality presets, resolution scaling, no upload — your files stay private and never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my MP4 files uploaded to a server?",
    a: "No. Your video is compressed locally in your browser with a WebAssembly build of ffmpeg. The file is read into memory, re-encoded on your own device, and handed straight back — there is no server to upload it to, and nothing is ever transmitted.",
    text: "No. Your video is compressed locally in your browser with a WebAssembly build of ffmpeg. The file is read into memory, re-encoded on your own device, and handed straight back. There is no server to upload it to and nothing is ever transmitted.",
  },
  {
    q: "Is the MP4 compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no per-file or per-day caps. Because all of the work happens on your machine, there are no server costs to recover. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no per-file or per-day caps. Because all of the work happens on your machine, there are no server costs to recover. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will compressing reduce the quality of my video?",
    a: "H.264 is a lossy codec, so re-encoding always discards some detail. With the Balanced preset (around CRF 23–28) the loss is hard to notice at normal viewing sizes while the file shrinks substantially. Choose a lower CRF to stay closer to the source, or a higher one for a smaller file.",
    text: "H.264 is a lossy codec, so re-encoding always discards some detail. With the Balanced preset (around CRF 23-28) the loss is hard to notice at normal viewing sizes while the file shrinks substantially. Choose a lower CRF to stay closer to the source or a higher one for a smaller file.",
  },
  {
    q: "What is the maximum MP4 file size I can compress?",
    a: "There is no hard limit, but video re-encoding is memory- and CPU-heavy and runs single-threaded in the browser. Clips up to roughly 150 MB compress comfortably on most devices; larger or longer videos still work but can be slow and may fail on low-memory phones. Short clips finish fastest.",
    text: "There is no hard limit, but video re-encoding is memory- and CPU-heavy and runs single-threaded in the browser. Clips up to roughly 150 MB compress comfortably on most devices; larger or longer videos still work but can be slow and may fail on low-memory phones. Short clips finish fastest.",
  },
  {
    q: "Why is compressing my MP4 slower than compressing an image?",
    a: "A video is thousands of frames, and each one is decoded, optionally resized, and re-encoded with H.264. The in-browser ffmpeg build runs on a single thread for compatibility and security, so it cannot use every CPU core the way a desktop app would. Expect roughly real-time-to-a-few-times-real-time speed depending on resolution and your hardware.",
    text: "A video is thousands of frames, and each one is decoded, optionally resized, and re-encoded with H.264. The in-browser ffmpeg build runs on a single thread for compatibility and security, so it cannot use every CPU core the way a desktop app would. Expect roughly real-time to a few-times-real-time speed depending on resolution and hardware.",
  },
  {
    q: "Will it help to re-encode an MP4 that is already H.264?",
    a: "Sometimes. If the original was exported at a high bitrate or large resolution, re-encoding at a higher CRF or smaller height can save a lot. But a file that was already compressed efficiently may barely shrink — or even grow. If the result isn't smaller, the tool tells you the file is already efficient and you can keep the original.",
    text: "Sometimes. If the original was exported at a high bitrate or large resolution, re-encoding at a higher CRF or smaller height can save a lot. But a file that was already compressed efficiently may barely shrink or even grow. If the result is not smaller, the tool tells you the file is already efficient and you can keep the original.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="MP4 Compressor"
      intro={
        <>
          Compress MP4 videos right in your browser with H.264. Pick a quality
          preset, drop in your clip, and download a smaller file in minutes —
          nothing is ever uploaded, so your footage stays completely private.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress an MP4",
        description:
          "Compress an MP4 video locally in your browser in four steps.",
        steps: [
          {
            name: "Add your MP4",
            text: "Drag and drop your .mp4 file onto the dropzone, or click to browse. The video is loaded into memory on your device, not sent anywhere.",
          },
          {
            name: "Pick a quality preset",
            text: "Start with Balanced. It sets a sensible CRF and caps the resolution; switch to a smaller preset for tighter files or a higher one to stay closer to the source.",
          },
          {
            name: "Fine-tune the CRF",
            text: "Nudge the CRF slider if you want more control. Lower keeps more detail and a bigger file; 23–28 is the practical sweet spot for most clips.",
          },
          {
            name: "Compress and download",
            text: "Re-encoding runs on your device with ffmpeg. When it finishes you'll see the size saved, then download your smaller MP4.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why are MP4 files so large?</h2>
          <p>
            MP4 is a container, not a codec — it wraps a video stream, an audio
            stream, and metadata into one file. The size of that file is driven
            almost entirely by the <strong>bitrate</strong> of the video stream:
            how many bits per second the encoder spends describing the picture.
            Bitrate in turn scales with three things you control: the{" "}
            <strong>resolution</strong> (a 4K frame has four times the pixels of
            1080p), the <strong>length</strong> of the clip, and the{" "}
            <strong>quality target</strong> the source was exported at.
          </p>
          <p>
            Phones, screen recorders, and editing apps usually err on the side of
            quality, exporting at high bitrates so nothing looks soft. That is
            great for archiving but wasteful for sharing: a one-minute 4K phone
            clip can easily top 150&nbsp;MB, far more than you need to send over
            messaging apps or email. Re-encoding at a sensible quality target,
            and often a smaller resolution, is where the big savings come from.
          </p>

          <h2 id="crf">How CRF and resolution shrink the file</h2>
          <p>
            This tool re-encodes your video with <strong>H.264</strong> using a{" "}
            <strong>Constant Rate Factor (CRF)</strong>. Instead of forcing a
            fixed bitrate, CRF aims for a constant <em>perceived</em> quality and
            lets the encoder spend more bits on complex scenes and fewer on
            simple ones. The scale here runs from 18 (very high quality, larger
            file) to 36 (smaller file, more visible artifacts). Each step of
            roughly &plusmn;6 corresponds to about half or double the file size,
            so small slider changes have a big effect.
          </p>
          <p>
            The second lever is <strong>resolution</strong>. Lowering the maximum
            height — say from 2160p down to 1080p or 720p — cuts the pixel count
            dramatically, and fewer pixels need fewer bits at the same quality.
            For footage that will be watched on a phone or embedded in a
            document, a 720p or 1080p re-encode often looks identical in practice
            while being a fraction of the size. The presets combine a CRF and a
            height cap so you can get a good result without tuning anything; the
            CRF slider is there when you want finer control.
          </p>
          <p>
            Two things matter less than people expect. First, frame rate: most
            clips do not need more than the source already has, and lowering it
            saves only modest space compared with CRF and resolution. Second, the
            audio track. Speech and music add some weight, but a typical AAC
            soundtrack is a small slice of a video file, so the picture is almost
            always where the savings live. That is why this tool focuses your
            choices on quality and resolution — the two settings that move the
            needle — and re-encodes audio to a sensible bitrate automatically.
          </p>

          <h2 id="format">MP4, H.264, and when re-encoding actually helps</h2>
          <p>
            The vast majority of MP4 files already contain an H.264 (also called
            AVC) video stream, which is why MP4 plays virtually everywhere — from
            old phones to smart TVs. You can read how browsers describe the MP4
            container and the H.264 codec on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s media container guide
            </a>{" "}
            and its{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264"
              target="_blank"
              rel="noopener noreferrer"
            >
              AVC / H.264 codec reference
            </a>
            . Outputting H.264 in MP4 keeps that universal compatibility intact.
          </p>
          <p>
            Re-encoding an MP4 that is <em>already</em> H.264 helps when the
            source was exported generously — high bitrate, large resolution, or
            both — because there is slack to remove. It helps far less, and can
            even produce a <strong>larger</strong> file, when the video was
            already compressed tightly: re-encoding a lossy stream means decoding
            it and lossily compressing it again, so you only win if your new
            target is genuinely lower than the original. If the output would not
            be smaller, this tool keeps you informed so you can simply keep your
            original. To squeeze more out, raise the CRF or drop the resolution
            rather than expecting magic from a single pass.
          </p>

          <h2 id="tips">Tips and the in-browser speed trade-off</h2>
          <p>
            Everything happens on your device using a WebAssembly build of{" "}
            ffmpeg, which is what makes this private — but it is also{" "}
            <strong>single-threaded</strong>. A native desktop encoder spreads
            work across every CPU core; the browser build, for compatibility and
            security, uses one. That means long or high-resolution videos can
            take a while and may strain low-memory phones. A few habits keep
            things smooth:
          </p>
          <ul>
            <li>
              <strong>Trim first when you can.</strong> Length is a direct
              multiplier on both file size and encode time, so cutting dead air
              before compressing is the easiest win.
            </li>
            <li>
              <strong>Drop the resolution for sharing.</strong> 720p or 1080p is
              plenty for messaging, slides, and most web embeds; reserve 4K for
              archives you actually watch on a big screen.
            </li>
            <li>
              <strong>Start with Balanced, then compare.</strong> Re-run at a
              smaller preset and check whether you can spot the difference at your
              real viewing size before committing.
            </li>
            <li>
              <strong>Keep big jobs to one device at a time.</strong> Close other
              heavy tabs so the encoder has memory and CPU to work with; short
              clips finish fastest.
            </li>
          </ul>
          <p>
            Working with other formats? Use the broader{" "}
            <Link href="/video-compressor">video compressor</Link> for MP4 plus
            everything else, the dedicated{" "}
            <Link href="/compress-mov">MOV, WebM, MKV and AVI compressor</Link>{" "}
            for non-MP4 footage, or the{" "}
            <Link href="/audio-compressor">audio compressor</Link> when you only
            need to shrink a soundtrack or voice recording.
          </p>
        </>
      }
    >
      <VideoTool accept={["video/mp4"]} />
    </ToolPageLayout>
  );
}
