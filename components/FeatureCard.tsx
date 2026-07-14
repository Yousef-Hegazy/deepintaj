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
        "p-6 border hover:shadow-md transition-all rounded-[8px] group",
        className,
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-4">
          {number != null && (
            <span className="text-muted-foreground group-hover:text-secondary transition-colors font-bold text-xl font-heading">
              {String(number).padStart(2, "0")}
            </span>
          )}
          {Icon && (
            <Icon
              className="size-6 text-muted-foreground group-hover:text-secondary transition-colors"
              aria-hidden="true"
            />
          )}
          <span className="text-foreground font-bold text-lg">{title}</span>
        </div>
        <span
          className={cn(
            "text-primary font-bold px-3 py-1 rounded-[4px] font-heading text-sm",
            priceClassName,
          )}
        >
          {price}
        </span>
      </div>
      <p className={cn("text-muted-foreground text-sm mt-3", isRtl ? "pe-10" : "ps-10")}>
        {description}
      </p>
    </div>
  );
}
