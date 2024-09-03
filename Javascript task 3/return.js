//Write a JavaScript program to compute the sum of the two given integers.
//If the sum is in the range 50..80 return 65 otherwise return 80.

function calculateTheSum(a, b) {

    let add = a + b;


    if (add >= 50 && add <= 80) {
        return 65;
    } else {
        return 80;
    }
}


let result1 = calculateTheSum(30, 20);
let result2 = calculateTheSum(50, 10);
let result3 = calculateTheSum(10, 5);

console.log(result1); 
console.log(result2); 
console.log(result3); 