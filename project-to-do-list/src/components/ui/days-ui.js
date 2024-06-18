import { DAY_LABELS, TIME_LABELS } from "../common/constants";

export const daysUI = (week) => {
  const days = document.createElement("div");
  days.id = "days";

  DAY_LABELS.forEach((day) => {
    const dayBlock = document.createElement("div");
    dayBlock.id = day.toLowerCase();
    dayBlock.classList.add("day");
    dayBlock.setAttribute("date-data", week[DAY_LABELS.indexOf(day)]);

    // TIME_LABELS.forEach((timeLabel) => {
    //   const timeBlock = document.createElement("div");
    //   timeBlock.classList.add("time-block");
    //   timeBlock.setAttribute("time-data", timeLabel);

    //   dayBlock.append(timeBlock);
    // });

    days.append(dayBlock);
  });

  return days;
};
