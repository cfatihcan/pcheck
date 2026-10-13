import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

import { NapoliLogo } from "@/assets/images/hero";
import { MargaritaPizza, SuperPizza } from "@/assets/images/pizza";
import { FooterData } from "@/components/layout/Footer/FooterData";
import { pizzas } from "@/features/PizzaShowcase/PizzaData";

import { CategoryTabs } from "../components/CategoryTabs";
import { MenuItemCard } from "../components/MenuItemCard";
import { getVisibleCategories } from "../data/MenuData";

/**
 * QR menü sayfası — sadece /qrmenu adresinden erişilir.
 * Ana sayfada / navbar'da linki yoktur, Navbar ve Footer kullanmaz.
 * Ürünler data/MenuData.ts'den gelir (pizzalar PizzaData.ts'den otomatik).
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export function QrMenuPage() {
  const categories = useMemo(() => getVisibleCategories(), []);
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

  // Kaydırdıkça aktif kategoriyi güncelle
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const sections = document.querySelectorAll<HTMLElement>("[data-category]");
      let current = categories[0]?.id ?? "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 120) {
          current = section.dataset.category ?? current;
        }
      });
      // Sayfanın sonuna gelindiyse son kategori aktif olsun
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1]?.dataset.category ?? current;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [categories]);

  const scrollToCategory = useCallback((id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "New Napoli Karşıyaka";

    // Arama motorlarında listelenmesin
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      document.title = prevTitle;
      robots.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Başlık */}
      <header className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-orange-500 px-4 pb-20 pt-8 text-center text-white">
        {/* Arka planda yavaşça dönen pizzalar */}
        <motion.img
          src={SuperPizza}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-10 w-48 opacity-25"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={MargaritaPizza}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-14 w-52 opacity-25"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Parlayan ışık halkası */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-6 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-300/30 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <motion.img
            src={NapoliLogo}
            alt="New Napoli Karşıyaka"
            className="mx-auto h-20 w-auto object-contain drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.6, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
          />

          <motion.h1
            className="mt-3 text-4xl font-black tracking-tight drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          >
            Menü
          </motion.h1>

          <motion.p
            className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white/95 ring-1 ring-white/25 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: EASE }}
          >
            🍕 Tüm pizzalarımız orta boy · {pizzas[0]?.size ?? "26 cm"}
          </motion.p>
        </div>

        {/* Alt dalga */}
        <svg
          aria-hidden
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute inset-x-0 -bottom-px h-12 w-full fill-[var(--color-background)]"
        >
          <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,16 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </header>

      {/* Kategori sekmeleri (yapışkan) */}
      <CategoryTabs categories={categories} activeId={activeId} onSelect={scrollToCategory} />

      {/* Liste */}
      <main className="mx-auto w-full max-w-2xl px-4 pb-10 pt-4">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            data-category={category.id}
            className="mb-8 scroll-mt-20"
          >
            <motion.h2
              className="mb-3 flex items-center gap-2 text-xl font-black tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.title}
              <span className="ml-1 h-0.5 flex-1 rounded-full bg-gradient-to-r from-red-500/40 to-transparent" />
            </motion.h2>

            <ul className="space-y-3">
              {category.items.map((item, index) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  fallbackIcon={category.icon}
                />
              ))}
            </ul>
          </section>
        ))}

        <motion.footer
          className="mt-10 text-center text-xs text-[var(--color-text-muted)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href={`tel:${FooterData.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileTap={{ scale: 0.95 }}
          >
            📞 {FooterData.contact.phone}
          </motion.a>
          <p className="mt-3">{FooterData.contact.address}</p>
        </motion.footer>
      </main>
    </div>
  );
}
