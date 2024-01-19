import React, { useState } from "react";
import EventsMap from "./Components/EventsMap";
import Filter from "./Components/Filter";
import data from "./historicalEventsData.json";
import Favourites from "./Components/Favourites";

function App() {
  const [historicalEvents, setHistoricalEvents] = useState(data);
  const [favourite, setFavourite] = useState(JSON.parse(localStorage.getItem("favourites")) ?? []);
  const [startingPosition, setStartingPosition] = useState([38.8977, -77.0365]);

  return (
    <main className="flex h-full w-full p-8">
      <div className="flex flex-col">
        <Filter setEventsData={setHistoricalEvents} />
        <EventsMap
          eventsData={historicalEvents}
          favourite={favourite}
          setFavourite={setFavourite}
          startingPosition={startingPosition}
        />
      </div>
      <Favourites
        favourite={favourite}
        setStartingPosition={setStartingPosition}
      />
    </main>
  );
}

export default App;
