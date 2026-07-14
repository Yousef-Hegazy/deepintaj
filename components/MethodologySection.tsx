import { SectionHeading } from "@/components/SectionHeading";

type TFunction = (key: string) => string;

type MethodologySectionProps = {
  locale: string;
  t: TFunction;
};

export function MethodologySection({ locale, t }: MethodologySectionProps) {
  const isRtl = locale === "ar";

  const methodologySteps = [
    { title: t("methodology.step1.title"), description: t("methodology.step1.description") },
    { title: t("methodology.step2.title"), description: t("methodology.step2.description") },
    { title: t("methodology.step3.title"), description: t("methodology.step3.description") },
    { title: t("methodology.step4.title"), description: t("methodology.step4.description") },
  ];

  return (
    <section
      id="methodology"
      className="py-24 bg-primary text-primary-foreground relative border-y border-primary-foreground/10"
    >
      <div className="absolute inset-0 blueprint-underlay opacity-20" />
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading
            label={t("methodology.label")}
            heading={t("methodology.heading")}
            headingClassName="text-primary-foreground"
          />
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
  );
}
