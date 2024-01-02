function createEnum(values) {
  const enumObject = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
}

// { Up: 'Up', Down: 'Down', Left: 'Left', Right: 'Right' }
const result = createEnum(["Up", "Down", "Left", "Right"]);
console.log(result);
