//Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function checkPositiveNegative(a, b) {

    if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        return true;
    } else {
        return false;
    }
}


const positive1 = 5;
const negative2 = -3;

const answer = checkPositiveNegative(positive1, negative2);
console.log("One is positive and the other is negative: " + answer);