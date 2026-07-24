import { cn } from "@/lib/utils";

type SectionHeadingVariant = "centered" | "left-accent" | "simple";

type SectionHeadingProps = {
  /** Gold label above the heading. Omit for "simple" variant. */
  label?: string;
  heading: string;
  /** Visual variant. "centered" = label + heading centered with optional divider.
   * "left-accent" = label + heading left-aligned, no divider.
   * "simple" = just the heading, no label. */
  variant?: SectionHeadingVariant;
  /** Show the gold divider bar below the heading (centered variant only). */
  showDivider?: boolean;
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({
  label,
  heading,
  variant = "centered",
  showDivider,
  className,
  headingClassName,
}: SectionHeadingProps) {
  // Simple: just the heading
  if (variant === "simple") {
    return (
      <h2
        className={cn(
          "text-2xl md:text-3xl font-semibold text-foreground",
          headingClassName,
          className,
        )}
      >
        {heading}
      </h2>
    );
  }

  // Left-accent: label + heading, left-aligned, no divider
  if (variant === "left-accent") {
    return (
      <div className={className}>
        {label && (
          <span className="text-secondary mb-3 block font-bold text-lg font-heading uppercase tracking-wider">
            {label}
          </span>
        )}
        <h2
          className={cn(
            "text-2xl md:text-3xl font-semibold text-foreground",
            headingClassName,
          )}
        >
          {heading}
        </h2>
      </div>
    );
  }

  // Centered (default): label + heading centered, optional divider
  return (
    <div className={cn("text-center", className)}>
      {label && (
        <span className="text-secondary mb-4 block font-bold text-lg font-heading uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl md:text-3xl font-semibold text-foreground",
          headingClassName,
        )}
      >
        {heading}
      </h2>
      {showDivider && (
        <div className="w-24 h-1.5 bg-secondary mx-auto mt-8" />
      )}
    </div>
  );
}
