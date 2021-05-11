import domController from './domController.js';
import eventsHandler from './eventsHandler.js';
import dataController from './dataController.js';

const coordinator = (() => {
  const loadHomePage = () => {
    const allItems = dataController.getItemsFromTab('all-items');
    domController.renderItemsFromATab(allItems);
    eventsHandler.addListenersInHomePage();
  }

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


  const updateItem = (e) => {

  };

  const deleteItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    dataController.deleteItem(itemDiv);
    domController.removeItemDiv(itemDiv);
  };

  const getItemDivFromEvent = (e) => {
    return e.path.find(element => element.className === 'item');
  };

  return {
    loadHomePage, 
    promptNewItem,
    showHideItemInfo,
    discardNewItemPrompt,
    saveNewItem,
    editItem,
    discardItemEdit,
    updateItem,
    deleteItem
  };
})();

export default coordinator;
