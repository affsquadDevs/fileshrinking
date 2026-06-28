import type { ReactNode } from "react";
import { ImageTool } from "@/components/tools/image-tool";
import { PdfTool } from "@/components/tools/pdf-tool";
import { VideoTool } from "@/components/tools/video-tool";
import { AudioTool } from "@/components/tools/audio-tool";
import { getT } from "@/lib/i18n/messages";
import { type Locale } from "@/lib/i18n/config";

const IMG = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];

/**
 * The interactive tool component for a given slug — the single source of truth
 * for each tool's configuration, shared by the English routes and the localized
 * routes so behaviour never diverges. Returns null for unknown slugs.
 */
export function toolRenderer(slug: string, locale: Locale): ReactNode {
  switch (slug) {
    case "image-compressor":
      return (
        <ImageTool
          toolId={slug}
          accept={IMG}
          outputFormats={["jpeg", "png", "webp", "avif"]}
          defaultTarget="keep"
          allowKeep
          defaultQuality={75}
        />
      );
    case "compress-jpeg":
      return (
        <ImageTool
          toolId={slug}
          accept={["image/jpeg"]}
          outputFormats={["jpeg"]}
          defaultTarget="jpeg"
          defaultQuality={75}
        />
      );
    case "compress-png":
      return (
        <ImageTool
          toolId={slug}
          accept={["image/png"]}
          outputFormats={["png", "webp"]}
          defaultTarget="png"
          defaultQuality={80}
        />
      );
    case "compress-webp":
      return (
        <ImageTool
          toolId={slug}
          accept={IMG}
          outputFormats={["webp"]}
          defaultTarget="webp"
          defaultQuality={80}
        />
      );
    case "compress-avif":
      return (
        <ImageTool
          toolId={slug}
          accept={IMG}
          outputFormats={["avif"]}
          defaultTarget="avif"
          defaultQuality={55}
        />
      );
    case "compress-gif":
      return (
        <ImageTool
          toolId={slug}
          accept={["image/gif"]}
          outputFormats={["webp", "png"]}
          defaultTarget="webp"
          defaultQuality={75}
        />
      );
    case "compress-heic":
      return (
        <ImageTool
          toolId={slug}
          accept={["image/heic", "image/heif", ".heic", ".heif"]}
          outputFormats={["jpeg", "webp", "avif"]}
          defaultTarget="jpeg"
          defaultQuality={80}
          dropHint={getT(locale)("controls.heicDropHint")}
        />
      );
    case "image-converter":
      return (
        <ImageTool
          toolId={slug}
          accept={IMG}
          outputFormats={["jpeg", "png", "webp", "avif"]}
          defaultTarget="webp"
          defaultQuality={80}
        />
      );
    case "image-resizer":
      return (
        <ImageTool
          toolId={slug}
          accept={IMG}
          outputFormats={["jpeg", "png", "webp", "avif"]}
          defaultTarget="keep"
          allowKeep
          resizeByDefault
          defaultQuality={82}
        />
      );
    case "pdf-compressor":
      return <PdfTool />;
    case "video-compressor":
      return <VideoTool />;
    case "compress-mp4":
      return <VideoTool accept={["video/mp4"]} />;
    case "compress-mov":
      return (
        <VideoTool
          accept={[
            "video/quicktime",
            "video/webm",
            "video/x-matroska",
            "video/x-msvideo",
          ]}
        />
      );
    case "audio-compressor":
      return <AudioTool />;
    default:
      return null;
  }
}
