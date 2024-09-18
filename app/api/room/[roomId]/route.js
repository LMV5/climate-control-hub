import connectDB from "@/config/database";
import { getRoom } from "@/utils/getRoom";

// GET

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const { roomId } = params;

    const room = await getRoom(roomId);

    if (!room) return new Response("Room not found", { status: 404 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
