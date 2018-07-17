var dayjs = require('dayjs');
var preciseDiff = require('../index.js');
//or
//var preciseDiff = require('dayjs/plugin/preciseDiff')
dayjs.extend(preciseDiff);
var m1 = dayjs('2014-01-01 12:00:00');
var m2 = dayjs('2014-02-03 15:04:05');
var diff = dayjs.preciseDiff(m1, m2); // '1 month 2 days 3 hours 4 minutes 5 seconds'
console.log("diff",diff);
