import { useState } from "react";

import { Container } from "@/components/ui";

import { BrandHeader } from "./BrandHeader";
import { BrandList } from "./BrandList";
import { BrandMap } from "./BrandMap";

export function DesktopBrands() {
  const [selectedBrandId, setSelectedBrandId] =
    useState(1);

  return (
    <section
      id="brands"
      className="py-28"
    >
      <Container>

        <BrandHeader />

        <div
          className="
            grid
            grid-cols-12
            gap-10
            items-start
          "
        >
          {/* Sol Liste */}

          <div className="col-span-5">

            <BrandList
              selectedBrandId={selectedBrandId}
              onSelect={setSelectedBrandId}
            />

          </div>

          {/* Sağ Harita */}

          <div
            className="
              sticky
              top-28
              col-span-7
            "
          >

            <BrandMap
              selectedBrandId={selectedBrandId}
            />

          </div>

        </div>

      </Container>
    </section>
  );
}