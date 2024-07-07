import { titleValidation } from "./form-validation";
import { parseDate } from "../common/helper";
import { todoLoader } from "./data-loader";
import { createTodo } from "./todo";

export const onSubmit = (dialog) => {
  const form = dialog.querySelector("form");
  const submitBtn = form.querySelector("#todo-dialog-submit-btn");
  const inputs = dialog.querySelectorAll(".input");

  const title = form.querySelector("#title");
  const titleValidationError = form.querySelector("#titleValidationError");
  const desc = form.querySelector("#desc");
  const dueDate = form.querySelector("#dueDate");
  const timeStart = form.querySelector("#timeStart");
  const timeEnd = form.querySelector("#timeEnd");
  const category = form.querySelector("#cat");

  submitBtn.addEventListener("submit", async (e) => {
    e.preventDefault();

    // validation
    if (!titleValidation(title.value)) {
      titleValidationError.textContent = "Please fill this in";
      return;
    }

    // clear validation error
    titleValidationError.textContent = "";

    // create todo
    createTodo({
      title: title.value,
      description: desc.value,
      dueDate: parseDate(dueDate.value, "yyyy-MM-dd"),
      category: category.value,
      timeStart: timeStart.value,
      timeEnd: timeEnd.value,
    });

    todoLoader();

    inputs.forEach((input) => {
      console.log("hi");
      input.value = "";
    });
    dialog.close();
  });
};

export const onCancel = (dialog) => {
  const btn = dialog.querySelector("#todo-dialog-cancel-btn");
  btn.addEventListener("click", () => {
    console.log("hello");
    dialog.close();
  });
};

export const showDialog = (btn, dialog) => {
  btn.addEventListener("click", () => {
    dialog.showModal();
  });
};
