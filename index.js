const http = require("http");
const fs = require("fs");

const PORT = 4000;
const hostName = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");
const about = fs.readFileSync("./about.html", "utf-8");
const contact = fs.readFileSync("./contact.html","utf-8")

const server = http.createServer((request, response) => {
  if (request.url === "/")
  {
    return response.end(home);
  } 
  else if (request.url === "/contact")
  {
    return response.end(contact);
  } 
  else if (request.url === "/about")
  {
    return response.end(about);
  }
  else 
  {
    return response.end("<h1>404 Page not found</h1>");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
