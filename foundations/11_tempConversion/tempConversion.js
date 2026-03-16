/* Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
```
convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32
```

Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`. */

const convertToCelsius = function (temp) {
  let celsius = (temp - 32) * (5 / 9);
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function (temp) {
  let fahrenheit = (temp * 9) / 5 + 32;
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
