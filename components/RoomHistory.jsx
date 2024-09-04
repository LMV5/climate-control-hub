export default function RoomHistory() {
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

        <tbody>
          <tr>
            <td>Name</td>
            <td>04/09/2024</td>
            <td>23 &deg;C</td>
            <td>45 %</td>
            <td>Tom</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
