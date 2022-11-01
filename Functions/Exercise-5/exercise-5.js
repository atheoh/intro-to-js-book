function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

/* 
The above code does not log anything to the console 
because the function that is being called does not invoke
a console.log function so we have to pass the invocation of
the scream function to the console.log function as an 
argument --> console.log(scream('Yipeee'));
*/

console.log(scream('Yipeee'));