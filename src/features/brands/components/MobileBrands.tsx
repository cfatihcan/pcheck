

import { Container } from "@/components/ui";

import { BrandHeader } from "./BrandHeader";
import { BrandMap } from "./BrandMap";
import { BrandMobileCard } from "./BrandMobileCard";


export function MobileBrands() {


  return (
    <section
      id="brands"
      className="py-16"
    >
      <Container>

        <BrandHeader />
                <div className="mt-8">

          <BrandMobileCard

          />

        </div>

        <div className="mt-8">

           <BrandMap
         
          /> 

        </div>



      </Container>
    </section>
  );
}