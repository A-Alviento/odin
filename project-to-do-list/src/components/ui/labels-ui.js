import { DAY_LABELS } from "../common/constants";

export const labelsUI = (week) => {
  const labels = document.createElement("div");
  labels.id = "labels";

  const timeLabel = document.createElement("div");
  timeLabel.id = "time-label";
  timeLabel.textContent = "Time";

  const dayLabelWrapper = document.createElement("div");
  dayLabelWrapper.id = "day-label-wrapper";

  DAY_LABELS.forEach((day) => {
    const dayLabel = document.createElement("div");
    dayLabel.classList.add("day-label");
    dayLabel.textContent = `${day} ${week[DAY_LABELS.indexOf(day)]}`;
    dayLabelWrapper.append(dayLabel);
  });

  labels.append(timeLabel, dayLabelWrapper);

  return labels;
};
