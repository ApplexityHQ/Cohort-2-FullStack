// Promises:

// Just a wrapper around an async function.

const fs = require('fs')

// My own Async. function
function applexityReadFile (cb) {
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    })
}

// cb function to call 
function onDone(data) {
    console.log(data);
}

applexityReadFile(onDone);