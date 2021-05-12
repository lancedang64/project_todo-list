const itemFactory = (name, description, dueDate, project, priority) => {
  let isDone = false;

  return {name, description, dueDate, project, priority, isDone};
};

export default itemFactory;
