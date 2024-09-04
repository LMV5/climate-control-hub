import EditDetailsForm from "./EditDetailsForm";
import RoomHistory from "./RoomHistory";

function RoomDetails() {
  return (
    <div>
      <p>IMAGE</p>
      <EditDetailsForm />
      <div>
        <button>History</button>
        <RoomHistory />
      </div>
    </div>
  );
}

export default RoomDetails;
