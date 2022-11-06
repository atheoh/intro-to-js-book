let allCaps = aString => {
  if(aString.length > 10) {
    return aString.toUpperCase();
  }
  else {
    return aString;
  }
}

console.log(allCaps('abcdefghijk'));
console.log(allCaps('abcdefghij'));

console.log(' ');

let ternaryAllCaps = aString => {

  return (aString.length > 10 ? aString.toUpperCase() : aString);
} 

console.log(ternaryAllCaps('abcdefghijk'));
console.log(ternaryAllCaps('abcdefghij'));