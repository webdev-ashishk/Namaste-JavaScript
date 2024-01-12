const register = (callback) => {
  setTimeout(() => {
    console.log("1-registe done");
    callback();
  }, 2000);
};
const sendWelcomeEmail = (callback) => {
  setTimeout(() => {
    console.log("2-send Welcome Email done");
    callback();
  }, 1000);
};
const login = (callback) => {
  setTimeout(() => {
    console.log("3-login done");
    callback();
  }, 4000);
};
const getUserData = (callback) => {
  setTimeout(() => {
    console.log("4-getUserData done");
    callback();
  }, 2000);
};
const displayUserData = () => {
  setTimeout(() => {
    console.log("5-displayUserData done");
  }, 1000);
};

register(() => {
  sendWelcomeEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData();
      });
    });
  });
});
console.log("other data is running");
