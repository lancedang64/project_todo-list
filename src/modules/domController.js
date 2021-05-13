const domController = (() => {
  const contentDiv = document.querySelector('.content');

  const renderExampleItems = (itemsArr) => {
    itemsArr.forEach((item) => renderNewItem(item));
  };

  const renderNewProject = (name) =>  {
    renderTabOnSideNav(name);
    addProjectToSelect(name);
  };

  const renderTabOnSideNav = (name) => {
    const sideNav = document.querySelector('.side-nav');
    const newTab = document.createElement('a');
    newTab.setAttribute('href', '#');
    newTab.setAttribute('class', 'tab');
    newTab.innerHTML = name;
    sideNav.appendChild(newTab);
  };

  const addProjectToSelect = (name) => {
    const template = document.querySelector('#new-item-prompt-template')
    const select = template.content.querySelector('.item-project--editing');
    const option = document.createElement('option');
    option.setAttribute('value', `${name}`);
    option.innerHTML = name;
    select.appendChild(option);
  };
  
  const showTabContent = (tabName, tabElement) => {
    highlightChosenTab(tabElement);
    changeTabName(tabName);
    hideNotTabItems(tabName);
  };

  const hideNotTabItems = (tabName) => {
    const allItemDivs = document.querySelectorAll('.item');
    if (tabName === 'All items') {
      allItemDivs.forEach((itemDiv) => showItemDiv(itemDiv));
      return;
    }
    const tabItemDivs = getItemDivsFromTabName(tabName);
    allItemDivs.forEach((itemDiv) => hideItemDiv(itemDiv));
    tabItemDivs.forEach((itemDiv) => showItemDiv(itemDiv));
  };

  const highlightChosenTab = (tabElement) => {
    const previousTab = document.querySelector('.tab--selected');
    previousTab.classList.remove('tab--selected');
    tabElement.classList.add('tab--selected');
  };

  const changeTabName = (tabName) => {
    const tabNameSpan = document.querySelector('.tab-name');
    tabNameSpan.innerHTML = tabName;
  };

  const showItemDiv = (itemDiv) => {
    if (itemDiv.classList.contains('hidden'))
      itemDiv.classList.remove('hidden');
  };

  const hideItemDiv = (itemDiv) => {
    if (!itemDiv.classList.contains('hidden')) itemDiv.classList.add('hidden');
  };

  const getItemDivsFromTabName = (tabName) => {
    const allItemDivs = document.querySelectorAll('.item');
    const chosenItemDivs = new Array();
    allItemDivs.forEach((itemDiv) => {
      const itemProject = itemDiv.querySelector('.item-project').innerHTML;
      if (itemProject === tabName) chosenItemDivs.push(itemDiv);
    });
    return chosenItemDivs;
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

  const renderNewItem = (item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.appendChild(getItemTemplateElements('new-item-template'));
    updateItemDivWithItem(itemDiv, item);
    appendElementAfterTabPanel(itemDiv);
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
    itemDiv.appendChild(getItemTemplateElements('new-item-prompt-template'));
    appendElementAfterTabPanel(itemDiv);
  };

  const appendElementAfterTabPanel = (element) => {
    const firstItem = document.querySelector('.item');
    firstItem
      ? contentDiv.insertBefore(element, firstItem)
      : contentDiv.appendChild(element);
  };

  const removeItemDiv = (itemDiv) => {
    itemDiv.remove();
  };

  const toggleItemCompletion = (itemDiv) => {
    toggleCompletedItemDOM(itemDiv);
    moveCompletedItem(itemDiv);
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

  const toggleCompletedItemDOM = (itemDiv) => {
    const itemName = itemDiv.querySelector('.item-name');
    const dueDate = itemDiv.querySelector('.item-due-date');
    const checkbox = itemDiv.querySelector('.checkbox');
    checkbox.checked
      ? ((itemName.style.textDecoration = 'line-through'),
        (dueDate.style.textDecoration = 'line-through'),
        itemDiv.classList.add('item--completed'))
      : ((itemName.style.textDecoration = 'none'),
        (dueDate.style.textDecoration = 'none'),
        itemDiv.classList.remove('item--completed'));
  };

  const moveCompletedItem = (itemDiv) => {
    contentDiv.removeChild(itemDiv);
    const topCompletedItem = document.querySelector('.item--completed');

    topCompletedItem
      ? contentDiv.insertBefore(itemDiv, topCompletedItem)
      : contentDiv.appendChild(itemDiv);
  };

  return {
    discardItemEditMode,
    remindNewItemInput,
    remindNewItemPrompt,
    removeItemDiv,
    renderExampleItems,
    renderItemEditMode,
    renderNewItem,
    renderNewItemPrompt,
    renderNewProject,
    showHideItemInfo,
    showTabContent,
    toggleItemCompletion,
    updateItemFromDiv,
  };
})();

export default domController;
