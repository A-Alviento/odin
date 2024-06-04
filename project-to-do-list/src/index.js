import "./reset.css";
import "./style.css";

import { createTodo } from "./components/logic/createTodo";

const todo1 = createTodo(
  "Title 1",
  "Description 1",
  "2021-12-31",
  "Category 1"
);
const todo2 = createTodo(
  "Title 2",
  "Description 2",
  "2021-12-31",
  "Category 2"
);
const todo3 = createTodo(
  "Title 3",
  "Description 3",
  "2021-12-31",
  "Category 3"
);

console.log(todo1);
