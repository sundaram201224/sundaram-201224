//Write a JavaScript program to count the number of vowels in a given string.

function countVowels(Name) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let word of Name) {
        if (vowels.includes(word)) {
            count++;
        }
    }

    return count;
}

const inputWord = "JavaScript program to count the number of vowels in a given string.";
const vowelCount = countVowels(inputWord);

console.log(`The number of vowels in the string is: ${vowelCount}`);

//Method 2

function countVowels(string) {

    let lowerString = string.toLowerCase();//here this function helps to convert uppercase into lowercase ,because the vowels can't be count in uppercase.


    const vowels = ['a', 'e', 'i', 'o', 'u'];


    let count = 0;


    for (let characters of lowerString) {
        if (vowels.includes(characters)) {
            count++;
        }
    }

    return count;
}

let string = "Hello World";
let vowelCalculate = countVowels(string);
console.log(`Number of vowels in "SUNDARAM": ${vowelCount}`);