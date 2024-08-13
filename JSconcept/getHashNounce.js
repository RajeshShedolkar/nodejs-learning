const crypto = require("crypto")
var i = 1;
var flag = true;
let input = `
Rajesh => Banti | Rs 100
Rishit => Dipu | Rs 10
`
while (flag){
    var hash = crypto.createHash('sha256').update(input+i.toString()).digest("hex")
    if (hash.startsWith("00000")){
        console.log(hash , i)
        flag = false
    }
    i+=1
}