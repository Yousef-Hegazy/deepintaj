import Image from "next/image";

type TFunction = (key: string) => string;

type SiteFooterProps = {
  t: TFunction;
};

export function SiteFooter({ t }: SiteFooterProps) {
  return (
    <footer className="bg-[#050C17] border-t border-primary-foreground/10 text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-20 max-w-7xl mx-auto w-full">
        <div className="mb-8 md:mb-0">
          <Image
            src="/images/deepintaj-logo-transparent.png"
            alt={t("logoAlt")}
            width={160}
            height={64}
            className="h-20 w-auto object-contain brightness-0 invert"
          />
          <p className="text-sm text-primary-foreground/60 font-heading uppercase tracking-wider mt-2">
            {t("footer.tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a href="#hero" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
            {t("header.home")}
          </a>
          <a href="#services" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
            {t("header.services")}
          </a>
          <a href="#methodology" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
            {t("header.methodology")}
          </a>
          <a href="#why" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
            {t("header.why")}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
            {t("footer.location1")}
          </a>
          <a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
            {t("footer.location2")}
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-sm text-primary-foreground/80 font-heading uppercase tracking-wider mb-3">
            {t("footer.whatsappQrTitle")}
          </h4>
          <div className="bg-card p-2 rounded-[8px] inline-block">
            <Image
              src="/images/qr-code-whatsapp.png"
              alt={t("footer.whatsappQrAlt")}
              width={144}
              height={144}
              className="w-32 md:w-36 h-auto"
              unoptimized
            />
          </div>
          <p className="text-xs text-primary-foreground/50 mt-3 text-center md:text-start max-w-36">
            {t("footer.whatsappQrCaption")}
          </p>
        </div>
      </div>
    </footer>
  );
}
