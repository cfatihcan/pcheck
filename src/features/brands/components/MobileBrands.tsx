import { useState } from "react";

import { Container } from "@/components/ui";

import { BrandHeader } from "./BrandHeader";
import { BrandMap } from "./BrandMap";
import { BrandMobileCard } from "./BrandMobileCard";


export function MobileBrands() {
  const [selectedBrandId, setSelectedBrandId] =
    useState(1);

  return (
    <section
      id="brands"
      className="py-16"
    >
      <Container>

        <BrandHeader />
                <div className="mt-8">

          <BrandMobileCard
            selectedBrandId={selectedBrandId}
            onSelect={setSelectedBrandId}
          />

        </div>

        <div className="mt-8">

           <BrandMap
            selectedBrandId={selectedBrandId}
          /> 

        </div>



      </Container>
    </section>
  );
}