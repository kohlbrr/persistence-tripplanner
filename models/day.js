'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

// We will probs need a class method to remove a day and
// decriment all days afterwards

module.exports = Day;
