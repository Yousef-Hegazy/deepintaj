"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const NAV_ITEMS = [
  { href: "#", labelKey: "header.home", sectionId: "hero" },
  { href: "#services", labelKey: "header.services", sectionId: "services" },
  { href: "#methodology", labelKey: "header.methodology", sectionId: "methodology" },
  { href: "#why", labelKey: "header.why", sectionId: "why" },
  { href: "#contact", labelKey: "header.contact", sectionId: "contact" },
];

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default function HeaderNav({ translations }: { translations: Record<string, string> }) {
  const sectionIds = NAV_ITEMS.map((item) => item.sectionId);
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="hidden md:flex items-center gap-12">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.sectionId;
        return (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "transition-all text-lg",
              isActive || (activeSection === "#" && item.href === "#")
                ? "text-secondary border-b-2 border-secondary pb-1 font-bold"
                : "text-primary-foreground/80 hover:text-secondary"
            )}
          >
            {translations[item.labelKey]}
          </a>
        );
      })}
    </nav>
  );
}
