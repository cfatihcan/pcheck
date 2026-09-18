import { motion } from "framer-motion";
export function BrandHeader() {
  return (
    <div className="flex items-center justify-center">
<motion.a
  href="https://maps.app.goo.gl/qGe81oqeAct1UNjq9"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-zinc-200
    bg-white
    px-6
    py-3
    text-sm
    font-semibold
    text-zinc-800
    shadow-md
    transition-all
    duration-300
    hover:border-red-200
    hover:bg-red-50
    hover:text-red-600
  "
>
  <span className="text-base">
    📍
  </span>

  Yol Tarifi Al
</motion.a>
    </div>
  );
}