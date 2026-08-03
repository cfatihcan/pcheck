import { useState } from "react";

import { Reveal } from "@/components/ui";

import { PizzaTabs } from "./PizzaTabs";
import { PizzaStage } from "./PizzaStage";

export function DesktopPizzaShowcase() {
  const [activePizza, setActivePizza] = useState(0);

  return (
<section className="py-28">

    {/* <PizzaHeader /> */}

    <Reveal delay={0.15}>
        <PizzaTabs
            active={activePizza}
            onChange={setActivePizza}
        />
    </Reveal>

    {/* <Reveal delay={0.30}>
        <PizzaImage active={activePizza} />
    </Reveal> */}

    {/* <Reveal delay={0.45}>
        <PizzaInfo active={activePizza} />
    </Reveal> */}

    <PizzaStage active={activePizza} />

</section>
  );
}