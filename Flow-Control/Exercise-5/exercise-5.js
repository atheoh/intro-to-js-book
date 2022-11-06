//return foo() ? 'bar' : qux();

// Refactoring the above statement using an if statement

if(foo()) {
  return 'bar';
}
else {
  return qux();
}