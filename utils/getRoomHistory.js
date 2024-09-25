import History from "@/models/History";

export const getRoomHistory = async (id) => {
  const roomHistory = await History.findById({ id })
    // .populate("roomId", "name")
    .lean();
  return roomHistory;
};
