import type { Metadata } from "next";
import Link from "next/link";
import { VideoTool } from "@/components/tools/video-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-mov";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Compress MOV, WebM, MKV & AVI Video Free",
  description:
    "Compress MOV, WebM, MKV and AVI video privately in your browser. Transcode to efficient H.264 MP4 with no uploads — files never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my MOV, WebM, MKV or AVI files uploaded to a server?",
    a: "No. Every video is processed locally in your browser with a WebAssembly build of ffmpeg. Your files never leave your device and there is no server to upload them to — once the page has loaded you can even go offline and it still works.",
    text: "No. Every video is processed locally in your browser with a WebAssembly build of ffmpeg. Your files never leave your device and there is no server to upload them to. Once the page has loaded you can go offline and it still works.",
  },
  {
    q: "Is this video compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no per-file charges. The only practical limits come from your device's memory and patience, since everything runs on your own hardware. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks and no per-file charges. The only practical limits come from your device's memory and patience, since everything runs on your own hardware. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will compressing reduce the quality of my video?",
    a: "Video compression is lossy, so some detail is discarded to save space. With the quality (CRF) slider in the 23–28 range, most clips look virtually identical to the source at normal viewing sizes. Lower the CRF for higher fidelity and larger files, or raise it for smaller files.",
    text: "Video compression is lossy, so some detail is discarded to save space. With the quality (CRF) slider in the 23-28 range, most clips look virtually identical to the source. Lower the CRF for higher fidelity and larger files, or raise it for smaller files.",
  },
  {
    q: "What is the maximum file size I can compress?",
    a: "There is no fixed limit, but because ffmpeg runs single-threaded in your browser, very large or long videos (over roughly 150 MB) can be slow and may fail on low-memory phones. Short clips and screen recordings work best; for huge files, trim them first or use a desktop tool.",
    text: "There is no fixed limit, but because ffmpeg runs single-threaded in your browser, very large or long videos over roughly 150 MB can be slow and may fail on low-memory phones. Short clips and screen recordings work best; for huge files, trim them first or use a desktop tool.",
  },
  {
    q: "Why does my MOV or AVI come back as an MP4?",
    a: "To shrink your file the tool re-encodes the video with H.264 and wraps it in an MP4 container, which is far more space-efficient and far more widely supported than QuickTime MOV or legacy AVI. The result plays on virtually every phone, browser and player, usually at a much smaller size.",
    text: "To shrink your file the tool re-encodes the video with H.264 and wraps it in an MP4 container, which is far more space-efficient and widely supported than QuickTime MOV or legacy AVI. The result plays on virtually every phone, browser and player, usually at a much smaller size.",
  },
  {
    q: "Can I compress WebM and MKV files too?",
    a: "Yes. This tool accepts MOV, WebM, MKV and AVI and transcodes them all to H.264 MP4. WebM and MKV are flexible containers that can hold many codecs; converting to MP4 gives you a single, predictable format that plays everywhere, including older devices and editing software.",
    text: "Yes. This tool accepts MOV, WebM, MKV and AVI and transcodes them all to H.264 MP4. WebM and MKV are flexible containers that can hold many codecs; converting to MP4 gives you a single, predictable format that plays everywhere, including older devices and editing software.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="MOV, WebM, MKV & AVI Compressor"
      intro={
        <>
          Compress MOV, WebM, MKV and AVI videos right in your browser. Each clip
          is re-encoded with efficient H.264 and saved as a compact, universally
          compatible MP4 — all on your own device, with nothing ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress MOV, WebM, MKV & AVI",
        description:
          "Compress MOV, WebM, MKV and AVI video to H.264 MP4 locally in your browser in four steps.",
        steps: [
          {
            name: "Add your video",
            text: "Drag and drop a MOV, WebM, MKV or AVI file onto the dropzone, or click to browse. Short clips and screen recordings process fastest.",
          },
          {
            name: "Pick a quality preset",
            text: "Choose a preset, or fine-tune the CRF slider and target resolution. Around CRF 23–28 keeps clips looking great while shrinking them a lot.",
          },
          {
            name: "Let ffmpeg transcode it on your device",
            text: "The video is re-encoded to H.264 MP4 with a WebAssembly build of ffmpeg. A progress bar shows the work happening locally — nothing is sent anywhere.",
          },
          {
            name: "Download your MP4",
            text: "Save the smaller MP4 when it's ready. If the result isn't smaller, the tool tells you so you can lower the quality or resolution and try again.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why MOV, WebM, MKV and AVI files are so large</h2>
          <p>
            If you record video on an iPhone, a DSLR, a GoPro or a screen
            recorder, you often end up with enormous files — a few minutes of
            footage can easily run into the hundreds of megabytes. There are good
            reasons for that. Phones and cameras prioritise capture speed and
            quality over file size, so they record at high bitrates, high
            resolutions and high frame rates. Apple devices save{" "}
            <strong>.mov</strong> (QuickTime) files, screen recorders frequently
            produce <strong>.mkv</strong> or <strong>.webm</strong>, and older
            cameras and Windows tools still output <strong>.avi</strong>. Each of
            these can be many times larger than it needs to be for sharing or
            archiving.
          </p>
          <p>
            Large videos are awkward to deal with: they exceed email and chat
            attachment limits, take ages to upload, fill up phone and cloud
            storage, and burn through mobile data. Re-encoding them with a modern,
            efficient codec can cut the size dramatically — often by half or more
            — while keeping the footage looking essentially the same. Because this
            tool runs entirely on your device, you get those savings without ever
            handing your personal recordings to a third-party server.
          </p>
          <p>
            Privacy is the reason that last point matters so much. Home videos,
            confidential screen recordings, footage of your kids, product demos
            you haven&rsquo;t announced yet — these are not things you want sitting
            on an unknown company&rsquo;s servers, even temporarily. Conventional
            online video compressors upload your entire file, process it remotely,
            and trust you to believe it was deleted afterwards. Here, your video is
            read into your browser&rsquo;s memory, transcoded with WebAssembly, and
            handed straight back to you. No network request carries the footage,
            so there is nothing to leak, log or retain.
          </p>

          <h2 id="container-vs-codec">
            Container vs codec: what actually determines the size
          </h2>
          <p>
            A common point of confusion is the difference between a{" "}
            <strong>container</strong> and a <strong>codec</strong>. The file
            extension — .mov, .mkv, .webm, .avi, .mp4 — names the container: a
            wrapper that bundles the video stream, audio stream, subtitles and
            metadata into one file. The codec is the algorithm that actually
            encodes the picture and sound inside that wrapper. The same container
            can hold many different codecs, which is exactly why two .mkv files
            can have wildly different sizes and compatibility.
          </p>
          <p>
            That separation matters because the codec, not the container, drives
            most of the file size. A MOV from an iPhone might use the efficient
            HEVC codec, while an AVI from an old camcorder could use a dated,
            bloated one. Containers also differ in support: MKV and WebM are
            flexible and open but aren&rsquo;t played natively everywhere, and AVI
            is largely a legacy format. You can read a clear breakdown of how the
            common web containers relate to their codecs in{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s media container formats guide
            </a>
            .
          </p>
          <p>
            In practical terms, this is why simply renaming a file&rsquo;s
            extension never makes it smaller and usually breaks playback: you would
            be relabelling the wrapper without touching the data inside. Real
            compression means decoding the original video stream and re-encoding it
            with a more efficient codec at a chosen quality level. That is exactly
            what happens here — your MOV, WebM, MKV or AVI is fully decoded and
            then rebuilt as a fresh H.264 MP4, rather than just repackaged.
          </p>

          <h2 id="mp4-h264">Why converting to H.264 MP4 helps</h2>
          <p>
            This tool transcodes whatever you give it to <strong>H.264</strong>{" "}
            video inside an <strong>MP4</strong> container. There are two big wins
            here. First, <strong>size</strong>: re-encoding with H.264 at a
            sensible quality level lets you strip out the excess bitrate that
            cameras and recorders bake in, and you can optionally cap the
            resolution to shed even more. Second, and just as important,{" "}
            <strong>compatibility</strong>: H.264 MP4 is the closest thing to a
            universal video format. It plays in every modern browser, on phones
            and tablets, on smart TVs, and in editing software — no codec packs or
            conversions required on the other end.
          </p>
          <p>
            Quality is controlled with a CRF (Constant Rate Factor) value. Lower
            numbers mean higher quality and bigger files; higher numbers mean
            smaller files with more visible compression. For most clips a CRF
            around <strong>23–28</strong> is the sweet spot, looking nearly
            identical to the source at a fraction of the size. If your video is
            already an efficiently encoded MP4, you may not gain much by
            re-compressing it — in that case our{" "}
            <Link href="/compress-mp4">MP4 compressor</Link> with a higher CRF or
            a lower target resolution is the better lever to pull.
          </p>

          <h2 id="tips">Tips, limits and what to expect</h2>
          <p>
            Everything happens in your browser using a WebAssembly build of
            ffmpeg, which is genuinely private but comes with one honest caveat:
            it runs <strong>single-threaded</strong>. That means it cannot use all
            your CPU cores the way a native desktop encoder can, so long or
            high-resolution videos take noticeably longer and can strain
            low-memory devices. Keep these pointers in mind for the best results:
          </p>
          <ul>
            <li>
              <strong>Favour shorter clips.</strong> A minute or two of footage
              compresses quickly. For very long recordings, trim to the part you
              actually need before compressing.
            </li>
            <li>
              <strong>Drop the resolution for the biggest savings.</strong> A 4K
              screen recording downscaled to 1080p shrinks far more than quality
              tweaks alone, with no visible loss on most screens.
            </li>
            <li>
              <strong>Use a desktop machine for heavy jobs.</strong> Large files
              (over roughly 150&nbsp;MB) are slower on phones; a laptop or desktop
              with more memory handles them more comfortably.
            </li>
            <li>
              <strong>Pick the right tool for the job.</strong> Need a quick view
              of all formats in one place? Use the{" "}
              <Link href="/video-compressor">video compressor</Link>. Working
              with audio files instead? Try the{" "}
              <Link href="/audio-compressor">audio compressor</Link>.
            </li>
            <li>
              <strong>Re-check the result.</strong> If the output ever comes back
              the same size or larger, your source was already efficiently
              encoded — raise the CRF or lower the resolution and run it again
              rather than accepting a file that didn&rsquo;t shrink.
            </li>
          </ul>
        </>
      }
    >
      <VideoTool
        accept={[
          "video/quicktime",
          "video/webm",
          "video/x-matroska",
          "video/x-msvideo",
        ]}
      />
    </ToolPageLayout>
  );
}
