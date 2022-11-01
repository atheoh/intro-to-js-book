const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* 
The above program will not produce an error because the constant 
that was initialized between the brackets has block scope and 
does not interfere with the value of the constant on line 1. Each
constant is stored in a different place of memory so the log function
logs the constant on line 1 which has global scope. 
*/