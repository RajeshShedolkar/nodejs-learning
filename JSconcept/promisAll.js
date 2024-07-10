let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved!");
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved!");
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved!");
    }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log(messages); // Output: [ 'Promise 1 resolved!', 'Promise 2 resolved!', 'Promise 3 resolved!' ]
}).catch((error) => {
    console.log(error);
});
