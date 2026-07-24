import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

type TFunction = (key: string) => string;

type AssessmentCtaProps = {
  locale: string;
  t: TFunction;
};

export function AssessmentCta({ locale, t }: AssessmentCtaProps) {
  const isRtl = locale === "ar";

  return (
    <section
      id="assessment"
      className="py-32 relative bg-primary text-primary-foreground border-y border-primary-foreground/10 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0">
        <Image
          src="/images/04-deepintaj-cta-technical-background.png"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
      </div>
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-linear-to-l ${
          isRtl ? "from-primary/90 to-transparent" : "from-transparent to-primary/90"
        }`}
      />
      {/* Radial glow behind the card */}
      <div className="absolute inset-0 radial-glow-secondary opacity-40" />

      <div className="container mx-auto px-4 md:px-16 relative z-10 stagger-children">
        <div className="bg-primary-foreground/[0.06] backdrop-blur-xl border border-primary-foreground/15 p-12 md:p-16 rounded-[16px] max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl shadow-black/20">
          {/* Left: Content */}
          <div className="flex-1 animate-fade-up">
            <div className="inline-block bg-secondary text-primary px-5 py-2.5 text-sm font-bold font-heading uppercase tracking-wider mb-8 rounded-[4px] shadow-lg shadow-secondary/20">
              {t("assessment.badge")}
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-8 leading-[1.05] tracking-tight">
              {t("assessment.heading")}
            </h3>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed">
              {t("assessment.description")}
            </p>

            <ul className="space-y-5 text-lg text-primary-foreground/85 font-heading">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 size-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">&#10003;</span>
                </span>
                {t("assessment.item1")}
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 size-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">&#10003;</span>
                </span>
                {t("assessment.item2")}
              </li>
            </ul>
          </div>

          {/* Right: Pricing card */}
          <div className="shrink-0 text-center flex flex-col items-center bg-primary/60 p-10 rounded-[16px] border border-primary-foreground/10 min-w-[260px] animate-scale-in">
            <span className="text-sm text-primary-foreground/50 font-heading uppercase tracking-widest mb-6">
              {t("assessment.priceLabel")}
            </span>
            <div className="relative mb-8">
              <div className="absolute inset-0 blur-3xl bg-secondary/20 rounded-full" />
              <div className="relative text-7xl md:text-8xl font-extrabold text-secondary leading-none">
                {t("assessment.price")}
              </div>
            </div>
            <div className="text-xl text-primary-foreground/60 font-heading uppercase tracking-wider mb-10">
              {t("assessment.currency")}
            </div>
            <a
              href="#contact"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className:
                  "rounded-[4px] font-bold text-lg hover:bg-white transition-all duration-300 w-full text-center shadow-lg shadow-secondary/20 px-10 py-4 h-auto",
              })}
            >
              {t("assessment.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
