import coordinator from './coordinator.js';

const eventHandler = (() => {
    const addEventListeners = () => {
        const addNewItemButton = document.querySelector('#add-new-item');
        addNewItemButton.addEventListener('click', coordinator.promptNewItem);
    };

    return {addEventListeners}
})();

export default eventHandler;