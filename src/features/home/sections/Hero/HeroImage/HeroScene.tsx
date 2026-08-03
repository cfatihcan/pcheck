import { HeroPizzaStack } from "./HeroPizzaStack";

type HeroSceneProps = {
  pizzaSize: number;
  radiusX: number;
  radiusY: number;
};

export function HeroScene({
  pizzaSize,
  radiusX,
  radiusY,
}: HeroSceneProps) {
  return (
    <div
      className="
        relative
        w-full
        h-full
      "
    >
      <HeroPizzaStack
        pizzaSize={pizzaSize}
        radiusX={radiusX}
        radiusY={radiusY}
      />
    </div>
  );
}