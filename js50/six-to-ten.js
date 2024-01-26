// 6. Write a JavaScript program to calculate the factorial of a given number.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
// console.log(factorial(5));

//❤️✅ 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

const str = "nitin";
function titleCase(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const remaining = string.slice(1, string.length);
  return firstLetter + remaining;
}
// console.log(titleCase(str));
