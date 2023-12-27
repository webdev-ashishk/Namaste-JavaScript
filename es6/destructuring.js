// Here are 10 practice questions to help you master object destructuring:
// #1 Basic Destructuring:                                             ✅
// Use object destructuring to extract 'name' and 'age' into variables.
const person = {
  name1: "AshishK",
  age: 25,
  city: "New York",
};
const { name1, age } = person;
console.log(`#1 name is ${name1} and age is ${age}`);

// #2 Nested Destructuring:                                             ✅
// Use destructuring to extract 'name' and 'grade' into variables.
const student = {
  name: "Alice",
  info: {
    age: 20,
    grade: "A",
  },
};
const {
  name,
  info: { grade },
} = student;

console.log(`#2 name is ${name} and grade is ${grade}`);

// #3 Default Values:                                              ✅
// Use object destructuring to extract 'username' and 'password' with a default value of 'defaultPass'.
const user = { username: "jsdev", email: "jsdev@example.com" };
const { username, defaultPass = 10 } = user;
console.log(
  ` #3 username is ${username} and defaultpassword is ${defaultPass}`
);

// #4 Rest Operator:                                                 ✅
// Use object destructuring with the rest operator to extract 'brand' and the rest into a variable.
const car = { brand: "Toyota", model: "Camry", year: 2022, color: "blue" };
const { brand, ...rest } = car;
console.log(` #4 brand is ${brand} and rest is ${rest}`);

// #5 Alias Variables:                                             ✅
// Use object destructuring with alias variables to extract 'title' as 'bookTitle' and 'author' as 'bookAuthor'.
const book = { title: "The Catcher in the Rye", author: "J.D. Salinger" };
const { title: bookTitle } = book;
console.log(`#5 booktitle is ${bookTitle}`);
// #6 Destructuring in Function Parameters:                             ✅
// Use object destructuring in the function parameters to print the 'name' and 'age' of the person.
function printPersonDetails({ name1, age }) {
  console.log(`#6 name is ${name1} and age is ${age}`);
}
printPersonDetails(person);
//#7 Destructuring Arrays inside Objects:                            ✅
// Use object destructuring to extract the first and third elements of the 'numbers' array into variables.

const data = { id: 1, numbers: [2, 4, 6, 8] };
// const {
//   number: [first, , , fourth],
// } = data;
// console.log(`first is ${first} and fourth is ${fourth}`);
// #8 Ignore Unwanted Properties:
// Use object destructuring to extract 'name' and 'salary' while ignoring the 'position'.
const employee = { name: "Bob", position: "Developer", salary: 60000 };
const { name: n, salary: s } = employee;
console.log(`#8 name is ${n} and salary is ${s}`);

// #9 Destructuring with Functions Returning Objects:                  ✅
// Use object destructuring to extract 'username' and 'email' directly from the function result.
function getUser() {
  return { username: "AshishK", email: "ashishk@example.com" };
}
const { username: uname, email: gmail } = getUser();
console.log(` #9 username is ${uname} and email is ${gmail}`);

// #10 .Combining Destructuring with Spread Operator:                    ✅
// Use object destructuring and the spread operator to combine both objects into a single 'userInfo' object.
const personInfo = { name: "Mary", age: 30 };
const address = { city: "London", country: "UK" };
const userInfo = { ...personInfo, ...address };
console.log(`#10 userinfo is ${userInfo}`);
console.log(userInfo);
const person2 = {
  name: "Jesse",
  age: 30,
  address: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

displayMessage(person2);

function displayMessage({ address: { state } }) {
  const message = "I live in " + state + ".";
  console.log(`#11 message is ${message}`);
}
