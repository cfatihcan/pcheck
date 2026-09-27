import { PizzaShowcase } from "@/features/PizzaShowcase";
import { Hero } from "../sections/Hero";
import { Brands } from "@/features/brands";
import { Campaign } from "@/features/campaign/Campaign";

export function HomePage() {
  return (
    <>
      <Hero />
      <PizzaShowcase />
      <Campaign />
      <Brands />
    </>
  );
}