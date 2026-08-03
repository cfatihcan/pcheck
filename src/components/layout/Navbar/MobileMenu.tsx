import { Menu, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onToggle(): void;
};

export function MobileMenu({
  isOpen,
  onToggle,
}: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label="Mobil Menü"
      className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors hover:bg-black/5"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}