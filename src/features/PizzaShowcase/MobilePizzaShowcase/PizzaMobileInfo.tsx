import { AnimatePresence, motion } from "framer-motion";
import { pizzas } from "../PizzaData";




type Props = {
  active: number;
};

export function PizzaMobileInfo({ active }: Props) {
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
          duration: 0.45,
        }}
        className="mt-8"
      >
        {/* Rating */}
        {/* <div className="flex items-center justify-center gap-2">
          <span className="text-amber-400 text-lg">
            ⭐⭐⭐⭐⭐
          </span>

          <span className="font-semibold text-zinc-700">
            {pizza.rating}
          </span>
        </div> */}

        {/* Name */}
        <h2 className="mt-5 text-center text-3xl font-black">
          {pizza.name}
        </h2>

        {/* Description */}
        <p
          className="
            mt-4
            text-center
            leading-7
            text-zinc-600
          "
        >
          {pizza.description}
        </p>

        {/* Stats */}
        <div
          className="
            mt-8
            grid
            grid-cols-3
            gap-3
          "
        >
          <StatCard
            icon="🔥"
            value={pizza.calories}
            label="Kalori"
          />

          <StatCard
            icon="🍕"
            value={pizza.size}
            label="Boyut"
          />

          <StatCard
            icon="🕒"
            value={pizza.duration}
            label="Süre"
          />
        </div>

        {/* Ingredients */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >
          {pizza.ingredients.map((ingredient) => (
            <span
              key={ingredient}
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
              "
            >
              {ingredient}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-10 text-center">
          <div className="text-sm text-zinc-500">
            Başlangıç Fiyatı
          </div>

          <div className="mt-2 text-5xl font-black text-red-600">
            ₺{pizza.price}
          </div>
        </div>

        {/* Button */}
        <button
          className="
            mt-8
            w-full
            rounded-full
            bg-red-600
            py-4
            text-lg
            font-bold
            text-white
            transition
            hover:bg-red-700
          "
        >
          🛒 Online Sipariş Ver
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

type StatCardProps = {
  icon: string;
  value: string | number;
  label: string;
};

function StatCard({
  icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-4
        text-center
        shadow-sm
      "
    >
      <div className="text-2xl">
        {icon}
      </div>

      <div className="mt-2 text-xl font-black">
        {value}
      </div>

      <div className="mt-1 text-xs text-zinc-500">
        {label}
      </div>
    </div>
  );
}