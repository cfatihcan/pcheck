import { AnimatePresence, motion } from "framer-motion";

import { pizzas } from "./PizzaData";

type Props = {
  active: number;
};

export function PizzaRightInfo({ active }: Props) {
  const pizza = pizzas[active];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pizza.id}
        initial={{
          opacity: 0,
          x: 40,
          y: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        exit={{
          opacity: 0,
          x: -40,
          y: -20,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Price Card */}
{/* Price Cards */}
<div className="flex flex-wrap items-stretch gap-4">

  {/* Gel Al */}
  <motion.div
    whileHover={{
      scale: 1.02,
      y: -4,
    }}
    transition={{
      type: "spring",
      stiffness: 220,
      damping: 18,
    }}
    className="
      inline-block
      rounded-3xl
      bg-gradient-to-r
      from-red-600
      via-red-500
      to-orange-500
      px-8
      py-6
      text-white
      shadow-2xl
    "
  >
    <div className="text-sm opacity-80">
      Gel Al 
    </div>

    <div className="mt-1 text-5xl font-black tracking-tight">
      ₺{pizza.price}
    </div>

    <div
      className="
        mt-4
        inline-flex
        rounded-full
        bg-white/20
        px-3
        py-1
        text-xs
        font-semibold
        backdrop-blur
      "
    >
      🔥 Gel Al
    </div>
  </motion.div>

  {/* Paket / Teslimat */}
  <motion.div
    whileHover={{
      scale: 1.02,
      y: -4,
    }}
    transition={{
      type: "spring",
      stiffness: 220,
      damping: 18,
    }}
    className="
      inline-block
      rounded-3xl
      border
      border-red-100
      bg-white
      px-7
      py-6
      text-zinc-900
      shadow-xl
    "
  >
    <div className="text-sm font-medium text-zinc-500">
      Paket / Teslimat
    </div>

    <div className="mt-1 text-4xl font-black tracking-tight text-red-600">
      ₺{pizza.pricedelivery}
    </div>

    <div
      className="
        mt-4
        inline-flex
        rounded-full
        bg-red-50
        px-3
        py-1
        text-xs
        font-bold
        text-red-600
      "
    >
      🛵 Ara Gelsin
    </div>
  </motion.div>

</div>

        {/* Rating */}
        {/* <div className="mt-8 flex items-center gap-3">
          <div className="text-xl text-amber-400">
            ⭐⭐⭐⭐⭐
          </div>

          <div className="font-semibold text-zinc-700">
            {pizza.rating}
          </div>
        </div> */}

        {/* Name */}
        <h2
          className="
            mt-8
            text-5xl
            font-black
            tracking-tight
            text-zinc-900
          "
        >
          {pizza.name}
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-md
            text-lg
            leading-8
            text-zinc-600
          "
        >
          {pizza.description}
        </p>

        {/* Ingredients */}
        <div className="mt-8 flex flex-wrap gap-3">
          {pizza.ingredients.map((ingredient) => (
            <motion.span
              key={ingredient}
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              className="
                rounded-full
                border
                border-orange-200
                bg-orange-50
                px-4
                py-2
                text-sm
                font-semibold
                text-orange-700
                shadow-sm
              "
            >
              {ingredient}
            </motion.span>
          ))}
        </div>

        {/* Button */}
        {/* <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            mt-10
            rounded-full
            bg-red-600
            px-8
            py-4
            text-lg
            font-bold
            text-white
            shadow-xl
            transition-colors
            hover:bg-red-700
          "
        >
          🛒 Online Sipariş Ver
        </motion.button> */}
      </motion.div>
    </AnimatePresence>
  );
}