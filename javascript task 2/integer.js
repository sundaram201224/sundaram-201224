//Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
// Generate a random integer between 1 and 10.

const randomNumber = Math.floor(Math.random() * 10) + 1;


const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
//here is the  parseInt is used to chnage the string input into integer


if (userGuess === randomNumber) {
    alert("Good Work!");
} else {
    alert(`Not matched. The correct number was ${randomNumber}.`);
}