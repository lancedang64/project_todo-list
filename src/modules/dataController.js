import itemFactory from './item.js';

const dataController = (() => {
  const allItems = [];

  const getItemsFromTab = (tabName) => {
    if ((tabName = 'all-items')) return allItems;
  };

  const getItemFromInput = (itemDiv) => {
    const name = itemDiv.querySelector('.item-name--editing').value;
    const dueDate = itemDiv.querySelector('.item-due-date--editing').value;
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

  const deleteItem = (itemDiv) => {
    const itemIndex = allItems.indexOf(getItemFromDiv(itemDiv));
    allItems.splice(itemIndex, 1);
  };

  const getItemFromDiv = (itemDiv) => {
    const itemName = itemDiv.querySelector('.item-name').innerHTML;
    return allItems.find(item => item.name === itemName);
  };

  return { getItemsFromTab, getItemFromInput, addToAllItems, deleteItem, getItemFromDiv };
})();

export default dataController;
