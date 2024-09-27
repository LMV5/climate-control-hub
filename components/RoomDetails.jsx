import EditDetailsForm from "./EditDetailsForm";
import RoomHistory from "./RoomHistory";

function RoomDetails({ room, roomHistory }) {
  return (
    <div>
      <p>IMAGE</p>
      <p>{room.name}</p>
      <EditDetailsForm room={room} />
      <div>
        <RoomHistory roomHistory={roomHistory} />
      </div>
    </div>
  );
}

export default RoomDetails;
