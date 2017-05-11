// '/api/days'
'use strict';

const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const Days = require('../../models/day');
const Hotel = require('../../models/hotel');
const Restaurants = require('../../models/restaurant');
const Activities = require('../../models/activity');

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
  Days.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Restaurants
    }]
  })
  .then((day) => {
    res.send(day.restaurants);
  })
  .catch(next);
});

// Activities by id
router.get('/:id/activities', (req, res, next) => {
  Days.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Activities
    }]
  })
  .then((day) => {
    res.send(day.activities);
  })
  .catch(next);
});

// Hotel by id
router.get('/:id/hotel', (req, res, next) => {
  Days.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Hotel
    }]
  })
  .then((day) => {
    res.send(day.hotel);
  })
  .catch(next);
});

router.post('/:id/restaurant/:restaurantId', (req, res, next) => {
  Days.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((day) => {
    day.addRestaurants([req.params.restaurantId]);
  })
  .catch(next);
});

router.post('/:id/activity/:activityId', (req, res, next) => {
  Days.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((day) => {
    day.addActivities([req.params.activityId]);
  })
  .catch(next);
});

router.post('/:id/hotel/:hotelId', (req, res, next) => {
  Days.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((day) => {
    day.setHotel([req.params.hotelId]);
  })
  .catch(next);
});

module.exports = router;
