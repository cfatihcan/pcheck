import { motion } from "framer-motion";

export function BrandHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: .3,
      }}
      transition={{
        duration: .6,
      }}
      className="mb-16 text-center"
    >
      <span
        className="
          inline-flex
          rounded-full
          bg-red-100
          px-5
          py-2
          text-sm
          font-semibold
          text-red-600
        "
      >
        📍 Şubelerimiz
      </span>

      <h2
        className="
          mt-6
          text-5xl
          font-black
        "
      >
        Size En Yakın Napoli Pizza
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          text-lg
          leading-8
          text-zinc-500
        "
      >
        Tüm şubelerimizi keşfedin, konumlarını harita
        üzerinden görüntüleyin ve tek tıkla yol tarifi alın.
      </p>
    </motion.div>
  );
}