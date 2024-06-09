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
  const note = {
    id,
    title,
    description,
    dueDate,
    category,
    timeStart,
    timeEnd,
    done,
  };

  const getID = () => note.id;
  const getTitle = () => note.title;
  const getDescription = () => note.description;
  const getDueDate = () => note.dueDate;
  const getCategory = () => note.category;
  const getTimeStart = () => note.timeStart;
  const getTimeEnd = () => note.timeEnd;
  const getDone = () => note.done;

  const setID = (newID) => (note.id = newID);
  const setTitle = (newTitle) => (note.title = newTitle);
  const setDescription = (newDescription) =>
    (note.description = newDescription);
  const setDueDate = (newDueDate) => (note.dueDate = newDueDate);
  const setCategory = (newCategory) => (note.category = newCategory);
  const setTimeStart = (newTimeStart) => (note.timeStart = newTimeStart);
  const setTimeEnd = (newTimeEnd) => (note.timeEnd = newTimeEnd);
  const setDone = (newDone) => (note.done = newDone);

  return {
    getID,
    getTitle,
    getDescription,
    getDueDate,
    getCategory,
    getTimeStart,
    getTimeEnd,
    getDone,

    setID,
    setTitle,
    setDescription,
    setDueDate,
    setCategory,
    setTimeStart,
    setTimeEnd,
    setDone,
  };
};
