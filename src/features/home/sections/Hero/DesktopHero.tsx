import { Container } from "@/components/ui";


import { HeroContent } from "./HeroContent";
import { HeroBackground } from "./HeroBackground";
import { HeroFloating } from "./HeroFloating";
import { HeroIngredients } from "./HeroIngredients";
import { DesktopHeroImage } from "./HeroImage";

export function DesktopHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-[76px]
        pb-12
      "
    >
      <HeroBackground />
      <HeroFloating />
      <HeroIngredients />
      <Container>
        <div
          className="
      relative
      flex
      min-h-[760px]
      flex-col
      items-center
      justify-center
    "
        >
          {/* Pizza */}
          <div
            className="
    relative
    w-full
    h-[430px]
    flex
    items-center
    justify-center
  "
          >
            <DesktopHeroImage />
          </div>

    

          {/* Yazılar */}
          <div className="relative z-20 -mt-12">
            <HeroContent align="center" />
          </div>
        </div>
      </Container>
    </section>
  );
}