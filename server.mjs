import { createServer } from "net";

const PORT = 8124;
const server = createServer();

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
server.on("connection", function (socket) {
  console.log("A new connection has been established.");

  // The server can also receive data from the client by reading from its socket.
  socket.on("data", function (chunk) {
    console.log(`Data received from client: ${chunk.toString()}`);
    socket.write(chunk.toString().toUpperCase());
  });

  // When the client requests to end the TCP connection with the server, the server
  // ends the connection.
  socket.on("end", function () {
    console.log("Closing connection with the client");
  });

  // Don't forget to catch error, for your own sake.
  socket.on("error", function (error) {
    console.log(error);
  });
});

server.listen(PORT, () => {
  console.log("server bound");
});
