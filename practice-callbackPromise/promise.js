console.log("intial clg");
function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("one done");
      resolve();
    }, 4000);
  });
}
function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("two done");
      resolve();
    }, 3000);
  });
}
function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("three done");
      resolve();
    }, 1000);
  });
}
function fourth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fourth done");
      resolve();
    }, 3000);
  });
}
function fifth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fifth done");
      resolve();
    }, 2000);
  });
}
function six() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("six done");
      resolve();
    }, 1000);
  });
}
function seven() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("seven done");
      resolve();
    }, 1000);
  });
}

// one().then(two).then(three).then(fourth).then(fifth).then(six).then(seven);
(async () => {
  await one();
  await two();
  await three();
  await fourth();
  await fifth();
  await six();
  await seven();
})();
console.log("end clg");
