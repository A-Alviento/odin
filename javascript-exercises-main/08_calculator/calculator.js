const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let arr = [1];

  while (a > 0) {
    arr.push(a--);
  }

  return multiply(arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
