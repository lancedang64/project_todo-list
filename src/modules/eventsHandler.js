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

    return {addListenersOnPageLoad}
})();

export default eventsHandler;