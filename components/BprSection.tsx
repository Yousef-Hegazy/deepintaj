import { FeatureCard } from "@/components/FeatureCard";
import { ImageFrame } from "@/components/ImageFrame";
import { GitBranch } from "lucide-react";

type TFunction = (key: string) => string;

type BprSectionProps = {
  locale: string;
  t: TFunction;
};

export function BprSection({ locale, t }: BprSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section className="py-20 bg-background text-foreground relative border-t border-border">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                <FeatureCard
                  key={num}
                  number={num}
                  title={t(`bpr.item${num}.title`)}
                  description={t(`bpr.item${num}.description`)}
                  price={t(`bpr.item${num}.price`)}
                  isRtl={isRtl}
                  className="border border-border bg-card hover:border-secondary/50"
                  priceClassName="bg-muted"
                />
              ))}
            </div>
          </div>

          <div className={isRtl ? "lg:order-2" : "lg:order-2"}>
            <ImageFrame
              src="/images/03-deepintaj-bpr-workshop-planning.png"
              alt={t("bpr.imageAlt")}
              isRtl={isRtl}
              borderColor="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
