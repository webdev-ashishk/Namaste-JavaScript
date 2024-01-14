// print 1 after 1 second print two after two second ..... till 6 number.
console.log("initial");
const print = () => {
  var i = 1;
  for (let i = 1; i <= 6; i++) {
    setTimeout(() => {
      console.log(`i value is ${i}`);
    }, i * 5000);
  }
};
print();
