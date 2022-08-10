function flatMap(array, fn) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    var mapping = fn(array[i]);
    result = result.concat(mapping);
  }
  return result;
}

export { flatMap };
