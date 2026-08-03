import { AnimatePresence, motion } from "framer-motion";

import { pizzas } from "./PizzaData";

type Props = {
  active: number;
};

export function PizzaInfo({ active }: Props) {
  const pizza = pizzas[active];

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={pizza.id}
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -25,
        }}
        transition={{
          duration: .45,
        }}
        className="mx-auto mt-10 max-w-3xl text-center"
      >
        {/* İsim */}
        <h2
          className="
            text-5xl
            font-black
            tracking-tight
            text-zinc-900
          "
        >
          {pizza.name}
        </h2>

        {/* Fiyat */}
        <div
          className="
            mt-4
            text-4xl
            font-extrabold
            text-red-600
          "
        >
          ₺ {pizza.price}
        </div>

        {/* Rating */}
        <div
          className="
            mt-4
            flex
            justify-center
            gap-1
            text-xl
          "
        >
          ⭐⭐⭐⭐⭐

          <span className="ml-2 text-base text-zinc-500">
            {pizza.rating}
          </span>
        </div>

        {/* Açıklama */}
        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-zinc-600
          "
        >
          {pizza.description}
        </p>

      </motion.div>

    </AnimatePresence>
  );
}