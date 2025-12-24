// Function
// do things with the input and retrun an output

// Functions let you
// 1. Abstract out logic in your program
// 2. Take arguments as an input
// 3. Return a value as an output
// 4. You can think of them as an independent program that is supposed to do something
//  given an input
// 5. Functions CAN take other functions as input - this will confuse you (callbacks)

// Let’s write some code -
// 1. Write a function that finds the sum of two numbers
// 2. Write another function that displays this result in a pretty format
// 3. Write another function that takes this sum and prints it in passive tense

function sum(a, b){
    return a + b;
}

let value = sum(3,4);
console.log(value);