import { labelsUI } from "./labels-ui";
import { timeUI } from "./time-ui";
import { daysUI } from "./days-ui";
import { todoLoader } from "../logic/data-loader";
import { todoDialog } from "./todo-dialog";
import { onSubmit, showDialog, onCancel } from "../logic/dialog";
import { currentWeekDisplayed } from "../logic/currentWeekDisplayed";
import { createElement } from "../common/helper";

export const displayTodo = () => {
  const weekToDisplay = currentWeekDisplayed("week");
  let monthToDisplay;

  const intervalToDisplay = weekToDisplay;

  // ********** wrappers ********** //
  const content = createElement({
    el: "div",
    id: "content",
  });

  const calendarToggle = createElement({
    el: "div",
    id: "calendar-toggle",
  });
  const calendar = createElement({
    el: "div",
    id: "calendar",
    attribute: [["week-displayed", intervalToDisplay.getCurrentWeek()]],
  });
  const reminder = createElement({
    id: "reminder",
  });

  content.append(calendarToggle, calendar, reminder);

  // ********** calendar view toggle ********** //
  const weekBtn = createElement({
    el: "button",
    id: "week-btn",
    textContent: "Week",
  });
  const monthBtn = createElement({
    el: "button",
    id: "month-btn",
    textContent: "Month",
  });

  // ********** other buttons ********** //
  const prevBtn = createElement({
    el: "button",
    id: "prev",
    textContent: "Previous",
  });
  const nextBtn = createElement({
    el: "button",
    id: "next",
    textContent: "Next",
  });
  const newTodoBtn = createElement({
    el: "button",
    id: "new",
    textContent: "New",
  });

  calendarToggle.append(weekBtn, monthBtn, prevBtn, nextBtn, newTodoBtn);

  // ********** calendar ********** //
  const labels = labelsUI(intervalToDisplay.getCurrentWeek());
  const time = timeUI();
  const days = daysUI(intervalToDisplay.getCurrentWeek());

  calendar.append(labels, time, days);

  // ********** dialog ********** //
  let dialog = todoDialog();
  // add dialog logic
  onSubmit(dialog);
  onCancel(dialog);
  showDialog(newTodoBtn, dialog);

  // ********** change weeks logic ********** //
  changeIntervalDisplay(prevBtn, calendar, intervalToDisplay, "decrement");
  changeIntervalDisplay(nextBtn, calendar, intervalToDisplay, "increment");

  // ********** reminder (TODO) ********** //

  return { content, dialog };
};

const changeIntervalDisplay = (btn, calendar, intervalToDisplay, direction) => {
  const eventFunction = () => {
    direction === "increment"
      ? intervalToDisplay.incrementWeek()
      : intervalToDisplay.decrementWeek();

    const curLabels = calendar.querySelector("#labels");
    const curDays = calendar.querySelector("#days");
    const newlabels = labelsUI(intervalToDisplay.getCurrentWeek());
    const newDays = daysUI(intervalToDisplay.getCurrentWeek());

    calendar.removeChild(curLabels);
    calendar.removeChild(curDays);
    calendar.prepend(newlabels);
    calendar.append(newDays);
    calendar.setAttribute("week-displayed", intervalToDisplay.getCurrentWeek());

    todoLoader();
  };

  if (intervalToDisplay.mode === "week") {
    btn.addEventListener("click", eventFunction);
  }
};
