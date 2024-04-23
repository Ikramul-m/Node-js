const fs = require("fs");

// fs.mkdirSync('Thapa')

fs.writeFileSync(
  "Bio.txt",
  "Name: Thapa\nAge: 24\nProfession: Engineer\nDepartment: Computer Science & Engineering"
);

fs.appendFileSync("Bio.txt", "\nHe is very helpfull");

const data = fs.readFileSync("Bio.txt","utf8"); // utf8 without Buffer
console.log(data);

fs.renameSync("Bio.txt","Biodata.txt") // Rename th txt file from Bio to Biodata