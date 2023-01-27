function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/*
Objects: 2 functions: hello, xyzzy.
         Object literal: { a: 1, b: 2, c: [3, 4, 5], d: {} }
                         {}
         Array: [3, 4, 5]

Variables: greeting, name, hello, xyzzy, foo, howdy

Object property names: a, b, c, d, 0, 1, 2 (array indexes)

Primitive values: ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace', 'a', 'b', 'c', 'd', '0', '1', '2' (array indexes)
                           


*/