import { pizzas } from "@/features/PizzaShowcase/PizzaData";

import type { MenuCategory } from "./MenuTypes";

/**
 * QR menü verisi.
 *
 * - Pizzalar PizzaData.ts'den otomatik gelir (fiyatı orada değiştirin).
 * - Yan ürün ve içecekleri buradan ekleyin / düzenleyin.
 * - Fiyatı `null` olan ürünler canlı sitede GÖSTERİLMEZ,
 *   geliştirme ortamında (npm run dev) "Fiyat girilmedi" uyarısıyla görünür.
 * - Fotoğraf eklemek için: görseli src/assets/images/ altına koyup import edin
 *   ve ürüne `image: Gorsel` alanını ekleyin.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "pizzalar",
    title: "Pizzalar",
    icon: "🍕",
    items: pizzas.map((pizza) => ({
      id: `pizza-${pizza.id}`,
      name: pizza.name,
      price: pizza.price,
      image: pizza.image,
      description: pizza.ingredients.join(", "),
    })),
  },
  {
    id: "yan-urunler",
    title: "Yan Ürünler",
    icon: "🍟",
    items: [
      {
        id: "patates-kizartmasi",
        name: "Patates Kızartması",
        icon: "🍟",
        description: "Porsiyon (100 gr)",
        price: 75, // TODO: fiyat girin
      },
      {
        id: "sogan-halkasi",
        name: "Soğan Halkası",
        icon: "🧅",
        description: "Porsiyon (10 adet)",
        price: 75, // TODO: fiyat girin
      },
      {
        id: "kucuk-tavuk",
        name: "Tavuk Çıtır (Küçük)",
        icon: "🐔",
        description: "Porsiyon (8 adet)",
        price: 130, // TODO: fiyat girin
      },
      {
        id: "tavuk-parcasi",
        name: "Büyük Tavuk Parçaları",
        icon: "🐔",
        description: "Porsiyon (3 adet)",
        price: 150, // TODO: fiyat girin
      },             
    ],
  },
  {
    id: "icecekler",
    title: "İçecekler",
    icon: "🥤",
    items: [
      { id: "kola-330", name: "Kutu içecek", description: "330 ml kutu", icon: "🥤", price: 75 },
      { id: "kola-1l", name: "Litrelik içecek", description: "1 L", icon: "🥤", price: 100 },
      { id: "ayran-1l", name: "Litrelik Ayran", description: "1 L", icon: "🥛", price: 100 },
      { id: "ayran", name: "Ayran", icon: "🥛", price: 45 },
      { id: "soda", name: "Soda", icon: "🥤", price: 30 },
      { id: "su", name: "Su", description: "0,5 L", icon: "💧", price: 20 },
    ],
  },
];

/** Ekranda gösterilecek kategoriler: canlıda fiyatı olmayan ürünler ve boş kategoriler gizlenir. */
export function getVisibleCategories(): MenuCategory[] {
  if (import.meta.env.DEV) return menuCategories;

  return menuCategories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => item.price !== null),
    }))
    .filter((category) => category.items.length > 0);
}
