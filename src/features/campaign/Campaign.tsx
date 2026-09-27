import { useEffect, useState } from "react";
import { DesktopCampaign } from "./components/DesktopCampaign";
import { MobileCampaign } from "./components/MobileCampaign";



export function Campaign() {
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
    ? <MobileCampaign />
    : <DesktopCampaign />;
}