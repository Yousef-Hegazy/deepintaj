"use client";

import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "../SubmitButton";
import { sendServiceEmail } from "./actions";
import { toast } from "sonner";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

type FormProps = {
  isRtl: boolean;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  serviceLabel: string;
  serviceOptions: [string, string, string, string];
  descriptionLabel: string;
  descriptionPlaceholder: string;
  submitButton: string;
  whatsappLink: string;
  requiredIndicator: string;
  toastSuccess: string;
  toastError: string;
  toastWhatsAppSuggestion: string;
};

export function ContactForm({
  isRtl,
  nameLabel,
  namePlaceholder,
  phoneLabel,
  phonePlaceholder,
  emailLabel,
  emailPlaceholder,
  serviceLabel,
  serviceOptions,
  descriptionLabel,
  descriptionPlaceholder,
  submitButton,
  whatsappLink,
  requiredIndicator,
  toastSuccess,
  toastError,
  toastWhatsAppSuggestion
}: FormProps) {
  const [state, formAction, isPending] = useActionState(
    sendServiceEmail,
    { success: false }
  );

  useEffect(() => {
    if (state.success) {
      toast.success(toastSuccess);
    } else if (state.error) {
      toast.error(toastError, {
        action: {
          label: "WhatsApp",
          onClick: () => window.open("https://wa.me/966590029324", "_blank")
        }
      });
    }
  }, [state, toastSuccess, toastError]);

  return (
    <form action={formAction} className="bg-primary-foreground/5 p-10 border border-primary-foreground/10 shadow-2xl rounded-[16px] backdrop-blur-sm">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
              {nameLabel} <span className="text-secondary">{requiredIndicator}</span>
            </Label>
            <Input
              required
              name="name"
              placeholder={namePlaceholder}
              className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] h-auto"
            />
          </div>

          <div>
            <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
              {phoneLabel} <span className="text-secondary">{requiredIndicator}</span>
            </Label>
            <Input
              required
              type="tel"
              dir="ltr"
              name="phone"
              placeholder={phonePlaceholder}
              className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] text-end h-auto"
            />
          </div>
        </div>

        <div>
          <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
            {emailLabel}
          </Label>
          <Input
            required
            type="email"
            dir="ltr"
            name="email"
            placeholder={emailPlaceholder}
            className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] text-end h-auto"
          />
        </div>

        <div>
          <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
            {serviceLabel}
          </Label>
          <Select required name="serviceType" defaultValue={serviceOptions[0]}>
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
              {serviceOptions.map((option, i) => (
                <SelectItem
                  key={i}
                  value={option}
                  className="text-primary-foreground focus:bg-secondary/10"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-sm text-primary-foreground/80 mb-3 font-heading uppercase tracking-wider font-medium">
            {descriptionLabel}
          </Label>
          <Textarea
            required
            placeholder={descriptionPlaceholder}
            rows={4}
            name="description"
            className="w-full bg-primary border border-primary-foreground/20 px-5 py-4 text-base focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-secondary text-primary-foreground rounded-[4px] resize-none"
          />
        </div>

        <SubmitButton>{submitButton}</SubmitButton>

        <div className="text-center mt-6">
          <a
            href="https://wa.me/966590029324"
            target="__blank"
            className="inline-flex items-center gap-3 text-primary-foreground/70 hover:text-green-400 transition-colors text-base font-heading"
          >
            <WhatsAppIcon className="size-6" />
            {whatsappLink}
          </a>
        </div>
      </div>
    </form>
  );
}