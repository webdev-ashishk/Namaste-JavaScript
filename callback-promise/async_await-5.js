const register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1-registe done");
      resolve();
    }, 2000);
  });
};
const sendWelcomeEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2-send Welcome Email done");
      resolve();
    }, 1000);
  });
};
const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3-login done");
      resolve();
    }, 4000);
  });
};
const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4-getUserData done");
      resolve();
    }, 2000);
  });
};
const displayUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("5-displayUserData done");
      resolve();
    }, 1000);
  });
};

(async () => {
  await register();
  await sendWelcomeEmail();
  await login();
  await getUserData();
  await displayUserData();
})();

console.log("other data is running");
