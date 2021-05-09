import domController from './domController.js';

const coordinator = (() => {
  const promptNewItem = () => {
    if (document.querySelector('.item-banner--editing')) {
      domController.highlightPrompt();
      return;
    }
    domController.renderNewItemPrompt();
  };

  const showHideItemInfo = (e) => {
    domController.showHideItemInfo(e);
  };

  return { promptNewItem, showHideItemInfo };
})();

export default coordinator;
