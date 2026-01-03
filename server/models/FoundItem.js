const mongoose = require("mongoose");

const FoundItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  locationFound: { type: String, required: true },
  dateFound: { type: Date, required: true },
  contactInfo: { type: String, required: true },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FoundItem", FoundItemSchema);
