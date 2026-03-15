const reverseString = function (string) {
  let letters = string.split("");
  let reversedWords = letters.reverse().join("");
  return reversedWords;
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
