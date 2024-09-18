import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
  name: String,
  currentTemperature: Number,
  currentHumidity: Number,
  settings: {
    temperatureUnit: String,
    temperatureRange: {
      min: Number,
      max: Number,
    },
    humidityRange: {
      min: Number,
      max: Number,
    },
  },
  updateAt: Date,
  updateBy: String,
});

const Room = models.Room || model("Room", RoomSchema);
export default Room;
