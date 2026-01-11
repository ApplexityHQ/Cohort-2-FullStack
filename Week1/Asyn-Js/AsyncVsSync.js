// function findSum(n){
//     let ans = 0;
//     for (i=0; i<= n; i++){
//         ans += i; // ans + 1 = ans
//     }
//     return ans;
// }
// console.log(findSum(100));


// now introducing async. function for the above code. (setTimeout)

function findSum(n){
    let ans = 0;
    for (i=0; i<= n; i++){
        ans += i; // ans + i = ans
    }
    return ans;
}

// syncSleep

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100,2000); // calling findSumTill100 after 2 secs.
console.log("hey alien");

