const findTheOldest = function (obj) {
  let oldest = 0;
  return obj
    .map((item) => {
      let age = (item.yearOfDeath ?? new Date().getFullYear()) - item.yearOfBirth;
      oldest = age > oldest ? age : oldest;
      return item;
    })
    .filter((item) => {
      return (item.yearOfDeath ?? new Date().getFullYear()) - item.yearOfBirth === oldest;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
