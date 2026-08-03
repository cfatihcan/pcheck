import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import { FooterData } from "./FooterData";

export function FooterContact() {
  return (
    <div>
      <h4 className="mb-6 text-lg font-bold text-white">
        İletişim
      </h4>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <Phone className="text-red-500" />
          <span className="text-zinc-400">
            {FooterData.contact.phone}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-red-500" />
          <span className="text-zinc-400">
            {FooterData.contact.email}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-red-500" />
          <span className="text-zinc-400">
            {FooterData.contact.address}
          </span>
        </div>

      </div>
    </div>
  );
}