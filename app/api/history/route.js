import connectDB from "@/config/database";
import { getHistory } from "@/utils/getHistory";
import { getRoom } from "@/utils/getRoom";

// GET

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const roomId = params;
    const room = await getRoom(roomId);
    const history = await getHistory();

    if (!history) return new Response("History not found", { status: 404 });
    if (!room) return new Response("Room not found", { status: 404 });

    return new Response(JSON.stringify({ history, room }), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
