import { ContactForm } from "./form";

type TFunction = (key: string) => string;

type ContactSectionProps = {
  locale: string;
  t: TFunction;
};

export function ContactSection({ locale, t }: ContactSectionProps) {
  const isRtl = locale === "ar";

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-primary text-primary-foreground border-t border-primary-foreground/10"
    >
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">{t("contact.heading")}</h2>
            <p className="text-lg text-primary-foreground/70">{t("contact.subheading")}</p>
          </div>

          <ContactForm
            isRtl={isRtl}
            nameLabel={t("contact.nameLabel")}
            namePlaceholder={t("contact.namePlaceholder")}
            phoneLabel={t("contact.phoneLabel")}
            phonePlaceholder={t("contact.phonePlaceholder")}
            emailLabel={t("contact.emailLabel")}
            emailPlaceholder={t("contact.emailPlaceholder")}
            serviceLabel={t("contact.serviceLabel")}
            serviceOptions={[
              t("contact.serviceOption1"),
              t("contact.serviceOption2"),
              t("contact.serviceOption3"),
              t("contact.serviceOption4")
            ]}
            descriptionLabel={t("contact.descriptionLabel")}
            descriptionPlaceholder={t("contact.descriptionPlaceholder")}
            submitButton={t("contact.submitButton")}
            whatsappLink={t("contact.whatsappLink")}
            requiredIndicator={t("contact.requiredIndicator")}
            toastSuccess={t("contact.toastSuccess")}
            toastError={t("contact.toastError")}
            toastWhatsAppSuggestion={t("contact.toastWhatsAppSuggestion")}
          />
        </div>
      </div>
    </section>
  );
}