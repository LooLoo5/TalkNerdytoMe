const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raidSchema = new Schema({
  pokemon: String,
  level: Number,
  hatched: Boolean,
  timeLeft: Number,
  raiders: Number,
});

const Raid = mongoose.model("Raid", raidSchema);

module.exports = Raid;