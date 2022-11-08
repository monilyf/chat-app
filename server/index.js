// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html');
// });

// server.listen(3000, ()=>{
//     console.log('Listening on *:3000');
// });

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);// initialize new instance of socket.io

app.get('/',(req,res)=>{
    console.log('req', req);
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', socket =>{
    console.log('a user is connected');
    
    socket.on('chat message:', (msg)=>{
        console.log('message: '+msg)
        io.emit('chat message:',msg);
    });
    socket.on('disconnect', () => {
        console.log('user a disconnected');
      })
});
// io.
server.listen(3000,()=>{
    console.log('Listening on *:3000');
});