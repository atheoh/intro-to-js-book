let multiply = (num1, num2) => {
  return num1 * num2;
}

let rlSync = require('readline-sync');
let firstNumber = parseFloat(rlSync.question("Enter the first number: "));
let secondNumber = parseFloat(rlSync.question("Enter the second number: "));

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

