//Q1.sum of two number ?✅
function sumOfTwoNumber(a, b) {
  return a + b;
}
// console.log(sumOfTwoNumber(10, 20));
// Q2.Write a JavaScript program to find the maximum number in an array.✅

const arrayValue = [100, 20000, 3, 30, 40, 50, 60, 2, 1];
function sortArray(arr) {
  const result = arr.sort((a, b) => {
    return a - b;
  });
  const lastValue = result.length - 1;
  const firstValue = result[0];
  // console.log(result);
  // console.log(
  //   `first value is ${firstValue} and last value is ${result[lastValue]}`
  // );
}
sortArray(arrayValue);

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).✅

const str = "2392";

function checkPalindrome(str) {
  const cut = str.split("").reverse().join("");
  const result = cut === str ? "yes" : "no";
  // console.log(result);
}
checkPalindrome(str);

// 4.Write a JavaScript program to reverse a given string. ✅❤️

const value = "2010";
const reverseString = (str) => {
  const reverse = str.split("").reverse().join("");
  return reverse;
};

const result = reverseString(value);
// console.log(result);

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.  ✅🌟
const number = [11, 2, 37, 40, 50, 13, 17, 23, 300, 1700, 1];

function evenNumber(number) {
  const evenNumber = number.filter((element) => element % 2 === 0);
  return evenNumber;
}
// console.log(evenNumber(number));


// 6. Write a JavaScript program to calculate the factorial of a given number.

