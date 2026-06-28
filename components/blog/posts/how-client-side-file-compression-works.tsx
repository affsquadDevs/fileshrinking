import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "how-client-side-file-compression-works",
  title: "How Client-Side File Compression Works (and Why It Is More Private)",
  description:
    "How FileShrinking compresses images, video and PDFs entirely in your browser using WebAssembly and Web Workers — and why that keeps your files private.",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  authorId: "maya",
  tags: ["Privacy", "How It Works"],
  readingMinutes: 8,
};

export default function Content() {
  return (
    <>
      <p>
        When you compress a photo or shrink a PDF on most websites, your file
        takes a round trip: it is uploaded to a server, processed in a data
        center somewhere, and a smaller version is sent back to you. It works,
        but it means a copy of your private file briefly lives on a computer you
        do not control. FileShrinking takes a different approach — every byte of
        compression happens <strong>inside your own browser tab</strong>, and
        your files never leave your device. This article explains exactly how
        that is possible, which browser technologies make it work, and the
        honest trade-offs involved.
      </p>

      <h2 id="two-models">Two ways to compress a file on the web</h2>
      <p>
        The traditional model is <strong>server-side</strong>. Your browser
        sends the original file over the network; a backend running a tool like
        ImageMagick or FFmpeg does the heavy lifting; the result is streamed
        back. The user&rsquo;s machine barely breaks a sweat, and the server can
        be enormously powerful. The cost is privacy and trust: your data is
        transmitted, it sits (even temporarily) on someone else&rsquo;s disk,
        and you have to take their word for what happens to it afterward.
      </p>
      <p>
        The newer model is <strong>client-side</strong>. The same compression
        algorithms run directly on your device, in the browser, with no upload
        step at all. For years this was impractical — JavaScript alone was too
        slow to run a serious image or video codec at a usable speed. That
        changed when browsers gained the ability to run compiled, near-native
        code on the web. Today a modern laptop or phone can do the work that
        used to require a server, and FileShrinking is built entirely on this
        model.
      </p>

      <h2 id="webassembly">WebAssembly: real codecs running in the browser</h2>
      <p>
        The technology that makes client-side compression viable is{" "}
        <strong>WebAssembly</strong> (often shortened to Wasm). It is a compact,
        low-level binary instruction format that browsers can execute at speeds
        approaching native code. Crucially, it lets developers take codecs that
        were written in C, C++, or Rust — and refined over decades — and compile
        them to run on the web without rewriting them in JavaScript.
      </p>
      <p>
        That is how the same battle-tested compression engines you would find in
        professional desktop software end up in a browser tab:
      </p>
      <ul>
        <li>
          <strong>MozJPEG</strong> for high-quality JPEG encoding that squeezes
          more out of every kilobyte.
        </li>
        <li>
          <strong>OxiPNG</strong> for lossless PNG optimization.
        </li>
        <li>
          <strong>libwebp</strong> and AVIF encoders for the modern{" "}
          <Link href="/compress-webp">WebP</Link> and{" "}
          <Link href="/compress-avif">AVIF</Link> formats.
        </li>
        <li>
          <strong>FFmpeg</strong>, compiled to WebAssembly, for video transcoding
          and shrinking.
        </li>
      </ul>
      <p>
        For a deeper technical reference, MDN&rsquo;s{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/WebAssembly"
          target="_blank"
          rel="noopener noreferrer"
        >
          WebAssembly documentation
        </a>{" "}
        is the canonical source on how the format works and why it is fast.
      </p>

      <h2 id="web-workers">Web Workers: keeping the page responsive</h2>
      <p>
        Compression is computationally heavy. If you ran a video transcode on
        the browser&rsquo;s main thread, the whole page would freeze — buttons
        would stop responding, scrolling would stutter, and progress bars would
        lock up. To avoid this, FileShrinking runs the work on a separate thread
        using <strong>Web Workers</strong>.
      </p>
      <p>
        A Web Worker is a background JavaScript context that runs in parallel
        with the user interface. The main thread hands the file (and the Wasm
        codec) to the worker, the worker grinds through the compression, and it
        posts the finished result back when it is done. Meanwhile the UI stays
        smooth and can show real-time progress. The{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN guide to using Web Workers
        </a>{" "}
        covers the message-passing model in detail. Large binary data can be
        moved between threads efficiently using transferable objects, so the file
        does not have to be copied byte-by-byte just to cross the thread
        boundary.
      </p>

      <h2 id="decoding">Reading and decoding files without the network</h2>
      <p>
        Before anything can be compressed, the browser has to read your file
        into memory and decode it. This relies on a small family of standard web
        APIs, none of which involve a server:
      </p>
      <ul>
        <li>
          <strong>The File and Blob APIs</strong> represent the file you select
          or drag in. They expose the raw bytes as an <code>ArrayBuffer</code>{" "}
          that codecs can work on directly — all in memory.
        </li>
        <li>
          <strong>createImageBitmap</strong> efficiently decodes an image into a
          form ready for processing, and can do so off the main thread.
        </li>
        <li>
          <strong>OffscreenCanvas</strong> lets the browser draw, resize, and
          re-encode image data inside a worker, without ever touching the
          visible page.
        </li>
      </ul>
      <p>
        Put together, the pipeline looks like this: you drop a file, the browser
        reads its bytes locally, a worker decodes it, the Wasm codec re-encodes
        it at your chosen quality, and a new <code>Blob</code> is handed back for
        you to download. At no point does the file travel anywhere. If you are
        curious about the quality choices in that re-encode step, our guide to{" "}
        <Link href="/blog/lossy-vs-lossless-compression">
          lossy versus lossless compression
        </Link>{" "}
        explains what is actually being discarded and why.
      </p>

      <h2 id="privacy">Why this is genuinely more private</h2>
      <p>
        The privacy benefit of the client-side model is not a marketing slogan —
        it is a direct consequence of the architecture. Because your file is
        only ever read into local memory and re-encoded on your device:
      </p>
      <ul>
        <li>
          <strong>Nothing is transmitted.</strong> There is no upload, so there
          is no copy of your file in transit to intercept and no copy at rest on
          a server to be breached, sold, or subpoenaed.
        </li>
        <li>
          <strong>It works offline.</strong> Once the page and its Wasm codecs
          have loaded, you can disconnect from the internet entirely and the
          tools keep working. That is the simplest proof that no upload is
          happening — you can watch it for yourself in your browser&rsquo;s
          network tab.
        </li>
        <li>
          <strong>There is nothing to retain.</strong> When you close the tab,
          the file data is gone from memory. There are no server logs tying your
          documents to your identity.
        </li>
      </ul>
      <p>
        And because FileShrinking is{" "}
        <a
          href="https://github.com/affsquadDevs/fileshrinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          fully open source under the MIT license
        </a>
        , you do not have to take these claims on faith. Anyone can read the
        code, confirm there is no upload path, and verify exactly how the
        compression pipeline behaves. Auditable privacy is the strongest kind.
      </p>

      <h2 id="tradeoffs">The honest trade-offs</h2>
      <p>
        Client-side compression is not magic, and it is fair to be upfront about
        where the server model still has advantages:
      </p>
      <ul>
        <li>
          <strong>Speed on very large jobs.</strong> A data center can throw far
          more cores at a long video than your laptop has. For most images and
          short clips the difference is unnoticeable, but a feature-length video
          will be slower in the browser than on a server farm.
        </li>
        <li>
          <strong>Memory limits.</strong> Everything happens in your
          device&rsquo;s RAM. Extremely large files — say, a multi-gigabyte
          video on a low-memory phone — can hit browser memory ceilings that a
          server would not.
        </li>
        <li>
          <strong>First-load cost.</strong> The Wasm codecs have to be
          downloaded the first time you use a tool. They are cached afterward, so
          subsequent visits are instant, but the very first run pays a one-time
          download.
        </li>
      </ul>
      <p>
        For the overwhelming majority of everyday tasks — optimizing photos for
        the web, trimming a PDF down to email size, shrinking a screen recording
        — these trade-offs are easily worth it, and you get privacy for free.
      </p>

      <h2 id="try-it">See it for yourself</h2>
      <p>
        The best way to understand client-side compression is to use it. Try the{" "}
        <Link href="/image-compressor">image compressor</Link>, the{" "}
        <Link href="/video-compressor">video compressor</Link>, or the{" "}
        <Link href="/pdf-compressor">PDF compressor</Link> — then open your
        browser&rsquo;s developer tools, watch the network tab, and confirm that
        nothing is uploaded while your file shrinks. Everything runs locally,
        the code is open for anyone to inspect, and your files stay exactly where
        they belong: with you.
      </p>
    </>
  );
}
