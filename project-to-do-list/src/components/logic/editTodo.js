export const editTodo = (todo, title, description, dueDate, category) => {
  todo.setTitle(title);
  todo.setDescription(description);
  todo.setDueDate(dueDate);
  todo.setCategory(category);
};
