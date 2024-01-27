try {
  const repo = prompt("hello world");
  if (repo === 100) throw new Error("try block pass");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("finally block exectured!@@@@");
}
const important = "important works are here! 🙋";
console.log(important);
