import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/SectionHeading";

type TFunction = (key: string) => string;

type AudienceSectionProps = {
  t: TFunction;
};

export function AudienceSection({ t }: AudienceSectionProps) {
  const audiencePills = [
    t("audience.pill1"),
    t("audience.pill2"),
    t("audience.pill3"),
    t("audience.pill4"),
    t("audience.pill5"),
    t("audience.pill6"),
  ];

  return (
    <SectionWrapper className="py-20 bg-background border-b border-border">
      <div className="text-center max-w-4xl mx-auto">
        <SectionHeading
          label={t("audience.label")}
          heading={t("audience.heading")}
          className="mb-12"
        />
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
    </SectionWrapper>
  );
}
