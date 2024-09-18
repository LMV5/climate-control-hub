import RoomDetails from "@/components/RoomDetails";
import connectDB from "@/config/database";
import { getRoom } from "@/utils/getRoom";

const Page = async ({ params }) => {
  await connectDB();
  const { roomId } = params;

  const room = await getRoom(roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div>
      <RoomDetails room={room} key={room._id} />
    </div>
  );
};

export default Page;
