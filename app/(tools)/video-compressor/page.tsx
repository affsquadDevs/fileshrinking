import type { Metadata } from "next";
import Link from "next/link";
import { VideoTool } from "@/components/tools/video-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "video-compressor";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Video Compressor — Free Private In-Browser Tool",
  description:
    "Compress MP4, MOV, WebM, MKV and AVI video in your browser with ffmpeg. Private and in-browser — no uploads, your video never leaves your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my videos uploaded to a server?",
    a: "No. The entire compression runs inside your browser using a WebAssembly build of ffmpeg. Your video is read into memory, re-encoded on your own machine, and handed straight back to you. Nothing is ever uploaded, and there is no server that could store your footage.",
    text: "No. The entire compression runs inside your browser using a WebAssembly build of ffmpeg. Your video is read into memory, re-encoded on your own machine, and handed back to you. Nothing is uploaded and there is no server that could store your footage.",
  },
  {
    q: "Is the video compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no per-file charges. Because all the work happens on your device, there are no server costs to pass on. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no per-file charges. Because all the work happens on your device there are no server costs to pass on. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will compressing reduce the quality of my video?",
    a: "Video compression is lossy, so some detail is discarded. The CRF slider controls how aggressive that is — around 23–28 looks very close to the original for most footage. Downscaling the resolution (for example 4K to 1080p) saves the most space while keeping the picture sharp at normal viewing sizes.",
    text: "Video compression is lossy, so some detail is discarded. The CRF slider controls how aggressive that is; around 23-28 looks very close to the original for most footage. Downscaling the resolution (for example 4K to 1080p) saves the most space while keeping the picture sharp at normal sizes.",
  },
  {
    q: "What is the maximum file size I can compress?",
    a: (
      <>
        There is no hard limit, but because everything runs in your browser with
        single-threaded ffmpeg, we recommend files under about{" "}
        <strong>150&nbsp;MB</strong>. Large or long videos use a lot of memory
        and can be slow, and may fail on phones or older laptops with limited
        RAM. For big clips, trim them first or compress on a desktop browser.
      </>
    ),
    text: "There is no hard limit, but because everything runs in your browser with single-threaded ffmpeg we recommend files under about 150 MB. Large or long videos use a lot of memory, can be slow, and may fail on phones or older laptops with limited RAM. For big clips, trim them first or use a desktop browser.",
  },
  {
    q: "Why is in-browser video compression slower than other websites?",
    a: "Most online compressors upload your file to a powerful multi-core server that does the encoding for you. This tool deliberately does not do that — it runs ffmpeg locally so your video stays private. A single browser thread is slower than a server farm, so a few minutes of footage can take a little while. That trade-off buys you complete privacy.",
    text: "Most online compressors upload your file to a powerful multi-core server that encodes it for you. This tool deliberately does not do that; it runs ffmpeg locally so your video stays private. A single browser thread is slower than a server farm, so a few minutes of footage can take a little while. That trade-off buys you complete privacy.",
  },
  {
    q: "What format does the compressed video come out as?",
    a: (
      <>
        The output is <strong>H.264 video in an MP4 container</strong>,
        regardless of whether your input was MOV, WebM, MKV or AVI. H.264/MP4
        plays on virtually every phone, browser, TV and editing app, so the
        result is the safest choice for sharing and uploading.
      </>
    ),
    text: "The output is H.264 video in an MP4 container, regardless of whether your input was MOV, WebM, MKV or AVI. H.264/MP4 plays on virtually every phone, browser, TV and editing app, so the result is the safest choice for sharing and uploading.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="Video Compressor"
      intro={
        <>
          Compress MP4, MOV, WebM, MKV and AVI video right in your browser with a
          WebAssembly build of ffmpeg. Pick a quality preset, drop in your clip,
          and download a smaller H.264 MP4 — your footage is never uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress a video",
        description:
          "Compress video locally in your browser with ffmpeg in four steps.",
        steps: [
          {
            name: "Add your video",
            text: "Drag and drop a video file onto the dropzone or click to browse. For the smoothest experience, keep files under about 150 MB.",
          },
          {
            name: "Choose a quality preset",
            text: "Pick a preset, or fine-tune the CRF slider. Lower presets downscale the resolution and bitrate for much smaller files.",
          },
          {
            name: "Let it encode on your device",
            text: "ffmpeg re-encodes the video to H.264/MP4 locally. A progress bar shows where it is — larger or longer clips take more time.",
          },
          {
            name: "Download the result",
            text: "Save the smaller MP4. If the output isn't smaller, your file was already efficient — try a lower quality or resolution and re-run.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why compress video in your browser?</h2>
          <p>
            Video is by far the heaviest media most people deal with. A minute of
            4K phone footage can run to hundreds of megabytes, which is too big to
            email, awkward to upload, and quick to fill cloud storage and a
            phone&rsquo;s camera roll. Compressing a clip can cut its size by
            half or more while keeping it perfectly watchable, making it easy to
            share on chat apps, attach to a message, or post to a site with an
            upload limit.
          </p>
          <p>
            What makes this tool different is <strong>where</strong> the work
            happens. Your raw footage often contains private moments — family,
            your home, your workplace, documents on screen. A typical online
            compressor uploads all of that to a remote server. Here, the video is
            decoded, re-encoded, and re-saved entirely inside your browser tab, so
            it never travels across the internet. Once the page has loaded you can
            even switch off your connection and it will still compress.
          </p>
          <p>
            There are plenty of everyday reasons to reach for a smaller file.
            Messaging apps and email providers cap attachments — often at 25&nbsp;MB
            or less — so a quick re-encode is the difference between a message that
            sends and one that bounces. Course platforms, job-application portals,
            and contact forms frequently reject anything over a few megabytes. And
            if you are archiving years of family clips, halving each file pays off
            many times over in storage you do not have to buy.
          </p>

          <h2 id="how-it-works">How the in-browser encoder works (and its limits)</h2>
          <p>
            Under the hood this tool runs <strong>ffmpeg</strong>, the
            industry-standard media engine, compiled to WebAssembly so it executes
            natively in your browser. That is genuinely powerful, but it comes with
            honest trade-offs you should know about. The build is{" "}
            <strong>single-threaded</strong>, so it cannot spread the encode across
            all your CPU cores the way a desktop app or a cloud server does. As a
            result, compression here is <strong>slower</strong> than an upload-based
            service that runs on a multi-core machine, and a few minutes of video
            can take a little patience.
          </p>
          <p>
            It is also <strong>memory-bound</strong>. The whole file has to fit in
            the browser&rsquo;s available memory while it is processed, so we
            recommend keeping inputs under roughly <strong>150&nbsp;MB</strong>.
            Very large or very long videos can be slow and may fail outright on
            phones or older laptops with limited RAM. If you hit a wall, trim the
            clip to the part you need, lower the resolution, or run it on a desktop
            browser with more memory. These are real constraints of doing
            everything locally — the upside is that your video stays yours.
          </p>
          <p>
            A few habits make local encoding much more pleasant. Close other heavy
            tabs and apps before you start so the browser has room to work. Keep the
            tab in the foreground — some browsers throttle background tabs, which can
            stall a long encode. And give it time without refreshing: the progress
            bar is real, and reloading mid-encode throws away the work done so far.
          </p>

          <h2 id="settings">CRF, resolution and audio: the three levers</h2>
          <p>
            Three settings determine your final file size. The biggest single
            lever is <strong>resolution</strong>. Downscaling from 4K to 1080p, or
            1080p to 720p, removes an enormous number of pixels from every frame
            and is usually invisible unless you watch on a large screen up close.
            If you only need a clip for a phone or a website embed, downscaling
            will shrink it far more than tweaking quality alone.
          </p>
          <p>
            The second lever is <strong>CRF</strong> (Constant Rate Factor), the
            quality control for H.264. Lower numbers mean higher quality and bigger
            files; higher numbers mean smaller files with more visible compression.
            A CRF of <strong>23–28</strong> is the practical sweet spot for most
            footage. The third lever is <strong>audio bitrate</strong>: speech is
            fine at a low bitrate, while music benefits from more. If your video is
            mostly talking, trimming the audio bitrate saves space with no
            noticeable loss. The default output is{" "}
            <strong>H.264 in an MP4 container</strong> precisely because it plays
            almost everywhere.
          </p>
          <ul>
            <li>
              <strong>Match the resolution to where it will be watched.</strong> A
              clip destined for a phone or a small web player gains nothing from 4K;
              720p or 1080p will look identical and weigh a fraction as much.
            </li>
            <li>
              <strong>Nudge CRF before you nudge anything else.</strong> Moving from
              23 to 26 often halves the size with detail loss most viewers will never
              spot. Compare the result before going more aggressive.
            </li>
            <li>
              <strong>Don&rsquo;t re-compress an already-compressed clip.</strong>{" "}
              Each lossy pass throws away more detail. If the tool reports the output
              isn&rsquo;t smaller, your file is already efficiently encoded — leave
              it as is rather than degrading it further.
            </li>
            <li>
              <strong>Trim first for big savings.</strong> Cutting dead air off the
              start and end of a clip removes whole frames, which beats any quality
              setting for shrinking the file.
            </li>
          </ul>

          <h2 id="codecs">A quick word on video codecs</h2>
          <p>
            A &ldquo;video file&rdquo; is really two things: a{" "}
            <strong>codec</strong> that encodes the pixels (such as H.264, VP9 or
            AV1) and a <strong>container</strong> format that wraps it (MP4, WebM,
            MOV, MKV). That is why the same H.264 video can live inside an MP4 or a
            MOV. We output H.264/MP4 because it has the widest hardware and software
            support of any modern codec — almost every device made in the last
            decade can decode it smoothly. You can read more about how codecs and
            containers fit together in{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s web video codec guide
            </a>
            .
          </p>
          <p>
            This page is the hub for all of our video tools. If you know your file
            format, the dedicated pages have tips tailored to it: use the{" "}
            <Link href="/compress-mp4">MP4 compressor</Link> for footage already in
            MP4, or the{" "}
            <Link href="/compress-mov">MOV, WebM, MKV and AVI compressor</Link> for
            clips from cameras, screen recorders and other apps. If you only need to
            shrink the sound — a podcast, a voice memo, or a music file — the{" "}
            <Link href="/audio-compressor">audio compressor</Link> handles that
            without re-encoding any video at all.
          </p>
        </>
      }
    >
      <VideoTool />
    </ToolPageLayout>
  );
}
