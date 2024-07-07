import { DIALOG_OPTIONS } from "../common/constants";

export const todoDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "create-todo-dialog";
  const form = document.createElement("form");
  form.id = "form";

  Object.keys(DIALOG_OPTIONS).forEach((item) => {
    const label = document.createElement("label");
    label.textContent = item;
    label.htmlFor = DIALOG_OPTIONS[item];

    let input;
    let inputValidation;

    switch (item) {
      case "Title":
        input = document.createElement("input");
        input.type = "text";
        inputValidation = document.createElement("div");
        inputValidation.classList.add("validationError");
        inputValidation.id = "titleValidationError";
        break;
      case "Description":
        input = document.createElement("textarea");
        break;
      case "Due Date":
        input = document.createElement("input");
        input.type = "date";
        break;
      case "Time Start":
      case "Time End":
        input = document.createElement("input");
        input.type = "time";
        input.step = "3600";
        break;
      default:
        input = document.createElement("input");
        input.type = "text";
    }

    input.id = DIALOG_OPTIONS[item];
    input.classList.add("input");

    form.append(label, input);
    if (inputValidation) form.append(inputValidation);
  });
  const submitBtn = document.createElement("input");
  submitBtn.id = "todo-dialog-submit-btn";
  submitBtn.type = "submit";
  submitBtn.value = "Submit";
  const cancelBtn = document.createElement("button");
  cancelBtn.id = "todo-dialog-cancel-btn";
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.textContent = "Cancel";

  form.append(submitBtn, cancelBtn);
  dialog.append(form);

  return dialog;
};
