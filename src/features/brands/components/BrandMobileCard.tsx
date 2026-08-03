import { useEffect, useState } from "react";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  FiClock,
  FiMapPin,
  FiNavigation,
  FiPhone,
} from "react-icons/fi";

import { brands } from "../data/BrandData";
import { openNavigation } from "../utils/navigation";

type Props = {
  selectedBrandId: number;
  onSelect(id: number): void;
};

export function BrandMobileCard({
  selectedBrandId,
  onSelect,
}: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const index = brands.findIndex(
      (x) => x.id === selectedBrandId,
    );

    if (index >= 0) {
      setActive(index);
    }
  }, [selectedBrandId]);

  const swipeThreshold = 80;

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    let next = active;

    if (info.offset.x < -swipeThreshold) {
      next =
        active === brands.length - 1
          ? 0
          : active + 1;
    }

    if (info.offset.x > swipeThreshold) {
      next =
        active === 0
          ? brands.length - 1
          : active - 1;
    }

    setActive(next);
    onSelect(brands[next].id);
  };

  const brand = brands[active];

  return (
    <div className="relative">

      <AnimatePresence mode="wait">

        <motion.div
          key={brand.id}
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          initial={{
            opacity: 0,
            x: 80,
            rotate: 2,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            x: -80,
            rotate: -2,
          }}
          transition={{
            duration: .45,
            ease: [0.22,1,0.36,1],
          }}
          className="
            rounded-[32px]
            border
            border-zinc-200
            bg-white
            p-7
            shadow-xl
          "
        >

          {/* Header */}

          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-2">

                <FiMapPin className="text-red-600"/>

                <h3 className="text-2xl font-black">
                  {brand.name}
                </h3>

              </div>

              <span
                className="
                  mt-4
                  inline-flex
                  rounded-full
                  bg-green-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-green-700
                "
              >
                🟢 Açık
              </span>

            </div>

          </div>

          {/* Infos */}

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-3">

              <FiClock className="text-red-600"/>

              <span className="text-zinc-600">
                09:00 - 23:00
              </span>

            </div>

            <div className="flex items-center gap-3">

              <FiPhone className="text-red-600"/>

              <span className="text-zinc-600">
                {brand.phone}
              </span>

            </div>

            <div className="flex items-start gap-3">

              <FiMapPin
                className="
                  mt-1
                  text-red-600
                "
              />

              <span className="text-zinc-600">
                {brand.address}
              </span>

            </div>

          </div>

          {/* Button */}

          <motion.button
            whileHover={{
              scale:1.02,
            }}
            whileTap={{
              scale:.97,
            }}
            onClick={() =>
              openNavigation(
                brand.latitude,
                brand.longitude,
                brand.name,
              )
            }
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-red-600
              to-orange-500
              py-4
              text-lg
              font-bold
              text-white
              shadow-lg
            "
          >

            <FiNavigation size={20}/>

            Yol Tarifi Al

          </motion.button>

        </motion.div>

      </AnimatePresence>

      {/* Indicator */}

      <div
        className="
          mt-6
          flex
          justify-center
          gap-2
        "
      >

        {brands.map((item,index)=>(

          <motion.div
            key={item.id}
            animate={{
              width:
                index===active
                  ?28
                  :8,
              opacity:
                index===active
                  ?1
                  :.35,
            }}
            transition={{
              duration:.25,
            }}
            className="
              h-2
              rounded-full
              bg-red-600
            "
          />

        ))}

      </div>

    </div>
  );
}