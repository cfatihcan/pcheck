import { motion } from "framer-motion";

import { HeroData } from "./HeroData";

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        duration: 0.5,
      }}
      className="mt-10 grid grid-cols-3 gap-3"
    >
      {HeroData.stats.map((item, index) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            rounded-2xl
            border
            border-zinc-200/80
            bg-white/70
            p-4
            text-center
            shadow-sm
            backdrop-blur-md
          "
        >
          <div className="text-2xl">
            {item.icon}
          </div>

          <div className="mt-2 text-xl font-bold text-zinc-900">
            {item.value}
          </div>

          <div className="mt-1 text-xs leading-5 text-zinc-500">
            {item.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}