import { SectionHeading } from "@/components/SectionHeading";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

type TFunction = (key: string) => string;

type WhyDeepintajSectionProps = {
  locale: string;
  t: TFunction;
};

export function WhyDeepintajSection({ locale, t }: WhyDeepintajSectionProps) {
  const isRtl = locale === "ar";

  const items = [
    { icon: Award, key: "item1" },
    { icon: ShieldCheck, key: "item2" },
    { icon: TrendingUp, key: "item3" },
  ];

  return (
    <section
      id="why"
      className="py-24 bg-background text-foreground relative overflow-hidden border-b border-border"
    >
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label={t("whyDeepintaj.label")}
              heading={t("whyDeepintaj.heading")}
              variant="left-accent"
              className="mb-10"
            />

            <div
              className={`space-y-10 ${isRtl ? "border-e-2 border-secondary/30 pe-8" : "border-s-2 border-secondary/30 ps-8"}`}
            >
              {items.map(({ icon: Icon, key }) => (
                <div key={key} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Icon className="size-7 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {t(`whyDeepintaj.${key}.title`)}
                    </h4>
                    <p className="text-lg text-muted-foreground">{t(`whyDeepintaj.${key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-75 md:h-125 lg:h-150 relative rounded-[16px] overflow-hidden shadow-xl">
            <Image
              src="/images/06-deepintaj-why-deepintaj.png"
              alt={t("whyDeepintaj.imageAlt")}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
