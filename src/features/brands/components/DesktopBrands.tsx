

import { Container } from "@/components/ui";

import { BrandHeader } from "./BrandHeader";

import { BrandMap } from "./BrandMap";

export function DesktopBrands() {


  return (
    <section
      id="brands"
      className="py-28"
    >
  
      

       <BrandHeader></BrandHeader>

     <div className="mt-12 w-full px-6 md:px-10 lg:px-16">
        <BrandMap />
      </div>
    </section>
  );
}