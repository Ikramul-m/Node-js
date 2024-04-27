const path = require("path");

console.log(path.dirname("C:\ Users\ ikram\ Desktop\ Lessons\ Nodejs\ Path\ Path.js"));
console.log(path.basename("C:\ Users\ ikram\ Desktop\ Lessons\ Nodejs\ Path\ Path.js"));
console.log(path.extname("C:\ Users\ ikram\ Desktop\ Lessons\ Nodejs\ Path\ Path.js"));

console.log(path.parse("C:\ Users\ ikram\ Desktop\ Lessons\ Nodejs\ Path\ Path.js"))

const myPath = path.parse("C:\ Users\ ikram\ Desktop\ Lessons\ Nodejs\ Path\ Path.js")
console.log(myPath.name)
console.log(myPath.dir)
console.log(myPath.ext)
console.log(myPath.base)