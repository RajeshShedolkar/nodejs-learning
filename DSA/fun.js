function sum(a, b, fnTocall){
    let ans = a + b;
    fnTocall(ans);
}

function displayResult(data){
    console.log("Sum is " + data) 
}

function displayResultPassive(){
    console.log("P Sum is " + data)
}

function printData(data){
    console.log(data)
}
function mul(a, b, fnTocall){
    let ans = a * b;
    fnTocall(ans);
}


// displayResult(sum(3, sum(3, 4, displayResult)
sum(3, 4, displayResult);
mul(3, 4, printData);
