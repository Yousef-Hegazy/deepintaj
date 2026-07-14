import SiteHeader from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { CredentialsRibbon } from "@/components/CredentialsRibbon";
import { AudienceSection } from "@/components/AudienceSection";
import { ServicesIntro } from "@/components/ServicesIntro";
import { BprSection } from "@/components/BprSection";
import { EngineeringSection } from "@/components/EngineeringSection";
import { MethodologySection } from "@/components/MethodologySection";
import { WhyDeepintajSection } from "@/components/WhyDeepintajSection";
import { AssessmentCta } from "@/components/AssessmentCta";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} t={t} />
        <CredentialsRibbon t={t} />
        <AudienceSection t={t} />
        <ServicesIntro t={t} />
        <BprSection locale={locale} t={t} />
        <EngineeringSection locale={locale} t={t} />
        <MethodologySection locale={locale} t={t} />
        <WhyDeepintajSection locale={locale} t={t} />
        <AssessmentCta locale={locale} t={t} />
        <ContactSection locale={locale} t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}
