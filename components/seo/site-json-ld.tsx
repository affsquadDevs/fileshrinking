import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

/** Site-wide Organization + WebSite (with SearchAction) structured data. */
export function SiteJsonLd() {
  return <JsonLd data={[organizationSchema(), websiteSchema()]} />;
}
