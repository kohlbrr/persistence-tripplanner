'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

Day.hook('beforeValidate', (day) => {
  // Remember to return async operations in hooks
  return Day.findAll({
    limit: 1,
    order: [['number', 'DESC']]
  })
  .then((foundDay) => {
    day.number = foundDay[0].number+1;
  })
  .catch(console.error);
});

// We will probs need a class method to remove a day and
// decriment all days afterwards

module.exports = Day;
