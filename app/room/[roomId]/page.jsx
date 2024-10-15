import RoomDetails from "@/components/RoomDetails";
import connectDB from "@/config/database";
import { getRoom } from "@/utils/getRoom";
import { getRoomHistory } from "@/utils/getRoomHistory";
import { getSettings } from "@/utils/getSettings";

const Page = async ({ params }) => {
  await connectDB();
  const { roomId } = params;

  const room = await getRoom(roomId);
  const roomHistory = await getRoomHistory(roomId);
  const settingsArray = await getSettings();
  const settings = settingsArray[0];
  console.log(room);

  if (!room) {
    return <div>Room not found</div>;
  }

  const cleanRoom = {
    ...room,
    _id: room._id,
  };

  return (
    <div>
      <RoomDetails
        room={cleanRoom}
        roomHistory={roomHistory}
        settings={settings}
      />
    </div>
  );
};

export default Page;
