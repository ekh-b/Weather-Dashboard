













// 5 day forecast

// 1 Day from now- used a stackoverflow forum to understand how to get the date to display instead of time- 1st link in the repo under credits.

var oneDay = moment().add(1, 'days').format('DD/MM/YYYY')
$("#1D").text(oneDay);


// 2 Days from now

var twoDay = moment().add(2, 'days').format('DD/MM/YYYY')
$("#2D").text(twoDay);


// 3 Days from now

var threeDay = moment().add(3, 'days').format('DD/MM/YYYY')
$("#3D").text(threeDay);


// 4 Days from now

var fourDay = moment().add(4, 'days').format('DD/MM/YYYY')
$("#4D").text(fourDay);


// 5 Days from now
var fiveDay = moment().add(5, 'days').format('DD/MM/YYYY')
$("#5D").text(fiveDay);

