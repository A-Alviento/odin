import { todo } from "./todo";

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

  const newTodo = todo({
    id,
    title,
    description,
    dueDate,
    category,
    timeStart,
    timeEnd,
    done,
  });

  return newTodo;
};
