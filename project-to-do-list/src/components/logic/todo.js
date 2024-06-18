export const todo = ({
  id,
  title,
  description,
  dueDate,
  category,
  timeStart,
  timeEnd,
  done,
}) => {
  const todo = {
    id,
    title,
    description,
    dueDate,
    category,
    timeStart,
    timeEnd,
    done,
  };

  return todo;
};
