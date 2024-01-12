function callbackFun() {
  console.log("callback function");
}
function higherOrderFun(cb) {
  console.log("higher order function");
  cb();
}
higherOrderFun(callbackFun);
