import { useEffect, useState } from "react";

import { HeroData } from "../HeroData";
import { HeroPizzaCard } from "./HeroPizzaCard";

type HeroPizzaStackProps = {
  pizzaSize: number;
  radiusX: number;
  radiusY: number;
};

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

  return (
    <div className="relative h-full w-full">
      {HeroData.heroPizzas.map((pizza, index) => {
        let offset = index - active;

        if (offset < -1) {
          offset += HeroData.heroPizzas.length;
        }

        if (offset > 1) {
          offset -= HeroData.heroPizzas.length;
        }

        <HeroPizzaCard
          key={pizza.id}
          src={pizza.image}
          active={offset === 0}
          offset={offset}
          pizzaSize={pizzaSize}
          radiusX={radiusX}
          radiusY={radiusY}
        />;

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