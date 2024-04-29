// const path = require("path");

// const a = path.extname("C: Users ikram Desktop Lessons Nodejs  index.js");
// const b = path.basename("C: Users ikram Desktop Lessons Nodejs  index.js");
// const c = path.dirname("C: Users ikram Desktop Lessons Nodejs  index.js");

// console.log(a);
// console.log(b);
// console.log(c);

// const pokemon = require("pokemon");

// // console.log(pokemon.all());
// console.log(pokemon.random());

const htpp = require('http')

const server = htpp.createServer((request,response) => {
    response.end("working...")
})

server.listen(4000,'localhost',() => {
    console.log('Server is working on http://localhost:4000')
})