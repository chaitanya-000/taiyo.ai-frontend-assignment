import React from "react";
import { CountryData } from "../types";
import { Marker, Popup } from "react-leaflet";
import CustomerLocationMarker from "./CustomerLocationMarker";

export default function CountryMarkers({
  countryData,
}: {
  countryData: CountryData[];
}) {
  return (
    <>
      {countryData.map(
        (
          { country, countryInfo: { lat, long }, active, deaths, recovered },
          index
        ) => (
          <Marker
            key={index}
            position={[lat, long]}
            icon={CustomerLocationMarker("#1e4ed8")}
          >
            <Popup>
              <p className="text-[#323232] font-medium">{country}</p>
              <p className="text-yellow-600 text-xs">
                Active: <span className="font-medium">{active}</span>
              </p>
              <p className="text-red-600 text-xs">
                Deaths: <span className="font-medium">{deaths}</span>
              </p>
              <p className="text-green-600 text-xs">
                Recovered: <span className="font-medium">{recovered}</span>
              </p>
            </Popup>
          </Marker>
        )
      )}
    </>
  );
}
