export default async function RoomHistory({ roomHistory }) {
  if (roomHistory.length === 0) {
    return <p>No history available</p>;
  }

  if (!roomHistory) {
    return <p>No history available</p>;
  }

  return (
    <div className="mt-5 rounded-lg bg-white p-4 shadow-md">
      <h4 className="text-paleRed mb-4 text-center text-lg uppercase tracking-widest">
        Room Change History
      </h4>
      <table className="text-paleRed w-full border-collapse">
        <thead>
          <tr>
            <th className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black">
              Date
            </th>
            <th className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black">
              Temperature
            </th>
            <th className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black">
              Humidity
            </th>
          </tr>
        </thead>

        <tbody>
          {roomHistory.map((record) => {
            return (
              <tr key={record._id}>
                <td className="border-paleYellow border-b p-2">
                  {new Date(record.changeAt).toLocaleDateString()}
                </td>
                <td className="border-paleYellow border-b p-2">
                  {record.temperature} &deg;C
                </td>
                <td className="border-paleYellow border-b p-2">
                  {record.humidity} %
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
