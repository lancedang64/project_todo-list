import coordinator from './coordinator';

const eventsHandler = (() => {
	const addListenersInHomePage = () => {
		addListenersTabPanel(document);
		_addListenersToButtonsWithClass('edit', coordinator.editItem);
		_addListenersToButtonsWithClass('delete', coordinator.deleteItem);
		addListenersCheckbox(document);
		addListenersTab(document);
	};

	const addListenersTabPanel = element => {
		const newItemButton = element.querySelector('.add-new-item');
		newItemButton.addEventListener('click', coordinator.promptNewItem);

		const newProjectButton = element.querySelector('.add-new-project');
		newProjectButton.addEventListener('click', coordinator.promptNewProject);

		const deleteProjectButton = element.querySelector('.delete-project');
		deleteProjectButton.addEventListener(
			'click',
			coordinator.promptDeleteProject
		);
	};

	const addListenersNewItemDiv = element => {
		_addListenerToButtonInDiv(element, 'edit', coordinator.editItem);
		_addListenerToButtonInDiv(element, 'delete', coordinator.deleteItem);
		addListenersCheckbox(element);
	};

	const addListenersNewItemPrompt = () => {
		const discardButton = document.querySelector('.discard');
		discardButton.addEventListener('click', coordinator.discardNewItemPrompt);

		const saveButton = document.querySelector('.save');
		saveButton.addEventListener('click', coordinator.saveNewItem);
	};

	const addListenersItemInfo = element => {
		const editButtons = document.querySelectorAll('.edit');
		editButtons.forEach(button =>
			button.addEventListener('click', coordinator.editItem)
		);

		const deleteButtons = document.querySelectorAll('.delete');
		deleteButtons.forEach(button =>
			button.addEventListener('click', coordinator.deleteItem)
		);
	};

	const _addListenerToButtonInDiv = (itemDiv, className, func) => {
		const button = itemDiv.querySelector(`.${className}`);
		button.addEventListener('click', func);
	};

	const _addListenersToButtonsWithClass = (className, func) => {
		const buttons = document.querySelectorAll(`.${className}`);
		buttons.forEach(button => button.addEventListener('click', func));
	};

	const addListenersItemEdit = itemDiv => {
		const discardButton = itemDiv.querySelector('.discard');
		discardButton.addEventListener('click', coordinator.discardItemEdit);

		const saveButton = itemDiv.querySelector('.save');
		saveButton.addEventListener('click', coordinator.saveEditedItem);
	};

	const addListenersCheckbox = element => {
		const checkboxes = element.querySelectorAll('.checkbox');
		checkboxes.forEach(checkbox =>
			checkbox.addEventListener('click', coordinator.toggleItemCompletion)
		);
	};

	const addListenersTab = element => {
		const tabs = element.querySelectorAll('.tab');
		tabs.forEach(tab => addListenerTab(tab));
	};

	const addListenerTab = tab => {
		tab.addEventListener('click', coordinator.renderTab);
	};

	return {
		addListenersInHomePage,
		addListenersNewItemPrompt,
		addListenersNewItemDiv,
		addListenersItemInfo,
		addListenersItemEdit,
		addListenersCheckbox,
		addListenersTab,
		addListenerTab,
	};
})();

export default eventsHandler;
