function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/* 
  The above code will not log anything to the console 
  because when the function is called it ends on the line 
  of the return statement so the log function on the next 
  line does not run.
*/