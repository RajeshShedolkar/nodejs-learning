const fs = require("fs")

fs.writeFile("b.txt", "this is new file", (err)=>{
    if (err){
        console.log("Error", err)
    }else {
        console.log("written successful")
    }
} )