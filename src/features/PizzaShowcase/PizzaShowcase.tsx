import { DesktopPizzaShowcase } from "./DesktopPizzaShowcase";
import { MobilePizzaShowcase } from "./MobilePizzaShowcase/MobilePizzaShowcase";



export function PizzaShowcase() {
  return (
    <>
      <section id="pizza-menu">
      <div className="lg:hidden">
        <MobilePizzaShowcase />
      </div>

      <div className="hidden lg:block">
        <DesktopPizzaShowcase />
      </div>
      </section>
    </>
  );
}