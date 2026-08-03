import { motion } from "framer-motion";
import {
    FiClock,
    FiMapPin,
    FiNavigation,
    FiPhone,
} from "react-icons/fi";

import type { Brand } from "../types/BrandTypes";
import { openNavigation } from "../utils/navigation";

type Props = {
    brand: Brand;
    index: number;
    selected: boolean;
    onSelect(id: number): void;
};

export function BrandCard({
    brand,
    index,
    selected,
    onSelect,
}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -40,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                delay: index * 0.08,
                duration: 0.45,
            }}
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            onHoverStart={() => onSelect(brand.id)}
            onClick={() => onSelect(brand.id)}
            className={`
        cursor-pointer
        rounded-3xl
        border
        p-6
        transition-all
        duration-300

        ${selected
                    ? "border-red-500 bg-red-50 shadow-xl"
                    : "border-zinc-200 bg-white shadow-sm hover:border-red-200"
                }
      `}
        >
            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <div className="flex items-center gap-2">

                        <FiMapPin className="text-red-600" />

                        <h3 className="text-xl font-bold">
                            {brand.name}
                        </h3>

                    </div>

                    <span
                        className="
              mt-3
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

            {/* Content */}

            <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">

                    <FiClock className="text-zinc-400" />

                    <span className="text-zinc-600">
                        09:00 - 23:00
                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <FiPhone className="text-zinc-400" />

                    <span className="text-zinc-600">
                        {brand.phone}
                    </span>

                </div>

                <div className="flex items-start gap-3">

                    <FiMapPin className="mt-1 text-zinc-400" />

                    <span className="text-zinc-600">
                        {brand.address}
                    </span>

                </div>

            </div>

            {/* Button */}

            <motion.button
                whileHover={{
                    scale: 1.03,
                }}
                whileTap={{
                    scale: 0.97,
                }}
  onClick={(e) => {
    e.stopPropagation();

    openNavigation(
      brand.latitude,
      brand.longitude,
      brand.name,
    );
  }}
                className="
    mt-6
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-2xl
    bg-red-600
    py-3
    font-semibold
    text-white
    transition-colors
    hover:bg-red-700
  "
            >
                <FiNavigation />

                Yol Tarifi
            </motion.button>
        </motion.div>
    );
}