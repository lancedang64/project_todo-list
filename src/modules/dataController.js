import itemFactory from './item.js';

const dataController = (() => {
  const allItems = [];

  const getItemFromInput = (itemDiv) => {
    const name = itemDiv.querySelector('.item-name--editing').value;
    const dueDate = itemDiv.querySelector('.item-date--editing').value;
    const description = itemDiv.querySelector('.item-description--editing')
      .value;
    const project = itemDiv.querySelector('.item-project--editing').value;
    const priority = itemDiv.querySelector('input[name=priority]:checked')
      .value;

    if (name.trim() === '' || dueDate === '') return undefined;
    
    const formattedDueDate = getFormattedDate(dueDate);
    return itemFactory(name, description, formattedDueDate, project, priority);
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

  return { getItemFromInput, addToAllItems };
})();

export default dataController;
