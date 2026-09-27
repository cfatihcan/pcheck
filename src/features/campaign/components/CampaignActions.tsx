import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ikiortaboy } from "@/assets/images/hero";
import { SuperPizza } from "@/assets/images/pizza";

// 1. Tipe badge (etiket) özelliğini ekliyoruz (opsiyonel ?)
type Campaign = {
  id: number;
  name: string;
  image: string;
  description: string;
  priceTakeaway: string;
  priceDelivery: string;
  badge?: {
    title: string;
    price: string;
  };
};

const campaignData: Campaign[] = [
  {
    id: 1,
    name: "Açılış Kampanyası",
    image: SuperPizza,
    description:
      "Seçili Tüm Orta Boy Pizzalar Gel Al Fiyatları iştahınızı kabartıyor.",
    priceTakeaway: "150",
    priceDelivery: "170",
    // 2. Sadece bu kampanyaya etiket verisini ekliyoruz
    badge: {
      title: "Açılışa Özel",
      price: "150 ₺",
    },
  },
  {
    id: 2,
    name: "Hoş Geldin Kampanyası",
    image: ikiortaboy,
    description:
      "Açılışa özel 2 Orta Boy Pizza, Patates kızartması ve 1 Litre içecek fırsatından yararlan, avantajlı fiyatlarla lezzeti keşfetmeye başla.",
    priceTakeaway: "450",
    priceDelivery: "450",
    // Buna badge eklemiyoruz, dolayısıyla etiket çıkmayacak
  },
];

export function CampaignActions() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Digital Signage - 3 Saniyede bir otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % campaignData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const activeCampaign = campaignData[activeIndex];

  return (
    <section
      id="campaigns"
      className="relative overflow-hidden px-4 py-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative flex min-h-[650px] items-center justify-center lg:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCampaign.id}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-between"
            >
              {/* Sol - Kampanya Görseli */}
              <div className="relative flex h-[300px] w-full flex-1 items-center justify-center sm:h-[350px] lg:h-[450px] lg:justify-end">
                <motion.div className="relative z-10 flex h-full w-full max-w-[600px] items-center justify-center">
                  <img
                    src={activeCampaign.image}
                    alt={activeCampaign.name}
                    className="max-h-full w-full rounded-[2rem] object-contain drop-shadow-2xl"
                  />
                  
                  {/* 3. Etiket (Badge) Render Alanı - Sadece veri varsa render edilir */}
                  {activeCampaign.badge && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: -12 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                      className="absolute right-4 top-4 flex flex-col items-center justify-center rounded-full bg-red-600 p-4 font-black text-white shadow-xl ring-4 ring-white md:right-10 md:top-10"
                    >
                      <span className="text-[10px] uppercase tracking-wider opacity-90 sm:text-xs">
                        {activeCampaign.badge.title}
                      </span>
                      <span className="text-2xl leading-none sm:text-3xl">
                        {activeCampaign.badge.price}
                      </span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Arkadaki Yumuşak Parlama */}
                <div className="absolute left-1/2 top-1/2 -z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />
              </div>

              {/* Sağ - Fiyatlar ve Detaylar */}
              <div className="flex min-h-[250px] w-full flex-1 flex-col items-center justify-center lg:items-start">
                {/* Fiyat Butonları */}
                <div className="mb-8 flex gap-4">
                  <button className="flex h-24 w-32 flex-col items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105">
                    <span className="text-xs font-medium opacity-90">Gel Al</span>
                    <span className="text-3xl font-black tracking-tighter">
                      ₺{activeCampaign.priceTakeaway}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-[10px]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />{" "}
                      Gel Al
                    </span>
                  </button>

                  <button className="flex h-24 w-32 flex-col items-center justify-center rounded-[1.25rem] bg-white text-zinc-800 shadow-sm ring-1 ring-zinc-100 transition-transform hover:scale-105">
                    <span className="text-xs font-medium text-zinc-500">
                      Paket / Teslimat
                    </span>
                    <span className="text-3xl font-black tracking-tighter text-red-600">
                      ₺{activeCampaign.priceDelivery}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-[10px] text-zinc-500">
                      🛵 Ara Gelsin
                    </span>
                  </button>
                </div>

                {/* Başlık ve Açıklama */}
                <h2 className="mb-4 text-center text-4xl font-black tracking-tight text-zinc-900 lg:text-left">
                  {activeCampaign.name}
                </h2>
                <p className="max-w-[400px] text-center text-sm leading-relaxed text-zinc-500 lg:text-left">
                  {activeCampaign.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Loading Çubuğu (Instagram Hikaye Tarzı Seçim Çubuğu) */}
        <div className="mt-8 flex justify-center gap-2">
          {campaignData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative h-1.5 w-16 overflow-hidden rounded-full bg-zinc-200 transition-colors hover:bg-zinc-300 md:w-24 lg:w-32"
              aria-label={`Go to campaign ${index + 1}`}
            >
              {index < activeIndex && (
                <div className="absolute inset-0 bg-orange-500" />
              )}
              {index === activeIndex && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="absolute inset-0 bg-orange-500"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}