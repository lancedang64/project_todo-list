import itemFactory from './item';

const dataController = (() => {
  let allItems = [];
  let allProjects = ['Coding', 'Life', 'Other'];

  const getProjects = () => {
    return allProjects;
  };

  const addProject = (name) => {
    allProjects.push(name);
  };

  const removeProject = (name) => {
    const projectIndex = allProjects.indexOf(name);
    allProjects.splice(projectIndex, 1);
  };

  const setStoredData = (items, projects) => {
    allItems = items;
    allProjects = projects;
  };

  const getItemsFromTab = (tabName) => {
    if (tabName === 'All items') return allItems;
    return allItems.filter((item) => item.project === tabName);
  };

  const getItemFromInput = (itemDiv) => {
    const name = itemDiv.querySelector('.item-name--editing').value;
    const dueDate = itemDiv.querySelector('.item-due-date--editing').value;
    const description = itemDiv.querySelector(
      '.item-description--editing'
    ).value;
    const project = itemDiv.querySelector('.item-project--editing').value;
    const priority = itemDiv.querySelector(
      'input[name=priority]:checked'
    ).value;

    if (name.trim() === '' || dueDate === '') return undefined;

    const formattedDueDate = getFormattedDate(dueDate);
    return itemFactory(name, description, formattedDueDate, project, priority);
  };

  const updateAndGetItemFromDiv = (itemDiv) => {
    const item = getItemFromDiv(itemDiv);
    const itemIndex = allItems.indexOf(item);
    const updatedItem = getItemFromInput(itemDiv);
    if (!updatedItem) return undefined;
    allItems[itemIndex] = updatedItem;
    return updatedItem;
  };

  const getFormattedDate = (dueDate) => {
    const arr = dueDate.split('-');
    arr.reverse();
    const newDate = arr.join('/');
    return newDate;
  };

  const addToAllItems = (item) => {
    allItems.push(item);
  };

  const deleteItem = (itemDiv) => {
    const itemIndex = allItems.indexOf(getItemFromDiv(itemDiv));
    allItems.splice(itemIndex, 1);
  };

  const toggleItemCompletion = (itemDiv) => {
    const item = getItemFromDiv(itemDiv);
    item.isDone === false ? (item.isDone = true) : (item.isDone = false);
    moveItemInArray(item);
  };

  const moveItemInArray = (item) => {
    const itemIndex = allItems.indexOf(item);
    allItems.splice(itemIndex, 1);
    item.isDone === true ? allItems.unshift(item) : allItems.push(item);
  };

  const getItemFromDiv = (itemDiv) => {
    const itemName = itemDiv.querySelector('.item-name').innerHTML;
    return allItems.find((item) => item.name === itemName);
  };

  return {
    addProject,
    removeProject,
    getProjects,
    setStoredData,
    getItemsFromTab,
    getItemFromInput,
    addToAllItems,
    deleteItem,
    getItemFromDiv,
    updateAndGetItemFromDiv,
    toggleItemCompletion,
  };
})();

export default dataController;
