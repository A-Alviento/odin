import "./reset.css";
import "./style.css";

import { displayTodo } from "./components/ui/displayTodo";
import { todoLoader } from "./components/logic/data-loader";

const { content, dialog } = displayTodo();

const wrapper = document.querySelector("#wrapper");
wrapper.append(content, dialog);
todoLoader();
