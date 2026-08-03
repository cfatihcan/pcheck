import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { PiPizzaFill } from "react-icons/pi";

type Props = {
  selected: boolean;
};

export function createBrandMarker({
  selected,
}: Props) {
  const html = renderToStaticMarkup(
    <div
      className={`
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full

        ${
          selected
            ? "bg-red-600 shadow-[0_0_25px_rgba(220,38,38,.45)] scale-110"
            : "bg-red-500"
        }

        border-4
        border-white
      `}
    >
      <PiPizzaFill
        size={26}
        color="white"
      />
    </div>
  );

  return divIcon({
    html,
    className: "",
    iconSize: [56, 56],
    iconAnchor: [28, 28],
  });
}