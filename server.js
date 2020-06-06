const express = require('express');
const http = require('http');
const socketio = require('socket.io');

var cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3100;

// Middleware
app.use(cors());

io.on('connection', (socket) => {
    console.log('we have a new connection!!');

    socket.on('sendMessage', ({user, message}, callback) => {
        console.log(`${user}, is sending ${message}`);
    });

    socket.on('disconnect', (user) => {
        console.log(`User has left!!`);
    });
});


// Start Server
server.listen(PORT, ()=> console.log(`Server has started on port ${PORT}`));