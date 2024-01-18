import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function EventsMap({ eventsData, favourite, setFavourite }) {
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
              <h1>{historicalEvent.title}</h1>
              <div className="w-28 h-0.5 bg-green-600 mt-3"></div>
              <p>{historicalEvent.description}</p>
              <FavouriteButton
                event={historicalEvent}
                favourite={favourite}
                setFavourite={setFavourite}
              />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default EventsMap;

function FavouriteButton({ event, favourite, setFavourite }) {
  const isFavourite = favourite.includes(event.title);

  function handleClick() {
    isFavourite
      ? setFavourite(favourite.filter((fav) => fav !== event.title))
      : setFavourite([event.title, ...favourite]);
  }

  return (
    <button className="flex gap-1" onClick={() => handleClick()}>
      {isFavourite ? (
        <>
          <FaStar className="text-yellow-400 font-bold text-xl" />
          <span className="pt-1 font-bold">Unfavourite</span>
        </>
      ) : (
        <>
          <FaRegStar className="text-green-600 font-bold text-xl" />
          <span className="pt-1 font-bold">Favourite</span>
        </>
      )}
    </button>
  );
}
