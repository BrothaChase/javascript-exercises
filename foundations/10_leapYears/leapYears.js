/* Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>
> -- [Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine

```javascript
leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false
``` */

const leapYears = function (year) {
  if (year % 400 === 0) {
    return year + " " + "is a leap year";
  }
  if (year % 100 === 0) {
    return year + " " + "is not a leap year";
  }
  if (year % 4 === 0) {
    return year + " is not a leap year";
  } else {
    return year + " is a leap year";
  }
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
