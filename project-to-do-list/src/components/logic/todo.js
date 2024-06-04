export const todo = ({ id, title, description, dueDate, category }) => {
  const note = { id, title, description, dueDate, category };

  const getID = () => note.id;
  const getTitle = () => note.title;
  const getDescription = () => note.description;
  const getDueDate = () => note.dueDate;
  const getCategory = () => note.category;

  const setID = (newID) => (note.id = newID);
  const setTitle = (newTitle) => (note.title = newTitle);
  const setDescription = (newDescription) =>
    (note.description = newDescription);
  const setDueDate = (newDueDate) => (note.dueDate = newDueDate);
  const setCategory = (newCategory) => (note.category = newCategory);

  return {
    getID,
    getTitle,
    getDescription,
    getDueDate,
    getCategory,
    setID,
    setTitle,
    setDescription,
    setDueDate,
    setCategory,
  };
};