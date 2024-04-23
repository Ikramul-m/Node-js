const fs = require("fs");

fs.writeFile("read.txt", "today is awesome day :)", (err) => {
  console.log("file created");
  console.log(err);
});

fs.appendFile("read.txt", "\nsupport me plzz!!!", (err) => {
  console.log("tak complete");
});

fs.readFile("read.txt", "utf-8", (err, data) => {
  // for reading the file
  console.log(data);
});
