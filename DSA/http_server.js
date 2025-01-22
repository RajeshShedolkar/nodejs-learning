// Load the HTTP module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send a response
  res.end('Hello, welcome to my Node.js server!');
});

// Set the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
