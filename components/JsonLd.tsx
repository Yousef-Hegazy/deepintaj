import {
  getOrganizationSchema,
  getWebsiteSchema,
  getWebpageSchema,
  getServiceSchema,
} from "@/lib/seo";

type JsonLdProps = {
  locale: string;
};

export function JsonLd({ locale }: JsonLdProps) {
  const organization = getOrganizationSchema(locale);
  const website = getWebsiteSchema(locale);
  const webpage = getWebpageSchema(locale);
  const services = getServiceSchema(locale);

  const graph = [organization, website, webpage, ...services];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
