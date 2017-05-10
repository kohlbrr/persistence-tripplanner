'use strict';

const express = require('express');
const router = express.Router();
const Activities = require('../../models/activity');

router.get('/', (req, res, next) => {
  Activities.findAll({})
  .then((activities) => {
    res.send(activities);
  })
  .catch(next);
});

module.exports = router;
