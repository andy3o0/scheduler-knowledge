const mongoose = require("mongoose");
const roomsSchema = new mongoose.Schema({
  name: String,
  id: Number,
  color: String,
  capacity: Number,
  type: String,
});

module.exports = mongoose.models.rooms || mongoose.model("rooms", roomsSchema);
