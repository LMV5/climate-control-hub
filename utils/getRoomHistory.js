import History from "@/models/History";

export const getRoomHistory = async (roomId) => {
  try {
    const roomHistory = await History.find({ roomId: roomId }).lean();
    return roomHistory;
  } catch (error) {
    console.error("Error fetching room history:", error);
    return [];
  }
};
