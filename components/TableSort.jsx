// "use client";

// import { useState } from "react";

// function TableSort() {
//   const [roomSort, setRoomSort] = useState("");
//   const [dateSort, setDateSort] = useState("");

//   // const sortedHistory = history.filter((record) => {
//   //   const sortedByRoom = roomSort
//   //     ? record.roomId.name.toLowerCase().includes(roomSort.toLowerCase())
//   //     : true;
//   //   const sortedByDate = dateSort
//   //     ? new Date(record.changeAt).toLocaleDateString() === dateSort
//   //     : true;

//   //   return sortedByRoom && sortedByDate;
//   // });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Sort by room"
//         value={roomSort}
//         onChange={(e) => setRoomSort(e.target.value)}
//       />
//       <input
//         type="date"
//         placeholder="Sort by date"
//         value={dateSort}
//         onChange={(e) => setDateSort(e.target.value)}
//       />
//     </div>
//   );
// }

// export default TableSort;
