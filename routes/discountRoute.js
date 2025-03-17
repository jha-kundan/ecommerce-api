const express = require('express');
const Discount = require('../models/Discount'); 
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const discounts = await Discount.find(); 
      res.json(discounts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.post('/', async (req, res) => {
    try {
      const newDiscount = new Discount(req.body); 
      const savedDiscount = await newDiscount.save();
      res.json(savedDiscount);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.delete('/:id', async (req, res) => {
    try {
      const deletedDiscount = await Discount.findByIdAndDelete(req.params.id); 
      res.json(deletedDiscount);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;