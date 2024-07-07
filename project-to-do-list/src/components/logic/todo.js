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

  const newTodo = {
    id,
    title,
    description,
    dueDate,
    category,
    timeStart,
    timeEnd,
    done,
  };

  // initialise todoArr in localstorage
  if (!localStorage.getItem("todo"))
    localStorage.setItem("todo", JSON.stringify([]));
  const todoArr = JSON.parse(localStorage.getItem("todo"));

  todoArr.push(newTodo);
  localStorage.setItem("todo", JSON.stringify(todoArr));

  return newTodo;
};

// other logic in for todo like edi

export const editTodo = (id, title, description, dueDate, category) => {
  const todoArr = JSON.parse(localStorage.getItem("todo"));
  todoArr.find();

  todo.setTitle(title);
  todo.setDescription(description);
  todo.setDueDate(dueDate);
  todo.setCategory(category);
};
