import domController from './domController.js';
import eventsHandler from './eventsHandler.js';
import dataController from './dataController.js';

const coordinator = (() => {
  const loadHomePage = () => {
    // if there is localStorage then load contentDiv All items innerHTML
    // and append listeners hompage
    // else render example items and projects
    const allItems = dataController.getItemsFromTab('All items');
    domController.renderExampleItems(allItems);
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
    const items = dataController.getItemsFromTab(tabName);
    domController.showTabContent(tabName);
  };

  /* private functions */

  const getItemDivFromEvent = (e) => {
    return e.path.find(element => element.classList.contains('item'));
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
    renderTab
  };
})();

export default coordinator;
