const leapYears = function (year) {
  const isLeapYear =
    year % 4 === 0
      ? !(year % 100 === 0)
        ? true
        : year % 400 === 0
        ? true
        : false
      : false;

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
