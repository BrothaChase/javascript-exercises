// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

/*```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
``` */

const sumAll = function (start, end) {
  if (start > end) {
    [start, end] = [end, start]; // this swaps the values so they are put in order
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i; // same as sum = sum + i
  }
  return sum;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
