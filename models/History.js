import { Schema, model, models } from "mongoose";

const HistorySchema = new Schema({
  roomId: { type: Schema.Types.ObjectId, ref: "Room" },
  temperature: Number,
  humidity: Number,
  changeAt: Date,
  changeBy: String,
});

const History = models.History || model("History", HistorySchema);
export default History;
