# dayjs-precise-range
This is a plugin for the <a href="https://github.com/iamkun/dayjs">dayjs.js</a> and inspired from  <a href="https://codebox.net/pages/moment-date-range-plugin">moment-date-range-plugin</a>
In the example below the difference between the 2 dates is 1 month, 2 days, 3 hours, 4 minutes and 5 seconds exactly, however this is simplified to just 'a month' by the library.

    var dayjs = require('dayjs');
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    var m1 = dayjs('2014-01-01 12:00:00');
    var m2 = dayjs('2014-02-03 15:04:05');
    var diff = m1().from(m2,true) // 'a month'


Using the plugin, we can display the exact difference using the same 2 dates:

    var dayjs = require('dayjs');
    var preciseDiff = require('dayjs-precise-range');
    //or
    //var preciseDiff = require('dayjs/plugin/preciseDiff')
    dayjs.extend(preciseDiff);
    var m1 = dayjs('2014-01-01 12:00:00');
    var m2 = dayjs('2014-02-03 15:04:05');
    var diff = dayjs.preciseDiff(m1, m2); // '1 month 2 days 3 hours 4 minutes 5 seconds'

To obtain the numeric values rather than a string, pass the value `true` as the third argument to the method:

    var diff = moment.preciseDiff(m1, m2, true); // {years : 0, months : 1, days : 2, hours : 3, minutes : 4, seconds : 5}

## Usage

### HTML/Browser

To use the plugin in a web page, add a `<script>` tag referencing the moment-precise-range.js file, ensuring that the tag appears
after the tag used to include the moment.js library:

    <script src="/scripts/days.js"></script>
    <script src="/scripts/days-precise-range.js"></script>

### Node.js

To use the plugin within a node.js application, add the following `require` statement into your code:

    require('days-precise-range-plugin');
