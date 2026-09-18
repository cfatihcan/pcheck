import { motion } from "framer-motion";

type Props = {
  src: string;
  active: boolean;
  offset: number;

  pizzaSize: number;
  radiusX: number;
  radiusY: number;
};

export function HeroPizzaCard({
  //src,
  active,
  offset,
  pizzaSize,
  radiusX,
  radiusY,
}: Props) {
  // Offset -> Açı (-45, 0, 45)
  const angle = offset * 45;

  // Derece -> Radyan
  const rad = (angle * Math.PI) / 180;

  // Elips üzerindeki koordinatlar
  const x = Math.sin(rad) * radiusX;
  const y = (1 - Math.cos(rad)) * radiusY;

  return (
    <motion.img
      //src={src}
      draggable={false}
      className="
        absolute
        left-1/2
        top-1/2
        pointer-events-none
        select-none
      "
      style={{
        width: pizzaSize,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        x,
        y,

        rotate: angle * 0.35,

        scale: active ? 1 : 0.72,

        opacity: active ? 1 : 0.28,

        filter: active
          ? "blur(0px)"
          : "blur(3px)",

        zIndex: active ? 5 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}