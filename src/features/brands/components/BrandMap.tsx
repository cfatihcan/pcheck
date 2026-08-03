import { useEffect } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
} from "react-leaflet";

import { brands } from "../data/BrandData";

import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import { createBrandMarker } from "./BrandMarker";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: shadow,
});

type Props = {
    selectedBrandId: number;
};

function FlyToBrand({ selectedBrandId }: Props) {
  const map = useMap();

  useEffect(() => {
    const brand = brands.find(
      (x) => x.id === selectedBrandId
    );

    if (!brand) return;

    map.flyTo(
      [brand.latitude, brand.longitude],
      14,
      {
        duration: 1.2,
        animate: true,
      }
    );
  }, [selectedBrandId, map]);

  return null;
}

export function BrandMap({
    selectedBrandId,
}: Props) {
    const center = [
        brands[0].latitude,
        brands[0].longitude,
    ] as [number, number];

    return (
        <div
            className="
        overflow-hidden
        rounded-3xl
        shadow-xl
      "
        >
            <MapContainer
                center={center}
                zoom={12}
                scrollWheelZoom={false}
                className="h-[650px] w-full"
            >
                <TileLayer
                    attribution="© OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                 <FlyToBrand
                    selectedBrandId={selectedBrandId}
                /> 

                {brands.map((brand) => (
                    <Marker
                        key={brand.id}
                        icon={createBrandMarker({
                            selected:
                                brand.id === selectedBrandId,
                        })}
                        position={[
                            brand.latitude,
                            brand.longitude,
                        ]}
                    >
                        <Popup>
                            <div className="space-y-2">

                                <h3 className="font-bold">
                                    {brand.name}
                                </h3>

                                <p className="text-sm">
                                    {brand.address}
                                </p>

                                <p className="text-sm font-medium text-red-600">
                                    {brand.phone}
                                </p>

                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}