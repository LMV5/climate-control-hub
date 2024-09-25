// import connectDB from "@/config/database";
// import { getRoom } from "@/utils/getRoom";
// import { getRoomHistory } from "@/utils/getRoomHistory";
// import Room from "@/models/Room";
// import History from "@/models/History";

// // GET

// export const GET = async (request, { params }) => {
//   try {
//     await connectDB();
//     const { roomId } = params;
//     const room = await getRoom(roomId);
//     const roomHistory = await getRoomHistory(roomId);

//     if (!room) return new Response("Room not found", { status: 404 });
//     if (!roomHistory) return new Response("History not found", { status: 404 });

//     return new Response(JSON.stringify(room, roomHistory), { status: 200 });
//   } catch (error) {
//     return new Response("Something went wrong", { status: 500 });
//   }
// };
