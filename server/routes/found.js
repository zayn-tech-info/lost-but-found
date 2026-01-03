const express = require("express");
const router = express.Router();
const FoundItem = require("../models/FoundItem");

const multer = require("multer");
const path = require("path");

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// GET all found items
router.get("/", async (req, res) => {
  try {
    const items = await FoundItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new found item
router.post("/", upload.single("image"), async (req, res) => {
  const item = new FoundItem({
    itemName: req.body.itemName,
    description: req.body.description,
    locationFound: req.body.locationFound,
    dateFound: req.body.dateFound,
    contactInfo: req.body.contactInfo,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
