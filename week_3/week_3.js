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

function magic8ball() {
  const question = prompt("Do you want to go home?");
  console.log(question);
  const randomNum = Math.floor(Math.random() * 8 + 1);
  let answer;
  switch (randomNum) {
    case 1:
      return "Yes definately";
      break;
    case 2:
      return "It is certain";
      break;
    case 3:
      return "Reply hazy, try agian";
      break;
    case 4:
      return "Ask agin later";
      break;
    case 5:
      return "Better not to tell you";
      break;
    case 6:
      return "My source say no";
      break;
    case 7:
      return "Outlook not so good";
      break;
    case 8:
      return "Sign point  say yes";
      break;
  }
}
console.log(magic8ball());
