// simple function
// function applexityAsyncFunction (callback) {
//     setTimeout(callback, 2000);
// }
// applexityAsyncFunction(function() {
//     console.log("hey!");
// });

// intimidating async function (promisified of above version)
function applexityAsyncFunction() {
    let p = new Promise (function(resolve) {
        setTimeout(resolve, 2000);
    })
    return p;
}

const value = applexityAsyncFunction();
value.then(function() {
    console.log("hii there");
})