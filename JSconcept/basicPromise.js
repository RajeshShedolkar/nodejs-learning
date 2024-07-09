let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("There was an error.");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
