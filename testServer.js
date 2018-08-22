// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT = 7000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
    let randomNumber = Math.random();
    if (randomNumber > .5) {
        response.end("Greater than .5 " + request.url + randomNumber);
    } else {
        response.end("Less than .5 " + request.url + randomNumber);
    }
  // Send the below string to the client when the user visits the PORT URL
  response.end("You did great! " + request.url + randomNumber);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  //connection.end();
});


// Second Port - 7500
const PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You did awful! " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
  //connection.end();
});

