import React, { useState } from "react";
import EventsMap from "./Components/EventsMap";
import Filter from "./Components/Filter";
import data from "./historicalEventsData.json";
import Favourites from "./Components/Favourites";

function App() {
  const [historicalEvents, setHistoricalEvents] = useState(data);
  const [favourite, setFavourite] = useState(JSON.parse(localStorage.getItem("favourites")) ?? []);
  const [location, setLocation] = useState([]);

  return (
    <main className="flex flex-col h-full w-full xl:flex-row">
      <div className="flex flex-col">
        <Filter setEventsData={setHistoricalEvents} />
        <EventsMap
          eventsData={historicalEvents}
          favourite={favourite}
          setFavourite={setFavourite}
          location={location}
        />
      </div>
      <Favourites
        favourite={favourite}
        setLocation={setLocation}
      />
    </main>
  );
}

export default App;
