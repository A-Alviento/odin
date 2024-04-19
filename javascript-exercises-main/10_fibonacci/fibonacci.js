const fibonacci = function (num) {
  let a = 1;
  let b = 1;
  current = 0;
  num = Number(num);

  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  for (let i = 2; i < num; i++) {
    current = a + b;
    a = b;
    b = current;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
