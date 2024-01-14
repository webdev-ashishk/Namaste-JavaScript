console.log("intial clg");
function one(callback) {
  setTimeout(() => {
    console.log("one done");
    callback();
  }, 4000);
}
function two(callback) {
  setTimeout(() => {
    console.log("two done");
    callback();
  }, 3000);
}
function three(callback) {
  setTimeout(() => {
    console.log("three done");
    callback();
  }, 1000);
}
function fourth(callback) {
  setTimeout(() => {
    console.log("fourth done");
    callback();
  }, 3000);
}
function fifth(callback) {
  setTimeout(() => {
    console.log("fifth done");
    callback();
  }, 2000);
}
function six(callback) {
  setTimeout(() => {
    console.log("six done");
    callback();
  }, 1000);
}
function seven() {
  setTimeout(() => {
    console.log("seven done");
  }, 1000);
}
one(() => {
  two(() => {
    three(() => {
      fourth(() => {
        fifth(function () {
          six(function () {
            seven();
          });
        });
      });
    });
  });
});

console.log("end clg");
