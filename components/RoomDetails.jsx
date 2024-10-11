import EditDetailsForm from "./EditDetailsForm";
import RoomHistory from "./RoomHistory";

function RoomDetails({ room, roomHistory, settings }) {
  return (
    <div>
      <p>IMAGE</p>
      <p>{room.name}</p>
      <EditDetailsForm room={room} settings={settings} />
      <div>
        <RoomHistory roomHistory={roomHistory} settings={settings} />
      </div>
    </div>
  );
}

export default RoomDetails;
