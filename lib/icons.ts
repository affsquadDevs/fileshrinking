import {
  Image,
  FileText,
  Video,
  Music,
  Repeat,
  Scaling,
  type LucideIcon,
} from "lucide-react";

/**
 * Resolves the string icon names stored in site-config into lucide
 * components. Keeping the mapping here lets site-config stay JSX-free
 * and importable from server-only modules (sitemap, robots, metadata).
 */
const ICONS: Record<string, LucideIcon> = {
  Image,
  FileText,
  Video,
  Music,
  Repeat,
  Scaling,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? FileText;
}
