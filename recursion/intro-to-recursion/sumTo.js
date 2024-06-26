const sumTo_Iter = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
};

const sumTo_recursion = (n) => {
  if (n === 1) return n;

  return (n += sumTo_recursion(n - 1));
};

const sumTo_APFunc = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumTo_Iter(40));
console.log(sumTo_recursion(40));
console.log(sumTo_APFunc(40));
