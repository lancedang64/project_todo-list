import coordinator from './coordinator.js';

const eventsHandler = (() => {
  const addListenersInHomePage = () => {
    addListenersTabPanel(document);
    addListenersShowHideItemInfo(document);
    addListenersCheckbox(document);
    addListenersTab(document);
  };

  const addListenersTabPanel = (element) => {
    const newItemButton = element.querySelector('.add-new-item');
    newItemButton.addEventListener('click', coordinator.promptNewItem);

    const newProjectButton = element.querySelector('.add-new-project');
    newProjectButton.addEventListener('click', coordinator.promptNewProject);

    const deleteProjectButton = element.querySelector('.delete-project');
    deleteProjectButton.addEventListener('click', coordinator.promptDeleteProject)
  };

  const addListenersShowHideItemInfo = (element) => {
    const showInfoButtons = element.querySelectorAll('.show-info');
    showInfoButtons.forEach((button) =>
      button.addEventListener('click', coordinator.showHideItemInfo)
    );
  };

  const addListenersNewItemPrompt = () => {
    const discardButton = document.querySelector('.discard');
    discardButton.addEventListener('click', coordinator.discardNewItemPrompt);

    const saveButton = document.querySelector('.save');
    saveButton.addEventListener('click', coordinator.saveNewItem);
  };

  const addListenersItemInfo = (element) => {
    const editButton = element.querySelector('.edit');
    editButton.addEventListener('click', coordinator.editItem);

    const deleteButton = element.querySelector('.delete');
    deleteButton.addEventListener('click', coordinator.deleteItem);
  };

  const addListenersItemEdit = (itemDiv) => {
    const discardButton = itemDiv.querySelector('.discard');
    discardButton.addEventListener('click', coordinator.discardItemEdit);

    const saveButton = itemDiv.querySelector('.save');
    saveButton.addEventListener('click', coordinator.saveEditedItem);
  };

  const addListenersCheckbox = (element) => {
    const checkboxes = element.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) =>
      checkbox.addEventListener('click', coordinator.toggleItemCompletion)
    );
  };

  const addListenersTab = (element) => {
    const tabs = element.querySelectorAll('.tab');
    tabs.forEach(tab => addListenerTab(tab));
  };

  const addListenerTab = (tab) => {
    tab.addEventListener('click', coordinator.renderTab);
  }

  return {
    addListenersInHomePage,
    addListenersNewItemPrompt,
    addListenersShowHideItemInfo,
    addListenersItemInfo,
    addListenersItemEdit,
    addListenersCheckbox,
    addListenersTab,
    addListenerTab
  };
})();

export default eventsHandler;
