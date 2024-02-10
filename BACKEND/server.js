const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
var io = require('socket.io')(server, {
    cors:{
        origin: "*"
    }
});



app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));


io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('chat-message', (msg) => {
        console.log('Received message:', msg);
        socket.broadcast.emit('chat-message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});