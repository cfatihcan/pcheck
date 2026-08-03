import { motion } from "framer-motion";

export function PizzaHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        className="
          inline-flex
          rounded-full
          bg-red-50
          px-5
          py-2
          text-sm
          font-semibold
          text-red-600
        "
      >
        🍕 En Çok Tercih Edilenler
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: .15,
          duration: .6,
        }}
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          text-zinc-900
          md:text-6xl
        "
      >
        Gerçek Napoli
        <span
          className="
            block
            bg-gradient-to-r
            from-red-600
            via-orange-500
            to-red-500
            bg-clip-text
            text-transparent
          "
        >
          Pizza Menüsü
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: .3,
          duration: .6,
        }}
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-zinc-600
        "
      >
        Odun ateşinde pişen özel pizzalarımızı keşfedin.
        Her biri taze malzemeler ve geleneksel Napoli tarifiyle hazırlanır.
      </motion.p>

    </div>
  );
}