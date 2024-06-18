import { TIME_LABELS } from "../common/constants";

export const timeUI = () => {
  const time = document.createElement("div");
  time.id = "time";

  TIME_LABELS.forEach((timeLabel) => {
    const timeBlock = document.createElement("div");
    timeBlock.classList.add("time-block");
    timeBlock.textContent = timeLabel;
    time.append(timeBlock);
  });

  return time;
};
