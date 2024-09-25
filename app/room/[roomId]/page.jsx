import RoomDetails from "@/components/RoomDetails";
import connectDB from "@/config/database";
import { getRoom } from "@/utils/getRoom";
import { getRoomHistory } from "@/utils/getRoomHistory";

const Page = async ({ params }) => {
  await connectDB();
  const { roomId } = params;

  const room = await getRoom(roomId);
  const roomHistory = await getRoomHistory(roomId);
  console.log(roomHistory);
  // console.log(room);

  if (!room) {
    return <div>Room not found</div>;
  }

  const cleanRoom = {
    ...room,
    _id: room._id.toString(),
  };

  return (
    <div>
      {/* <RoomDetails room={room} roomHistory={roomHistory} /> */}
      <RoomDetails room={cleanRoom} />
    </div>
  );
};

export default Page;
