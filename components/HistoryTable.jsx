"use client";

import { useState } from "react";

function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const convertObjectToArray = (obj) => {
  return Object.values(obj);
};

export default function HistoryTable({ history }) {
  const [sortOption, setSortOption] = useState("");
  const historyArray = convertObjectToArray(history);
console.log(history);

  const sortedHistory = [...historyArray].sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.changeAt) - new Date(a.changeAt);
    } else if (sortOption === "room") {
      return a.roomId.name.localeCompare(b.roomId.name);
    }

    return 0;
  });

  return (
    <div className="my-5 rounded-lg p-4 shadow-[0_1px_5px_rgba(178,178,178,0.2)]">
      <div className="mb-4 flex justify-end gap-5">
        <label
          htmlFor="sortOption"
          className="text-paleGrey mt-1 tracking-wider"
        >
          Sort by:{" "}
        </label>{" "}
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="focus:border-paleYellow bg-paleYellowOpacity rounded-md border p-1 text-black"
        >
          <option value="">No sorting</option>
          <option value="date">Sort by date</option>
          <option value="room">Sort by room</option>
        </select>
      </div>
      <table className="text-paleGrey w-full border-collapse">
        <thead>
          <tr>
            <th
              scope="col"
              className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black"
            >
              Room
            </th>
            <th
              scope="col"
              className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black"
            >
              Date
            </th>
            <th
              scope="col"
              className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black"
            >
              Temperature
            </th>
            <th
              scope="col"
              className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black"
            >
              Humidity
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedHistory.length > 0 ? (
            sortedHistory.map((record, index) => (
              <HistoryRow key={index} record={record} />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border-paleYellow border-b p-2">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function HistoryRow({ record }) {
  return (
    <tr>
      <td className="border-paleYellow border-b p-2">
        {capitalizeFirstLetter(record.roomId.name)}
      </td>
      <td className="border-paleYellow border-b p-2">
        {new Date(record.changeAt).toLocaleDateString()}
      </td>
      <td className="border-paleYellow border-b p-2 text-center">
        {record.temperature} &deg; C
      </td>
      <td className="border-paleYellow border-b p-2 text-center">
        {record.humidity} %
      </td>
    </tr>
  );
}
