import { motion } from "framer-motion";

import { Container } from "@/components/ui";

import { NavbarActions } from "./NavbarActions";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";
import type { NavbarController } from "./NavbarTypes";

type Props = {
  navbar: NavbarController;
};

export function DesktopNavbar({ navbar }: Props) {
  return (
<motion.header
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{
  duration: 0.4,
}}
  className={[
    "fixed inset-x-0 top-0 z-50 hidden lg:block",
    "transition-all duration-300",
    
    navbar.isScrolled
      ? "border-b border-black/5 bg-white/80 shadow-sm backdrop-blur-xl"
      : "bg-transparent",
  ].join(" ")}
>
      <Container>
        <div className="grid h-24 grid-cols-[220px_1fr_220px] items-center">

          {/* Logo */}
          <div className="flex justify-start">
            <NavbarLogo />
          </div>

          {/* Menü */}
          <div className="flex justify-center">
            <NavbarMenu />
          </div>

          {/* Sağ */}
          <div className="flex justify-end">
            <NavbarActions />
          </div>

        </div>
      </Container>
    </motion.header>
  );
}