import EditDetailsForm from "./EditDetailsForm";
import RoomHistory from "./RoomHistory";

function RoomDetails({ room, roomHistory, settings }) {
  return (
    <>
      <h2 className="text-paleRed mb-6 text-center text-2xl uppercase tracking-widest">
        {room.name}
      </h2>
      <div className="mx-8 flex flex-col justify-between gap-5 lg:gap-10 lg:flex-row">
        <div className="min-w-[20rem] ssm:min-w-[30rem] max-w-[30rem] ssm:max-w-[50rem] flex-1">
          <EditDetailsForm room={room} />
        </div>
        <div className="min-w-[20rem] ssm:min-w-[30rem] max-w-[30rem] ssm:max-w-[50rem] flex-1">
          <RoomHistory roomHistory={roomHistory} settings={settings} />
        </div>
      </div>
    </>
  );
}

export default RoomDetails;
