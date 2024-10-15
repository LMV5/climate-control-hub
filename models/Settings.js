import { Schema, model, models } from "mongoose";

const SettingsSchema = new Schema({
  temperatureRange: {
    min: { type: Number, default: 16 },
    max: { type: Number, default: 26 },
  },
  humidityRange: {
    min: { type: Number, default: 30 },
    max: { type: Number, default: 60 },
  },
});

const Settings = models.Settings || model("Settings", SettingsSchema);
export default Settings;
