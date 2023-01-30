function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/* The above function takes a string as an argument, it then splits the string
wherever there is a single space and returns an array with substrings which is then 
reversed using the reverse() method which returns the reference to the same array.
After that the map method returns a new array containing the lengths of the 
reversed substrings.
*/