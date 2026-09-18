import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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
      className={[
        "fixed inset-x-0 top-0 z-50 hidden lg:block",
        "transition-all duration-300",

    navbar.isScrolled
      ? "border-b border-black/5 bg-white/95 shadow-sm"
      : "bg-transparent",
  ].join(" ")}
    >
      <Container>
        <div className="grid h-24 grid-cols-[220px_1fr_340px] items-center">

          {/* Logo */}
          <div className="flex justify-start">
            <NavbarLogo />
          </div>

          {/* Menü */}
          <div className="flex justify-center">
            <NavbarMenu />
          </div>

          {/* Sağ */}
          <div className="flex items-center justify-end gap-4">

            {/* Telefon CTA */}
<motion.a
  //href="tel:+902323725252"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  className="
    group
    flex
    items-center
    gap-3
    rounded-2xl
    bg-red-600
    px-5
    py-3
    text-white
    shadow-lg
    shadow-red-600/30
    transition-all
    duration-300
    hover:bg-red-700
    hover:shadow-xl
  "
>
  {/* Telefon ikonu */}
  <span
    className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-white
    "
  >
    <Phone
      size={23}
      strokeWidth={2.8}
      className="text-red-600"
    />
  </span>

  {/* Numara */}
  <span className="flex flex-col leading-none">
    <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
      HEMEN ARA
    </span>

    <span className="text-xl font-black tracking-wide text-white">
      372 52 52
    </span>
  </span>
</motion.a>

            <NavbarActions />

          </div>
        </div>
      </Container>
    </motion.header>
  );
}