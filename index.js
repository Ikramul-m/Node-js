const http = require("http");

const PORT = 4000;
const hostName = "localhost";

const server = http.createServer((request, response) => {
  response.end("Working");
});

server.listen(PORT, hostName, () => {
  console.log("Server is working on http://localhost:4000");
});
