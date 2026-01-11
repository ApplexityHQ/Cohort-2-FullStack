// under the hood Async-Await still uses promises, 
// under the hood promises still use callbacks.

// Promisified syntax of a funtion

// function applexityAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         // do some async logic here
//         resolve("hi there from resolve.");
//     })
//     return p;
// }
// function main() {
//     applexityAsyncFunction().then(function(value) {
//         console.log(value);
//     });
// }
// main();


// AsyncAwait Syntax
function applexityAsyncFunction() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        resolve("Hi there from asyncAwait syntax");
    });
    return p;
}
async function main() {
    const value = await applexityAsyncFunction();
    console.log(value);
}
main();