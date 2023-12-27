const myPromise = new Promise((resolve, reject) => {
  console.log("my promise is created");
  resolve("success");
  // reject("fa!lure");
});
console.log(myPromise);
