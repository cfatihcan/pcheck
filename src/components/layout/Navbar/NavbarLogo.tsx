import { Link } from "react-router-dom";

export function NavbarLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white">
        🍕
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-wide">
          Napoli Pizza
        </span>

        <span className="text-xs text-zinc-500">
          Wood Fired Pizza
        </span>
      </div>
    </Link>
  );
}