function map(array, callback) {
  const storage = [];
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    storage.push(callback(currentValue, i, array));
  }
  return storage;
}

function mapper(currentValue, index, array) {
  return currentValue * 2;
}

export { map, mapper };
