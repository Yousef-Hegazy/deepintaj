import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

function DirectionalArrow({ locale }: { locale: string }) {
  const Icon = locale === "ar" ? ArrowLeft : ArrowRight;
  return (
    <Icon
      className="size-5 transition-transform duration-300 group-hover/cta:translate-x-1 rtl:group-hover/cta:-translate-x-1"
      aria-hidden="true"
    />
  );
}

type TFunction = (key: string) => string;

type HeroSectionProps = {
  locale: string;
  t: TFunction;
};

export function HeroSection({ locale, t }: HeroSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-primary"
    >
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/02-deepintaj-hero-mobile.png"
            alt=""
            fill
            className="object-cover mix-blend-luminosity opacity-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/01-deepintaj-hero-desktop-approved.png"
            alt=""
            fill
            className="object-cover mix-blend-luminosity opacity-50"
            priority
            sizes="100vw"
            style={{ objectPosition: isRtl ? "left center" : "right center" }}
          />
        </div>
        {/* Gradient overlay — heavier coverage for text legibility */}
        <div
          className={`absolute inset-0 bg-linear-to-r ${
            isRtl
              ? "from-primary/95 via-primary/85 to-transparent"
              : "from-transparent via-primary/85 to-primary/95"
          }`}
        />
        {/* Subtle radial glow behind the headline */}
        <div className="absolute inset-0 radial-glow-secondary opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-16 relative z-10 flex flex-col justify-center stagger-children">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-3 mb-10 border border-secondary/30 bg-secondary/5 px-5 py-2.5 animate-fade-in">
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-60" />
              <span className="relative inline-flex size-3 rounded-full bg-secondary" />
            </span>
            <span className="text-sm text-primary-foreground/90 tracking-widest uppercase font-medium font-sans">
              {t("hero.eyebrow")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] md:text-7xl font-extrabold text-primary-foreground mb-10 leading-[1.05] tracking-tight animate-fade-up">
            {t("hero.headlineLine1")}
            <br />
            {t("hero.headlineLine2")}
            <br />
            <span className="text-secondary">
              {t("hero.headlineHighlight")}
            </span>
          </h1>

          {/* Subheadline with gold accent bar */}
          <p
            className={`text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-14 leading-relaxed animate-fade-up ${
              isRtl
                ? "border-e-[3px] border-secondary pe-6"
                : "border-s-[3px] border-secondary ps-6"
            }`}
          >
            {t("hero.subheadline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5 animate-fade-up">
            <a
              href="#assessment"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className:
                  "group/cta rounded-[4px] font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-secondary/20 px-9 py-4 h-auto",
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
                  "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground rounded-[4px] font-bold text-lg hover:border-secondary/50 hover:text-secondary hover:bg-secondary/5 transition-all duration-300 px-9 py-4 h-auto",
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
