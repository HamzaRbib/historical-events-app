import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";

function App() {
  let startingPosition = [51.505, -0.09]
  return (
    <main className="flex flex-col h-full w-full p-8">
      <div className="h-12 text-white">hello</div>
        <MapContainer
          center={startingPosition}
          zoom={13}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={startingPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </main>
  );
}

export default App;
