// register,sendWelcomeEmail,login,getUserData,displayUserData
//this senario our code running fine but network wait time can be different
function networkRequest() {
  let wait = 3000 + new Date().getTime();
  while (new Date() < wait) {}
}
const register = () => {
  networkRequest();
  console.log("1-registe done");
};

const sendWelcomeEmail = () => {
  networkRequest();
  console.log("2-send welcome email done");
};
const login = () => {
  console.log("3-login");
};
const getUserData = () => {
  networkRequest();
  console.log("4-get user data .");
};
const displayUserData = () => {
  console.log("5-display user data");
};
register();
sendWelcomeEmail();
login();
getUserData();
displayUserData();
console.log("other data is running");
