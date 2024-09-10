import { MapContainer, TileLayer } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import Loading from "../molecules/Loading"; // Custom loading component
import { CountryData } from "../types";
import CountryMarkers from "../molecules/CountryMarkers";
import { fetchCountryData } from "../apiRequests";

export default function Map() {
  const center: any = [52.22977, 21.01178];

  const {
    data: countryData,
    error: countryError,
    isLoading: countryLoading,
  } = useQuery<CountryData[]>({
    queryKey: ["getCountryData"],
    queryFn: fetchCountryData,
    retry: 1,
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  if (countryLoading) return <Loading />;
  if (countryError) return <div>Error fetching data</div>;

  return (
    <div className="map-container" style={{ height: "50vh", width: "100%" }}>
      <h2 className="text-3xl font-bold mb-4">Map</h2>

      <MapContainer
        center={center}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {countryData && <CountryMarkers countryData={countryData} />}
      </MapContainer>
    </div>
  );
}
