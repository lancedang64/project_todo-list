import domController from './domController.js';
import eventsHandler from './eventsHandler.js';
import dataController from './dataController.js';
import itemFactory from './item.js';
import swal from 'sweetalert';

const coordinator = (() => {
  const loadHomePage = () => {
    // if there is localStorage then load contentDiv All items innerHTML
    createExampleItems();
    const allItems = dataController.getItemsFromTab('All items');
    domController.renderExampleItems(allItems);
    eventsHandler.addListenersInHomePage();
  };

  const createExampleItems = () => {
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
    eventsHandler.addListenersShowHideItemInfo(newItemDiv);
    // eventsHandler add listener completion too
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

  /* private functions */

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
