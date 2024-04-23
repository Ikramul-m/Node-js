const fs = require("fs");

fs.writeFile("read.txt", "today is awesome day :)", (err) => {
  console.log("file created");
  console.log(err);
});
