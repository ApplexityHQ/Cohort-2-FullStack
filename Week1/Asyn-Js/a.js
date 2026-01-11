const fs = require("fs");
// File System Module

fs.readFile("a.txt", "utf-8", function(err,data){
    console.log("data");
})

console.log("Hii Applexity");

let a = 0;
// takes very long, longer than the file read
for (let i = 0; i < 10000000000; i++){
    a++;
}

console.log("Hii applexity 2");