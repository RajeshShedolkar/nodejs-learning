
/*
    Write a function that returns a promise that 
    resolves after n seconds have passed, where n is passed as an argument 
    to the function.
*/

function wait(n) {
    return new Promise(function(callback){
        setTimeout(callback, n)
    })
}

function testCallback(){
    console.log("I am callback function waits for n milli-seconds");
}

n=1000
w = wait(n)
w.then(testCallback)
module.exports = wait;
