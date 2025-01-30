/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */

const word = "person";
const createLetterPyramid = (word) => {
  let pyramid = "";
  for (let i = 1; i <= word.length; i++) {
    let currentLine = word.slice(0, i);
    let spaces = " ".repeat(word.length - i);
    pyramid += spaces + currentLine + "\n";
  }

  console.log(pyramid);
};

createLetterPyramid(word);
