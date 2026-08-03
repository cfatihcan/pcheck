import { useEffect, useState } from "react";

import { DesktopBrands } from "./components/DesktopBrands";
import { MobileBrands } from "./components/MobileBrands";

export function Brands() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return isMobile
    ? <MobileBrands />
    : <DesktopBrands />;
}