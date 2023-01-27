let bar = () => {
  return 'Welcome', 3.1415, [1, 2, 3]; 
}

function foo(bar) {
  console.log(bar());
}

foo(() => {return 'Welcome';});    // Should print 'Welcome'
foo(() => {return 3.1415;});    // Should print 3.1415
foo(() => {return [1, 2, 3];});    // Should print [1, 2, 3]