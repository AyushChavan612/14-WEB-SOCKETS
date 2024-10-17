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
    console.log('A user connected: ' + socket.id);
});

app.get("/", (req, res) => {
     return res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 9000;
server.listen(PORT, () => {
     console.log(`Server started at the port: ${PORT}`);
});
