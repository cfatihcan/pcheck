import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export function KetchupUnderline({ active = false }: Props) {
  return (
    <motion.div
      className="absolute left-0 right-0 -bottom-1 h-2 overflow-visible"
      initial={false}
      animate={active ? "visible" : "hidden"}
      whileHover="visible"
    >
      <svg
        width="100%"
        height="8"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M2 4 C15 1 35 7 55 4 C70 2 85 6 98 4"
          fill="none"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1 },
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}