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
    return itemFactory(name, description, dueDate, project, priority);
  };

  const addToAllItems = (item) => {
    allItems.push(item);
  };

  return { getItemFromInput, addToAllItems };
})();

export default dataController;
