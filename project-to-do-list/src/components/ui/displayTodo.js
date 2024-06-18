import { labelsUI } from "./labels-ui";
import { timeUI } from "./time-ui";
import { daysUI } from "./days-ui";
import { getCurrentWeekArr } from "../common/helper";
import { getPrevWeekArr, getNextWeekArr } from "../common/helper";
import { todoLoader } from "./data-loader";

export const displayTodo = () => {
  // temporal data
  let currentWeekDisplayed = getCurrentWeekArr(); // initial should always be current week

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
  monthBtn.textContent = "Month";

  const prevBtn = document.createElement("button");
  prevBtn.id = "prev";
  prevBtn.textContent = "Previous";
  const nextBtn = document.createElement("button");
  nextBtn.id = "next";
  nextBtn.textContent = "Next";

  const newTodoBtn = document.createElement("button");
  newTodoBtn.id = "new";
  newTodoBtn.textContent = "New";

  calendarToggle.append(weekBtn, monthBtn, prevBtn, nextBtn, newTodoBtn);

  // calendar
  const labels = labelsUI(currentWeekDisplayed);
  const time = timeUI();
  const days = daysUI(currentWeekDisplayed);
  calendar.append(labels, time, days);

  prevBtn.addEventListener("click", () => {
    currentWeekDisplayed = getPrevWeekArr(currentWeekDisplayed);

    const curLabels = calendar.querySelector("#labels");
    const curDays = calendar.querySelector("#days");
    const newlabels = labelsUI(currentWeekDisplayed);
    const newDays = daysUI(currentWeekDisplayed);

    calendar.removeChild(curLabels);
    calendar.removeChild(curDays);
    calendar.prepend(newlabels);
    calendar.append(newDays);
    todoLoader(newDays, currentWeekDisplayed);
  });

  nextBtn.addEventListener("click", () => {
    currentWeekDisplayed = getNextWeekArr(currentWeekDisplayed);

    const curLabels = calendar.querySelector("#labels");
    const curDays = calendar.querySelector("#days");
    const newlabels = labelsUI(currentWeekDisplayed);
    const newDays = daysUI(currentWeekDisplayed);

    calendar.removeChild(curLabels);
    calendar.removeChild(curDays);
    calendar.prepend(newlabels);
    calendar.append(newDays);
    todoLoader(newDays, currentWeekDisplayed);
  });

  // reminder (TODO)

  todoLoader(days, currentWeekDisplayed);

  return content;
};
