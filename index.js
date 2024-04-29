const http = require("http");

const PORT = 4000;
const hostName = "localhost";

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Home page");
  }
  else if (request.url === "/about") {
    response.end("About Page");
  }
  else if (request.url === "/contact") {
    response.end("Contact Page");
  } 
  else {
    response.end(" <h1>404 Page not found</h1> ");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
