import { Pizza } from "lucide-react";

export function FooterBrand() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-red-600
            shadow-lg
          "
        >
          <Pizza className="h-7 w-7 text-white" />
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">
            New Napoli Pizza Karşıyaka
          </h3>

        
        </div>
      </div>

 
    </div>
  );
}