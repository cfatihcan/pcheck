import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
  delay?: number;
};

export function PizzaInfoCard({
  icon,
  title,
  value,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: .5,
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
className="
w-[150px]

rounded-2xl

border
border-zinc-200

bg-white/80

p-5

shadow-lg

backdrop-blur-xl
"
    >
      <div className="text-3xl">
        {icon}
      </div>

      <div className="mt-4 text-sm text-zinc-500">
        {title}
      </div>

      <div className="mt-1 text-3xl font-black">
        {value}
      </div>
    </motion.div>
  );
}