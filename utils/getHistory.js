import History from "@/models/History";

export const getHistory = async (roomId) => {
  const history = await History.findById({ roomId })
    .populate("roomId", "name")
    .lean();
  return history;
};
