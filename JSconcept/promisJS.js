/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(cb){
        setTimeout(function(){
            cb(t)
        }, t)
    })
}

function wait2(t) {
    return new Promise(function(cb){
        setTimeout(function(){
            cb(t)
        }, t)
    })
}

function wait3(t) {
    return new Promise(function(cb){
        setTimeout(function (){
            cb(t)
        }, t)
    })
}

function cb(t){
    console.log("Time T: ", t);
}

function calculateTime(t1, t2, t3) {
    wait1(t1).then(cb)
    wait2(t2).then(cb)
    wait3(t3).then(cb)
}
var t1 = 1000;
var t2 = 2000;
var t3 = 3000;
calculateTime(t1, t2, t3)
module.exports = calculateTime;