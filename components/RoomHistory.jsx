export default async function RoomHistory({ roomHistory }) {
   return (
    <section className="mt-5 rounded-lg p-4 shadow-[0_1px_5px_rgba(178,178,178,0.2)]">
      <h3 className="text-paleGrey mb-4 text-center text-lg uppercase tracking-widest">
        Room Change History
      </h3>
      {roomHistory && roomHistory.length > 0 ? (
       <table className="text-paleGrey w-full border-collapse">
        <thead>
          <tr>
            <th
              scope="col"
              className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black"
            >
              Date
            </th>
            <th
              scope="col"
              className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black"
              >
              Temperature
            </th>
            <th
              scope="col"
              className="border-paleYellow bg-paleYellowOpacity border-b p-2 text-left text-black"
              >
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
      </table>)
      : (<p className="text-center text-paleGrey">No history yet</p>)}
    </section>
  );
}
