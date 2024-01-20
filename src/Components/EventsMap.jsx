import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import GoToLocation from "./GoToLocation";
import "leaflet/dist/leaflet.css";

function EventsMap({ eventsData, favourite, setFavourite, location }) {
  return (
    <MapContainer
      center={[38.8977, -77.0365]}
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
      <GoToLocation location={location} />
    </MapContainer>
  );
}

export default EventsMap;

function FavouriteButton({ event, favourite, setFavourite }) {
  const inFavourite = favourite.some((fav) => fav.id === event.id);

  function handleClick() {
    if (inFavourite) {
      localStorage.setItem(
        "favourites",
        JSON.stringify(favourite.filter((fav) => fav.id !== event.id))
      );
      setFavourite(favourite.filter((fav) => fav.id !== event.id));
    } else {
      localStorage.setItem("favourites", JSON.stringify([event, ...favourite]));
      setFavourite([event, ...favourite]);
    }
  }

  return (
    <button className="flex gap-1" onClick={() => handleClick()}>
      {inFavourite ? (
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
