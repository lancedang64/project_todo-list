const localStorageController = (() => {
  const update = (itemsArray) => {
    const allItems = JSON.stringify(itemsArray);
    localStorage.setItem('allItems', allItems);
  };

  const getItems = () => {
    const allItems = localStorage.getItem('allItems');
    const itemsArray = JSON.parse(allItems);
    return itemsArray;
  };

  return { update, getItems }
})();

export default localStorageController
