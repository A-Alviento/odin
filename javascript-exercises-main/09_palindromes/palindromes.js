const palindromes = function (word) {
  word = word.toLowerCase().replace(/[^a-z0-9]/g, '')
  reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
