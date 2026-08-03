
import { DesktopHero } from "./DesktopHero";
import { MobileHero } from "./MobileHero";

export function Hero() {
  return (
    <>
      <section
        id="hero"
        className="scroll-mt-24"
      >
        <div className="lg:hidden">
          <MobileHero />
        </div>

        <div className="hidden lg:block">
          <DesktopHero />
        </div>
      </section>
    </>
  );
}