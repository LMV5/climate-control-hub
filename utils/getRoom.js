import Room from "@/models/Room";

export const getRoom = async (roomId) => {
  const room = await Room.findOne({ name: roomId }).lean();
  room._id = room._id.toString();
  return room;
};
