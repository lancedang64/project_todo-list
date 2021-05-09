const itemFactory = (name, description, dueDate, priority) => {
  let isDone = false;
  //let id = uniqueIDGenerator;

  return { name, desc: description, dueDate, priority };
};

export default itemFactory;
