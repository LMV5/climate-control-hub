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

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div>
      {/* <RoomDetails room={room} roomHistory={roomHistory} /> */}
      <RoomDetails room={room} />
    </div>
  );
};

export default Page;
