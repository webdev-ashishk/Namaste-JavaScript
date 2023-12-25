function first(cb2, cb3) {
  console.log("first");
  cb2();
  cb3();
}
function second() {
  console.log("second");
}
function third() {
  console.log("third");
}
first(second, third);      🌟     🌟    🌟
