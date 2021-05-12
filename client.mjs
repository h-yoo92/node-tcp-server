import { Socket } from "net";

const HOST = "localhost";
const PORT = 8124;
const client = new Socket();

client.connect(PORT, HOST, function () {
  console.log("Connected");
  client.write("STOP_RECORD");
});

client.on("data", function (data) {
  console.log(`Received: ${data.toString()}`);
  client.destroy(); // kill client after server's response
});

client.on("close", function () {
  console.log("Connection closed");
});
