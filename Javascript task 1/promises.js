// Write a function which receives a string, and returns a Promise.
// The promise should resolve with the uppercase version of the string, but should reject if the string is null.

function toUpperCasePromise(string) {
    return new Promise((resolve, reject) => {
        if (string === null) {
            reject(new Error("Input string is null"));
        } else {
            resolve(string.toUpperCase());
        }
    });
}

toUpperCasePromise("hello")
    .then(uppercaseString => console.log(uppercaseString)) //"hello"
    .catch(error => console.error(error.message));

toUpperCasePromise(null)
    .then(uppercaseString => console.log(uppercaseString))
    .catch(error => console.error(error.message)); //  "Input string is null"