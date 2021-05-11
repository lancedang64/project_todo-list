const domController = (() => {
  const contentDiv = document.querySelector('.content');

  const renderItemsFromATab = (itemsArr) => {
    itemsArr.forEach((item) => renderNewItem(item));
  };

  const renderItemEditMode = (itemDiv, item) => {
    toggleItemContentDisplay(itemDiv);

    const formattedDate = getReversedFormattedDate(item.dueDate);
    itemDiv.appendChild(getItemTemplateElements('new-item-prompt-template'));
    itemDiv.querySelector('.item-name--editing').value = item.name;
    itemDiv.querySelector('.item-due-date--editing').value = formattedDate;
    itemDiv.querySelector('.item-description--editing').value =
      item.description;
    assignCurrentItemProjectValue(itemDiv, item.project);
    assignCurrentItemPriorityValue(itemDiv, item.priority);
  };

  const discardItemEditMode = (itemDiv) => {
    itemDiv.removeChild(itemDiv.querySelector('.item-banner--editing'));
    itemDiv.removeChild(itemDiv.querySelector('.item-info--editing'));
    toggleItemContentDisplay(itemDiv);
  };

  const updateItemFromDiv = (itemDiv, updatedItem) => {
    discardItemEditMode(itemDiv);
    updateItemDivWithItem(itemDiv, updatedItem);
  };

  const toggleItemContentDisplay = (itemDiv) => {
    const itemBanner = itemDiv.querySelector('.item-banner');
    const itemInfo = itemDiv.querySelector('.item-info');
    itemBanner.classList.contains('hidden')
      ? itemBanner.classList.remove('hidden')
      : itemBanner.classList.add('hidden');
    itemInfo.classList.contains('hidden')
      ? itemInfo.classList.remove('hidden')
      : itemInfo.classList.add('hidden');
  };

  const renderNewItem = (item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    itemDiv.appendChild(getItemTemplateElements('new-item-template'));

    updateItemDivWithItem(itemDiv, item);

    contentDiv.insertBefore(itemDiv, contentDiv.firstChild);
  };

  const updateItemDivWithItem = (itemDiv, item) => {
    itemDiv.querySelector('.item-name').innerHTML = item.name;
    itemDiv.querySelector('.item-due-date').innerHTML = item.dueDate;
    itemDiv.querySelector('.item-description').innerHTML = item.description;
    itemDiv.querySelector('.item-project').innerHTML = item.project;
    itemDiv.querySelector('.item-priority').innerHTML = item.priority;
  };

  const showHideItemInfo = (itemDiv) => {
    const info = itemDiv.querySelector('.item-info');
    info.classList.contains('item-info--expanded')
      ? info.classList.remove('item-info--expanded')
      : info.classList.add('item-info--expanded');
  };

  const remindNewItemPrompt = () => {
    const banner = document.querySelector('.item-banner--editing');
    const info = document.querySelector('.item-info--editing');
    banner.style.backgroundColor = '#F8D48B';
    info.style.backgroundColor = '#F8D48B';
    setTimeout(() => {
      banner.style.backgroundColor = 'white';
      info.style.backgroundColor = 'white';
    }, 200);
  };

  const remindNewItemInput = () => {
    const banner = document.querySelector('.item-banner--editing');
    banner.style.backgroundColor = '#E79988';
    setTimeout(() => (banner.style.backgroundColor = 'white'), 200);
  };

  const renderNewItemPrompt = () => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    //set item unique ID maybe dont need?

    itemDiv.appendChild(getItemTemplateElements('new-item-prompt-template'));

    contentDiv.insertBefore(itemDiv, contentDiv.firstChild);
  };

  const removeItemDiv = (itemDiv) => {
    itemDiv.remove();
  };

  const getItemTemplateElements = (templateID) => {
    const itemPromptTemplate = document.querySelector('#' + templateID);
    let htmlElements = itemPromptTemplate.content.cloneNode(true);
    return htmlElements;
  };

  const getReversedFormattedDate = (dueDate) => {
    const arr = dueDate.split('/');
    arr.reverse();
    const newDate = arr.join('-');
    return newDate;
  };

  const assignCurrentItemProjectValue = (itemDiv, project) => {
    const options = itemDiv.querySelector('.item-project--editing').options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === project)
        options[i].setAttribute('selected', 'selected');
    }
  };

  const assignCurrentItemPriorityValue = (itemDiv, priority) => {
    itemDiv.querySelector('#priority1').removeAttribute('checked');
    const options = itemDiv.querySelectorAll('[name="priority"]');
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === priority)
        options[i].setAttribute('checked', 'selected');
    }
  };

  return {
    renderItemsFromATab,
    renderItemEditMode,
    discardItemEditMode,
    updateItemFromDiv,
    renderNewItem,
    showHideItemInfo,
    renderNewItemPrompt,
    remindNewItemPrompt,
    remindNewItemInput,
    removeItemDiv,
  };
})();

export default domController;
