const localStorageController = (() => {
  const updateData = (name, array) => {
    const data = JSON.stringify(array);
    localStorage.setItem(name, data);
  };

  const getData = (name) => {
    const data = localStorage.getItem(name);
    return JSON.parse(data);  
  };

  return { updateData, getData }
})();

export default localStorageController;
