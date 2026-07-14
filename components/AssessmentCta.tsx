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
  );
}
