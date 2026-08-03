import { motion } from "framer-motion";

import { pizzas } from "./PizzaData";

type Props = {
  active: number;
  onChange: (index: number) => void;
};

export function PizzaTabs({
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-16">

      <div className="flex justify-center">

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-8
          "
        >
          {pizzas.map((pizza, index) => (
            <button
              key={pizza.id}
              onClick={() => onChange(index)}
              className="
                group
                relative
                pb-3

                text-lg
                font-bold

                transition-colors
                duration-300
              "
            >
              <span
                className={
                  active === index
                    ? "text-red-600"
                    : "text-zinc-500 group-hover:text-zinc-900"
                }
              >
                {pizza.name}
              </span>

              {active === index && (
                <motion.div
                  layoutId="pizza-tab"
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-1
                    w-full

                    rounded-full

                    bg-gradient-to-r
                    from-red-600
                    via-orange-500
                    to-red-600
                  "
                />
              )}

            </button>
          ))}
        </div>

      </div>

    </div>
  );
}