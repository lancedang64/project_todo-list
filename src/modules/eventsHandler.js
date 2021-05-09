import coordinator from './coordinator.js';

const eventsHandler = (() => {
    const addListenersOnPageLoad = () => {
        addListenerNewItem(document);
    };

    const addListenerNewItem = (element) => {
        const addNewItemButton = element.querySelector('#add-new-item');
        addNewItemButton.addEventListener('click', coordinator.promptNewItem);
    };

    return {addListenersOnPageLoad}
})();

export default eventsHandler;