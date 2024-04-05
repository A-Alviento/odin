const reverseString = function (word) {
  reverseWord = "";

  for (let i = 0; i < word.length; i++) {
    reverseWord += word[word.length - i - 1];
  }

  return reverseWord;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
