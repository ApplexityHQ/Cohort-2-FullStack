const fs = require('fs');

// promises were introduced to avoid callback hell
// my own async function

function applexityReadFile() {
    console.log("inside applexityReadFile");
    return new Promise (function(resolve){
        console.log("inside promises")
        fs.readFile("a.txt", "utf-8", function(err, data) {
            console.log("before resolve");
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data) {
    console.log(data);
}

applexityReadFile().then(onDone);

// Promises have 3 states:
// pending, resolved, rejected