import { brands } from "../data/BrandData";
import { BrandCard } from "./BrandCard";

type Props = {
  selectedBrandId: number;
  onSelect(id: number): void;
};

export function BrandList({
  selectedBrandId,
  onSelect,
}: Props) {
  return (
    <div
      className="
        flex
        h-[650px]
        flex-col
        gap-5
        overflow-y-auto
        pr-2
      "
    >
      {brands.map((brand, index) => (
        <BrandCard
          key={brand.id}
          brand={brand}
          index={index}
          selected={brand.id === selectedBrandId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}