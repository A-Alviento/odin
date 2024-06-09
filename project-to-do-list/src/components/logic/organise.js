export const organise = (todoArr, categoriseBy) => {
  let organisedTodoArr = {};

  switch (categoriseBy) {
    case "type":
      ["note", "todo"].forEach((item) => {
        organisedTodoArr[item] = [];
      });
      todoArr.forEach((item) => {
        organisedTodoArr[item.getDueDate() ? "todo" : "note"].push(item);
      });
      return organisedTodoArr;
    case "dueDate":
      const uniqueDates = new Set(todoArr.map((item) => item.getDueDate()));
      uniqueDates.forEach((item) => {
        organisedTodoArr[item] = [];
      });
      todoArr.forEach((item) => {
        organisedTodoArr[item.getDueDate()].push(item);
      });
      return organisedTodoArr;

    case "category":
      const uniqueCategories = new Set(
        todoArr.map((item) => item.getCategory())
      );
      uniqueCategories.forEach((item) => {
        organisedTodoArr[item] = [];
      });
      todoArr.forEach((item) => {
        organisedTodoArr[item.getCategory()].push(item);
      });
      return organisedTodoArr;

    default:
      throw new Error();
  }
};
