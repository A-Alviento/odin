import { format, parse, sub, add } from "date-fns";
import { DATE_FORMAT } from "./constants";

export const getCurrentWeekArr = () => {
  const now = new Date();
  const dayOfWeek = (now.getDay() + 6) % 7; // 0 (Monday) to 6 (Sunday)
  const dayOfMonth = now.getDate(); // 1 to 31

  const startOfWeek = new Date(now); // Start from current date
  startOfWeek.setDate(dayOfMonth - dayOfWeek); // Subtract the number of days till the start of the week

  const week = []; // Array to hold dates for the week

  // Push each day of the week into the array
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    week.push(format(day, DATE_FORMAT));
  }

  return week;
};

export const getPrevWeekArr = (week) => {
  const newWeek = [];

  week.forEach((day) => {
    const date = parse(day, DATE_FORMAT, new Date());

    const newDate = sub(date, { days: 7 });
    newWeek.push(format(newDate, DATE_FORMAT));
  });
  return newWeek;
};

export const getNextWeekArr = (week) => {
  const newWeek = [];

  week.forEach((day) => {
    const date = parse(day, DATE_FORMAT, new Date());

    const newDate = add(date, { days: 7 });
    newWeek.push(format(newDate, DATE_FORMAT));
  });
  return newWeek;
};

export const parseDate = (date, currentFormat) => {
  if (!date) return "";

  const formatDate = parse(date, currentFormat, new Date());
  return format(formatDate, DATE_FORMAT);
};

export const createElement = ({ el, id, classes, attribute, textContent }) => {
  const element = document.createElement(`${el}`);

  if (id) element.id = id;
  if (classes && classes.length > 0) {
    className.forEach((item) => element.classList.add(item));
  }
  if (attribute && attribute.length > 0) {
    attribute.forEach((item) => element.setAttribute(item[0], item[1]));
  }
  if (textContent) element.textContent = textContent;

  return element;
};
