"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/components/HeaderNav";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

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

export default function MobileNavDrawer({
  translations,
  locale,
}: {
  translations: Record<string, string>;
  locale: string;
}) {
  const [open, setOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.sectionId);
  const activeSection = useActiveSection(sectionIds);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className="md:hidden flex items-center justify-center size-10 text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer"
        aria-label="Open menu"
      >
        <Menu className="size-6" />
      </DrawerTrigger>
      <DrawerContent className="bg-primary border-t border-primary-foreground/10">
        <div className="flex flex-col h-full px-6 pt-4 pb-8">
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <DrawerClose
              className="flex items-center justify-center size-10 text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="size-6" />
            </DrawerClose>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-1 flex-1 mt-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "block py-4 px-4 rounded-lg text-lg font-medium transition-all duration-200",
                    isActive
                      ? "text-secondary bg-secondary/10 border-s-4 border-secondary font-bold"
                      : "text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/5 border-s-4 border-transparent"
                  )}
                >
                  {translations[item.labelKey]}
                </a>
              );
            })}
          </nav>

          {/* Locale Switch */}
          <div className="pt-6 border-t border-primary-foreground/10 mt-auto">
            <LocaleSwitch locale={locale} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
