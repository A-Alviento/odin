import { DAY_LABELS } from "../common/constants";

export const daysUI = (week) => {
  const days = document.createElement("div");
  days.id = "days";

  DAY_LABELS.forEach((day) => {
    const dayBlock = document.createElement("div");
    dayBlock.id = day.toLowerCase();
    dayBlock.classList.add("day");
    dayBlock.setAttribute("date-data", week[DAY_LABELS.indexOf(day)]);

    days.append(dayBlock);
  });

  return days;
};
