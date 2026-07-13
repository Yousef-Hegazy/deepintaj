import { Globe } from "lucide-react";
import Link from "next/link";

export function LocaleSwitch({ locale }: { locale: string }) {
  const targetLocale = locale === "ar" ? "en" : "ar";
  const label = locale === "ar" ? "English" : "العربية";

  return (
    <Link
      href={`/${targetLocale}`}
      className="cursor-pointer flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-base font-medium"
      aria-label={label}
    >
      <Globe className="size-4" aria-hidden="true" />
      {label}
    </Link>
  );
}
