//Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
//Return true if one or more of them are in the specified range.

//Method 1

const isInLimit = number => number >= 50 && number <= 99;


const checkLimit = (a, b, c) => isInLimit(a) || isInLimit(b) || isInLimit(c);


const value1 = 45;
const value2 = 60;
const value3 = 100;

const result = checkLimit(value1, value2, value3);
console.log(result);

//Method 2

function isInRange(a, b, c) {
    return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
}


console.log(isInRange(45, 40, 100));
console.log(isInRange(49, 70, 101));
console.log(isInRange(30, 40, 20)); 