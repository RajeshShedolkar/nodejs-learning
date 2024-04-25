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

// displayResult(sum(3, sum(3, 4, displayResult)
sum(3, 4, displayResult)
