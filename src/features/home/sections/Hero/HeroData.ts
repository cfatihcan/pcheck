import { HeroPizza } from "@/assets/images/hero";
import { CitirTavukPizza, DeluxPizza } from "@/assets/images/pizza";

export const HeroData = {
  badge: "🔥 Mahallenin İtalyanından",

  title: {
    first: "TÜRKİYE'NİN",
    second: "EN İYİ PİZZASI ",
  },

  description:
    "Güçlü malzeme seçimi ve mahalle sıcaklığını bir araya getiren en sevilen pizza seçeneklerimizi keşfedin.",

  primaryButton: "Online Sipariş Ver",

  secondaryButton: "Menüyü İncele",

  stats: [
    {
      value: "4.9",
      label: "Google Puanı",
      icon: "⭐",
    },
    {
      value: "50K+",
      label: "Mutlu Müşteri",
      icon: "❤️",
    },
    {
      value: "25+",
      label: "Yıllık Tecrübe",
      icon: "🔥",
    },
  ],

   heroPizzas :[
  {
    id: 1,
    image: HeroPizza,
    title: "Napoli Special",
  },
  {
    id: 2,
    image: CitirTavukPizza,
    title: "Çıtır Tavuk",
  },
  {
    id: 3,
    image: DeluxPizza,
    title: "Margherita",
  },
]
};