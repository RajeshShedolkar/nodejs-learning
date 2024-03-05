const express = require('express')
const {Server} = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const port = 3000
const io = new Server(server, {
    cors: true
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

io.on("connection", (socket)=>{
    console.log(`user connected: ${socket.id}`);
    socket.on('chat message', (msg)=>{
        console.log("chat msg: ", msg);
        io.emit('chat message', msg);
    })
    socket.on("disconnect", ()=>{
        console.log("user disconnected");
    })
})

server.listen(port, ()=>{
    console.log(`server started at port ${port}`);
})

