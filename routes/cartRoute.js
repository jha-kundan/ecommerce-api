const express = require('express');
const carts = require('../models/Cart');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const cart = await carts.find();
      res.json(cart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.post('/', async (req, res) => {
    try {
      const newCart = new carts(req.body);
      const savedCart = await newCart.save();
      res.json(savedCart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);
router.delete('/:id', async (req, res) => {
    try {
      const deletedCart = await carts.findByIdAndDelete(req.params.id);
      res.json(deletedCart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);


module.exports = router;