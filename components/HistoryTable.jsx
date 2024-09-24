function HistoryTable({ record }) {
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

export default HistoryTable;
