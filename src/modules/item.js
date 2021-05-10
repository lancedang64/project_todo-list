const itemFactory = (name, description, dueDate, project, priority) => {
  let isDone = false;
  //let id = uniqueIDGenerator; maybe dont need

  return {name, description, dueDate, project, priority, isDone};
};

export default itemFactory;
