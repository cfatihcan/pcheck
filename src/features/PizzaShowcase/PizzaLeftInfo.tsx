import { AnimatePresence, motion } from "framer-motion";

import { pizzas } from "./PizzaData";
import { PizzaInfoCard } from "./PizzaInfoCard";

type Props = {
  active: number;
};

export function PizzaLeftInfo({ active }: Props) {
  const pizza = pizzas[active];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pizza.id}
        initial={{
          opacity: 0,
          x: -40,
          y: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        exit={{
          opacity: 0,
          x: 40,
          y: -20,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex
          flex-col
          items-end
          gap-5
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0,
            duration: 0.35,
          }}
        >
          <PizzaInfoCard
            icon="🔥"
            title="Kalori"
            value={`${pizza.calories}`}
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.35,
          }}
        >
          <PizzaInfoCard
            icon="🍕"
            title="Boyut"
            value={pizza.size}
            delay={0.1}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.35,
          }}
        >
          <PizzaInfoCard
            icon="🕒"
            title="Hazırlama"
            value={pizza.duration}
            delay={0.2}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}