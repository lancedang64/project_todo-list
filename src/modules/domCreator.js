const domCreator = (() => {
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

  return {getItem};
})();   

export default domCreator;
