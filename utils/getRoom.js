import Room from "@/models/Room";

export const getRoom = async (roomId) => {
  const room = await Room.findById(roomId).lean();
  console.log(room);
  return room;
};
