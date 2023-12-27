const uniqueNumber = new Set();
uniqueNumber.add(10);
uniqueNumber.add(20);
uniqueNumber.add(10);
uniqueNumber.add(20);
console.log(uniqueNumber);

// Question arr=[100,200,200,1000,100] remove dublicates form this
const arr = [100, 200, 300, 200, 400];
const uN = new Set(arr);
console.log(uN);
const arr1 = ["nitin", "anjuK", "nitin", "palak", "salu"];
const uArr1 = new Set(arr1);
console.log(uArr1);

// practice forEach method

arr.forEach((element) => {
  console.log(element);
});
console.log("foreach end ");
for (element of arr) {
  console.log(element);
}
