const express = require('express');
const Product = require('../models/Product');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/search/:keyword', async (req, res) => {
  try {
    const { keyword } = req.params;
    const products = await Product.find({
      $or: [
        { name: { $regex: keyword, $options: 'i' } }

      ]
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

