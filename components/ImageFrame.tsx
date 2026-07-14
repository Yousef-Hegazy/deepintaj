import { cn } from "@/lib/utils";
import Image from "next/image";

type ImageFrameProps = {
  src: string;
  alt: string;
  isRtl: boolean;
  sizes?: string;
  borderColor?: "secondary" | "primary";
};

export function ImageFrame({ src, alt, isRtl, sizes, borderColor = "secondary" }: ImageFrameProps) {
  const isSecondary = borderColor === "secondary";
  return (
    <div className="relative group mt-8 lg:mt-0">
      <div
        className={cn(
          "absolute -inset-4 border-2 transform rounded-[12px]",
          isSecondary
            ? "border-secondary/20 bg-secondary/5"
            : "border-primary/10 bg-primary/5",
          isRtl
            ? isSecondary
              ? "translate-x-4 translate-y-4"
              : "-translate-x-4 translate-y-4"
            : isSecondary
              ? "-translate-x-4 translate-y-4"
              : "translate-x-4 translate-y-4"
        )}
      />
      <div className="relative h-75 md:h-125 lg:h-150 border border-border overflow-hidden rounded-[12px] shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={sizes ?? "(max-width: 1024px) 100vw, 50vw"}
        />
      </div>
    </div>
  );
}
