import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { useNavbar } from "./NavbarHooks";

export function Navbar() {
  const navbar = useNavbar();

  return (
    <>
      <DesktopNavbar navbar={navbar} />
      <MobileNavbar navbar={navbar} />
    </>
  );
}