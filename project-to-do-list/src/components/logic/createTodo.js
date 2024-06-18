import { todo } from "./todo";

const generateId = () => Math.floor(Math.random() * 100000);

export const createTodo = ({
  title,
  description,
  dueDate,
  category,
  timeStart,
  timeEnd,
  done,
}) => {
  const id = generateId();

  const newTodo = todo({
    id,
    title,
    description,
    dueDate,
    category,
    timeStart,
    timeEnd,
    done,
  });

  // initialise todoArr in localstorage
  if (!localStorage.getItem("todo"))
    localStorage.setItem("todo", JSON.stringify([]));
  const todoArr = JSON.parse(localStorage.getItem("todo"));

  todoArr.push(newTodo);
  localStorage.setItem("todo", JSON.stringify(todoArr));

  return newTodo;
};
