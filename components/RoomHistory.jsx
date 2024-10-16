export default async function RoomHistory({ roomHistory }) {
  if (roomHistory.length === 0) {
    return <p>No history available</p>;
  }

  if (!roomHistory) {
    return <p>No history available</p>;
  }

  return (
    <div className="history__container">
      <h4 className="title">Room Change History</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {roomHistory.map((record) => {
            return (
              <tr key={record._id}>
                <td>{new Date(record.changeAt).toLocaleDateString()}</td>
                <td>{record.temperature} &deg;C</td>
                <td>{record.humidity} %</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
