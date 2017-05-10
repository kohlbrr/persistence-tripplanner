'use strict';

const express = require('express');
const router = express.Router();
const Restaurants = require('../../models/restaurant');

router.get('/', (req, res, next) => {
  Restaurants.findAll({})
  .then((resturaunts) => {
    res.send(resturaunts);
  })
  .catch(next);
});

module.exports = router;
