import { AnimatePresence, motion } from "framer-motion";

import { pizzas } from "./PizzaData";

type Props = {
  active: number;
};

export function PizzaImage({ active }: Props) {
  const pizza = pizzas[active];

  return (
    <div
      className="
        relative
        z-0
        flex
        h-[420px]
        items-center
        justify-center
      "
    >
      {/* Glow */}
      <motion.div
        className="
          absolute
          z-0
          h-80
          w-80
          rounded-full
          bg-gradient-to-br
          from-orange-300/30
          via-yellow-200/20
          to-red-300/30
          blur-3xl
          pointer-events-none
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={pizza.id}
          src={pizza.image}
          alt={pizza.name}
          draggable={false}
          initial={{
            opacity: 0,
            scale: 0.75,
            rotate: -12,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            rotate: 12,
            y: -30,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            w-[430px]
            select-none
            pointer-events-none
            drop-shadow-[0_35px_40px_rgba(0,0,0,.35)]
          "
        />
      </AnimatePresence>
    </div>
  );
}