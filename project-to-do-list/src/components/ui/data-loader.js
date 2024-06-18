import { TIME_LABELS } from "../common/constants";

export const todoLoader = (days, currentWeekDisplayed) => {
  const todoArr = JSON.parse(localStorage.getItem("todo"));
  todoArr.forEach((item) => {
    const { id, title, dueDate, timeStart, timeEnd, done } = item;

    if (!currentWeekDisplayed.includes(dueDate)) return;

    const timeStartIndex = TIME_LABELS.indexOf(timeStart);
    const timeEndIndex = TIME_LABELS.indexOf(timeEnd);

    /////////// TODO: replace with actual logic to make a todo div
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("todoID", id);
    todo.textContent = title;

    const dayBlock = days.querySelector(`[date-data="${dueDate}"]`);
    dayBlock.append(todo);
    ///////////////////////////////////////////////////////////////

    todo.style.gridRow = `${timeStartIndex} / ${timeEndIndex}`;
  });
};
