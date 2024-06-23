import {
  getCurrentWeekArr,
  getNextWeekArr,
  getPrevWeekArr,
} from "../common/helper";

export const currentWeekDisplayed = () => {
  let currentWeek = getCurrentWeekArr();

  const getCurrentWeek = () => currentWeek;
  const decrementWeek = () => {
    currentWeek = getPrevWeekArr(currentWeek);
  };
  const incrementWeek = () => {
    currentWeek = getNextWeekArr(currentWeek);
  };

  return {
    getCurrentWeek,
    decrementWeek,
    incrementWeek,
  };
};
