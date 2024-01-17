console.log("initial commit");
function a(callback) {
  setTimeout(() => {
    console.log("a ✅");
    callback();
  }, 3000);
}
function b(callback) {
  setTimeout(() => {
    console.log("b ✅");
    callback();
  }, 1000);
}
function c(callback) {
  setTimeout(() => {
    console.log("c ✅");
    callback();
  }, 2000);
}
function d() {
  setTimeout(() => {
    console.log("d ✅");
  }, 0);
}
a(() => {
  b(() => {
    c(() => {
      d();
    });
  });
});

console.log("last commit");
