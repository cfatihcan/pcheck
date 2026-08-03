import { useState } from "react";

import { Container } from "@/components/ui";


import { PizzaMobileCard } from "./PizzaMobileCard";

export function MobilePizzaShowcase() {
  const [activePizza, setActivePizza] = useState(0);

  return (
    <section className="pt-6 pb-12">
      <Container>


        <PizzaMobileCard
          active={activePizza}
          onChange={setActivePizza}
        />

      </Container>
    </section>
  );
}