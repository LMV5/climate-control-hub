import History from "@/models/History";

export const getRoomHistory = async (roomId) => {
  try {
    const roomHistory = await History.find({ roomId })
      .populate("roomId", "name")
      .lean();

    const cleanHistory = roomHistory.map((record) => ({
      ...record,
      _id: record._id.toString(),
      roomId: record.roomId.name,
    }));

    return cleanHistory;
  } catch (error) {
    console.error("Error fetching room history:", error);
    return [];
  }
};
