const fs = require('fs')
console.log("Hello world");

const p =  new Promise(function(callback){
    callback("foo")
});


console.log(p)
p.then(function(a){
    console.log("Inside a Promise", a)
})