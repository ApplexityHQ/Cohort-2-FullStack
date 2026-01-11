var d = new Promise (function(resolve) {
    setTimeout(function() {
        resolve("foo"); 
    }, 1000)
})

function cb () {
    console.log(d);
}

console.log(d);
d.then(cb);

// output
// promise { <pending> }
// promise { 'foo' }