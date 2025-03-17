const express = require('express');
const orders = require('../models/Order');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const order = await orders.find();
      res.json(order);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.post('/', async (req, res) => {
    try {
      const newOrder = new orders(req.body);
      const savedOrder = await newOrder.save();
      res.json(savedOrder);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.delete('/:id', async (req, res) => {
    try {
      const deletedOrder = await orders.findByIdAndDelete(req.params.id);
      res.json(deletedOrder);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.get('/search', async (req, res) => {
  try {
      const { keyword } = req.query;
      if (!keyword) {
          return res.status(400).json({ error: 'Keyword query parameter is required' });
      }
      const ordersFound = await orders.find({
          details: { $regex: keyword, $options: 'i' }
      });
      res.json(ordersFound);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await
      Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
);


module.exports = router;