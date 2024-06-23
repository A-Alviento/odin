import "./reset.css";
import "./style.css";
import { DATE_FORMAT } from "./components/common/constants";

import { createTodo } from "./components/logic/createTodo";
import { format } from "date-fns";

import { displayTodo } from "./components/ui/displayTodo";

import { todoDialog } from "./components/ui/todo-dialog";
import {
  onSubmit,
  showDialog,
  onCancel,
} from "./components/ui/dom-logic/dialog";
import { currentWeekDisplayed } from "./components/logic/currentWeekDisplayed";

// const todo1 = createTodo({
//   title: "Title 1",
//   description: "Description 1",
//   dueDate: format(new Date(2024, 5, 20), DATE_FORMAT),
//   category: "Category 1",
//   timeStart: "16:00",
//   timeEnd: "17:00",
// });

// const todo2 = createTodo({
//   title: "Title 2",
//   description: "Description 2",
//   dueDate: format(new Date(2024, 5, 17), DATE_FORMAT),
//   category: "Category 2",
//   timeStart: "16:00",
//   timeEnd: "17:00",
// });

// const todo3 = createTodo({
//   title: "Title 3",
//   description: "Description 3",
//   dueDate: format(new Date(2024, 5, 10), DATE_FORMAT),
//   category: "Category 3",
//   timeStart: "16:00",
//   timeEnd: "18:00",
// });

// let todoArr = [todo1, todo2, todo3];

// console.log(format(new Date(2014, 1, 11), "dd-MM-yyyy"))
// console.log(format(new Date(), "HH:mm"));
// console.log("hello");

const { content, dialog } = displayTodo();

const wrapper = document.querySelector("#wrapper");
wrapper.append(content, dialog);
