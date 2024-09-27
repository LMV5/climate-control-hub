export default async function RoomHistory({ roomId, roomHistory }) {
  if (roomHistory.length === 0) {
    return <p>No history available</p>;
  }

  if (!roomHistory) {
    return <p>No history available</p>;
  }

  return (
    <div>
      <h2>History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Changed by</th>
          </tr>
        </thead>

        <tbody>
          {roomHistory.map((record) => (
            <tr key={record._id}>
              <td>{new Date(record.changeAt).toLocaleDateString()}</td>
              <td>{record.temperature} &deg;C</td>
              <td>{record.humidity} %</td>
              <td>{record.changeBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
