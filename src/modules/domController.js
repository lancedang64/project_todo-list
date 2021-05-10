const domController = (() => {
  const renderNewItem = (item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    //set item unique ID

    const itemTemplate = document.querySelector('#new-item-template');
    let clone = itemTemplate.content.cloneNode(true);
    itemDiv.appendChild(clone);

    itemDiv.querySelector('.item-name').innerHTML = item.name;
    itemDiv.querySelector('.item-due-date').innerHTML = 'Due ' + item.dueDate;
    itemDiv.querySelector('.item-description').innerHTML = item.description;
    itemDiv.querySelector('.item-project').innerHTML = item.project;
    itemDiv.querySelector('.item-priority').innerHTML = item.priority;

    const contentDiv = document.querySelector('.content');
    contentDiv.insertBefore(itemDiv, contentDiv.firstChild);
  };

  const showHideItemInfo = (e) => {
    const item = e.path[2];
    const info = item.querySelector('.item-info');
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
    //set item unique ID

    const itemPromptTemplate = document.querySelector('#new-item-prompt-template');
    let clone = itemPromptTemplate.content.cloneNode(true);
    itemDiv.appendChild(clone);

    const contentDiv = document.querySelector('.content');
    contentDiv.insertBefore(itemDiv, contentDiv.firstChild);
  };

  const discardNewItemPrompt = (e) => {
    const item = e.path[3];
    item.remove();
  };

  return {
    renderNewItem,
    showHideItemInfo,
    renderNewItemPrompt,
    remindNewItemPrompt,
    remindNewItemInput,
    discardNewItemPrompt,
  };
})();

export default domController;
