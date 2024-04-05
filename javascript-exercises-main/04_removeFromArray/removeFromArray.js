const removeFromArray = function (numArr, ...numsToRemove) {
  const newArr = numArr.filter((num) => {
    return !numsToRemove.includes(num);
  });

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
