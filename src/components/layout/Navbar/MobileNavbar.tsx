import { motion } from "framer-motion";

import { Container } from "@/components/ui";

import { MobileDrawer } from "./MobileDrawer";
import { MobileMenu } from "./MobileMenu";
import { NavbarLogo } from "./NavbarLogo";
import type { NavbarController } from "./NavbarTypes";
import { Phone } from "lucide-react";

type Props = {
  navbar: NavbarController;
};

export function MobileNavbar({ navbar }: Props) {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={[
        "fixed inset-x-0 top-0 z-50 lg:hidden",
        "transition-all duration-300",
        navbar.isScrolled
          ? "border-b border-black/5 bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-white",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <NavbarLogo />

          {/* Sağ */}
          <div className="flex items-center gap-2">

            {/* Ara */}
            <motion.a
              href="tel:+902323725252"
              whileTap={{ scale: 0.92 }}
              className="
    flex
    h-11
    items-center
    gap-2
    rounded-full
    border
    border-zinc-200
    bg-white
    px-4
    text-zinc-800
    shadow-sm
    transition-all
    duration-300
    hover:border-red-200
    hover:bg-red-50
  "
            >
              <Phone
                size={19}
                strokeWidth={2.7}
                className="text-red-600"
              />

              <span className="text-sm font-bold">
                372 52 52
              </span>
            </motion.a>

            {/* Menü */}
            <MobileMenu
              isOpen={navbar.isMobileMenuOpen}
              onToggle={navbar.toggleMobileMenu}
            />

          </div>
        </div>
      </Container>

      <MobileDrawer navbar={navbar} />
    </motion.header>
  );
}