const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const io = new Server(server);

const server = http.createServer(app);
app.use(express.static(path.join(__dirname, "public")));

// socket is here a client , a socket is client we everyone  , it contains the information about that person
io.on('connection', (socket) => {
    console.log('a user connected :' + socket.id);
  });

app.get("/", (req, res) => {
     return res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 9000;
server.listen(PORT, () => {
     console.log(`Server started at the port: ${PORT}`);
});
