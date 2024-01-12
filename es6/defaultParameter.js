const multiplyTwoNumber = (a, b, c = 30) => {
  const result = a * b * c;
  console.log(`a is ${a} b is ${b} c is ${c} and result is ${result}`);
};

multiplyTwoNumber(10, 20, 3000);
