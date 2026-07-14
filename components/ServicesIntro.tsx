import { SectionHeading } from "@/components/SectionHeading";

type TFunction = (key: string) => string;

type ServicesIntroProps = {
  t: TFunction;
};

export function ServicesIntro({ t }: ServicesIntroProps) {
  return (
    <section id="services" className="pt-24 pb-12 relative overflow-hidden bg-card text-foreground">
      <div className="absolute inset-0 technical-grid opacity-50" />
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <SectionHeading
            label={t("servicesIntro.label")}
            heading={t("servicesIntro.heading")}
            showDivider
          />
        </div>
      </div>
    </section>
  );
}
