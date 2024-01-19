import React from "react";
import { FaStar } from "react-icons/fa6";

function Favourites({ favourite, setStartingPosition }) {
  return (
    <div className="bg-dark-bg border-4 border-gray-700 w-[30vw] h-screen ml-8 mt-2 rounded-2xl overflow-y-auto fv">
      <div className="flex gap-1 p-8 font-bold text-3xl">
        <FaStar className="text-yellow-400 pt-2 text-4xl" />
        <h1 className="text-white pt-1">Favourite Events</h1>
      </div>
      {favourite.map((fav) => {
        return (
          <div
          key={fav.id}
            className="w-[70%] bg-slate-700 p-3 ml-8 mb-3 rounded-xl text-white font-semibold cursor-pointer"
            onClick={() => setStartingPosition(fav.position)}
          >
            <p>{fav.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Favourites;
