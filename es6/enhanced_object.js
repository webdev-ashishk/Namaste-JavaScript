// <!-- enhanced object literals -->

const friend = (name, branch, location) => {
  return {
    name,
    branch,
    location,
  };
};

console.table(friend("rajnath", "ece", "bhopal"));
