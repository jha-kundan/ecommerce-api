const express = require('express');
const inventory = require('../models/Inventory');
const { route } = require('./userRoutes');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const inventory = await inventory.find();
      res.json(inventory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.post('/', async (req, res) => {
    try {
      const newInventory = new inventory(req.body);
      const savedInventory = await newInventory.save();
      res.json(savedInventory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;