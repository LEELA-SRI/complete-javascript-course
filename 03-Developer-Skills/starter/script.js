// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let temp1 = [3, -2, -6, -1, 9, "error", 13, 17, 15, 14, 9, 5];
let temp2 = [5, -7, 9, 14, -6, 13, 4, 8];
let temps = temp1.concat(temp2);
let max = temps[0];
let min = temps[0];
for (let i = 0; i < temps.length; i++) {
  if (temps[i] > max) max = temps[i];
  if (temps[i] < min) min = temps[i];
}
console.log(max - min);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures,
 the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ...
 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' 
and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and
 break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
let printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]} in ${i + 1} days...`);
  }
};
printForecast([12, 5, -5, 0, 4]);
