/*

Create a Magic 8 - Ball program that uses a switch statement to provide random answers based on a generated number.

Follow these steps:

Write a function named magic8Ball:
Useprompt() to ask the user for a "Yes or No" question.
Log the question to the console.
Generate a random number:
UseMath.random() to generate a random number between 1 and8.
UseMath.floor() to ensure the number is a whole number.
Use a switch statement:
Based on the random number(1 to8), return one of the following responses:
1: "Yes, definitely!"
2: "It is certain."
3: "Reply hazy, try again."
4: "Ask again later."
5: "Better not tell you now."
6: "My sources say no."
7: "Outlook not so good."
8: "Signs point to yes.";
Display the result:
Log the randomly selected answer to the console.
Show the answer in analert(). */

const magic8ball = randomNum(prompt("Enter Number"));

randomNum(Math.random(8));
switch (randomNum) {
  case 1:
    return "Yes definately";
  case 2:
    return " It is certain";
  case 3:
    return " Reply hazy, try agian";
  case 4:
    return "Ask agin later";
  case 5:
    return "Better not to tell you";
  case 6:
    return "My source say no";
  case 7:
    return " out look not so good";
  case 8:
    return "Sign point to say yes";
}
console.log(magic8ball(randomNum));

/*
const num = Math.random();
let num1 = num * 10;
console.log(num1);
let roundNum = Math.floor(num1);
console.log("Your random number is " + roundNum); */
