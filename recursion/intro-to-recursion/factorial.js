const factorial_iter = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
};

const factorial_recursion = (n) => {
  if (n === 1) return 1;

  return n * factorial_recursion(n - 1);
};



console.log(factorial_iter(5));
console.log(factorial_recursion(5));
