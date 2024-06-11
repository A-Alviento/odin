export const dropdown = ({ title, options }) => {
  const dropdown = { title, options };

  const getTitle = () => dropdown.title;
  const getOptions = () => dropdown.options;

  const setTitle = (title) => {
    dropdown.title = title;
  };
  const setOptions = (options) => {
    dropdown.options = options;
  };

  return { getTitle, getOptions, setTitle, setOptions };
};

export const createDropdown = ({ title, options }) => {
  return dropdown({ title, options });
};
