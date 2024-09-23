import connectDB from "@/config/database";
import { getRoom } from "@/utils/getRoom";
import Room from "@/models/Room";
import History from "@/models/History";

// GET

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const { roomId } = params;
    const room = await getRoom(roomId);

    if (!room) return new Response("Room not found", { status: 404 });
    const simplifiedRoom = {
      ...room,
      _id: room._id.toString(),
    };

    return new Response(JSON.stringify(simplifiedRoom), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

// PUT

export const PUT = async (request, { params }) => {
  try {
    await connectDB();
    const { roomId } = params;
    const updatedData = await request.json();
    const room = await Room.findById(roomId);

    if (!room) return new Response("Room not found", { status: 404 });

    // update room's data

    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      {
        currentTemperature: updatedData.currentTemperature,
        currentHumidity: updatedData.currentHumidity,
      },

      { new: true }
    );

    // save changes in history

    const historyChanges = new History({
      roomId: room._id,
      temperature: updatedData.currentTemperature,
      humidity: updatedData.currentHumidity,
      changeAt: new Date(),
      changeBy: "User",
    });
    await historyChanges.save();

    if (!updatedRoom) return new Response("Room not found", { status: 404 });

    return new Response(JSON.stringify(updatedRoom), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};