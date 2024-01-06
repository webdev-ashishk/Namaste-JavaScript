// calculate max value of two number;

function maxValueOfTwo(a, ...b) {
  const filter = Math.max(a, ...b);
  console.log("maxValueOFTWo no is", filter);
}
maxValueOfTwo(100, 20, 30, 40, 50);

// 2. Write a JavaScript program to find the maximum number in an array. ?
var arr = [100, 2000, 400, 5000, 300];
function maxValueOfArray(arr1) {
  function compare(a, b) {
    return a - b;
  }
  let sortArr = arr1.sort(compare);
  const last = sortArr.length - 1;
  console.log("sorted array", sortArr);
  console.log("min value of array is ", sortArr[0]);
  console.log("max value of array is ", sortArr[last]);
}
maxValueOfArray(arr);

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
//step1: slice a string
// step2 : reverse a string
// step3 : compare to strings!

let str1 = "1001";
const origin = str1.split("");
const reverse = origin.reverse().join("");
console.log(reverse);
console.log(str1);
const result = str1 === reverse ? "pailymdrom" : "not pailymdrome";
console.log("question 3 is : ", result);
