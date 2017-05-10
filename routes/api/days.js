// '/api/days'
'use strict';

const express = require('express');
const router = express.Router();
const Days = require('../../models/day');

router.get('/', (req, res, next) => {
  Days.findAll({})
  .then((days) => {
    res.send(days);
  })
  .catch(next);
});

// Get by id
router.get('/:id', (req, res, next) => {
  Days.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((day) => {
    res.send(day);
  })
  .catch(next);
});

// Create (POST) new day
router.post('/', (req, res, next) => {
  Days.create({})
  .then((day) => {
    res.send(day);
  })
  .catch(next);
});

// Remove day
router.delete('/:id', (req, res, next) => {

});

// Update day
router.put('/:id', (req, res, next) => {

});

// Restaurants based on id
router.get('/:id/restaurants', (req, res, next) => {
  
});

// Activities by id
router.get('/:id/activities', (req, res, next) => {

});

// Hotel by id
router.get('/:id/hotel', (req, res, next) => {

});

module.exports = router;
