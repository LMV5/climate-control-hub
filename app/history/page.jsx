import HistoryTable from "@/components/HistoryTable";
import { getHistory } from "@/utils/getHistory";
import connectDB from "@/config/database";

export default async function Page() {
  await connectDB();

  const history = await getHistory();

  if (!history) {
    return <div>History is empty</div>;
  }

  return (
    <div>
      <h2>History</h2>
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
          {history.map((record, index) => (
            <HistoryTable record={record} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// "use client";

// import HistoryTable from "@/components/HistoryTable";
// import connectDB from "@/config/database";
// import { getHistory } from "@/utils/getHistory";
// import { useState } from "react";

// export default async function Page() {
//   await connectDB();
//   const [sortOption, setSortOption] = useState("");

//   const history = await getHistory();

//   if (!history) {
//     return <div>History is empty</div>;
//   }

//   const sortedHistory = [...history].sort((a, b) => {
//     if (sortOption === "date") {
//       return b.changeAt - a.changeAt;
//     } else if (sortOption === "room") {
//       return a.roomId.name.localeCompare(b.roomId.name);
//     }

//     return 0;
//   });

//   return (
//     <div>
//       <h2>History</h2>
//       <div>
//         <label htmlFor="sortOption">Sort by: </label>
//         <select
//           id="sortOption"
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="">No sorting</option>
//           <option value="date">Sort by date</option>
//           <option value="room">Sort by room</option>
//         </select>
//       </div>
//       {sortedHistory.length > 0 ? (
//         sortedHistory.map((record, index) => (
//           <HistoryTable record={record} key={index} />
//         ))
//       ) : (
//         <tr>
//           <td colSpan="5">No records found</td>
//         </tr>
//       )}

//       <table>
//         <thead>
//           <tr>
//             <th>Room</th>
//             <th>Date</th>
//             <th>Temperature</th>
//             <th>Humidity</th>
//             <th>Changed by</th>
//           </tr>
//         </thead>

// <tbody>
//   {history.map((record, index) => (
//     <HistoryTable record={record} key={index} />
//   ))}
// </tbody>
//       </table>
//     </div>
//   );
// }
