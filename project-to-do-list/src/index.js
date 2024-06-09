import "./reset.css";
import "./style.css";

import { createTodo } from "./components/logic/createTodo";
import { organise } from "./components/logic/organise";

const todo1 = createTodo({
  title: "Title 1",
  description: "Description 1",
  dueDate: "2021-12-31",
  category: "Category 1",
  timeStart: "16:00",
  timeEnd: "17:00",
});

const todo2 = createTodo({
  title: "Title 2",
  description: "Description 2",
  dueDate: "2021-12-31",
  category: "Category 2",
  timeStart: "16:00",
  timeEnd: "17:00",
});

const todo3 = createTodo({
  title: "Title 3",
  description: "Description 3",
  dueDate: "2021-12-31",
  category: "Category 3",
  timeStart: "16:00",
  timeEnd: "17:00",
});

let todoArr = [todo1, todo2, todo3];


