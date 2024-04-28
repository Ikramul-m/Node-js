const fs = require("fs");

const a = "Hi everyone!";
const b = "\nHow are you";

fs.writeFile("./Sample.txt", a + b, () => {
  console.log("written");
});

console.log("I am first");
