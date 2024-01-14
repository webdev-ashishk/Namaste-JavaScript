const first = (callback) => {
  console.log("first commit");
  callback();
};
const second = () => {
  console.log("second commit");
};
first(second);
