const fs = require("fs")
var readContent = "";
var filename = "f.txt"
fs.readFile(filename, 'utf-8', (err, content)=>{
    if(err){
        console.log(err);
    }else{
        console.log(content);
        readContent = content
        console.log("before: ", readContent);
        readContent = readContent.split(" ").filter(word => word !== '').join(" ")
        console.log("after: ", readContent);
        fs.writeFile("o.txt", readContent, (err)=>{
            console.log(err)
        })
    }
})

// fs.writeFile(filename, readContent, (err)=>{
//     console.log(err);
// })