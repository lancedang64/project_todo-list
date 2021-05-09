import domController from './domController.js';

const coordinator = (() => {
  const promptNewItem = () => {
    if (document.querySelector('.item-banner--editing')) {
      domController.highlightPrompt();
      return;
    }
    domController.renderNewItemPrompt();
  };

  return { promptNewItem };
})();

export default coordinator;
