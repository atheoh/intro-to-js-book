let foo = 'bar';

{
  let foo = 'qux';
}

console.log(foo);

/* 
The code above logs 'bar' to the console because it accesses the 
variable foo that was initialized on line 1 and which has global
scope while the variable foo which was initialized 
between the brackets, is different from the one on line 1 and out
of scope for the log function to access it.
*/