export interface NavbarItem {
  label: string;
  target: string;
}

export interface NavbarState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}

export interface NavbarActions {
  openMobileMenu(): void;
  closeMobileMenu(): void;
  toggleMobileMenu(): void;
}

export type NavbarController = NavbarState & NavbarActions;