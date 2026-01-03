const express = require("express");
const router = express.Router();
const LostItem = require("../models/LostItem");

// GET all lost items
router.get("/", async (req, res) => {
  try {
    const items = await LostItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new lost item
router.post("/", async (req, res) => {
  const item = new LostItem({
    itemName: req.body.itemName,
    description: req.body.description,
    locationLost: req.body.locationLost,
    dateLost: req.body.dateLost,
    contactInfo: req.body.contactInfo,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
