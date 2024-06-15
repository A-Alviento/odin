const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIME_LABELS = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

const labelsUI = () => {
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
    dayLabel.textContent = day;
    dayLabelWrapper.append(dayLabel);
  });

  labels.append(timeLabel, dayLabelWrapper);

  return labels;
};

const timeUI = () => {
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

const daysUI = () => {
  const days = document.createElement("div");
  days.id = "days";

  DAY_LABELS.forEach((day) => {
    const dayBlock = document.createElement("div");
    dayBlock.id = day.toLowerCase();
    dayBlock.classList.add("day");

    TIME_LABELS.forEach((timeLabel) => {
      const timeBlock = document.createElement("div");
      timeBlock.classList.add("time-block");
      timeBlock.setAttribute("time-data", timeLabel);
      dayBlock.append(timeBlock);
    });

    days.append(dayBlock);
  });

  return days;
};

export const displayTodo = () => {
  // wrappers
  const content = document.createElement("div");
  content.id = "content";
  const calendarToggle = document.createElement("div");
  calendarToggle.id = "calendar-toggle";
  const calendar = document.createElement("div");
  calendar.id = "calendar";
  const reminder = document.createElement("div");
  reminder.id = "reminder";
  content.append(calendarToggle, calendar, reminder);

  // calendarToggle
  const weekBtn = document.createElement("button");
  weekBtn.id = "week-btn";
  weekBtn.textContent = "Week";
  const monthBtn = document.createElement("button");
  monthBtn.id = "month-btn";
  monthBtn.textContent = "Month"
  calendarToggle.append(weekBtn, monthBtn);

  // calendar
  const labels = labelsUI();
  const time = timeUI();
  const days = daysUI();
  calendar.append(labels, time, days);

  // reminder (TODO)

  return content;
};
