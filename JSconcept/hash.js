const crypto = require("crypto")
const input = "Hello World!!!"
const hash = crypto.createHash('sha256').update(input).digest("hex")
console.log(hash);
var i = 1;
var flag = true;
while (flag){
    var hash1 = crypto.createHash('sha256').update("100xdevs"+i.toString()).digest("hex")
    if (hash1.startsWith("00000")){
        console.log(hash1 , i)
        flag = false
    }
    i+=1
}