const repeatString = function (word, numRepeat) {
  if (numRepeat < 0) return "ERROR";
  let repeatWord = "";
  for (i = 0; i < numRepeat; i++) {
    repeatWord += word;
  }
  return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;
