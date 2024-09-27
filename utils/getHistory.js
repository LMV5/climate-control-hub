import History from "@/models/History";

export const getHistory = async () => {
  const history = await History.find().populate("roomId", "name").lean();

  const cleanHistory = history.map((record) => ({
    ...record,
    _id: record._id.toString(),
    roomId: record.roomId
      ? { ...record.roomId, _id: record.roomId._id.toString() }
      : null,
    changeAt: record.changeAt.toISOString(),
  }));

  return cleanHistory;
};
