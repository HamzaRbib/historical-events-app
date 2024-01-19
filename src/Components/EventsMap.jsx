import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import "leaflet/dist/leaflet.css";

function EventsMap({ eventsData, favourite, setFavourite, startingPosition }) {
  function GoToLocation() {
    const map = useMap();
    map.flyTo(startingPosition, 15);
    return null;
  }
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
      <GoToLocation />
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
