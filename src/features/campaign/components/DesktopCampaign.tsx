
import { CampaignBackground } from "./CampaignBackground";
import { CampaignActions } from "./CampaignActions";



export function DesktopCampaign() {
  return (
    <section
      id="campaign"
      className="
        relative
        overflow-hidden
        pt-[76px]
        pb-12
      "
    >
      <CampaignBackground />
      <CampaignActions />
       
    </section>
  );
}