import { Schema, model, models } from "mongoose";

const SettingsSchema = new Schema({
  roomId: { type: Schema.Types.ObjectId, ref: "Room" },
  language: { type: String, default: "en" },
  temperatureUnit: { type: String, default: "Celsius" },
  temperatureRange: {
    min: Number,
    max: Number,
  },
  humidityRange: {
    min: Number,
    max: Number,
  },
});

const Settings = models.Settings || model("Settings", SettingsSchema);
export default Settings;
