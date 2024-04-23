const fs = require("fs");

const buf_data = fs.readFileSync("Read.txt");

// console.log(buf_data);

org_data = buf_data.toString();
console.log(org_data);

// <Buffer 57 6c 65 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 20 49 6b 72 61 6d 20 54 65 63 68 6e 69 63 61 6c>
