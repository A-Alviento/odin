import { todo } from "./todo";

const generateId = () => Math.floor(Math.random() * 100000);

export const createTodo = (title, description, dueDate, category) => {
  const id = generateId();

  const newTodo = todo({
    id,
    title,
    description,
    dueDate,
    category,
  });

  return newTodo;
};
