import { useEffect } from "react";
import { useMap } from "react-leaflet";

function GoToLocation({ location }) {
  const map = useMap();
  useEffect(() => {
    if (location.length !== 0) {
      map.flyTo(location, 15, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [location]);

  return null;
}

export default GoToLocation;
