import History from "@/models/History";

export const getHistory = async () => {
  const history = await History.find().populate("roomId", "name").lean();
  return history;
};
