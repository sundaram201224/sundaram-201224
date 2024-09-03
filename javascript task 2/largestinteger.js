//Write a JavaScript program to find the largest of three given integers.

//Method 1 has been written in the math format (formula):

function findLargest(number1, number2, number3) {

    return Math.max(number1, number2, number3);
}


const e = 5;
const f = 12;
const g = 9;

const largest = findLargest(e, f, g);
console.log("The largest number is: " + largest);

//Method 2 has been written in if condition:

function findHighest(number4, number5, number6) {
    if (number4 >= number5 && number1 >= number6) {
        return;
    } else if (number5 >= number4 && number5 >= number6) {
        return number5;
    } else {
        return number6;
    }
}


const a = 9;
const b = 10;
const c = 20;

const highest = findHighest(a, b, c);
console.log(`The highest number is ${highest}`);