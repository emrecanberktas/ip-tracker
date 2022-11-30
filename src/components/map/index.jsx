import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./index.css";
import dataStore from "../../store";

function Map() {
  const data = dataStore((state) => state.data);
  if (!data) return <div>Loading...</div>;
  const location = [data.location.lat, data.location.lng];
  return (
    <div className="map">
      <MapContainer center={location} zoom={15} scrollWheelZoom={true}>
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
