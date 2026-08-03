

import type { PizzaItem } from "./PizzaTypes";
import { CitirTavukPizza, KarisikPizza, KavurmaliPizza, MargaritaPizza } from "@/assets/images/pizza";

export const pizzas: PizzaItem[] = [
  {
    id: 1,

    name: "Çıtır Tavuklu",

    image: CitirTavukPizza,

    price: 390,

    rating: 4.9,

    calories: 420,

    size: "25 cm",

    duration: "15 dk",

    description:
      "Odun ateşinde pişen gerçek Napoli tarifi. Taze mozzarella, domates sosu ve fesleğen ile hazırlanır.",

    ingredients: [
      "Mozzarella",
      "Domates",
      "Fesleğen",
    ],
  },

    {
    id: 2,

    name: "Karışık",

    image: KarisikPizza,

    price: 390,

    rating: 4.9,

    calories: 420,

    size: "235 cm",

    duration: "15 dk",

    description:
      "Odun ateşinde pişen gerçek Napoli tarifi. Taze mozzarella, domates sosu ve fesleğen ile hazırlanır.",

    ingredients: [
      "Mozzarella",
      "Domates",
      "Fesleğen",
    ],
  },
 {
    id: 3,

    name: "Kavurmalı",

    image: KavurmaliPizza,

    price: 390,

    rating: 4.9,

    calories: 420,

    size: "25 cm",

    duration: "15 dk",

    description:
      "Odun ateşinde pişen gerçek Napoli tarifi. Taze mozzarella, domates sosu ve fesleğen ile hazırlanır.",

    ingredients: [
      "Mozzarella",
      "Kavurma",
      "Fesleğen",
    ],
  },  
   {
    id: 4,

    name: "Margarita",

    image: MargaritaPizza,

    price: 390,

    rating: 4.9,

    calories: 420,

    size: "25 cm",

    duration: "15 dk",

    description:
      "Odun ateşinde pişen gerçek Napoli tarifi. Taze mozzarella, domates sosu ve fesleğen ile hazırlanır.",

    ingredients: [
      "Mozzarella",
      "Domates",
      "Fesleğen",
    ],
  },  
];