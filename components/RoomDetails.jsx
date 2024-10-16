import EditDetailsForm from "./EditDetailsForm";
import RoomHistory from "./RoomHistory";

function RoomDetails({ room, roomHistory, settings }) {
  return (
    <>
      <h2 className="title">{room.name}</h2>
      <div className="room__details">
        <div className="halfWidth">
          <EditDetailsForm room={room} />
        </div>
        <div className="halfWidth">
          <RoomHistory roomHistory={roomHistory} settings={settings} />
        </div>
      </div>
    </>
  );
}

export default RoomDetails;
