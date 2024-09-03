//Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

function computeSum(a, b) {
    if (a === b) {
        return 3 * (a + b);  // triple their sum
    } else {
        return a + b;  // the regular sum
    }
}


const number1 = 5;
const number2 = 9;

const result = computeSum(number1, number2);
console.log("The result is: " + result);