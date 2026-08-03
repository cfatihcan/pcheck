import { useEffect, useState } from "react";

import type { NavbarController } from "./NavbarTypes";

export function useNavbar(): NavbarController {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll kontrolü
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açıkken body scroll'u kilitle
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return {
    isScrolled,

    isMobileMenuOpen,

    openMobileMenu: () => setIsMobileMenuOpen(true),

    closeMobileMenu: () => setIsMobileMenuOpen(false),

    toggleMobileMenu: () =>
      setIsMobileMenuOpen((prev) => !prev),
  };
}