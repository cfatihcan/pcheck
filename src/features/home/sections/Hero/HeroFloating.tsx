import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    top: "8%",
    left: "8%",
    size: 42,
    color: "bg-red-500",
  },
  {
    id: 2,
    top: "20%",
    right: "10%",
    size: 18,
    color: "bg-green-500",
  },
  {
    id: 3,
    bottom: "22%",
    left: "15%",
    size: 22,
    color: "bg-yellow-400",
  },
  {
    id: 4,
    bottom: "8%",
    right: "8%",
    size: 34,
    color: "bg-red-300",
  },
];

export function HeroFloating() {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          animate={{
            y: [0, -18, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={[
            "absolute rounded-full blur-sm opacity-70",
            item.color,
          ].join(" ")}
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            width: item.size,
            height: item.size,
          }}
        />
      ))}
    </>
  );
}