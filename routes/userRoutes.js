const express = require('express');
const users = require('../models/users');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const user = await users.find();
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newUser = new users(req.body);
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  module.exports = router;