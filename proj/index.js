const http = require("http")
// const json = require('json')
const fs = require("fs")
const os = require("os")
const url = require("url")
const express = require("express")

const myHandler = (req, res)=>{
    // console.log(req)
    console.log("New req");
    // console.log("Total Cpus:", os.cpus().length);
    console.log(url.parse(req.url))
    if(url.parse(req.url).pathname==='/favicon.ico') return res.end("");
    fs.appendFile('test.txt', `Rajesh Shedolkar in file ${req.url}, ${req.method}\n`, (err, data)=>{
        console.log("File Write operation completed");
        switch(url.parse(req.url).pathname){
            case "/": res.end("HomePage");
            break
            case "/about": res.end("Rajesh Shedolkar");
            break
            default: res.end("404 not found");
            break
        }
    })
};


const app = express()

app.use((req, res, next) => {
    console.log("I am in middleware 1")
    next()
})

app.use((req, res, next)=>{
    console.log("I am in middleware 2");
    next()
})

app.get("/", (req, res)=>{
    res.end("Home Page by express.js")
});

app.get("/about", (req, res)=>{
    res.end("About Page by express.js ")
});

// const myServer = http.createServer(app);

// myServer.listen(8000, ()=>{
//     console.log("Server started");
// });

app.listen(8000, ()=>{
    console.log("Server started");
})
