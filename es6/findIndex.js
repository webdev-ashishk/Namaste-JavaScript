// he findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const array1 = [200, 12, 8, 130, 44];
const passCondition = array1.findIndex((element) => element > 13);
const failCondition = array1.findIndex((element) => element === 1);
console.log(passCondition);
console.log(failCondition);

// practice for of loop in js
for (element of array1) {
  console.log("first", element);
}
