import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function EventsMap({eventsData}) {
  let startingPosition = [51.505, -0.09];
  return (
    <MapContainer
      center={startingPosition}
      zoom={13}
      scrollWheelZoom={true}
      className="map rounded-2xl"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {eventsData.map((historicalEvent) => {
        return (
          <Marker position={historicalEvent.position} key={historicalEvent.id}>
            <Popup>
              <p>{historicalEvent.title}</p>
              <p>{historicalEvent.description}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default EventsMap;
