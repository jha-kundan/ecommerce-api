const express = require('express');
const review = require('../models/Review');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const reviews = await review.find();
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.post('/', async (req, res) => {
    try {
      const newReview = new review(req.body);
      const savedReview = await newReview.save();
      res.json(savedReview);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;