"use client";

import { useState } from "react";

function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// const Wrapper = styled.div`
//   margin: 20px 0;
//   padding: 15px;
//   border: 1px solid #f3f9d2;
//   border-radius: 8px;
//   box-shadow: 0 1px 5px rgba(178, 178, 178, 0.2);
// `;

// const SortContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin: 1rem 0;
//   gap: 1.2rem;
// `;

// const Label = styled.label`
//   margin-top: 0.3rem;
//   letter-spacing: 0.2rem;
//   color: #ebd8da;
// `;

// const Select = styled.select`
//   padding: 5px;
//   border: 1px solid #f3f9d2;
//   border-radius: 4px;
//   color: #000;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   color: #ebd8da;
// `;

// const TableHeader = styled.th`
//   padding: 10px;
//   border-bottom: 1px solid #f3f9d2;
//   text-align: left;
//   color: #000;
//   background-color: #f3f9d2aa;
// `;

// const TableCell = styled.td`
//   padding: 10px;
//   border-bottom: 1px solid #f3f9d2;
// `;

// const TableCellCentered = styled(TableCell)`
//   text-align: center;
// `;

// const NoRecordsMessage = styled.td`
//   text-align: center;
//   padding: 20px;
//   color: #f3f9d2;
// `;

const convertObjectToArray = (obj) => {
  return Object.values(obj);
};

export default function HistoryTable({ history }) {
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
    <div className="border-softYellow my-5 rounded-lg border p-4 shadow-sm">
      <div className="mb-4 flex justify-end gap-5">
        <label
          htmlFor="sortOption"
          className="text-paleRed mt-1 tracking-wider"
        >
          Sort by:{" "}
        </label>{" "}
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border-softYellow rounded-md border p-2 text-black"
        >
          <option value="">No sorting</option>
          <option value="date">Sort by date</option>
          <option value="room">Sort by room</option>
        </select>
      </div>
      <table className="text-paleRed w-full border-collapse">
        <thead>
          <tr>
            <th className="border-softYellow bg-softYellow/50 border-b p-3 text-left text-black">
              Room
            </th>
            <th className="border-softYellow bg-softYellow/50 border-b p-3 text-left text-black">
              Date
            </th>
            <th className="border-softYellow bg-softYellow/50 border-b p-3 text-left text-black">
              Temperature
            </th>
            <th className="border-softYellow bg-softYellow/50 border-b p-3 text-left text-black">
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
              <td colSpan="4" className="text-softYellow p-5 text-center">
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
      <td className="border-softYellow border-b p-3">
        {capitalizeFirstLetter(record.roomId.name)}
      </td>
      <td className="border-softYellow border-b p-3">
        {new Date(record.changeAt).toLocaleDateString()}
      </td>
      <td className="border-softYellow border-b p-3">
        {record.temperature} &deg; C
      </td>
      <td className="border-softYellow border-b p-3">{record.humidity} %</td>
    </tr>
  );
}
