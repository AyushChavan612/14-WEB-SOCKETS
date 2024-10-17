const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const server = http.createServer(app); // Move this line before using 'server'
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

// Handle WebSocket connections
io.on('connection', (socket) => {
     // It means if u get any data by name user-message do this action
     socket.on("user-message" , (message) => {
          // io.emit means sending the data to evryone
          io.emit("message" , message);
     });
});

app.get("/", (req, res) => {
     return res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 9000;
server.listen(PORT, () => {
     console.log(`Server started at the port: ${PORT}`);
});
