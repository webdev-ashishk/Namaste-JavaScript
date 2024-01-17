console.log("initial commit");
function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a ✅");
      resolve();
    }, 3000);
  });
}
function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("b ✅");
      resolve();
    }, 1000);
  });
}
function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c ✅");
      resolve();
    }, 2000);
  });
}
function d() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d ✅");
      resolve();
    }, 0);
  });
}
// a().then(b).then(c).then(d);
(async () => {
  await a();
  await b();
  await c();
  await d();
})();
console.log("last commit");
