import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import type { MenuCategory } from "../data/MenuTypes";

type Props = {
  categories: MenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function CategoryTabs({ categories, activeId, onSelect }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Aktif sekme yatayda görünür kalsın
  useEffect(() => {
    const scroller = scrollerRef.current;
    const tab = scroller?.querySelector<HTMLElement>(`[data-tab="${activeId}"]`);
    if (!scroller || !tab) return;
    scroller.scrollTo({
      left: tab.offsetLeft - scroller.clientWidth / 2 + tab.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 shadow-sm backdrop-blur-md">
      <div
        ref={scrollerRef}
        className="mx-auto flex max-w-2xl gap-2 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              data-tab={category.id}
              onClick={() => onSelect(category.id)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                isActive ? "text-white" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="qrmenu-active-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-orange-500 shadow-md shadow-red-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">
                {category.icon} {category.title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
