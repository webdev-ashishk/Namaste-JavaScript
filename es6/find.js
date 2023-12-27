// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const arr = [10, 20, 30, 40, 50];
const result1 = arr.find((element) => element > 30);
const result2 = arr.find((element) => element > 50);
console.log(result1); // 40
console.log(result2); // undefined

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 1 },
  { name: "cherries", quantity: -1 },
  { name: "cherries", quantity: 2 },
  { name: "cherries", quantity: 3 },
  { name: "cherries", quantity: 4 },
  { name: "cherries", quantity: 0 },
  { name: "cherries", quantity: 0 },
  { name: "cherries", quantity: 0 },
];
const moreThanTwoQuantity = inventory.find((element) => element.quantity > 2);
console.log(moreThanTwoQuantity);
