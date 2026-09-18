import { motion } from "framer-motion";


export function HeroActions() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 0.45,
      }}
      className="mt-8 flex flex-col gap-4"
    >
      {/* Primary */}
      {/* <motion.button
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-red-600
          font-semibold
          text-white
          shadow-lg
          transition-colors
          hover:bg-red-700
        "
      >
        Online Sipariş Ver

        <motion.div
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <ArrowRight size={18} />
        </motion.div>
      </motion.button> */}

      {/* Secondary */}
      <motion.button
        whileHover={{
          scale: 1.02,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-zinc-200
          bg-white/80
          font-semibold
          text-zinc-700
          backdrop-blur
          transition-all
          hover:border-red-300
          hover:text-red-600
          hover:shadow-md
        "
      >
        Menüyü İncele
      </motion.button>
    </motion.div>
  );
}