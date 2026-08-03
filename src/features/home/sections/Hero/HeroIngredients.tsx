import { motion } from "framer-motion";

const ingredients = [
  {
    id: 1,
    label: "🍅",
    top: "10%",
    left: "12%",
    delay: 0,
    rotate: -15,
    size: "text-3xl",
  },
  {
    id: 2,
    label: "🌿",
    top: "18%",
    right: "12%",
    delay: .6,
    rotate: 20,
    size: "text-2xl",
  },
  {
    id: 3,
    label: "🧀",
    bottom: "18%",
    left: "8%",
    delay: 1.2,
    rotate: -10,
    size: "text-2xl",
  },
  {
    id: 4,
    label: "🌶️",
    bottom: "12%",
    right: "10%",
    delay: 1.8,
    rotate: 18,
    size: "text-3xl",
  },
];

export function HeroIngredients() {
  return (
    <>
      {ingredients.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            scale: .5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -14, 0],
            rotate: [
              item.rotate,
              item.rotate + 8,
              item.rotate,
            ],
          }}
          transition={{
            delay: item.delay,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
          className={[
            "absolute z-20 select-none",
            item.size,
          ].join(" ")}
        >
          {item.label}
        </motion.div>
      ))}
    </>
  );
}