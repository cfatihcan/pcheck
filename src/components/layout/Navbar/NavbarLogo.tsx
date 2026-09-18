import { NapoliLogo } from "@/assets/images/hero";
import { Link } from "react-router-dom";

export function NavbarLogo() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-3 transition-opacity duration-300 hover:opacity-80"
    >
      <img
        src={NapoliLogo}
        alt="Logo"
        className="h-20 w-auto shrink-0 object-contain"
      />

      {/* <div className="shrink-0">
        <span className="whitespace-nowrap text-lg font-bold tracking-wide">
          New Napoli Pizza Karşıyaka
        </span>
      </div> */}
    </Link>
  );
}