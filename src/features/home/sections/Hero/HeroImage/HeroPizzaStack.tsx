import { useEffect, useState } from "react";

import { HeroData } from "../HeroData";
import { HeroPizzaCard } from "./HeroPizzaCard";
import { AnimatePresence, motion } from "framer-motion";
type HeroPizzaStackProps = {
  pizzaSize: number;
  radiusX: number;
  radiusY: number;
};

const heroMessages = [
  {
    eyebrow: "KARŞIYAKA'DA",
    title: "AÇILDIK! 🍕",
    description: "Gerçek Napoli pizzası şimdi Karşıyaka'da",
  },
  {
    eyebrow: "TAZE ÜRÜNLER",
    title: "FIRINI YAKTIK! 🔥",
    description: "Gerçek Napoli pizzası için hazırız.",
  },
  {
    eyebrow: "MAHALLENİN",
    title: "YENİ FAVORİSİ ❤️",
    description: "Sıcak, taze ve çıtır çıtır pizza keyfi.",
  },
];

export function HeroPizzaStack({
  pizzaSize,
  radiusX,
  radiusY,
}: HeroPizzaStackProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HeroData.heroPizzas.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const message = heroMessages[active % heroMessages.length];

  return (
    <div className="relative h-full w-full">

      {/* SOLDAKİ YAZI */}
      <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 30,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex flex-col"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              {message.eyebrow}
            </span>

            <h2 className="text-5xl font-black tracking-tight text-zinc-900">
              {message.title}
            </h2>

            <p className="mt-2 text-lg text-zinc-600">
              {message.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PİZZALAR */}
      {HeroData.heroPizzas.map((pizza, index) => {
        let offset = index - active;

        if (offset < -1) {
          offset += HeroData.heroPizzas.length;
        }

        if (offset > 1) {
          offset -= HeroData.heroPizzas.length;
        }

        return (
          <HeroPizzaCard
            key={pizza.id}
            src={pizza.image}
            active={offset === 0}
            offset={offset}
            pizzaSize={pizzaSize}
            radiusX={radiusX}
            radiusY={radiusY}
          />
        );
      })}
    </div>
  );
}