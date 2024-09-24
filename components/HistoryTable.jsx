export default function HistoryTable({ history }) {
  return (
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
          <HistoryRow key={index} record={record} />
        ))}
      </tbody>
    </table>
  );
}

function HistoryRow({ record }) {
  return (
    <tr>
      <td>{record.roomId.name}</td>
      <td>{new Date(record.changeAt).toLocaleDateString()}</td>
      <td>{record.temperature} &deg;C</td>
      <td>{record.humidity} %</td>
      <td>{record.changeBy}</td>
    </tr>
  );
}
