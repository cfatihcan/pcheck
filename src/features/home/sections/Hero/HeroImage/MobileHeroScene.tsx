
import { MobileHeroPizzaStack } from "./MobileHeroPizzaStack";

type MobileHeroSceneProps = {
  pizzaSize: number;
  radiusX: number;
  radiusY: number;
};

export function MobileHeroScene({
  pizzaSize,
  radiusX,
  radiusY,
}: MobileHeroSceneProps) {
  return (
    <div
      className="
        relative
        w-full
        h-full
      "
    >
      <MobileHeroPizzaStack
        pizzaSize={pizzaSize}
        radiusX={radiusX}
        radiusY={radiusY}
      />
    </div>
  );
}