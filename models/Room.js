import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
  name: String,
  currentTemperature: Number,
  currentHumidity: Number,
  updateAt: Date,
  updateBy: String,
  coordinates: { type: String, required: true },
});

const Room = models.Room || model("Room", RoomSchema);
export default Room;
