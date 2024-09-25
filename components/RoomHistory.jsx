"use client";

import connectDB from "@/config/database";

export default async function RoomHistory({ roomHistory }) {
  await connectDB();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>History</h2>
      <h3>Name of the room</h3>

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

        {/* <tbody>
          {roomHistory.map((record) => (
            <tr key={record._id}>
              <td>{record.roomId.name}</td>
              <td>{new Date(record.changeAt).toLocaleDateString()}</td>
              <td>{record.temperature} &deg;C</td>
              <td>{record.humidity} %</td>
              <td>{record.changeBy}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}
