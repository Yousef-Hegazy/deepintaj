import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendServiceEmail } from "./actions";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

type TFunction = (key: string) => string;

type ContactSectionProps = {
  locale: string;
  t: TFunction;
};

export function ContactSection({ locale, t }: ContactSectionProps) {
  const isRtl = locale === "ar";
  const serviceOptions = [1, 2, 3, 4];

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

          <form
            action={sendServiceEmail}
            className="bg-primary-foreground/5 p-10 border border-primary-foreground/10 shadow-2xl rounded-[16px] backdrop-blur-sm"
          >
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                    {t("contact.nameLabel")} <span className="text-secondary">{t("contact.requiredIndicator")}</span>
                  </Label>
                  <Input
                    required
                    name="name"
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] h-auto"
                  />
                </div>

                <div>
                  <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                    {t("contact.phoneLabel")} <span className="text-secondary">{t("contact.requiredIndicator")}</span>
                  </Label>
                  <Input
                    required
                    type="tel"
                    dir="ltr"
                    name="phone"
                    placeholder={t("contact.phonePlaceholder")}
                    className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] text-end h-auto"
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                  {t("contact.emailLabel")}
                </Label>
                <Input
                  required
                  type="email"
                  dir="ltr"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] text-end h-auto"
                />
              </div>

              <div>
                <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                  {t("contact.serviceLabel")}
                </Label>
                <Select required name="serviceType" defaultValue={t("contact.serviceOption1")}>
                  <SelectTrigger
                    className={`w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] h-auto data-[size=default]:h-auto ${
                      isRtl ? "text-end" : "text-start"
                    }`}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent
                    align={isRtl ? "end" : "start"}
                    className="bg-primary border-primary-foreground/20 text-primary-foreground rounded-[4px]"
                  >
                    {serviceOptions.map((num) => (
                      <SelectItem
                        key={num}
                        value={t(`contact.serviceOption${num}`)}
                        className="text-primary-foreground focus:bg-secondary/10"
                      >
                        {t(`contact.serviceOption${num}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
                  {t("contact.descriptionLabel")}
                </Label>
                <Textarea
                  required
                  placeholder={t("contact.descriptionPlaceholder")}
                  rows={4}
                  name="description"
                  className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full py-5 text-lg font-bold hover:bg-white transition-colors rounded-[4px] mt-4 h-auto"
              >
                {t("contact.submitButton")}
              </Button>

              <div className="text-center mt-6">
                <a
                  href="https://wa.me/966590029324"
                  target="__blank"
                  className="inline-flex items-center gap-3 text-primary-foreground/70 hover:text-green-400 transition-colors text-base font-heading"
                >
                  <WhatsAppIcon className="size-6" />
                  {t("contact.whatsappLink")}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
