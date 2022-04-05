const mongoose = require("mongoose");
const meetingSchema = new mongoose.Schema(
  {
    Subject: String,
    Description: String,
    StartTime: String,
    EndTime: String,
    RoomId: String,
    date: String,
  }
  // subjects: [String],
);

module.exports =
  mongoose.models.meetings || mongoose.model("meetings", meetingSchema);
