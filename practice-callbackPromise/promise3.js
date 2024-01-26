console.log("first commit");
const first = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first done");
      resolve();
    }, 3000);
  });
};
const second = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("second done");
    }, 1000);
    resolve();
  });
};
const third = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("third done");
      resolve();
    }, 2000);
  });
};
const fourth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fouth done");
      resolve();
    }, 6000);
  });
};
const fifth = () => {
  setTimeout(() => {
    console.log("fifth done without a promise");
  }, 1000);
};
const six = () => {
  setTimeout(() => {
    console.log("six done without a promise");
  }, 1000);
};
// first().then(second).then(third).then(fourth).then(fifth).then(six);

const callFun = async () => {
  await first();
  await second();
  await third();
  await fourth();
  await fifth();
  await six();
};
callFun();

console.log("last commit");
