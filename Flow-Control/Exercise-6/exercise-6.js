function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/* 
The output is 'Not Empty' even the though the array is empty, it is'nt falsy.
Thus, JS executes the first branch of the if statement. 
*/