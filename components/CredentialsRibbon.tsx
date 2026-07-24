import { BadgeCheck, Building2, Factory, HardHat } from "lucide-react";
import { Fragment } from "react";
import type { ElementType } from "react";

type TFunction = (key: string) => string;

type Credential = {
  icon: ElementType;
  key: string;
};

const credentials: Credential[] = [
  { icon: BadgeCheck, key: "experience" },
  { icon: HardHat, key: "certifiedEngineer" },
  { icon: Factory, key: "licensedConsultant" },
  { icon: Building2, key: "certifiedInspector" },
];

type CredentialsRibbonProps = {
  t: TFunction;
};

export function CredentialsRibbon({ t }: CredentialsRibbonProps) {
  return (
    <div className="w-full border-y border-primary-foreground/10 bg-primary/90 backdrop-blur-sm py-6 relative z-20">
      <div className="container mx-auto px-4 md:px-16 ltr:md:px-6">
        <div className="flex flex-wrap justify-between items-center gap-8 text-sm text-primary-foreground/90 font-medium font-sans uppercase tracking-wider">
          {credentials.map(({ icon: Icon, key }, index) => (
            <Fragment key={key}>
              {index > 0 && <div className="w-1.5 h-1.5 bg-primary-foreground/20 rounded-full hidden md:block" />}
              <div className="flex items-center gap-3">
                <Icon className="size-6 text-secondary" aria-hidden="true" />
                <span className="text-[16px]"> {t(`credentials.${key}`)}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
