

import type { PizzaItem } from "./PizzaTypes";
import { BesiBiYerdePizza, CitirTavukPizza, DeluxPizza, KarisikPizza, KavurmaliPizza, MargaritaPizza, MexicoPizza, MezzalunaPizza, PastirmaSucukPizza, SucukluPizza, SuperPizza, TonBalikPizza, VejeteryanPizza } from "@/assets/images/pizza";

export const pizzas: PizzaItem[] = [

  {
    id: 1,

    name: "Karışık",

    image: KarisikPizza,

    price: 150,

    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "En çok tercih edilen pizza çeşitlerinden biri olan karışık pizza, sucuk, mantar, yeşil biber, mısır, salam, közlenmiş biber ve zeytin ile malzemelerle hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "sucuk",
      "mantar",
      "yeşil biber",
      "mısır",
      "salam",
      "közlenmiş biber",
      "zeytin",
    ],
  },
  {
    id: 2,

    name: "Mexico",

    image: MexicoPizza,

    price: 150,
    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Acı sevenler için özel olarak hazırlanan Mexico pizza, jalapeño biberi, mısır, kırmızı közlenmiş biber, mantar ve sucuk gibi malzemelerle hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "sucuk",
      "jalapeño",
      "mısır",
      "mantar",
      "kırmızı közlenmiş biber",
    ],
  },

  {
    id: 3,

    name: "5'i Bir Yerde",

    image: BesiBiYerdePizza,

    price: 150,

    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Harika bir lezzet kombinasyonu sunan 5'i Bir Yerde pizza, sucuk, mantar, mısır, sosis ve yeşil biber ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "sucuk",
      "mantar",
      "mısır",
      "sosis",
      "yeşil biber",
    ],
  },


  {
    id: 4,

    name: "Deluxe Pizza",

    image: DeluxPizza,

    price: 150,
    pricedelivery: 170,
    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Lux tutkunları için özel olarak hazırlanan Deluxe pizza, sucuk, mantar, mısır, kırmızı közlenmiş biber ve yeşil biber ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "sucuk",
      "mantar",
      "salam",
      "yeşil biber",
    ],
  },
  {
    id: 5,

    name: "Sucuklu Pizza",

    image: SucukluPizza,

    price: 150,
    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Sucuk severler el kaldırsın!",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "sucuk",
    ],
  },


  {
    id: 6,

    name: "Margarita",

    image: MargaritaPizza,

    price: 150,
    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "O bir klasik! Margarita pizza, taze mozzarella peyniri, domates sosu ve fesleğen ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "domates"
    ],
  },
  {
    id: 7,

    name: "Mezzaluna Pizza",

    image: MezzalunaPizza,

    price: 150,
    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Peynir ve et severler için özel olarak hazırlanan Mezzaluna pizza, salam, mantar, sosis ve çift kat mozzarella ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "salam",
      "mantar",
      "sosis",
      "çift kat mozzarella"
    ],
  },
  {
    id: 8,

    name: "Süper Pizza",

    image: SuperPizza,

    price: 150,
    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Süper Kahramanlar için özel olarak hazırlanan Süper pizza, sucuk, mantar, yeşil biber ve mısır ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "sucuk",
      "mantar",
      "yeşil biber",
      "mısır"
    ],
  },
  {
    id: 9,

    name: "Vejeteryan Pizza",

    image: VejeteryanPizza,

    price: 150,
    pricedelivery: 170,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Vejeteryanlar için özel olarak hazırlanan Vejeteryan pizza, mantar, yeşil biber, kırmızı közlenmiş biber, siyah zeytin, soğan ve mısır ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "mantar",
      "yeşil biber",
      "kırmızı közlenmiş biber",
      "siyah zeytin",
      "soğan",
      "mısır",
    ],
  },
  {
    id: 10,

    name: "Kavurmalı Pizza",

    image: KavurmaliPizza,

    price: 270,
    pricedelivery: 290,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Kavurma severler için özel olarak hazırlanan Kavurmalı pizza, kavurma, yeşil biber, mantar ve soğan ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "kavurma",
      "yeşil biber",
      "mantar",
      "soğan",

    ],
  },
  {
    id: 11,

    name: "Pastırma Sucuk",

    image: PastirmaSucukPizza,

    price: 270,
    pricedelivery: 290,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Pastırma ve sucuk severler için özel olarak hazırlanan Pastırma Sucuk pizza, pastırma, sucuk, mantar ve yeşil biber ile hazırlanır.",

    ingredients: [
            "pizza sosu",
      "mozeralla",
      "pastırma",
      "sucuk",
      "mantar",
      "yeşil biber",
      "domates",
    ],
  },
  {
    id: 12,

    name: "Ton Balıklı Pizza",

    image: TonBalikPizza,

    price: 270,
    pricedelivery: 290,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Ton balığı severler için özel olarak hazırlanan Ton Balıklı pizza, ton balığı, yeşil biber, mısır ve soğan ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "ton balığı",
      "yeşil biber",
      "mısır",
      "soğan",
    ],
  },
  {
    id: 13,

    name: "Çıtır Tavuklu Pizza",

    image: CitirTavukPizza,

    price: 270,
    pricedelivery: 290,

    rating: 4.9,

    calories: 420,

    size: "26 cm",

    duration: "15 dk",

    description:
      "Çıtır tavuk severler için özel olarak hazırlanan Çıtır Tavuklu pizza, çıtır tavuk, jalapeño, kırmızı közlenmiş biber, siyah zeytin ve mısır ile hazırlanır.",

    ingredients: [
      "pizza sosu",
      "mozeralla",
      "çıtır tavuk",
      "jalapeño",
      "kırmızı közlenmiş biber",
      "siyah zeytin",
      "mısır"
    ],
  }
];