"use client";

import { useState } from "react";

const convertObjectToArray = (obj) => {
  return Object.values(obj);
};

export default function HistoryTable({ history, settings }) {
  const [sortOption, setSortOption] = useState("");
  const historyArray = convertObjectToArray(history);

  const sortedHistory = [...historyArray].sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.changeAt) - new Date(a.changeAt);
    } else if (sortOption === "room") {
      return a.roomId.name.localeCompare(b.roomId.name);
    }

    return 0;
  });

  return (
    <div>
      <div>
        <label htmlFor="sortOption">Sort by: </label>{" "}
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">No sorting</option>
          <option value="date">Sort by date</option>
          <option value="room">Sort by room</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Room</th>
            <th>Date</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Changed by</th>
          </tr>
        </thead>
        <tbody>
          {sortedHistory.length > 0 ? (
            sortedHistory.map((record, index) => (
              <HistoryRow key={index} record={record} />
            ))
          ) : (
            <tr>
              <td colSpan="5">No records found</td>
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
      <td>{record.roomId.name}</td>
      <td>{new Date(record.changeAt).toLocaleDateString()}</td>
      <td>{record.temperature} &deg; C</td>
      <td>{record.humidity} %</td>
      <td>{record.changeBy}</td>
    </tr>
  );
}
