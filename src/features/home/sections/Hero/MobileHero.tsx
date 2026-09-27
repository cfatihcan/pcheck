import { Container } from "@/components/ui";


import { HeroContent } from "./HeroContent";

import { HeroIngredients } from "./HeroIngredients";
import {  MobileHeroImage } from "./HeroImage";


export function MobileHero() {
    return (
        <section
            className="
        relative
        overflow-hidden
        pt-[76px]
        pb-12
      "
        >
             {/* <HeroBackground />  */}
            {/* <HeroFloating />  */}
            <HeroIngredients /> 
            <Container>
                <div className="flex flex-col items-center -mt-30">

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
             <MobileHeroImage />  
          </div>

                    {/* İçerik */}
                    <HeroContent align="center" />

                </div>
            </Container>
        </section>
    );
}