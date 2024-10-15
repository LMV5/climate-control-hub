// import Room from "@/models/Room";

// export const getRoom = async (roomId) => {
//   try {
//     const room = await Room.findById(roomId).populate("settings").lean();

//     const cleanRoom = room.map((record) => ({
//       ...record,
//       _id: record._id.toString(),
//       currentHumidity: record.currentHumidity,
//       currentTemperature: record.currentTemperature,
//       currentHumidity: record.currentHumidity,
//       coordinates: record.coordinates,
//       currentHumidity: record.currentHumidity,
//       settings: {record.humidityRange: {min, max},
//         record.temperatureRange: {min, max},
//       }

//     }))

//     return cleanRoom;
//   } catch (error) {
//     console.error("Error fetching room:", error);
//     return null;
//   }
// };

import Room from "@/models/Room";

export const getRoom = async (roomId) => {
  const room = await Room.findById(roomId).lean();
  console.log(room);
  return room;
};
