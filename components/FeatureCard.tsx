import { cn } from "@/lib/utils";
import type { ElementType } from "react";

type FeatureCardProps = {
  number?: number;
  icon?: ElementType;
  title: string;
  description: string;
  price: string;
  isRtl: boolean;
  className?: string;
  priceClassName?: string;
};

export function FeatureCard({
  number,
  icon: Icon,
  title,
  description,
  price,
  isRtl,
  className,
  priceClassName,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "p-6 border rounded-[8px] transition-all duration-300 group relative overflow-hidden",
        "hover:shadow-lg hover:-translate-y-0.5",
        className,
      )}
    >
      {/* Subtle gold accent line on hover */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-4">
          {number != null && (
            <span className="text-muted-foreground group-hover:text-secondary transition-colors duration-300 font-bold text-xl font-heading">
              {String(number).padStart(2, "0")}
            </span>
          )}
          {Icon && (
            <Icon
              className="size-6 text-muted-foreground group-hover:text-secondary transition-colors duration-300"
              aria-hidden="true"
            />
          )}
          <span className="text-foreground font-bold text-lg group-hover:text-foreground transition-colors duration-300">
            {title}
          </span>
        </div>
        <span
          className={cn(
            "text-primary font-bold px-3 py-1 rounded-[4px] font-heading text-sm transition-colors duration-300 group-hover:bg-secondary/10 group-hover:text-secondary",
            priceClassName,
          )}
        >
          {price}
        </span>
      </div>
      <p
        className={cn(
          "text-muted-foreground text-sm mt-3 group-hover:text-foreground/80 transition-colors duration-300",
          isRtl ? "pe-10" : "ps-10",
        )}
      >
        {description}
      </p>
    </div>
  );
}
