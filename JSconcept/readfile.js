const fs = require("fs");
// console.log(fs)
fs.readFile("a.txt", 'utf8', (err, content)=>{
    if(err){
        console.log(err);
    }else{
        console.log(content);
    }
    
})

fs.readFile("a1.txt", 'utf8', (err, content)=>{
    if(err){
        console.log(err);
    }else{
        console.log(content);
    }
    
})
