'use strict'

const Candy = require('../db/models/Candy');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
