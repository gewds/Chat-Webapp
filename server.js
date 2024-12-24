const express = require('express');
    const http = require('http');
    const socketIo = require('socket.io');
    const sqlite3 = require('sqlite3').verbose();

    const app = express();
    const server = http.createServer(app);
    const io = socketIo(server);

    // Middleware
    app.use(express.json());

    // Database setup
    let db = new sqlite3.Database(':memory:', (err) => {
      if (err) throw err;
      console.log('Connected to the in-memory SQLite database.');
    });

    // Socket.IO connection
    io.on('connection', (socket) => {
      console.log('New client connected');

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });

    server.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
