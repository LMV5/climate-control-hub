import Room from "@/models/Room";

export const getRoom = async (roomId) => {
  const room = await Room.findOne({ name: roomId }).lean();
  return room;
};
