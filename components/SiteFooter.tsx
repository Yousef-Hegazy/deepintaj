import Image from "next/image";

type TFunction = (key: string) => string;

type SiteFooterProps = {
  t: TFunction;
};

export function SiteFooter({ t }: SiteFooterProps) {
  return (
    <footer className="relative bg-[#060E1A] border-t border-primary-foreground/10 text-primary-foreground overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 px-4 md:px-16 py-24 max-w-7xl mx-auto w-full">
        {/* Brand column */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/images/deepintaj-logo-transparent.png"
            alt={t("logoAlt")}
            width={160}
            height={64}
            className="h-20 w-auto object-contain brightness-0 invert mb-4"
          />
          <p className="text-sm text-primary-foreground/50 font-heading uppercase tracking-widest leading-relaxed max-w-52">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm text-primary-foreground/40 font-heading uppercase tracking-widest mb-2">
            {t("header.home")}
          </h4>
          <a href="#hero" className="text-base text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
            {t("header.home")}
          </a>
          <a href="#services" className="text-base text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
            {t("header.services")}
          </a>
          <a href="#methodology" className="text-base text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
            {t("header.methodology")}
          </a>
          <a href="#why" className="text-base text-primary-foreground/70 hover:text-secondary transition-colors duration-200">
            {t("header.why")}
          </a>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm text-primary-foreground/40 font-heading uppercase tracking-widest mb-2">
            {t("footer.location1")}
          </h4>
          <span className="text-base text-primary-foreground/70">
            {t("footer.location1")}
          </span>
          <span className="text-base text-primary-foreground/70">
            {t("footer.location2")}
          </span>
        </div>

        {/* WhatsApp QR */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-sm text-primary-foreground/40 font-heading uppercase tracking-widest mb-4">
            {t("footer.whatsappQrTitle")}
          </h4>
          <div className="bg-white/5 p-3 rounded-[8px] border border-primary-foreground/10">
            <Image
              src="/images/qr-code-whatsapp.png"
              alt={t("footer.whatsappQrAlt")}
              width={144}
              height={144}
              className="w-32 md:w-36 h-auto"
              unoptimized
            />
          </div>
          <p className="text-xs text-primary-foreground/40 mt-4 text-center md:text-start max-w-36 leading-relaxed">
            {t("footer.whatsappQrCaption")}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/5 py-6 px-4 md:px-16 max-w-7xl mx-auto w-full">
        <p className="text-xs text-primary-foreground/30 text-center md:text-start">
          &copy; {new Date().getFullYear()} Deepintaj
        </p>
      </div>
    </footer>
  );
}
