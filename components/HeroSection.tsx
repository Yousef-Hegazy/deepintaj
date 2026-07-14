import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

function DirectionalArrow({ locale }: { locale: string }) {
  const Icon = locale === "ar" ? ArrowLeft : ArrowRight;
  return <Icon className="size-5" aria-hidden="true" />;
}

type TFunction = (key: string) => string;

type HeroSectionProps = {
  locale: string;
  t: TFunction;
};

export function HeroSection({ locale, t }: HeroSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
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
  );
}
