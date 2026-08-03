import { PizzaImage } from "./PizzaImage";
import { PizzaLeftInfo } from "./PizzaLeftInfo";
import { PizzaRightInfo } from "./PizzaRightInfo";


type Props = {
  active: number;
};

export function PizzaStage({ active }: Props) {
  return (
    <div
      className="
        mt-12
        grid
        items-center
        gap-12

        lg:grid-cols-[1fr_520px_1fr]
      "
    >
      <PizzaLeftInfo active={active} />

      <PizzaImage active={active} />

      <PizzaRightInfo active={active} />
    </div>
  );
}