'use strict';

const express = require('express');
const router = express.Router();
const Hotels = require('../../models/hotel');

router.get('/', (req, res, next) => {
  Hotels.findAll({})
  .then((hotels) => {
    res.send(hotels);
  })
  .catch(next);
});

module.exports = router;
