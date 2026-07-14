import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      <div className="container mx-auto px-4 md:px-16">{children}</div>
    </section>
  );
}
