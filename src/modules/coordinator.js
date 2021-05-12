import domController from './domController.js';
import eventsHandler from './eventsHandler.js';
import dataController from './dataController.js';
import itemFactory from './item.js';

const coordinator = (() => {
  const loadHomePage = () => {
    // if there is localStorage then load contentDiv All items innerHTML
    loadFirstTimeHomePage();
    const allItems = dataController.getItemsFromTab('All items');
    domController.renderExampleItems(allItems);
    eventsHandler.addListenersInHomePage();
  };

  const loadFirstTimeHomePage = () => {
    const myItem = itemFactory(
      'Learn Shortcuts',
      'James website',
      '01/06/2021',
      'Coding',
      '!!'
    );
    const myItem2 = itemFactory(
      'Study React',
      'Do TOP projects',
      '07/06/2021',
      'Coding',
      '!!!'
    );
    const myItem3 = itemFactory(
      'Do interview questions',
      'Leetcode',
      '10/06/2021',
      'Coding',
      '!'
    );
    const myItem4 = itemFactory(
      'Do groceries shopping',
      'at Woolies',
      '02/06/2021',
      'Life',
      '!'
    );

    dataController.addToAllItems(myItem);
    dataController.addToAllItems(myItem2);
    dataController.addToAllItems(myItem3);
    dataController.addToAllItems(myItem4);
  };

  const promptNewItem = () => {
    if (document.querySelector('.item-banner--editing')) {
      domController.remindNewItemPrompt();
      return;
    }
    domController.renderNewItemPrompt();
    eventsHandler.addListenersNewItemPrompt();
  };

  const showHideItemInfo = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    domController.showHideItemInfo(itemDiv);
    eventsHandler.addListenersItemInfo(itemDiv);
  };

  const discardNewItemPrompt = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    domController.removeItemDiv(itemDiv);
  };

  const saveNewItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    const item = dataController.getItemFromInput(itemDiv);
    if (!item) {
      domController.remindNewItemInput();
      return;
    }
    dataController.addToAllItems(item);
    domController.removeItemDiv(itemDiv);
    domController.renderNewItem(item);
    const newItemDiv = document.querySelector('.item');
    eventsHandler.addListenersShowHideItemInfo(newItemDiv);
    // localStorageController update
  };

  const editItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    const item = dataController.getItemFromDiv(itemDiv);
    domController.renderItemEditMode(itemDiv, item);
    eventsHandler.addListenersItemEdit(itemDiv);
  };

  const discardItemEdit = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    domController.discardItemEditMode(itemDiv);
  };

  const saveEditedItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    const updatedItem = dataController.updateAndGetItemFromDiv(itemDiv);
    if (!updatedItem) domController.remindNewItemInput();
    domController.updateItemFromDiv(itemDiv, updatedItem);
  };

  const deleteItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    dataController.deleteItem(itemDiv);
    domController.removeItemDiv(itemDiv);
  };

  const toggleItemCompletion = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    dataController.toggleItemCompletion(itemDiv);
    domController.toggleItemCompletion(itemDiv);
  };

  const renderTab = (e) => {
    const tabName = e.target.innerHTML;
    const tabElement = e.path[0];
    domController.showTabContent(tabName, tabElement);
  };

  /* private functions */

  const getItemDivFromEvent = (e) => {
    return e.path.find((element) => element.classList.contains('item'));
  };

  return {
    loadHomePage,
    promptNewItem,
    showHideItemInfo,
    discardNewItemPrompt,
    saveNewItem,
    editItem,
    discardItemEdit,
    saveEditedItem,
    deleteItem,
    toggleItemCompletion,
    renderTab,
  };
})();

export default coordinator;
