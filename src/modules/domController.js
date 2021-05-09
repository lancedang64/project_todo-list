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

  const highlightPrompt = () => {
    const banner = document.querySelector('.item-banner--editing');
    const info = document.querySelector('.item-info--editing');
    banner.style.backgroundColor = '#23CE6B';
    info.style.backgroundColor = '#23CE6B';
    setTimeout(() => {
      banner.style.backgroundColor = 'white';
      info.style.backgroundColor = 'white';
    }, 200);
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

  return { getItem, showHideItemInfo, renderNewItemPrompt, highlightPrompt };
})();

export default domController;
