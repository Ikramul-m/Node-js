const fs = require("fs");

fs.mkdir("Thapa", (err) => {
  console.log("Created...");
  //   console.log(err);
});

fs.writeFile(
  "./Thapa/Bio.txt",
  "Name: Binod Thapa\nAge: 24\nProfession: Youtuber",
  (err) => {
    console.log("File Created...");
  }
);

fs.appendFile(
  "./Thapa/Bio.txt",
  "\nHe helped ma a lot...\nHe is avery good guy...",
  (err) => {
    console.log("More data added...");
    // console.log(err);
  }
);

fs.readFile("./Thapa/Bio.txt", "utf-8", (err, data) => {
  console.log("File readed...");
  console.log(data);
});

fs.rename("./Thapa/Bio.txt", "./Thapa/myBio.txt", (err) => {
  console.log("renamed...");
});

fs.unlink("./Thapa/myBio.txt", (unlinkerr) => {
  console.log("File deleted...");
});

fs.rmdir("Thapa", (err) => {
  console.log("Folder deleted...");
});
