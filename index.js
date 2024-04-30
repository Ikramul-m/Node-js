const http = require("http");
const fs = require("fs");

const PORT = 4000;
const hostName = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end(home);
  } else if (request.url === "/contact") {
    response.end("<h1>Contact</h1>");
  } else if (request.url === "/about") {
    response.end("<h1>About</h1>");
  } else {
    response.end("<h1>404 Page not found</h1>");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
