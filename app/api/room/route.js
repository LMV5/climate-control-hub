import connectDB from "@/config/database";
import Room from "@/models/Room";

// GET

export const GET = async (request) => {
  try {
    await connectDB();

    const rooms = await Room.find().lean();

    if (!rooms) return new Response("Rooms not found", { status: 404 });

    const response = new Response(JSON.stringify(rooms), { status: 200 });

    // response.headers.set("Cache-Control", "public, max-age=3600, immutable");

    return response;
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
