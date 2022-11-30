import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "./index.css";
import dataStore from "../../store";

function Map() {
  const [map, setMap] = useState(null);
  const data = dataStore((state) => state.data);
  const location = [data?.location?.lat, data?.location?.lng];

  useEffect(() => {
    if (map) {
      map.flyTo(location, 15);
    }
  }, [data]);

  return (
    <div className="map">
      <MapContainer
        center={location}
        zoom={15}
        scrollWheelZoom={true}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
