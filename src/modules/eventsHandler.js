import coordinator from './coordinator.js';

const eventsHandler = (() => {
    const addListenersOnPageLoad = () => {
        addListenerNewItem(document);
        addListenerShowInfo(document);
    };

    const addListenerNewItem = (element) => {
        const newItemButton = element.querySelector('#add-new-item');
        newItemButton.addEventListener('click', coordinator.promptNewItem);
    };

    const addListenerShowInfo = (element) => {
        const showInfoButtons = element.querySelectorAll('.show-info');
        showInfoButtons.forEach(button => button.addEventListener('click', coordinator.showHideItemInfo))
    };

    const addListenersNewItemPrompt = () => {
        const discardButton = document.querySelector('.discard');
        discardButton.addEventListener('click', coordinator.discardNewItemPrompt)

        const saveNewButton = document.querySelector('.save-new-item');
        saveNewButton.addEventListener('click', coordinator.saveNewItem)
    }

    return {addListenersOnPageLoad, addListenersNewItemPrompt}
})();

export default eventsHandler;