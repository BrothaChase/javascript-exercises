// Implement a function that takes an array and some other arguments then removes the other arguments from that array, and returns the resulting array:

/* ```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

See if you can make use of some built-in array methods in this exercise. */

const removeFromArray = function (array, ...args) {
  return array.filter((item) => !args.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
