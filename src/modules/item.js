const itemFactory = (name, desc, dueDate, priority) => {
    let isComplete = false;
    
    return {name, desc, dueDate, priority}
};

export default itemFactory;