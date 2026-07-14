import { DirectionProvider } from "@base-ui/react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { HtmlAttributes } from "@/components/HtmlAttributes";
import { siteConfig, getAlternates } from "@/lib/seo";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const isAr = locale === "ar";
  const alternates = getAlternates(locale);
  const ogImage = {
    url: siteConfig.logoUrl,
    width: siteConfig.openGraph.imageWidth,
    height: siteConfig.openGraph.imageHeight,
    alt: isAr ? "شعار ديبنتاج" : "Deepintaj Logo",
  };

  return {
    title: siteConfig.defaultTitle[locale],
    description: siteConfig.defaultDescription[locale],
    applicationName: siteConfig.applicationName[locale],
    category: isAr
      ? "استشارات هندسية وتشغيلية"
      : "Engineering & Operational Consulting",
    keywords: isAr
      ? [
          "استشارات هندسية",
          "استشارات هندسية السعودية",
          "استشارات هندسية الرياض",
          "خدمات هندسية للشركات",
          "استشارات تشغيلية",
          "إعادة هندسة العمليات",
          "تحسين العمليات التشغيلية",
          "رفع الكفاءة التشغيلية",
          "فحص المباني",
          "مراجعة المخططات",
          "إشراف هندسي",
          "تقييم الموردين",
          "هندسة العمليات",
          "التحسين المستمر",
          "deeepintaj",
        ]
      : [
          "engineering consulting Saudi Arabia",
          "engineering consultancy Riyadh",
          "operational consulting Saudi Arabia",
          "business process reengineering",
          "process improvement consulting",
          "operational assessment",
          "process mapping",
          "workflow optimization",
          "building inspection Saudi Arabia",
          "mechanical drawing review",
          "engineering supervision",
          "industrial engineering consulting",
          "Deepintaj",
        ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: alternates.canonical,
      languages: {
        "ar-SA": `${siteConfig.url}/ar`,
        en: `${siteConfig.url}/en`,
        "x-default": `${siteConfig.url}/ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.openGraph.locale[locale],
      alternateLocale: isAr ? "en_US" : "ar_SA",
      siteName: siteConfig.openGraph.siteName[locale],
      url: alternates.canonical,
      title: siteConfig.defaultTitle[locale],
      description: siteConfig.defaultDescription[locale],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.defaultTitle[locale],
      description: siteConfig.defaultDescription[locale],
      images: [ogImage],
    },
    // No Search Console verification token — owner must provide it
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DirectionProvider direction={dir}>
        <HtmlAttributes locale={locale} />
        {children}
      </DirectionProvider>
    </NextIntlClientProvider>
  );
}
