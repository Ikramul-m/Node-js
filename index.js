const fs = require("fs");

const a = fs.readFileSync("Sample.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  //10000
  console.log(data);
});

console.log(a);

console.log("I am first");
