import HeaderNav from "@/components/HeaderNav";
import MobileNavDrawer from "@/components/MobileNavDrawer";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  Building,
  Building2,
  Eye,
  Factory,
  GitBranch,
  HardHat,
  Home,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function DirectionalArrow({ locale }: { locale: string }) {
  const Icon = locale === "ar" ? ArrowLeft : ArrowRight;
  return <Icon className="size-5" aria-hidden="true" />;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const isRtl = locale === "ar";

  const audiencePills = [
    t("audience.pill1"),
    t("audience.pill2"),
    t("audience.pill3"),
    t("audience.pill4"),
    t("audience.pill5"),
    t("audience.pill6"),
  ];

  const methodologySteps = [
    { title: t("methodology.step1.title"), description: t("methodology.step1.description") },
    { title: t("methodology.step2.title"), description: t("methodology.step2.description") },
    { title: t("methodology.step3.title"), description: t("methodology.step3.description") },
    { title: t("methodology.step4.title"), description: t("methodology.step4.description") },
  ];

  const serviceOptions = [1, 2, 3, 4];

  return (
    <>
      {/* ===================== HEADER ===================== */}
      <header className="bg-primary/95 sticky top-0 z-50 border-b border-primary-foreground/10 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-4 md:px-16 py-2 max-w-full mx-auto">
          {/* Logo — natural mirroring places it correctly */}
          <div className="flex items-center gap-4 shrink-0">
            <Image
              src="/images/deepintaj-logo-transparent.png"
              alt={t("logoAlt")}
              width={160}
              height={64}
              className="h-12 md:h-20 w-auto object-contain"
              priority
            />
          </div>

          {/* Navigation (Desktop) */}
          <HeaderNav
            translations={{
              "header.home": t("header.home"),
              "header.services": t("header.services"),
              "header.methodology": t("header.methodology"),
              "header.why": t("header.why"),
              "header.contact": t("header.contact"),
            }}
          />

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-6 shrink-0">
            <span className="hidden md:inline-flex">
              <LocaleSwitch locale={locale} />
            </span>
            <span className="md:hidden">
              <MobileNavDrawer
                translations={{
                  "header.home": t("header.home"),
                  "header.services": t("header.services"),
                  "header.methodology": t("header.methodology"),
                  "header.why": t("header.why"),
                  "header.contact": t("header.contact"),
                }}
                locale={locale}
              />
            </span>
            <a
              href="#contact"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "rounded-[4px] font-bold hover:bg-white transition-colors text-base px-6 md:px-8 font-sans",
              })}
            >
              {t("header.cta")}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ===================== HERO ===================== */}
        <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
          {/* Background Images */}
          <div className="absolute inset-0 z-0">
            {/* Mobile Hero */}
            <div className="absolute inset-0 md:hidden">
              <Image
                src="/images/02-deepintaj-hero-mobile.png"
                alt=""
                fill
                className="object-cover mix-blend-luminosity opacity-60"
                priority
                sizes="100vw"
              />
            </div>
            {/* Desktop Hero */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="/images/01-deepintaj-hero-desktop-approved.png"
                alt=""
                fill
                className="object-cover mix-blend-luminosity opacity-60"
                priority
                sizes="100vw"
                style={{ objectPosition: isRtl ? "left center" : "right center" }}
              />
            </div>
            <div
              className={`absolute inset-0 bg-linear-to-r ${
                isRtl ? "from-primary via-primary/80 to-transparent" : "from-transparent via-primary/80 to-primary"
              }`}
            />
          </div>

          <div className="container mx-auto px-4 md:px-16 relative z-10 flex flex-col justify-center">
            <div className="max-w-3xl">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 mb-8 border border-primary-foreground/30 px-4 py-2 bg-primary/50 backdrop-blur">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm text-primary-foreground/90 tracking-wider uppercase font-medium font-sans">
                  {t("hero.eyebrow")}
                </span>
              </div>

              <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] md:text-6xl font-extrabold text-primary-foreground mb-8 leading-tight tracking-tight">
                {t("hero.headlineLine1")}
                <br />
                {t("hero.headlineLine2")}
                <br />
                <span className="text-secondary">{t("hero.headlineHighlight")}</span>
              </h1>

              <p
                className={`text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-12 pe-6 ${
                  isRtl ? "border-e-4 border-secondary/80" : "border-s-4 border-secondary/80"
                }`}
              >
                {t("hero.subheadline")}
              </p>

              <div className="flex flex-wrap gap-6">
                <a
                  href="#assessment"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                    className:
                      "rounded-[4px] font-bold text-lg hover:bg-white transition-all shadow-lg px-8 py-4 h-auto",
                  })}
                >
                  {t("hero.ctaPrimary")}
                  <DirectionalArrow locale={locale} />
                </a>
                <a
                  href="#services"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className:
                      "border-primary-foreground/30 bg-primary/40 backdrop-blur text-primary-foreground rounded-[4px] font-bold text-lg hover:border-secondary hover:text-secondary transition-all px-8 py-4 h-auto",
                  })}
                >
                  {t("hero.ctaSecondary")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CREDENTIALS RIBBON ===================== */}
        <div className="w-full border-y border-primary-foreground/10 bg-primary/90 backdrop-blur-sm py-6 relative z-20">
          <div className="container mx-auto px-4 md:px-16">
            <div className="flex flex-wrap justify-between items-center gap-8 text-sm text-primary-foreground/90 font-medium font-sans uppercase tracking-wider">
              <div className="flex items-center gap-3">
                <BadgeCheck className="size-6 text-secondary" aria-hidden="true" />
                {t("credentials.experience")}
              </div>
              <div className="w-1.5 h-1.5 bg-primary-foreground/20 rounded-full hidden md:block" />
              <div className="flex items-center gap-3">
                <HardHat className="size-6 text-secondary" aria-hidden="true" />
                {t("credentials.certifiedEngineer")}
              </div>
              <div className="w-1.5 h-1.5 bg-primary-foreground/20 rounded-full hidden md:block" />
              <div className="flex items-center gap-3">
                <Factory className="size-6 text-secondary" aria-hidden="true" />
                {t("credentials.licensedConsultant")}
              </div>
              <div className="w-1.5 h-1.5 bg-primary-foreground/20 rounded-full hidden md:block" />
              <div className="flex items-center gap-3">
                <Building2 className="size-6 text-secondary" aria-hidden="true" />
                {t("credentials.certifiedInspector")}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== WHO WE SERVE ===================== */}
        <section className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-4 md:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-secondary mb-4 block text-lg font-bold font-heading uppercase tracking-wider">
                {t("audience.label")}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">{t("audience.heading")}</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {audiencePills.map((pill, i) => (
                  <span
                    key={i}
                    className={`px-6 py-3 border text-foreground text-lg rounded-full font-medium shadow-sm ${
                      i === 5 ? "border-secondary/30 bg-card" : "bg-card border-border"
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES INTRO ===================== */}
        <section id="services" className="pt-24 pb-12 relative overflow-hidden bg-card text-foreground">
          <div className="absolute inset-0 technical-grid opacity-50" />
          <div className="container mx-auto px-4 md:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-secondary mb-4 block font-bold text-lg font-heading uppercase tracking-wider">
                {t("servicesIntro.label")}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{t("servicesIntro.heading")}</h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto mt-8" />
            </div>
          </div>
        </section>

        {/* ===================== BPR SECTION ===================== */}
        <section className="py-20 bg-background text-foreground relative border-t border-border">
          <div className="container mx-auto px-4 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <div className={isRtl ? "lg:order-1" : "lg:order-1"}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary text-secondary flex items-center justify-center rounded-[8px] shadow-md">
                    <GitBranch className="size-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{t("bpr.title")}</h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                  {t("bpr.description")}
                </p>

                <div className="space-y-6">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="p-6 border border-border bg-card hover:border-secondary/50 hover:shadow-md transition-all rounded-[8px] group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-4">
                          <span className="text-muted-foreground group-hover:text-secondary transition-colors font-bold text-xl font-heading">
                            {String(num).padStart(2, "0")}
                          </span>
                          <span className="text-foreground font-bold text-lg">{t(`bpr.item${num}.title`)}</span>
                        </div>
                        <span className="text-primary font-bold bg-muted px-3 py-1 rounded-[4px] font-heading text-sm">
                          {t(`bpr.item${num}.price`)}
                        </span>
                      </div>
                      <p className={`text-muted-foreground text-sm mt-3 ${isRtl ? "pe-10" : "ps-10"}`}>
                        {t(`bpr.item${num}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={isRtl ? "lg:order-2" : "lg:order-2"}>
                <div className="relative group mt-8 lg:mt-0">
                  <div
                    className={`absolute -inset-4 border-2 border-secondary/20 bg-secondary/5 transform rounded-[12px] ${
                      isRtl ? "translate-x-4 translate-y-4" : "-translate-x-4 translate-y-4"
                    }`}
                  />
                  <div className="relative h-75 md:h-125 lg:h-150 border border-border overflow-hidden rounded-[12px] shadow-lg">
                    <Image
                      src="/images/03-deepintaj-bpr-workshop-planning.png"
                      alt={t("bpr.imageAlt")}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ENGINEERING SERVICES ===================== */}
        <section className="py-20 bg-card text-foreground relative">
          <div className="container mx-auto px-4 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative group mt-8 lg:mt-0">
                <div
                  className={`absolute -inset-4 border-2 border-primary/10 bg-primary/5 transform rounded-[12px] ${
                    isRtl ? "-translate-x-4 translate-y-4" : "translate-x-4 translate-y-4"
                  }`}
                />
                <div className="relative h-75 md:h-125 lg:h-150 border border-border overflow-hidden rounded-[12px] shadow-lg">
                  <Image
                    src="/images/05-deepintaj-specialized-engineering-service.png"
                    alt={t("engineering.imageAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={isRtl ? "pe-0 lg:pe-12" : "ps-0 lg:ps-12"}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary text-secondary flex items-center justify-center rounded-[8px] shadow-md">
                    <Building className="size-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{t("engineering.title")}</h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                  {t("engineering.description")}
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Wrench, key: "item1" },
                    { icon: Home, key: "item2" },
                    { icon: Eye, key: "item3" },
                  ].map(({ icon: Icon, key }) => (
                    <div
                      key={key}
                      className="p-6 border border-neutral-200 bg-neutral-50 hover:border-secondary/50 hover:shadow-md transition-all rounded-[8px] group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-4">
                          <Icon
                            className="size-6 text-muted-foreground group-hover:text-secondary transition-colors"
                            aria-hidden="true"
                          />
                          <span className="text-foreground font-bold text-lg">{t(`engineering.${key}.title`)}</span>
                        </div>
                        <span className="text-primary font-bold bg-card px-3 py-1 rounded-[4px] border border-border font-heading text-sm">
                          {t(`engineering.${key}.price`)}
                        </span>
                      </div>
                      <p className={`text-muted-foreground text-sm mt-3 ${isRtl ? "pe-10" : "ps-10"}`}>
                        {t(`engineering.${key}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== METHODOLOGY ===================== */}
        <section
          id="methodology"
          className="py-24 bg-primary text-primary-foreground relative border-y border-primary-foreground/10"
        >
          <div className="absolute inset-0 blueprint-underlay opacity-20" />
          <div className="container mx-auto px-4 md:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-secondary mb-4 block font-bold text-lg font-heading uppercase tracking-wider">
                {t("methodology.label")}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">{t("methodology.heading")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {methodologySteps.map((step, i) => (
                <div
                  key={i}
                  className={`relative z-10 bg-primary-foreground/5 border border-primary-foreground/10 p-8 pt-12 hover:border-secondary transition-colors backdrop-blur-sm rounded-[12px] ${
                    i % 2 === 1 ? "md:mt-12" : ""
                  }`}
                >
                  <div
                    className={`absolute top-0 ${
                      isRtl ? "inset-e-8" : "inset-s-8"
                    } transform -translate-y-1/2 w-12 h-12 ${
                      i % 2 === 0 ? "bg-secondary text-primary" : "bg-card text-primary"
                    } font-bold text-xl flex items-center justify-center rounded-[8px] shadow-lg font-heading`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-4">{step.title}</h4>
                  <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== WHY DEEPINTAJ ===================== */}
        <section
          id="why"
          className="py-24 bg-background text-foreground relative overflow-hidden border-b border-border"
        >
          <div className="container mx-auto px-4 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <span className="text-secondary mb-4 block font-bold text-lg font-heading uppercase tracking-wider">
                  {t("whyDeepintaj.label")}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">
                  {t("whyDeepintaj.heading")}
                </h2>

                <div
                  className={`space-y-10 ${isRtl ? "border-e-4 border-border pe-8" : "border-s-4 border-border ps-8"}`}
                >
                  {[
                    { icon: Award, key: "item1" },
                    { icon: ShieldCheck, key: "item2" },
                    { icon: TrendingUp, key: "item3" },
                  ].map(({ icon: Icon, key }) => (
                    <div key={key} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Icon className="size-7 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                          {t(`whyDeepintaj.${key}.title`)}
                        </h4>
                        <p className="text-lg text-muted-foreground">{t(`whyDeepintaj.${key}.description`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="h-75 md:h-125 lg:h-150 relative rounded-[16px] overflow-hidden shadow-xl">
                <Image
                  src="/images/06-deepintaj-why-deepintaj.png"
                  alt={t("whyDeepintaj.imageAlt")}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ASSESSMENT CTA ===================== */}
        <section
          id="assessment"
          className="py-24 relative bg-primary text-primary-foreground border-y border-primary-foreground/10 overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/04-deepintaj-cta-technical-background.png"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
          </div>
          <div
            className={`absolute inset-0 bg-linear-to-l ${
              isRtl ? "from-primary/80 to-transparent" : "from-transparent to-primary/80"
            }`}
          />
          <div className="container mx-auto px-4 md:px-16 relative z-10">
            <div className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/20 p-10 md:p-14 rounded-[16px] max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
              <div className="flex-1">
                <div className="inline-block bg-secondary text-primary px-4 py-2 text-sm font-bold font-heading uppercase tracking-wider mb-6 rounded-[4px]">
                  {t("assessment.badge")}
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
                  {t("assessment.heading")}
                </h3>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mb-8 leading-relaxed">
                  {t("assessment.description")}
                </p>
                <ul className="space-y-4 text-lg text-primary-foreground/90 font-heading">
                  <li className="flex items-center gap-3">
                    <span className="text-secondary text-2xl">&#10003;</span>
                    {t("assessment.item1")}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary text-2xl">&#10003;</span>
                    {t("assessment.item2")}
                  </li>
                </ul>
              </div>

              <div className="shrink-0 text-center flex flex-col items-center bg-primary/50 p-8 rounded-[12px] border border-primary-foreground/10">
                <div className="text-5xl font-extrabold text-secondary mb-2">
                  {t("assessment.price")} <span className="text-2xl">{t("assessment.currency")}</span>
                </div>
                <div className="text-sm text-primary-foreground/60 font-heading uppercase tracking-wider mb-8">
                  {t("assessment.priceLabel")}
                </div>
                <a
                  href="#contact"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                    className:
                      "rounded-[4px] font-bold text-lg hover:bg-white transition-all w-full text-center shadow-lg px-10 py-4 h-auto",
                  })}
                >
                  {t("assessment.cta")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section
          id="contact"
          className="py-24 relative overflow-hidden bg-primary text-primary-foreground border-t border-primary-foreground/10"
        >
          <div className="container mx-auto px-4 md:px-16 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                  {t("contact.heading")}
                </h2>
                <p className="text-lg text-primary-foreground/70">{t("contact.subheading")}</p>
              </div>

              <form className="bg-primary-foreground/5 p-10 border border-primary-foreground/10 shadow-2xl rounded-[16px] backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div>
                      <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                        {t("contact.nameLabel")}{" "}
                        <span className="text-secondary">{t("contact.requiredIndicator")}</span>
                      </Label>
                      <Input
                        required
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] h-auto"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                        {t("contact.phoneLabel")}{" "}
                        <span className="text-secondary">{t("contact.requiredIndicator")}</span>
                      </Label>
                      <Input
                        required
                        type="tel"
                        dir="ltr"
                        placeholder={t("contact.phonePlaceholder")}
                        className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] text-end h-auto"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                      {t("contact.emailLabel")}
                    </Label>
                    <Input
                      type="email"
                      dir="ltr"
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] text-end h-auto"
                    />
                  </div>

                  {/* Service Select */}
                  <div>
                    <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                      {t("contact.serviceLabel")}
                    </Label>
                    <Select defaultValue={t("contact.serviceOption1")}>
                      <SelectTrigger
                        className={`w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] h-auto data-[size=default]:h-auto ${
                          isRtl ? "text-end" : "text-start"
                        }`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        align={isRtl ? "end" : "start"}
                        className="bg-primary border-primary-foreground/20 text-primary-foreground rounded-[4px]"
                      >
                        {serviceOptions.map((num) => (
                          <SelectItem
                            key={num}
                            value={t(`contact.serviceOption${num}`)}
                            className="text-primary-foreground focus:bg-secondary/10"
                          >
                            {t(`contact.serviceOption${num}`)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div>
                    <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                      {t("contact.descriptionLabel")}
                    </Label>
                    <Textarea
                      placeholder={t("contact.descriptionPlaceholder")}
                      rows={4}
                      className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="w-full py-5 text-lg font-bold hover:bg-white transition-colors rounded-[4px] mt-4 h-auto"
                  >
                    {t("contact.submitButton")}
                  </Button>

                  {/* WhatsApp Link */}
                  <div className="text-center mt-6">
                    <a
                      href="https://wa.me/966590029324"
                      target="__blank"
                      className="inline-flex items-center gap-3 text-primary-foreground/70 hover:text-green-400 transition-colors text-base font-heading"
                    >
                      <WhatsAppIcon className="size-6" />
                      {t("contact.whatsappLink")}
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-[#050C17] border-t border-primary-foreground/10 text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-20 max-w-7xl mx-auto w-full">
          {/* Logo Column */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/deepintaj-logo-transparent.png"
              alt={t("logoAlt")}
              width={160}
              height={64}
              className="h-20 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/60 font-heading uppercase tracking-wider mt-2">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            {/* <a href="#services" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
              {t("footer.servicesTitle")}
            </a> */}
            <a href="#hero" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
              {t("header.home")}
            </a>
            <a href="#services" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
              {t("header.services")}
            </a>
            <a href="#methodology" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
              {t("header.methodology")}
            </a>
            <a href="#why" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
              {t("header.why")}
            </a>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
              {t("footer.location1")}
            </a>
            <a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
              {t("footer.location2")}
            </a>
          </div>

          {/* WhatsApp QR Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm text-primary-foreground/80 font-heading uppercase tracking-wider mb-3">
              {t("footer.whatsappQrTitle")}
            </h4>
            <div className="bg-card p-2 rounded-[8px] inline-block">
              <Image
                src="/images/qr-code-whatsapp.png"
                alt={t("footer.whatsappQrAlt")}
                width={144}
                height={144}
                className="w-32 md:w-36 h-auto"
                unoptimized
              />
            </div>
            <p className="text-xs text-primary-foreground/50 mt-3 text-center md:text-start max-w-36">
              {t("footer.whatsappQrCaption")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
