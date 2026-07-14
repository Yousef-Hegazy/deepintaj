import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  heading: string;
  showDivider?: boolean;
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({ label, heading, showDivider, className, headingClassName }: SectionHeadingProps) {
  return (
    <div className={className}>
      <span className="text-secondary mb-4 block font-bold text-lg font-heading uppercase tracking-wider">
        {label}
      </span>
      <h2 className={cn("text-2xl md:text-3xl font-semibold text-foreground", headingClassName)}>{heading}</h2>
      {showDivider && <div className="w-24 h-1.5 bg-secondary mx-auto mt-8" />}
    </div>
  );
}
