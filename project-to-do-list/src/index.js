import "./reset.css";
import "./style.css";

import { createTodo } from "./components/logic/createTodo";
import { organise } from "./components/logic/organise";
import { format } from "date-fns";

import { displayTodo } from "./components/ui/displayTodo";

const todo1 = createTodo({
  title: "Title 1",
  description: "Description 1",
  dueDate: format(new Date(2014, 1, 11), "dd-MM-yyyy"),
  category: "Category 1",
  timeStart: "16:00",
  timeEnd: "17:00",
});

const todo2 = createTodo({
  title: "Title 2",
  description: "Description 2",
  dueDate: format(new Date(2014, 1, 11), "dd-MM-yyyy"),
  category: "Category 2",
  timeStart: "16:00",
  timeEnd: "17:00",
});

const todo3 = createTodo({
  title: "Title 3",
  description: "Description 3",
  dueDate: format(new Date(2014, 1, 11), "dd-MM-yyyy"),
  category: "Category 3",
  timeStart: "16:00",
  timeEnd: "17:00",
});

let todoArr = [todo1, todo2, todo3];

// console.log(format(new Date(2014, 1, 11), "dd-MM-yyyy"))
// console.log(format(new Date(), "HH:mm"));
// console.log("hello");

const content = displayTodo();
const wrapper = document.querySelector("#wrapper");
wrapper.append(content);
