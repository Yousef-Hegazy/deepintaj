import HeaderNav from "@/components/HeaderNav";
import MobileNavDrawer from "@/components/MobileNavDrawer";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type SiteHeaderProps = {
  locale: string;
};

export default async function SiteHeader({ locale }: SiteHeaderProps) {
  const t = await getTranslations({ locale });

  return (
    <header className="bg-primary/95 sticky top-0 z-50 border-b border-primary-foreground/10 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-2 max-w-full mx-auto">
        <div className="flex items-center gap-4 shrink-0">
          <Image
            src="/images/deepintaj-logo-transparent.png"
            alt={t("logoAlt")}
            width={160}
            height={64}
            className="h-12 md:h-20 w-auto object-contain"
            priority
          />
        </div>

        <HeaderNav
          translations={{
            "header.home": t("header.home"),
            "header.services": t("header.services"),
            "header.methodology": t("header.methodology"),
            "header.why": t("header.why"),
            "header.contact": t("header.contact"),
          }}
        />

        <div className="flex items-center gap-2 md:gap-6 shrink-0">
          <span className="hidden md:inline-flex">
            <LocaleSwitch locale={locale} />
          </span>
          <span className="lg:hidden">
            <MobileNavDrawer
              translations={{
                "header.home": t("header.home"),
                "header.services": t("header.services"),
                "header.methodology": t("header.methodology"),
                "header.why": t("header.why"),
                "header.contact": t("header.contact"),
              }}
              locale={locale}
            />
          </span>
          <a
            href="#contact"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
              className: "rounded-[4px] font-bold hover:bg-white transition-colors text-base px-6 md:px-8 font-sans",
            })}
          >
            {t("header.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
