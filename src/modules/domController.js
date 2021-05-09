const domController = (() => {
  const getItem = (item) => {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item');

    itemDiv.innerHTML = `
            <input type="checkbox">
            <span> ${item.name} </span>
            <span>Due ${item.dueDate}</span>
            <button>...</button>`;

    return itemDiv;
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
    const item = document.createElement('div');
    item.className = 'item';
    //set item unique ID

    const itemTemplate = document.querySelector('#new-item-prompt-template');
    let clone = itemTemplate.content.cloneNode(true);
    item.appendChild(clone);

    const contentDiv = document.querySelector('.content');
    contentDiv.insertBefore(item, contentDiv.firstChild);
  };

  const discardNewItemPrompt = (e) => {
    const item = e.path[3];
    item.remove();
  };

  return {
    getItem,
    showHideItemInfo,
    renderNewItemPrompt,
    remindNewItemPrompt,
    remindNewItemInput,
    discardNewItemPrompt,
  };
})();

export default domController;
