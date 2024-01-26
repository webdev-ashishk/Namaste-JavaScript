try {
  const resp = prompt("check resp");
  if (resp === "resp") {
    console.log("resp printed");
  } else {
    console.log("error in response");
    throw new Error("❓ this is the custom error message ");
  }
} catch (error) {
  console.log(
    `error name is ${error.name} and error message is ${error.message}`
  );
} finally {
  console.log("this is finally block code!");
}
// try {
//   console.log(age);
// } catch (error) {
//   console.error(
//     `error name ${error.name} and error message is ${error.message}`
//   );
// }
// var str = "very important works are here !";
// console.log({ str });
