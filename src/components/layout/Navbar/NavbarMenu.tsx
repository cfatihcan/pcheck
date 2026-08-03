import { motion } from "framer-motion";
import { PiPizzaFill } from "react-icons/pi";

import { navbarItems } from "./NavbarData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function NavbarMenu() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden items-center gap-10 lg:flex"
    >
      {navbarItems.map((item) => (
        <motion.button
          key={item.target}
          variants={itemVariants}
          onClick={() => scrollToSection(item.target)}
          className="group"
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="flex items-center gap-2 py-2"
          >
            <motion.div
              variants={{
                rest: {
                  rotate: -20,
                  scale: 0,
                  opacity: 0,
                },
                hover: {
                  rotate: 360,
                  scale: 1,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <PiPizzaFill
                size={16}
                className="text-red-600"
              />
            </motion.div>

            <motion.span
              variants={{
                rest: {
                  y: 0,
                  letterSpacing: "0em",
                },
                hover: {
                  y: -2,
                  letterSpacing: "0.02em",
                },
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                font-medium
                text-zinc-700
                transition-colors
                duration-300
                group-hover:text-red-600
              "
            >
              {item.label}
            </motion.span>
          </motion.div>
        </motion.button>
      ))}
    </motion.nav>
  );
}