const http = require("http");

const PORT = 4000;
const hostName = "localhost";

const server = http.createServer((request, response) => {
  response.end("<h1>Hello world!!!</h1>");
});

server.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
