// a.txt should be in the same location as async_file.js

const fs = require("fs")
fs.readFile("a.txt", "utf-8", function(err, data){
  console.log(data);
});
console.log("Hello World")
