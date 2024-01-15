import React, { useState } from "react";
import EventsMap from "./Components/EventsMap";
import Filter from "./Components/Filter";
import data from "./historicalEventsData.json";

function App() {
  const [historicalEvents, setHistoricalEvents] = useState(data);
  return (
    <main className="flex flex-col h-full w-full p-8">
      <Filter setEventsData={setHistoricalEvents}/>
      <EventsMap eventsData={historicalEvents}/>
    </main>
  );
}

export default App;
