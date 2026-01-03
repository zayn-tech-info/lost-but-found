const mongoose = require("mongoose");

const LostItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  locationLost: { type: String, required: true },
  dateLost: { type: Date, required: true },
  contactInfo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LostItem", LostItemSchema);
