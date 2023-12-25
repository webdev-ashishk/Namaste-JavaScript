// try {
//   console.log(age);
// } catch (error) {
//   console.log(error); //best
//   console.log("error name  " + error.name);
//   console.log("error message   " + error.message);
// }

// const important_work = "this is important work";
// console.log(important_work);

try {
  const name = prompt("are you robot ?");
  if (name === "y") {
    throw new Error("this is my curstom error ");
  }
} catch (error) {
  console.log("this is original error" + error);
}

const important_work = "this is most important work DONE ✅";
console.log(important_work);
