import { AnimatePresence, motion } from "framer-motion";


import { navbarItems } from "./NavbarData";
import type { NavbarController } from "./NavbarTypes";
import type { Variants } from "framer-motion";

type Props = {
  navbar: NavbarController;
};

const drawerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      when: "beforeChildren",
      delayChildren: 0.15,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function MobileDrawer({ navbar }: Props) {
  const handleScroll = (target: string) => {
    navbar.closeMobileMenu();

    const element =
      target === "/"
        ? document.body
        : document.getElementById(target);

    setTimeout(() => {
      if (target === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };
  return (
    <AnimatePresence mode="wait">
      {navbar.isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={navbar.closeMobileMenu}
            className="fixed inset-0 top-[72px] z-30 bg-black"
          />

          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 right-0 top-[72px] z-40 h-[calc(100dvh-72px)] border-t border-black/5 bg-white shadow-xl"
          >
            <div className="flex h-full flex-col">
              {/* Menü */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="flex flex-col gap-2">
                  {navbarItems.map((item) => (
                    <motion.div
                      key={item.target}
                      variants={itemVariants}
                    >
                      <button
                        type="button"
                        onClick={() => handleScroll(item.target)}
                        className="
    block
    w-full
    rounded-xl
    px-4
    py-5
    text-left
    text-xl
    font-semibold
    text-zinc-800
    transition-all
    duration-300
    hover:bg-zinc-100
  "
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Alt Alan */}
              <motion.div
                variants={itemVariants}
                className="border-t border-zinc-200 p-6"
              >
                {/* <button
                  type="button"
                  className="w-full rounded-2xl bg-red-600 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-red-700"
                >
                  Online Sipariş Ver
                </button> */}

                {/* <motion.div
                  variants={itemVariants}
                  className="mt-6 flex justify-center gap-8 text-sm text-zinc-500"
                >
                  <span>Instagram</span>
                  <span>Facebook</span>
                  <span>WhatsApp</span>
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}