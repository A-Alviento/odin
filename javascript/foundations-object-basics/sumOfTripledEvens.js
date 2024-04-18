const arr = [3,3];

const sumOfTripledEvens = arr
  .filter((num) => {
    return num % 2 === 0;
  })
  .map((num) => {
    return num * 3;
  })
  .reduce((total, num) => {
    return total + num;
  }, 0);

console.log(sumOfTripledEvens);
