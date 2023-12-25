// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3, 20, 30, 40, 0, 34];
const result = array1.includes(2);
console.log(result);

// search for bat
const pets = ["cat", "dogg", "bat"];
const result1 = pets.includes("dog");
const result2 = pets.includes("d");
console.log(result1);
console.log(result2);
