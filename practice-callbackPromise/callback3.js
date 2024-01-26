const first = (callback) => {
  setTimeout(() => {
    console.log("first done");
    callback();
  }, 3000);
};
const second = (callback) => {
  setTimeout(() => {
    console.log("second done");
    callback();
  }, 1000);
};
const third = (callback) => {
  setTimeout(() => {
    console.log("third done");
    callback();
  }, 2000);
};
const fourth = (callback) => {
  setTimeout(() => {
    console.log("fouth done");
    callback();
  }, 6000);
};
const fifth = () => {
  setTimeout(() => {
    console.log("fifth done");
  }, 1000);
};
first(() => {
  second(() => {
    third(() => {
      fourth(() => {
        fifth();
      });
    });
  });
});
