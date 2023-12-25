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
first(second, third);
" 🌟 ", "🌟  ", " 🌟";

a();
function a() {
  console.log("a is called ");
}

var b = function () {
  console.log("b is called ");
};
b();

var c = function cc() {
  console.log("cc called!");
  cc();
};
