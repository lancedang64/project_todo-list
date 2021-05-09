import domController from './domController.js';
import eventsHandler from './eventsHandler.js';
import dataController from './dataController.js';

const coordinator = (() => {
  const promptNewItem = () => {
    if (document.querySelector('.item-banner--editing')) {
      domController.remindNewItemPrompt();
      return;
    }
    domController.renderNewItemPrompt();
    eventsHandler.addListenersNewItemPrompt();
  };

  const showHideItemInfo = (e) => {
    domController.showHideItemInfo(e);
  };

  const discardNewItemPrompt = (e) => {
    domController.discardNewItemPrompt(e);
  };

  const saveNewItem = (e) => {
    const itemDiv = e.path[3];
    const item = dataController.getItem(itemDiv);
    if (!item) {
      domController.remindNewItemInput();
      return;
    }
    dataController.addToAllItems(item);
    domController.discardNewItemPrompt(e);
    // domController render Item
    // localStorageController update
  };

  return {
    promptNewItem,
    showHideItemInfo,
    discardNewItemPrompt,
    saveNewItem,
  };
})();

export default coordinator;
