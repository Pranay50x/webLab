const http = require("http");
const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/") res.end("Hello world");
  else if (path === "/contact-us") {
    res.end("Contact Us Page");
  } else if (path === "/about-us") {
    res.end("About us Page");
  } else res.end("erorr bruh");
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
