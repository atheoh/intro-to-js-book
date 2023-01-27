let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {   
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);  

console.log(foo.a);// Logs 'hi', function call on line 13 reassigns the property 'a' of 'foo' to a new value
console.log(qux);  // Logs 'hello', function call on line 13 doesn't mutate the original variable 'qux' on line 6