import History from "@/models/History";

export const getRoomHistory = async (roomId) => {
  const roomHistory = await History.findOne({ roomId: roomId })
    // .populate("roomId", "name")
    .lean();
  return roomHistory;
};
