// register,sendWelcomeEmail,login,getUserData,displayUserData
//this senario our code running fine but network wait time can be different

const register = () => {
  setTimeout(() => {
    console.log("1-registe done");
  }, 2000);
};

const sendWelcomeEmail = () => {
  setTimeout(() => {
    console.log("2-send Welcome Email done");
  }, 1000);
};
const login = () => {
  setTimeout(() => {
    console.log("3-login done");
  }, 1000);
};
const getUserData = () => {
  setTimeout(() => {
    console.log("4-getUserData done");
  }, 1000);
};
const displayUserData = () => {
  setTimeout(() => {
    console.log("5-displayUserData done");
  }, 1000);
};
register();
sendWelcomeEmail();
login();
getUserData();
displayUserData();
console.log("other data is running");
