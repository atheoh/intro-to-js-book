/*
The following code logs 1 to the console and executing the
foo function doesn't affect the output because the variable
that was initialized in that function is distinct from the one
on line 1 so the log function accesses the bar variable 
on line 9.
*/ 

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

