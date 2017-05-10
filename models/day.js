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
  Day.findAll({
    limit: 1,
    order: [['number', 'DESC']]
  })
  .then((foundDay) => {
    // oh fuck how do we do this
    console.log(day);
    day.setDataValue('number', foundDay[0].number+1);
    console.log(day.number)
  })
  .catch(console.error);
});

// We will probs need a class method to remove a day and
// decriment all days afterwards

module.exports = Day;
