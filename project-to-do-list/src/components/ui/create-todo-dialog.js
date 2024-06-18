import { DIALOG_OPTIONS } from "../common/constants";

const onSubmit = (form, btn) => {
  btn.addEventListner("submit", (e) => {
    e.preventDefault();
  });
};

export const createTodoDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "create-todo-dialog";
  const form = document.createElement("form");

  Object.keys(DIALOG_OPTIONS).forEach((item) => {
    const label = document.createElement("label");
    label.textContent = item;
    label.htmlFor = DIALOG_OPTIONS[item];

    let input;

    switch (item) {
      case "Title":
        input = document.createElement("input");
        input.type = "text";
        input.setAttribute("required", "");
        break;
      case "Description":
        input = document.createElement("textarea");
        break;
      default:
        input = document.createElement("input");
        input.type = "text";
    }

    input.id = DIALOG_OPTIONS[item];

    form.append(label, input);
  });
  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Submit";
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.textContent = "Cancel";

  form.append(submitBtn, cancelBtn);
  dialog.append(form);

  return dialog;
};
