function filter(array, callback) {
  const storage = [];
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (callback(currentValue, i, array)) {
      storage.push(currentValue);
    }
  }
  return storage;
}

function predicate(currentValue, index, array) {
  return currentValue % 2 == 0;
}

export { filter, predicate };
