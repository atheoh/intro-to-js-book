let readLineSync = require('readline-sync');
let firstName = '';
let lastName = '';

let getFullName = () => { 
  let firstName = readLineSync.question("What's your first name? ");
  let lastName = readLineSync.question("What's your last name? ");

  return `${firstName} ${lastName}`;
}

let fullName = getFullName();

console.log(`Good Morning, ${fullName}.`);
console.log(`Good Afternoon, ${fullName}.`);
console.log(`Good Evening, ${fullName}.`);