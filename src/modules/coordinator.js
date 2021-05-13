import domController from './domController.js';
import eventsHandler from './eventsHandler.js';
import dataController from './dataController.js';
import swal from 'sweetalert';
import examples from './examples.js';

const coordinator = (() => {
  const loadHomePage = () => {
    // if there is localStorage then load contentDiv All items innerHTML
    importAndAddExamples();
    const allItems = dataController.getItemsFromTab('All items');
    domController.renderExampleItems(allItems);
    eventsHandler.addListenersInHomePage();
  };

  const importAndAddExamples = () => {
    examples.forEach((item) => dataController.addToAllItems(item));
  };

  const promptNewProject = (e) => {
    swal('Please enter your new project name:', {
      content: 'input',
    }).then((value) => {
      if (value === null || value.trim() === '') return;
      domController.renderNewProject(value);
      const newTab = document.querySelector('.side-nav').lastChild;
      eventsHandler.addListenerTab(newTab);
    });
  };

  const promptDeleteProject = (e) => {
    const tabDiv = getTabDivFromEvent(e);
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
    if (!isItemValid(item)) return;
    dataController.addToAllItems(item);
    domController.removeItemDiv(itemDiv);
    domController.renderNewItem(item);
    const newItemDiv = document.querySelector('.item');
    eventsHandler.addListenersNewItemDiv(newItemDiv);
    // localStorageController update
  };

  const isItemValid = (item) => {
    return item ? true : (domController.remindNewItemInput(), false);
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

  const getItemDivFromEvent = (e) => {
    return e.path.find((element) => element.classList.contains('item'));
  };

  const getTabDivFromEvent = (e) => {
    return document.querySelector('.tab-panel');
  };

  return {
    deleteItem,
    discardItemEdit,
    discardNewItemPrompt,
    editItem,
    loadHomePage,
    promptDeleteProject,
    promptNewItem,
    promptNewProject,
    renderTab,
    saveEditedItem,
    saveNewItem,
    showHideItemInfo,
    toggleItemCompletion,
  };
})();

export default coordinator;
