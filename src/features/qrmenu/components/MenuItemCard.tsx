import { motion } from "framer-motion";

import type { MenuItem } from "../data/MenuTypes";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  item: MenuItem;
  index: number;
  fallbackIcon: string;
};

export function MenuItemCard({ item, index, fallbackIcon }: Props) {
  return (
    <motion.li
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-sm)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: Math.min(index, 4) * 0.06, ease: EASE }}
      whileHover={{ y: -3, boxShadow: "0 14px 30px rgb(198 40 40 / 0.15)" }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Sol kenar renk çizgisi */}
      <span
        aria-hidden
        className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-gradient-to-b from-red-600 to-orange-400"
      />

      {/* Görsel / ikon */}
      <div className="relative h-24 w-24 shrink-0">
        <span
          aria-hidden
          className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-100 to-red-100"
        />

        {item.image ? (
          <motion.img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="relative h-24 w-24 object-cover drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
            initial={{ rotate: -120, scale: 0.6 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 70, damping: 14 }}
            whileHover={{ rotate: 25, scale: 1.08 }}
            whileTap={{ rotate: 45, scale: 1.1 }}
          />
        ) : (
          <motion.span
            role="img"
            aria-label={item.name}
            className="relative flex h-24 w-24 select-none items-center justify-center text-5xl drop-shadow-[0_6px_8px_rgba(0,0,0,0.2)]"
            initial={{ scale: 0.3, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 220, damping: 10 }}
            whileHover={{ scale: 1.15, rotate: -8 }}
            whileTap={{ scale: 1.2, rotate: 8 }}
          >
            {item.icon ?? fallbackIcon}
          </motion.span>
        )}
      </div>

      {/* Ad + açıklama */}
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold leading-tight">{item.name}</h3>
        {item.description && (
          <p className="mt-1 text-xs capitalize leading-snug text-[var(--color-text-muted)]">
            {item.description}
          </p>
        )}
      </div>

      {/* Fiyat */}
      <div className="shrink-0 text-right">
        {item.price === null ? (
          // Sadece geliştirme ortamında görünür (canlıda bu ürün gizlenir)
          <div className="rounded-lg border border-dashed border-amber-400 bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-700">
            Fiyat girilmedi
          </div>
        ) : (
          <motion.div
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-orange-500 px-3 py-1.5 text-lg font-black tabular-nums text-white shadow-md shadow-red-500/30"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
          >
            ₺{item.price}
            {/* Parıltı efekti */}
            <motion.span
              aria-hidden
              className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ left: ["-100%", "200%"] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 3.5,
                delay: (index % 5) * 0.4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </div>
    </motion.li>
  );
}
