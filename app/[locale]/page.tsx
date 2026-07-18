import { AssessmentCta } from "@/components/AssessmentCta";
import { AudienceSection } from "@/components/AudienceSection";
import { BprSection } from "@/components/BprSection";
import { ContactSection } from "@/components/ContactSection";
import { CredentialsRibbon } from "@/components/CredentialsRibbon";
import { EngineeringSection } from "@/components/EngineeringSection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { MethodologySection } from "@/components/MethodologySection";
import { ServicesIntro } from "@/components/ServicesIntro";
import { SiteFooter } from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { WhyDeepintajSection } from "@/components/WhyDeepintajSection";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <JsonLd locale={locale} />
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
