export type MenuItem = {
  id: string;
  name: string;
  /** Gel Al fiyatı. `null` = henüz girilmedi (canlıda gösterilmez). */
  price: number | null;
  /** Ürün fotoğrafı. Yoksa `icon` (ya da kategorinin ikonu) gösterilir. */
  image?: string;
  /** Fotoğraf yoksa gösterilecek emoji ikon. */
  icon?: string;
  /** Kısa açıklama: malzemeler, "330 ml", "Porsiyon" vb. */
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
};
