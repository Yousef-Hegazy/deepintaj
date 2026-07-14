import { FeatureCard } from "@/components/FeatureCard";
import { ImageFrame } from "@/components/ImageFrame";
import { Building, Eye, Home, Wrench } from "lucide-react";

type TFunction = (key: string) => string;

type EngineeringSectionProps = {
  locale: string;
  t: TFunction;
};

export function EngineeringSection({ locale, t }: EngineeringSectionProps) {
  const isRtl = locale === "ar";

  const items = [
    { icon: Wrench, key: "item1" },
    { icon: Home, key: "item2" },
    { icon: Eye, key: "item3" },
  ];

  return (
    <section className="py-20 bg-card text-foreground relative">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative group mt-8 lg:mt-0">
            <ImageFrame
              src="/images/05-deepintaj-specialized-engineering-service.png"
              alt={t("engineering.imageAlt")}
              isRtl={isRtl}
              borderColor="primary"
            />
          </div>

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
              {items.map(({ icon, key }) => (
                <FeatureCard
                  key={key}
                  icon={icon}
                  title={t(`engineering.${key}.title`)}
                  description={t(`engineering.${key}.description`)}
                  price={t(`engineering.${key}.price`)}
                  isRtl={isRtl}
                  className="border border-neutral-200 bg-neutral-50 hover:border-secondary/50"
                  priceClassName="bg-card border border-border"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
