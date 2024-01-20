import data from "../historicalEventsData.json";

function Filter({ setEventsData }) {
  let categorys = new Set(
    data.map((historicalEvent) => historicalEvent.category)
  );

  function filterEventsData(category) {
    category === "All"
      ? setEventsData(data)
      : setEventsData(
          data.filter(
            (historicalEvent) => historicalEvent.category === category
          )
        );
  }

  return (
    <select
      onChange={(e) => filterEventsData(e.target.value)}
      className="bg-dark-bg text-white ml-8 mb-4 mt-2 p-2.5 w-60 border-2 xl:mt-6 rounded-lg border-gray-400 focus:ring-blue-500 focus:border-blue-500"
    >
      {["All", ...categorys].map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
}

export default Filter;
