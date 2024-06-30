import { labelsUI } from "./labels-ui";
import { timeUI } from "./time-ui";
import { daysUI } from "./days-ui";
import { todoLoader } from "./dom-logic/data-loader";
import { todoDialog } from "./todo-dialog";
import { onSubmit, showDialog, onCancel } from "./dom-logic/dialog";
import { currentWeekDisplayed } from "../logic/currentWeekDisplayed";

export const displayTodo = () => {
  const weekToDisplay = currentWeekDisplayed();

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
  const labels = labelsUI(weekToDisplay.getCurrentWeek());
  const time = timeUI();
  const days = daysUI(weekToDisplay.getCurrentWeek());
  calendar.append(labels, time, days);

  // dialog
  let dialog = todoDialog();

  // add dialog logic
  onSubmit(dialog, content.querySelector("#days"), weekToDisplay);
  onCancel(dialog);
  showDialog(newTodoBtn, dialog);

  prevBtn.addEventListener("click", () => {
    weekToDisplay.decrementWeek();

    const curLabels = calendar.querySelector("#labels");
    const curDays = calendar.querySelector("#days");
    const newlabels = labelsUI(weekToDisplay.getCurrentWeek());
    const newDays = daysUI(weekToDisplay.getCurrentWeek());

    calendar.removeChild(curLabels);
    calendar.removeChild(curDays);
    calendar.prepend(newlabels);
    calendar.append(newDays);
    todoLoader(weekToDisplay.getCurrentWeek(), newDays);
  });

  nextBtn.addEventListener("click", () => {
    weekToDisplay.incrementWeek();

    const curLabels = calendar.querySelector("#labels");
    const curDays = calendar.querySelector("#days");
    const newlabels = labelsUI(weekToDisplay.getCurrentWeek());
    const newDays = daysUI(weekToDisplay.getCurrentWeek());

    calendar.removeChild(curLabels);
    calendar.removeChild(curDays);
    calendar.prepend(newlabels);
    calendar.append(newDays);
    todoLoader(weekToDisplay.getCurrentWeek(), newDays);
  });

  // reminder (TODO)

  console.log(content);

  todoLoader(weekToDisplay.getCurrentWeek(), days);

  return { content, dialog };
};
