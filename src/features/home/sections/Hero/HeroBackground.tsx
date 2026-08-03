import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Ana Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-24
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-orange-300/40
          blur-[90px]
        "
      />

      {/* Sol Blob */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-24
          top-40
          h-56
          w-56
          rounded-full
          bg-red-300/20
          blur-[120px]
        "
      />

      {/* Sağ Blob */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-24
          top-52
          h-64
          w-64
          rounded-full
          bg-yellow-300/20
          blur-[120px]
        "
      />
    </div>
  );
}