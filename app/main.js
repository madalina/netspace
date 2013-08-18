// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});

  response.end("<html><h1 style = 'text-align: center'><code>Welcome to my lair. I ain't got cookies, sorry.</code></h1>\
  <h2 style='text-align: center'><code>-madalina</code></h2>\
  </html>");
});

var port = process.env.PORT != undefined ? process.env.PORT : 8080;
server.listen(port);

// Put a friendly message on the terminal
console.log("Node Server running at " +  port);
