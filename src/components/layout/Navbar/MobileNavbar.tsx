import { motion } from "framer-motion";

import { Container } from "@/components/ui";

import { MobileDrawer } from "./MobileDrawer";
import { MobileMenu } from "./MobileMenu";
import { NavbarLogo } from "./NavbarLogo";
import type { NavbarController } from "./NavbarTypes";

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
          <NavbarLogo />

          <MobileMenu
            isOpen={navbar.isMobileMenuOpen}
            onToggle={navbar.toggleMobileMenu}
          />
        </div>
      </Container>

      <MobileDrawer navbar={navbar} />
    </motion.header>
  );
}