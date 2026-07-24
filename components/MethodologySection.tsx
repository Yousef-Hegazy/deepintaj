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
      className="py-28 bg-primary text-primary-foreground relative border-y border-primary-foreground/10 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-underlay opacity-25" />
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading
            label={t("methodology.label")}
            heading={t("methodology.heading")}
            headingClassName="text-primary-foreground"
            variant="centered"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
          {methodologySteps.map((step, i) => (
            <div
              key={i}
              className={`animate-fade-up relative z-10 bg-primary-foreground/[0.06] border border-primary-foreground/10 p-8 pt-14 hover:border-secondary/40 hover:bg-primary-foreground/[0.1] transition-all duration-300 backdrop-blur-sm rounded-[12px] group ${
                i % 2 === 1 ? "md:mt-14" : ""
              }`}
            >
              {/* Step number badge */}
              <div
                className={`absolute top-0 ${
                  isRtl ? "inset-e-8" : "inset-s-8"
                } transform -translate-y-1/2 w-14 h-14 font-extrabold text-2xl flex items-center justify-center rounded-[8px] shadow-xl font-heading transition-transform duration-300 group-hover:scale-110 ${
                  i % 2 === 0
                    ? "bg-secondary text-primary shadow-secondary/20"
                    : "bg-card text-primary shadow-black/10"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Connecting line between steps (desktop only) */}
              {i < methodologySteps.length - 1 && (
                <div className="hidden md:block absolute top-8 w-8 h-px bg-secondary/30 -end-4 z-0" />
              )}

              <h4 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-4 group-hover:text-white transition-colors duration-300">
                {step.title}
              </h4>
              <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed group-hover:text-primary-foreground/90 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
